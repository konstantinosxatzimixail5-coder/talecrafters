import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Download } from 'lucide-react';
import { films as repoFilms, findFilm } from '@/data/films';
import { getFilms } from '@/content/collections';
import { Frame } from '@/components/Frame';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, imageObjectSchema, videoObjectSchema } from '@/lib/seo';
import { VideoPlayer } from '@/components/VideoPlayer';
import { watchUrl } from '@/data/video';
import { abs, SITE_URL } from '@/lib/site';

export function generateStaticParams() {
  return repoFilms.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = findFilm(slug);
  if (!f) return {};
  return pageMeta({
    title: `${f.title} — An Original Short, With Its Process Sheet`,
    description: f.logline,
    path: `/films/${f.slug}`,
    image: `/img/${f.poster}-960.webp`,
    keywords: [
      f.title,
      'AI short film',
      'AI filmmaking workflow',
      'generative film process',
      'Seedance 2.0',
      'AI film prompts',
    ],
  });
}

/** A labelled key/value row, used by the spec, delivery and spine blocks. */
function Rows({ rows, color }: { rows: { key: string; value: string }[]; color: string }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
      {rows.map((r) => (
        <div key={r.key} className="py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <dt
            className="text-[10px] tracking-[0.26em] mb-1.5"
            style={{ fontFamily: 'var(--font-mono)', color }}
          >
            {r.key.toUpperCase()}
          </dt>
          <dd className="text-base leading-relaxed" style={{ color: 'rgba(245,245,240,0.82)' }}>
            {r.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = findFilm(slug);
  if (!f) notFound();

  const color = 'var(--brand-magenta)';
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'AI Filmmaking Workflows', path: '/films' },
    { name: f.title, path: `/films/${f.slug}` },
  ];
  const other = (await getFilms()).find((x) => x.slug !== f.slug);

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'CreativeWork',
            '@id': abs(`/films/${f.slug}/#film`),
            name: f.title,
            headline: f.title,
            alternativeHeadline: f.strapline,
            abstract: f.logline,
            description: f.logline,
            url: abs(`/films/${f.slug}`),
            genre: 'Short film',
            creator: { '@id': `${SITE_URL}/#organization` },
            producer: { '@id': `${SITE_URL}/#organization` },
            publisher: { '@id': `${SITE_URL}/#organization` },
            copyrightHolder: { '@id': `${SITE_URL}/#organization` },
            inLanguage: 'en-GB',
            isAccessibleForFree: true,
            timeRequired: `PT${f.runtime.split(':')[0]}M${f.runtime.split(':')[1]}S`,
            image: imageObjectSchema({ url: `/img/${f.poster}-960.webp`, caption: f.posterAlt }),
            // The process sheet is the citable artefact, so it is described as
            // a work in its own right rather than left as a link. Not every
            // film has one: the third publishes its beats on the page instead.
            ...(f.doc
              ? {
                  subjectOf: {
                    '@type': 'CreativeWork',
                    name: f.doc.title,
                    description: f.doc.summary,
                    url: abs(f.doc.path),
                    encodingFormat: 'application/pdf',
                  },
                }
              : {}),
          },
          ...(f.video
            ? [
                videoObjectSchema({
                  name: f.title,
                  description: f.logline,
                  thumbnailUrl: `/img/${f.poster}-960.webp`,
                  uploadDate: f.video.uploadDate,
                  duration: f.video.duration,
                  embedUrl: watchUrl(f.video.youtubeId),
                  path: `/films/${f.slug}`,
                }),
              ]
            : []),
          ...[
            { key: f.poster, alt: f.posterAlt },
            { key: f.hero, alt: f.heroAlt },
            { key: f.strip, alt: f.stripAlt },
            { key: f.closing, alt: f.closingAlt },
            ...f.beats.map((b) => ({ key: b.image, alt: b.alt })),
          ].map((s) => imageObjectSchema({ url: `/img/${s.key}-960.webp`, caption: s.alt })),
        ]}
      />

      <PageHeader
        eyebrow={`ORIGINAL SHORT · ${f.runtime}`}
        title={f.title.toUpperCase()}
        color={color}
        crumbs={crumbs}
        lede={f.logline}
        meta={f.spec.slice(0, 4).map((s) => ({ label: s.key, value: s.value }))}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <Frame
              src={f.hero}
              alt={f.heroAlt}
              sizes="100vw"
              className="w-full"
              style={{ border: '1px solid var(--brand-concrete)' }}
              priority
            />
          </Reveal>
          {f.video ? (
            <Reveal>
              <div className="mt-8 max-w-4xl">
                <VideoPlayer video={f.video} accent={color} />
              </div>
            </Reveal>
          ) : null}
          <p
            className="mt-5 max-w-3xl text-xl md:text-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {f.strapline}
          </p>
        </div>
      </section>

      {/* --- the spine ------------------------------------------------- */}
      <section className="px-5 md:px-10 lg:px-14 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color={color}>THE SPINE</Eyebrow>
          <div className="mt-6 max-w-4xl">
            <Rows rows={f.spine} color={color} />
            <p className="mt-5 text-base leading-relaxed" style={{ color: 'rgba(245,245,240,0.7)' }}>
              {f.spineNote}
            </p>
          </div>
        </div>
      </section>

      {/* --- the beats -------------------------------------------------- */}
      <section className="px-5 md:px-10 lg:px-14 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-cyan)">
            THE BLOCKS, WITH THE PROMPT AS IT WAS WRITTEN
          </Eyebrow>
          <div className="mt-8 space-y-10">
            {f.beats.map((b, i) => (
              <Reveal key={b.letter} delay={Math.min(i, 4) * 0.04}>
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-5 lg:gap-8">
                  <Frame
                    src={b.image}
                    alt={b.alt}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="w-full"
                    style={{ border: '1px solid var(--brand-concrete)' }}
                  />
                  <div>
                    <div
                      className="text-[11px] tracking-[0.24em] mb-2"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
                    >
                      {b.letter} · {b.span}
                    </div>
                    <h3
                      className="text-2xl md:text-3xl tracking-tight mb-3"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                    >
                      {b.name}
                    </h3>
                    <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(245,245,240,0.78)' }}>
                      {b.note}
                    </p>
                    <div
                      className="p-4 text-sm leading-relaxed"
                      style={{
                        border: '1px solid rgba(0,229,204,0.22)',
                        backgroundColor: 'rgba(0,229,204,0.04)',
                        fontFamily: 'var(--font-mono)',
                        color: 'rgba(245,245,240,0.86)',
                        overflowWrap: 'anywhere',
                      }}
                    >
                      <span
                        className="block text-[10px] tracking-[0.26em] mb-2"
                        style={{ color: 'var(--brand-cyan)' }}
                      >
                        PROMPT
                      </span>
                      {b.prompt}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- cast sheets ------------------------------------------------ */}
      {f.cast.length > 0 && (
        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-14">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-gold)">THE DESIGN SHEETS</Eyebrow>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed" style={{ color: 'rgba(245,245,240,0.78)' }}>
              {f.castIntro}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {f.cast.map((c) => (
                <div key={c.tag} className="p-5" style={{ border: '1px solid rgba(201,168,76,0.25)' }}>
                  <div
                    className="text-[10px] tracking-[0.24em] mb-2"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
                  >
                    {c.tag}
                  </div>
                  <div
                    className="text-lg tracking-tight mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                  >
                    {c.name}
                  </div>
                  {c.note && (
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,240,0.7)' }}>
                      {c.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--brand-concrete-light)' }}>
              {f.castNote}
            </p>
          </div>
        </section>
      )}

      {/* --- pipeline and stack ----------------------------------------- */}
      <section className="px-5 md:px-10 lg:px-14 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-violet-text)">THE PIPELINE, STAGE BY STAGE</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {f.pipeline.map((p) => (
              <div
                key={p.num}
                className="p-6 h-full relative"
                style={{ border: '1px solid rgba(139,0,255,0.26)', backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <div className="h-[3px] absolute top-0 left-0 right-0" style={{ backgroundColor: 'var(--brand-violet)' }} />
                <div className="flex items-baseline justify-between mb-3">
                  <span
                    className="text-3xl tracking-tighter"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-violet-text)', opacity: 0.45 }}
                  >
                    {p.num}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    {p.tool}
                  </span>
                </div>
                <div
                  className="text-lg tracking-tight mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                >
                  {p.name}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,240,0.72)' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--brand-concrete-light)' }}>
            {f.pipelineNote}
          </p>
        </div>
      </section>

      {/* --- the locks --------------------------------------------------- */}
      {f.locks.length > 0 && (
        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-14">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-magenta)">WHAT DRIFTED, AND WHAT HELD IT</Eyebrow>
            <div className="mt-8 overflow-x-auto" style={{ border: '1px solid var(--brand-concrete)' }}>
              <table className="w-full border-collapse" style={{ minWidth: 620 }}>
                <thead>
                  <tr>
                    {['The problem', 'How it showed', 'The lock'].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="text-left px-4 py-3 text-[10px] tracking-[0.16em]"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--brand-magenta)',
                          borderBottom: '1px solid var(--brand-concrete)',
                          backgroundColor: 'rgba(255,255,255,0.02)',
                        }}
                      >
                        {h.toUpperCase()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {f.locks.map((l, i) => (
                    <tr key={l.name}>
                      <td
                        className="px-4 py-3 align-top text-sm"
                        style={{
                          color: 'var(--brand-white)',
                          borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {l.name}
                      </td>
                      <td
                        className="px-4 py-3 align-top text-sm leading-relaxed"
                        style={{
                          color: 'rgba(245,245,240,0.72)',
                          borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {l.symptom}
                      </td>
                      <td
                        className="px-4 py-3 align-top text-sm leading-relaxed"
                        style={{
                          color: 'rgba(245,245,240,0.72)',
                          borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {l.lock}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* --- delivery and the document ----------------------------------- */}
      <section className="px-5 md:px-10 lg:px-14 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow color="var(--brand-cyan)">DELIVERY</Eyebrow>
            <div className="mt-6">
              <Rows rows={f.delivery} color="var(--brand-cyan)" />
            </div>
          </div>
          {f.doc ? (
          <div>
            <Eyebrow color="var(--brand-gold)">THE PROCESS DOCUMENT</Eyebrow>
            <p className="mt-6 text-base leading-relaxed" style={{ color: 'rgba(245,245,240,0.78)' }}>
              {f.doc.summary}
            </p>
            <a
              href={f.doc.path}
              download
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 text-[11px] tracking-[0.18em] min-h-[24px]"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--brand-black)',
                backgroundColor: 'var(--brand-gold)',
                textDecoration: 'none',
              }}
            >
              <Download size={15} /> {f.doc.title.toUpperCase()}
            </a>
          </div>
          ) : null}
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-14">
        <div className="max-w-[1400px] mx-auto">
          <Frame
            src={f.closing}
            alt={f.closingAlt}
            sizes="100vw"
            className="w-full"
            style={{ border: '1px solid var(--brand-concrete)' }}
          />
          {other && (
            <div className="mt-10 pt-8" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
              <Eyebrow color="var(--brand-magenta)">THE OTHER ONE</Eyebrow>
              <Link
                href={`/films/${other.slug}`}
                className="mt-4 inline-flex items-center min-h-[24px] text-3xl md:text-4xl tracking-tighter"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)', textDecoration: 'none' }}
              >
                {other.title} →
              </Link>
              <p className="mt-2 text-base" style={{ color: 'var(--brand-concrete-light)' }}>
                {other.standfirst}
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaBar
        title="This, with your world in it."
        body="Same pipeline, same locks, same published process. Bring the brief and the deadline."
      />
    </>
  );
}
