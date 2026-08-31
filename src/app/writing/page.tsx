import Link from 'next/link';
import { writing } from '@/data/writing';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, serviceSchema } from '@/lib/seo';
import { pageCopy } from '@/content/copy';

export const metadata = pageMeta({
  title: 'Writing & Narrative — Scripts, VSLs and Original IP',
  description:
    'Direct-response scripts, brand films, ghostwriting, editorial features, treatments and production breakdowns, plus seven completed feature screenplays and a slate of original IP.',
  path: '/writing',
  keywords: [
    'VSL scriptwriting',
    'brand film scriptwriting',
    'ghostwriting agency',
    'narrative development',
    'screenplay writing studio',
    'direct response copywriting',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Writing & Narrative', path: '/writing' },
];

export default async function WritingPage() {
  const copy = await pageCopy('writing');
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: 'Writing and narrative development',
            description:
              'Direct-response scripts, brand films, spokesperson scripts, ghostwriting, editorial features, treatments, production breakdowns and original IP development.',
            path: '/writing',
            serviceType: 'Creative strategy, storytelling and IP',
          }),
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
        <div className="max-w-[1400px] mx-auto space-y-3">
          {writing.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.04}>
              <article
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-7 md:p-10"
                style={{ border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <div className="lg:col-span-4">
                  <div className="text-[10px] tracking-[0.28em] mb-3" style={{ fontFamily: 'var(--font-mono)', color: w.color }}>
                    {String(i + 1).padStart(2, '0')} / {w.kind.toUpperCase()}
                  </div>
                  <h2 className="text-3xl md:text-4xl leading-[0.95] tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                    {w.title}
                  </h2>
                  <div className="mt-4 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                    {w.form}
                    {w.language ? ` · ${w.language}` : ''}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg md:text-xl leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-white)' }}>
                    {w.summary}
                  </p>
                  <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.66)' }}>
                    {w.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-cyan)">WHERE THE WRITING SHOWS UP</Eyebrow>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { href: '/work/cocoon', t: 'COCOON', n: 'Four films built entirely from a grant document, because nothing in them could be filmed.' },
              { href: '/work/ib-nl', t: 'IB-NL', n: 'A film that makes its argument with a camera move instead of a voiceover.' },
              { href: '/originals', t: 'Originals', n: 'The slate: features, games, series and long-form fiction.' },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block p-6"
                style={{ border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
              >
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
        color="var(--brand-magenta)"
        title="If people can smell the brief, you have already failed."
        body="Send us the product, the audience and the thing you are not allowed to say. We will find the sentence that does the work."
      />
    </>
  );
}
