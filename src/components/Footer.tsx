"use client";

import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer
      className="relative py-16 px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--brand-black)',
        color: 'var(--brand-white)',
      }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--brand-concrete), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="TaleCrafters — Synthetic Media Studio Logo"
                className="w-12 h-12 object-cover rounded-sm"
                style={{ filter: 'brightness(1.35) saturate(0.75)' }}
              />
              <img
                src="/talecrafters-logo.svg"
                alt="TaleCrafters"
                className="h-9 w-auto"
                style={{ filter: 'drop-shadow(2px 2px 4px rgba(42,8,69,0.5))' }}
              />
            </div>
            <div
              className="text-xs tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
            >
              STORIES ON STEROIDS
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
            >
              The unholy offspring of a film studio and a technology lab.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <div
              className="text-[10px] tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
            >
              SERVICES
            </div>
            <ul className="space-y-2">
              {['Visual Warfare', 'Narrative Engineering', 'Synthetic Beings', 'Design Weaponry', 'Strategy'].map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-concrete-light)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div
              className="text-[10px] tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-magenta)' }}
            >
              COMPANY
            </div>
            <ul className="space-y-2">
              {['Studio', 'Philosophy', 'Packages', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-magenta)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-concrete-light)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div
              className="text-[10px] tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-gold)' }}
            >
              CONTACT
            </div>
            <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <div>
                <a
                  href="mailto:hello@talecrafters.studio"
                  className="transition-colors duration-200"
                  style={{ color: 'var(--brand-concrete-light)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-concrete-light)')}
                >
                  hello@talecrafters.studio
                </a>
              </div>
              <div
                className="text-xs leading-relaxed"
                style={{ color: 'var(--brand-concrete-light)' }}
              >
                71-75 Shelton Street, Covent Garden,<br />
                London, United Kingdom, WC2H 9JQ
              </div>
              <div className="pt-4 flex gap-4">
                {[
                  { label: 'X', color: 'var(--brand-cyan)', href: '#' },
                  { label: 'IG', color: 'var(--brand-magenta)', href: '#' },
                  { label: 'LI', color: 'var(--brand-violet)', href: 'https://www.linkedin.com/company/talecrafterss/' },
                ].map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target={platform.href.startsWith('http') ? '_blank' : undefined}
                    rel={platform.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-xs tracking-wider transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = platform.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-concrete-light)')}
                  >
                    {platform.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--brand-concrete)', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div
            className="text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
          >
            © 2026 TaleCrafters. All rights reserved. We own our chaos.
          </div>

          <div className="flex gap-6">
            {[
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Privacy Policy', href: '/privacy' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors duration-200"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-violet)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-concrete-light)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Easter egg */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="text-[10px] tracking-widest"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--brand-concrete)',
              opacity: 0.25,
            }}
          >
            [REDACTED] × [CLASSIFIED] × [DATA EXPUNGED]
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
