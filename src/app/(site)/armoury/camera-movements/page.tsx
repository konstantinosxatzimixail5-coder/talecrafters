import Link from 'next/link';
import { cameraMoves as repoCameraMoves, families } from '@/data/camera-moves';
import { getResource } from '@/data/resources';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { CopyButton } from '@/components/CopyButton';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { abs } from '@/lib/site';
import { pageCopy } from '@/content/copy';
import { getCameraMoves } from '@/content/collections';

export const metadata = pageMeta({
  title: '38 Cinematic Camera Movements for AI Video (Free Prompt Reference)',
  description:
    'Every camera movement we use in generative production: dolly, truck, crane, orbit, rack focus, whip pan, FPV dive and thirty-one more. Each with the direction in camera language and a prompt that produces it. Free, no email gate.',
  path: '/armoury/camera-movements',
  keywords: [
    'AI video camera movements',
    'camera movement prompts',
    'cinematic prompts',
    'dolly zoom prompt',
    'Seedance camera prompts',
    'Higgsfield camera movements',
    'Veo camera prompt',
    'AI film camera vocabulary',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'The Armoury', path: '/armoury' },
  { name: 'Camera Movements', path: '/armoury/camera-movements' },
];

const qa = [
  {
    q: 'Which camera movements work best in AI video generation?',
    a: 'Single, clearly named moves with one intention: slow dolly in, truck left with parallax, crane down, rack focus. Compound moves (orbiting while craning while pulling focus) fail far more often, because the model has to satisfy three constraints at once.',
  },
  {
    q: 'Why does my AI video ignore the camera direction?',
    a: 'Usually because the prompt mixes mood words with movement words, and the mood dominates. Put the move first, in camera-department language, in its own sentence, then describe the subject.',
  },
  {
    q: 'Do these prompts work in every video model?',
    a: 'The vocabulary transfers, because most video models were trained on film and respond to film language. The exact phrasing that lands best varies by model, so treat each prompt as a starting point rather than a magic string.',
  },
  {
    q: 'Can I use these commercially?',
    a: 'Yes. Take them, change them, ship the work. There is no licence to read and no email to give us.',
  },
];

export default async function CameraMovementsPage() {
  const copy = await pageCopy('cameraMovements');
  const cameraMoves = await getCameraMoves();
  /** Grouped from what was read, so a move added in the Studio lands in its family. */
  const movesInFamily = (f: string) => cameraMoves.filter((m) => m.family === f);
  const r = getResource('camera-movements')!;

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          faqSchema(qa),
          {
            '@type': 'HowTo',
            name: 'How to direct a camera move in a generative video model',
            description:
              'Name the move in camera-department language, put it first and alone, then describe the subject and the light.',
            url: abs('/armoury/camera-movements'),
            step: [
              { '@type': 'HowToStep', position: 1, name: 'Name the move', text: 'Open with the movement in camera vocabulary (SLOW DOLLY IN, TRUCK LEFT, CRANE DOWN) as its own sentence.' },
              { '@type': 'HowToStep', position: 2, name: 'Keep it single', text: 'One move per shot. Compound moves fail because the model has to satisfy several constraints at once.' },
              { '@type': 'HowToStep', position: 3, name: 'Then the subject', text: 'Describe who or what is in frame, and what they are doing, after the move is fixed.' },
              { '@type': 'HowToStep', position: 4, name: 'Then the light', text: 'State one key direction and one time of day. Mood adjectives go last, or not at all.' },
            ],
          },
          {
            '@type': 'ItemList',
            name: '38 cinematic camera movements',
            url: abs('/armoury/camera-movements'),
            numberOfItems: cameraMoves.length,
            itemListElement: cameraMoves.map((m, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: m.name,
              description: m.camera,
            })),
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
      >
        <Reveal delay={0.18}>
          <div
            className="mt-10 p-6 md:p-8 max-w-3xl"
            style={{ borderLeft: '3px solid var(--brand-cyan)', backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <div className="text-[10px] tracking-[0.28em] mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}>
              HOW TO USE IT
            </div>
            <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.8)' }}>
              Models trained on film respond to film language. Put the move first, in camera-department
              vocabulary, in its own sentence. Then the subject. Then one key light direction. Mood
              adjectives go last, or not at all: “make it cinematic” is the single most reliable way to
              lose control of a shot.
            </p>
          </div>
        </Reveal>
      </PageHeader>

      {/* Family jump bar */}
      <nav className="px-5 md:px-10 lg:px-14 pb-10" aria-label="Camera move families">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-2">
          {families.map((f) => (
            <a
              key={f.key}
              href={`#${f.key}`}
              className="px-4 py-2 text-[11px] tracking-[0.16em] transition-colors"
              style={{ fontFamily: 'var(--font-mono)', border: `1px solid ${f.color}44`, color: f.color, textDecoration: 'none' }}
            >
              {f.name.toUpperCase()} · {movesInFamily(f.key).length}
            </a>
          ))}
        </div>
      </nav>

      {families.map((f) => (
        <section key={f.key} id={f.key} className="px-5 md:px-10 lg:px-14 py-10 md:py-14 scroll-mt-24">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="pb-5 mb-8" style={{ borderBottom: `2px solid ${f.color}` }}>
                <h2
                  className="text-3xl md:text-5xl leading-[0.9] tracking-tighter"
                  style={{ fontFamily: 'var(--font-display)', color: f.color }}
                >
                  {f.name}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  {f.note}
                </p>
              </div>
            </Reveal>

            <div className="space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              {movesInFamily(f.key).map((m, i) => (
                <Reveal key={m.slug} delay={Math.min(i, 4) * 0.03}>
                  <article
                    id={m.slug}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 p-6 md:p-8 scroll-mt-24"
                    style={{ backgroundColor: 'var(--brand-black)' }}
                  >
                    <div className="lg:col-span-3">
                      <div className="flex items-baseline gap-3">
                        <span
                          className="text-3xl leading-none tracking-tighter"
                          style={{ fontFamily: 'var(--font-display)', color: f.color, opacity: 0.4 }}
                        >
                          {m.num}
                        </span>
                        <h3 className="text-xl md:text-2xl leading-tight tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                          {m.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                        {m.useFor}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <div className="text-[10px] tracking-[0.22em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                        THE DIRECTION
                      </div>
                      <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.82)' }}>
                        {m.camera}
                      </p>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[10px] tracking-[0.22em]" style={{ fontFamily: 'var(--font-mono)', color: f.color }}>
                          THE PROMPT
                        </span>
                        <CopyButton text={m.prompt} color={f.color} />
                      </div>
                      <p
                        className="text-sm leading-relaxed p-4"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color: 'rgba(245,245,240,0.9)',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          borderLeft: `2px solid ${f.color}`,
                        }}
                      >
                        {m.prompt}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 md:px-10 lg:px-14 py-12">
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
          <div className="mt-8">
            <Link
              href="/armoury/animation-prompting"
              className="inline-block px-6 py-3 text-sm tracking-wider"
              style={{ fontFamily: 'var(--font-mono)', border: '1px solid var(--brand-magenta)', color: 'var(--brand-magenta)', textDecoration: 'none' }}
            >
              NEXT RESOURCE: PROMPTING BY ANIMATION STYLE →
            </Link>
          </div>
        </div>
      </section>

      <CtaBar
        color="var(--brand-cyan)"
        eyebrow="OR HAND IT OVER"
        title="Knowing the move is not the same as landing it."
        body="These 38 are free. Getting eleven usable seconds out of them, on a deadline, inside a credit ceiling, is the job."
      />
    </>
  );
}
