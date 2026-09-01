import { captures as repoCaptures } from '@/data/captures';
import { Frame } from '@/components/Frame';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, imageObjectSchema } from '@/lib/seo';
import { abs } from '@/lib/site';
import { pageCopy } from '@/content/copy';
import { getCaptures } from '@/content/collections';

export const metadata = pageMeta({
  title: 'Photoreal Captures — Eight Generated Human Frames, and What Each Breaks',
  description:
    'Eight generated human frames kept for one reason each: skin under unflattering daylight, hands doing skilled work, two people with a real eyeline between them, wet ground throwing light back up. Every frame labelled as generated.',
  path: '/captures',
  keywords: [
    'photoreal AI human frames',
    'generated people photography',
    'AI photorealism test',
    'synthetic human capture',
    'AI hands realism',
    'photoreal generative portrait',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Photoreal Captures', path: '/captures' },
];

export default async function CapturesPage() {
  const captures = await getCaptures();
  const copy = await pageCopy('captures');
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'ImageGallery',
            name: 'Photoreal Captures',
            url: abs('/captures'),
            description:
              'Eight generated human frames, each kept because it is hard in a specific and nameable way.',
            numberOfItems: captures.length,
          },
          ...captures.map((c) =>
            imageObjectSchema({ url: `/img/${c.key}-960.webp`, caption: c.alt })
          ),
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

      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-[1400px] mx-auto space-y-10 md:space-y-14">
          {captures.map((c, i) => (
            <Reveal key={c.key} delay={Math.min(i, 4) * 0.05}>
              <figure className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-5 lg:gap-9 items-start">
                <div className="relative">
                  <Frame
                    src={c.key}
                    upload={c.upload as never}
                    alt={c.alt}
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="w-full"
                    style={{ border: '1px solid var(--brand-concrete)' }}
                    focus={c.focus}
                    priority={i === 0}
                  />
                  <span
                    className="absolute top-0 left-0 px-3 py-1.5 text-[10px] tracking-[0.24em]"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: 'var(--brand-black)',
                      color: 'var(--brand-cyan)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')} · GENERATED
                  </span>
                </div>

                <figcaption>
                  <h2
                    className="text-2xl md:text-3xl tracking-tight mb-4"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                  >
                    {c.title}
                  </h2>

                  <div className="mb-5">
                    <div
                      className="text-[10px] tracking-[0.26em] mb-2"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}
                    >
                      WHAT IT WAS BUILT TO BREAK
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(245,245,240,0.82)' }}>
                      {c.proves}
                    </p>
                  </div>

                  <div>
                    <div
                      className="text-[10px] tracking-[0.26em] mb-2"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
                    >
                      REGISTER
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(245,245,240,0.7)' }}>
                      {c.register}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-gold)">WHY THE LABEL IS ON EVERY ONE</Eyebrow>
          <p
            className="mt-5 max-w-3xl text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.78)' }}
          >
            A generated frame passed off as a photograph is worth less than a generated frame that
            says what it is, because the second one can be checked. The labelling is the argument
            here, not a disclaimer bolted to the end of it.
          </p>
        </div>
      </section>

      <CtaBar
        title="Need frames this hard?"
        body="Tell us the shot that keeps failing. We will tell you whether it is a prompt problem or a pipeline one."
      />
    </>
  );
}
