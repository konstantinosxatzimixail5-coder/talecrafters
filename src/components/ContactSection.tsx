"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { Send, ChevronRight, Compass, BookMarked, Crosshair, Cpu, Swords, Sparkles } from 'lucide-react';

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

const projectTypes = [
  { id: 'visual-warfare', label: 'Visual Warfare', color: 'var(--brand-magenta)', icon: Compass },
  { id: 'narrative', label: 'Narrative Engineering', color: 'var(--brand-cyan)', icon: BookMarked },
  { id: 'strategy', label: 'Strategy & Reputation', color: 'var(--brand-violet)', icon: Crosshair },
  { id: 'synthetic', label: 'Synthetic Beings', color: 'var(--brand-gold)', icon: Cpu },
  { id: 'design', label: 'Design Weaponry', color: 'var(--brand-magenta)', icon: Swords },
  { id: 'wildcard', label: 'Something Unhinged', color: 'var(--brand-violet)', icon: Sparkles },
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
  const [budget, setBudget] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async () => {
    const servicesStr = selectedTypes.map(t => projectTypes.find(p => p.id === t)?.label).join(', ');
    const urgencyStr = urgencyLevels.find(u => u.id === urgency)?.label || '';
    const budgetStr = budgetRanges.find(b => b.id === budget)?.label || 'Not specified';

    // Try Netlify Forms first
    if (formRef.current) {
      try {
        const formData = new FormData(formRef.current);
        const res = await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString(),
        });
        if (res.ok) {
          setSubmitted(true);
          return;
        }
      } catch {
        // Netlify Forms failed — fall through to mailto
      }
    }

    // Fallback: open mailto with all form data pre-filled
    const subject = encodeURIComponent(`New enquiry from ${name || 'Website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not specified'}\n\nServices: ${servicesStr}\nTimeline: ${urgencyStr}\nBudget: ${budgetStr}\n\nMessage:\n${message || 'No additional message.'}`
    );
    window.open(`mailto:hello@talecrafters.studio?subject=${subject}&body=${body}`, '_blank');
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

  const servicesValue = selectedTypes.map(t => projectTypes.find(p => p.id === t)?.label).join(', ');
  const urgencyValue = urgencyLevels.find(u => u.id === urgency)?.label || '';
  const budgetValue = budgetRanges.find(b => b.id === budget)?.label || '';

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
            LET&apos;S<br />
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
              className="text-8xl mb-8 flex justify-center"
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
              We&apos;ve received your transmission. Expect a response faster than your last agency sent a revision. Check your inbox.
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
          <form
            ref={formRef}
            name="contact"
            method="POST"
          >
            {/* Netlify hidden inputs */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="services" value={servicesValue} />
            <input type="hidden" name="urgency" value={urgencyValue} />
            <input type="hidden" name="budget" value={budgetValue} />

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
                      const Icon = type.icon;
                      return (
                        <motion.button
                          key={type.id}
                          type="button"
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
                            <Icon size={28} style={{ color: type.color }} />
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

                {/* Step 1: Urgency + Budget */}
                {step === 1 && (
                  <div className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {urgencyLevels.map((level) => {
                        const isSelected = urgency === level.id;
                        return (
                          <motion.button
                            key={level.id}
                            type="button"
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

                    {/* Budget selection */}
                    <div>
                      <label
                        className="block text-xs tracking-widest mb-4"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
                      >
                        BUDGET RANGE (OPTIONAL)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetRanges.map((range) => {
                          const isSelected = budget === range.id;
                          return (
                            <motion.button
                              key={range.id}
                              type="button"
                              className="px-4 py-2 text-xs tracking-wider"
                              style={{
                                fontFamily: 'var(--font-mono)',
                                backgroundColor: isSelected ? 'var(--brand-gold)' : 'transparent',
                                color: isSelected ? 'var(--brand-black)' : 'var(--brand-concrete-light)',
                                border: `1px solid ${isSelected ? 'var(--brand-gold)' : 'var(--brand-concrete)'}`,
                              }}
                              onClick={() => setBudget(isSelected ? '' : range.id)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {range.label}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Name, Email, Company */}
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
                        name="name"
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
                        name="email"
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
                    <div>
                      <label
                        className="block text-xs tracking-widest mb-3"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
                      >
                        COMPANY (OPTIONAL)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your organisation..."
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
                      name="message"
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
                          {servicesValue || '—'}
                        </div>
                        <div>
                          <span style={{ color: 'var(--brand-gold)' }}>urgency:</span>{' '}
                          {urgencyValue || '—'}
                        </div>
                        <div>
                          <span style={{ color: 'var(--brand-cyan)' }}>budget:</span>{' '}
                          {budgetValue || '—'}
                        </div>
                        <div>
                          <span style={{ color: 'var(--brand-violet)' }}>agent:</span>{' '}
                          {name || '—'}{company ? ` @ ${company}` : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                {step > 0 && (
                  <motion.button
                    type="button"
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
                    type="button"
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
                    type="button"
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
            </div>

            {/* Privacy consent note */}
            <p
              className="text-xs mt-6 leading-relaxed"
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
          </form>
        )}
      </div>
    </section>
  );
}
