"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Send, ChevronRight } from 'lucide-react';

/* Custom animated contact icons */
function FilmClapIcon({ color }: { color: string }) {
  return (
    <motion.svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      animate={{ rotate: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
      <motion.rect x="2" y="10" width="24" height="16" rx="1" stroke={color} strokeWidth="1.5" fill="none" />
      <motion.path d="M2 10 L6 4 H22 L26 10" stroke={color} strokeWidth="1.5" fill="none" />
      <motion.line x1="8" y1="4" x2="10" y2="10" stroke={color} strokeWidth="1.5" />
      <motion.line x1="14" y1="4" x2="16" y2="10" stroke={color} strokeWidth="1.5" />
      <motion.line x1="20" y1="4" x2="22" y2="10" stroke={color} strokeWidth="1.5" />
    </motion.svg>
  );
}

function NarrativeIcon({ color }: { color: string }) {
  return (
    <motion.svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      animate={{ y: [0, -2, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
      <motion.path d="M4 4 H18 V24 H4 Z" stroke={color} strokeWidth="1.5" fill="none" />
      <motion.path d="M18 8 H24 V24 H18" stroke={color} strokeWidth="1.5" fill="none" />
      <motion.line x1="7" y1="9" x2="15" y2="9" stroke={color} strokeWidth="1" opacity="0.6" />
      <motion.line x1="7" y1="13" x2="15" y2="13" stroke={color} strokeWidth="1" opacity="0.6" />
      <motion.line x1="7" y1="17" x2="12" y2="17" stroke={color} strokeWidth="1" opacity="0.6" />
    </motion.svg>
  );
}

function CrosshairIcon({ color }: { color: string }) {
  return (
    <motion.svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      animate={{ rotate: [0, 90, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}>
      <motion.circle cx="14" cy="14" r="10" stroke={color} strokeWidth="1.5" fill="none" />
      <motion.circle cx="14" cy="14" r="4" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <motion.line x1="14" y1="2" x2="14" y2="8" stroke={color} strokeWidth="1.5" />
      <motion.line x1="14" y1="20" x2="14" y2="26" stroke={color} strokeWidth="1.5" />
      <motion.line x1="2" y1="14" x2="8" y2="14" stroke={color} strokeWidth="1.5" />
      <motion.line x1="20" y1="14" x2="26" y2="14" stroke={color} strokeWidth="1.5" />
    </motion.svg>
  );
}

function SyntheticIcon({ color }: { color: string }) {
  return (
    <motion.svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <motion.circle cx="14" cy="10" r="6" stroke={color} strokeWidth="1.5" fill="none" />
      <motion.path d="M6 24 C6 18 22 18 22 24" stroke={color} strokeWidth="1.5" fill="none" />
      <motion.circle cx="11" cy="9" r="1.5" fill={color}
        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="17" cy="9" r="1.5" fill={color}
        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
      <motion.line x1="20" y1="4" x2="24" y2="2" stroke={color} strokeWidth="1" opacity="0.5" />
      <motion.line x1="22" y1="8" x2="26" y2="7" stroke={color} strokeWidth="1" opacity="0.5" />
    </motion.svg>
  );
}

function SwordIcon({ color }: { color: string }) {
  return (
    <motion.svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
      <motion.line x1="6" y1="22" x2="22" y2="6" stroke={color} strokeWidth="2" />
      <motion.path d="M22 6 L26 2 L24 8 Z" stroke={color} strokeWidth="1.5" fill="none" />
      <motion.line x1="9" y1="16" x2="5" y2="20" stroke={color} strokeWidth="1.5" />
      <motion.line x1="12" y1="19" x2="8" y2="23" stroke={color} strokeWidth="1.5" />
    </motion.svg>
  );
}

function ChaosIcon({ color }: { color: string }) {
  return (
    <motion.svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
      <motion.path d="M14 2 L16 10 L24 8 L18 14 L24 20 L16 18 L14 26 L12 18 L4 20 L10 14 L4 8 L12 10 Z"
        stroke={color} strokeWidth="1.5" fill="none" />
      <motion.circle cx="14" cy="14" r="3" fill={color} opacity="0.3"
        animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    </motion.svg>
  );
}

function HandshakeAnimIcon() {
  return (
    <motion.svg width="64" height="64" viewBox="0 0 64 64" fill="none"
      animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }} transition={{ duration: 2, delay: 0.3 }}>
      <motion.path d="M12 32 C12 20 24 14 32 14 C40 14 52 20 52 32"
        stroke="var(--brand-cyan)" strokeWidth="2.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.path d="M20 36 L28 28 L36 36 L44 28"
        stroke="var(--brand-magenta)" strokeWidth="2.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
      <motion.circle cx="32" cy="44" r="6" stroke="var(--brand-gold)" strokeWidth="2" fill="none"
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="32" cy="44" r="2" fill="var(--brand-gold)" opacity="0.5" />
    </motion.svg>
  );
}

const contactIcons: Record<string, { component: ({ color }: { color: string }) => JSX.Element }> = {
  'visual-warfare': { component: FilmClapIcon },
  'narrative': { component: NarrativeIcon },
  'strategy': { component: CrosshairIcon },
  'synthetic': { component: SyntheticIcon },
  'design': { component: SwordIcon },
  'wildcard': { component: ChaosIcon },
};

const projectTypes = [
  { id: 'visual-warfare', label: 'Visual Warfare', color: 'var(--brand-magenta)' },
  { id: 'narrative', label: 'Narrative Engineering', color: 'var(--brand-cyan)' },
  { id: 'strategy', label: 'Strategy & Reputation', color: 'var(--brand-violet)' },
  { id: 'synthetic', label: 'Synthetic Beings', color: 'var(--brand-gold)' },
  { id: 'design', label: 'Design Weaponry', color: 'var(--brand-magenta)' },
  { id: 'wildcard', label: 'Something Unhinged', color: 'var(--brand-violet)' },
];

const budgetRanges = [
  { id: 'starter', label: '£2K — £5K', note: 'Testing the waters' },
  { id: 'serious', label: '£5K — £15K', note: 'Getting serious' },
  { id: 'arsenal', label: '£15K — £50K', note: 'Full arsenal deployed' },
  { id: 'unlimited', label: '£50K+', note: 'World domination budget' },
  { id: 'no-idea', label: 'No clue', note: 'Let\'s figure it out' },
];

const urgencyLevels = [
  { id: 'yesterday', label: 'YESTERDAY', color: 'var(--brand-magenta)', desc: 'We needed this last week' },
  { id: 'soon', label: 'THIS MONTH', color: 'var(--brand-gold)', desc: 'Time is ticking' },
  { id: 'planned', label: 'THIS QUARTER', color: 'var(--brand-cyan)', desc: 'Strategically planned' },
  { id: 'exploring', label: 'JUST EXPLORING', color: 'var(--brand-violet)', desc: 'Kicking tyres' },
];

export function ContactSection() {
  const [step, setStep] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [urgency, setUrgency] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const toggleType = (id: string) => {
    setSelectedTypes(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    switch (step) {
      case 0: return selectedTypes.length > 0;
      case 1: return urgency !== '';
      case 2: return name.trim() !== '' && email.trim() !== '';
      case 3: return true;
      default: return false;
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const stepTitles = [
    "WHAT KIND OF CHAOS ARE YOU AFTER?",
    "HOW FAST DO YOU NEED THIS?",
    "WHO ARE WE CONSPIRING WITH?",
    "ANYTHING ELSE WE SHOULD KNOW?",
  ];

  const stepSubtitles = [
    "Pick as many as you want. We don't judge.",
    "Honesty helps us help you. No pressure.",
    "The basics. We promise not to spam you.",
    "The weirder the brief, the better the work.",
  ];

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#080808' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-[25%] w-px h-full"
          style={{ backgroundColor: 'var(--brand-cyan)', opacity: 0.04 }}
        />
        <motion.div
          className="absolute top-0 left-[75%] w-px h-full"
          style={{ backgroundColor: 'var(--brand-magenta)', opacity: 0.04 }}
        />
        <motion.div
          className="absolute w-[200%] h-px origin-left"
          style={{ top: '40%', left: '-20%', backgroundColor: 'var(--brand-violet)', opacity: 0.05, rotate: -4 }}
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
          007 / START A CONSPIRACY
        </span>
      </motion.div>

      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
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
            LET'S<br />
            <span style={{ color: 'var(--brand-cyan)' }}>CONSPIRE</span>
          </h2>
          <motion.div
            className="mt-6 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, var(--brand-cyan), var(--brand-magenta))' }} />
            <span
              className="text-sm tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
            >
              Consider this your audition. Ours too.
            </span>
          </motion.div>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-8xl mb-8"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <HandshakeAnimIcon />
            </motion.div>
            <h3
              className="text-4xl md:text-6xl tracking-tighter mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              CONSPIRACY <span style={{ color: 'var(--brand-cyan)' }}>INITIATED.</span>
            </h3>
            <p
              className="text-lg max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
            >
              We've received your transmission. Expect a response faster than your last agency sent a revision. Check your inbox.
            </p>
            <motion.div
              className="mt-8 text-sm tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PROCESSING YOUR CHAOS...
            </motion.div>
          </motion.div>
        ) : (
          <>
            {/* Progress bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs tracking-widest"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                >
                  STEP {step + 1} OF {totalSteps}
                </span>
                <span
                  className="text-xs tracking-widest"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-[2px] w-full" style={{ backgroundColor: 'var(--brand-concrete)', opacity: 0.3 }}>
                <motion.div
                  className="h-full"
                  style={{ background: 'linear-gradient(to right, var(--brand-cyan), var(--brand-magenta), var(--brand-violet))' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Step title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3
                  className="text-2xl md:text-4xl tracking-tighter mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stepTitles[step]}
                </h3>
                <p
                  className="text-sm mb-10"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                >
                  {stepSubtitles[step]}
                </p>

                {/* Step 0: Project type selection */}
                {step === 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {projectTypes.map((type) => {
                      const isSelected = selectedTypes.includes(type.id);
                      return (
                        <motion.button
                          key={type.id}
                          className="relative p-5 text-left overflow-hidden"
                          style={{
                            backgroundColor: isSelected ? `${type.color}15` : 'rgba(255,255,255,0.02)',
                            border: `1px solid ${isSelected ? type.color : 'rgba(255,255,255,0.08)'}`,
                          }}
                          onClick={() => toggleType(type.id)}
                          whileHover={{ scale: 1.02, borderColor: type.color }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-2xl mb-2">
                            {contactIcons[type.id]?.component({ color: type.color })}
                          </div>
                          <div
                            className="text-sm tracking-widest"
                            style={{
                              fontFamily: 'var(--font-display)',
                              color: isSelected ? type.color : 'var(--brand-white)',
                            }}
                          >
                            {type.label}
                          </div>
                          {isSelected && (
                            <motion.div
                              className="absolute top-0 left-0 right-0 h-[3px]"
                              style={{ backgroundColor: type.color }}
                              layoutId={`selected-${type.id}`}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {/* Step 1: Urgency */}
                {step === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {urgencyLevels.map((level) => {
                      const isSelected = urgency === level.id;
                      return (
                        <motion.button
                          key={level.id}
                          className="relative p-6 text-left overflow-hidden"
                          style={{
                            backgroundColor: isSelected ? `${level.color}12` : 'rgba(255,255,255,0.02)',
                            border: `1px solid ${isSelected ? level.color : 'rgba(255,255,255,0.06)'}`,
                          }}
                          onClick={() => setUrgency(level.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div
                            className="text-xl tracking-tighter mb-1"
                            style={{
                              fontFamily: 'var(--font-display)',
                              color: isSelected ? level.color : 'var(--brand-white)',
                            }}
                          >
                            {level.label}
                          </div>
                          <div
                            className="text-xs tracking-widest"
                            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                          >
                            {level.desc}
                          </div>
                          {isSelected && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-[3px]"
                              style={{ backgroundColor: level.color }}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {/* Step 2: Name & Email */}
                {step === 2 && (
                  <div className="space-y-6 max-w-xl">
                    <div>
                      <label
                        className="block text-xs tracking-widest mb-3"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
                      >
                        YOUR NAME (OR ALIAS)
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="The mastermind behind this operation..."
                        className="w-full bg-transparent p-4 text-lg outline-none"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: 'var(--brand-white)',
                          borderBottom: '2px solid var(--brand-concrete)',
                          transition: 'border-color 0.3s',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--brand-cyan)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--brand-concrete)'}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs tracking-widest mb-3"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
                      >
                        YOUR EMAIL (FOR THE CLASSIFIED BRIEFING)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-transparent p-4 text-lg outline-none"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: 'var(--brand-white)',
                          borderBottom: '2px solid var(--brand-concrete)',
                          transition: 'border-color 0.3s',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--brand-cyan)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--brand-concrete)'}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Message */}
                {step === 3 && (
                  <div className="max-w-xl">
                    <label
                      className="block text-xs tracking-widest mb-3"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
                    >
                      THE BRIEF (OR RANT, WE ACCEPT BOTH)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us everything. The vision, the deadline, the impossible thing you want us to build. The more unhinged, the better..."
                      rows={6}
                      className="w-full bg-transparent p-4 text-lg outline-none resize-none"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--brand-white)',
                        border: '1px solid var(--brand-concrete)',
                        transition: 'border-color 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand-cyan)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--brand-concrete)'}
                    />

                    {/* Summary preview */}
                    <div
                      className="mt-8 p-5"
                      style={{
                        backgroundColor: 'rgba(0,229,204,0.04)',
                        border: '1px solid rgba(0,229,204,0.15)',
                      }}
                    >
                      <div
                        className="text-[10px] tracking-widest mb-3"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
                      >
                        MISSION BRIEFING SUMMARY
                      </div>
                      <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                        <div>
                          <span style={{ color: 'var(--brand-magenta)' }}>type:</span>{' '}
                          {selectedTypes.length > 0
                            ? selectedTypes.map(t => projectTypes.find(p => p.id === t)?.label).join(', ')
                            : '—'}
                        </div>
                        <div>
                          <span style={{ color: 'var(--brand-gold)' }}>urgency:</span>{' '}
                          {urgency ? urgencyLevels.find(u => u.id === urgency)?.label : '—'}
                        </div>
                        <div>
                          <span style={{ color: 'var(--brand-violet)' }}>agent:</span>{' '}
                          {name || '—'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="mt-12 flex items-center justify-between">
              <div>
                {step > 0 && (
                  <motion.button
                    className="px-6 py-3 text-sm tracking-widest"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--brand-concrete-light)',
                      border: '1px solid var(--brand-concrete)',
                    }}
                    onClick={() => setStep(step - 1)}
                    whileHover={{ borderColor: 'var(--brand-white)', color: 'var(--brand-white)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← BACK
                  </motion.button>
                )}
              </div>

              <div>
                {step < totalSteps - 1 ? (
                  <motion.button
                    className="px-8 py-4 text-lg tracking-tight flex items-center gap-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      backgroundColor: canProceed() ? 'var(--brand-cyan)' : 'var(--brand-concrete)',
                      color: canProceed() ? 'var(--brand-black)' : 'var(--brand-concrete-light)',
                      opacity: canProceed() ? 1 : 0.5,
                    }}
                    onClick={() => canProceed() && setStep(step + 1)}
                    whileHover={canProceed() ? { scale: 1.05 } : {}}
                    whileTap={canProceed() ? { scale: 0.95 } : {}}
                  >
                    NEXT <ChevronRight size={20} />
                  </motion.button>
                ) : (
                  <motion.button
                    className="px-8 py-4 text-lg tracking-tight flex items-center gap-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      background: 'linear-gradient(135deg, var(--brand-magenta), var(--brand-violet))',
                      color: 'var(--brand-white)',
                    }}
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                      animate={{ rotate: [0, 180, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                      <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </motion.svg>
                    LAUNCH THE CONSPIRACY
                    <Send size={18} />
                  </motion.button>
                )}
              </div>

              {/* Privacy consent note */}
              <p
                className="text-xs mt-4 leading-relaxed"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
              >
                By submitting this form you agree to our{' '}
                <a href="/privacy" className="underline underline-offset-2 transition-opacity hover:opacity-70" style={{ color: 'var(--brand-cyan)' }}>
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms" className="underline underline-offset-2 transition-opacity hover:opacity-70" style={{ color: 'var(--brand-cyan)' }}>
                  Terms of Service
                </a>.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
