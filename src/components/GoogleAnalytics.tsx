"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasOptionalCookieConsent } from "@/components/CookieConsent";

const GA_MEASUREMENT_ID = "G-909BCS9305";

type CookieConsentEvent = CustomEvent<{
  status: "accepted" | "rejected";
}>;

export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasOptionalCookieConsent());

    const handleConsent = (event: Event) => {
      const { status } = (event as CookieConsentEvent).detail;
      setEnabled(status === "accepted");
    };

    window.addEventListener("cookie-consent", handleConsent);

    return () => {
      window.removeEventListener("cookie-consent", handleConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
