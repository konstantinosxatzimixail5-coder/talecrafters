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
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: site.name,
  legalName: site.legalName,
  // The trading name people search for, distinct from the registered entity.
  alternateName: [...new Set([site.alternateName, site.legalName])],
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: abs('/brand/mark-square.png'), width: 1024, height: 1024 },
  image: abs('/brand/mark-square.png'),
  // The literal classification, not the strapline. This is the sentence a
  // search engine uses to work out what kind of company this is.
  description: site.classification,
  slogan: site.strapline,
  email: site.email,
  foundingDate: site.founded,
  sameAs: [...site.sameAs],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: 'England',
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: site.email,
      url: abs('/contact'),
      areaServed: ['GB', 'EU', 'US'],
      availableLanguage: ['English', 'Greek'],
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Place', name: 'Europe' },
    { '@type': 'Country', name: 'United States' },
  ],
  knowsAbout: [
    'Synthetic media production',
    'Generative video production',
    'AI video production',
    'Creative direction',
    'Brand strategy',
    'Agentic workflows',
    'Creative automation',
    'Content infrastructure',
    'Narrative design',
    'Synthetic UGC',
    'AI product photography',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Generative film, advertising and motion' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creative strategy, storytelling and IP' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentic workflows, automation and content infrastructure' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Websites, digital experiences and brand design' } },
  ],
});

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  // `name` is what Google uses for the site name in results, so it stays the
  // short form people actually type.
  name: site.name,
  alternateName: [site.alternateName, site.legalName],
  description: site.classification,
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

export const articleSchema = (a: {
  title: string;
  description: string;
  slug: string;
  published: string;
  modified?: string;
  author?: string;
  image?: string;
  tags?: string[];
}) => ({
  '@type': 'BlogPosting',
  '@id': abs(`/blog/${a.slug}/#article`),
  headline: a.title.slice(0, 110), // Google truncates past ~110 characters
  description: a.description,
  url: abs(`/blog/${a.slug}`),
  datePublished: a.published,
  dateModified: a.modified ?? a.published,
  author: a.author && a.author !== 'TaleCrafters'
    ? { '@type': 'Person', name: a.author }
    : { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  isPartOf: { '@id': `${SITE_URL}/blog/#blog` },
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(`/blog/${a.slug}`) },
  inLanguage: 'en-GB',
  ...(a.image ? { image: [a.image] } : {}),
  ...(a.tags?.length ? { keywords: a.tags.join(', ') } : {}),
});

export const blogSchema = (posts: { title: string; slug: string; published: string }[]) => ({
  '@type': 'Blog',
  '@id': `${SITE_URL}/blog/#blog`,
  url: abs('/blog'),
  name: 'The TaleCrafters Blog',
  description:
    'Dispatches on synthetic media production, generative video, creative systems and the craft behind them.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-GB',
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    '@id': abs(`/blog/${p.slug}/#article`),
    headline: p.title.slice(0, 110),
    url: abs(`/blog/${p.slug}`),
    datePublished: p.published,
  })),
});
