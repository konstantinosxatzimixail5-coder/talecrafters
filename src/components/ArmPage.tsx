import Link from 'next/link';
import type { Arm } from '@/data/arsenal';
import { getCategories } from '@/content/collections';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';

/**
 * The three arms share a shape: a manifesto line, the list of what the arm
 * covers, the arsenal categories that belong to it, and whatever proof the arm
 * happens to have. Only the proof differs, so it comes in as children.
 */
export async function ArmPage({
  arm,
  eyebrow,
  title,
  accentWord,
  meta,
  children,
  cta,
}: {
  arm: Arm;
  eyebrow: string;
  title: string;
  accentWord: string;
  meta: { label: string; value: string }[];
  children?: React.ReactNode;
  cta: { title: string; body: string };
}) {
  const mine = (await getCategories()).filter((c) => c.arm === arm.slug);
  const others = ['create', 'systems', 'originals'].filter((s) => s !== arm.slug);

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        accentWord={accentWord}
        color={arm.color}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: arm.name.split('/ ')[1] ?? arm.name, path: arm.href },
        ]}
        lede={arm.blurb}
        meta={meta}
      >
        <Reveal delay={0.15}>
          <p
            className="mt-10 text-2xl md:text-4xl lg:text-[3vw] leading-[1.08] tracking-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-display)', color: arm.color }}
          >
            “{arm.line}”
          </p>
        </Reveal>
      </PageHeader>

      <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-concrete-light)">WHAT THIS COVERS</Eyebrow>
          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
            {arm.covers.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline gap-4 p-5"
                style={{ backgroundColor: 'var(--brand-black)' }}
              >
                <span
                  className="text-[11px] tracking-widest flex-shrink-0"
                  style={{ fontFamily: 'var(--font-mono)', color: arm.color, opacity: 0.6 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {children}

      {mine.length > 0 && (
        <section className="px-5 md:px-10 lg:px-14 py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color={arm.color}>IN THE ARSENAL</Eyebrow>
            <div className="mt-8 space-y-3">
              {mine.map((c) => (
                <Reveal key={c.slug}>
                  <Link
                    href={`/arsenal#${c.slug}`}
                    className="block p-7 md:p-9 group"
                    style={{ border: `1px solid ${c.color}30`, backgroundColor: 'rgba(255,255,255,0.02)', textDecoration: 'none' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <h3
                          className="text-3xl md:text-5xl leading-[0.9] tracking-tighter"
                          style={{ fontFamily: 'var(--font-display)', color: c.color }}
                        >
                          {c.title}
                        </h3>
                        <div
                          className="mt-2 text-sm md:text-base"
                          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                        >
                          {c.descriptor}
                        </div>
                      </div>
                      <span className="text-sm tracking-tight" style={{ fontFamily: 'var(--font-display)', color: c.color }}>
                        {c.services.length} SERVICES →
                      </span>
                    </div>
                    <p
                      className="mt-5 max-w-3xl text-base leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.68)' }}
                    >
                      {c.intro}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {others.map((slug) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="p-7 group"
              style={{ border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
            >
              <div className="text-[10px] tracking-[0.28em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                THE OTHER ARMS
              </div>
              <div className="text-2xl md:text-3xl tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                TaleCrafters / {slug.toUpperCase()} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBar color={arm.color} title={cta.title} body={cta.body} />
    </>
  );
}
