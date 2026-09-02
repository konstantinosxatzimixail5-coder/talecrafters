import type { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { SITE_URL } from '@/lib/site';


import { GLOSSARY_TAGS } from '@/data/glossary';




import { people } from '@/lib/site';
import {
  getWork, getPipelines, getTerms, getResources, getSolutions, getPosts, getFilms,
} from '@/content/collections';

type Entry = MetadataRoute.Sitemap[number];

const page = (
  path: string,
  priority: number,
  changeFrequency: Entry['changeFrequency'] = 'monthly',
  lastModified: Date = new Date()
): Entry => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority });

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Read from the same place the pages do, so a case study or a post added in
  // the Studio is in the sitemap rather than absent until the next deploy.
  const [work, pipelines, terms, resources, solutions, localPosts, films] = await Promise.all([
    getWork(), getPipelines(), getTerms(), getResources(), getSolutions(), getPosts(), getFilms(),
  ]);
  const staticPages: MetadataRoute.Sitemap = [
    page('', 1, 'weekly'),
    page('/work', 0.9, 'weekly'),
    // Search-intent pages sit at the root and rank for the words buyers type.
    ...solutions.map((s) => page(`/${s.slug}`, 0.9, 'monthly')),
    page('/arsenal', 0.9, 'monthly'),
    page('/systems', 0.9, 'monthly'),
    page('/create', 0.8, 'monthly'),
    page('/originals', 0.7, 'monthly'),
    page('/concept-projects', 0.85, 'monthly'),
    page('/captures', 0.8, 'monthly'),
    page('/films', 0.85, 'monthly'),
    ...films.map((f) => page(`/films/${f.slug}`, 0.8, 'monthly')),
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
    ...resources.map((r) => page(`/armoury/${r.slug}`, 0.75, 'monthly')),
    ...resources.filter((r) => r.pdf).map((r) => page(r.pdf!, 0.5, 'yearly')),
    ...terms.map((t) => page(`/glossary/${t.slug}`, 0.6, 'monthly')),
    ...GLOSSARY_TAGS.map((t) => page(`/glossary/tag/${t}`, 0.5, 'monthly')),
    // Repo-native posts. These have a real lastModified rather than "now",
    // which is the whole reason a hand-maintained sitemap is worth having.
    ...localPosts.map((p) =>
      page(`/blog/${p.slug}`, 0.7, 'monthly', new Date(p.modified ?? p.published))
    ),
    // Empty until somebody is on an author page, and the index 404s until then,
    // so it must not appear in the sitemap before that.
    ...(people.length ? [page('/authors', 0.5, 'monthly')] : []),
    ...people.map((p) => page(`/authors/${p.slug}`, 0.5, 'monthly')),
  ];

  // The blog lives in Sanity. A dataset that is unreachable at build time
  // should cost us the post URLs, not the entire sitemap.
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<{ slug: string; publishedAt: string }[]>(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { "slug": slug.current, publishedAt }`
    );
    // A repo slug wins a collision, so the CMS never emits a duplicate URL.
    const localSlugs = new Set(localPosts.map((p) => p.slug));
    blogPages = posts
      .filter((p) => !localSlugs.has(p.slug))
      .map((p) => page(`/blog/${p.slug}`, 0.6, 'weekly', new Date(p.publishedAt)));
  } catch {
    blogPages = [];
  }

  return [...staticPages, ...generated, ...blogPages];
}
