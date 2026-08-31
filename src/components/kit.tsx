import Link from 'next/link';
import { Reveal } from './Reveal';

/** The mono label with a rule that sits above every section on the site. */
export function Eyebrow({
  children,
  color = 'var(--brand-cyan)',
  className = '',
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: color }} />
      <span
        className="text-[10px] tracking-[0.3em] uppercase"
        style={{ fontFamily: 'var(--font-mono)', color }}
      >
        {children}
      </span>
    </div>
  );
}

/**
 * The top of an interior page. Every route uses it, so the headline scale, the
 * breadcrumb and the lede width are decided once instead of drifting per page.
 */
export function PageHeader({
  eyebrow,
  title,
  accentWord,
  color = 'var(--brand-cyan)',
  lede,
  meta,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  accentWord?: string;
  color?: string;
  lede?: string;
  meta?: { label: string; value: string }[];
  crumbs?: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <header className="relative px-5 md:px-10 lg:px-14 pt-32 md:pt-40 pb-14 md:pb-20 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-[420px] pointer-events-none"
        style={{ background: `radial-gradient(120% 90% at 12% 0%, ${color}14, transparent 62%)` }}
      />
      <div className="relative max-w-[1400px] mx-auto">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="tap-inline flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  {i > 0 && (
                    <span style={{ color: 'var(--brand-concrete)', fontSize: 11 }}>/</span>
                  )}
                  <Link
                    href={c.path}
                    className="text-[11px] tracking-wider transition-colors"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: i === crumbs.length - 1 ? 'var(--brand-concrete-light)' : color,
                      textDecoration: 'none',
                    }}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Eyebrow color={color}>{eyebrow}</Eyebrow>

        <h1
          className="hero-rise mt-5 text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[6vw] leading-[0.86] tracking-tighter max-w-[16ch]"
          style={{ fontFamily: 'var(--font-display)', animationDelay: '0.04s' }}
        >
          {title}
          {accentWord && (
            <>
              <br />
              <span style={{ color }}>{accentWord}</span>
            </>
          )}
        </h1>

        {lede && (
          <p
            className="hero-rise mt-8 text-lg md:text-xl leading-relaxed max-w-3xl"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.72)', animationDelay: '0.12s' }}
          >
            {lede}
          </p>
        )}

        {meta && meta.length > 0 && (
          <div className="hero-rise" style={{ animationDelay: '0.2s' }}>
            <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              {meta.map((m) => (
                <div key={m.label} className="p-4" style={{ backgroundColor: 'var(--brand-black)' }}>
                  <dt
                    className="text-[10px] tracking-[0.22em] mb-1.5"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    {m.label}
                  </dt>
                  <dd
                    className="text-sm leading-snug"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-white)' }}
                  >
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {children}
      </div>
    </header>
  );
}

/** A big display heading used mid-page. */
export function SectionTitle({
  children,
  accent,
  color = 'var(--brand-cyan)',
  className = '',
}: {
  children: React.ReactNode;
  accent?: string;
  color?: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-4xl md:text-6xl lg:text-[4.4vw] leading-[0.88] tracking-tighter ${className}`}
      style={{ fontFamily: 'var(--font-display)' }}
    >
      {children}
      {accent && (
        <>
          {' '}
          <span style={{ color }}>{accent}</span>
        </>
      )}
    </h2>
  );
}

/**
 * The sober block. Feral headline upstairs, this downstairs: mono label, plain
 * sentence, no adjectives. The contrast is the point.
 */
export function SpecBlock({
  label,
  color = 'var(--brand-cyan)',
  children,
}: {
  label: string;
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-6" style={{ borderTop: `1px solid ${color}30` }}>
      <div
        className="text-[10px] tracking-[0.28em] mb-3"
        style={{ fontFamily: 'var(--font-mono)', color }}
      >
        {label}
      </div>
      <div
        className="text-base md:text-lg leading-relaxed"
        style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.78)' }}
      >
        {children}
      </div>
    </div>
  );
}

export function CtaBar({
  eyebrow = 'YOUR MOVE',
  title,
  body,
  href = '/contact',
  cta = 'BRIEF US',
  color = 'var(--brand-magenta)',
}: {
  eyebrow?: string;
  title: string;
  body: string;
  href?: string;
  cta?: string;
  color?: string;
}) {
  return (
    <section className="px-5 md:px-10 lg:px-14 py-20 md:py-28">
      <div
        className="max-w-[1400px] mx-auto relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}18, rgba(0,229,204,0.05) 60%, transparent)`,
          border: '1px solid rgba(255,255,255,0.09)',
        }}
      >
        <div className="p-8 md:p-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Eyebrow color={color}>{eyebrow}</Eyebrow>
            <h2
              className="mt-4 text-4xl md:text-6xl leading-[0.9] tracking-tighter"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h2>
            <p
              className="mt-5 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}
            >
              {body}
            </p>
          </div>
          <Link
            href={href}
            className="inline-block px-8 py-4 text-base tracking-tight whitespace-nowrap self-start lg:self-auto transition-transform hover:scale-105"
            style={{
              fontFamily: 'var(--font-display)',
              backgroundColor: color,
              color: color === 'var(--brand-cyan)' || color === 'var(--brand-gold)' ? 'var(--brand-black)' : 'var(--brand-white)',
              textDecoration: 'none',
            }}
          >
            {cta} →
          </Link>
        </div>
        <div
          className="absolute top-0 right-0 w-16 h-16"
          style={{ borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}`, opacity: 0.35 }}
        />
      </div>
    </section>
  );
}
