import Link from 'next/link';
import { pipelines } from '@/data/pipelines';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { abs } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Pipelines — How the Work Actually Gets Made',
  description:
    'Three of our seven production pipelines, published in full: Identity Lock for trained presenters, Phantom Set for products, Operator Stack for the automation layer. Stages, timings and the gates each one fails on.',
  path: '/pipelines',
  keywords: [
    'AI filmmaking workflow',
    'generative production pipeline',
    'synthetic media workflow',
    'AI product photography workflow',
    'character consistency pipeline',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Pipelines', path: '/pipelines' },
];

const qa = [
  {
    q: 'Why publish your production pipelines?',
    a: 'Because the pipeline is not the moat. Anyone can read the stages; running them at volume, catching the failures and staying inside a budget is the part that takes a studio. Three of our seven are published. The other four stay in the studio.',
  },
  {
    q: 'What is a gate?',
    a: 'A named, mechanical test a frame has to pass before anyone sees it, with a stated action on failure. "Zoom to full resolution and read every word on the packaging; a fail returns to the master plate" is a gate. "Make sure it looks right" is a hope.',
  },
  {
    q: 'Can we use these pipelines in-house?',
    a: 'Yes, and some clients do. When a team wants the machinery rather than the output, that becomes a Creative Systems engagement: we map how your work runs today, build the skills, scripts and connectors, and hand it over running inside your own accounts.',
  },
];

export default function PipelinesIndex() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          faqSchema(qa),
          {
            '@type': 'CollectionPage',
            name: 'Pipelines',
            url: abs('/pipelines'),
            description: 'Three published production pipelines with stages, timings and control gates.',
          },
        ]}
      />

      <PageHeader
        eyebrow="PIPELINES"
        title="THE PART"
        accentWord="NOBODY POSTS"
        color="var(--brand-violet)"
        crumbs={crumbs}
        lede="A prompt is not a pipeline. A pipeline is the order the work happens in, the one file everything downstream references, and the four tests a frame has to survive before a client sees it. Three of ours are published in full below. The other four stay in the studio."
        meta={[
          { label: 'Published', value: '3 of 7' },
          { label: 'Format', value: 'Stages, timings, gates' },
          { label: 'Gates each', value: '4 named tests' },
          { label: 'Use', value: 'Free to copy. Hard to run.' },
        ]}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3">
          {pipelines.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/pipelines/${p.slug}`}
                className="group flex flex-col h-full p-7 md:p-9 relative overflow-hidden"
                style={{
                  border: `1px solid ${p.accent}30`,
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  textDecoration: 'none',
                }}
              >
                <div className="h-[3px] absolute top-0 left-0 right-0" style={{ backgroundColor: p.accent }} />
                <div
                  className="text-[10px] tracking-[0.3em] mb-4"
                  style={{ fontFamily: 'var(--font-mono)', color: p.accent }}
                >
                  PIPELINE {p.num}
                </div>
                <h2
                  className="text-3xl md:text-4xl leading-[0.92] tracking-tighter mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                >
                  {p.name}
                </h2>
                <div
                  className="text-sm mb-5"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                >
                  {p.mechanism}
                </div>
                <p
                  className="text-base leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}
                >
                  {p.summary}
                </p>
                <div
                  className="text-xs leading-relaxed pt-4"
                  style={{ borderTop: `1px solid ${p.accent}25`, fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                >
                  {p.loop}
                </div>
                <div className="mt-5 text-sm tracking-tight" style={{ fontFamily: 'var(--font-display)', color: p.accent }}>
                  READ THE PIPELINE →
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-gold)">WHY THESE ARE PUBLIC</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            {qa.map((item) => (
              <div key={item.q} className="p-6" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-lg mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBar
        color="var(--brand-violet)"
        eyebrow="CREATIVE SYSTEMS"
        title="Want the machinery, not the output?"
        body="Half a day mapping how your work runs today, one to two weeks building, then a live walkthrough. It ends up inside your accounts, with a ledger showing cost per accepted asset."
        href="/systems"
        cta="SEE SYSTEMS"
      />
    </>
  );
}
