import Link from 'next/link';
import { getFilms } from '@/content/collections';
import { Frame } from '@/components/Frame';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/kit';
import { pageCopy } from '@/content/copy';

/**
 * The original shorts, as a section of the Armoury.
 *
 * They sit here rather than on the front page because the Armoury is where the
 * things given away in full already live, and a published process sheet is the
 * largest of them.
 *
 * They lead with their key art rather than a contact strip: a four-frame strip
 * at card width is too small to carry a title and reads as decoration instead
 * of as a film.
 */
export async function FilmsSection() {
  const films = await getFilms();
  if (films.length === 0) return null;

  const copy = (await pageCopy('filmsSection')).main;

  return (
    <section
      id="films"
      className="relative px-5 md:px-10 lg:px-14 py-16 md:py-24"
      style={{ backgroundColor: 'var(--brand-black)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <Eyebrow color="var(--brand-magenta)">{copy.eyebrow}</Eyebrow>

        <h2
          className="mt-6 mb-5 text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.94]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {copy.heading}{' '}
          <span style={{ color: 'var(--brand-magenta)' }}>{copy.accentWord}</span>
        </h2>

        <p
          className="max-w-3xl text-lg md:text-xl leading-relaxed mb-12"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.72)' }}
        >
          {copy.lede}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {films.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.08}>
              <Link href={`/films/${f.slug}`} className="group block h-full" style={{ textDecoration: 'none' }}>
                <div className="h-full" style={{ border: '1px solid var(--brand-concrete)' }}>
                  <div className="relative overflow-hidden">
                    <Frame
                      src={f.poster}
                      alt={f.posterAlt}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
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
                  <div className="p-6 md:p-7">
                    <div
                      className="text-[11px] tracking-[0.2em] mb-3"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                    >
                      {f.title.toUpperCase()}
                      <span style={{ color: 'var(--brand-gold)' }}> · ORIGINAL · </span>
                      {f.runtime}
                    </div>
                    <p
                      className="text-xl md:text-2xl leading-snug tracking-tight"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                    >
                      {f.standfirst}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/films"
          className="inline-flex items-center min-h-[24px] mt-10 text-base tracking-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-magenta)', textDecoration: 'none' }}
        >
          BOTH FILMS, WITH THE FULL PROCESS SHEETS →
        </Link>
      </div>
    </section>
  );
}
