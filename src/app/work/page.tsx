import Link from 'next/link';
import { work } from '@/data/work';
import { conceptBrands } from '@/data/concept';
import { Frame } from '@/components/Frame';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, caseStudySchema } from '@/lib/seo';
import { abs } from '@/lib/site';
import { pageCopy } from '@/content/copy';

export const metadata = pageMeta({
  title: 'Selected Damage — Case Studies',
  description:
    `${work.length} delivered engagements with the problem, the idea, what we made, the result and the artefacts. A restaurant, a consultancy, a motorcycle dealership, a data school, a supplement brand, a Horizon Europe consortium and a property group.`,
  path: '/work',
  keywords: [
    'creative agency case studies',
    'generative video case study',
    'AI film production portfolio',
    'brand film case study',
    'synthetic media portfolio',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Selected Damage', path: '/work' },
];

export default async function WorkIndex() {
  const copy = await pageCopy('work');
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'CollectionPage',
            name: 'Selected Damage',
            url: abs('/work'),
            description:
              'Case studies from TaleCrafters: the problem, the idea, what we made, the result and the artefacts.',
            hasPart: work.map((w) =>
              caseStudySchema({
                title: w.title,
                client: w.client,
                year: w.year,
                slug: w.slug,
                summary: w.summary,
                image: `/img/${w.hero.src}-960.webp`,
              })
            ),
          },
        ]}
      />

      <PageHeader
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        accentWord={copy.header.accentWord}
        color="var(--brand-magenta)"
        crumbs={crumbs}
        lede={copy.header.lede}
        meta={copy.header.meta}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-24">
        <div className="max-w-[1400px] mx-auto space-y-4">
          {work.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.05}>
              <Link
                href={`/work/${w.slug}`}
                className="group block relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-5 relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[340px]">
                    <Frame
                      src={w.hero.src}
                      alt={w.hero.alt}
                      focus={w.hero.focus}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(115deg, ${w.accent}22, transparent 55%)` }}
                    />
                    <div
                      className="absolute top-0 left-0 px-3 py-1.5 text-[10px] tracking-[0.22em]"
                      style={{ fontFamily: 'var(--font-mono)', backgroundColor: w.accent, color: 'var(--brand-black)' }}
                    >
                      {String(i + 1).padStart(2, '0')} / {w.kind.toUpperCase()}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-7 md:p-10 flex flex-col justify-between gap-6">
                    <div>
                      <div
                        className="text-[10px] tracking-[0.28em] mb-3"
                        style={{ fontFamily: 'var(--font-mono)', color: w.accent }}
                      >
                        {w.client} · {w.year}
                        {w.place ? ` · ${w.place}` : ''}
                      </div>
                      <h2
                        className="text-3xl md:text-5xl leading-[0.92] tracking-tighter mb-4 transition-colors"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {w.title}
                      </h2>
                      <p
                        className="text-base md:text-lg leading-relaxed max-w-2xl"
                        style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.66)' }}
                      >
                        {w.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                      <span
                        className="text-[11px] tracking-wider"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                      >
                        {w.discipline}
                      </span>
                      <span
                        className="text-sm tracking-tight ml-auto"
                        style={{ fontFamily: 'var(--font-display)', color: w.accent }}
                      >
                        READ THE CASE →
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: w.accent }}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-cyan)">{copy.alsoWorthYourTime.eyebrow}</Eyebrow>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { href: '/concept-projects', title: 'Concept Projects', note: `${conceptBrands.length} invented brands built to prove one control each. Nobody commissioned them, and we say so.` },
              { href: '/pipelines', title: 'Pipelines', note: 'The three named production systems behind the work above, with their stages and their failure gates.' },
              { href: '/writing', title: 'Writing & Narrative', note: 'Scripts, VSLs, editorial and the original IP the story-first claim rests on.' },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block p-6 group transition-colors"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="text-2xl tracking-tighter mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                >
                  {c.title}
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  {c.note}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBar
        title="You have a launch. We have a delivery date."
        body="Tell us what is coming and when it has to be live. You will get a shape, a stack and a number, not a discovery workshop."
      />
    </>
  );
}
