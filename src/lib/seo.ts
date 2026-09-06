import type { Metadata } from 'next';
import { site, abs, SITE_URL, markets, people, founders } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  /** Set false on a page that should not claim the secondary markets. */
  international?: boolean;
}

/**
 * One set of hreflang alternates for every page.
 *
 * The site is written once, in English. These alternates do not promise a
 * translation; they say the same English document is the intended one for
 * readers in each market, which is what stops Google treating the UK page as
 * irrelevant to a searcher in Athens. Every URL is identical on purpose, and
 * `x-default` points at the same place so nothing is orphaned.
 *
 * Self-referencing matters: `en-GB` has to be in the set alongside the others
 * or the cluster is invalid and gets ignored wholesale.
 */
export const hreflangFor = (path: string): Record<string, string> => {
  const url = abs(path);
  const alternates: Record<string, string> = { 'x-default': url, en: url };
  for (const m of markets) alternates[m.hreflang] = url;
  return alternates;
};

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
  modifiedTime,
  keywords,
  international = true,
}: PageMetaInput): Metadata {
  const url = abs(path);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      ...(international ? { languages: hreflangFor(path) } : {}),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: 'en_GB',
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
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
      areaServed: markets.map((m) => m.code),
      availableLanguage: ['English'],
    },
  ],
  // Driven off the market list so a country cannot be claimed in the hreflang
  // set and quietly missing from the entity graph.
  areaServed: [
    ...markets.map((m) => ({ '@type': 'Country', name: m.name })),
    { '@type': 'Place', name: 'Europe' },
  ],
  // The work is delivered remotely, so the service area is wider than the
  // registered address and has to say so explicitly.
  serviceArea: markets.map((m) => ({ '@type': 'Country', name: m.name })),
  // Only asserted once there is a real person to assert. See `people` in
  // site.ts: an unresolvable founder node is worse than no founder node.
  ...(founders().length
    ? { founder: founders().map((f) => ({ '@id': abs(`/authors/${f.slug}/#person`) })) }
    : {}),
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
  /**
   * Named deliverables, rendered as an offer catalogue.
   *
   * `priceFrom` is a floor, not a price, so it is emitted as `minPrice` on a
   * UnitPriceSpecification rather than as `price`. Only set it where the same
   * number is visible on the page: markup that quotes a figure the reader
   * cannot see is a claim nobody agreed to.
   */
  offers?: { name: string; detail?: string; priceFrom?: number; unit?: string }[];
  image?: string;
  /**
   * ISO country code for a page that targets one market. Narrows `areaServed`
   * to that country so a market page is not diluted by the global list.
   */
  market?: string;
}) => ({
  '@type': 'Service',
  '@id': `${abs(s.path)}#service`,
  name: s.name,
  description: s.description,
  serviceType: s.serviceType ?? s.name,
  url: abs(s.path),
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: s.market
    ? [
        {
          '@type': 'Country',
          name: markets.find((m) => m.code === s.market)?.name ?? s.market,
          identifier: s.market,
        },
      ]
    : markets.map((m) => ({ '@type': 'Country', name: m.name })),
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: abs(s.path),
    servicePhone: undefined,
    availableLanguage: ['English'],
  },
  ...(s.image ? { image: imageObjectSchema({ url: s.image, caption: s.name }) } : {}),
  ...(s.offers?.length
    ? {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${s.name} deliverables`,
          itemListElement: s.offers.map((o) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: o.name,
              ...(o.detail ? { description: o.detail } : {}),
            },
            ...(o.priceFrom
              ? {
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    minPrice: o.priceFrom,
                    priceCurrency: 'EUR',
                    ...(o.unit ? { unitText: o.unit } : {}),
                  },
                }
              : {}),
          })),
        },
      }
    : {}),
});

/**
 * An ImageObject rather than a bare URL string.
 *
 * A URL tells a crawler where the file is. An ImageObject tells it what the
 * picture shows, how big it is and who may use it, which is what makes an
 * image eligible to be surfaced on its own rather than only as a thumbnail
 * hanging off the page that happens to contain it.
 */
export const imageObjectSchema = (i: {
  url: string;
  caption?: string;
  width?: number;
  height?: number;
  /** Where the licence terms live. Omitted when there is nothing to point at. */
  license?: string;
}) => ({
  '@type': 'ImageObject',
  '@id': `${i.url.startsWith('http') ? i.url : abs(i.url)}#image`,
  url: i.url.startsWith('http') ? i.url : abs(i.url),
  contentUrl: i.url.startsWith('http') ? i.url : abs(i.url),
  ...(i.caption ? { caption: i.caption, name: i.caption } : {}),
  ...(i.width ? { width: i.width } : {}),
  ...(i.height ? { height: i.height } : {}),
  creator: { '@id': `${SITE_URL}/#organization` },
  copyrightNotice: `© ${site.legalName}`,
  creditText: site.name,
  ...(i.license ? { license: abs(i.license), acquireLicensePage: abs(i.license) } : {}),
});

/**
 * A VideoObject for a piece of work that has a moving image behind it.
 *
 * `thumbnailUrl` and one of `uploadDate` / `duration` are what Google actually
 * requires; everything else is what makes the node worth having. `duration` is
 * ISO 8601, so ninety seconds is PT1M30S.
 */
export const videoObjectSchema = (v: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  /** ISO 8601 duration, e.g. PT1M30S. */
  duration?: string;
  /** A direct .mp4 or equivalent. */
  contentUrl?: string;
  /** A player page (YouTube, Vimeo). */
  embedUrl?: string;
  /** The page the video sits on. */
  path?: string;
  regionsAllowed?: string[];
}) => ({
  '@type': 'VideoObject',
  ...(v.path ? { '@id': `${abs(v.path)}#video` } : {}),
  name: v.name,
  description: v.description,
  thumbnailUrl: [v.thumbnailUrl.startsWith('http') ? v.thumbnailUrl : abs(v.thumbnailUrl)],
  uploadDate: v.uploadDate,
  ...(v.duration ? { duration: v.duration } : {}),
  ...(v.contentUrl ? { contentUrl: v.contentUrl.startsWith('http') ? v.contentUrl : abs(v.contentUrl) } : {}),
  ...(v.embedUrl ? { embedUrl: v.embedUrl } : {}),
  ...(v.path ? { url: abs(v.path) } : {}),
  publisher: { '@id': `${SITE_URL}/#organization` },
  creator: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-GB',
  isFamilyFriendly: true,
  ...(v.regionsAllowed?.length ? { regionsAllowed: v.regionsAllowed } : {}),
});

/**
 * A Person node for an author page. Referenced by `@id` from every article
 * they wrote, so the byline resolves to an entity rather than a string.
 */
export const personSchema = (p: {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  image?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  founder?: boolean;
}) => ({
  '@type': 'Person',
  '@id': abs(`/authors/${p.slug}/#person`),
  name: p.name,
  url: abs(`/authors/${p.slug}`),
  jobTitle: p.jobTitle,
  description: p.bio,
  worksFor: { '@id': `${SITE_URL}/#organization` },
  ...(p.founder ? { founderOf: { '@id': `${SITE_URL}/#organization` } } : {}),
  ...(p.image ? { image: imageObjectSchema({ url: p.image, caption: p.name }) } : {}),
  ...(p.sameAs?.length ? { sameAs: p.sameAs } : {}),
  ...(p.knowsAbout?.length ? { knowsAbout: p.knowsAbout } : {}),
});

/** The wrapper node for the author index. */
export const profilePageSchema = (p: { slug: string; name: string }) => ({
  '@type': 'ProfilePage',
  '@id': abs(`/authors/${p.slug}/#page`),
  url: abs(`/authors/${p.slug}`),
  name: `${p.name} — TaleCrafters`,
  mainEntity: { '@id': abs(`/authors/${p.slug}/#person`) },
  inLanguage: 'en-GB',
});

export const caseStudySchema = (w: {
  title: string;
  client: string;
  year: string;
  slug: string;
  summary: string;
  image?: string;
  genre?: string;
  keywords?: string[];
  /** A VideoObject built with `videoObjectSchema`, when the case has a film. */
  video?: Record<string, unknown>;
}) => ({
  '@type': 'CreativeWork',
  '@id': abs(`/work/${w.slug}/#work`),
  name: `${w.client} — ${w.title}`,
  headline: w.title,
  abstract: w.summary,
  description: w.summary,
  url: abs(`/work/${w.slug}`),
  dateCreated: w.year,
  copyrightYear: Number(w.year) || undefined,
  creator: { '@id': `${SITE_URL}/#organization` },
  producer: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-GB',
  ...(w.client ? { sourceOrganization: { '@type': 'Organization', name: w.client } } : {}),
  ...(w.genre ? { genre: w.genre } : {}),
  ...(w.keywords?.length ? { keywords: w.keywords.join(', ') } : {}),
  ...(w.image
    ? { image: imageObjectSchema({ url: w.image, caption: `${w.client}: ${w.title}` }) }
    : {}),
  ...(w.video ? { video: w.video } : {}),
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

/**
 * Resolve a byline string to an author node.
 *
 * A bare `{name: "..."}` Person is a dead end: nothing links it to anything, so
 * it cannot accrue any authority. If the name matches somebody with an author
 * page, the article points at that page's Person node by `@id` and carries a
 * `url` a crawler can follow. Otherwise the studio itself is the author, which
 * is both true and resolvable.
 */
const authorNode = (name?: string) => {
  if (!name || name === site.name || name === site.legalName) {
    return { '@id': `${SITE_URL}/#organization` };
  }
  const match = people.find((p) => p.name.toLowerCase() === name.toLowerCase());
  if (match) {
    return {
      '@type': 'Person',
      '@id': abs(`/authors/${match.slug}/#person`),
      name: match.name,
      url: abs(`/authors/${match.slug}`),
    };
  }
  // A named human with no page still gets a `url`, pointed at the studio, so
  // the node resolves somewhere rather than dangling.
  return { '@type': 'Person', name, url: abs('/studio-team') };
};

export const articleSchema = (a: {
  title: string;
  description: string;
  slug: string;
  published: string;
  modified?: string;
  author?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  /** Editorial section, e.g. "Production". Feeds `articleSection`. */
  section?: string;
  wordCount?: number;
  /** Set for a how-to or explainer that is not a dated dispatch. */
  type?: 'BlogPosting' | 'Article' | 'TechArticle';
  /** Named entities the piece is about, as glossary URLs. */
  mentions?: string[];
}) => ({
  '@type': a.type ?? 'BlogPosting',
  '@id': abs(`/blog/${a.slug}/#article`),
  headline: a.title.slice(0, 110), // Google truncates past ~110 characters
  name: a.title,
  description: a.description,
  abstract: a.description,
  url: abs(`/blog/${a.slug}`),
  datePublished: a.published,
  dateModified: a.modified ?? a.published,
  author: authorNode(a.author),
  publisher: { '@id': `${SITE_URL}/#organization` },
  isPartOf: { '@id': `${SITE_URL}/blog/#blog` },
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(`/blog/${a.slug}`) },
  inLanguage: 'en-GB',
  isAccessibleForFree: true,
  copyrightHolder: { '@id': `${SITE_URL}/#organization` },
  copyrightYear: Number(a.published.slice(0, 4)) || undefined,
  ...(a.image
    ? { image: [imageObjectSchema({ url: a.image, caption: a.imageAlt ?? a.title, width: 1536, height: 864 })] }
    : {}),
  ...(a.section ? { articleSection: a.section } : {}),
  ...(a.wordCount ? { wordCount: a.wordCount } : {}),
  ...(a.tags?.length ? { keywords: a.tags.join(', ') } : {}),
  ...(a.mentions?.length
    ? { mentions: a.mentions.map((slug) => ({ '@id': abs(`/glossary/${slug}/#term`) })) }
    : {}),
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
