import Link from 'next/link';
import { conceptBrands as repoConceptBrands } from '@/data/concept';
import { Frame } from '@/components/Frame';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { abs } from '@/lib/site';
import { pageCopy } from '@/content/copy';
import { getConceptBrands } from '@/content/collections';

/** Counted, never typed. The brand count said four against a real six for as
 *  long as it was a literal, in three separate places, which is the argument
 *  for deriving it.
 *
 *  These two are the repository's numbers, and they are what the metadata uses,
 *  because metadata is resolved before the page can read anything. The page
 *  body counts what it actually rendered instead, so a brand added in the
 *  Studio is counted on the page the moment it appears. */
const brandCount = repoConceptBrands.length;
const frameCount = repoConceptBrands.reduce((n, b) => n + b.shots.length, 0);

/** Small numbers read better as words at the head of a sentence. */
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const words = (n: number) => WORDS[n] ?? String(n);
const Words = (n: number) => words(n).replace(/^./, (c) => c.toUpperCase());

export const metadata = pageMeta({
  title: 'Concept Projects — Invented Brands, Real Capability',
  description:
    `${brandCount} invented brands built as control experiments: label lock across five sets, four moulded flavour names, a pack claim held to camera, one face across three light sources, frosted glass with liquid behind it, and a live flame across three rooms. Nobody commissioned any of it, and we say so.`,
  path: '/concept-projects',
  keywords: [
    'AI product photography',
    'spec creative work',
    'synthetic UGC examples',
    'generative product shoot',
    'concept brand campaign',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Concept Projects', path: '/concept-projects' },
];

const qa = [
  {
    q: 'Are these real brands?',
    a: 'No. Every brand on this page is invented. Nobody commissioned any of it, nobody paid for it, and none of these products exist. They are labelled Concept Project rather than presented as commissioned work.',
  },
  {
    q: 'Why show work nobody paid for?',
    a: 'Because each set is a control experiment with a stated test. A spec shelf that does not say what it was proving is a showreel. One that does is evidence.',
  },
  {
    q: 'Can AI product photography hold a real label?',
    a: 'Yes, when the packaging is locked as a master plate first and every frame is generated from that file. The test is literal: zoom to full resolution and read every printed word. A fail returns to the plate rather than to a retouching tool.',
  },
];

export default async function ConceptProjects() {
  const conceptBrands = await getConceptBrands();
  const brands = conceptBrands.length;
  const frames = conceptBrands.reduce((n, b) => n + b.shots.length, 0);
  const copy = await pageCopy('conceptProjects');
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          faqSchema(qa),
          {
            '@type': 'CollectionPage',
            name: 'Concept Projects',
            url: abs('/concept-projects'),
            description: `${brandCount} invented brands and ${frameCount} frames, each set built to prove one specific control in generative production.`,
          },
        ]}
      />

      <PageHeader
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        accentWord={copy.header.accentWord}
        color="var(--brand-cyan)"
        crumbs={crumbs}
        lede={copy.header.lede}
        meta={copy.header.meta}
      />

      {conceptBrands.map((b) => (
        <section key={b.slug} id={b.slug} className="px-5 md:px-10 lg:px-14 pb-20 md:pb-28 scroll-mt-24">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8"
                style={{ borderBottom: `2px solid ${b.accent}` }}
              >
                <div>
                  <div
                    className="text-[10px] tracking-[0.3em] mb-3"
                    style={{ fontFamily: 'var(--font-mono)', color: b.accent }}
                  >
                    {b.num} / CONCEPT PROJECT
                  </div>
                  <h2
                    className="text-5xl md:text-7xl lg:text-[5.5vw] leading-[0.85] tracking-tighter"
                    style={{ fontFamily: 'var(--font-display)', color: b.accent }}
                  >
                    {b.name}
                  </h2>
                  <p
                    className="mt-3 text-base"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    {b.product}
                  </p>
                </div>
                <div className="md:text-right md:max-w-sm">
                  <div
                    className="text-[10px] tracking-[0.28em] mb-2"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    WHAT IT PROVES
                  </div>
                  <p className="text-base leading-snug" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-white)' }}>
                    {b.proves}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <p
                className="max-w-3xl text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}
              >
                {b.note}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {b.pipelines.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="px-4 py-2 text-xs tracking-wider transition-colors"
                    style={{ fontFamily: 'var(--font-mono)', border: `1px solid ${b.accent}55`, color: b.accent, textDecoration: 'none' }}
                  >
                    {p.label} →
                  </Link>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {b.shots.map((s, i) => (
                <Reveal key={s.src} delay={(i % 3) * 0.05}>
                  <figure
                    className="relative overflow-hidden group h-full"
                    style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <Frame
                      src={s.src}
                      upload={s.upload as never}
                      alt={s.alt}
                      focus={s.focus}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <figcaption
                      className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[10px] tracking-[0.16em]"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        background: 'linear-gradient(to top, rgba(10,10,12,0.94), transparent)',
                        color: 'rgba(245,245,240,0.85)',
                      }}
                    >
                      {s.label}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-gold)">{copy.questions.eyebrow}</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            {qa.map((item) => (
              <div key={item.q} className="p-6" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-lg mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}>
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
        color="var(--brand-cyan)"
        eyebrow="COMMISSION SOMETHING REAL"
        title="Your product deserves better than a fake one."
        body="These sets were built to prove the controls. Point them at something that actually exists and the same discipline applies, with your kitchen or your packaging team holding the last gate."
      />
    </>
  );
}
