"use client";

import { motion } from 'motion/react';

/* Premium animated icon components */

/* 1. Story > Everything — open book with glowing pages */
function StoryIcon({ color }: { color: string }) {
  return (
    <motion.svg width="44" height="44" viewBox="0 0 44 44" fill="none" whileHover={{ scale: 1.15 }}>
      {/* Book spine */}
      <motion.path d="M22 6V38" stroke={color} strokeWidth="2.2" opacity="0.5" />
      {/* Left page */}
      <motion.path
        d="M22 6C18 6 7 7 5 10V35C7 32 18 31 22 31"
        stroke={color} strokeWidth="2.2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
      />
      {/* Right page */}
      <motion.path
        d="M22 6C26 6 37 7 39 10V35C37 32 26 31 22 31"
        stroke={color} strokeWidth="2.2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}
      />
      {/* Glow pulse from center */}
      <motion.circle cx="22" cy="18" r="5" fill={color} opacity="0.15"
        animate={{ r: [5, 10, 5], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Text lines on left page */}
      <motion.line x1="10" y1="17" x2="19" y2="17" stroke={color} strokeWidth="1.5" opacity="0.45"
        animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.line x1="10" y1="21" x2="17" y2="21" stroke={color} strokeWidth="1.5" opacity="0.35" />
      <motion.line x1="10" y1="25" x2="18" y2="25" stroke={color} strokeWidth="1.5" opacity="0.35" />
    </motion.svg>
  );
}

/* 2. Speed Without Sacrifice — dual arrows racing with trail */
function VelocityIcon({ color }: { color: string }) {
  return (
    <motion.svg width="44" height="44" viewBox="0 0 44 44" fill="none" whileHover={{ scale: 1.15 }}>
      {/* Speed trails */}
      <motion.line x1="4" y1="15" x2="20" y2="15" stroke={color} strokeWidth="2" opacity="0.3"
        animate={{ x1: [2, 9, 2], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.line x1="6" y1="22" x2="24" y2="22" stroke={color} strokeWidth="2" opacity="0.3"
        animate={{ x1: [4, 11, 4], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />
      <motion.line x1="4" y1="29" x2="20" y2="29" stroke={color} strokeWidth="2" opacity="0.3"
        animate={{ x1: [2, 9, 2], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      />
      {/* Arrow head */}
      <motion.path
        d="M26 8L40 22L26 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}
      />
      {/* Inner arrow */}
      <motion.path
        d="M19 15L28 22L19 29" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"
        animate={{ x: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

/* 3. No Sacred Cows — shattered shield */
function SacredCowIcon({ color }: { color: string }) {
  return (
    <motion.svg width="44" height="44" viewBox="0 0 44 44" fill="none" whileHover={{ scale: 1.15, rotate: 5 }}>
      {/* Shield outline */}
      <motion.path
        d="M22 4L7 13V24C7 33 22 40 22 40C22 40 37 33 37 24V13L22 4Z"
        stroke={color} strokeWidth="2.2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
      />
      {/* Crack lines */}
      <motion.path d="M22 10L19 19L24 24L19 33" stroke={color} strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }}
      />
      <motion.path d="M19 19L13 21" stroke={color} strokeWidth="1.8" fill="none" opacity="0.7"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }} viewport={{ once: true }}
      />
      <motion.path d="M24 24L30 23" stroke={color} strokeWidth="1.8" fill="none" opacity="0.7"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }} viewport={{ once: true }}
      />
      {/* Impact glow */}
      <motion.circle cx="22" cy="22" r="5" fill={color} opacity="0.12"
        animate={{ r: [4, 8, 4], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.svg>
  );
}

/* 4. Tension Is Currency — crosshair with pulsing core */
function TensionIcon({ color }: { color: string }) {
  return (
    <motion.svg width="44" height="44" viewBox="0 0 44 44" fill="none" whileHover={{ scale: 1.15 }}>
      {/* Outer ring */}
      <motion.circle cx="22" cy="22" r="17" stroke={color} strokeWidth="2" fill="none" strokeDasharray="4 3"
        animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '22px 22px' }}
      />
      {/* Inner ring */}
      <motion.circle cx="22" cy="22" r="9" stroke={color} strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }} viewport={{ once: true }}
      />
      {/* Crosshair lines */}
      <motion.line x1="22" y1="2" x2="22" y2="11" stroke={color} strokeWidth="2" opacity="0.6" />
      <motion.line x1="22" y1="33" x2="22" y2="42" stroke={color} strokeWidth="2" opacity="0.6" />
      <motion.line x1="2" y1="22" x2="11" y2="22" stroke={color} strokeWidth="2" opacity="0.6" />
      <motion.line x1="33" y1="22" x2="42" y2="22" stroke={color} strokeWidth="2" opacity="0.6" />
      {/* Pulsing core */}
      <motion.circle cx="22" cy="22" r="3.5" fill={color}
        animate={{ r: [3, 5, 3], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
}

/* 5. Humor Or Death — laughing skull */
function SkullIcon({ color }: { color: string }) {
  return (
    <motion.svg width="44" height="44" viewBox="0 0 44 44" fill="none" whileHover={{ scale: 1.15, y: -2 }}>
      {/* Skull dome */}
      <motion.path
        d="M10 24C8 18 8 8 22 4C36 8 36 18 34 24V30H10V24Z"
        stroke={color} strokeWidth="2.2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }} viewport={{ once: true }}
      />
      {/* Left eye — winking */}
      <motion.circle cx="16" cy="17" r="3" fill={color}
        animate={{ scaleY: [1, 0.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
      {/* Right eye */}
      <motion.circle cx="28" cy="17" r="3" fill={color}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* Big grin */}
      <motion.path
        d="M14 26C16 30 28 30 30 26"
        stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"
      />
      {/* Teeth */}
      <motion.line x1="18" y1="26" x2="18" y2="29" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <motion.line x1="22" y1="26" x2="22" y2="30" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <motion.line x1="26" y1="26" x2="26" y2="29" stroke={color} strokeWidth="1.5" opacity="0.7" />
      {/* Jaw */}
      <motion.path d="M10 30V34H34V30" stroke={color} strokeWidth="2" fill="none" />
      {/* Glow behind skull */}
      <motion.circle cx="22" cy="20" r="12" fill={color} opacity="0.06"
        animate={{ r: [10, 16, 10], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  );
}

/* 6. Content = Culture — signal wave broadcasting */
function CultureIcon({ color }: { color: string }) {
  return (
    <motion.svg width="44" height="44" viewBox="0 0 44 44" fill="none" whileHover={{ scale: 1.15 }}>
      {/* Antenna base */}
      <motion.path d="M22 24V40" stroke={color} strokeWidth="2.2" opacity="0.6" />
      <motion.path d="M15 40H29" stroke={color} strokeWidth="2.2" opacity="0.5" />
      {/* Signal dot */}
      <motion.circle cx="22" cy="20" r="3.5" fill={color}
        animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* Wave rings expanding outward */}
      <motion.path d="M13 20C13 15 17 11 22 11C27 11 31 15 31 20" stroke={color} strokeWidth="2" fill="none"
        animate={{ opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path d="M7 20C7 11.7 14 5 22 5C30 5 37 11.7 37 20" stroke={color} strokeWidth="1.8" fill="none"
        animate={{ opacity: [0.4, 0.15, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />
      <motion.path d="M2 20C2 9 11 1 22 1C33 1 42 9 42 20" stroke={color} strokeWidth="1.5" fill="none"
        animate={{ opacity: [0.25, 0.08, 0.25] }}
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
