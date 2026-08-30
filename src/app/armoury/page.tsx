import Link from 'next/link';
import { resources } from '@/data/resources';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { abs } from '@/lib/site';

export const metadata = pageMeta({
  title: 'The Armoury — Free Resources',
  description:
    'Free reference material from the studio: 38 cinematic camera movements with working prompts, and a prompting guide covering twelve animation styles. No email gate, no download form.',
  path: '/armoury',
  keywords: [
    'free AI video prompts',
    'camera movement prompts',
    'AI animation prompting guide',
    'generative video reference',
    'free creative resources',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'The Armoury', path: '/armoury' },
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

export default function ArmouryIndex() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          faqSchema(qa),
          {
            '@type': 'CollectionPage',
            name: 'The Armoury: free resources',
            url: abs('/armoury'),
            description: 'Free reference material for generative video and animation production.',
          },
        ]}
      />

      <PageHeader
        eyebrow="THE ARMOURY"
        title="TAKE IT."
        accentWord="NO EMAIL GATE."
        color="var(--brand-gold)"
        crumbs={crumbs}
        lede="The reference sheets we actually use, published in full. No form, no download wall, no drip sequence waiting on the other side. Use them commercially, change them, put your own name on the version you end up with."
        meta={[
          { label: 'Resources', value: `${resources.length} and counting` },
          { label: 'Gate', value: 'None' },
          { label: 'Licence', value: 'Use it, commercially' },
          { label: 'Cost', value: 'Nothing' },
        ]}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {resources.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.06}>
              <Link
                href={`/armoury/${r.slug}`}
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

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-cyan)">ALSO FREE</Eyebrow>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { href: '/glossary', t: 'The Glossary', n: '47 terms from generative and synthetic media, defined the way a producer needs them.' },
              { href: '/pipelines', t: 'The Pipelines', n: 'Three of our seven production pipelines, published with their stages and their gates.' },
              { href: '/blog', t: 'The Blog', n: 'Dispatches from the frontline, with fewer manifestos than that sounds.' },
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

      <CtaBar
        color="var(--brand-gold)"
        eyebrow="OR SKIP THE READING"
        title="You could learn all this. Or you could hire the people who wrote it."
        body="The reference is free. The four days it takes to run it without burning a budget is what you would be paying for."
      />
    </>
  );
}
