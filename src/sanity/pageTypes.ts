// The Studio side of the content registry.
//
// Nothing here is written by hand. Every document, tab and field is generated
// from `src/content/registry.ts`, which is also what the pages read, so a box
// in the Studio and the sentence it changes cannot drift apart. Adding an
// editable field is a one-line change in the registry; it appears here and is
// typed on the page without either file being touched.
//
// Each document is a singleton: a fixed `_id` per page, so there is exactly one
// "Home" and no way to end up with three of them competing.

import { defineType, defineField, defineArrayMember } from 'sanity';
import { copyRegistry, docTypeFor, docIdFor } from '@/content/registry';
import { fieldNameFor } from '@/content/copy';
import type { FieldDef, Pair } from '@/content/types';

/** A label/value row, used by the meta strips. */
const pairType = defineType({
  name: 'copyPair',
  title: 'Row',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'value', title: 'Value', type: 'string' }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'value' },
  },
});

/**
 * The Studio shows the live sentence as the starting value rather than an empty
 * box. An editor should be changing the copy in front of them, not guessing at
 * what they are replacing.
 */
function initialFor(def: FieldDef): unknown {
  if (def.type !== 'pairs') return def.fallback;
  return (def.fallback as readonly Pair[]).map((row, i) => ({
    _key: `row${i}`,
    label: row.label,
    value: row.value,
  }));
}

function buildField(sectionKey: string, fieldKey: string, def: FieldDef) {
  const name = fieldNameFor(sectionKey, fieldKey);
  const common = {
    name,
    title: def.title,
    group: sectionKey,
    description: def.description,
    initialValue: initialFor(def) as never,
  };

  if (def.type === 'pairs') {
    return defineField({
      ...common,
      type: 'array',
      of: [defineArrayMember({ type: 'copyPair' })],
    });
  }
  if (def.type === 'text') {
    return defineField({ ...common, type: 'text', rows: def.rows ?? 4 });
  }
  return defineField({ ...common, type: 'string' });
}

export const pageCopyTypes = Object.entries(copyRegistry).map(([pageId, page]) => {
  const sections = Object.entries(page.sections);
  return defineType({
    name: docTypeFor(pageId),
    title: page.title,
    type: 'document',
    // One tab per section, so a long page does not become one long scroll.
    groups: sections.map(([key, section], i) => ({
      name: key,
      title: section.title,
      ...(i === 0 ? { default: true } : {}),
    })),
    fields: sections.flatMap(([sectionKey, section]) =>
      Object.entries(section.fields as Record<string, FieldDef>).map(([fieldKey, def]) =>
        buildField(sectionKey, fieldKey, def)
      )
    ),
    preview: {
      prepare: () => ({ title: page.title, subtitle: page.path }),
    },
  });
});

/** What the Studio's sidebar needs to list these in a sensible order. */
export const pageCopyDocs = Object.entries(copyRegistry)
  .map(([pageId, page]) => ({
    id: docIdFor(pageId),
    schemaType: docTypeFor(pageId),
    title: page.title,
    path: page.path,
    order: page.order ?? 999,
  }))
  .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

export const copyTypes = [pairType, ...pageCopyTypes];
