"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ImpMark } from './brand/ImpMark';
import { Wordmark } from './brand/Wordmark';
import { navGroups, primaryNav } from '@/lib/nav';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  // The bar starts transparent over the hero and takes on a background once
  // there is content behind it. Without this it either fights the hero or
  // disappears against a pale section further down.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A route change with the menu still open leaves the overlay covering the
  // page it just navigated to.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: solid || open ? 'rgba(14,14,18,0.86)' : 'transparent',
          backdropFilter: solid || open ? 'blur(14px)' : 'none',
          borderBottom: solid && !open ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="flex items-center justify-between gap-6 px-5 md:px-10 lg:px-14 h-[68px] md:h-[76px]">
          <Link
            href="/"
            className="flex items-center gap-2.5 group relative z-10"
            style={{ textDecoration: 'none' }}
            aria-label="TaleCrafters home"
          >
            <motion.span
              whileHover={{ rotate: -6, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="block"
            >
              <ImpMark size={38} />
            </motion.span>
            {/* Scales with the viewport so it never collides with the menu
              button at 320px. */}
            <Wordmark size="clamp(15px, 4.4vw, 21px)" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[11px] tracking-[0.18em] transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: isActive(item.href) ? 'var(--brand-cyan)' : 'var(--brand-concrete-light)',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 text-[11px] tracking-[0.18em] transition-all"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--brand-white)',
                border: '1px solid var(--brand-magenta)',
                textDecoration: 'none',
              }}
            >
              START SOMETHING
            </Link>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="w-10 h-10 flex items-center justify-center relative z-10 transition-colors"
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
            className="fixed inset-0 z-40 overflow-y-auto"
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

            <div className="relative px-5 md:px-10 lg:px-14 pt-28 pb-16">
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
                          <Link
                            href={item.href}
                            className="block py-2 group"
                            style={{ textDecoration: 'none' }}
                          >
                            <span
                              className="block text-2xl md:text-3xl tracking-tighter transition-colors"
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
                    START SOMETHING
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
