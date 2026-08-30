import Link from 'next/link';
import { faqGroups, allFaqs } from '@/data/faq';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'FAQ — The Questions Everyone Asks',
  description:
    'What TaleCrafters does, how fast we deliver, what it costs, how we keep a face or a product consistent, who owns the output, how we handle disclosure and likeness rights, and what a Creative Systems engagement actually delivers.',
  path: '/faq',
  keywords: [
    'AI creative agency FAQ',
    'synthetic media questions',
    'AI content disclosure',
    'who owns AI generated content',
    'creative automation FAQ',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: '/faq' },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd graph={[breadcrumbSchema(crumbs), faqSchema(allFaqs)]} />

      <PageHeader
        eyebrow="FAQ"
        title="ASK THE"
        accentWord="AWKWARD ONES"
        color="var(--brand-cyan)"
        crumbs={crumbs}
        lede="Everything below is the answer we would give on a call, written down so nobody has to book one to get it. Where the honest answer is “it depends”, we have said what it depends on."
        meta={[
          { label: 'Questions', value: `${allFaqs.length}` },
          { label: 'Sections', value: `${faqGroups.length}` },
          { label: 'Sales voice', value: 'Left at the door' },
          { label: 'Still stuck?', value: 'hello@talecrafters.studio' },
        ]}
      />

      <nav className="px-5 md:px-10 lg:px-14 pb-10" aria-label="FAQ sections">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-2">
          {faqGroups.map((g) => (
            <a
              key={g.title}
              href={`#${g.title.toLowerCase().replace(/[^a-z]+/g, '-')}`}
              className="px-4 py-2 text-[11px] tracking-[0.16em]"
              style={{ fontFamily: 'var(--font-mono)', border: `1px solid ${g.color}44`, color: g.color, textDecoration: 'none' }}
            >
              {g.title} · {g.items.length}
            </a>
          ))}
        </div>
      </nav>

      {faqGroups.map((g) => (
        <section
          key={g.title}
          id={g.title.toLowerCase().replace(/[^a-z]+/g, '-')}
          className="px-5 md:px-10 lg:px-14 py-8 md:py-12 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <Eyebrow color={g.color}>SECTION</Eyebrow>
                <h2
                  className="mt-4 text-3xl md:text-5xl leading-[0.9] tracking-tighter"
                  style={{ fontFamily: 'var(--font-display)', color: g.color }}
                >
                  {g.title}
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              {g.items.map((item, i) => (
                <Reveal key={item.q} delay={Math.min(i, 4) * 0.04}>
                  <div className="p-6 md:p-8" style={{ backgroundColor: 'var(--brand-black)' }}>
                    <h3
                      className="text-xl md:text-2xl leading-snug tracking-tight mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.q}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.75)' }}>
                      {item.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 md:px-10 lg:px-14 py-12">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-gold)">GO DEEPER</Eyebrow>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { href: '/pipelines', t: 'The Pipelines', n: 'Three published production pipelines, with the stages, the timings and the gates.' },
              { href: '/glossary', t: 'The Glossary', n: '47 terms defined the way a producer needs them, each with its own page.' },
              { href: '/work', t: 'Selected Damage', n: 'Six delivered engagements with the problem, the idea, the result and the artefacts.' },
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
        color="var(--brand-cyan)"
        title="Question we haven't answered?"
        body="Ask it directly. You will get the same answer you would get on a call, minus the call."
      />
    </>
  );
}
