import Link from 'next/link';
import { resources as repoResources } from '@/data/resources';
import { terms } from '@/data/glossary';
import { FilmsSection } from '@/components/FilmsSection';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { abs } from '@/lib/site';
import { pageCopy } from '@/content/copy';
import { getResources } from '@/content/collections';

export const metadata = pageMeta({
  title: 'The Supply Drop — Free Templates, Checklists and Reference',
  description:
    'The templates, checklists and reference sheets the studio actually works from, published in full: production briefs, consistency and disclosure checklists, consent templates, a workflow canvas, a cost calculator, a readiness scorecard and the prompting library. No email gate, no download wall.',
  path: '/supply-drop',
  keywords: [
    'AI video production brief template',
    'AI advertising disclosure checklist',
    'synthetic UGC consent template',
    'creative automation canvas',
    'AI video cost calculator',
    'free AI video prompts',
    'prompting library',
    'camera movement prompts',
    'AI animation prompting guide',
    'generative video reference',
    'free creative resources',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'The Supply Drop', path: '/supply-drop' },
];

const qa = [
  {
    q: 'Is any of this gated?',
    a: 'No. No email, no form, no download wall. Take it, use it commercially, change it. If it makes your work better we would rather that than have your address.',
  },
  {
    q: 'Why give away your working method?',
    a: 'Because the reference is not the moat. Running it at volume, catching the failures and staying inside a budget is the part that takes a studio.',
  },
];

export default async function SupplyDropIndex() {
  const copy = await pageCopy('armoury');
  const resources = await getResources();
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          faqSchema(qa),
          {
            '@type': 'CollectionPage',
            name: 'The Supply Drop: free resources',
            url: abs('/supply-drop'),
            description: 'Free reference material for generative video and animation production.',
          },
        ]}
      />

      <PageHeader
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        accentWord={copy.header.accentWord}
        color="var(--brand-gold)"
        crumbs={crumbs}
        lede={copy.header.lede}
        meta={copy.header.meta}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {resources.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.06}>
              <Link
                href={`/supply-drop/${r.slug}`}
                className="group flex flex-col h-full p-8 md:p-10 relative overflow-hidden"
                style={{ border: `1px solid ${r.color}30`, backgroundColor: 'rgba(255,255,255,0.02)', textDecoration: 'none' }}
              >
                <div className="h-[3px] absolute top-0 left-0 right-0" style={{ backgroundColor: r.color }} />
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', color: r.color }}>
                    FREE RESOURCE {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="px-3 py-1 text-[10px] tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-mono)', border: `1px solid ${r.color}55`, color: r.color }}
                  >
                    {r.count}
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-5xl leading-[0.92] tracking-tighter mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {r.title}
                </h2>
                <p className="text-base mb-6" style={{ fontFamily: 'var(--font-mono)', color: r.color }}>
                  {r.kicker}
                </p>
                <p className="text-base leading-relaxed mb-6 flex-1" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}>
                  {r.blurb}
                </p>
                <div className="pt-5" style={{ borderTop: `1px solid ${r.color}25` }}>
                  <div className="text-xs mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                    FOR: {r.forWhom}
                  </div>
                  <div className="text-base tracking-tight" style={{ fontFamily: 'var(--font-display)', color: r.color }}>
                    OPEN THE RESOURCE →
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FilmsSection />

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-cyan)">{copy.alsoFree.eyebrow}</Eyebrow>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { href: '/glossary', t: 'The Glossary', n: `${terms.length} terms from synthetic media and storytelling, defined the way a maker needs them.` },
              { href: '/pipelines', t: 'The Pipelines', n: 'Three of our seven production pipelines, published with their stages and their gates.' },
              { href: '/blog', t: 'The Blog', n: 'What generative production costs, what has to be disclosed, and where automation saves a week.' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="block p-6" style={{ border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}>
                <div className="text-2xl tracking-tighter mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {c.t}
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  {c.n}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-gold)">THE OBVIOUS QUESTIONS</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {qa.map((item) => (
              <div key={item.q} className="p-6" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 className="text-lg mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.q}
                </h2>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBar
        color="var(--brand-gold)"
        eyebrow="OR SKIP THE READING"
        title="You could learn all this. Or you could hire the people who wrote it."
        body="The reference is free. The four days it takes to run it without burning a budget is what you would be paying for."
      />
    </>
  );
}
