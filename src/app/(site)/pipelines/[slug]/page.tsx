import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pipelines as repoPipelines, getPipeline } from '@/data/pipelines';
import { getPipelines } from '@/content/collections';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, howToSchema } from '@/lib/seo';

export function generateStaticParams() {
  return repoPipelines.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = (await getPipelines()).find((x) => x.slug === slug) ?? getPipeline(slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name}: ${p.title}`,
    description: p.summary,
    path: `/pipelines/${p.slug}`,
    keywords: [p.name, 'GenAI workflow', 'generative production pipeline', 'AI workflow', p.mechanism],
  });
}

export default async function PipelinePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = (await getPipelines()).find((x) => x.slug === slug) ?? getPipeline(slug);
  if (!p) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'GenAI Workflows', path: '/pipelines' },
    { name: p.name, path: `/pipelines/${p.slug}` },
  ];

  const others = (await getPipelines()).filter((x) => x.slug !== p.slug);

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          howToSchema({
            name: `${p.name}: ${p.title}`,
            description: p.summary,
            path: `/pipelines/${p.slug}`,
            steps: p.stages.map((s) => ({ name: s.name, text: `${s.fixes} Tooling: ${s.tool}. Typical time: ${s.time}.` })),
          }),
        ]}
      />

      <PageHeader
        eyebrow={`GENAI WORKFLOW ${p.num} · ${p.mechanism}`}
        title={p.name.toUpperCase()}
        color={p.accent}
        crumbs={crumbs}
        lede={p.summary}
        meta={[
          { label: 'Mechanism', value: p.mechanism },
          { label: 'Stages', value: `${p.stages.length}` },
          { label: 'Gates', value: `${p.gates.length} named tests` },
          { label: 'Reach for it when', value: p.useWhen },
        ]}
      >
        <Reveal delay={0.15}>
          <div
            className="mt-10 p-6 md:p-8 max-w-3xl"
            style={{ borderLeft: `3px solid ${p.accent}`, backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <div
              className="text-[10px] tracking-[0.28em] mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: p.accent }}
            >
              THE LOOP
            </div>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              {p.loop}
            </p>
          </div>
        </Reveal>
      </PageHeader>

      <section className="px-5 md:px-10 lg:px-14 py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color={p.accent}>THE STAGES</Eyebrow>
          <h2
            className="mt-5 mb-10 text-4xl md:text-6xl leading-[0.9] tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {p.title}
          </h2>

          <ol className="space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
            {p.stages.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.04}>
                <li
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-8"
                  style={{ backgroundColor: 'var(--brand-black)' }}
                >
                  <div className="md:col-span-3 flex md:block items-baseline gap-4">
                    <span
                      className="text-4xl md:text-5xl leading-none tracking-tighter"
                      style={{ fontFamily: 'var(--font-display)', color: `${p.accent}`, opacity: 0.35 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl tracking-tighter md:mt-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {s.name}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.75)' }}>
                      {s.fixes}
                    </p>
                  </div>
                  <div className="md:col-span-3 space-y-3">
                    <div>
                      <div className="text-[10px] tracking-[0.22em] mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                        TOOLING
                      </div>
                      <div className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-white)' }}>
                        {s.tool}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.22em] mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                        TYPICAL TIME
                      </div>
                      <div className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: p.accent }}>
                        {s.time}
                      </div>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-magenta)">THE GATES</Eyebrow>
          <p
            className="mt-5 mb-10 max-w-2xl text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}
          >
            Every gate has a test two people would run the same way and a stated action on failure.
            This is the part that makes volume survivable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {p.gates.map((g, i) => (
              <Reveal key={g.name} delay={(i % 2) * 0.06}>
                <div className="p-6 md:p-8 h-full" style={{ border: `1px solid ${p.accent}30`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <h3 className="text-2xl tracking-tighter mb-4" style={{ fontFamily: 'var(--font-display)', color: p.accent }}>
                    {g.name}
                  </h3>
                  <div className="mb-4">
                    <div className="text-[10px] tracking-[0.22em] mb-1.5" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                      TEST
                    </div>
                    <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.8)' }}>
                      {g.test}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.22em] mb-1.5" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                      ON FAIL
                    </div>
                    <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-white)' }}>
                      {g.fail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/pipelines/${o.slug}`}
              className="p-7 group"
              style={{ border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
            >
              <div className="text-[10px] tracking-[0.28em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: o.accent }}>
                PIPELINE {o.num}
              </div>
              <div className="text-2xl md:text-3xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                {o.name} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBar
        color={p.accent}
        title="Run it on your product."
        body="Bring the thing that has to stay identical across forty frames. We will tell you which gate it will fail first and what that costs to prevent."
      />
    </>
  );
}
