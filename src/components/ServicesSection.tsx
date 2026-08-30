"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  Clapperboard, MonitorPlay, Flame, Wand2, LayoutPanelLeft, Eye, BookMarked, Mic2, Aperture,
  PenLine, Ghost, Boxes, BrainCircuit, Workflow, Repeat, Radar, CodeXml, Globe2, PaintBucket,
  Box, Newspaper, AudioLines, MousePointerClick, Crosshair, ShieldCheck, Megaphone, UserCircle,
  ScanFace, Podcast, Bot,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { categories } from '@/data/arsenal';

const icons: Record<string, LucideIcon> = {
  Clapperboard, MonitorPlay, Flame, Wand2, LayoutPanelLeft, Eye, BookMarked, Mic2, Aperture,
  PenLine, Ghost, Boxes, BrainCircuit, Workflow, Repeat, Radar, CodeXml, Globe2, PaintBucket,
  Box, Newspaper, AudioLines, MousePointerClick, Crosshair, ShieldCheck, Megaphone, UserCircle,
  ScanFace, Podcast, Bot,
};

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Footer links point at a category by hash. The tab index is derived from the
  // data rather than kept in a second hand-maintained map, so adding a category
  // cannot silently break the deep links.
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const i = categories.findIndex((c) => c.slug === hash);
      if (i >= 0) {
        setActiveCategory(i);
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const active = categories[activeCategory];

  return (
    <section
      id="services"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, var(--brand-white) 60px, var(--brand-white) 61px),
              repeating-linear-gradient(90deg, transparent, transparent 60px, var(--brand-white) 60px, var(--brand-white) 61px)`,
          }}
        />
      </div>

      <motion.div
        className="absolute top-12 right-8 md:right-16 flex items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--brand-violet)' }} />
        <span
          className="text-xs tracking-[0.3em]"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-violet)' }}
        >
          003 / WHAT WE WEAPONISE
        </span>
      </motion.div>

      <div className="px-6 md:px-16 lg:px-24">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-8xl lg:text-[7vw] leading-[0.85] tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            OUR<br />
            <span style={{ color: 'var(--brand-cyan)' }}>ARSENAL</span>
          </h2>
        </motion.div>

        <motion.p
          className="mb-14 md:mb-16 max-w-3xl text-base md:text-lg leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Six groups, thirty services. The group names are ours and they stay. The line underneath
          each one is deliberately boring, because the person forwarding this page to a finance
          director needs a phrase that survives the forward.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => {
            const on = activeCategory === i;
            const darkText = cat.color === 'var(--brand-gold)' || cat.color === 'var(--brand-cyan)';
            return (
              <motion.button
                key={cat.slug}
                className="px-4 py-2 text-xs md:text-sm tracking-widest transition-all"
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: on ? cat.color : 'rgba(0,0,0,0)',
                  color: on ? (darkText ? 'var(--brand-black)' : 'var(--brand-white)') : 'var(--brand-concrete-light)',
                  border: `1px solid ${on ? cat.color : 'var(--brand-concrete)'}`,
                }}
                onClick={() => {
                  setActiveCategory(i);
                  setHoveredService(null);
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {cat.title}
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8 pb-4" style={{ borderBottom: `2px solid ${active.color}` }}>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 flex-shrink-0" style={{ backgroundColor: active.color }} />
                <h3
                  className="text-3xl md:text-5xl tracking-tighter"
                  style={{ fontFamily: 'var(--font-display)', color: active.color }}
                >
                  {active.title}
                </h3>
              </div>
              {/* The boringly clear descriptor. Non-negotiable. */}
              <p
                className="mt-2 ml-7 text-base md:text-xl"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(245,245,240,0.85)' }}
              >
                {active.descriptor}
              </p>
              <p
                className="mt-3 ml-7 max-w-3xl text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
              >
                {active.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {active.services.map((service, i) => {
                const Icon = icons[service.icon] ?? Boxes;
                const isHovered = hoveredService === i;
                return (
                  <motion.div
                    key={`${active.slug}-${service.name}`}
                    className="relative group cursor-default overflow-hidden"
                    style={{
                      backgroundColor: isHovered ? `${active.color}15` : 'rgba(255,255,255,0.02)',
                      borderLeft: `3px solid ${isHovered ? active.color : 'transparent'}`,
                    }}
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="p-6 md:p-8 flex gap-5">
                      <motion.div
                        className="flex-shrink-0 mt-1"
                        animate={{ rotate: isHovered ? 10 : 0, scale: isHovered ? 1.15 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon
                          size={28}
                          style={{ color: isHovered ? active.color : 'var(--brand-concrete-light)' }}
                        />
                      </motion.div>
                      <div>
                        <h4
                          className="text-xl md:text-2xl tracking-tighter mb-2"
                          style={{
                            fontFamily: 'var(--font-display)',
                            color: isHovered ? active.color : 'var(--brand-white)',
                          }}
                        >
                          {service.name}
                        </h4>
                        <p
                          className="text-sm md:text-base leading-relaxed"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                        >
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    {isHovered && (
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{ backgroundColor: active.color, opacity: 0.4 }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(139,0,255,0.1), rgba(0,229,204,0.05), rgba(255,45,111,0.05))',
            border: '1px solid var(--brand-concrete)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div
                className="text-xs tracking-widest mb-2"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
              >
                THE WILD CARD
              </div>
              <h3 className="text-3xl md:text-4xl tracking-tighter mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Custom <span style={{ color: 'var(--brand-cyan)' }}>Everything</span>
              </h3>
              <p className="text-lg max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                If it moves, speaks, or sparks emotion, we build it. Come with the impossible. Leave
                with a delivery date. Don&apos;t see what you need? If you can imagine it, we can create it.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="px-8 py-4 text-lg tracking-tight whitespace-nowrap inline-block"
              style={{
                fontFamily: 'var(--font-display)',
                backgroundColor: 'var(--brand-magenta)',
                color: 'var(--brand-white)',
                textDecoration: 'none',
              }}
              whileHover={{ scale: 1.05, backgroundColor: 'var(--brand-cyan)', color: 'var(--brand-black)' }}
              whileTap={{ scale: 0.95 }}
            >
              LET&apos;S TALK →
            </motion.a>
          </div>
          <div
            className="absolute top-0 right-0 w-16 h-16"
            style={{ borderBottom: '1px solid var(--brand-gold)', borderLeft: '1px solid var(--brand-gold)', opacity: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/arsenal"
            className="inline-block px-7 py-4 text-base tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              border: '1px solid var(--brand-cyan)',
              color: 'var(--brand-cyan)',
              textDecoration: 'none',
            }}
          >
            THE FULL ARSENAL, ON ONE PAGE →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
