import Link from 'next/link';
import { promptGuides, promptFamilies, guidesInFamily } from '@/data/prompt-guides';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { CopyButton } from '@/components/CopyButton';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { abs } from '@/lib/site';
import { pageCopy } from '@/content/copy';

export const metadata = pageMeta({
  title: 'The Prompting Library — Prompt Guides for AI Video, Image and Story',
  description: `${promptGuides.length} prompting guides for generative production: video and shot prompts, photoreal stills, character consistency, story and script prompting, inpainting and extension, and system prompts that run unattended. Each one gives the scaffold, a working prompt, the failure mode and the fix. Free, no email gate.`,
  path: '/supply-drop/prompting-library',
  keywords: [
    'AI prompting guide',
    'prompt library',
    'AI video prompt guide',
    'how to write AI video prompts',
    'image prompt structure',
    'character consistency prompt',
    'AI storytelling prompts',
    'system prompt template',
    'negative prompt guide',
    'inpainting prompt',
    'prompt engineering for video',
    'free prompt templates',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'The Supply Drop', path: '/supply-drop' },
  { name: 'Prompting Library', path: '/supply-drop/prompting-library' },
];

const qa = [
  {
    q: 'What is the right order to write a prompt in?',
    a: 'Constraint first, description last. For video: the camera move, then the subject and its single action, then the setting, then one light direction, then the lens, then at most two words of grade. Most prompts fail because the mood adjectives were written first and consumed the model’s attention before it reached the instruction.',
  },
  {
    q: 'Why does my AI video ignore what I asked for?',
    a: 'Usually because the prompt contains more than one instruction competing for the same budget: a camera move, a complex action, a wardrobe change and a style reference all at once. Cut to a single move and a single action and the compliance rate rises immediately.',
  },
  {
    q: 'Do negative prompts actually help?',
    a: 'Only when they name artefacts you have personally seen in your own failed renders. A copied list of forty generic negative terms mostly describes things the model was never going to do, and dilutes the two or three terms that matter.',
  },
  {
    q: 'How do you keep the same character across several shots?',
    a: 'With a written character brief that specifies structure rather than personality — bone, proportion, two or three fixed marks, exact wardrobe — pasted unchanged into every prompt, plus a reference image used for identity only. Description alone stops working somewhere around the third shot.',
  },
  {
    q: 'Should I name an artist in a prompt to get a style?',
    a: 'No, and not only for rights reasons. A name returns an average of everything attributed to that person, which is rarely the specific thing you liked. Decomposing the look into medium, surface, mark, palette and — most importantly — what the style does not contain gets you closer and is defensible in a production record.',
  },
  {
    q: 'What is different about a prompt that runs unattended?',
    a: 'It has to be a specification rather than a request: named inputs, a numbered procedure, an exact output shape, and an explicit branch for what to do when the model cannot determine something. Anything left to judgement will vary by run four hundred, and improvisation is the thing automation was meant to remove.',
  },
  {
    q: 'Is any of this gated?',
    a: 'No. No email, no form, no download wall. Copy the prompts, change them, use them commercially.',
  },
];

export default async function PromptingLibraryPage() {
  const copy = await pageCopy('promptingLibrary');

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          faqSchema(qa),
          {
            '@type': 'HowTo',
            name: 'How to write a prompt that produces what you asked for',
            description:
              'Write the constraint before the description: the instruction first, the subject second, the mood last or not at all.',
            url: abs('/supply-drop/prompting-library'),
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Open with the constraint',
                text: 'Put the hardest instruction first and alone: the camera move, the ratio, the output format. Adjectives written first consume the model’s attention before it reaches the instruction.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'One action, one subject',
                text: 'Name a single subject and a single action. Compound requests fail because the model has to satisfy several constraints at once.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'State what must not change',
                text: 'Name the things that have to survive: the label, the face, the empty area, the light direction. A generative prompt is defined as much by its locks as by its description.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Name the absence',
                text: 'Say what must not appear, using artefacts from your own failed renders rather than a generic negative list.',
              },
              {
                '@type': 'HowToStep',
                position: 5,
                name: 'Keep the invariant in a file',
                text: 'Anything repeated across shots — the lock block, the continuity line, the character brief — gets pasted, never retyped. Retyped text drifts.',
              },
            ],
          },
          {
            '@type': 'ItemList',
            name: 'The TaleCrafters Prompting Library',
            url: abs('/supply-drop/prompting-library'),
            numberOfItems: promptGuides.length,
            itemListElement: promptGuides.map((g, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: g.name,
              description: g.purpose,
            })),
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
      >
        <Reveal delay={0.18}>
          <div
            className="mt-10 p-6 md:p-8 max-w-3xl"
            style={{ borderLeft: '3px solid var(--brand-gold)', backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <div
              className="text-[10px] tracking-[0.28em] mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
            >
              {copy.theRule.label}
            </div>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.8)' }}
            >
              {copy.theRule.body}
            </p>
          </div>
        </Reveal>
      </PageHeader>

      {/* Family jump bar */}
      <nav className="px-5 md:px-10 lg:px-14 pb-10" aria-label="Prompt guide families">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-2">
          {promptFamilies.map((f) => (
            <a
              key={f.key}
              href={`#${f.key}`}
              className="px-4 py-2 text-[11px] tracking-[0.16em] transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                border: `1px solid ${f.color}44`,
                color: f.color,
                textDecoration: 'none',
              }}
            >
              {f.name.toUpperCase()} · {guidesInFamily(f.key).length}
            </a>
          ))}
        </div>
      </nav>

      {promptFamilies.map((f) => (
        <section key={f.key} id={f.key} className="px-5 md:px-10 lg:px-14 py-10 md:py-14 scroll-mt-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl mb-10">
              <Eyebrow color={f.color}>{f.name.toUpperCase()}</Eyebrow>
              <p
                className="mt-4 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.72)' }}
              >
                {f.blurb}
              </p>
            </div>

            <div className="space-y-3">
              {guidesInFamily(f.key).map((g, i) => (
                <Reveal key={g.slug} delay={i * 0.05}>
                  <article
                    id={g.slug}
                    className="p-7 md:p-10 scroll-mt-24 relative overflow-hidden"
                    style={{ border: `1px solid ${f.color}28`, backgroundColor: 'rgba(255,255,255,0.02)' }}
                  >
                    <div className="h-[3px] absolute top-0 left-0 right-0" style={{ backgroundColor: f.color }} />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10">
                      <div className="lg:col-span-4">
                        <div
                          className="text-[10px] tracking-[0.3em] mb-3"
                          style={{ fontFamily: 'var(--font-mono)', color: f.color }}
                        >
                          GUIDE {String(i + 1).padStart(2, '0')}
                        </div>
                        <h2
                          className="text-2xl md:text-4xl leading-[0.95] tracking-tighter"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {g.name}
                        </h2>
                        <p
                          className="mt-4 text-base leading-relaxed"
                          style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.75)' }}
                        >
                          {g.purpose}
                        </p>
                        <p
                          className="mt-4 text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                        >
                          WHEN: {g.when}
                        </p>
                      </div>

                      <div className="lg:col-span-4">
                        <div
                          className="text-[10px] tracking-[0.22em] mb-3"
                          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                        >
                          WRITE IT IN THIS ORDER
                        </div>
                        <ol className="space-y-2.5">
                          {g.scaffold.map((step, n) => (
                            <li
                              key={step}
                              className="flex gap-3 text-sm leading-relaxed"
                              style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.82)' }}
                            >
                              <span style={{ fontFamily: 'var(--font-mono)', color: f.color, flexShrink: 0 }}>
                                {n + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="lg:col-span-4">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span
                            className="text-[10px] tracking-[0.22em]"
                            style={{ fontFamily: 'var(--font-mono)', color: f.color }}
                          >
                            PASTE THIS
                          </span>
                          <CopyButton text={g.prompt} color={f.color} />
                        </div>
                        <p
                          className="text-sm leading-relaxed p-4 mb-7 whitespace-pre-line"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'rgba(245,245,240,0.9)',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            borderLeft: `2px solid ${f.color}`,
                          }}
                        >
                          {g.prompt}
                        </p>

                        <div
                          className="text-[10px] tracking-[0.22em] mb-3"
                          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}
                        >
                          HOW IT BREAKS
                        </div>
                        <p
                          className="text-sm leading-relaxed mb-5"
                          style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.8)' }}
                        >
                          {g.failure}
                        </p>

                        <div
                          className="text-[10px] tracking-[0.22em] mb-3"
                          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
                        >
                          THE FIX
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.8)' }}
                        >
                          {g.fix}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 md:px-10 lg:px-14 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-gold)">QUESTIONS</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {qa.map((item) => (
              <div key={item.q} className="p-6" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-lg mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/supply-drop/camera-movements"
              className="inline-block px-6 py-3 text-sm tracking-wider"
              style={{
                fontFamily: 'var(--font-mono)',
                border: '1px solid var(--brand-cyan)',
                color: 'var(--brand-cyan)',
                textDecoration: 'none',
              }}
            >
              38 CAMERA MOVEMENTS →
            </Link>
            <Link
              href="/supply-drop/animation-prompting"
              className="inline-block px-6 py-3 text-sm tracking-wider"
              style={{
                fontFamily: 'var(--font-mono)',
                border: '1px solid var(--brand-magenta)',
                color: 'var(--brand-magenta)',
                textDecoration: 'none',
              }}
            >
              PROMPTING BY ANIMATION STYLE →
            </Link>
            <Link
              href="/glossary"
              className="inline-block px-6 py-3 text-sm tracking-wider"
              style={{
                fontFamily: 'var(--font-mono)',
                border: '1px solid var(--brand-gold)',
                color: 'var(--brand-gold)',
                textDecoration: 'none',
              }}
            >
              THE GLOSSARY →
            </Link>
          </div>
        </div>
      </section>

      <CtaBar
        color="var(--brand-gold)"
        eyebrow="THE PROMPT IS THE EASY PART"
        title="Anyone can write one. Running four hundred inside a budget is the job."
        body="Every scaffold on this page is free. The pipeline that runs them at volume, catches the failures before a client does and keeps the spend inside a ceiling is what a studio is for."
      />
    </>
  );
}
