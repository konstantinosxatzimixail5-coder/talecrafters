"use client";

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

/**
 * Copying a prompt by hand from a dark page with a long line length is
 * miserable, and a resource nobody can use is not a resource.
 */
export function CopyButton({ text, color = 'var(--brand-cyan)' }: { text: string; color?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access is refused in some embedded contexts. The prompt is
      // still selectable, so failing quietly beats an alert.
    }
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? 'Prompt copied' : 'Copy prompt'}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] tracking-[0.18em] transition-colors flex-shrink-0"
      style={{
        fontFamily: 'var(--font-mono)',
        border: `1px solid ${copied ? color : 'rgba(255,255,255,0.16)'}`,
        color: copied ? color : 'var(--brand-concrete-light)',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'COPIED' : 'COPY'}
    </button>
  );
}
