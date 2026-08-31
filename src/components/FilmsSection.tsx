import Link from 'next/link';
import { films } from '@/data/films';
import { Frame } from '@/components/Frame';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/kit';

/**
 * The two original shorts on the front page.
 *
 * They lead with their key art rather than a contact strip: a four-frame strip
 * at card width is too small to carry a title and reads as decoration instead
 * of as a film.
 */
export function FilmsSection() {
  if (films.length === 0) return null;

  return (
    <section
      id="films"
      className="relative px-5 md:px-10 lg:px-14 py-24 md:py-32"
      style={{ backgroundColor: 'var(--brand-black)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <Eyebrow color="var(--brand-magenta)">AI FILMMAKING WORKFLOWS</Eyebrow>

        <h2
          className="mt-6 mb-5 text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.92]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          TWO ORIGINALS,{' '}
          <span style={{ color: 'var(--brand-magenta)' }}>PUBLISHED WITH THEIR PROCESS</span>
        </h2>

        <p
          className="max-w-3xl text-lg md:text-xl leading-relaxed mb-12"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.72)' }}
        >
          Written, designed, directed and cut inside a generative pipeline. The films are here and
          so is the sheet behind each one: every generation block, the prompt as it was written, and
          the locks that stopped the world drifting between shots.
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
