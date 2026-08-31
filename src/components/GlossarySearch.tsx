"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import type { Term } from '@/data/glossary';

/**
 * A hundred-plus terms is past the point where an A–Z index alone is enough:
 * people arrive knowing the word, not the letter. Filtering happens on the
 * client over an already-rendered list, so the page still works without JS —
 * the full index sits below in the letter sections.
 */
export function GlossarySearch({ terms }: { terms: Term[] }) {
  const [q, setQ] = useState('');

  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [];
    return terms
      .filter(
        (t) =>
          t.term.toLowerCase().includes(needle) ||
          t.short.toLowerCase().includes(needle) ||
          (t.aka ?? []).some((a) => a.toLowerCase().includes(needle))
      )
      .slice(0, 8);
  }, [q, terms]);

  return (
    <div className="relative max-w-xl">
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ border: '1px solid rgba(255,255,255,0.14)', backgroundColor: 'rgba(255,255,255,0.03)' }}
      >
        <Search size={16} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${terms.length} terms: try “drift”, “LoRA”, “disclosure”`}
          aria-label="Search the glossary"
          className="w-full bg-transparent outline-none py-1.5"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--brand-white)' }}
        />
      </div>

      {hits.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full z-20 mt-1 max-h-80 overflow-y-auto"
          style={{ border: '1px solid rgba(255,255,255,0.14)', backgroundColor: 'rgba(12,12,16,0.98)' }}
        >
          {hits.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/glossary/${t.slug}`}
                className="block px-4 py-3"
                style={{ textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="text-base" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}>
                  {t.term}
                </div>
                <div className="text-xs mt-0.5 line-clamp-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  {t.short}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {q.trim().length >= 2 && hits.length === 0 && (
        <div
          className="absolute left-0 right-0 top-full z-20 mt-1 px-4 py-3 text-sm"
          style={{
            border: '1px solid rgba(255,255,255,0.14)',
            backgroundColor: 'rgba(12,12,16,0.98)',
            fontFamily: 'var(--font-mono)',
            color: 'var(--brand-concrete-light)',
          }}
        >
          Nothing for “{q.trim()}”. Tell us what it should say and we will write it.
        </div>
      )}
    </div>
  );
}
