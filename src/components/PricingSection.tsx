"use client";
import { motion } from 'motion/react';
import { useState } from 'react';
import { CircleCheck, ArrowUpRight } from 'lucide-react';

const packages = [
  {
    name: "THE ALLIANCE",
    subtitle: "Ongoing Creative Partnership",
    price: "",
    period: "",
    description: "For brands that need consistent firepower, not one-off miracles. You get dedicated creative capacity every month. We become an extension of your team, without the overhead, the HR headaches, or the sad office birthday parties.",
    features: [
      "Dedicated monthly outputs (customized to your needs)",
      "Priority turnaround (you skip the queue)",
      "Strategic input, not just execution",
      "Rollover flexibility (because life happens)",
    ],
    bestFor: "Brands with ongoing content needs who are tired of the project-by-project hamster wheel.",
    color: 'var(--brand-cyan)',
    accent: false,
  },
  {
    name: "THE FORGE",
    subtitle: "Predictable Content. Relentless Output.",
    price: "",
    period: "",
    description: "A fixed monthly subscription for brands that know exactly what they need and want it delivered like clockwork. No strategy calls. No scope creep. Just output.",
    features: [
      "Social Content Engine: 12 posts/month (static + motion)",
      "Video Velocity: 4 short-form videos/month",
      "Synthetic Spokesperson: 4 avatar videos/month",
      "Custom configuration available",
    ],
    bestFor: "Marketing teams with clear briefs who need reliable production capacity without the agency overhead.",
    color: 'var(--brand-magenta)',
    accent: true,
  },
  {
    name: "THE MISSION",
    subtitle: "Single Project. Maximum Impact.",
    price: "",
    period: "",
    description: "Not ready for an ongoing partnership? Fair enough. Trust is earned, not demanded. One project. One deliverable. Maximum focus. We treat your campaign like it's the only thing that matters.",
    features: [
      "Campaign concepting and execution",
      "Product launch content packages",
      "Event coverage and highlights",
      "Brand films and hero content",
    ],
    bestFor: "Brands that need something exceptional for a specific moment.",
    color: 'var(--brand-violet-text)',
    accent: false,
  },
  {
    name: "THE SHADOW PROTOCOL",
    subtitle: "Stealth-Mode Firepower.",
    price: "",
    period: "",
    description: "Some brands need results, not credit. White-label creative production for agencies, studios, and consultancies who want to deliver excellence without scaling headcount. We stay invisible. You take the glory.",
    features: [
      "White-label content production",
      "Behind-the-scenes execution",
      "Your branding, our execution",
      "NDA-protected collaboration",
    ],
    bestFor: "Agencies and studios that need production muscle without hiring full-time staff.",
    color: 'var(--brand-gold)',
    accent: false,
  },
];

export function PricingSection({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      className="defer-paint relative py-32 md:py-48 overflow-hidden"
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
          007 / PACKAGES
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
              PICK YOUR<br />
              <span style={{ color: 'var(--brand-magenta)' }}>PLOT</span>
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
          Escalation levels for <span style={{ color: 'var(--brand-magenta)' }}>Content-as-Service</span>.
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
              { title: "Synthetic Media Natives", desc: "We build the pipeline before the prompt: a locked master plate, a written set specification, four control gates and a ledger of what each accepted asset cost. Seven of them exist. Three are published on this site.", color: 'var(--brand-cyan)' },
              { title: "Story-First, Always", desc: "Technology is the vehicle. Narrative is the destination. We obsess over story structure, emotional beats, and psychological hooks before we touch a single tool.", color: 'var(--brand-magenta)' },
              { title: "Content Reinventionists", desc: "Every case study on this site carries the problem, the idea, what we made, the result and the artefacts. Read one before the call and you will already know how we work.", color: 'var(--brand-violet-text)' },
              { title: "No Bullshit Guarantee", desc: "We give zero f*cks about ego, and infinite f*cks about excellence.", color: 'var(--brand-gold)' },
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
