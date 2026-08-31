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
 * The founder, once there is a name to publish. Left empty on purpose: an
 * invented `founder` node is worse than an absent one, because an entity graph
 * that asserts a person who does not resolve anywhere is a claim a search
 * engine has to discount rather than a fact it can corroborate.
 *
 * Filling this in lights up three things at once: `Organization.founder`, the
 * `/authors/<slug>` page and `author` plus `author.url` on every article that
 * names them.
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

export const people: PersonEntity[] = [];

export const getPerson = (slug: string) => people.find((p) => p.slug === slug);
export const founders = () => people.filter((p) => p.founder);

/** Absolute URL for a path. Schema and canonicals both need one. */
export const abs = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
