"use client";

import { motion } from 'motion/react';

function ConveneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" stroke="#0088CC" strokeWidth="3" fill="none" />
      <circle cx="12" cy="16" r="5" fill="#CC2244" opacity="0.9" />
      <circle cx="18" cy="16" r="5" fill="#0088CC" opacity="0.9" />
    </svg>
  );
}

function Upd8Icon() {
  return (
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
      <path d="M14 4L14 22" stroke="#2BB5A0" strokeWidth="3" strokeLinecap="round" />
      <path d="M7 11L14 4L21 11" stroke="#2BB5A0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="27" r="3" fill="#4A5568" />
    </svg>
  );
}

function TensigIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="url(#tensig-grad)" strokeWidth="2" fill="none" />
      <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" stroke="url(#tensig-grad)" strokeWidth="1.5" fill="none" />
      <defs>
        <linearGradient id="tensig-grad" x1="4" y1="2" x2="28" y2="30">
          <stop stopColor="#E91E9C" />
          <stop offset="1" stopColor="#5B2D8E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PresgoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="4" cy="10" r="3" fill="#8BC34A" />
      <circle cx="4" cy="22" r="3" fill="#FF5722" />
      <path d="M10 6L20 16L10 26" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 6L28 16L18 26" stroke="#FF9800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SeleneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" fill="url(#selene-grad)" />
      <path d="M16 3C16 3 20 10 20 16C20 22 16 29 16 29" stroke="white" strokeWidth="1" opacity="0.6" />
      <path d="M4 12C4 12 10 14 16 14C22 14 28 12 28 12" stroke="white" strokeWidth="1" opacity="0.6" />
      <circle cx="16" cy="16" r="4" fill="white" />
      <defs>
        <radialGradient id="selene-grad" cx="0.4" cy="0.4">
          <stop stopColor="#E84FAD" />
          <stop offset="1" stopColor="#C2185B" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function CocoonIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
      <path d="M16 4C16 4 8 12 8 20C8 24 12 28 16 28C20 28 24 24 24 20C24 12 16 4 16 4Z" fill="url(#cocoon-grad)" />
      <path d="M16 8C16 8 12 14 12 19C12 22 14 26 16 26" stroke="white" strokeWidth="1" opacity="0.5" />
      <defs>
        <linearGradient id="cocoon-grad" x1="8" y1="4" x2="24" y2="28">
          <stop stopColor="#66BB6A" />
          <stop offset="1" stopColor="#2E7D32" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const clients = [
  {
    name: 'convene',
    icon: ConveneIcon,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0088CC', letterSpacing: '-0.02em' },
  },
  {
    name: 'upd8.gr',
    icon: Upd8Icon,
    render: () => (
      <span>
        <span style={{ color: '#4A5568' }}>upd</span>
        <span style={{ color: '#2BB5A0' }}>8</span>
        <span style={{ color: '#4A5568' }}>.gr</span>
      </span>
    ),
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.03em' },
  },
  {
    name: 'IBNL.',
    icon: null,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 800, color: '#8A9BB0', letterSpacing: '0.02em' },
  },
  {
    name: 'TENSIG',
    icon: TensigIcon,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', background: 'linear-gradient(135deg, #E91E9C, #5B2D8E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  },
  {
    name: 'PRESGO',
    icon: PresgoIcon,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 800, color: '#8A9BB0', letterSpacing: '0.06em' },
  },
  {
    name: 'SELENE CC',
    icon: SeleneIcon,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 700, color: '#E84FAD', letterSpacing: '0.04em' },
  },
  {
    name: 'COCOON',
    icon: CocoonIcon,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.04em' },
  },
];

// Quadruple for seamless loop
const repeatedClients = [...clients, ...clients, ...clients, ...clients];

export function ClientsSection() {
  return (
    <section
      className="relative py-10 md:py-14 overflow-hidden"
      style={{ backgroundColor: 'var(--brand-black)' }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--brand-concrete), transparent)' }}
      />

      {/* Section label + phrase */}
      <motion.div
        className="text-center mb-8 md:mb-10 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="text-[10px] tracking-[0.3em] uppercase mb-3"
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
          Where <span style={{ color: 'var(--brand-magenta)', fontStyle: 'italic' }}>bold brands</span> belong.
        </h3>
      </motion.div>

      {/* Single-row logo marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute top-0 bottom-0 left-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--brand-black), transparent)' }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--brand-black), transparent)' }}
        />

        <div className="flex overflow-hidden">
          <div
            className="flex items-center gap-12 md:gap-20 animate-scroll-left"
            style={{ willChange: 'transform' }}
          >
            {repeatedClients.map((client, i) => (
              <div
                key={`client-${i}`}
                className="flex-shrink-0 flex items-center gap-3 px-2 transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  filter: 'grayscale(0.8) brightness(0.7)',
                  opacity: 0.6,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0) brightness(1)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0.8) brightness(0.7)';
                  e.currentTarget.style.opacity = '0.6';
                }}
              >
                {client.icon && <client.icon />}
                <span
                  className="text-lg md:text-xl whitespace-nowrap"
                  style={client.textStyle as React.CSSProperties}
                >
                  {client.render ? client.render() : client.name}
                </span>
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
