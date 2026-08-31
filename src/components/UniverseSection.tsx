"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { arms } from '@/data/arsenal';
import type { HomeCopy } from '@/content/copy';

/**
 * The three arms, on the landing page. Without this the site reads as a video
 * shop that also mentions technology; with it the shape of the company is
 * visible in ten seconds.
 */
export function UniverseSection({ copy }: { copy: HomeCopy['universe'] }) {
  return (
    <section
      id="universe"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: 'var(--brand-black)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--brand-concrete), transparent)' }}
      />

      {/* Section counter, matching the run down the rest of the page */}
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
          {copy.flag}
        </span>
      </motion.div>

      <div className="px-6 md:px-16 lg:px-24">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-8" style={{ backgroundColor: 'var(--brand-cyan)' }} />
          <span
            className="text-[10px] tracking-[0.3em]"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
          >
            THE COMMERCIAL UNIVERSE
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-[4.6vw] leading-[0.9] tracking-tighter mb-6 max-w-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {copy.heading} <span style={{ color: 'var(--brand-cyan)' }}>{copy.accentWord}</span>
        </motion.h2>

        <motion.p
          className="max-w-3xl text-base md:text-lg leading-relaxed mb-14"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true }}
        >
          {copy.lede}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {arms.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.09 }}
              viewport={{ once: true }}
            >
              <Link
                href={a.href}
                className="group flex flex-col h-full p-8 md:p-10 relative overflow-hidden"
                style={{
                  border: `1px solid ${a.color}30`,
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  textDecoration: 'none',
                }}
              >
                <div className="h-[3px] absolute top-0 left-0 right-0" style={{ backgroundColor: a.color }} />
                <div
                  className="absolute -top-4 -right-2 text-[7rem] leading-none tracking-tighter select-none pointer-events-none"
                  style={{ fontFamily: 'var(--font-display)', color: a.color, opacity: 0.07 }}
                >
                  {a.num}
                </div>

                <div
                  className="text-[10px] tracking-[0.3em] mb-4 relative z-10"
                  style={{ fontFamily: 'var(--font-mono)', color: a.color }}
                >
                  {a.num} / {a.name}
                </div>

                <h3
                  className="text-2xl md:text-3xl leading-[1.05] tracking-tight mb-5 relative z-10"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                >
                  {a.line}
                </h3>

                <p
                  className="text-base leading-relaxed mb-7 flex-1 relative z-10"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.65)' }}
                >
                  {a.blurb}
                </p>

                <ul className="space-y-1.5 mb-7 relative z-10">
                  {a.covers.slice(0, 5).map((c) => (
                    <li
                      key={c}
                      className="text-sm flex gap-2.5"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)', fontSize: 12 }}
                    >
                      <span style={{ color: a.color }}>·</span>
                      {c}
                    </li>
                  ))}
                  {a.covers.length > 5 && (
                    <li className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete)', fontSize: 12 }}>
                      + {a.covers.length - 5} more
                    </li>
                  )}
                </ul>

                <span
                  className="text-base tracking-tight relative z-10"
                  style={{ fontFamily: 'var(--font-display)', color: a.color }}
                >
                  EXPLORE →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
