// One place for the things that appear on every page and in every schema block.

export const SITE_URL = 'https://talecrafters.studio';

export const site = {
  name: 'TaleCrafters',
  legalName: 'TaleCrafters Ltd',
  url: SITE_URL,
  email: 'hello@talecrafters.studio',
  tagline: 'Not your grandma’s creative agency.',
  strapline: 'Storytellers Drunk on Synthetic Media.',
  description:
    'TaleCrafters is a synthetic media studio. We make films and campaigns, build the systems that produce and distribute them, and develop our own original IP.',
  address: {
    street: '71–75 Shelton Street, Covent Garden',
    city: 'London',
    postcode: 'WC2H 9JQ',
    country: 'GB',
  },
  founded: '2024',
  sameAs: [
    'https://www.linkedin.com/company/talecrafters-studio/',
    'https://www.instagram.com/talecrafters.studio/',
  ],
} as const;

/** Absolute URL for a path. Schema and canonicals both need one. */
export const abs = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
