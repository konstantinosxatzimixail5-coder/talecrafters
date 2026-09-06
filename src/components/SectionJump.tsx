"use client";

// The arrow on the front page.
//
// The home page is a long stack of full-height sections, which is fine for
// someone reading it top to bottom and hostile to someone who arrived wanting
// one thing. This is the fix: an arrow that is always on screen, jumps to the
// next section on a click, and opens the whole list on the chevron so a visitor
// can go straight to pricing, the work, or the contact form.
//
// It is deliberately not a second navigation bar. The header already lists the
// site; this lists the page, and only on the page it belongs to.

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowUp, ChevronUp } from 'lucide-react';

export interface SectionMark {
  /** The `id` on the wrapper in the page. */
  id: string;
  label: string;
  color: string;
}

/**
 * The sections of the front page, in the order they render.
 *
 * Exported so the page can wrap each section with the matching id from the same
 * list. A label here that has no section there would scroll nowhere, so there is
 * one array and both ends read it.
 */
export const HOME_SECTIONS: SectionMark[] = [
  { id: 'studio', label: 'THE STUDIO', color: 'var(--brand-cyan)' },
  { id: 'divisions', label: 'THE DIVISIONS', color: 'var(--brand-violet-text)' },
  { id: 'philosophy', label: 'PHILOSOPHY', color: 'var(--brand-magenta)' },
  { id: 'services', label: 'WHAT WE DO', color: 'var(--brand-cyan)' },
  { id: 'work', label: 'SELECTED WORK', color: 'var(--brand-magenta)' },
  { id: 'process', label: 'THE PROCESS', color: 'var(--brand-gold)' },
  { id: 'pricing', label: 'PRICING', color: 'var(--brand-gold)' },
  { id: 'blog', label: 'THE BLOG', color: 'var(--brand-cyan)' },
  { id: 'clients', label: 'CLIENTS', color: 'var(--brand-violet-text)' },
  { id: 'contact', label: 'CONTACT', color: 'var(--brand-magenta)' },
];

/** Where the sticky header ends, so a jump does not land under the bar. */
const HEADER_OFFSET = 88;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function SectionJump({ sections = HOME_SECTIONS }: { sections?: SectionMark[] }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Which section the reader is in, and whether the page has anywhere left to
  // go. Read from scroll rather than IntersectionObserver because the sections
  // are taller than the viewport, so "which one is intersecting" is often two
  // of them and the answer flickers on the boundary.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + HEADER_OFFSET + 8;
      setVisible(window.scrollY > 320);
      setAtEnd(window.innerHeight + window.scrollY >= document.body.scrollHeight - 120);

      let current = -1;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= y) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sections]);

  // Escape closes the list, and so does a click anywhere outside it: the same
  // behaviour the header menus have, because a panel that only closes by
  // pressing the button that opened it is a trap on touch.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  /** The arrow's job: next section down, or back to the top once there is no
   *  next one. Never a dead click. */
  const advance = useCallback(() => {
    if (atEnd) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const next = sections[Math.min(active + 1, sections.length - 1)];
    if (next) scrollToId(next.id);
  }, [active, atEnd, sections]);

  const label = atEnd
    ? 'Back to the top'
    : `Jump to ${sections[Math.min(active + 1, sections.length - 1)]?.label.toLowerCase() ?? 'the next section'}`;

  return (
    <div
      ref={wrapRef}
      className="fixed z-40 right-4 md:right-6 bottom-6 md:bottom-8 flex flex-col items-end gap-2 print:hidden"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <AnimatePresence>
        {open && visible && (
          <motion.nav
            aria-label="Jump to a section of this page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18 }}
            className="w-[228px] max-h-[60vh] overflow-y-auto p-2"
            style={{
              backgroundColor: 'rgba(8,8,8,0.94)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  scrollToId(s.id);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 text-left transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                  color: i === active ? s.color : 'var(--brand-concrete-light)',
                  backgroundColor: i === active ? 'rgba(255,255,255,0.05)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span className="h-px w-4 shrink-0" style={{ backgroundColor: s.color, opacity: i === active ? 1 : 0.4 }} />
                {s.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div
        className="flex flex-col items-center"
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
        transition={{ duration: 0.25 }}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close the section list' : 'Show the section list'}
          className="w-11 h-7 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(8,8,8,0.9)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderBottom: 'none',
            color: 'var(--brand-concrete-light)',
            cursor: 'pointer',
          }}
        >
          <ChevronUp size={14} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </button>

        <button
          type="button"
          onClick={advance}
          aria-label={label}
          title={label}
          className="w-11 h-11 flex items-center justify-center transition-colors"
          style={{
            backgroundColor: 'rgba(8,8,8,0.9)',
            border: '1px solid var(--brand-cyan)',
            color: 'var(--brand-cyan)',
            cursor: 'pointer',
          }}
        >
          {atEnd ? <ArrowUp size={18} /> : <ArrowDown size={18} className="tc-bob" />}
        </button>
      </motion.div>
    </div>
  );
}

/**
 * The hero's own arrow. Same jump, different place: it sits in the first
 * viewport where the fixed one is still hidden, so the very first scroll is
 * also one click away.
 */
export function HeroScrollCue({ targetId, label = 'SCROLL' }: { targetId: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={() => scrollToId(targetId)}
      aria-label={`Scroll to ${label.toLowerCase()}`}
      className="absolute bottom-16 right-8 flex flex-col items-center gap-2 group"
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      <span className="w-px h-12 block" style={{ backgroundColor: 'var(--brand-concrete-light)' }} />
      <span
        className="text-xs tracking-widest"
        style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--brand-concrete-light)',
          writingMode: 'vertical-rl',
        }}
      >
        {label}
      </span>
      <ArrowDown size={16} className="tc-bob" style={{ color: 'var(--brand-cyan)' }} />
    </button>
  );
}
