"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Wordmark } from './brand/Wordmark';
import { navGroups, primaryNav } from '@/lib/nav';
import type { NavEntry } from '@/lib/nav';

/** How long the panel waits after the pointer leaves before it closes. Without
 *  it, crossing the gap between the button and the panel shuts the menu. */
const CLOSE_DELAY = 140;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const barRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // The bar starts transparent over the hero and takes a background once there
  // is content behind it. Without this it either fights the hero or disappears
  // against a paler section further down.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A route change with a menu still open leaves it covering the new page.
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape closes a panel, and a click anywhere outside the bar does too, which
  // is the behaviour touch users expect when a tap opened it.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    const onDown = (e: PointerEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [openMenu]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const hoverOpen = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  };

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const entryActive = (entry: NavEntry) =>
    entry.href ? isActive(entry.href) : (entry.items ?? []).some((i) => isActive(i.href));

  return (
    <>
      <header
        ref={barRef}
        className="fixed top-0 left-0 right-0 z-[80] transition-all duration-300"
        style={{
          backgroundColor: solid || open || openMenu ? 'rgba(14,14,18,0.9)' : 'transparent',
          backdropFilter: solid || open || openMenu ? 'blur(14px)' : 'none',
          borderBottom: solid && !open ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-6 xl:px-14 h-[64px] md:h-[76px]">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group relative z-10 flex-shrink-0"
            style={{ textDecoration: 'none' }}
            aria-label="TaleCrafters home"
          >
            <motion.img
              src="/brand/mark.png"
              alt=""
              aria-hidden
              width={1024}
              height={812}
              className="h-8 sm:h-9 md:h-10 w-auto flex-shrink-0"
              whileHover={{ rotate: -5, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            />
            <Wordmark size="clamp(15px, 4.4vw, 21px)" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {primaryNav.map((entry) =>
              entry.items ? (
                <div
                  key={entry.label}
                  className="relative"
                  onPointerEnter={(e) => {
                    if (e.pointerType !== 'touch') hoverOpen(entry.label);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType !== 'touch') hoverClose();
                  }}
                >
                  <button
                    onClick={() => setOpenMenu(openMenu === entry.label ? null : entry.label)}
                    aria-expanded={openMenu === entry.label}
                    aria-haspopup="true"
                    className="flex items-center gap-1 px-2 xl:px-3 py-2 text-[11px] tracking-[0.14em] xl:tracking-[0.18em] whitespace-nowrap transition-colors"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color:
                        openMenu === entry.label || entryActive(entry)
                          ? entry.color
                          : 'var(--brand-concrete-light)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {entry.label}
                    <ChevronDown
                      size={12}
                      style={{
                        transform: openMenu === entry.label ? 'rotate(180deg)' : 'none',
                        transition: 'transform 200ms',
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {openMenu === entry.label && (
                      <motion.div
                        className="absolute left-0 top-full pt-2 w-[330px]"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.16 }}
                      >
                        <ul
                          className="py-1"
                          style={{
                            backgroundColor: 'rgba(12,12,16,0.98)',
                            border: `1px solid ${entry.color}44`,
                            backdropFilter: 'blur(14px)',
                          }}
                        >
                          {entry.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block px-4 py-3 transition-colors"
                                style={{ textDecoration: 'none' }}
                                onClick={() => setOpenMenu(null)}
                              >
                                <span
                                  className="block text-base tracking-tight"
                                  style={{
                                    fontFamily: 'var(--font-display)',
                                    color: isActive(item.href) ? entry.color : 'var(--brand-white)',
                                  }}
                                >
                                  {item.label}
                                </span>
                                {item.note && (
                                  <span
                                    className="block text-xs mt-0.5"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                                  >
                                    {item.note}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={entry.label}
                  href={entry.href!}
                  className="px-2 xl:px-3 py-2 text-[11px] tracking-[0.14em] xl:tracking-[0.18em] whitespace-nowrap transition-colors"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: entryActive(entry) ? entry.color : 'var(--brand-concrete-light)',
                    textDecoration: 'none',
                  }}
                  onPointerEnter={() => setOpenMenu(null)}
                >
                  {entry.label}
                </Link>
              )
            )}

            <Link
              href="/contact"
              className="ml-2 xl:ml-3 px-3 xl:px-4 py-2 text-[11px] tracking-[0.14em] xl:tracking-[0.18em] whitespace-nowrap transition-all"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--brand-white)',
                border: '1px solid var(--brand-magenta)',
                textDecoration: 'none',
              }}
              onPointerEnter={() => setOpenMenu(null)}
            >
              LET&apos;S CONSPIRE
            </Link>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="w-10 h-10 flex items-center justify-center relative z-10 flex-shrink-0 transition-colors"
            style={{
              border: '1px solid var(--brand-concrete)',
              backgroundColor: 'rgba(10,10,10,0.5)',
              color: 'var(--brand-white)',
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] overflow-y-auto"
            style={{ backgroundColor: 'var(--brand-black)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-[28%] w-px h-full" style={{ backgroundColor: 'var(--brand-magenta)', opacity: 0.06 }} />
              <div className="absolute top-0 left-[64%] w-px h-full" style={{ backgroundColor: 'var(--brand-cyan)', opacity: 0.06 }} />
            </div>

            <div className="relative px-5 md:px-10 lg:px-14 pt-24 md:pt-28 pb-16">
              <Link
                href="/"
                className="inline-block mb-8 text-sm tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
              >
                ← BASE
              </Link>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                {navGroups.map((group, gi) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: gi * 0.06 }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-px w-6" style={{ backgroundColor: group.color }} />
                      <span
                        className="text-[10px] tracking-[0.3em]"
                        style={{ fontFamily: 'var(--font-mono)', color: group.color }}
                      >
                        {group.title}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="block py-2 group" style={{ textDecoration: 'none' }}>
                            <span
                              className="block text-xl sm:text-2xl md:text-[1.6rem] leading-tight tracking-tighter transition-colors"
                              style={{
                                fontFamily: 'var(--font-display)',
                                color: isActive(item.href) ? group.color : 'var(--brand-white)',
                              }}
                            >
                              {item.label}
                            </span>
                            {item.note && (
                              <span
                                className="block text-xs mt-0.5"
                                style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                              >
                                {item.note}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-14 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
                style={{ borderTop: '1px solid var(--brand-concrete)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <div>
                  <div
                    className="text-[10px] tracking-[0.3em] mb-3"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    LET&apos;S CONSPIRE
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-3xl md:text-5xl tracking-tighter"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-magenta)', textDecoration: 'none' }}
                  >
                    Brief us <ArrowUpRight size={34} />
                  </Link>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:hello@talecrafters.studio"
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
                  >
                    hello@talecrafters.studio
                  </a>
                  <span className="text-sm" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                    STORYTELLING <span style={{ color: 'var(--brand-magenta)' }}>&times;</span> TECH{' '}
                    <span style={{ color: 'var(--brand-cyan)' }}>&times;</span> CHAOS
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
