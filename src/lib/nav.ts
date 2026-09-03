// The menu. `primaryNav` drives the bar on desktop, `navGroups` drives the
// overlay and the footer. Both read this file, so a new page cannot appear in
// one and go missing from the other.

import { terms } from '@/data/glossary';

export interface NavLeaf {
  label: string;
  href: string;
  note?: string;
}

export interface NavEntry {
  label: string;
  color: string;
  /** A direct link. Mutually exclusive with `items`. */
  href?: string;
  /** A group that opens a panel. Mutually exclusive with `href`. */
  items?: NavLeaf[];
}

const CYAN = 'var(--brand-cyan)';
const MAGENTA = 'var(--brand-magenta)';
const VIOLET = 'var(--brand-violet-text)';
const GOLD = 'var(--brand-gold)';

export const primaryNav: NavEntry[] = [
  { label: 'BASE', href: '/', color: CYAN },
  { label: 'WORK', href: '/work', color: MAGENTA },
  { label: 'ARSENAL', href: '/arsenal', color: CYAN },
  {
    label: 'DIVISIONS',
    color: VIOLET,
    items: [
      { label: 'TaleCrafters / Create', href: '/create', note: 'Films, campaigns and visual worlds' },
      { label: 'TaleCrafters / Systems', href: '/systems', note: 'Agents, automation and content engines' },
      { label: 'TaleCrafters / Originals', href: '/originals', note: 'Our own films, games and stories' },
    ],
  },
  {
    label: 'ARMOURY',
    color: GOLD,
    items: [
      { label: 'Free Resources', href: '/armoury', note: '38 camera moves and 12 animation styles' },
      { label: 'AI Filmmaking Workflows', href: '/films', note: 'Three originals, published with their process' },
      { label: 'GenAI Workflows', href: '/pipelines', note: 'The production pipelines, published in full' },
    ],
  },
  {
    label: 'INTEL',
    color: MAGENTA,
    items: [
      { label: 'Blog', href: '/blog', note: 'Dispatches from the frontline' },
      { label: 'Glossary', href: '/glossary', note: `${terms.length} terms, no fog` },
    ],
  },
];

export interface NavGroup {
  title: string;
  color: string;
  items: NavLeaf[];
}

export const navGroups: NavGroup[] = [
  {
    title: 'THE WORK',
    color: MAGENTA,
    items: [
      { label: 'Selected Damage', href: '/work', note: 'Case studies with the receipts' },
      { label: 'Concept Projects', href: '/concept-projects', note: 'Invented brands, real capability' },
      { label: 'Photoreal Captures', href: '/captures', note: 'Eight frames, eight hard problems' },
      { label: 'Writing & Narrative', href: '/writing', note: 'Scripts, VSLs and original IP' },
    ],
  },
  {
    title: 'THE DIVISIONS',
    color: VIOLET,
    items: [
      { label: 'TaleCrafters / Create', href: '/create', note: 'Films, campaigns and visual worlds' },
      { label: 'TaleCrafters / Systems', href: '/systems', note: 'Agents, automation and content engines' },
      { label: 'TaleCrafters / Originals', href: '/originals', note: 'Our own films, games and stories' },
      { label: 'The Arsenal', href: '/arsenal', note: 'Every capability, listed plainly' },
      { label: 'Packages', href: '/packages', note: 'Four ways to buy any of it' },
    ],
  },
  {
    title: 'THE ARMOURY',
    color: GOLD,
    items: [
      { label: 'Free Resources', href: '/armoury', note: 'Take them. No email gate.' },
      { label: 'AI Filmmaking Workflows', href: '/films', note: 'Three originals, with the working behind each' },
      { label: 'GenAI Workflows', href: '/pipelines', note: 'How the work actually gets made' },
      { label: 'Blog', href: '/blog', note: 'Dispatches from the frontline' },
      { label: 'Glossary', href: '/glossary', note: `${terms.length} terms, no fog` },
      { label: 'FAQ', href: '/faq', note: 'The questions everyone asks' },
    ],
  },
];
