import { client, urlFor } from '@/sanity/client';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { blogSchema, breadcrumbSchema, pageMeta } from '@/lib/seo';
import { posts as localPosts, readingMinutes } from '@/data/posts';

export const metadata: Metadata = pageMeta({
  title: 'Blog — Synthetic Media Production, Costs, Compliance and Craft',
  description:
    'Working notes from a synthetic media studio: what generative production costs, how to keep a product consistent across a hundred shots, what has to be disclosed, and where creative automation actually saves a week.',
  path: '/blog',
  keywords: [
    'synthetic media blog',
    'generative video production',
    'AI video production costs',
    'creative automation',
    'AI advertising disclosure',
    'AI video craft',
  ],
});

export const revalidate = 60;

interface CmsPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  featuredImage?: any;
  tags?: string[];
  author?: string;
}

/**
 * One card shape, two sources. The index does not care where a post came from,
 * so normalising here keeps the branch out of the markup.
 */
interface Card {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  published: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  /** Present on repo-native posts, which know their own length. */
  minutes?: number;
}

// An unreachable dataset costs us the CMS cards, not the page.
async function getCmsPosts(): Promise<CmsPost[]> {
  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id, title, slug, excerpt, publishedAt, featuredImage, tags, author
      }`
    );
  } catch {
    return [];
  }
}

async function getCards(): Promise<Card[]> {
  const cms = await getCmsPosts();
  const localSlugs = new Set(localPosts.map((p) => p.slug));

  const cards: Card[] = [
    ...localPosts.map((p) => ({
      id: p.slug,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      published: p.published,
      tags: p.tags,
      image: `/img/blog/${p.image}-960.webp`,
      imageAlt: p.imageAlt,
      minutes: readingMinutes(p),
    })),
    // A repo slug wins a collision, so the CMS cannot shadow a reviewed file.
    ...cms
      .filter((p) => p.slug?.current && !localSlugs.has(p.slug.current))
      .map((p) => ({
        id: p._id,
        title: p.title,
        slug: p.slug.current,
        excerpt: p.excerpt,
        published: p.publishedAt,
        tags: p.tags ?? [],
        image: p.featuredImage ? urlFor(p.featuredImage).width(600).height(338).url() : undefined,
        imageAlt: p.featuredImage?.alt ?? p.title,
      })),
  ];

  return cards.sort((a, b) => b.published.localeCompare(a.published));
}

export default async function BlogPage() {
  const posts = await getCards();

  return (
    <div
      style={{
        backgroundColor: 'var(--brand-black)',
        color: 'var(--brand-white)',
        fontFamily: 'var(--font-body)',
        minHeight: '100vh',
      }}
    >
      <JsonLd
        graph={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
          blogSchema(
            posts.map((p) => ({
              title: p.title,
              slug: p.slug,
              published: p.published,
            }))
          ),
        ]}
      />

      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
        >
          &larr; Back to home
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12" style={{ backgroundColor: 'var(--brand-magenta)' }} />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}
          >
            The Blog
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl tracking-tighter mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          THOUGHTS, <span style={{ color: 'var(--brand-cyan)' }}>UNFILTERED</span><span style={{ color: 'var(--brand-magenta)' }}>.</span>
        </h1>
        <p
          className="text-lg max-w-2xl"
          style={{ color: 'var(--brand-concrete-light)' }}
        >
          What generative production actually costs, how to keep a product consistent across a hundred shots,
          what has to be disclosed, and where creative automation saves a week. Working notes rather than
          thought leadership.
        </p>
      </div>

      {/* Posts grid */}
      <div className="px-6 md:px-16 lg:px-24 pb-24">
        {posts.length === 0 ? (
          <div
            className="text-center py-20"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
          >
            <p className="text-xl mb-2">No posts yet.</p>
            <p className="text-sm">The stories are brewing. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block transition-transform duration-300 hover:-translate-y-1"
                style={{ textDecoration: 'none' }}
              >
                <article
                  className="h-full overflow-hidden"
                  style={{
                    border: '1px solid var(--brand-concrete)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {post.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt ?? ''}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.tags.length > 0 && (
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] tracking-wider px-2 py-0.5"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--brand-cyan)',
                              border: '1px solid rgba(0,229,204,0.3)',
                            }}
                          >
                            {tag.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2
                      className="text-xl tracking-tight mb-2 transition-colors group-hover:text-[var(--brand-cyan)]"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                    >
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p
                        className="text-sm mb-4 line-clamp-3"
                        style={{ color: 'var(--brand-concrete-light)', lineHeight: 1.6 }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                      >
                        {new Date(post.published).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                        {post.minutes ? ` · ${post.minutes} min` : ''}
                      </span>
                      <span
                        className="text-sm transition-colors group-hover:text-[var(--brand-magenta)]"
                        style={{ color: 'var(--brand-concrete-light)' }}
                      >
                        &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
