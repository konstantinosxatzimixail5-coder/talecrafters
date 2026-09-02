// Initial-value templates for the menus.
//
// The seed script can write these nine documents in one go, but that needs a
// write token, and a write token is a thing you have to create, paste
// somewhere and remember to revoke. The menus are small enough not to be worth
// that: instead the Studio's "create" button offers one template per menu
// heading, each already filled in with the text that is live on the site right
// now. Open it, change the note, publish.
//
// Nothing here changes what the site renders. Until these documents exist the
// site reads `src/lib/nav.ts`, exactly as before.

import { primaryNav, navGroups } from '@/lib/nav';

interface Template {
  id: string;
  title: string;
  schemaType: string;
  value: Record<string, unknown>;
}

/** Array members need a `_key`, and a template's value is no exception. */
const items = (leaves: { label: string; href: string; note?: string }[] | undefined) =>
  (leaves ?? []).map((l, i) => ({
    _key: `n${i}`,
    _type: 'navLeaf',
    label: l.label,
    href: l.href,
    note: l.note,
  }));

/** A template id has to be unique across the Studio and stable across reloads. */
const templateId = (menu: string, label: string) =>
  `navMenu-${menu}-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

export const navTemplates: Template[] = [
  ...primaryNav.map((entry, i) => ({
    id: templateId('primary', entry.label),
    title: `${entry.label} — top bar`,
    schemaType: 'navMenu',
    value: {
      menu: 'primary',
      label: entry.label,
      color: entry.color,
      ...(entry.href ? { href: entry.href } : {}),
      ...(entry.items ? { items: items(entry.items) } : {}),
      order: i + 1,
    },
  })),
  ...navGroups.map((group, i) => ({
    id: templateId('overlay', group.title),
    title: `${group.title} — overlay and footer`,
    schemaType: 'navMenu',
    value: {
      menu: 'overlay',
      label: group.title,
      color: group.color,
      items: items(group.items),
      order: i + 1,
    },
  })),
];

/** The ids, in the order the create menu should list them. */
export const navTemplateIds = navTemplates.map((t) => t.id);
