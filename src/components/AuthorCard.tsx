import Link from 'next/link';
import { people, type PersonEntity } from '@/lib/site';

/**
 * The byline card at the foot of a post.
 *
 * A name in a meta row is a string. This is the entity: who wrote it, what
 * they do, and a link to the page that says so. Every article on the site gets
 * one, which is also what makes `author.url` in the Article node point
 * somewhere a crawler can follow.
 *
 * A byline that matches nobody in `people` renders the studio instead of
 * inventing a profile page that would 404.
 */
export function AuthorCard({ name, accent = 'var(--brand-cyan)' }: { name?: string; accent?: string }) {
  const person: PersonEntity | undefined = name
    ? people.find((p) => p.name.toLowerCase() === name.toLowerCase())
    : undefined;

  const initials = (person?.name ?? 'TaleCrafters')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <section className="mt-14 pt-8" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
      <h2
        className="text-[10px] tracking-[0.3em] mb-5"
        style={{ fontFamily: 'var(--font-mono)', color: accent }}
      >
        WRITTEN BY
      </h2>

      <div className="flex flex-col sm:flex-row gap-5 p-5" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="flex-shrink-0 flex items-center justify-center text-xl"
          style={{
            width: 64,
            height: 64,
            border: `1px solid ${accent}`,
            color: accent,
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.05em',
          }}
          aria-hidden
        >
          {initials}
        </div>

        <div className="min-w-0">
          {person ? (
            <Link
              href={`/authors/${person.slug}`}
              className="block text-xl leading-tight mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)', textDecoration: 'none' }}
            >
              {person.name}
            </Link>
          ) : (
            <span
              className="block text-xl leading-tight mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
            >
              {name || 'TaleCrafters'}
            </span>
          )}

          <div
            className="text-[11px] tracking-[0.18em] mb-3"
            style={{ fontFamily: 'var(--font-mono)', color: accent }}
          >
            {(person?.jobTitle ?? 'Synthetic media and creative systems studio').toUpperCase()}
          </div>

          <p className="text-sm leading-relaxed" style={{ color: 'var(--brand-concrete-light)' }}>
            {person?.bio ??
              'TaleCrafters produces generative films, campaigns and visual worlds, and builds the systems that make and distribute them.'}
          </p>

          {person && (
            <Link
              href={`/authors/${person.slug}`}
              className="inline-block mt-4 text-xs"
              style={{ fontFamily: 'var(--font-mono)', color: accent, textDecoration: 'none' }}
            >
              More from {person.name.split(' ')[0]} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
