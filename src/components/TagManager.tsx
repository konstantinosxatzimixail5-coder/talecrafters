"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Google Tag Manager, loaded after the page is usable rather than in the head.
 *
 * It used to sit as an inline script in <head>. That injects gtm.js during the
 * critical path, and gtm.js then pulls in whatever tags the container holds,
 * all of it competing with hydration for the main thread. On the desktop audit
 * it was the single largest contributor to 920ms of total blocking time.
 *
 * Nothing about the container changes. The same id loads the same tags; it
 * just waits for the browser to go idle, or for the first thing the visitor
 * does, whichever lands first. A visitor who bounces in under two seconds was
 * never going to be measured usefully anyway.
 */
const GTM_ID = 'GTM-PKWLJBJL';

/** The longest we will wait for an idle moment that never comes. */
const FALLBACK_MS = 3500;

export function TagManager() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      setReady(true);
    };

    // Whichever comes first: the browser going idle, a hard timeout, or the
    // visitor touching anything at all. Older Safari has no
    // requestIdleCallback, so the timeout is the whole mechanism there. The
    // pair is read off a loose window rather than the DOM lib, which declares
    // both as always present.
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (h: number) => void;
    };

    const useIdle = typeof w.requestIdleCallback === 'function';
    const handle = useIdle
      ? w.requestIdleCallback!(go, { timeout: FALLBACK_MS })
      : window.setTimeout(go, FALLBACK_MS);

    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const;
    for (const e of events) window.addEventListener(e, go, { once: true, passive: true });

    return () => {
      if (useIdle) w.cancelIdleCallback?.(handle);
      else window.clearTimeout(handle);
      for (const e of events) window.removeEventListener(e, go);
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

export { GTM_ID };
