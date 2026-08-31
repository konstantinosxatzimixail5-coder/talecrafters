"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

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
      <span className="caret-blink" style={{ color: 'var(--brand-cyan)' }}>
        _
      </span>
    </span>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  } as any);

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
            className="scan-in absolute left-0 right-0 h-px"
            style={{
              top: `${12 + i * 12}%`,
              backgroundColor: i % 3 === 0 ? 'var(--brand-cyan)' : i % 3 === 1 ? 'var(--brand-magenta)' : 'var(--brand-violet)',
              opacity: 0.06,
              animationDelay: `${0.15 + i * 0.07}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div
        className="spin-slow absolute pointer-events-none"
        style={{ top: '15%', right: '10%', width: 120, height: 120, border: '2px solid var(--brand-cyan)', opacity: 0.2 }}
      />
      <div
        className="spin-pulse absolute pointer-events-none"
        style={{ bottom: '20%', left: '8%', width: 80, height: 80, backgroundColor: 'var(--brand-magenta)', opacity: 0.08 }}
      />
      <div
        className="breathe absolute pointer-events-none rounded-full"
        style={{ top: '40%', right: '25%', width: 200, height: 200, border: '1px solid var(--brand-violet)', opacity: 0.1 }}
      />

      {/* Left edge marker */}
      <div
        className="edge-fade absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--brand-cyan), var(--brand-magenta), transparent)' }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 px-6 md:px-16 lg:px-24 pt-28 md:pt-20"
        style={{ y: textY, opacity: opacityOut }}
      >
        {/* Top tag line */}
        <div className="hero-slide mb-4 md:mb-6 flex items-center gap-4" style={{ animationDelay: '0.04s' }}>
          <div className="h-px w-16" style={{ backgroundColor: 'var(--brand-cyan)' }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
          >
            TaleCrafters Studio
          </span>
        </div>

        {/* Main headline. One h1 for the page: the five lines are spans inside
            it, so the stagger survives without handing a crawler five competing
            top-level headings. */}
        <div className="relative">
          <h1 style={{ margin: 0 }}>
            <span
              className="hero-rise block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              style={{ animationDelay: '0.10s' }}
            >
              WE <span style={{ color: 'var(--brand-cyan)' }}>MANUFACTURE</span>
            </span>
            <span
              className="hero-rise block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              style={{ animationDelay: '0.17s' }}
            >
              <span style={{ color: 'var(--brand-magenta)' }}>ATTENTION</span> WITH
            </span>
            <span
              className="hero-rise block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              style={{ animationDelay: '0.24s' }}
            >
              STORIES THAT <span style={{ color: 'var(--brand-gold)' }}>IMMERSE</span>
            </span>
            <span
              className="hero-rise block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              style={{ animationDelay: '0.31s' }}
            >
              AND CONTENT
            </span>
            <span
              className="hero-rise block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              style={{ animationDelay: '0.38s' }}
            >
              THAT <span style={{ color: 'var(--brand-violet-text)' }}>CONVERTS</span>
              </span>
          </h1>

          {/* Decorative bracket */}
          <div
            className="hero-bracket absolute -left-4 md:-left-8 top-0 bottom-0 w-1"
            style={{ backgroundColor: 'var(--brand-magenta)' }}
          />
        </div>

        {/* Subtitle line */}
        <div
          className="hero-rise mt-10 md:mt-16 flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12"
          style={{ animationDelay: '0.46s' }}
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
            Storytellers Drunk on Synthetic Media.
          </div>
        </div>

        {/* Terminal readout, kept close under the paragraph above it rather
            than floating in its own band of space. */}
        <div
          className="hero-rise mt-5 max-w-lg p-4"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--brand-cyan)',
            backgroundColor: 'rgba(0, 229, 204, 0.04)',
            border: '1px solid rgba(0, 229, 204, 0.15)',
            animationDelay: '0.58s',
          }}
        >
          <TypewriterText
            text="// Not your grandma's creative agency."
            delay={900}
          />
        </div>
      </motion.div>

      {/* Bottom marquee */}
      <div
        className="hero-rise absolute bottom-0 left-0 right-0 overflow-hidden py-5"
        style={{
          borderTop: '1px solid var(--brand-concrete)',
          borderBottom: '1px solid var(--brand-concrete)',
          animationDelay: '0.7s',
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
      <div className="bob absolute bottom-16 right-8 flex flex-col items-center gap-2">
        <div
          className="w-px h-12"
          style={{ backgroundColor: 'var(--brand-concrete-light)' }}
        />
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
