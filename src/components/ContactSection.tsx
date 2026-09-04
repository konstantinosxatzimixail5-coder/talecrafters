"use client";
import { motion, useAnimationControls, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
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

/* --- the slate ------------------------------------------------------------
   The sticks are one repeating gradient rather than a row of skewed divs. A
   gradient cannot leave the wedge-shaped gaps a skewed flex row leaves at
   either end, and the same declaration draws both sticks: the board's fixed
   one is the arm's, shifted by a single band so the two rows interlock into a
   chevron when the arm comes down. */
const ARM_HEIGHT = 40;
const LOWER_STICK_HEIGHT = 15;
const BAND = 26;

function stickFace(offset = 0): React.CSSProperties {
  return {
    backgroundImage: `repeating-linear-gradient(112deg, #F2F2F2 0 ${BAND}px, #0B0B0B ${BAND}px ${BAND * 2}px)`,
    backgroundPosition: `${offset}px 0`,
  };
}

/** The hinged arm. It rests closed, lifts once there is something in the
 *  slate, and claps shut on the take: the only animation in this section that
 *  carries information. `controls` is driven by the form so the arm and the
 *  board can shake on the same frame. */
function ClapperArm({ controls }: { controls: ReturnType<typeof useAnimationControls> }) {
  return (
    <div className="relative" style={{ height: ARM_HEIGHT }} aria-hidden>
      <motion.div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: ARM_HEIGHT,
          transformOrigin: 'left bottom',
          borderRadius: '3px 3px 0 0',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
          ...stickFace(0),
        }}
        initial={{ rotate: 0 }}
        animate={controls}
      >
        {/* the hinge pin, and the shadow the arm casts on itself */}
        <span
          className="absolute"
          style={{ left: 7, bottom: 7, width: 7, height: 7, borderRadius: 999, background: 'rgba(0,0,0,0.55)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.35)' }}
        />
        <span
          className="absolute inset-x-0 bottom-0"
          style={{ height: 6, background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)' }}
        />
      </motion.div>
    </div>
  );
}

/** The three cells along the foot of the slate. They fill in as the fields do,
 *  so the board is visibly being marked up while you type. */
function SlateFoot({ name, email, brief }: { name: boolean; email: boolean; brief: boolean }) {
  const cells: [string, string, boolean][] = [
    ['ROLL', name ? 'A' : '—', name],
    ['SCENE', email ? '01' : '—', email],
    ['TAKE', brief ? '01' : '—', brief],
  ];
  return (
    <div
      className="grid grid-cols-3"
      style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}
    >
      {cells.map(([label, value, on], i) => (
        <div
          key={label}
          className="flex items-baseline gap-2 px-5 py-3"
          style={i < 2 ? { borderRight: '1px solid rgba(255,255,255,0.09)' } : undefined}
        >
          <span
            className="text-[9px] tracking-[0.24em]"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
          >
            {label}
          </span>
          <motion.span
            key={`${label}-${value}`}
            className="text-sm"
            style={{ fontFamily: 'var(--font-mono)', color: on ? 'var(--brand-cyan)' : 'rgba(255,255,255,0.25)' }}
            initial={on ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {value}
          </motion.span>
        </div>
      ))}
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
      className="slate-row grid grid-cols-1 sm:grid-cols-[120px_minmax(0,1fr)] items-start gap-x-4 gap-y-1 px-5 py-4"
      style={last ? undefined : { borderBottom: '1px solid rgba(255,255,255,0.09)' }}
    >
      <span
        className="slate-label text-[10px] tracking-[0.24em] sm:pt-3"
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
  // 0.65rem, not 0.5rem: at the smaller padding the two single-line inputs
  // came out 41px tall, just under the 44px a thumb wants.
  padding: '0.65rem 0',
};

export function ContactSection({ copy, hideHeading = false }: { copy: HomeCopy['contact']; hideHeading?: boolean }) {
  /* Where this section sits decides how it should arrive.
     On the home page it is the last thing on a long scroll, so a
     `whileInView` reveal is exactly right. On /contact, where the page header
     is suppressed, the slate is the first thing on the page — and on a wide
     screen the largest thing above the fold, which made it the LCP element.
     A `whileInView` reveal there means the metric waits for the bundle, React
     and an IntersectionObserver: 970ms for a card that was in the HTML from
     the start. Above the fold it rises in CSS instead, from first paint. */
  const aboveTheFold = hideHeading;
  const entrance = (delay: number) =>
    aboveTheFold
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
          viewport: { once: true },
        };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const hasName = name.trim() !== '';
  const hasEmail = /\S+@\S+\.\S+/.test(email);
  const hasMessage = message.trim() !== '';
  const ready = hasName && hasEmail && hasMessage;
  const started = hasName || email.trim() !== '' || hasMessage;

  /* --- the clap ---------------------------------------------------------
     The arm lifts as soon as there is anything on the board, and claps the
     moment the slate is complete: up, down hard, one settle, and a shake that
     the board takes with it. That is the whole shot-marking gesture, and it
     fires again on send, because that is when the take actually starts. */
  const armControls = useAnimationControls();
  const slateControls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const [clapCount, setClapCount] = useState(0);
  const clapping = useRef(false);
  const hasClapped = useRef(false);

  const clap = useCallback(async () => {
    if (clapping.current) return;
    clapping.current = true;
    try {
      if (reduceMotion) {
        await armControls.start({ rotate: 0, transition: { duration: 0 } });
        return;
      }
      setClapCount((n) => n + 1);
      // The arm is as wide as the board, so a few degrees travel a long way at
      // the far end. -26° is as far as it can swing before it sweeps over the
      // headline above the form.
      await armControls.start({ rotate: -26, transition: { type: 'spring', stiffness: 320, damping: 17 } });
      await armControls.start({ rotate: 0, transition: { duration: 0.09, ease: [0.5, 0, 0.9, 0.6] } });
      slateControls.start({ x: [0, -4, 4, -2, 0], transition: { duration: 0.26, ease: 'easeOut' } });
      await armControls.start({ rotate: [0, -7, 0, -2.5, 0], transition: { duration: 0.36, ease: 'easeOut' } });
    } finally {
      clapping.current = false;
    }
  }, [armControls, slateControls, reduceMotion]);

  useEffect(() => {
    if (ready) {
      if (!hasClapped.current) {
        hasClapped.current = true;
        void clap();
      }
      return;
    }
    // Back to an incomplete slate: hold the arm open while there is something
    // on it, and let a later completion earn a fresh clap.
    hasClapped.current = false;
    armControls.start({
      rotate: started ? -12 : 0,
      transition: reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 200, damping: 18 },
    });
  }, [ready, started, clap, armControls, reduceMotion]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready || sending) return;
    void clap();
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
              className={aboveTheFold ? 'tc-rise' : undefined}
              {...entrance(0)}
            >
              <motion.div animate={slateControls} style={{ willChange: 'transform' }}>
                <ClapperArm controls={armControls} />

                <div
                  className="relative"
                  style={{
                    border: '1px solid rgba(255,255,255,0.16)',
                    borderRadius: '0 0 4px 4px',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
                  }}
                >
                  {/* The board's own stick, half a band out of phase with the
                      arm so the two rows lock together when it shuts. */}
                  <div
                    aria-hidden
                    style={{
                      height: LOWER_STICK_HEIGHT,
                      borderBottom: '1px solid rgba(255,255,255,0.16)',
                      ...stickFace(BAND),
                    }}
                  />

                  {/* The strike: a flash along the seam on each clap. */}
                  {clapCount > 0 && (
                    <motion.div
                      key={clapCount}
                      aria-hidden
                      className="absolute left-0 right-0 pointer-events-none"
                      style={{ top: LOWER_STICK_HEIGHT, height: 2, backgroundColor: 'var(--brand-white)' }}
                      initial={{ opacity: 0.85, scaleY: 2 }}
                      animate={{ opacity: 0, scaleY: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  )}

                  {/* Wrapping, because at 320px the two mono labels each take
                      two lines and would otherwise sit shoulder to shoulder
                      with nothing between them. */}
                  <div
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-3"
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

                  <SlateFoot name={hasName} email={hasEmail} brief={hasMessage} />
                </div>
              </motion.div>

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
              className={`flex flex-col gap-4${aboveTheFold ? ' tc-rise' : ''}`}
              style={aboveTheFold ? { animationDelay: '0.1s' } : undefined}
              {...entrance(0.1)}
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
