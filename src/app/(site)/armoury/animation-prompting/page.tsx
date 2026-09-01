import Link from 'next/link';
import { animationStyles as repoAnimationStyles } from '@/data/animation-styles';
import { getResource } from '@/data/resources';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { CopyButton } from '@/components/CopyButton';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { abs } from '@/lib/site';
import { pageCopy } from '@/content/copy';
import { getAnimationStyles } from '@/content/collections';

export const metadata = pageMeta({
  title: 'Prompting Guide by Animation Style: 12 Styles, Free',
  description:
    'How to prompt cel animation, anime, claymation, stylised 3D, storybook, motion graphics, comic, papercraft, rotoscope, pixel art, watercolour and retro 3D. Scaffold, working keywords, the failure each style invites, and a prompt you can paste.',
  path: '/armoury/animation-prompting',
  keywords: [
    'animation style prompts',
    'AI animation prompting guide',
    'claymation prompt',
    'anime prompt guide',
    'pixel art prompt',
    'motion graphics prompt',
    'AI illustration style prompts',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'The Armoury', path: '/armoury' },
  { name: 'Animation Prompting', path: '/armoury/animation-prompting' },
];

const qa = [
  {
    q: 'Why does asking for “claymation” give me smooth plastic?',
    a: 'Because you asked for the material and not the artefacts. Claymation lives in thumbprints, tool marks and a slight frame-to-frame stagger. Ask for the imperfections by name and the style arrives with them.',
  },
  {
    q: 'Why does “anime style” look generic?',
    a: 'Because it averages TV anime, film anime and 1980s OVA into the flattest common denominator. Pick an era and a production register, and name the background treatment separately from the character treatment.',
  },
  {
    q: 'What order should a style prompt be written in?',
    a: 'Technique, then surface behaviour, then what must be absent, then the subject. Naming the absence (no gradients, no anti-aliasing, no opaque white) does more work than any adjective.',
  },
  {
    q: 'Can I mix two styles?',
    a: 'Badly, most of the time. A model given two dialects averages them, and an averaged style is exactly what generic output looks like. If you need two, run two passes and composite.',
  },
];

export default async function AnimationPromptingPage() {
  const copy = await pageCopy('animationPrompting');
  const animationStyles = await getAnimationStyles();
  const r = getResource('animation-prompting')!;

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          faqSchema(qa),
          {
            '@type': 'HowTo',
            name: 'How to prompt a specific animation style',
            description:
              'Name the technique, then the surface behaviour, then what must be absent, then the subject.',
            url: abs('/armoury/animation-prompting'),
            step: [
              { '@type': 'HowToStep', position: 1, name: 'Name the technique', text: 'Open with the production method (hand-drawn 2D cel animation, stop-motion claymation, layered cut paper) rather than a mood.' },
              { '@type': 'HowToStep', position: 2, name: 'Name the surface', text: 'State how the material behaves: paper tooth, thumbprints, line boil, halftone dots, pixel grid.' },
              { '@type': 'HowToStep', position: 3, name: 'Name the absence', text: 'Say what must not appear: no gradients, no anti-aliasing, no opaque white, no rim light. This does more work than any adjective.' },
              { '@type': 'HowToStep', position: 4, name: 'Then the subject', text: 'Describe who is in frame and what they are doing, then the shot.' },
            ],
          },
          {
            '@type': 'ItemList',
            name: 'Animation styles and how to prompt them',
            url: abs('/armoury/animation-prompting'),
            numberOfItems: animationStyles.length,
            itemListElement: animationStyles.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: s.name,
              description: s.what,
            })),
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
      >
        <Reveal delay={0.18}>
          <div
            className="mt-10 p-6 md:p-8 max-w-3xl"
            style={{ borderLeft: '3px solid var(--brand-magenta)', backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <div className="text-[10px] tracking-[0.28em] mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}>
              THE ONE RULE
            </div>
            <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.8)' }}>
              A style name is a request. A list of artefacts is an instruction. Every entry below is
              built the same way (technique, surface, absence, subject) because the thing that
              produces a style reliably is naming what must <em>not</em> be in the frame.
            </p>
          </div>
        </Reveal>
      </PageHeader>

      <nav className="px-5 md:px-10 lg:px-14 pb-10" aria-label="Animation styles">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-2">
          {animationStyles.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="px-3.5 py-2 text-[11px] tracking-[0.14em]"
              style={{ fontFamily: 'var(--font-mono)', border: `1px solid ${s.color}44`, color: s.color, textDecoration: 'none' }}
            >
              {s.num} {s.name.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto space-y-3">
          {animationStyles.map((s) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="p-7 md:p-10 scroll-mt-24 relative overflow-hidden"
                style={{ border: `1px solid ${s.color}28`, backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <div className="h-[3px] absolute top-0 left-0 right-0" style={{ backgroundColor: s.color }} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10">
                  <div className="lg:col-span-4">
                    <div className="text-[10px] tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-mono)', color: s.color }}>
                      STYLE {s.num}
                    </div>
                    <h2 className="text-3xl md:text-5xl leading-[0.9] tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                      {s.name}
                    </h2>
                    <p className="mt-2 text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                      also: {s.aka}
                    </p>
                    <p className="mt-5 text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.72)' }}>
                      {s.what}
                    </p>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="text-[10px] tracking-[0.22em] mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                      WRITE IT IN THIS ORDER
                    </div>
                    <ol className="space-y-2.5 mb-7">
                      {s.scaffold.map((step, i) => (
                        <li key={step} className="flex gap-3 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.82)' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', color: s.color, flexShrink: 0 }}>{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="text-[10px] tracking-[0.22em] mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                      WORDS THAT WORK
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {s.works.map((w) => (
                        <li
                          key={w}
                          className="px-2.5 py-1 text-[11px]"
                          style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(245,245,240,0.75)' }}
                        >
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="text-[10px] tracking-[0.22em] mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}>
                      HOW IT BREAKS
                    </div>
                    <p className="text-sm leading-relaxed mb-7" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.8)' }}>
                      {s.breaks}
                    </p>

                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-[10px] tracking-[0.22em]" style={{ fontFamily: 'var(--font-mono)', color: s.color }}>
                        PASTE THIS
                      </span>
                      <CopyButton text={s.example} color={s.color} />
                    </div>
                    <p
                      className="text-sm leading-relaxed p-4"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: 'rgba(245,245,240,0.9)',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderLeft: `2px solid ${s.color}`,
                      }}
                    >
                      {s.example}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-gold)">QUESTIONS</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
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
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/armoury/camera-movements"
              className="inline-block px-6 py-3 text-sm tracking-wider"
              style={{ fontFamily: 'var(--font-mono)', border: '1px solid var(--brand-cyan)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
            >
              ← 38 CAMERA MOVEMENTS
            </Link>
            <Link
              href="/glossary"
              className="inline-block px-6 py-3 text-sm tracking-wider"
              style={{ fontFamily: 'var(--font-mono)', border: '1px solid var(--brand-gold)', color: 'var(--brand-gold)', textDecoration: 'none' }}
            >
              THE GLOSSARY →
            </Link>
          </div>
        </div>
      </section>

      <CtaBar
        color="var(--brand-magenta)"
        eyebrow="REGISTERS, NOT STYLES"
        title="Seven registers. One brand. One fortnight."
        body="Picking a style is easy. Running seven of them in a single campaign without the brand falling apart is the thing we got hired for."
        href="/work/big-blue-data-academy"
        cta="SEE IT DONE"
      />
    </>
  );
}
