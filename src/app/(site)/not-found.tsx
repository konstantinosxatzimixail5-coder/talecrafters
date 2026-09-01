"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{
      backgroundColor: 'var(--brand-black)',
      color: 'var(--brand-white)',
      fontFamily: 'var(--font-display)'
    }}>
      <div className="text-center">
        <div className="text-[20vw] leading-none tracking-tighter" style={{ color: 'var(--brand-magenta)' }}>
          404
        </div>
        <div className="mt-8 text-4xl md:text-6xl tracking-tight">
          Lost in the <span style={{ color: 'var(--brand-cyan)' }}>void</span>?
        </div>
        <div className="mt-4 text-xl" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
          This page doesn&apos;t exist. Unlike our content, which very much does.
        </div>
        <a
          href="/"
          className="inline-block mt-12 px-8 py-4 text-2xl tracking-tight transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: 'var(--brand-magenta)',
            color: 'var(--brand-white)',
            fontFamily: 'var(--font-display)'
          }}
        >
          ESCAPE &rarr;
        </a>
      </div>
    </div>
  );
}
