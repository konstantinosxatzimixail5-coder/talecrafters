import Link from 'next/link';
import { getArm } from '@/data/arsenal';
import { ArmPage } from '@/components/ArmPage';
import { Eyebrow } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Originals — Our Own Films, Games and Stories',
  description:
    'TaleCrafters Originals: seven completed feature screenplays, game concepts, animated series development, graphic narrative and long-form fiction. The part with nobody paying us to be right.',
  path: '/originals',
  keywords: [
    'original IP development',
    'narrative development studio',
    'screenplay development',
    'game narrative design',
    'animated series development',
  ],
});

const qa = [
  {
    q: 'Why does an agency have its own IP?',
    a: 'Because "story-first" is a claim, and a claim needs evidence somebody did not pay for. Seven finished feature screenplays and a slate of game and series development is the evidence.',
  },
  {
    q: 'Can we read the screenplays?',
    a: 'Not from this page. An unproduced screenplay is a private document until it is not. What is public is the shape of the work and the fact that it exists.',
  },
  {
    q: 'Do you co-develop IP with brands?',
    a: 'Yes. Branded narrative, owned series and character-led formats are all live conversations, and they run on the same development discipline as the originals rather than as campaign work with a story bolted on.',
  },
];

const slate = [
  { n: '01', k: 'Feature screenplays', v: 'Seven completed features across thriller, psychological drama and satire. Titles unlisted.' },
  { n: '02', k: 'Short films', v: 'Personal shorts and satire pieces produced end to end inside our own pipelines.' },
  { n: '03', k: 'Animated series', v: 'Series development: bibles, trained casts, first-and-last-frame continuity across episodes.' },
  { n: '04', k: 'Games', v: 'Playable narrative concepts built through agentic development environments.' },
  { n: '05', k: 'Graphic narratives', v: 'Sequential panel storytelling, developed as its own form rather than as a storyboard.' },
  { n: '06', k: 'Long-form fiction', v: 'Novels and novellas in development, which is where the story muscle actually gets built.' },
  { n: '07', k: 'Experimental interactive', v: 'Formats where the audience does something instead of watching something.' },
];

export default function OriginalsPage() {
  const arm = getArm('originals')!;
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Originals', path: '/originals' },
          ]),
          faqSchema(qa),
        ]}
      />
      <ArmPage
        arm={arm}
        eyebrow="03 / TALECRAFTERS ORIGINALS"
        title="NOBODY PAID US"
        accentWord="TO BE RIGHT"
        meta={[
          { label: 'Screenplays', value: '7 completed features' },
          { label: 'In development', value: 'Games, series, long-form fiction' },
          { label: 'Titles', value: 'Unlisted, on purpose' },
          { label: 'Why it is here', value: 'Story-first needs evidence' },
        ]}
        cta={{
          title: 'Own something instead of renting attention.',
          body: 'Branded narrative, owned series and character-led formats, developed on the same discipline as our own slate rather than as a campaign with a story bolted on.',
        }}
      >
        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-gold)">THE SLATE</Eyebrow>
            <div className="mt-8 space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              {slate.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.03}>
                  <div
                    className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 p-6 md:p-7 items-baseline"
                    style={{ backgroundColor: 'var(--brand-black)' }}
                  >
                    <span
                      className="md:col-span-1 text-sm tracking-widest"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)', opacity: 0.6 }}
                    >
                      {s.n}
                    </span>
                    <h3
                      className="md:col-span-4 text-2xl md:text-3xl tracking-tighter"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {s.k}
                    </h3>
                    <p
                      className="md:col-span-7 text-base leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.72)' }}
                    >
                      {s.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-concrete-light)">THE OBVIOUS QUESTIONS</Eyebrow>
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
            <div className="mt-8">
              <Link
                href="/writing"
                className="inline-block px-6 py-3 text-sm tracking-wider"
                style={{ fontFamily: 'var(--font-mono)', border: '1px solid var(--brand-gold)', color: 'var(--brand-gold)', textDecoration: 'none' }}
              >
                SEE THE WRITING →
              </Link>
            </div>
          </div>
        </section>
      </ArmPage>
    </>
  );
}
