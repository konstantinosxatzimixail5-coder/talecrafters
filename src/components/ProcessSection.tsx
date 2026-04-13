"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Rocket, Flame, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: Rocket,
    title: "UNRIVALLED QUALITY AT STARTUP SPEED",
    description: "We combine the precision of a film studio with the velocity of a tech startup. No bureaucracy. No endless revisions. Just exceptional work, delivered fast.",
    note: "Days, not months",
    color: 'var(--brand-cyan)',
    details: [
      "We're not spending three weeks in committee meetings arguing about font choices.",
      "We've eliminated the bureaucratic sludge that turns creativity into a death march.",
      "Fast execution. No sacrifice.",
    ],
  },
  {
    icon: Flame,
    title: "ATTENTION AS CURRENCY",
    description: "We don't play it safe. We create controlled friction that makes people stop scrolling. The kind of work that gets shared, debated, remembered.",
    note: "Provoke, don't placate",
    color: 'var(--brand-magenta)',
    details: [
      "Safe content is forgettable content.",
      "We create the kind of work that gets shared, debated, and remembered.",
      "Controversy with purpose. Tension with taste.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "CLIENTS AS CO-CONSPIRATORS",
    description: "You're not just a \"client.\" You're the person crazy enough to trust us with your brand's reputation.",
    note: "Partners in crime",
    color: 'var(--brand-violet)',
    details: [
      "No corporate speak. No performative busy work.",
      "You get honesty, transparency, and work that actually moves the needle.",
      "We're accomplices. Our goal is to make your brand sound like it actually has a pulse.",
    ],
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  } as any);

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: 'var(--brand-black)', position: 'relative' }}
    >
      {/* Animated vertical progress line */}
      <div
        className="absolute left-8 md:left-16 top-0 bottom-0 w-px"
        style={{ backgroundColor: 'var(--brand-concrete)', opacity: 0.15 }}
      >
        <motion.div
          className="w-full origin-top"
          style={{
            height: lineHeight,
            background: 'linear-gradient(to bottom, var(--brand-cyan), var(--brand-magenta), var(--brand-violet))',
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
        <div className="h-px w-8" style={{ backgroundColor: 'var(--brand-gold)' }} />
        <span
          className="text-xs tracking-[0.3em]"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
        >
          004 / HOW WE OPERATE
        </span>
      </motion.div>

      <div className="px-6 md:px-16 lg:px-24">
        {/* Headline */}
        <motion.div
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-8xl lg:text-[7vw] leading-[0.85] tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            THE ANTI-<br />
            <span style={{ color: 'var(--brand-gold)' }}>PROCESS</span>
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-24 md:space-y-32">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${isEven ? '' : 'direction-rtl'}`}>
                  {/* Number + Icon column */}
                  <div className={`lg:col-span-3 ${!isEven ? 'lg:col-start-10' : ''}`}>
                    <div className="relative">
                      {/* Large number */}
                      <div
                        className="text-[8rem] md:text-[10rem] leading-none tracking-tighter select-none"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: pillar.color,
                          opacity: 0.1,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Icon overlay */}
                      <motion.div
                        className="absolute top-8 left-4"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Icon size={64} style={{ color: pillar.color }} />
                      </motion.div>

                      {/* Note tag */}
                      <motion.div
                        className="mt-4 inline-block px-3 py-1 text-xs tracking-widest"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          backgroundColor: pillar.color,
                          color: pillar.color === 'var(--brand-cyan)' || pillar.color === 'var(--brand-gold)' ? 'var(--brand-black)' : 'var(--brand-white)',
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {pillar.note}
                      </motion.div>
                    </div>
                  </div>

                  {/* Content column */}
                  <div className={`lg:col-span-9 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3
                      className="text-3xl md:text-5xl tracking-tighter mb-6"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {pillar.title}
                    </h3>

                    <p
                      className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                    >
                      {pillar.description}
                    </p>

                    {/* Detail bullets */}
                    <div className="space-y-3">
                      {pillar.details.map((detail, di) => (
                        <motion.div
                          key={di}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: di * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div
                            className="w-2 h-2 mt-2 flex-shrink-0"
                            style={{ backgroundColor: pillar.color }}
                          />
                          <span
                            className="text-base"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-white)', opacity: 0.8 }}
                          >
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Separator line */}
                {index < pillars.length - 1 && (
                  <motion.div
                    className="mt-16 md:mt-24 h-px"
                    style={{ backgroundColor: 'var(--brand-concrete)', opacity: 0.2 }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Director's note */}
        <motion.div
          className="mt-24 md:mt-32 p-8 md:p-12 relative"
          style={{
            borderLeft: '3px solid var(--brand-gold)',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.05), transparent)',
          }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="text-xs tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
          >
            DIRECTOR'S NOTE:
          </div>
          <div
            className="text-2xl md:text-4xl tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We make algorithms jealous of human creativity.{' '}
            <span style={{ color: 'var(--brand-cyan)' }}>Then we steal their lunch money.</span>{' '}
            Our stories make people{' '}
            <span style={{ color: 'var(--brand-magenta)' }}>stop mid-scroll,</span>{' '}
            cancel meetings, and question whether they've been doing content wrong their entire lives.
            <span
              className="inline-block ml-3 text-base md:text-xl"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)', opacity: 0.8 }}
            >
              (Spoiler alert: They have.)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
