"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { featuredWork } from '@/data/work';
import { Frame } from './Frame';

/**
 * The section the site was missing. It sits directly after Our Arsenal, because
 * a list of capabilities is a claim and this is the receipt.
 *
 * Four projects, not sixteen (one film, one site-and-film, one content system,
 * one narrative explainer) so that the breadth reads as deliberate rather than
 * as everything we have ever touched.
 */
export function SelectedDamageSection() {
  return (
    <section
      id="work"
      className="defer-paint relative py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#0B0B0F' }}
    >
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[16vw] leading-none tracking-tighter pointer-events-none select-none whitespace-nowrap"
        aria-hidden
        style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)', opacity: 0.017 }}
      >
        RECEIPTS
      </div>

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
          005 / SELECTED DAMAGE
        </span>
      </motion.div>

      <div className="px-6 md:px-16 lg:px-24">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-8xl lg:text-[7vw] leading-[0.85] tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SELECTED<br />
            <span style={{ color: 'var(--brand-magenta)' }}>DAMAGE</span>
          </h2>
        </motion.div>

        {/* The sober line under the feral one. This is the whole trick. */}
        <motion.p
          className="mb-16 md:mb-20 max-w-3xl text-base md:text-lg leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Four engagements: a restaurant that had never been photographed, a consultancy that needed
          to say “global” without saying it, a data school that needed seven adverts that share no
          visual language, and a Horizon Europe consortium whose subject could not be filmed. Each
          one carries the problem, the idea, what we made, what happened and the files the client
          kept.
        </motion.p>

        <div className="space-y-4">
          {featuredWork.map((w, i) => (
            <motion.div
              key={w.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.08 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <Link
                href={`/work/${w.slug}`}
                className="group block relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  {/* Huge visual. The user asked for huge and huge is correct. */}
                  <div className="lg:col-span-7 relative overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[440px] lg:[direction:ltr]">
                    <Frame
                      src={w.hero.src}
                      alt={w.hero.alt}
                      focus={w.hero.focus}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(${i % 2 ? '245deg' : '115deg'}, ${w.accent}26, transparent 58%)` }}
                    />
                    <div
                      className="absolute top-0 left-0 px-3 py-1.5 text-[10px] tracking-[0.22em]"
                      style={{ fontFamily: 'var(--font-mono)', backgroundColor: w.accent, color: 'var(--brand-black)' }}
                    >
                      {String(i + 1).padStart(2, '0')} / {w.kind.toUpperCase()}
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-7 md:p-10 lg:p-12 flex flex-col justify-center gap-6 lg:[direction:ltr]">
                    <div>
                      <div
                        className="text-[10px] tracking-[0.28em] mb-3"
                        style={{ fontFamily: 'var(--font-mono)', color: w.accent }}
                      >
                        {w.client} · {w.year}
                      </div>
                      <h3
                        className="text-3xl md:text-4xl lg:text-[2.6vw] leading-[0.95] tracking-tighter mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {w.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.66)' }}
                      >
                        {w.summary}
                      </p>
                    </div>

                    <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                      <div>
                        <dt className="text-[10px] tracking-[0.2em] mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                          DISCIPLINE
                        </dt>
                        <dd className="text-sm leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                          {w.discipline}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] tracking-[0.2em] mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                          ARTEFACTS
                        </dt>
                        <dd className="text-sm leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                          {w.artefacts.map((a) => a.label).join(', ')}
                        </dd>
                      </div>
                    </dl>

                    <span
                      className="text-base tracking-tight"
                      style={{ fontFamily: 'var(--font-display)', color: w.accent }}
                    >
                      READ THE CASE →
                    </span>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                  style={{ backgroundColor: w.accent }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/work"
            className="px-7 py-4 text-base tracking-tight"
            style={{ fontFamily: 'var(--font-display)', backgroundColor: 'var(--brand-magenta)', color: 'var(--brand-white)', textDecoration: 'none' }}
          >
            ALL SIX CASES →
          </Link>
          <Link
            href="/concept-projects"
            className="px-7 py-4 text-base tracking-tight"
            style={{ fontFamily: 'var(--font-display)', border: '1px solid var(--brand-cyan)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
          >
            CONCEPT PROJECTS →
          </Link>
          <Link
            href="/pipelines"
            className="px-7 py-4 text-base tracking-tight"
            style={{ fontFamily: 'var(--font-display)', border: '1px solid var(--brand-concrete)', color: 'var(--brand-white)', textDecoration: 'none' }}
          >
            HOW IT WAS MADE →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
