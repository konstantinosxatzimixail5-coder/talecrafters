"use client";
import { motion } from 'motion/react';
import { useState } from 'react';
import { CircleCheck, ArrowUpRight } from 'lucide-react';
import type { HomeCopy } from '@/content/copy';

// Starting numbers, not a rate card.
//
// A cold buyer will not email to ask what something costs; they will assume it
// is out of reach and leave. "From" plus a floor answers the only question
// standing between reading and enquiring, and it costs nothing later because a
// floor is not a quote. The Shadow Protocol has none on purpose: scope there
// varies too much for a floor to mean anything, so it says so.
// Four packages, four different bullet counts, on purpose: four cards carrying
// four bullets each is the shape every generated pricing page ships, and a
// reader clocks it before reading a word.
//
// Each BEST FOR line names what that client asks for on a Tuesday. They used to
// name a segment ("brands with ongoing content needs"), which survives a
// find-and-replace of the studio name, and that is the test it kept failing.
const packages = [
  {
    name: "THE ALLIANCE",
    subtitle: "Ongoing Creative Partnership",
    price: "From €500",
    period: "per month",
    description: "A standing block of production capacity every month, run by a studio that already knows your plates, your fonts and which stakeholder quietly kills the good work. No onboarding, no sad office birthday parties.",
    features: [
      "A monthly output block, sized to your calendar",
      "Priority turnaround. You go to the front of the queue.",
      "Strategic input on the brief before anything renders",
      "Unused output rolls into next month",
    ],
    bestFor: "The brand that messages on a Tuesday wanting three more cuts of last month's film by Friday.",
    color: 'var(--brand-cyan)',
    accent: false,
  },
  {
    name: "THE FORGE",
    subtitle: "Predictable Content. Relentless Output.",
    price: "From €400",
    period: "per month",
    description: "A fixed monthly subscription for teams who know what they need and want it landing like clockwork. The shape is agreed on one call, then it runs to a schedule. Scope creep has nowhere to enter.",
    features: [
      "Social Content Engine: 12 posts a month, static and motion",
      "Video Velocity: 4 short-form videos a month",
      "Synthetic Spokesperson: 4 presenter videos a month",
      "Swap the mix at the end of any month",
    ],
    bestFor: "The marketing team with a content calendar and nobody in-house left to feed it.",
    color: 'var(--brand-magenta)',
    accent: true,
  },
  {
    name: "THE MISSION",
    subtitle: "One project. One deadline.",
    price: "From €350",
    period: "per project",
    description: "Not ready to sign anything ongoing? Sensible. Take one project, watch how we work from the inside, and decide afterwards. One brief, one deadline, and a team with nothing else in the diary that week.",
    features: [
      "Campaign concepting through to delivery",
      "Launch packages, brand films and hero content",
      "Event coverage and highlights",
    ],
    bestFor: "The brand with one date in the calendar that cannot move.",
    color: 'var(--brand-violet-text)',
    accent: false,
  },
  {
    name: "THE SHADOW PROTOCOL",
    subtitle: "Stealth-Mode Firepower.",
    price: "Varies",
    period: "by scope and volume",
    description: "Some brands need the work without the byline. White-label production for agencies, studios and consultancies who have won something their headcount cannot cover. We stay invisible. You keep the client.",
    features: [
      "White-label production, shipped under your brand",
      "An NDA from the first call",
      "We never appear in the credits, the deck, or on this website",
      "Your project manager, our production line",
      "Direct line to the operator, no account layer",
    ],
    bestFor: "The agency that pitched a scope its studio cannot staff by the deadline.",
    color: 'var(--brand-gold)',
    accent: false,
  },
];

export function PricingSection({ copy, hideHeading = false }: { copy: HomeCopy['pricing']; hideHeading?: boolean }) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Background watermark */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 text-[15vw] leading-none tracking-tighter pointer-events-none select-none whitespace-nowrap"
        aria-hidden
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--brand-white)',
          opacity: 0.015,
        }}
      >
        CHOOSE WISELY
      </div>

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
          {copy.flag}
        </span>
      </motion.div>

      <div className="px-6 md:px-16 lg:px-24">
        {/* Headline. The dedicated /packages route supplies its own, so it is
            suppressed there rather than repeated. */}
        {!hideHeading && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl md:text-8xl lg:text-[7vw] leading-[0.85] tracking-tighter"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {copy.heading}<br />
              <span style={{ color: 'var(--brand-magenta)' }}>{copy.accentWord}</span>
            </h2>
          </motion.div>
        )}

        <motion.p
          className="text-lg md:text-2xl mb-16 md:mb-24 max-w-2xl"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Four ways to hire us. <span style={{ color: 'var(--brand-magenta)' }}>Each one starts at a number.</span>
        </motion.p>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                backgroundColor: pkg.accent ? pkg.color : 'var(--brand-black)',
                border: `1px solid ${pkg.accent ? pkg.color : pkg.color + '30'}`,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              {/* Top accent */}
              <div
                className="h-1"
                style={{ backgroundColor: pkg.color }}
              />

              <div className="p-6 md:p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div
                      className="text-[10px] tracking-widest mb-2"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: pkg.accent ? 'rgba(255,255,255,0.7)' : pkg.color,
                      }}
                    >
                      {pkg.subtitle}
                    </div>
                    <h3
                      className="text-3xl md:text-4xl tracking-tighter"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: pkg.accent ? 'var(--brand-white)' : 'var(--brand-white)',
                      }}
                    >
                      {pkg.name}
                    </h3>
                  </div>

                  {/* The number, top right, aligned across all four cards so a
                      reader can compare them without moving their eye. */}
                  {pkg.price && (
                    <div className="text-right flex-shrink-0 pl-4">
                      <div
                        className="text-2xl md:text-3xl tracking-tighter whitespace-nowrap"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: pkg.accent ? 'var(--brand-white)' : pkg.color,
                        }}
                      >
                        {pkg.price}
                      </div>
                      {pkg.period && (
                        <div
                          className="text-[10px] tracking-widest mt-1 whitespace-nowrap"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: pkg.accent ? 'rgba(255,255,255,0.7)' : 'var(--brand-concrete-light)',
                          }}
                        >
                          {pkg.period}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-sm md:text-base leading-relaxed mb-6"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: pkg.accent ? 'rgba(255,255,255,0.85)' : 'var(--brand-concrete-light)',
                  }}
                >
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      <CircleCheck
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: pkg.accent ? 'var(--brand-white)' : pkg.color }}
                      />
                      <span
                        className="text-sm"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: pkg.accent ? 'rgba(255,255,255,0.9)' : 'var(--brand-white)',
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Best for */}
                <div
                  className="text-xs tracking-wide pt-4"
                  style={{
                    borderTop: `1px solid ${pkg.accent ? 'rgba(255,255,255,0.2)' : pkg.color + '25'}`,
                    fontFamily: 'var(--font-mono)',
                    color: pkg.accent ? 'rgba(255,255,255,0.6)' : 'var(--brand-concrete-light)',
                  }}
                >
                  BEST FOR: {pkg.bestFor}
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className="w-full mt-6 py-3 text-base tracking-tight flex items-center justify-center gap-2 transition-all"
                  style={{
                    fontFamily: 'var(--font-display)',
                    backgroundColor: pkg.accent ? 'var(--brand-black)' : pkg.color,
                    color: pkg.color === 'var(--brand-cyan)' || pkg.color === 'var(--brand-gold)' ? (pkg.accent ? 'var(--brand-white)' : 'var(--brand-black)') : 'var(--brand-white)',
                    textDecoration: 'none',
                    display: 'flex',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LET&apos;S GO <ArrowUpRight size={18} />
                </motion.a>
              </div>

              {/* Corner badge for featured */}
              {pkg.accent && (
                <motion.div
                  className="absolute -top-1 -right-1 px-4 py-1 text-[10px] tracking-widest"
                  style={{
                    backgroundColor: 'var(--brand-black)',
                    color: pkg.color,
                    fontFamily: 'var(--font-mono)',
                    border: `1px solid ${pkg.color}`,
                  }}
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  POPULAR
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* WHY US section */}
        <motion.div
          className="mt-24 md:mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, var(--brand-cyan), var(--brand-magenta))' }} />
            <span
              className="text-xs tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
            >
              WHY US
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Synthetic Media Natives", desc: "We were building generative pipelines while the models still could not hold one face across two shots. Seven exist. Three are published on this site with their stages, timings and gates.", color: 'var(--brand-cyan)' },
              { title: "Story-First, Always", desc: "The beat sheet is signed before a prompt is written. When a film fails it fails in the structure, and no render budget on earth rescues a second act nobody planned.", color: 'var(--brand-magenta)' },
              { title: "Content Reinventionists", desc: "Every case study on this site carries the problem, the idea, what we made, the result and the artefacts. Read one before the call and you already know how we work.", color: 'var(--brand-violet-text)' },
              { title: "No Bullshit Guarantee", desc: "If your idea is bad you hear it on the first call, while changing your mind is still free. We would sooner lose the job than make something we would keep off our own showreel.", color: 'var(--brand-gold)' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6"
                style={{ borderLeft: `3px solid ${item.color}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4
                  className="text-xl md:text-2xl tracking-tighter mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: item.color }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
