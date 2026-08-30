import { SITE_URL } from '@/lib/site';

/**
 * Everything on a page goes into one @graph rather than five separate script
 * tags. Google reads either, but a single graph lets nodes reference each other
 * by @id, so the Organization is declared once and pointed at everywhere else.
 */
export function JsonLd({ graph }: { graph: Record<string, unknown>[] }) {
  const payload = {
    '@context': 'https://schema.org',
    '@graph': graph.map((n) => ({ '@id': undefined, ...n })),
  };
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own data files, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, '\\u003c') }}
    />
  );
}

export { SITE_URL };
