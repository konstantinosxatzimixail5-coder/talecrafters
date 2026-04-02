"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Film, Zap, Radio, Users, BookOpen, Box, Music, Image, Video, Target, Shield, Mic, Palette, Printer, Sparkles, LayoutGrid, Bot, Globe, Code } from 'lucide-react';

interface Service {
  name: string;
  desc: string;
  icon: any;
}

interface Category {
  title: string;
  color: string;
  services: Service[];
}

const categories: Category[] = [
  {
    title: "VISUAL WARFARE",
    color: 'var(--brand-magenta)',
    services: [
      { name: "Product Cinematics", desc: "Ads that make people want things they didn't know existed. We turn your product into the main character of a story people can't look away from.", icon: Film },
      { name: "Short-Form Detonations", desc: "Engineered for attention spans shorter than a goldfish's existential crisis (that's everyone). Content that hits hard and fast.", icon: Video },
      { name: "Motion Alchemy", desc: "Visuals that move like they've had three espressos. Dynamic, fluid, caffeinated motion design that makes static look dead.", icon: Zap },
      { name: "Synthetic Cinematography", desc: "Fluid visual storytelling that redefines what's possible without a 50-person film crew and a nervous breakdown.", icon: Sparkles },
      { name: "Comic Panel Narratives", desc: "Sequential art meets brand storytelling. We craft illustrated panel sequences that hit harder than a full-page ad and stick longer than a viral clip.", icon: LayoutGrid },
    ],
  },
  {
    title: "NARRATIVE ENGINEERING",
    color: 'var(--brand-cyan)',
    services: [
      { name: "Brand Mythology", desc: "We don't write taglines. We architect belief systems. The kind of narrative foundation that turns customers into cultists (the good kind).", icon: Target },
      { name: "Strategic Storytelling", desc: "Story frameworks that position your brand as the only logical choice. We map the narrative architecture before we touch a single frame.", icon: BookOpen },
      { name: "Script Architecture", desc: "Words that sell without selling out. Spokesperson scripts, video narratives, brand manifestos that sound like humans wrote them. Because humans did.", icon: Mic },
      { name: "Blog-to-Video Transmutation", desc: "Your text content, resurrected as video. Because reading is so 2019, and your insights deserve to move.", icon: Video },
    ],
  },
  {
    title: "STRATEGY & REPUTATION",
    color: 'var(--brand-violet)',
    services: [
      { name: "Brand Strategy", desc: "Before we make anything, we figure out what you should be saying and why anyone should care. Positioning, messaging, the story beneath the story.", icon: Target },
      { name: "Reputation Architecture", desc: "PR and reputation management for the synthetic media age. We help you control the narrative before someone else does.", icon: Shield },
      { name: "Crisis Storytelling", desc: "When things go sideways, the story you tell matters more than ever. We help you navigate reputation storms without sounding like a corporate hostage reading a statement.", icon: Shield },
      { name: "Thought Leadership Systems", desc: "Position your founders and executives as the voices worth following. Content strategies that build authority, not just visibility.", icon: Users },
    ],
  },
  {
    title: "SYNTHETIC BEINGS",
    color: 'var(--brand-gold)',
    services: [
      { name: "Digital Avatars", desc: "Spokespeople that represent your brand better than your CEO on a bad day. Always on-brand, always available, never hungover.", icon: Users },
      { name: "Synthetic Voices", desc: "Podcasts and audio content that somehow sound more human than most corporate communications.", icon: Radio },
      { name: "Autonomous Agents", desc: "Digital operatives that work while you sleep. Custom-built agents that handle workflows, engage audiences, and execute strategy on autopilot.", icon: Bot },
    ],
  },
  {
    title: "DESIGN WEAPONRY",
    color: 'var(--brand-magenta)',
    services: [
      { name: "3D Social Content", desc: "Corporate content that looks like it escaped the metaverse and landed in your LinkedIn feed. Stand out or get buried.", icon: Box },
      { name: "Visual Systems", desc: "Brand imagery that makes your competitors jealous. Cohesive visual language built for your brand's specific DNA.", icon: Palette },
      { name: "Print Artillery", desc: "Brochures and flyers with designs that physically refuse to be ignored. Yes, print is alive. We made it dangerous.", icon: Printer },
      { name: "Algorithmic Soundscapes", desc: "Custom music and audio tailored to your brand's frequency. Because stock music is a war crime against creativity.", icon: Music },
      { name: "Website Design", desc: "Digital real estate that doesn't look like a template crime scene. We design web experiences that convert visitors into believers.", icon: Globe },
      { name: "Vibe-Coded Applications", desc: "Apps built at the speed of imagination. We translate creative vision into functional software that feels as good as it works.", icon: Code },
    ],
  },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, var(--brand-white) 60px, var(--brand-white) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, var(--brand-white) 60px, var(--brand-white) 61px)`,
        }} />
      </div>

      {/* Section counter */}
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
        {/* Headline */}
        <motion.div
          className="mb-16 md:mb-24"
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

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              className="px-4 py-2 text-xs md:text-sm tracking-widest transition-all"
              style={{
                fontFamily: 'var(--font-mono)',
                backgroundColor: activeCategory === i ? cat.color : 'rgba(0,0,0,0)',
                color: activeCategory === i ? (cat.color === 'var(--brand-gold)' || cat.color === 'var(--brand-cyan)' ? 'var(--brand-black)' : 'var(--brand-white)') : 'var(--brand-concrete-light)',
                border: `1px solid ${activeCategory === i ? cat.color : 'var(--brand-concrete)'}`,
              }}
              onClick={() => { setActiveCategory(i); setHoveredService(null); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category title bar */}
            <div
              className="flex items-center gap-4 mb-8 pb-4"
              style={{ borderBottom: `2px solid ${categories[activeCategory].color}` }}
            >
              <div
                className="w-3 h-3"
                style={{ backgroundColor: categories[activeCategory].color }}
              />
              <h3
                className="text-3xl md:text-5xl tracking-tighter"
                style={{ fontFamily: 'var(--font-display)', color: categories[activeCategory].color }}
              >
                {categories[activeCategory].title}
              </h3>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {categories[activeCategory].services.map((service, i) => {
                const Icon = service.icon;
                const isHovered = hoveredService === i;

                return (
                  <motion.div
                    key={`${activeCategory}-${i}`}
                    className="relative group cursor-pointer overflow-hidden"
                    style={{
                      backgroundColor: isHovered ? `${categories[activeCategory].color}15` : 'rgba(255,255,255,0.02)',
                      borderLeft: `3px solid ${isHovered ? categories[activeCategory].color : 'transparent'}`,
                    }}
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="p-6 md:p-8 flex gap-5">
                      {/* Icon */}
                      <motion.div
                        className="flex-shrink-0 mt-1"
                        animate={{ rotate: isHovered ? 10 : 0, scale: isHovered ? 1.15 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon
                          size={28}
                          style={{ color: isHovered ? categories[activeCategory].color : 'var(--brand-concrete-light)' }}
                        />
                      </motion.div>

                      <div>
                        {/* Service name */}
                        <h4
                          className="text-xl md:text-2xl tracking-tighter mb-2"
                          style={{
                            fontFamily: 'var(--font-display)',
                            color: isHovered ? categories[activeCategory].color : 'var(--brand-white)',
                          }}
                        >
                          {service.name}
                        </h4>

                        {/* Description */}
                        <p
                          className="text-sm md:text-base leading-relaxed"
                          style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--brand-concrete-light)',
                          }}
                        >
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Hover scanline effect */}
                    {isHovered && (
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{ backgroundColor: categories[activeCategory].color, opacity: 0.4 }}
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

        {/* Wild card section */}
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
              <h3
                className="text-3xl md:text-4xl tracking-tighter mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Custom <span style={{ color: 'var(--brand-cyan)' }}>Everything</span>
              </h3>
              <p
                className="text-lg max-w-2xl"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
              >
                If it moves, speaks, or sparks emotion, we build it. Come with the impossible. Leave with a delivery date. Don't see what you need? If you can imagine it, we can weaponise it.
              </p>
            </div>
            <motion.button
              className="px-8 py-4 text-lg tracking-tight whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-display)',
                backgroundColor: 'var(--brand-magenta)',
                color: 'var(--brand-white)',
              }}
              whileHover={{ scale: 1.05, backgroundColor: 'var(--brand-cyan)', color: 'var(--brand-black)' }}
              whileTap={{ scale: 0.95 }}
            >
              LET'S TALK →
            </motion.button>
          </div>

          {/* Corner decoration */}
          <div
            className="absolute top-0 right-0 w-16 h-16"
            style={{
              borderBottom: '1px solid var(--brand-gold)',
              borderLeft: '1px solid var(--brand-gold)',
              opacity: 0.3,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
