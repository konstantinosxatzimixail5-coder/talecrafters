"use client";
import { motion } from 'motion/react';
import { useState } from 'react';
import { Send } from 'lucide-react';
import type { HomeCopy } from '@/content/copy';

/** The founder's own lines. One place, so the form, the call and the message
 *  can never end up pointing at three different people. */
const CALENDLY = 'https://calendly.com/konstantinos-xatzimixail5/1-1-meeting';
const WHATSAPP_NUMBER = '306946450024';
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;

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

/** The clapper arm, drawn rather than photographed. It hinges open when the
 *  form has enough in it to send, which is the only animation in this section
 *  that carries information. */
function ClapperTop({ open }: { open: boolean }) {
  return (
    <div className="relative" style={{ height: 46, marginBottom: -1 }}>
      <motion.div
        className="absolute left-0 right-0 top-0 flex overflow-hidden"
        style={{
          height: 46,
          transformOrigin: 'left bottom',
          backgroundColor: 'var(--brand-black)',
          border: '1px solid rgba(255,255,255,0.14)',
        }}
        animate={{ rotate: open ? -14 : 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1"
            style={{
              backgroundColor: i % 2 === 0 ? 'var(--brand-white)' : 'transparent',
              transform: 'skewX(-18deg)',
              opacity: i % 2 === 0 ? 0.9 : 1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/** One row of the slate: a label on the left, a field on the right. */
function SlateRow({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-[120px_minmax(0,1fr)] items-start gap-x-4 gap-y-1 px-5 py-4"
      style={last ? undefined : { borderBottom: '1px solid rgba(255,255,255,0.09)' }}
    >
      <span
        className="text-[10px] tracking-[0.24em] sm:pt-3"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

const fieldStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  color: 'var(--brand-white)',
  background: 'transparent',
  border: 0,
  outline: 'none',
  width: '100%',
  fontSize: '1.05rem',
  padding: '0.5rem 0',
};

export function ContactSection({ copy, hideHeading = false }: { copy: HomeCopy['contact']; hideHeading?: boolean }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const ready = name.trim() !== '' && /\S+@\S+\.\S+/.test(email) && message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready || sending) return;
    setSending(true);
    setFailed(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setSubmitted(true);
        return;
      }
      setFailed(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  /** The escape hatch when the API is down. Everything typed is already in the
   *  draft, so nobody has to write it twice. */
  const mailtoHref = () =>
    `mailto:konstantinos.xatzimixail5@gmail.com?subject=${encodeURIComponent(
      `New enquiry from ${name || 'the website'}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

  return (
    <section
      id="contact"
      // On /contact the page header already carries the title, so the section
      // does not need to open with half a screen of nothing under it.
      className={`relative overflow-hidden ${hideHeading ? 'pt-4 pb-24 md:pt-8 md:pb-32' : 'py-32 md:py-48'}`}
      style={{ backgroundColor: '#080808' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[25%] w-px h-full" style={{ backgroundColor: 'var(--brand-cyan)', opacity: 0.04 }} />
        <div className="absolute top-0 left-[75%] w-px h-full" style={{ backgroundColor: 'var(--brand-magenta)', opacity: 0.04 }} />
        <div
          className="absolute w-[200%] h-px origin-left"
          style={{ top: '40%', left: '-20%', backgroundColor: 'var(--brand-violet)', opacity: 0.05, rotate: '-4deg' }}
        />
      </div>

      {/* Section counter. The /contact route carries its own header, so both
          the counter and the headline are suppressed there. */}
      {!hideHeading && (
        <motion.div
          className="absolute top-12 right-8 md:right-16 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-8" style={{ backgroundColor: 'var(--brand-cyan)' }} />
          <span className="text-xs tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}>
            {copy.flag}
          </span>
        </motion.div>
      )}

      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
        {!hideHeading && (
          <motion.div
            className="mb-14 md:mb-20"
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
              <span style={{ color: 'var(--brand-cyan)' }}>{copy.accentWord}</span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-16" style={{ background: 'linear-gradient(to right, var(--brand-cyan), var(--brand-magenta))' }} />
              <span className="text-sm tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                Consider this your audition. Ours too.
              </span>
            </div>
          </motion.div>
        )}

        {submitted ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex justify-center">
              <HandshakeAnimIcon />
            </div>
            <h3 className="text-4xl md:text-6xl tracking-tighter mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              SCENE ONE, <span style={{ color: 'var(--brand-cyan)' }}>TAKE ONE.</span>
            </h3>
            <p className="text-lg max-w-lg mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
              Your message is with Konstantinos. He answers these himself, usually the same day.
              If you would rather not wait, the call and the WhatsApp thread below are both open.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', border: '1px solid var(--brand-cyan)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
              >
                BOOK THE CALL ↗
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', border: '1px solid var(--brand-gold)', color: 'var(--brand-gold)', textDecoration: 'none' }}
              >
                WHATSAPP ↗
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
            {/* --- the slate ------------------------------------------- */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ClapperTop open={ready} />

              <div style={{ border: '1px solid rgba(255,255,255,0.14)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div
                  className="flex items-center justify-between px-5 py-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.09)' }}
                >
                  <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                    PROD. TALECRAFTERS
                  </span>
                  <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}>
                    SEND US A MESSAGE
                  </span>
                </div>

                <SlateRow label="NAME">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Who is calling it"
                    required
                    style={fieldStyle}
                  />
                </SlateRow>

                <SlateRow label="EMAIL">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    style={fieldStyle}
                  />
                </SlateRow>

                <SlateRow label="THE BRIEF" last>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What you want made, when you need it, and the constraint you think kills it."
                    rows={5}
                    required
                    className="resize-none"
                    style={{ ...fieldStyle, lineHeight: 1.6 }}
                  />
                </SlateRow>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={!ready || sending}
                  className="px-8 py-4 text-lg tracking-tight flex items-center gap-3 transition-transform"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: ready ? 'linear-gradient(135deg, var(--brand-magenta), var(--brand-violet))' : 'var(--brand-concrete)',
                    color: ready ? 'var(--brand-white)' : '#B9B9B9',
                    border: 0,
                    cursor: ready && !sending ? 'pointer' : 'not-allowed',
                  }}
                >
                  {sending ? 'SENDING…' : 'SEND IT'}
                  <Send size={18} />
                </button>

                {failed && (
                  <p className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}>
                    That did not go through.{' '}
                    <a href={mailtoHref()} style={{ color: 'var(--brand-cyan)' }}>
                      Send it from your own mail client
                    </a>{' '}
                    with everything you typed already in it.
                  </p>
                )}
              </div>

              <p className="text-xs mt-6 leading-relaxed" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                By sending this you agree to our{' '}
                <a href="/privacy" className="underline underline-offset-2" style={{ color: 'var(--brand-cyan)' }}>
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms" className="underline underline-offset-2" style={{ color: 'var(--brand-cyan)' }}>
                  Terms of Service
                </a>.
              </p>
            </motion.form>

            {/* --- the two other ways in -------------------------------- */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                OR SKIP THE FORM
              </span>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6"
                style={{ border: '1px solid rgba(0,229,204,0.3)', textDecoration: 'none' }}
              >
                <span className="block text-2xl tracking-tight mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-cyan)' }}>
                  Book a call with our founder
                </span>
                <span className="block text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  Thirty minutes with Konstantinos. Bring the brief and you will leave with a shape,
                  a stack and a number.
                </span>
                <span className="block mt-4 text-[11px] tracking-[0.2em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}>
                  OPEN CALENDLY ↗
                </span>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6"
                style={{ border: '1px solid rgba(201,168,76,0.3)', textDecoration: 'none' }}
              >
                <span className="block text-2xl tracking-tight mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-gold)' }}>
                  Send us a WhatsApp
                </span>
                <span className="block text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  For the ones that are easier said than typed. Straight to the phone in
                  Konstantinos&apos; pocket.
                </span>
                <span className="block mt-4 text-[11px] tracking-[0.2em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}>
                  +30 694 645 0024 ↗
                </span>
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
