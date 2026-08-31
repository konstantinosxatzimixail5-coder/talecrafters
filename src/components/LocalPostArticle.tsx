import Link from 'next/link';
import { PostBody } from './PostBody';
import { JsonLd } from './JsonLd';
import { articleSchema, breadcrumbSchema, faqSchema, imageObjectSchema } from '@/lib/seo';
import { getPost, readingMinutes, wordCount, type Post } from '@/data/posts';
import { getResource } from '@/data/resources';
import { getTerm } from '@/data/glossary';
import { heroExists, heroSrc, heroSrcSet } from '@/lib/blog-images';

export function LocalPostArticle({ post }: { post: Post }) {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const related = (post.related ?? []).map(getPost).filter((p): p is Post => Boolean(p));
  const resources = (post.resources ?? []).map(getResource).filter(Boolean);
  const terms = (post.terms ?? []).map(getTerm).filter(Boolean);

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
            description: post.metaDescription,
            slug: post.slug,
            published: post.published,
            modified: post.modified,
            author: post.author,
            ...(heroExists(post.image)
              ? { image: heroSrc(post.image, 1600), imageAlt: post.imageAlt }
              : {}),
            tags: post.tags,
            section: post.section,
            wordCount: wordCount(post),
            mentions: post.terms,
          }),
          ...(heroExists(post.image)
            ? [
                imageObjectSchema({
                  url: heroSrc(post.image, 1600),
                  caption: post.imageAlt,
                  width: 1536,
                  height: 864,
                }),
              ]
            : []),
          faqSchema(post.faqs),
        ]}
      />

      <div className="mx-auto px-6 pt-24 pb-24" style={{ maxWidth: '750px' }}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-12"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
        >
          &larr; All posts
        </Link>

        <header className="mb-10">
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

          <h1
            className="text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 0.98, color: '#FFFFFF' }}
          >
            {post.title}
          </h1>

          <div
            className="flex items-center gap-3 text-sm flex-wrap"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
          >
            <span>{post.author}</span>
            <span style={{ color: 'var(--brand-magenta)' }}>&bull;</span>
            <time dateTime={post.published}>
              {new Date(post.published).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span style={{ color: 'var(--brand-magenta)' }}>&bull;</span>
            <span>{readingMinutes(post)} min read</span>
          </div>
        </header>

        {heroExists(post.image) ? (
          <figure className="mb-10 overflow-hidden" style={{ border: '1px solid var(--brand-concrete)' }}>
            <img
              src={heroSrc(post.image, 960)}
              srcSet={heroSrcSet(post.image)}
              sizes="(max-width: 768px) 100vw, 750px"
              alt={post.imageAlt}
              width={1600}
              height={900}
              className="w-full"
              style={{ display: 'block' }}
            />
          </figure>
        ) : (
          // No hero on disk yet. A coloured plate reads as a design decision;
          // a broken image icon reads as a broken site.
          <div
            className="mb-10 flex items-end p-6"
            style={{
              border: '1px solid var(--brand-concrete)',
              aspectRatio: '16 / 9',
              background:
                'radial-gradient(120% 100% at 15% 0%, rgba(0,229,204,0.10), transparent 60%), var(--brand-black)',
            }}
          >
            <span
              className="text-[10px] tracking-[0.28em]"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
            >
              {post.section.toUpperCase()}
            </span>
          </div>
        )}

        {/* The standfirst states the answer in the first fifty words. A model
            quoting this page quotes something complete rather than a hook. */}
        <p
          className="mb-10"
          style={{
            color: 'var(--brand-white)',
            fontSize: '1.28rem',
            lineHeight: 1.6,
            borderLeft: '3px solid var(--brand-cyan)',
            paddingLeft: '1.15rem',
          }}
        >
          {post.standfirst}
        </p>

        {post.legalNotice && (
          <p
            className="mb-10 p-4 text-sm"
            style={{
              border: '1px solid rgba(201,168,76,0.3)',
              color: '#C9C9C4',
              lineHeight: 1.65,
              fontFamily: 'var(--font-body)',
            }}
          >
            <strong style={{ color: 'var(--brand-gold)' }}>A note on what this is.</strong> A working summary
            written by a production studio, current at the date above, not legal advice. Regulation in this area
            is moving. Check the primary sources linked at the foot of the piece and take advice before relying
            on any of it commercially.
          </p>
        )}

        <article className="blog-post-body">
          <PostBody blocks={post.body} />
        </article>

        {post.faqs.length > 0 && (
          <section className="mt-16 pt-10" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
            <h2
              className="text-2xl tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-gold)' }}
            >
              Questions people actually ask
            </h2>
            <div className="space-y-6">
              {post.faqs.map((f) => (
                <div key={f.q}>
                  <h3
                    className="text-lg mb-2 leading-snug"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                  >
                    {f.q}
                  </h3>
                  <p style={{ color: '#C8C8C4', fontSize: '1rem', lineHeight: 1.7 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {post.sources?.length ? (
          <section className="mt-14 pt-8" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
            <h2
              className="text-[10px] tracking-[0.3em] mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
            >
              SOURCES
            </h2>
            <ul className="space-y-2">
              {post.sources.map((s) => (
                <li key={s.href} style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  <a
                    href={s.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: 'var(--brand-cyan)', textDecoration: 'underline' }}
                  >
                    {s.label}
                  </a>
                  {s.publisher && (
                    <span style={{ color: 'var(--brand-concrete-light)' }}> &middot; {s.publisher}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {terms.length > 0 && (
          <section className="mt-14 pt-8" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
            <h2
              className="text-[10px] tracking-[0.3em] mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-violet-text)' }}
            >
              TERMS USED HERE
            </h2>
            <div className="flex flex-wrap gap-2">
              {terms.map((t) => (
                <Link
                  key={t!.slug}
                  href={`/glossary/${t!.slug}`}
                  className="text-xs px-3 py-1.5"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--brand-violet-text)',
                    border: '1px solid rgba(178,120,255,0.3)',
                    textDecoration: 'none',
                  }}
                >
                  {t!.term}
                </Link>
              ))}
            </div>
          </section>
        )}

        {resources.length > 0 && (
          <section className="mt-14 pt-8" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
            <h2
              className="text-[10px] tracking-[0.3em] mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
            >
              TAKE THE TOOL WITH YOU
            </h2>
            <ul className="space-y-3">
              {resources.map((r) => (
                <li key={r!.slug}>
                  <Link
                    href={`/armoury/${r!.slug}`}
                    className="block p-4"
                    style={{ border: '1px solid rgba(201,168,76,0.28)', textDecoration: 'none' }}
                  >
                    <span
                      className="block text-base mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                    >
                      {r!.title}
                    </span>
                    <span
                      className="block text-xs"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                    >
                      {r!.format} &middot; {r!.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-14 pt-8" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
            <h2
              className="text-[10px] tracking-[0.3em] mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}
            >
              READ NEXT
            </h2>
            <ul className="space-y-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                    <span
                      className="block text-lg leading-snug mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                    >
                      {r.title}
                    </span>
                    <span className="block text-sm" style={{ color: 'var(--brand-concrete-light)' }}>
                      {r.excerpt}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
          >
            &larr; Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
