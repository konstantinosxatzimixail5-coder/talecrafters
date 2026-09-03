// One place for the things that appear on every page and in every schema block.

export const SITE_URL = 'https://talecrafters.studio';

export const site = {
  name: 'TaleCrafters',
  legalName: 'TaleCrafters Ltd',
  url: SITE_URL,
  email: 'hello@talecrafters.studio',
  tagline: 'Not your grandma’s creative agency.',
  strapline: 'Storytellers Drunk on Synthetic Media.',
  /** The boring, literal version. Search engines and answer engines classify a
   *  company from a sentence like this; humans remember the strapline. Both go
   *  on the page. */
  classification:
    'TaleCrafters is a London-based synthetic media and creative systems studio producing generative films, campaigns, visual worlds and automated creative systems for brands.',
  alternateName: 'TaleCrafters Studio',
  description:
    'TaleCrafters is a London-based synthetic media and creative systems studio. We produce generative films, campaigns and visual worlds, build the automated creative systems that make and distribute them, and develop our own original IP.',
  address: {
    street: '71–75 Shelton Street, Covent Garden',
    city: 'London',
    postcode: 'WC2H 9JQ',
    country: 'GB',
  },
  founded: '2023',
  // sameAs is an identity claim, so only profiles that verifiably exist belong
  // here. A URL that 404s is worse for entity resolution than an absent one.
  // Add YouTube, Instagram, X, Crunchbase and Companies House as they are
  // confirmed, and keep the wording on each of them matching this file.
  sameAs: ['https://www.linkedin.com/company/talecrafterss/'],
} as const;

/**
 * Markets the studio actually sells into, in one place, because the same list
 * has to appear in `areaServed`, in the hreflang set and in the market pages.
 * Two of them drifting apart is how a country quietly stops being claimed.
 *
 * `hreflang` is the language-region tag for the alternate. The site is written
 * in one language, so every entry is an English variant pointing at the same
 * URL: that is what tells a search engine the page is meant for readers in
 * that country without inventing a translation that does not exist.
 */
export const markets = [
  { code: 'GB', name: 'United Kingdom', hreflang: 'en-GB', primary: true },
  { code: 'GR', name: 'Greece', hreflang: 'en-GR', primary: false },
  { code: 'IE', name: 'Ireland', hreflang: 'en-IE', primary: false },
  { code: 'CY', name: 'Cyprus', hreflang: 'en-CY', primary: false },
  { code: 'US', name: 'United States', hreflang: 'en-US', primary: false },
] as const;

/**
 * The people whose names go on the work.
 *
 * One entry here lights up four things at once: `Organization.founder`, the
 * `/authors/<slug>` page, the byline card at the foot of every article, and
 * `author` plus `author.url` on the Article node, so a byline resolves to an
 * entity a crawler can follow instead of dangling as a string.
 */
export interface PersonEntity {
  slug: string;
  name: string;
  jobTitle: string;
  /** One or two sentences. Becomes the author-page lede and the Person description. */
  bio: string;
  /** Longer body for the author page. Optional. */
  body?: string[];
  image?: string;
  sameAs?: string[];
  /** Marks the person as a founder of the studio. */
  founder?: boolean;
  knowsAbout?: string[];
}

export const people: PersonEntity[] = [
  {
    slug: 'konstantinos-chatzimichail',
    name: 'Konstantinos Chatzimichail',
    jobTitle: 'Founder and Creative Director, TaleCrafters',
    founder: true,
    bio: 'Founder of TaleCrafters. Writes the pipelines the studio works to, directs the films that come out of them, and publishes both.',
    body: [
      'Konstantinos founded TaleCrafters to make one argument: generative production is a craft discipline with gates, not a prompt box with a lucky day. Everything on this site is written against that. A case study says what the problem was, what got made, what shipped, and which test each frame had to pass before it went in.',
      'He directs the studio’s client work across brand film, synthetic photography, creator-style video and the content systems that keep the run going after the first cut lands. Recent engagements include a restaurant on Rhodes photographed from angles the camera never reached, four films for a Horizon Europe cyber-security consortium built entirely from a grant document, and a paid-social programme where every piece had to look like it came from a different production company.',
      'He also writes the studio’s reference material: the pipeline sheets, the glossary, and the posts on this blog. The posts carry his byline because someone should be accountable for the claims in them.',
    ],
    knowsAbout: [
      'Generative video production',
      'Synthetic media',
      'AI product photography',
      'Creative automation',
      'Brand film direction',
      'Narrative engineering',
    ],
  },
];

/** The byline the studio publishes under. Named once so a post, the Studio
 *  default and the schema cannot drift into three spellings of one person. */
export const BYLINE = people[0].name;

export const getPerson = (slug: string) => people.find((p) => p.slug === slug);
export const founders = () => people.filter((p) => p.founder);

/** Absolute URL for a path. Schema and canonicals both need one. */
export const abs = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
