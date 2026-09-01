// The small shapes the collection schemas share.
//
// Field names match the TypeScript interfaces in src/data/ exactly. That is
// deliberate: it makes the seed script close to a straight copy, and the read
// path close to the identity function, so there is no third place where a
// field can be renamed and quietly lost in translation.

import { defineType, defineField, defineArrayMember } from 'sanity';

/**
 * A picture.
 *
 * `src` is a key into src/image-manifest.json, which is where every committed
 * derivative lives. `image` is an upload, and wins when it is set. That is what
 * makes a photo editable without giving up the built ladder: leave the upload
 * empty and the page renders the AVIF and WebP set that ships with the repo;
 * fill it in and the page renders what was uploaded.
 */
export const shot = defineType({
  name: 'shot',
  title: 'Picture',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Upload',
      type: 'image',
      options: { hotspot: true },
      description: 'Replaces the built-in picture. Leave empty to keep the one that ships with the site.',
    }),
    defineField({
      name: 'src',
      title: 'Built-in picture',
      type: 'string',
      description: 'The key of a picture already in the repository, e.g. mariposa/film-01. Used when no upload is set.',
    }),
    defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'label', title: 'Caption', type: 'string' }),
    defineField({
      name: 'focus',
      title: 'Focal point',
      type: 'string',
      description: 'CSS object-position, e.g. "50% 20%". Only needed when a crop cuts the wrong part off.',
    }),
  ],
  preview: { select: { title: 'label', subtitle: 'alt', media: 'image' } },
});

export const pair = (name: string, title: string, a: string, b: string) =>
  defineType({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: a, title: a[0].toUpperCase() + a.slice(1), type: 'string' }),
      defineField({ name: b, title: b[0].toUpperCase() + b.slice(1), type: 'string' }),
    ],
    preview: { select: { title: a, subtitle: b } },
  });

export const artefact = pair('artefact', 'Artefact', 'label', 'detail');
export const stackStep = pair('stackStep', 'Stack step', 'stage', 'tool');
export const gate = pair('gate', 'Control gate', 'name', 'test');
export const qa = defineType({
  name: 'qa',
  title: 'Question',
  type: 'object',
  fields: [
    defineField({ name: 'q', title: 'Question', type: 'string' }),
    defineField({ name: 'a', title: 'Answer', type: 'text', rows: 4 }),
  ],
  preview: { select: { title: 'q', subtitle: 'a' } },
});

export const link = defineType({
  name: 'namedLink',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'href', title: 'URL', type: 'string' }),
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
});

/**
 * The body of a blog post.
 *
 * Not portable text, and not Markdown. The site renders a closed union of nine
 * block shapes as ordinary React: nothing in a post can inject markup, and the
 * shapes a post is allowed to take stay an explicit decision. Mirroring that
 * union here keeps the Studio and the renderer in agreement, and keeps a
 * seeded post byte-identical to the one in the repository.
 */
const textBlock = (t: string, title: string, rows = 4) =>
  defineType({
    name: `block_${t}`,
    title,
    type: 'object',
    fields: [defineField({ name: 'text', title: 'Text', type: 'text', rows })],
    preview: { select: { title: 'text' }, prepare: (s: any) => ({ title: s.title, subtitle: title }) },
  });

const listBlock = (t: string, title: string) =>
  defineType({
    name: `block_${t}`,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'items', title: 'Items', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
    ],
    preview: {
      select: { items: 'items' },
      prepare: (s: any) => ({ title: (s.items ?? []).join(' · ').slice(0, 80), subtitle: title }),
    },
  });

export const blockP = textBlock('p', 'Paragraph');
export const blockH2 = textBlock('h2', 'Heading', 2);
export const blockH3 = textBlock('h3', 'Subheading', 2);
export const blockQuote = textBlock('quote', 'Pull quote', 3);
export const blockUl = listBlock('ul', 'Bulleted list');
export const blockOl = listBlock('ol', 'Numbered list');

export const blockTable = defineType({
  name: 'block_table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({
      name: 'head',
      title: 'Header row',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      description: 'One entry per row. Separate the cells with a vertical bar: a | b | c',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
  preview: { select: { title: 'caption' }, prepare: (s: any) => ({ title: s.title || 'Table', subtitle: 'Table' }) },
});

export const blockNote = defineType({
  name: 'block_note',
  title: 'Boxed note',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'text', title: 'Text', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'text' } },
});

export const blockCta = defineType({
  name: 'block_cta',
  title: 'Link box',
  type: 'object',
  fields: [
    defineField({ name: 'href', title: 'Link', type: 'string' }),
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'text', title: 'Text', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
});

export const postBody = [
  'block_p', 'block_h2', 'block_h3', 'block_ul', 'block_ol',
  'block_quote', 'block_table', 'block_note', 'block_cta',
].map((type) => defineArrayMember({ type }));


/* ------------------------------------------------ films and pipelines -- */

export const keyValue = pair('keyValue', 'Row', 'key', 'value');
export const namedRole = defineType({
  name: 'namedRole',
  title: 'Entry',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
  ],
  preview: { select: { title: 'name', subtitle: 'role' } },
});

/** A generation block from a film's process sheet. */
export const beat = defineType({
  name: 'beat',
  title: 'Block',
  type: 'object',
  fields: [
    defineField({ name: 'letter', title: 'Letter', type: 'string' }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'time', title: 'Starts at', type: 'string', description: 'Where the block starts, for the beat map.' }),
    defineField({ name: 'span', title: 'Range', type: 'string', description: 'The full range as the sheet prints it.' }),
    defineField({ name: 'note', title: 'Note', type: 'text', rows: 2 }),
    defineField({ name: 'prompt', title: 'Prompt', type: 'text', rows: 8, description: 'The prompt as it was written for the video model.' }),
    defineField({ name: 'shot', title: 'Frame', type: 'shot' }),
  ],
  preview: { select: { title: 'name', subtitle: 'span', media: 'shot.image' } },
});

/** A character or set reference from a film's design sheet. */
export const designSheet = defineType({
  name: 'designSheet',
  title: 'Design sheet',
  type: 'object',
  fields: [
    defineField({ name: 'tag', title: 'Tag', type: 'string' }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'note', title: 'Note', type: 'text', rows: 3 }),
    defineField({ name: 'shot', title: 'Frame', type: 'shot' }),
  ],
  preview: { select: { title: 'name', subtitle: 'tag', media: 'shot.image' } },
});

export const filmStep = defineType({
  name: 'filmStep',
  title: 'Pipeline step',
  type: 'object',
  fields: [
    defineField({ name: 'num', title: 'Number', type: 'string' }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'tool', title: 'Tool', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
  ],
  preview: { select: { title: 'name', subtitle: 'tool' } },
});

export const lookGroup = defineType({
  name: 'lookGroup',
  title: 'Look',
  type: 'object',
  fields: [
    defineField({ name: 'key', title: 'Name', type: 'string' }),
    defineField({
      name: 'lines', title: 'Lines', type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
  preview: { select: { title: 'key', lines: 'lines' }, prepare: (v: any) => ({ title: v.key, subtitle: (v.lines ?? []).join(' · ') }) },
});

export const lock = defineType({
  name: 'lock',
  title: 'Lock',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'symptom', title: 'Symptom', type: 'text', rows: 2 }),
    defineField({ name: 'lock', title: 'The lock', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'name', subtitle: 'symptom' } },
});

export const waypoint = defineType({
  name: 'waypoint',
  title: 'Waypoint',
  type: 'object',
  fields: [
    defineField({ name: 'num', title: 'Number', type: 'string' }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'cue', title: 'Cue', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'name', subtitle: 'cue' } },
});

/** A pipeline stage: what it fixes, what runs it, how long it takes. */
export const stage = defineType({
  name: 'stage',
  title: 'Stage',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'tool', title: 'Tool', type: 'string' }),
    defineField({ name: 'fixes', title: 'What it fixes', type: 'text', rows: 4 }),
    defineField({ name: 'time', title: 'Time', type: 'string' }),
  ],
  preview: { select: { title: 'name', subtitle: 'tool' } },
});

/** A pipeline gate carries the failure path as well as the test. */
export const pipelineGate = defineType({
  name: 'pipelineGate',
  title: 'Control gate',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'test', title: 'The test', type: 'text', rows: 3 }),
    defineField({ name: 'fail', title: 'On failure', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'name', subtitle: 'test' } },
});

/** Every shared shape, in one list. Registered once in schema.ts. */
export const objectTypes: any[] = [
  shot, artefact, stackStep, gate, qa, link,
  blockP, blockH2, blockH3, blockUl, blockOl, blockQuote, blockTable, blockNote, blockCta,
  keyValue, namedRole, beat, designSheet, filmStep,
  lookGroup, lock, waypoint, stage, pipelineGate,
];
