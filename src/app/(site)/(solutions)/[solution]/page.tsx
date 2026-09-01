import Link from 'next/link';
import { notFound } from 'next/navigation';
import { solutions, getSolution } from '@/data/solutions';
import { getPipeline } from '@/data/pipelines';
import { getCase } from '@/data/work';
import { getTerm } from '@/data/glossary';
import { Frame } from '@/components/Frame';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';
import { abs, SITE_URL } from '@/lib/site';

/**
 * The four search-intent pages share a shape because they answer the same kind
 * of question from different angles: what it is, what you get, how it is made,
 * who it worked for, and the things people ask before enquiring. The argument
 * on each is written per page; only the furniture is shared.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ solution: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ solution: string }> }) {
  const { solution } = await params;
  const s = getSolution(solution);
  if (!s) return {};
  return pageMeta({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/${s.slug}`,
    keywords: s.keywords,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ solution: string }> }) {
  const { solution } = await params;
  const s = getSolution(solution);
  if (!s) notFound();

  const pipelines = s.pipelines.map(getPipeline).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const cases = s.cases.map(getCase).filter((c): c is NonNullable<typeof c> => Boolean(c));
  const terms = s.terms.map(getTerm).filter((t): t is NonNullable<typeof t> => Boolean(t));
  const others = solutions.filter((x) => x.slug !== s.slug);

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: s.plainName, path: `/${s.slug}` },
  ];

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: s.plainName,
            description: s.metaDescription,
            path: `/${s.slug}`,
            serviceType: s.plainName,
            // The deliverables are already written down; turning them into an
            // offer catalogue is what makes the Service node say what is
            // actually bought rather than only what the page is called.
            offers: s.deliverables.map((d) => ({ name: d.name, detail: d.detail })),
            market: s.market,
          }),
          faqSchema(s.faqs),
          {
            '@type': 'WebPage',
            '@id': abs(`/${s.slug}`),
            url: abs(`/${s.slug}`),
            name: s.metaTitle,
            description: s.metaDescription,
            isPartOf: { '@id': `${SITE_URL}/#website` },
            about: { '@id': `${SITE_URL}/#organization` },
            inLanguage: 'en-GB',
          },
        ]}
      />

      <PageHeader
        eyebrow={s.plainName.toUpperCase()}
        title={s.title}
        accentWord={s.accentWord}
        color={s.color}
        crumbs={crumbs}
        lede={s.lede}
        meta={s.meta}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="prose-tc">
                {s.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Eyebrow color={s.color}>WHAT YOU GET</Eyebrow>
            <dl className="mt-5 grid grid-cols-1 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              {s.deliverables.map((d) => (
                <div key={d.name} className="p-4" style={{ backgroundColor: 'var(--brand-black)' }}>
                  <dt
                    className="text-sm mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                  >
                    {d.name}
                  </dt>
                  <dd
                    className="text-sm leading-snug"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                  >
                    {d.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {pipelines.length > 0 && (
        <section className="px-5 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color={s.color}>HOW IT IS MADE</Eyebrow>
            <p
              className="mt-5 mb-8 max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}
            >
              The named workflows behind this work, published in full with their stages, their
              timings and the tests each one fails on.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pipelines.map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    href={`/pipelines/${p.slug}`}
                    className="flex flex-col h-full p-6 md:p-7 relative overflow-hidden"
                    style={{ border: `1px solid ${p.accent}30`, backgroundColor: 'rgba(255,255,255,0.02)', textDecoration: 'none' }}
                  >
                    <div className="h-[3px] absolute top-0 left-0 right-0" style={{ backgroundColor: p.accent }} />
                    <div className="text-[10px] tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-mono)', color: p.accent }}>
                      WORKFLOW {p.num} · {p.mechanism.toUpperCase()}
                    </div>
                    <h3 className="text-2xl md:text-3xl leading-tight tracking-tighter mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                      {p.summary}
                    </p>
                    <span className="mt-5 text-sm" style={{ fontFamily: 'var(--font-display)', color: p.accent }}>
                      READ IT →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {cases.length > 0 && (
        <section className="px-5 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-magenta)">WHERE IT HAS BEEN DONE</Eyebrow>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {cases.map((c) => (
                <Reveal key={c.slug}>
                  <Link
                    href={`/work/${c.slug}`}
                    className="block h-full group overflow-hidden"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Frame
                        src={c.hero.src}
                        alt={c.hero.alt}
                        focus={c.hero.focus}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] tracking-[0.24em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: c.accent }}>
                        {c.client} · {c.year}
                      </div>
                      <p className="text-base leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                        {c.title}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 md:px-10 lg:px-14 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color={s.color}>QUESTIONS PEOPLE ASK</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {s.faqs.map((f) => (
              <Reveal key={f.q}>
                <div className="p-6 md:p-7 h-full" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h2 className="text-lg md:text-xl leading-snug tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {f.q}
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.75)' }}>
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {terms.length > 0 && (
        <section className="px-5 md:px-10 lg:px-14 pb-12">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-gold)">THE VOCABULARY</Eyebrow>
            <ul className="mt-6 space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              {terms.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/glossary/${t.slug}`}
                    className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 p-4 md:p-5"
                    style={{ backgroundColor: 'var(--brand-black)', textDecoration: 'none' }}
                  >
                    <span
                      className="text-lg tracking-tight md:w-60 md:flex-shrink-0"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                    >
                      {t.term}
                    </span>
                    <span className="text-sm leading-snug flex-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                      {t.short}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="px-5 md:px-10 lg:px-14 pb-14">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-concrete-light)">RELATED</Eyebrow>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/${o.slug}`}
                className="block p-6"
                style={{ border: `1px solid ${o.color}30`, textDecoration: 'none' }}
              >
                <div className="text-xl tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: o.color }}>
                  {o.plainName}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBar color={s.color} title={s.cta.title} body={s.cta.body} />
    </>
  );
}
