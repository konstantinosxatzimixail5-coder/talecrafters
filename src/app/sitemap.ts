import type { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { SITE_URL } from '@/lib/site';
import { work } from '@/data/work';
import { pipelines } from '@/data/pipelines';
import { terms, GLOSSARY_TAGS } from '@/data/glossary';
import { resources } from '@/data/resources';

type Entry = MetadataRoute.Sitemap[number];

const page = (
  path: string,
  priority: number,
  changeFrequency: Entry['changeFrequency'] = 'monthly',
  lastModified: Date = new Date()
): Entry => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority });

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    page('', 1, 'weekly'),
    page('/work', 0.9, 'weekly'),
    page('/arsenal', 0.9, 'monthly'),
    page('/systems', 0.9, 'monthly'),
    page('/create', 0.8, 'monthly'),
    page('/originals', 0.7, 'monthly'),
    page('/concept-projects', 0.8, 'monthly'),
    page('/pipelines', 0.8, 'monthly'),
    page('/writing', 0.7, 'monthly'),
    page('/armoury', 0.8, 'monthly'),
    page('/glossary', 0.8, 'weekly'),
    page('/packages', 0.7, 'monthly'),
    page('/faq', 0.7, 'monthly'),
    page('/contact', 0.7, 'monthly'),
    page('/blog', 0.8, 'daily'),
    page('/privacy', 0.2, 'yearly'),
    page('/terms', 0.2, 'yearly'),
  ];

  const generated: MetadataRoute.Sitemap = [
    ...work.map((w) => page(`/work/${w.slug}`, 0.8, 'monthly')),
    ...pipelines.map((p) => page(`/pipelines/${p.slug}`, 0.7, 'monthly')),
    ...resources.map((r) => page(`/armoury/${r.slug}`, 0.7, 'monthly')),
    ...terms.map((t) => page(`/glossary/${t.slug}`, 0.6, 'monthly')),
    ...GLOSSARY_TAGS.map((t) => page(`/glossary/tag/${t}`, 0.5, 'monthly')),
  ];

  // The blog lives in Sanity. A dataset that is unreachable at build time
  // should cost us the post URLs, not the entire sitemap.
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<{ slug: string; publishedAt: string }[]>(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { "slug": slug.current, publishedAt }`
    );
    blogPages = posts.map((p) =>
      page(`/blog/${p.slug}`, 0.6, 'weekly', new Date(p.publishedAt))
    );
  } catch {
    blogPages = [];
  }

  return [...staticPages, ...generated, ...blogPages];
}
