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
  founded: '2024',
  // sameAs is an identity claim, so only profiles that verifiably exist belong
  // here. A URL that 404s is worse for entity resolution than an absent one.
  // Add YouTube, Instagram, X, Crunchbase and Companies House as they are
  // confirmed, and keep the wording on each of them matching this file.
  sameAs: ['https://www.linkedin.com/company/talecrafterss/'],
} as const;

/** Absolute URL for a path. Schema and canonicals both need one. */
export const abs = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
