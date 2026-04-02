"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function StudioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  } as any);

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section
      id="studio"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: 'var(--brand-black)', position: 'relative' }}
    >
      {/* Background texture strips */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: 'var(--brand-concrete)', opacity: 0.3 }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: 'var(--brand-concrete)', opacity: 0.3 }} />
        {/* Diagonal accent line */}
        <motion.div
          className="absolute w-[200%] h-px origin-left"
          style={{
            top: '30%',
            left: '-10%',
            backgroundColor: 'var(--brand-magenta)',
            opacity: 0.08,
            rotate: -5,
          }}
        />
        <motion.div
          className="absolute w-[200%] h-px origin-left"
          style={{
            top: '70%',
            left: '-10%',
            backgroundColor: 'var(--brand-cyan)',
            opacity: 0.06,
            rotate: 3,
          }}
        />
      </div>

      {/* Section counter */}
      <motion.div
        className="absolute top-12 right-8 md:right-16 flex items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--brand-cyan)' }} />
        <span
          className="text-xs tracking-[0.3em]"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
        >
          001 / THE STUDIO
        </span>
      </motion.div>

      <div className="relative px-6 md:px-16 lg:px-24">
        {/* Asymmetric layout - image collage on right, text on left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">

          {/* Left: Text content */}
          <div className="lg:col-span-6 relative z-10">
            <motion.h2
              className="text-5xl md:text-7xl lg:text-[5.5vw] leading-[0.85] tracking-tighter mb-10"
              style={{ fontFamily: 'var(--font-display)', x: textX }}
            >
              THE<br />
              <span style={{ color: 'var(--brand-magenta)' }}>UN</span>HOLY<br />
              <span style={{ color: 'var(--brand-cyan)' }}>OFFSPRING</span>
            </motion.h2>

            {/* Accent bar */}
            <motion.div
              className="w-24 h-1 mb-10"
              style={{
                background: 'linear-gradient(to right, var(--brand-magenta), var(--brand-cyan))',
                scaleX: lineScale,
                transformOrigin: 'left',
              }}
            />

            <motion.div
              className="space-y-6 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                We&apos;re the unholy offspring of a film studio and a technology lab.
                Part strategists, part visual anarchists, fully committed to making
                your competition wonder what just happened.
              </p>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                We designed a system that combines human taste with machine velocity.
                The creative instincts that make stories resonate, accelerated by
                technology that refuses to sleep.
              </p>
            </motion.div>

            {/* Stat blocks */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { value: '0.003s', label: 'RENDER TIME', color: 'var(--brand-cyan)' },
                { value: '\u221E', label: 'CREATIVE OUTPUT', color: 'var(--brand-magenta)' },
                { value: 'NULL', label: 'BORING FACTOR', color: 'var(--brand-violet)' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4"
                  style={{
                    borderLeft: `2px solid ${stat.color}`,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl tracking-tighter"
                    style={{ fontFamily: 'var(--font-display)', color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] tracking-widest mt-1"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Layered image collage */}
          <div className="lg:col-span-6 relative min-h-[500px] md:min-h-[700px]">
            {/* Main image */}
            <motion.div
              className="absolute top-0 right-0 w-[85%] aspect-[3/4] overflow-hidden"
              style={{ y: imgY }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1683189238039-173f232b2338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMGNpbmVtYSUyMGNhbWVyYSUyMG1vdGlvbiUyMGJsdXIlMjBsaWdodHN8ZW58MXx8fHwxNzczODMxMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cinematic production"
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.3) saturate(1.2)' }}
              />
              {/* Color overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(139,0,255,0.15), transparent 60%)' }}
              />
              {/* Frame border */}
              <div className="absolute inset-0" style={{ border: '1px solid rgba(0,229,204,0.2)' }} />
            </motion.div>

            {/* Overlapping secondary image */}
            <motion.div
              className="absolute bottom-0 left-0 w-[55%] aspect-square overflow-hidden z-10"
              style={{ y: img2Y }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/human-taste.png"
                alt="Human taste — creative studio"
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.1) saturate(1.1)' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(255,45,111,0.15), transparent 50%)' }}
              />
            </motion.div>

            {/* Floating label */}
            <motion.div
              className="absolute top-[15%] left-0 z-20 px-4 py-2"
              style={{
                backgroundColor: 'var(--brand-magenta)',
                fontFamily: 'var(--font-display)',
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl tracking-tighter text-white">
                HUMAN TASTE
              </div>
            </motion.div>

            {/* Floating label 2 */}
            <motion.div
              className="absolute bottom-[25%] right-0 z-20 px-4 py-2"
              style={{
                backgroundColor: 'var(--brand-cyan)',
                fontFamily: 'var(--font-display)',
                color: 'var(--brand-black)',
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl tracking-tighter">
                MACHINE VELOCITY
              </div>
            </motion.div>

            {/* Code overlay floating */}
            <motion.div
              className="absolute top-[55%] left-[20%] z-20 p-3"
              style={{
                backgroundColor: 'rgba(10, 10, 10, 0.92)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--brand-cyan)',
                border: '1px solid rgba(0,229,204,0.3)',
              }}
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -2 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              animate={{ y: [0, -5, 0] }}
            >
              <div>status: <span style={{ color: 'var(--brand-magenta)' }}>OPERATIONAL</span></div>
              <div>mode: <span style={{ color: 'var(--brand-gold)' }}>CREATIVE_OVERDRIVE</span></div>
              <div>limits: <span style={{ color: 'var(--brand-white)' }}>NONE</span></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
