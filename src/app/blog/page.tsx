import { client, urlFor } from '@/sanity/client';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — TaleCrafters | Thoughts on Synthetic Media & Storytelling',
  description: 'Dispatches from the frontlines of synthetic media, storytelling, and creative chaos. Insights, rants, and the occasional manifesto.',
  openGraph: {
    title: 'Blog — TaleCrafters',
    description: 'Dispatches from the frontlines of synthetic media, storytelling, and creative chaos.',
    url: 'https://talecrafters.studio/blog',
    siteName: 'TaleCrafters',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — TaleCrafters',
    description: 'Dispatches from the frontlines of synthetic media, storytelling, and creative chaos.',
  },
  alternates: { canonical: 'https://talecrafters.studio/blog' },
};

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  featuredImage?: any;
  tags?: string[];
  author?: string;
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, featuredImage, tags, author
    }`
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div
      style={{
        backgroundColor: 'var(--brand-black)',
        color: 'var(--brand-white)',
        fontFamily: 'var(--font-body)',
        minHeight: '100vh',
      }}
    >
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
          THOUGHTS, UNFILTERED<span style={{ color: 'var(--brand-magenta)' }}>.</span>
        </h1>
        <p
          className="text-lg max-w-2xl"
          style={{ color: 'var(--brand-concrete-light)' }}
        >
          Unfiltered opinions on creativity, technology, and why most brands are terrified of being interesting.
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
                key={post._id}
                href={`/blog/${post.slug.current}`}
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
                  {post.featuredImage && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={urlFor(post.featuredImage).width(600).height(338).url()}
                        alt={post.featuredImage.alt || post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.tags && post.tags.length > 0 && (
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
                        {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
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
