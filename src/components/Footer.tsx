"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { Wordmark } from './brand/Wordmark';
import { navGroups } from '@/lib/nav';
import { solutions } from '@/data/solutions';
import { site } from '@/lib/site';
import { Accented } from '@/components/kit';
import type { FooterCopy } from '@/content/copy';

const legal = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
];

// Only profiles that exist. Adding a link here means adding the same URL to
// `site.sameAs`, so the footer and the Organization node never disagree about
// who this company is.
const social = [
  { label: 'LI', title: 'LinkedIn', color: 'var(--brand-violet-text)', href: 'https://www.linkedin.com/company/talecrafterss/' },
];

export function Footer({ copy }: { copy: FooterCopy['main'] }) {
  return (
    <footer
      className="relative py-16 px-5 md:px-10 lg:px-14 overflow-hidden"
      style={{ backgroundColor: 'var(--brand-black)', color: 'var(--brand-white)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--brand-concrete), transparent)' }}
      />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5" style={{ textDecoration: 'none' }}>
              <img src="/brand/mark.png" alt="" aria-hidden width={1024} height={812} className="h-9 w-auto" />
              <Wordmark size={31} />
            </Link>
            <div
              className="text-xs tracking-[0.25em] mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
            >
              {copy.strapline}
            </div>
            {/* The literal classification, in the column under the strapline.
                "Storytellers drunk on synthetic media" is what a person
                remembers; this is what a search engine and an answer engine
                classify from. The footer is rendered by the root layout, so
                these words are on every page. The meta description and the
                Organization node read site.ts and do not depend on where this
                paragraph is printed. */}
            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
            >
              <Accented
                text={copy.description}
                accent={copy.descriptionAccent}
                color="var(--brand-white)"
                style={{ fontWeight: 500 }}
              />
            </p>
            <address
              className="not-italic text-xs leading-relaxed"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
            >
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, United Kingdom, {site.address.postcode}
            </address>
            <div className="pt-5 flex gap-5">
              <a
                href={`mailto:${site.email}`}
                className="text-xs tracking-wider transition-colors inline-flex items-center min-h-[24px] min-w-[24px]"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-concrete-light)')}
              >
                EMAIL
              </a>
              {social.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.title}
                  className="text-xs tracking-wider transition-colors inline-flex items-center justify-center min-h-[24px] min-w-[24px]"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = p.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-concrete-light)')}
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <div
                className="text-[10px] tracking-[0.28em] mb-4"
                style={{ fontFamily: 'var(--font-mono)', color: group.color }}
              >
                {group.title}
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors inline-flex items-center min-h-[24px]"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)', textDecoration: 'none' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <div
              className="text-[10px] tracking-[0.28em] mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-white)' }}
            >
              TALK
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Start a project', href: '/contact' },
                { label: 'Packages', href: '/packages' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors inline-flex items-center min-h-[24px]"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)', textDecoration: 'none' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The plain-language index. The Arsenal keeps our names for these
            things; this row uses the ones people search for. */}
        <div className="pb-10">
          <div
            className="text-[10px] tracking-[0.28em] mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
          >
            {copy.hiredForLabel}
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-sm transition-colors inline-flex items-center min-h-[24px]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)', textDecoration: 'none' }}
                >
                  {s.plainName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* The sign-off. It used to carry the three-part claim as well, which
            the classification paragraph now makes in the column above; saying
            it twice in one footer made both weaker. What is left is the half
            that paragraph cannot do, which is sound like us. */}
        <p
          className="max-w-2xl mb-10 text-base md:text-lg leading-snug"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-concrete-light)' }}
        >
          {copy.signoff}
        </p>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
            © {new Date().getFullYear()} TaleCrafters. {copy.rights}
          </div>
          <div className="flex gap-6">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors inline-flex items-center min-h-[24px]"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="text-[10px] tracking-widest"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete)', opacity: 0.25 }}
          >
            [REDACTED] × [CLASSIFIED] × [DATA EXPUNGED]
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
