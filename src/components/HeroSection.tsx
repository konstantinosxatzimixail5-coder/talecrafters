"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Accented } from '@/components/kit';
import type { HomeCopy } from '@/content/copy';

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <span className="tc-fade" style={{ color: 'var(--brand-cyan)', animationDuration: '0.5s', animationIterationCount: 'infinite', animationDirection: 'alternate' }}>
        _
      </span>
    </span>
  );
}

/** The five headline lines, and the CSS stagger between them. Kept tight: the
 *  first line is the LCP element on most viewports, so every millisecond of
 *  delay in front of it is a millisecond on the metric. */
const HEADLINE_CLASS =
  'block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter tc-rise';

export function HeroSection({ copy }: { copy: HomeCopy['hero'] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  } as any);

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const lines = [
    { text: copy.line1, accent: copy.line1Accent, color: 'var(--brand-cyan)' },
    { text: copy.line2, accent: copy.line2Accent, color: 'var(--brand-magenta)' },
    { text: copy.line3, accent: copy.line3Accent, color: 'var(--brand-gold)' },
    { text: copy.line4, accent: copy.line4Accent, color: 'var(--brand-cyan)' },
    { text: copy.line5, accent: copy.line5Accent, color: 'var(--brand-violet-text)' },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[110vh] overflow-hidden flex flex-col justify-center" style={{ backgroundColor: 'var(--brand-black)', position: 'relative' }}>
      {/* Animated diagonal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-px h-full"
          style={{ backgroundColor: 'var(--brand-cyan)', right: '20%', opacity: 0.15, y: bgY }}
        />
        <motion.div
          className="absolute top-0 w-px h-full"
          style={{ backgroundColor: 'var(--brand-magenta)', left: '35%', opacity: 0.1, y: bgY }}
        />
        <motion.div
          className="absolute top-0 w-px h-full"
          style={{ backgroundColor: 'var(--brand-violet)', left: '70%', opacity: 0.12, y: bgY }}
        />
        {/* Horizontal scan lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px tc-grow-x"
            style={{
              top: `${12 + i * 12}%`,
              backgroundColor: i % 3 === 0 ? 'var(--brand-cyan)' : i % 3 === 1 ? 'var(--brand-magenta)' : 'var(--brand-violet)',
              opacity: 0.06,
              animationDelay: `${0.5 + i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div
        className="absolute pointer-events-none tc-spin"
        style={{ top: '15%', right: '10%', width: 120, height: 120, border: '2px solid var(--brand-cyan)', opacity: 0.2 }}
      />
      <div
        className="absolute pointer-events-none tc-spin-back"
        style={{ bottom: '20%', left: '8%', width: 80, height: 80, backgroundColor: 'var(--brand-magenta)', opacity: 0.08 }}
      />
      <div
        className="absolute pointer-events-none rounded-full tc-breathe"
        style={{ top: '40%', right: '25%', width: 200, height: 200, border: '1px solid var(--brand-violet)', opacity: 0.1 }}
      />

      {/* Left edge marker */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 tc-fade"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--brand-cyan), var(--brand-magenta), transparent)',
          opacity: 0.4,
          animationDelay: '1s',
          animationDuration: '2s',
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 px-6 md:px-16 lg:px-24 pt-28 md:pt-20"
        style={{ y: textY, opacity: opacityOut }}
      >
        {/* Top tag line */}
        <div className="mb-4 md:mb-6 flex items-center gap-4 tc-fade-x" style={{ animationDelay: '0.05s' }}>
          <div className="h-px w-16" style={{ backgroundColor: 'var(--brand-cyan)' }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
          >
            {copy.eyebrow}
          </span>
        </div>

        {/* Main headline. One h1 for the page: the five lines are spans inside
            it, so the stagger survives without handing a crawler five competing
            top-level headings. */}
        <div className="relative">
          <h1 style={{ margin: 0 }}>
            {lines.map((l, i) => (
              <span key={i} className={HEADLINE_CLASS} style={{ animationDelay: `${i * 0.08}s` }}>
                <Accented text={l.text} accent={l.accent} color={l.color} />
              </span>
            ))}
          </h1>

          {/* Decorative bracket */}
          <div
            className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 tc-grow-y"
            style={{ backgroundColor: 'var(--brand-magenta)', animationDelay: '0.5s' }}
          />
        </div>

        {/* Subtitle line */}
        <div
          className="mt-10 md:mt-16 flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 tc-fade"
          style={{ animationDelay: '0.55s' }}
        >
          <div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--brand-gold)',
              textShadow: '0 0 30px rgba(201, 168, 76, 0.3), 0 0 60px rgba(201, 168, 76, 0.1)',
              letterSpacing: '-0.04em',
            }}
          >
            {copy.strapline}
          </div>
        </div>

        {/* Terminal readout */}
        <div
          className="mt-12 max-w-lg p-4 tc-fade"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--brand-cyan)',
            backgroundColor: 'rgba(0, 229, 204, 0.04)',
            border: '1px solid rgba(0, 229, 204, 0.15)',
            animationDelay: '0.8s',
          }}
        >
          <TypewriterText text={copy.terminal} delay={1600} />
        </div>
      </motion.div>

      {/* Bottom marquee */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-5 tc-fade"
        style={{
          borderTop: '1px solid var(--brand-concrete)',
          borderBottom: '1px solid var(--brand-concrete)',
          animationDelay: '0.9s',
          animationDuration: '1s',
        }}
      >
        <div
          className="flex items-center justify-center gap-4 text-center"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            letterSpacing: '0.2em',
            color: 'var(--brand-concrete-light)',
          }}
        >
          <span>STORYTELLING STUDIO</span>
          <span style={{ color: 'var(--brand-magenta)' }}>&times;</span>
          <span>TECH LAB</span>
          <span style={{ color: 'var(--brand-cyan)' }}>&times;</span>
          <span>CREATIVE CHAOS</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 right-8 flex flex-col items-center gap-2 tc-bob">
        <div className="w-px h-12" style={{ backgroundColor: 'var(--brand-concrete-light)' }} />
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)', writingMode: 'vertical-rl' }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
