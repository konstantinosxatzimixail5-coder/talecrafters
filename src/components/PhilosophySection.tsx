"use client";

import { motion } from 'motion/react';

/* Custom animated icon components */
function StoryIcon({ color }: { color: string }) {
  return (
    <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none" whileHover={{ scale: 1.2, rotate: 10 }}>
      <motion.polygon
        points="8,4 32,18 8,32"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.line x1="13" y1="12" x2="13" y2="24" stroke={color} strokeWidth="2" opacity="0.5" />
    </motion.svg>
  );
}

function VelocityIcon({ color }: { color: string }) {
  return (
    <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none" whileHover={{ scale: 1.2, rotate: -15 }}>
      <motion.path
        d="M20 2 L8 20 H18 L16 34 L28 16 H18 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.path
        d="M20 2 L8 20 H18 L16 34 L28 16 H18 Z"
        fill={color}
        opacity="0.15"
      />
    </motion.svg>
  );
}

function SacredCowIcon({ color }: { color: string }) {
  return (
    <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none" whileHover={{ scale: 1.2, rotate: 15 }}>
      <motion.path
        d="M18 4 L6 14 V26 L18 32 L30 26 V14 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.line x1="10" y1="10" x2="26" y2="26" stroke={color} strokeWidth="2.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}
      />
      <motion.line x1="26" y1="10" x2="10" y2="26" stroke={color} strokeWidth="2.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }}
      />
    </motion.svg>
  );
}

function TensionIcon({ color }: { color: string }) {
  return (
    <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none" whileHover={{ scale: 1.2, rotate: 90 }}>
      <motion.circle cx="18" cy="18" r="14" stroke={color} strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
      />
      <motion.line x1="18" y1="4" x2="18" y2="32" stroke={color} strokeWidth="2" opacity="0.6" />
      <motion.line x1="4" y1="18" x2="32" y2="18" stroke={color} strokeWidth="2" opacity="0.6" />
      <motion.circle cx="18" cy="18" r="4" fill={color} opacity="0.4"
        animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

function SkullIcon({ color }: { color: string }) {
  return (
    <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none" whileHover={{ scale: 1.2, y: -3 }}>
      <motion.path
        d="M10 22 C6 18 6 10 18 6 C30 10 30 18 26 22 V28 H10 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.circle cx="13" cy="16" r="2.5" fill={color}
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle cx="23" cy="16" r="2.5" fill={color}
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.line x1="14" y1="28" x2="14" y2="25" stroke={color} strokeWidth="1.5" />
      <motion.line x1="18" y1="28" x2="18" y2="25" stroke={color} strokeWidth="1.5" />
      <motion.line x1="22" y1="28" x2="22" y2="25" stroke={color} strokeWidth="1.5" />
    </motion.svg>
  );
}

function CultureIcon({ color }: { color: string }) {
  return (
    <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none" whileHover={{ scale: 1.2, rotate: -10 }}>
      <motion.rect x="4" y="8" width="28" height="20" rx="2" stroke={color} strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
      />
      <motion.path d="M4 14 L18 22 L32 14" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
      />
      <motion.circle cx="18" cy="18" r="3" fill={color} opacity="0.3"
        animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.line x1="10" y1="4" x2="10" y2="8" stroke={color} strokeWidth="2" opacity="0.5" />
      <motion.line x1="26" y1="4" x2="26" y2="8" stroke={color} strokeWidth="2" opacity="0.5" />
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
