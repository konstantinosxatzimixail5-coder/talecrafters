import { client, urlFor } from '@/sanity/client';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema, breadcrumbSchema, pageMeta } from '@/lib/seo';
import { LocalPostArticle } from '@/components/LocalPostArticle';
import { posts, getPost as getRepoPost } from '@/data/posts';
import { getPosts } from '@/content/collections';
import { postHeroAt } from '@/lib/blog-images';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body: any[];
  excerpt?: string;
  publishedAt: string;
  featuredImage?: any;
  tags?: string[];
  author?: string;
  metaTitle?: string;
  metaDescription?: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id, title, slug, body, excerpt, publishedAt, featuredImage, tags, author, metaTitle, metaDescription
      }`,
      { slug }
    );
  } catch {
    return null;
  }
}

/**
 * Two sources, one route.
 *
 * Posts written into the repo always pre-render. Posts in Sanity pre-render
 * when the dataset is reachable at build time and render on demand when it is
 * not, so an unreachable CMS costs us those pages rather than the whole deploy.
 * A repo slug wins a collision: the file is the reviewable version.
 */
export async function generateStaticParams() {
  const local = posts.map((p) => ({ slug: p.slug }));
  try {
    const cms = await client.fetch<{ slug: string }[]>(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
    );
    const seen = new Set(local.map((p) => p.slug));
    return [...local, ...cms.filter((p) => !seen.has(p.slug)).map((p) => ({ slug: p.slug }))];
  } catch {
    return local;
  }
}


/**
 * The post behind a slug, dataset first.
 *
 * `getRepoPost` reads src/data/posts, which is the copy committed to this
 * repository and has no hero upload on it, because an upload only exists in
 * the dataset. Resolving from the repo meant a hero added in the Studio was
 * never on the object the template was handed, whatever the template did with
 * it. `getPosts` returns the dataset's version when there is one and the
 * repository's when there is not.
 */
async function resolvePost(slug: string) {
  return (await getPosts()).find((p) => p.slug === slug) ?? getRepoPost(slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const local = await resolvePost(slug);
  if (local) {
    return pageMeta({
      title: local.metaTitle ?? local.title,
      description: local.metaDescription,
      path: `/blog/${local.slug}`,
      ...(postHeroAt(local.image, local.heroUpload as never, 1600)
        ? { image: postHeroAt(local.image, local.heroUpload as never, 1600) }
        : {}),
      type: 'article',
      publishedTime: local.published,
      modifiedTime: local.modified ?? local.published,
      keywords: local.keywords,
    });
  }

  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || `${post.title}: TaleCrafters Blog`;
  const imageUrl = post.featuredImage ? urlFor(post.featuredImage).width(1200).height(630).url() : undefined;
  const url = `https://talecrafters.studio/blog/${post.slug.current}`;

  return {
    title: `${title}: TaleCrafters Blog`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'TaleCrafters',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author || 'TaleCrafters'],
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.featuredImage?.alt || post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    alternates: { canonical: url },
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(900).url()}
            alt={value.alt || ''}
            className="w-full rounded-sm"
            style={{ border: '1px solid var(--brand-concrete)' }}
          />
          {value.alt && (
            <figcaption
              className="text-xs mt-2 text-center"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
            >
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--brand-cyan)', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => (
      <code
        className="px-1.5 py-0.5 text-sm rounded"
        style={{ backgroundColor: 'rgba(0,229,204,0.1)', fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
      >
        {children}
      </code>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2
        className="text-3xl md:text-4xl tracking-tighter mt-12 mb-4"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-cyan)' }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3
        className="text-2xl tracking-tight mt-8 mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-cyan)' }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4
        className="text-xl tracking-tight mt-6 mb-2"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-cyan)' }}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        className="my-8 pl-6 py-3"
        style={{
          borderLeft: '4px solid var(--brand-magenta)',
          color: '#E0E0E0',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          lineHeight: 1.7,
        }}
      >
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-5" style={{ color: '#D9D9D9', fontSize: '1.08rem', lineHeight: 1.8 }}>
        {children}
      </p>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const local = await resolvePost(slug);
  if (local) return <LocalPostArticle post={local} />;

  const post = await getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug.current}` },
  ];

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
          breadcrumbSchema(crumbs),
          articleSchema({
            title: post.title,
            description: post.excerpt || post.metaDescription || '',
            slug: post.slug.current,
            published: post.publishedAt,
            author: post.author,
            tags: post.tags,
            image: post.featuredImage
              ? urlFor(post.featuredImage).width(1200).height(630).url()
              : undefined,
          }),
        ]}
      />

      <div className="mx-auto px-6 pt-24 pb-24" style={{ maxWidth: '750px' }}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors min-h-[24px]"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
        >
          &larr; All posts
        </Link>

        {/* Post header */}
        <header className="mb-12">
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wider px-2 py-0.5"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--brand-magenta)',
                    border: '1px solid rgba(255,45,111,0.3)',
                  }}
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          )}

          <h1
            className="text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95, color: '#FFFFFF' }}
          >
            {post.title}
          </h1>

          <div
            className="flex items-center gap-4 text-sm"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
          >
            <span>{post.author || 'TaleCrafters'}</span>
            <span style={{ color: 'var(--brand-magenta)' }}>&bull;</span>
            <time>
              {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
        </header>

        {/* Featured image */}
        {post.featuredImage && (
          <div className="mb-12 overflow-hidden" style={{ border: '1px solid var(--brand-concrete)' }}>
            <img
              src={urlFor(post.featuredImage).width(900).height(506).url()}
              alt={post.featuredImage.alt || post.title}
              className="w-full"
            />
          </div>
        )}

        {/* Body */}
        <article className="prose-custom blog-post-body">
          <PortableText value={post.body} components={portableTextComponents as any} />
          <style>{`
            .blog-post-body :is(h2, h3, h4) {
              color: var(--brand-gold) !important;
            }
            .blog-post-body :is(h2, h3, h4) ~ :is(h2, h3, h4) {
              color: var(--brand-cyan) !important;
            }
          `}</style>
        </article>

        {/* Bottom nav */}
        <div className="mt-20 pt-8" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm transition-colors min-h-[24px]"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
          >
            &larr; Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
