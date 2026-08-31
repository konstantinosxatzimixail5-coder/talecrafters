import type { Metadata } from 'next';
import { site, abs, SITE_URL } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  keywords?: string[];
}

/**
 * Every page needs the same eight tags with three values changed. Doing it by
 * hand once per route is how a canonical ends up pointing at the home page on
 * four of them.
 */
export function pageMeta({
  title,
  description,
  path,
  image = '/brand/mark-square.png',
  type = 'website',
  publishedTime,
  keywords,
}: PageMetaInput): Metadata {
  const url = abs(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: 'en_GB',
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

// --- JSON-LD builders -------------------------------------------------------
// Everything below returns a plain object. The <JsonLd> component serialises it.

export const orgSchema = () => ({
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: abs('/brand/mark-square.png'), width: 1024, height: 1024 },
  description: site.description,
  email: site.email,
  foundingDate: site.founded,
  sameAs: [...site.sameAs],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  knowsAbout: [
    'Synthetic media production',
    'Generative video',
    'Creative direction',
    'Brand strategy',
    'Agentic workflows',
    'Content automation',
    'Narrative design',
  ],
});

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: site.name,
  description: site.description,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-GB',
});

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});

export const faqSchema = (qas: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: qas.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const serviceSchema = (s: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) => ({
  '@type': 'Service',
  name: s.name,
  description: s.description,
  serviceType: s.serviceType ?? s.name,
  url: abs(s.path),
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: ['GB', 'EU', 'US'],
});

export const caseStudySchema = (w: {
  title: string;
  client: string;
  year: string;
  slug: string;
  summary: string;
  image?: string;
}) => ({
  '@type': 'CreativeWork',
  name: `${w.client} — ${w.title}`,
  headline: w.title,
  abstract: w.summary,
  url: abs(`/work/${w.slug}`),
  dateCreated: w.year,
  creator: { '@id': `${SITE_URL}/#organization` },
  ...(w.image ? { image: abs(w.image) } : {}),
});

export const definedTermSchema = (t: {
  term: string;
  slug: string;
  short: string;
  tags: string[];
}) => ({
  '@type': 'DefinedTerm',
  '@id': abs(`/glossary/${t.slug}/#term`),
  name: t.term,
  description: t.short,
  url: abs(`/glossary/${t.slug}`),
  inDefinedTermSet: { '@id': `${SITE_URL}/glossary/#set` },
  termCode: t.slug,
  ...(t.tags.length ? { keywords: t.tags.join(', ') } : {}),
});

export const howToSchema = (h: {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string }[];
}) => ({
  '@type': 'HowTo',
  name: h.name,
  description: h.description,
  url: abs(h.path),
  step: h.steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});
