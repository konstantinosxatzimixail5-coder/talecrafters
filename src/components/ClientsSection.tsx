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

function BaklatsidisIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="3" width="18" height="26" rx="2" stroke="url(#bak-grad)" strokeWidth="2.5" fill="none" />
      <path d="M10 3V29" stroke="url(#bak-grad)" strokeWidth="2.5" />
      <path d="M10 16H20C22.2 16 24 14.2 24 12V11C24 8.8 22.2 7 20 7H10" stroke="url(#bak-grad)" strokeWidth="2" fill="none" />
      <path d="M10 16H21C23.8 16 26 18.2 26 21V22C26 24.8 23.8 27 21 27H10" stroke="url(#bak-grad)" strokeWidth="2" fill="none" />
      <defs>
        <linearGradient id="bak-grad" x1="4" y1="3" x2="26" y2="29">
          <stop stopColor="#1A3A4A" />
          <stop offset="1" stopColor="#0E7C86" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MariposaIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* Antennae */}
      <path d="M15 11C14 7 12.5 5 11 3.5" stroke="#8A9A2B" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 11C18 7 19.5 5 21 3.5" stroke="#8A9A2B" strokeWidth="1.4" strokeLinecap="round" />
      {/* Upper wings, drawn as the mark's nested leaf scrolls */}
      <path d="M15 12C15 8 12 6 7 6C2.6 6 2 8.5 2.6 11.5C3.3 15 6 17 10 17C13 17 15 15.5 15 12Z" stroke="#8A9A2B" strokeWidth="1.5" fill="none" />
      <path d="M13 12C13 10 11.5 8.8 9 8.8C6.6 8.8 5.4 10 5.6 11.6C5.9 13.4 7.5 14.6 9.6 14.6C11.6 14.6 13 13.6 13 12Z" stroke="#8A9A2B" strokeWidth="1.2" fill="none" />
      <path d="M17 12C17 8 20 6 25 6C29.4 6 30 8.5 29.4 11.5C28.7 15 26 17 22 17C19 17 17 15.5 17 12Z" stroke="#8A9A2B" strokeWidth="1.5" fill="none" />
      <path d="M19 12C19 10 20.5 8.8 23 8.8C25.4 8.8 26.6 10 26.4 11.6C26.1 13.4 24.5 14.6 22.4 14.6C20.4 14.6 19 13.6 19 12Z" stroke="#8A9A2B" strokeWidth="1.2" fill="none" />
      {/* Lower wings */}
      <path d="M15 19C15 16.5 12.8 15 9.5 15C5.5 15 3.6 17 3.9 20.4C4.2 24.4 7 27 11 27C13.6 27 15 25 15 19Z" stroke="#8A9A2B" strokeWidth="1.5" fill="none" />
      <path d="M17 19C17 16.5 19.2 15 22.5 15C26.5 15 28.4 17 28.1 20.4C27.8 24.4 25 27 21 27C18.4 27 17 25 17 19Z" stroke="#8A9A2B" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function JarfisIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* A lotus: one upright petal flanked by two pairs sweeping outward */}
      <path d="M16 3C13.4 6.6 12.4 10.4 13 14.6C13.9 16.2 18.1 16.2 19 14.6C19.6 10.4 18.6 6.6 16 3Z" fill="#111318" />
      <path d="M12.6 15.4C9.6 12.2 6.4 10.6 3 10.4C3.6 15 5.8 18.4 9.6 20.4C11.6 20.6 13.4 18.4 12.6 15.4Z" fill="#111318" />
      <path d="M19.4 15.4C22.4 12.2 25.6 10.6 29 10.4C28.4 15 26.2 18.4 22.4 20.4C20.4 20.6 18.6 18.4 19.4 15.4Z" fill="#111318" />
      <path d="M14.4 17C12.6 19.6 11.8 22.6 12.2 26C14 27.2 18 27.2 19.8 26C20.2 22.6 19.4 19.6 17.6 17C16.6 16.4 15.4 16.4 14.4 17Z" fill="#111318" />
    </svg>
  );
}

function BbdaIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* Data bars rising out of a deep-blue ground */}
      <rect x="3" y="3" width="26" height="26" rx="5" fill="#123A6B" />
      <rect x="8" y="17" width="4" height="8" rx="1" fill="#4FC3F7" />
      <rect x="14" y="12" width="4" height="13" rx="1" fill="#81D4FA" />
      <rect x="20" y="7" width="4" height="18" rx="1" fill="#FFFFFF" opacity="0.92" />
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
  {
    name: 'Big Blue Data Academy',
    icon: BbdaIcon,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 700, color: '#4FC3F7', letterSpacing: '0.02em' },
  },
  {
    name: 'MARIPOSA',
    icon: MariposaIcon,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 600, color: '#A8B84A', letterSpacing: '0.22em' },
  },
  {
    name: 'JARFIS',
    icon: JarfisIcon,
    render: () => (
      <span>
        <span style={{ letterSpacing: '0.1em' }}>JARFIS</span>
        <span style={{ fontSize: '0.55em', letterSpacing: '0.24em', opacity: 0.7, marginLeft: '0.5em' }}>
          PROPERTY GROUP
        </span>
      </span>
    ),
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 800, color: '#C7CBD1' },
  },
  {
    name: 'BAKLATSIDIS BROS',
    icon: BaklatsidisIcon,
    textStyle: { fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0E7C86', letterSpacing: '0.06em' },
  },
];

// Two copies is what a -50% translate needs to loop seamlessly. Four was
// double the DOM and double the SVG the compositor keeps alive while it runs.
const repeatedClients = [...clients, ...clients];

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
          The brands that <span style={{ color: 'var(--brand-magenta)', fontStyle: 'italic' }}>get it</span>.
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
                  filter: 'grayscale(0.8)',
                  opacity: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0) brightness(1)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0.8)';
                  e.currentTarget.style.opacity = '1';
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
