import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const projectId = 'xxfr3yxy';
export const dataset = 'production';
export const apiVersion = '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
