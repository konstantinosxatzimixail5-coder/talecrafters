import Link from 'next/link';
import { films as repoFilms } from '@/data/films';
import { Frame } from '@/components/Frame';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, imageObjectSchema } from '@/lib/seo';
import { abs, SITE_URL } from '@/lib/site';
import { pageCopy } from '@/content/copy';
import { getFilms } from '@/content/collections';

export const metadata = pageMeta({
  title: 'AI Filmmaking Workflows — Three Original Shorts, Published With Their Process',
  description:
    'Twin Moons, Skyrunner and Mars Drop: three original short films made inside a generative pipeline and published with the working behind each one. Every generation block, every prompt, every design reference and the locks that held the world together.',
  path: '/films',
  keywords: [
    'AI filmmaking workflow',
    'AI short film',
    'generative film production process',
    'Seedance 2.0 workflow',
    'AI film pipeline',
    'AI animation workflow',
    'generative filmmaking case study',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'AI Filmmaking Workflows', path: '/films' },
];

export default async function FilmsIndex() {
  const copy = await pageCopy('films');
  const films = await getFilms();
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'CollectionPage',
            name: 'AI Filmmaking Workflows',
            url: abs('/films'),
            description:
              'Three original short films made inside a generative pipeline, each published with the process behind it.',
            hasPart: films.map((f) => ({ '@id': abs(`/films/${f.slug}/#film`) })),
          },
          ...films.map((f) => ({
            '@type': 'CreativeWork',
            '@id': abs(`/films/${f.slug}/#film`),
            name: f.title,
            headline: f.title,
            abstract: f.logline,
            description: f.logline,
            url: abs(`/films/${f.slug}`),
            genre: 'Short film',
            creator: { '@id': `${SITE_URL}/#organization` },
            producer: { '@id': `${SITE_URL}/#organization` },
            inLanguage: 'en-GB',
            image: imageObjectSchema({ url: `/img/${f.poster}-960.webp`, caption: f.posterAlt }),
          })),
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

      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {films.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.08}>
              <Link
                href={`/films/${f.slug}`}
                className="group block h-full"
                style={{ textDecoration: 'none' }}
              >
                <div style={{ border: '1px solid var(--brand-concrete)' }}>
                  <div className="relative overflow-hidden">
                    <Frame
                      src={f.poster}
                      alt={f.posterAlt}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={i === 0}
                    />
                    <span
                      className="absolute top-0 left-0 px-3 py-1.5 text-[10px] tracking-[0.24em]"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'var(--brand-black)',
                        color: 'var(--brand-magenta)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-6 md:p-8">
                    <div
                      className="text-[11px] tracking-[0.2em] mb-3"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                    >
                      {f.title.toUpperCase()}
                      <span style={{ color: 'var(--brand-gold)' }}> · ORIGINAL · </span>
                      {f.runtime}
                    </div>
                    <h2
                      className="text-2xl md:text-3xl leading-tight tracking-tight mb-3"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                    >
                      {f.standfirst}
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}
                    >
                      {f.strapline}
                    </p>
                    <div
                      className="mt-6 pt-5 text-sm tracking-tight"
                      style={{ borderTop: '1px solid var(--brand-concrete)', fontFamily: 'var(--font-display)', color: 'var(--brand-magenta)' }}
                    >
                      OPEN THE PROCESS SHEET →
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-cyan)">WHY THESE ARE PUBLISHED WHOLE</Eyebrow>
          <p
            className="mt-5 max-w-3xl text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.78)' }}
          >
            A finished thirty-five second film proves that one thirty-five second film exists. The
            sheet behind it is the part that transfers: which block ran on which model, what the
            prompt actually said, which reference held the character still, and where the world
            drifted anyway. Both are here in full, including the prompts, because the reference is
            not the moat.
          </p>
        </div>
      </section>

      <CtaBar
        title="Want one of these for a brand?"
        body="Same pipeline, same locks, a client's world instead of ours. Bring the brief and the deadline."
      />
    </>
  );
}
