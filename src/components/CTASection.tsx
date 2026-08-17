"use client";
import { motion } from 'motion/react';
import { MoveUpRight } from 'lucide-react';

export function CTASection() {
  return (
    <section
      className="relative min-h-screen py-32 md:py-48 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--brand-black)', color: 'var(--brand-white)' }}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal color streaks */}
        <motion.div
          className="absolute w-[200%] h-px origin-left"
          style={{ top: '25%', left: '-20%', backgroundColor: 'var(--brand-magenta)', opacity: 0.08, rotate: -8 }}
          animate={{ opacity: [0.04, 0.12, 0.04] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[200%] h-px origin-left"
          style={{ top: '55%', left: '-20%', backgroundColor: 'var(--brand-cyan)', opacity: 0.06, rotate: 5 }}
          animate={{ opacity: [0.03, 0.1, 0.03] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[200%] h-px origin-left"
          style={{ top: '80%', left: '-20%', backgroundColor: 'var(--brand-violet)', opacity: 0.05, rotate: -3 }}
          animate={{ opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-12 h-12" style={{ borderLeft: '2px solid var(--brand-magenta)', borderTop: '2px solid var(--brand-magenta)', opacity: 0.2 }} />
        <div className="absolute top-8 right-8 w-12 h-12" style={{ borderRight: '2px solid var(--brand-cyan)', borderTop: '2px solid var(--brand-cyan)', opacity: 0.2 }} />
        <div className="absolute bottom-8 left-8 w-12 h-12" style={{ borderLeft: '2px solid var(--brand-violet)', borderBottom: '2px solid var(--brand-violet)', opacity: 0.2 }} />
        <div className="absolute bottom-8 right-8 w-12 h-12" style={{ borderRight: '2px solid var(--brand-gold)', borderBottom: '2px solid var(--brand-gold)', opacity: 0.2 }} />
      </div>

      <div className="px-6 md:px-16 lg:px-24 w-full max-w-7xl mx-auto relative z-10">
        {/* Headline */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-6xl md:text-[10vw] tracking-tighter leading-[0.82]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            YOUR<br />
            <span style={{ color: 'var(--brand-magenta)' }}>MOVE.</span>
          </h2>

          <motion.p
            className="mt-6 text-xl md:text-2xl tracking-tight"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's conspire. <span style={{ color: 'var(--brand-cyan)' }}>The internet is watching.</span>
          </motion.p>
        </motion.div>

        {/* Call to action */}
        <div className="max-w-2xl mx-auto">
          {/* TaleCrafters */}
          <motion.div
            className="relative overflow-hidden group cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, var(--brand-violet), var(--brand-magenta))',
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-8 md:p-12 h-full flex flex-col relative">
              {/* Header */}
              <div className="flex items-center justify-end mb-6">
                <MoveUpRight size={24} style={{ color: 'var(--brand-white)' }} />
              </div>

              <h3
                className="text-3xl md:text-5xl tracking-tighter mb-6 leading-[0.9]"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
              >
                LET'S<br />CONSPIRE
              </h3>

              <ul
                className="space-y-3 text-base md:text-lg mb-10 flex-grow"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-white)' }}
              >
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brand-cyan)' }}>→</span>
                  Ship work in days, not months
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brand-cyan)' }}>→</span>
                  Get weird, strategic, effective
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brand-cyan)' }}>→</span>
                  Make your competition nervous
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brand-cyan)' }}>→</span>
                  Build a brand narrative that outlives the feed
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--brand-cyan)' }}>→</span>
                  Actually enjoy the process
                </li>
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="w-full py-5 text-2xl md:text-3xl tracking-tight transition-all block text-center"
                style={{
                  fontFamily: 'var(--font-display)',
                  backgroundColor: 'var(--brand-black)',
                  color: 'var(--brand-white)',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.04, backgroundColor: 'var(--brand-cyan)', color: 'var(--brand-black)' }}
                whileTap={{ scale: 0.95 }}
              >
                COLLABORATE WITH US &rarr;
              </motion.a>
            </div>

            {/* Animated glow */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ backgroundColor: 'var(--brand-cyan)', opacity: 0.15 }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Bottom manifesto */}
        <motion.div
          className="mt-20 md:mt-32 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div
            className="text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We <span style={{ color: 'var(--brand-magenta)' }}>killed boring,</span>{' '}
            <span style={{ color: 'var(--brand-cyan)' }}>buried it,</span> and{' '}
            <span style={{ color: 'var(--brand-gold)' }}>threw a party on its grave.</span>
          </div>

          <motion.div
            className="mt-8 text-lg tracking-wide"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            You're invited.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
