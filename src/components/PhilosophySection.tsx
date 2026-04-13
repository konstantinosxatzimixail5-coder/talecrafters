"use client";

import { motion } from 'motion/react';

/* Premium animated icon components */

/* 1. Story > Everything — open book with glowing pages */
function StoryIcon({ color }: { color: string }) {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" whileHover={{ scale: 1.15 }}>
      {/* Book spine */}
      <motion.path d="M20 6V34" stroke={color} strokeWidth="2" opacity="0.4" />
      {/* Left page */}
      <motion.path
        d="M20 6C16 6 6 7 4 10V32C6 29 16 28 20 28"
        stroke={color} strokeWidth="1.8" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
      />
      {/* Right page */}
      <motion.path
        d="M20 6C24 6 34 7 36 10V32C34 29 24 28 20 28"
        stroke={color} strokeWidth="1.8" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}
      />
      {/* Glow pulse from center */}
      <motion.circle cx="20" cy="17" r="5" fill={color} opacity="0.12"
        animate={{ r: [5, 9, 5], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Text lines on left page */}
      <motion.line x1="9" y1="16" x2="17" y2="16" stroke={color} strokeWidth="1" opacity="0.35"
        animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.line x1="9" y1="20" x2="15" y2="20" stroke={color} strokeWidth="1" opacity="0.25" />
      <motion.line x1="9" y1="24" x2="16" y2="24" stroke={color} strokeWidth="1" opacity="0.25" />
    </motion.svg>
  );
}

/* 2. Speed Without Sacrifice — dual arrows racing with trail */
function VelocityIcon({ color }: { color: string }) {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" whileHover={{ scale: 1.15 }}>
      {/* Speed trails */}
      <motion.line x1="4" y1="14" x2="18" y2="14" stroke={color} strokeWidth="1.5" opacity="0.2"
        animate={{ x1: [2, 8, 2], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.line x1="6" y1="20" x2="22" y2="20" stroke={color} strokeWidth="1.5" opacity="0.2"
        animate={{ x1: [4, 10, 4], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />
      <motion.line x1="4" y1="26" x2="18" y2="26" stroke={color} strokeWidth="1.5" opacity="0.2"
        animate={{ x1: [2, 8, 2], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      />
      {/* Arrow head */}
      <motion.path
        d="M24 8L36 20L24 32" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}
      />
      {/* Inner arrow */}
      <motion.path
        d="M18 14L26 20L18 26" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"
        animate={{ x: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

/* 3. No Sacred Cows — shattered shield */
function SacredCowIcon({ color }: { color: string }) {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" whileHover={{ scale: 1.15, rotate: 5 }}>
      {/* Shield outline */}
      <motion.path
        d="M20 4L6 12V22C6 30 20 36 20 36C20 36 34 30 34 22V12L20 4Z"
        stroke={color} strokeWidth="1.8" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
      />
      {/* Crack lines */}
      <motion.path d="M20 10L17 18L22 22L18 30" stroke={color} strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }}
      />
      <motion.path d="M17 18L12 20" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }} viewport={{ once: true }}
      />
      <motion.path d="M22 22L27 21" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }} viewport={{ once: true }}
      />
      {/* Impact glow */}
      <motion.circle cx="20" cy="20" r="4" fill={color} opacity="0.1"
        animate={{ r: [3, 7, 3], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.svg>
  );
}

/* 4. Tension Is Currency — crosshair with pulsing core */
function TensionIcon({ color }: { color: string }) {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" whileHover={{ scale: 1.15 }}>
      {/* Outer ring */}
      <motion.circle cx="20" cy="20" r="15" stroke={color} strokeWidth="1.5" fill="none" strokeDasharray="4 3"
        animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '20px 20px' }}
      />
      {/* Inner ring */}
      <motion.circle cx="20" cy="20" r="8" stroke={color} strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }} viewport={{ once: true }}
      />
      {/* Crosshair lines */}
      <motion.line x1="20" y1="2" x2="20" y2="10" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <motion.line x1="20" y1="30" x2="20" y2="38" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <motion.line x1="2" y1="20" x2="10" y2="20" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <motion.line x1="30" y1="20" x2="38" y2="20" stroke={color} strokeWidth="1.5" opacity="0.5" />
      {/* Pulsing core */}
      <motion.circle cx="20" cy="20" r="3" fill={color}
        animate={{ r: [2.5, 4, 2.5], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
}

/* 5. Humor Or Death — theatre masks morphing */
function SkullIcon({ color }: { color: string }) {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" whileHover={{ scale: 1.15, y: -2 }}>
      {/* Happy mask */}
      <motion.path
        d="M6 12C6 6 12 4 16 4H18C18 4 14 8 14 14C14 18 16 20 16 20"
        stroke={color} strokeWidth="1.8" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }} viewport={{ once: true }}
      />
      <motion.circle cx="12" cy="12" r="1.5" fill={color}
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path d="M9 17C10 19 14 19 15 17" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Sad mask */}
      <motion.path
        d="M34 16C34 10 28 8 24 8H22C22 8 26 12 26 18C26 22 24 24 24 24"
        stroke={color} strokeWidth="1.8" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
      />
      <motion.circle cx="28" cy="16" r="1.5" fill={color}
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.path d="M25 23C26 21 30 21 31 23" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Connection spark */}
      <motion.circle cx="20" cy="20" r="2" fill={color} opacity="0.3"
        animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      {/* Ribbon */}
      <motion.path d="M14 28C16 32 24 32 26 28" stroke={color} strokeWidth="1.2" fill="none" opacity="0.4"
        animate={{ d: ['M14 28C16 32 24 32 26 28', 'M14 28C16 34 24 34 26 28', 'M14 28C16 32 24 32 26 28'] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  );
}

/* 6. Content = Culture — signal wave broadcasting */
function CultureIcon({ color }: { color: string }) {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" whileHover={{ scale: 1.15 }}>
      {/* Antenna base */}
      <motion.path d="M20 22V36" stroke={color} strokeWidth="2" opacity="0.5" />
      <motion.path d="M14 36H26" stroke={color} strokeWidth="2" opacity="0.4" />
      {/* Signal dot */}
      <motion.circle cx="20" cy="18" r="3" fill={color}
        animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* Wave rings expanding outward */}
      <motion.path d="M12 18C12 13.5 15.5 10 20 10C24.5 10 28 13.5 28 18" stroke={color} strokeWidth="1.5" fill="none"
        animate={{ opacity: [0.5, 0.15, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path d="M7 18C7 10.8 13 5 20 5C27 5 33 10.8 33 18" stroke={color} strokeWidth="1.2" fill="none"
        animate={{ opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />
      <motion.path d="M3 18C3 8.6 10.6 1 20 1C29.4 1 37 8.6 37 18" stroke={color} strokeWidth="1" fill="none"
        animate={{ opacity: [0.15, 0.05, 0.15] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      />
    </motion.svg>
  );
}

const iconComponents = [StoryIcon, VelocityIcon, SacredCowIcon, TensionIcon, SkullIcon, CultureIcon];

const principles = [
  {
    title: "STORY > EVERYTHING",
    description: "Technology is the amplifier. Story is the signal. We refuse to let the tail wag the dog.",
    accent: 'var(--brand-magenta)',
  },
  {
    title: "SPEED WITHOUT SACRIFICE",
    description: "Fast doesn\u2019t mean cheap. It means we\u2019re not wasting your time on things that don\u2019t move the needle.",
    accent: 'var(--brand-cyan)',
  },
  {
    title: "NO SACRED COWS",
    description: "Your brand guidelines aren\u2019t scripture. If they\u2019re getting in the way of great work, we\u2019ll tell you.",
    accent: 'var(--brand-violet)',
  },
  {
    title: "TENSION IS CURRENCY",
    description: "If they\u2019re not stopping mid-scroll, you\u2019ve already lost. We engineer moments that hijack attention and refuse to give it back.",
    accent: 'var(--brand-gold)',
  },
  {
    title: "HUMOR OR DEATH",
    description: "If we can\u2019t laugh at ourselves, we\u2019re taking this way too seriously. Self-awareness is the antidote to pretension. We\u2019re confident, not delusional.",
    accent: 'var(--brand-magenta)',
  },
  {
    title: "CONTENT = CULTURE",
    description: "Your content shouldn\u2019t look like an ad that escaped from a boardroom. It should look and feel like the culture your audience already lives in. If people can smell the brief, you\u2019ve already failed.",
    accent: 'var(--brand-cyan)',
  },
];

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      {/* Background: Large watermark text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] leading-none tracking-tighter pointer-events-none select-none whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--brand-white)',
          opacity: 0.02,
        }}
      >
        NON-NEGOTIABLE
      </div>

      {/* Animated accent lines */}
      <motion.div
        className="absolute top-0 left-[15%] w-px h-full"
        style={{ backgroundColor: 'var(--brand-magenta)', opacity: 0.05 }}
      />
      <motion.div
        className="absolute top-0 left-[85%] w-px h-full"
        style={{ backgroundColor: 'var(--brand-cyan)', opacity: 0.05 }}
      />

      {/* Section counter */}
      <motion.div
        className="absolute top-12 right-8 md:right-16 flex items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--brand-magenta)' }} />
        <span
          className="text-xs tracking-[0.3em]"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}
        >
          002 / PHILOSOPHY
        </span>
      </motion.div>

      <div className="px-6 md:px-16 lg:px-24">
        {/* Headline */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-8xl lg:text-[7vw] leading-[0.85] tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            THE NON-<br />
            <span style={{ color: 'var(--brand-violet)' }}>NEGOTIABLES</span>
          </h2>
          <motion.div
            className="mt-6 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, var(--brand-magenta), var(--brand-cyan))' }} />
            <span
              className="text-sm tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
            >
              Six rules we&apos;d rather die than break.
            </span>
          </motion.div>
        </motion.div>

        {/* Manifesto cards - asymmetric staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
              style={{
                backgroundColor: 'var(--brand-black)',
                border: `1px solid ${principle.accent}20`,
              }}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ backgroundColor: principle.accent }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              />

              <div className="p-6 md:p-8 relative">
                {/* Large background number */}
                <div
                  className="absolute -top-2 -right-2 text-[6rem] leading-none tracking-tighter select-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: principle.accent,
                    opacity: 0.06,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Symbol */}
                <div className="mb-4">
                  {(() => {
                    const IconComp = iconComponents[index];
                    return <IconComp color={principle.accent} />;
                  })()}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl tracking-tighter mb-4 relative z-10"
                  style={{ fontFamily: 'var(--font-display)', color: principle.accent }}
                >
                  {principle.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base leading-relaxed relative z-10"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                >
                  {principle.description}
                </p>

                {/* Bottom left dash on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-full w-[3px]"
                  style={{ backgroundColor: principle.accent }}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at bottom right, ${principle.accent}10, transparent 70%)`,
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          className="mt-20 md:mt-32 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6">
            <div
              className="text-[8rem] leading-none -mt-8"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-magenta)', opacity: 0.3 }}
            >
              &ldquo;
            </div>
            <div
              className="text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight max-w-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              TaleCrafters exists to annihilate the gap between{' '}
              <span style={{ color: 'var(--brand-cyan)' }}>&ldquo;I have an idea&rdquo;</span>{' '}
              and{' '}
              <span style={{ color: 'var(--brand-magenta)' }}>&ldquo;holy shit,</span>{' '}
              <span style={{ color: 'var(--brand-gold)' }}>that actually exists.&rdquo;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
