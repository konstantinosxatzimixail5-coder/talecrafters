// The menu. `groups` drives the overlay and the footer; `primary` drives the
// bar on desktop. Both read the same source so a new page cannot appear in one
// and go missing in the other.

export interface NavItem {
  label: string;
  href: string;
  note?: string;
}

export interface NavGroup {
  title: string;
  color: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: 'THE WORK',
    color: 'var(--brand-magenta)',
    items: [
      { label: 'Selected Damage', href: '/work', note: 'Case studies with the receipts' },
      { label: 'Concept Projects', href: '/concept-projects', note: 'Invented brands, real capability' },
      { label: 'Pipelines', href: '/pipelines', note: 'How the work actually gets made' },
      { label: 'Writing & Narrative', href: '/writing', note: 'Scripts, VSLs, original IP' },
    ],
  },
  {
    title: 'THE STUDIO',
    color: 'var(--brand-cyan)',
    items: [
      { label: 'Create', href: '/create', note: 'Films, campaigns, visual worlds' },
      { label: 'Systems', href: '/systems', note: 'Agents, automation, content engines' },
      { label: 'Originals', href: '/originals', note: 'Our own films, games and stories' },
      { label: 'Arsenal', href: '/arsenal', note: 'Every capability, listed plainly' },
      { label: 'Packages', href: '/packages', note: 'How to buy any of it' },
    ],
  },
  {
    title: 'THE ARMOURY',
    color: 'var(--brand-gold)',
    items: [
      { label: 'Free Resources', href: '/armoury', note: 'Take them. No email gate.' },
      { label: 'Glossary', href: '/glossary', note: '40 terms, defined without the fog' },
      { label: 'Blog', href: '/blog', note: 'Dispatches from the frontline' },
      { label: 'FAQ', href: '/faq', note: 'The questions everyone asks' },
    ],
  },
];

export const primaryNav: NavItem[] = [
  { label: 'WORK', href: '/work' },
  { label: 'ARSENAL', href: '/arsenal' },
  { label: 'SYSTEMS', href: '/systems' },
  { label: 'ARMOURY', href: '/armoury' },
  { label: 'GLOSSARY', href: '/glossary' },
];
