import Link from 'next/link';
import { notFound } from 'next/navigation';
import { terms as repoTerms, getTerm as getRepoTerm } from '@/data/glossary';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, definedTermSchema, faqSchema } from '@/lib/seo';
import { abs, SITE_URL } from '@/lib/site';
import { getTerms } from '@/content/collections';

/** Dataset first, so an edited definition reaches its own page. */
async function resolveTerm(slug: string) {
  return (await getTerms()).find((t) => t.slug === slug) ?? getRepoTerm(slug);
}

export function generateStaticParams() {
  return repoTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = await resolveTerm(slug);
  if (!t) return {};
  return pageMeta({
    title: `${t.term}: Definition`,
    description: t.short,
    path: `/glossary/${t.slug}`,
    keywords: [t.term, ...(t.aka ?? []), 'definition', 'synthetic media glossary'],
  });
}

const tagColor: Record<string, string> = {
  production: 'var(--brand-magenta)',
  models: 'var(--brand-cyan)',
  control: 'var(--brand-violet)',
  ethics: 'var(--brand-gold)',
  systems: 'var(--brand-cyan)',
  post: 'var(--brand-magenta)',
  strategy: 'var(--brand-violet)',
};

export default async function TermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const all = await getTerms();
  const t = all.find((x) => x.slug === slug) ?? getRepoTerm(slug);
  if (!t) notFound();

  const color = tagColor[t.tags[0]] ?? 'var(--brand-gold)';

  // A related slug that no longer exists would render a dead link, so the list
  // is resolved against the real data rather than trusted.
  const related = t.related
    .map((s) => all.find((x) => x.slug === s) ?? getRepoTerm(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Glossary', path: '/glossary' },
    { name: t.term, path: `/glossary/${t.slug}` },
  ];

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            ...definedTermSchema({ term: t.term, slug: t.slug, short: t.short, tags: t.tags }),
            ...(t.aka?.length ? { alternateName: t.aka } : {}),
          },
          faqSchema(t.qa),
          {
            '@type': 'Article',
            headline: `${t.term}: definition`,
            description: t.short,
            url: abs(`/glossary/${t.slug}`),
            articleSection: 'Glossary',
            author: { '@id': `${SITE_URL}/#organization` },
            publisher: { '@id': `${SITE_URL}/#organization` },
            isPartOf: { '@id': `${SITE_URL}/glossary/#set` },
          },
        ]}
      />

      <PageHeader
        eyebrow={`GLOSSARY · ${t.tags.map((x) => x.toUpperCase()).join(' · ')}`}
        title={t.term.toUpperCase()}
        color={color}
        crumbs={crumbs}
        lede={t.short}
      >
        {t.aka && t.aka.length > 0 && (
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-[10px] tracking-[0.24em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                ALSO CALLED
              </span>
              {t.aka.map((a) => (
                <span
                  key={a}
                  className="px-3 py-1 text-[11px]"
                  style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(245,245,240,0.75)' }}
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </PageHeader>

      <article className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="prose-tc">
                {t.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <section className="mt-14">
                <Eyebrow color={color}>QUESTIONS PEOPLE ASK</Eyebrow>
                <div className="mt-6 space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                  {t.qa.map((item) => (
                    <div key={item.q} className="p-6" style={{ backgroundColor: 'var(--brand-black)' }}>
                      <h2 className="text-xl md:text-2xl leading-snug tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                        {item.q}
                      </h2>
                      <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.75)' }}>
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          <aside className="lg:col-span-5 space-y-10">
            <div>
              <Eyebrow color="var(--brand-concrete-light)">TOPICS</Eyebrow>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/glossary/tag/${tag}`}
                    className="px-3.5 py-2 text-[11px] tracking-[0.16em]"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      border: `1px solid ${tagColor[tag] ?? color}44`,
                      color: tagColor[tag] ?? color,
                      textDecoration: 'none',
                    }}
                  >
                    {tag.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <div>
                <Eyebrow color={color}>RELATED TERMS</Eyebrow>
                <ul className="mt-4 space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/glossary/${r.slug}`}
                        className="block p-4"
                        style={{ backgroundColor: 'var(--brand-black)', textDecoration: 'none' }}
                      >
                        <div className="text-lg tracking-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}>
                          {r.term}
                        </div>
                        <p className="text-sm mt-1 leading-snug" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                          {r.short}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-6" style={{ border: `1px solid ${color}30`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <div className="text-[10px] tracking-[0.24em] mb-3" style={{ fontFamily: 'var(--font-mono)', color }}>
                WHERE THIS SHOWS UP
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                Every definition here comes out of production rather than a textbook. The pipelines
                page shows the same ideas as stages and gates you can copy.
              </p>
              <Link
                href="/pipelines"
                className="text-sm inline-flex items-center min-h-[24px]"
                style={{ fontFamily: 'var(--font-display)', color, textDecoration: 'none' }}
              >
                SEE THE PIPELINES →
              </Link>
            </div>

            <Link
              href="/glossary"
              className="inline-block px-5 py-3 text-sm tracking-wider"
              style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(255,255,255,0.16)', color: 'var(--brand-concrete-light)', textDecoration: 'none' }}
            >
              ← ALL {all.length} TERMS
            </Link>
          </aside>
        </div>
      </article>

      <CtaBar
        color={color}
        eyebrow="THEORY IS FREE"
        title="Knowing the word is the cheap part."
        body="Running it on a deadline, at volume, without burning the budget is the expensive part. That is the bit we do."
      />
    </>
  );
}
