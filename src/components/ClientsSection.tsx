"use client";

import { motion } from 'motion/react';

const clients = [
  {
    name: 'convene',
    render: () => (
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.8rem', color: '#0088CC', letterSpacing: '-0.02em' }}>
        convene
      </span>
    ),
  },
  {
    name: 'upd8.gr',
    render: () => (
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.03em' }}>
        <span style={{ color: '#4A5568' }}>upd</span>
        <span style={{ color: '#2BB5A0' }}>8</span>
        <span style={{ color: '#4A5568' }}>.gr</span>
      </span>
    ),
  },
  {
    name: 'IBNL',
    render: () => (
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', color: '#2D3748', letterSpacing: '0.02em' }}>
        IBNL<span style={{ color: '#2D3748' }}>.</span>
      </span>
    ),
  },
  {
    name: 'TENSIG',
    render: () => (
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.8rem', letterSpacing: '0.08em', background: 'linear-gradient(135deg, #E91E9C, #5B2D8E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        TENSIG
      </span>
    ),
  },
  {
    name: 'PRESGO',
    render: () => (
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', color: '#1A2332', letterSpacing: '0.06em' }}>
        PRESGO
      </span>
    ),
  },
];

// Double the array for seamless loop
const doubledClients = [...clients, ...clients, ...clients, ...clients];

export function ClientsSection() {
  return (
    <section
      className="relative py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: 'var(--brand-black)' }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--brand-concrete), transparent)' }}
      />

      {/* Section label + phrase */}
      <motion.div
        className="text-center mb-10 md:mb-12 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="text-[10px] tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
        >
          Trusted By
        </div>
        <h3
          className="text-xl sm:text-2xl md:text-3xl tracking-tight"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--brand-white)',
            fontWeight: 600,
          }}
        >
          Brands that chose chaos over{' '}
          <span style={{ color: 'var(--brand-magenta)', fontStyle: 'italic' }}>comfortable</span>.
        </h3>
      </motion.div>

      {/* Logo marquee — two rows going opposite directions */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute top-0 bottom-0 left-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--brand-black), transparent)' }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--brand-black), transparent)' }}
        />

        {/* Row 1 — scrolling left */}
        <div className="flex mb-6 overflow-hidden">
          <div
            className="flex items-center gap-10 md:gap-16 animate-scroll-left"
            style={{ willChange: 'transform' }}
          >
            {doubledClients.map((client, i) => (
              <div
                key={`row1-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-4 md:px-6 py-3 rounded-sm transition-all duration-300 hover:scale-110 group"
                style={{
                  minWidth: '140px',
                  filter: 'grayscale(1) brightness(1.8)',
                  opacity: 0.5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0) brightness(1)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(1) brightness(1.8)';
                  e.currentTarget.style.opacity = '0.5';
                }}
              >
                {client.render()}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolling right (reverse) */}
        <div className="flex overflow-hidden">
          <div
            className="flex items-center gap-10 md:gap-16 animate-scroll-right"
            style={{ willChange: 'transform' }}
          >
            {[...doubledClients].reverse().map((client, i) => (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-4 md:px-6 py-3 rounded-sm transition-all duration-300 hover:scale-110"
                style={{
                  minWidth: '140px',
                  filter: 'grayscale(1) brightness(1.8)',
                  opacity: 0.5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0) brightness(1)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(1) brightness(1.8)';
                  e.currentTarget.style.opacity = '0.5';
                }}
              >
                {client.render()}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--brand-violet), var(--brand-magenta), transparent)' }}
      />
    </section>
  );
}
