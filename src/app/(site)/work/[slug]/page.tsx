import Link from 'next/link';
import { notFound } from 'next/navigation';
import { work as repoWork, getCase as getRepoCase } from '@/data/work';
import { Frame } from '@/components/Frame';
import { VideoPlayer } from '@/components/VideoPlayer';
import { watchUrl, remoteThumb } from '@/data/video';
import { PageHeader, Eyebrow, SpecBlock, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, caseStudySchema, videoObjectSchema, imageObjectSchema } from '@/lib/seo';
import { getWork } from '@/content/collections';

/** The case behind a slug, dataset first, so an edit in the Studio reaches
 *  the case study's own page and not only the index. */
async function resolveCase(slug: string) {
  return (await getWork()).find((w) => w.slug === slug) ?? getRepoCase(slug);
}

export function generateStaticParams() {
  return repoWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = await resolveCase(slug);
  if (!w) return {};
  return pageMeta({
    title: `${w.client}: ${w.title}`,
    description: w.summary,
    path: `/work/${w.slug}`,
    image: `/img/${w.hero.src}-960.webp`,
    keywords: [w.client, w.discipline, 'case study', 'synthetic media production'],
  });
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const all = await getWork();
  const w = all.find((c) => c.slug === slug) ?? getRepoCase(slug);
  if (!w) notFound();

  // Next/previous walks what was actually read, so a case added in the Studio
  // is in the rotation rather than skipped.
  const index = all.findIndex((c) => c.slug === w.slug);
  const next = all[(index + 1) % all.length];

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Selected Damage', path: '/work' },
    { name: w.client, path: `/work/${w.slug}` },
  ];

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          caseStudySchema({
            title: w.title,
            client: w.client,
            year: w.year,
            slug: w.slug,
            summary: w.summary,
            image: `/img/${w.hero.src}-960.webp`,
            genre: w.genre,
            keywords: [w.client, w.discipline, ...(w.place ? [w.place] : [])],
          }),
          // Every frame on the page, described rather than merely linked. A
          // case study is mostly pictures, so leaving them as bare <img> src
          // values throws away the only content the page really has.
          ...[w.hero, ...w.gallery].map((shot) =>
            imageObjectSchema({
              url: `/img/${shot.src}-960.webp`,
              caption: shot.alt,
              width: 960,
            })
          ),
          // Only emitted for films a reader can actually watch on this page.
          ...(w.videos ?? []).map((v) =>
            videoObjectSchema({
              name: `${w.client} — ${v.title}`,
              description: v.note,
              thumbnailUrl: v.poster ? `/img/${v.poster}-960.webp` : remoteThumb(v.youtubeId),
              uploadDate: v.uploadDate,
              duration: v.duration,
              embedUrl: watchUrl(v.youtubeId),
              path: `/work/${w.slug}`,
            })
          ),
        ]}
      />

      <PageHeader
        eyebrow={`${w.kind} · ${w.year}`}
        title={w.client.toUpperCase()}
        color={w.accent}
        crumbs={crumbs}
        lede={w.summary}
        meta={[
          { label: 'Client', value: w.client },
          { label: 'Discipline', value: w.discipline },
          { label: 'Year', value: w.year },
          { label: 'Where', value: w.place ?? 'Remote' },
        ]}
      >
        <Reveal delay={0.1}>
          <h2
            className="mt-12 text-2xl md:text-4xl lg:text-[3vw] leading-[1.05] tracking-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-display)', color: 'rgba(245,245,240,0.9)' }}
          >
            {w.title}
          </h2>
        </Reveal>
      </PageHeader>

      {/* Hero frame, big. The user asked for huge visuals and they were right. */}
      <section className="px-5 md:px-10 lg:px-14">
        <Reveal>
          {/* Big, but capped: a portrait hero at full page width becomes two
              screens of one photograph before a reader reaches a sentence. */}
          <figure
            className="max-w-[1400px] mx-auto relative overflow-hidden h-[52vh] sm:h-[62vh] lg:h-[74vh]"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Frame
              src={w.hero.src}
              upload={w.hero.upload as never}
              alt={w.hero.alt}
              focus={w.hero.focus}
              priority
              sizes="100vw"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption
              className="absolute bottom-0 left-0 px-4 py-2 text-[10px] tracking-[0.22em]"
              style={{ fontFamily: 'var(--font-mono)', backgroundColor: 'rgba(10,10,12,0.82)', color: w.accent }}
            >
              {w.hero.label}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* The films, directly under the hero. A case that shipped moving work
          should show it before it explains it, and the players stay cold until
          somebody presses one. */}
      {w.videos?.length ? (
        <section className="px-5 md:px-10 lg:px-14 pt-16 md:pt-20">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color={w.accent}>{w.videos.length > 1 ? 'THE FILMS' : 'THE FILM'}</Eyebrow>
            <div
              className={`mt-8 grid gap-8 ${
                w.videos.length === 1
                  ? 'grid-cols-1 max-w-4xl'
                  : w.videos[0].ratio === '9:16'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 lg:grid-cols-2'
              }`}
            >
              {w.videos.map((v, i) => (
                <Reveal key={v.youtubeId} delay={(i % 3) * 0.06}>
                  <VideoPlayer video={v} accent={w.accent} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* The five blocks. Same order on every case, so a reader learns it once. */}
      <section className="px-5 md:px-10 lg:px-14 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <SpecBlock label="THE PROBLEM" color={w.accent}>
              {w.problem}
            </SpecBlock>
            <SpecBlock label="THE IDEA" color={w.accent}>
              {w.idea}
            </SpecBlock>
            <SpecBlock label="WHAT TALECRAFTERS MADE" color={w.accent}>
              <ul className="space-y-2.5 mt-1">
                {w.made.map((m) => (
                  <li key={m} className="flex gap-3">
                    <span style={{ color: w.accent }}>→</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </SpecBlock>
            <SpecBlock label={w.resultKind === 'Delivered' ? 'THE RESULT' : 'THE INTENDED RESULT'} color={w.accent}>
              {w.result}
            </SpecBlock>
            <SpecBlock label="HOW WE BUILT IT" color={w.accent}>
              {w.method}
            </SpecBlock>
          </div>

          <aside className="lg:col-span-5 space-y-10">
            <div>
              <Eyebrow color={w.accent}>THE ARTEFACTS</Eyebrow>
              <dl className="mt-5 grid grid-cols-1 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                {w.artefacts.map((a) => (
                  <div key={a.label} className="p-4 flex justify-between gap-6" style={{ backgroundColor: 'var(--brand-black)' }}>
                    <dt
                      className="text-[11px] tracking-[0.2em] whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-mono)', color: w.accent }}
                    >
                      {a.label.toUpperCase()}
                    </dt>
                    <dd className="text-sm text-right" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.75)' }}>
                      {a.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <Eyebrow color="var(--brand-concrete-light)">THE GATES</Eyebrow>
              <div className="mt-5 space-y-4">
                {w.gates.map((g) => (
                  <div key={g.name} className="p-4" style={{ borderLeft: `2px solid ${w.accent}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <div className="text-sm mb-1.5" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}>
                      {g.name}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                      {g.test}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Eyebrow color="var(--brand-concrete-light)">THE STACK</Eyebrow>
              <table className="mt-5 w-full text-sm">
                <tbody>
                  {w.stack.map((s) => (
                    <tr key={s.stage} style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                      <th
                        scope="row"
                        className="text-left py-2.5 pr-4 align-top font-normal whitespace-nowrap"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)', fontSize: 11, letterSpacing: '0.12em' }}
                      >
                        {s.stage.toUpperCase()}
                      </th>
                      <td className="py-2.5 text-right" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.8)' }}>
                        {s.tool}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {w.links.length > 0 && (
              <div>
                <Eyebrow color="var(--brand-concrete-light)">LIVE</Eyebrow>
                <div className="mt-4 flex flex-wrap gap-3">
                  {w.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm transition-colors"
                      style={{ fontFamily: 'var(--font-mono)', border: `1px solid ${w.accent}`, color: w.accent, textDecoration: 'none' }}
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Gallery. Big frames, no crops that hide what the gate was checking. */}
      <section className="px-5 md:px-10 lg:px-14 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color={w.accent}>THE FRAMES</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {w.gallery.map((shot, i) => (
              <Reveal key={shot.src} delay={(i % 2) * 0.06}>
                <figure
                  className={`relative overflow-hidden group ${w.gallery.length > 4 && i === 0 ? 'md:col-span-2' : ''}`}
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <Frame
                    src={shot.src}
                    upload={shot.upload as never}
                    alt={shot.alt}
                    focus={shot.focus}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <figcaption
                    className="absolute bottom-0 left-0 right-0 px-4 py-2.5 text-[10px] tracking-[0.18em]"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      background: 'linear-gradient(to top, rgba(10,10,12,0.92), transparent)',
                      color: 'rgba(245,245,240,0.8)',
                    }}
                  >
                    {shot.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href={`/work/${next.slug}`}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-7 md:p-10 group"
            style={{ border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
          >
            <div>
              <div className="text-[10px] tracking-[0.28em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: next.accent }}>
                NEXT CASE
              </div>
              <div className="text-3xl md:text-5xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                {next.client}
              </div>
            </div>
            <span className="text-2xl md:text-4xl" style={{ fontFamily: 'var(--font-display)', color: next.accent }}>
              →
            </span>
          </Link>
        </div>
      </section>

      <CtaBar
        color={w.accent}
        title="Your turn."
        body="Bring the launch, the deadline and the constraint you think is impossible. We will tell you which pipeline it belongs in and what it costs."
      />
    </>
  );
}
