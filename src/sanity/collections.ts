// The editable collections: the body of the site, not just its headings.
//
// Every field name matches the TypeScript interface in src/data/, so a seeded
// document is the repo entry with a _type on it, and reading one back is close
// to the identity function. Where a page today reads an array from src/data/,
// it now reads the dataset first and that array second.
//
// The fallback rule for a list is deliberately coarser than the one for page
// copy. Copy merges per field, because an editor filling in one heading should
// not blank the eleven under it. A list does not merge: if the dataset holds
// any documents of a type, that is the list, in the order it gives. Anything
// else means an entry deleted in the Studio quietly comes back from the repo,
// which is not an editor experience, it is a haunting.

import { defineType, defineField, defineArrayMember } from 'sanity';
import { postBody } from './objects';

const slug = (source = 'title') =>
  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: { source, maxLength: 96 },
    validation: (R) => R.required(),
    description: 'The last part of the URL. Changing it breaks any link already pointing here.',
  });

const order = defineField({
  name: 'order',
  title: 'Order',
  type: 'number',
  description: 'Low numbers first. Ties fall back to the order the dataset returns.',
});

const strings = (name: string, title: string, description?: string) =>
  defineField({
    name, title, description,
    type: 'array',
    of: [defineArrayMember({ type: 'string' })],
    options: { layout: 'tags' },
  });

const arrayOf = (name: string, title: string, of: string, description?: string) =>
  defineField({
    name, title, description,
    type: 'array',
    of: [defineArrayMember({ type: of })],
  });

/* ------------------------------------------------------------------ post -- */

export const post = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  groups: [
    { name: 'main', title: 'Post', default: true },
    { name: 'body', title: 'Body' },
    { name: 'extras', title: 'Questions & sources' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'main', validation: (R) => R.required() }),
    { ...slug('title'), group: 'main' } as any,
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, group: 'main', description: 'One or two sentences for the index card.' }),
    defineField({ name: 'standfirst', title: 'Standfirst', type: 'text', rows: 4, group: 'main', description: 'The heavier opening paragraph. States the answer in the first fifty words.' }),
    defineField({ name: 'published', title: 'Published', type: 'date', group: 'main', options: { dateFormat: 'YYYY-MM-DD' } }),
    defineField({ name: 'modified', title: 'Last modified', type: 'date', group: 'main', options: { dateFormat: 'YYYY-MM-DD' } }),
    defineField({ name: 'author', title: 'Author', type: 'string', group: 'main', initialValue: 'TaleCrafters' }),
    defineField({ name: 'section', title: 'Section', type: 'string', group: 'main' }),
    { ...strings('tags', 'Tags'), group: 'main' } as any,
    defineField({ name: 'image', title: 'Hero picture', type: 'shot', group: 'main' }),
    defineField({ name: 'body', title: 'Body', type: 'array', group: 'body', of: postBody }),
    { ...arrayOf('faqs', 'Questions', 'qa', 'Rendered under the article and emitted as FAQ structured data.'), group: 'extras' } as any,
    { ...arrayOf('sources', 'Sources', 'namedLink', 'Shown at the foot of the post and emitted as citations.'), group: 'extras' } as any,
    { ...strings('terms', 'Glossary terms', 'Slugs of the terms this post is about.'), group: 'extras' } as any,
    { ...strings('related', 'Related posts', 'Slugs of other posts worth reading next.'), group: 'extras' } as any,
    { ...strings('resources', 'Armoury resources', 'Slugs of the free resources this post links to.'), group: 'extras' } as any,
    defineField({ name: 'legalNotice', title: 'Show the legal notice', type: 'boolean', group: 'extras', description: 'Set on anything touching law or regulation.' }),
    defineField({ name: 'metaTitle', title: 'Meta title', type: 'string', group: 'seo', description: 'Overrides the title in the browser tab and in search results.' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 2, group: 'seo' }),
    { ...strings('keywords', 'Keywords'), group: 'seo' } as any,
  ],
  orderings: [{ title: 'Newest first', name: 'newest', by: [{ field: 'published', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'section', media: 'image.image' } },
});

/* ------------------------------------------------------------ caseStudy -- */

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  groups: [
    { name: 'main', title: 'Client', default: true },
    { name: 'story', title: 'The story' },
    { name: 'method', title: 'Method & gates' },
    { name: 'pictures', title: 'Pictures' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'main', validation: (R) => R.required() }),
    { ...slug('title'), group: 'main' } as any,
    defineField({ name: 'client', title: 'Client', type: 'string', group: 'main' }),
    defineField({ name: 'kind', title: 'Kind', type: 'string', group: 'main', options: { list: ['Client work', 'Concept project'] } }),
    defineField({ name: 'discipline', title: 'Discipline', type: 'string', group: 'main' }),
    defineField({ name: 'year', title: 'Year', type: 'string', group: 'main' }),
    defineField({ name: 'place', title: 'Where', type: 'string', group: 'main' }),
    defineField({ name: 'featured', title: 'Show on the front page', type: 'boolean', group: 'main' }),
    defineField({ name: 'accent', title: 'Accent colour', type: 'string', group: 'main', description: 'A CSS variable, e.g. var(--brand-gold).' }),
    defineField({ name: 'genre', title: 'Genre', type: 'string', group: 'main', description: 'For structured data, e.g. "Brand film".' }),
    { ...order, group: 'main' } as any,
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3, group: 'story' }),
    defineField({ name: 'problem', title: 'The problem', type: 'text', rows: 6, group: 'story' }),
    defineField({ name: 'idea', title: 'The idea', type: 'text', rows: 8, group: 'story' }),
    { ...strings('made', 'What we made'), group: 'story' } as any,
    defineField({ name: 'result', title: 'Where it landed', type: 'text', rows: 4, group: 'story' }),
    defineField({ name: 'resultKind', title: 'Result kind', type: 'string', group: 'story', options: { list: ['Delivered', 'Intended'] } }),
    { ...arrayOf('artefacts', 'Artefacts', 'artefact'), group: 'story' } as any,
    { ...arrayOf('links', 'Links', 'namedLink'), group: 'story' } as any,
    defineField({ name: 'method', title: 'How it was made', type: 'text', rows: 8, group: 'method' }),
    { ...arrayOf('gates', 'Control gates', 'gate'), group: 'method' } as any,
    { ...arrayOf('stack', 'Stack, stage by stage', 'stackStep'), group: 'method' } as any,
    defineField({ name: 'hero', title: 'Hero picture', type: 'shot', group: 'pictures' }),
    { ...arrayOf('gallery', 'Gallery', 'shot'), group: 'pictures' } as any,
  ],
  orderings: [{ title: 'Running order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'client', media: 'hero.image' } },
});

/* --------------------------------------------------------- glossaryTerm -- */

export const glossaryTerm = defineType({
  name: 'glossaryTerm',
  title: 'Glossary term',
  type: 'document',
  fields: [
    defineField({ name: 'term', title: 'Term', type: 'string', validation: (R) => R.required() }),
    slug('term'),
    strings('aka', 'Also known as', 'Alternative spellings and acronyms. Used by the on-page search and by structured data.'),
    defineField({ name: 'short', title: 'Short definition', type: 'text', rows: 3, description: 'One sentence. This is the snippet and the meta description.' }),
    strings('tags', 'Topics'),
    defineField({
      name: 'body',
      title: 'Definition',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 5 } as any)],
      description: 'One entry per paragraph.',
    }),
    arrayOf('qa', 'Questions people type', 'qa'),
    strings('related', 'Related terms', 'Slugs of other terms.'),
  ],
  orderings: [{ title: 'A to Z', name: 'az', by: [{ field: 'term', direction: 'asc' }] }],
  preview: { select: { title: 'term', subtitle: 'short' } },
});

/* --------------------------------------------------------- conceptBrand -- */

export const conceptBrand = defineType({
  name: 'conceptBrand',
  title: 'Concept brand',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() }),
    slug('name'),
    defineField({ name: 'num', title: 'Number', type: 'string', description: 'Two digits, e.g. 05.' }),
    defineField({ name: 'product', title: 'Product', type: 'string' }),
    defineField({ name: 'proves', title: 'What it proves', type: 'text', rows: 2 }),
    defineField({ name: 'note', title: 'Note', type: 'text', rows: 6 }),
    defineField({ name: 'accent', title: 'Accent colour', type: 'string' }),
    arrayOf('pipelines', 'Runs on', 'namedLink'),
    arrayOf('shots', 'Frames', 'shot'),
    order,
  ],
  preview: { select: { title: 'name', subtitle: 'product', media: 'shots.0.image' } },
});

/* -------------------------------------------------------------- capture -- */

export const capture = defineType({
  name: 'capture',
  title: 'Photoreal capture',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'shot', title: 'Frame', type: 'shot', description: 'Upload to replace the built-in frame; leave the upload empty to keep it.' }),
    defineField({ name: 'proves', title: 'What it was built to break', type: 'text', rows: 3, description: 'The reason this frame is on the site.' }),
    defineField({ name: 'register', title: 'Register', type: 'string', description: 'The look it is imitating, e.g. documentary, studio.' }),
    order,
  ],
  preview: { select: { title: 'title', subtitle: 'proves', media: 'shot.image' } },
});

/* ---------------------------------------------------------- faq, extras -- */

export const faqGroup = defineType({
  name: 'faqGroup',
  title: 'FAQ section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Section title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'color', title: 'Accent colour', type: 'string', description: 'A CSS variable, e.g. var(--brand-cyan).' }),
    arrayOf('items', 'Questions', 'qa'),
    order,
  ],
  preview: { select: { title: 'title', items: 'items' }, prepare: (v: any) => ({ title: v.title, subtitle: `${(v.items ?? []).length} questions` }) },
});

export const resource = defineType({
  name: 'resource',
  title: 'Armoury resource',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    slug('title'),
    defineField({ name: 'kicker', title: 'Kicker', type: 'string', description: 'The line under the title on the card.' }),
    defineField({ name: 'count', title: 'Count', type: 'string', description: 'e.g. "38 moves".' }),
    defineField({ name: 'format', title: 'Format', type: 'string', description: 'What each entry contains.' }),
    defineField({ name: 'blurb', title: 'Blurb', type: 'text', rows: 5 }),
    defineField({ name: 'forWhom', title: 'Who it is for', type: 'text', rows: 2 }),
    defineField({ name: 'color', title: 'Accent colour', type: 'string' }),
    defineField({ name: 'pdf', title: 'PDF path', type: 'string', description: 'Set when the resource also exists as a branded download.' }),
    defineField({ name: 'metaTitle', title: 'Meta title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 2 }),
    strings('keywords', 'Keywords'),
    order,
  ],
  preview: { select: { title: 'title', subtitle: 'kicker' } },
});

export const writingSample = defineType({
  name: 'writingSample',
  title: 'Writing sample',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    slug('title'),
    defineField({ name: 'kind', title: 'Kind', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'detail', title: 'Detail', type: 'text', rows: 6 }),
    defineField({ name: 'form', title: 'Form', type: 'string' }),
    defineField({ name: 'language', title: 'Language', type: 'string' }),
    defineField({ name: 'color', title: 'Accent colour', type: 'string' }),
    order,
  ],
  preview: { select: { title: 'title', subtitle: 'kind' } },
});

export const collectionTypes = [
  post, caseStudy, glossaryTerm, conceptBrand, capture, faqGroup, resource, writingSample,
];
