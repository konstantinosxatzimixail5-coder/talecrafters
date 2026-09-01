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

export const objectTypes = [
  shot, artefact, stackStep, gate, qa, link,
  blockP, blockH2, blockH3, blockUl, blockOl, blockQuote, blockTable, blockNote, blockCta,
];
