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
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{ color: 'var(--brand-cyan)' }}
      >
        _
      </motion.span>
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
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${12 + i * 12}%`,
              backgroundColor: i % 3 === 0 ? 'var(--brand-cyan)' : i % 3 === 1 ? 'var(--brand-magenta)' : 'var(--brand-violet)',
              opacity: 0.06,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '15%', right: '10%', width: 120, height: 120, border: '2px solid var(--brand-cyan)', opacity: 0.2 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ bottom: '20%', left: '8%', width: 80, height: 80, backgroundColor: 'var(--brand-magenta)', opacity: 0.08 }}
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{ top: '40%', right: '25%', width: 200, height: 200, border: '1px solid var(--brand-violet)', opacity: 0.1 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Left edge marker */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--brand-cyan), var(--brand-magenta), transparent)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 1 }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 px-6 md:px-16 lg:px-24 pt-28 md:pt-20"
        style={{ y: textY, opacity: opacityOut }}
      >
        {/* Top tag line */}
        <motion.div
          className="mb-4 md:mb-6 flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-px w-16" style={{ backgroundColor: 'var(--brand-cyan)' }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
          >
            TaleCrafters Studio
          </span>
        </motion.div>

        {/* Main headline. One h1 for the page: the five lines are spans inside
            it, so the stagger survives without handing a crawler five competing
            top-level headings. */}
        <div className="relative">
          <h1 style={{ margin: 0 }}>
            <motion.span
              className="block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              WE <span style={{ color: 'var(--brand-cyan)' }}>MANUFACTURE</span>
            </motion.span>
            <motion.span
              className="block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
            >
              <span style={{ color: 'var(--brand-magenta)' }}>ATTENTION</span> WITH
            </motion.span>
            <motion.span
              className="block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              STORIES THAT <span style={{ color: 'var(--brand-gold)' }}>IMMERSE</span>
            </motion.span>
            <motion.span
              className="block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
            >
              AND CONTENT
            </motion.span>
            <motion.span
              className="block text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5.8vw] xl:text-[6vw] 2xl:text-[6.5vw] leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0 }}
            >
              THAT <span style={{ color: 'var(--brand-violet-text)' }}>CONVERTS</span>
              </motion.span>
          </h1>

          {/* Decorative bracket */}
          <motion.div
            className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1"
            style={{ backgroundColor: 'var(--brand-magenta)' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          />
        </div>

        {/* Subtitle line */}
        <motion.div
          className="mt-10 md:mt-16 flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
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
        </motion.div>

        {/* The literal classification, directly under the strapline.
            "Storytellers drunk on synthetic media" is what a person remembers;
            this is what a search engine and an answer engine classify from.
            Both belong on the page, and neither replaces the other. */}
        <motion.p
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.62)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          TaleCrafters is a London-based{' '}
          <strong style={{ color: 'var(--brand-white)', fontWeight: 500 }}>
            synthetic media and creative systems studio
          </strong>
          . We produce generative films, campaigns and visual worlds, build the automated
          creative systems that make and distribute them, and develop our own original IP.
        </motion.p>

        {/* Terminal readout */}
        <motion.div
          className="mt-12 max-w-lg p-4"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--brand-cyan)',
            backgroundColor: 'rgba(0, 229, 204, 0.04)',
            border: '1px solid rgba(0, 229, 204, 0.15)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <TypewriterText
            text="// Not your grandma's creative agency."
            delay={2200}
          />
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-5"
        style={{
          borderTop: '1px solid var(--brand-concrete)',
          borderBottom: '1px solid var(--brand-concrete)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 right-8 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
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
      </motion.div>
    </section>
  );
}
