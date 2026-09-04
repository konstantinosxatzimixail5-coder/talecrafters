import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const projectId = 'xxfr3yxy';
export const dataset = 'production';
export const apiVersion = '2024-01-01';

/**
 * `useCdn` is off on purpose.
 *
 * Sanity's CDN holds a copy for up to a minute and there is no way to tell it
 * to let go, so with it on, a publish could not reach the site faster than the
 * CDN felt like allowing. Every read now goes through Next's data cache
 * instead (see src/sanity/read.ts), which does the same job, in front of the
 * same queries, and can be purged the instant Sanity says something changed.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
