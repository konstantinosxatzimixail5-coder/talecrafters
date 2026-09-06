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
import { BYLINE } from '@/lib/site';

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
    defineField({ name: 'author', title: 'Author', type: 'string', group: 'main', initialValue: BYLINE, description: 'The byline. Matching a name on /authors turns it into a linked entity; anything else renders as plain text.' }),
    defineField({ name: 'section', title: 'Section', type: 'string', group: 'main' }),
    { ...strings('tags', 'Tags'), group: 'main' } as any,
    defineField({ name: 'image', title: 'Hero picture', type: 'shot', group: 'main' }),
    defineField({ name: 'body', title: 'Body', type: 'array', group: 'body', of: postBody }),
    { ...arrayOf('faqs', 'Questions', 'qa', 'Rendered under the article and emitted as FAQ structured data.'), group: 'extras' } as any,
    { ...arrayOf('sources', 'Sources', 'namedLink', 'Shown at the foot of the post and emitted as citations.'), group: 'extras' } as any,
    { ...strings('terms', 'Glossary terms', 'Slugs of the terms this post is about.'), group: 'extras' } as any,
    { ...strings('related', 'Related posts', 'Slugs of other posts worth reading next.'), group: 'extras' } as any,
    { ...strings('resources', 'Supply Drop resources', 'Slugs of the free resources this post links to.'), group: 'extras' } as any,
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
    { ...arrayOf('videos', 'Films', 'projectVideo', 'Played on the case page, and emitted as structured data.'), group: 'pictures' } as any,
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
    arrayOf('videos', 'Films', 'projectVideo', 'Played on the concept projects page, and emitted as structured data.'),
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
  title: 'Supply Drop resource',
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


/* ----------------------------------------------------------------- film -- */

export const film = defineType({
  name: 'film',
  title: 'Film',
  type: 'document',
  groups: [
    { name: 'main', title: 'Film', default: true },
    { name: 'sheet', title: 'Process sheet' },
    { name: 'design', title: 'Design & cast' },
    { name: 'stack', title: 'Stack & look' },
    { name: 'route', title: 'Route' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'main', validation: (R) => R.required() }),
    { ...slug('title'), group: 'main' } as any,
    defineField({ name: 'runtime', title: 'Runtime', type: 'string', group: 'main' }),
    defineField({ name: 'strapline', title: 'Strapline', type: 'text', rows: 2, group: 'main' }),
    defineField({ name: 'standfirst', title: 'Standfirst', type: 'text', rows: 3, group: 'main', description: 'The card line on the front page.' }),
    defineField({ name: 'logline', title: 'Logline', type: 'text', rows: 4, group: 'main' }),
    defineField({ name: 'poster', title: 'Key art', type: 'shot', group: 'main' }),
    defineField({ name: 'hero', title: 'Hero frame', type: 'shot', group: 'main' }),
    defineField({ name: 'strip', title: 'Contact strip', type: 'shot', group: 'main' }),
    defineField({ name: 'closing', title: 'Closing frame', type: 'shot', group: 'main' }),
    defineField({ name: 'video', title: 'The film', type: 'projectVideo', group: 'main', description: 'Played under the hero when the short is watchable.' }),
    { ...order, group: 'main' } as any,
    { ...arrayOf('spec', 'Specification', 'keyValue'), group: 'sheet' } as any,
    { ...arrayOf('delivery', 'Delivery', 'keyValue'), group: 'sheet' } as any,
    { ...arrayOf('spine', 'Spine', 'keyValue'), group: 'sheet' } as any,
    defineField({ name: 'spineNote', title: 'Spine note', type: 'text', rows: 3, group: 'sheet' }),
    { ...arrayOf('beats', 'Generation blocks', 'beat'), group: 'sheet' } as any,
    defineField({ name: 'castIntro', title: 'Cast intro', type: 'text', rows: 3, group: 'design' }),
    defineField({ name: 'castNote', title: 'Cast note', type: 'text', rows: 3, group: 'design' }),
    { ...arrayOf('cast', 'Cast and sets', 'designSheet'), group: 'design' } as any,
    { ...arrayOf('pipeline', 'Pipeline', 'filmStep'), group: 'stack' } as any,
    defineField({ name: 'pipelineNote', title: 'Pipeline note', type: 'text', rows: 3, group: 'stack' }),
    { ...arrayOf('tools', 'Tools', 'namedRole'), group: 'stack' } as any,
    { ...arrayOf('skills', 'Skills', 'namedRole'), group: 'stack' } as any,
    defineField({ name: 'stackNote', title: 'Stack note', type: 'text', rows: 3, group: 'stack' }),
    { ...arrayOf('look', 'Look', 'lookGroup'), group: 'stack' } as any,
    defineField({ name: 'lookNote', title: 'Look note', type: 'text', rows: 3, group: 'stack' }),
    { ...arrayOf('locks', 'Locks', 'lock'), group: 'stack' } as any,
    defineField({ name: 'routeShot', title: 'Route picture', type: 'shot', group: 'route' }),
    defineField({ name: 'routeCaption', title: 'Route caption', type: 'text', rows: 2, group: 'route' }),
    { ...strings('routeWhy', 'Why'), group: 'route' } as any,
    defineField({ name: 'routePositionReference', title: 'Position reference', type: 'text', rows: 3, group: 'route' }),
    { ...arrayOf('routeWaypoints', 'Waypoints', 'waypoint'), group: 'route' } as any,
    { ...strings('routeLocks', 'Route locks'), group: 'route' } as any,
    defineField({ name: 'routeResult', title: 'Route result', type: 'text', rows: 3, group: 'route' }),
    defineField({ name: 'docPath', title: 'Document path', type: 'string', group: 'sheet' }),
    defineField({ name: 'docTitle', title: 'Document title', type: 'string', group: 'sheet' }),
    defineField({ name: 'docSummary', title: 'Document summary', type: 'text', rows: 3, group: 'sheet' }),
  ],
  orderings: [{ title: 'Running order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'runtime', media: 'poster.image' } },
});

/* ------------------------------------------------------------- pipeline -- */

export const pipeline = defineType({
  name: 'pipeline',
  title: 'Pipeline',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() }),
    slug('name'),
    defineField({ name: 'num', title: 'Number', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string', description: 'The line under the name, e.g. "Cast once, run forty".' }),
    defineField({ name: 'mechanism', title: 'Mechanism', type: 'string', description: 'The one thing that makes it work, e.g. "The trained face".' }),
    defineField({ name: 'accent', title: 'Accent colour', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 4 }),
    defineField({ name: 'loop', title: 'Loop', type: 'text', rows: 3, description: 'How long a full run takes and what the next one costs.' }),
    defineField({ name: 'useWhen', title: 'Use when', type: 'text', rows: 3 }),
    arrayOf('stages', 'Stages', 'stage'),
    arrayOf('gates', 'Control gates', 'pipelineGate'),
    order,
  ],
  orderings: [{ title: 'Running order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'title' } },
});


/* ------------------------------------------------ arsenal (the services) -- */

export const arsenalCategory = defineType({
  name: 'arsenalCategory',
  title: 'Capability group',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    slug('title'),
    defineField({ name: 'descriptor', title: 'Descriptor', type: 'string', description: 'The boring, searchable version. Sits directly under the title.' }),
    defineField({
      name: 'arm', title: 'Arm', type: 'string',
      options: { list: ['create', 'systems', 'originals'] },
      description: 'Which of the three arms this group belongs to.',
    }),
    defineField({ name: 'color', title: 'Accent colour', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 5 }),
    arrayOf('services', 'Services', 'service'),
    order,
  ],
  orderings: [{ title: 'Running order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'descriptor' } },
});

/* ------------------------------------------------------------- solution -- */

export const solution = defineType({
  name: 'solution',
  title: 'Solution page',
  type: 'document',
  groups: [
    { name: 'main', title: 'Page', default: true },
    { name: 'body', title: 'Body' },
    { name: 'links', title: 'What proves it' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'plainName', title: 'Name', type: 'string', group: 'main', validation: (R) => R.required(), description: 'The plain name, used in the eyebrow, the breadcrumb and the structured data.' }),
    { ...slug('plainName'), group: 'main' } as any,
    defineField({ name: 'title', title: 'Headline', type: 'string', group: 'main' }),
    defineField({ name: 'accentWord', title: 'Headline, accented line', type: 'string', group: 'main' }),
    defineField({ name: 'color', title: 'Accent colour', type: 'string', group: 'main' }),
    defineField({ name: 'lede', title: 'Lede', type: 'text', rows: 5, group: 'main' }),
    { ...arrayOf('meta', 'Meta strip', 'copyPair'), group: 'main' } as any,
    defineField({ name: 'market', title: 'Market', type: 'string', group: 'main', description: 'An ISO country code when the page targets one market, e.g. GR. It narrows the Service node to that country.' }),
    { ...order, group: 'main' } as any,
    defineField({
      name: 'body', title: 'Body', type: 'array', group: 'body',
      of: [defineArrayMember({ type: 'text', rows: 6 } as any)],
      description: 'One entry per paragraph. Two to four of them.',
    }),
    { ...arrayOf('deliverables', 'Deliverables', 'deliverable'), group: 'body' } as any,
    { ...arrayOf('faqs', 'Questions', 'qa'), group: 'body' } as any,
    defineField({ name: 'ctaTitle', title: 'Call to action, title', type: 'string', group: 'body' }),
    defineField({ name: 'ctaBody', title: 'Call to action, body', type: 'text', rows: 3, group: 'body' }),
    { ...strings('pipelines', 'Pipelines', 'Slugs of the pipelines that carry this work.'), group: 'links' } as any,
    { ...strings('cases', 'Case studies', 'Slugs of the case studies that prove it.'), group: 'links' } as any,
    { ...strings('terms', 'Glossary terms', 'Slugs worth defining alongside it.'), group: 'links' } as any,
    defineField({ name: 'metaTitle', title: 'Meta title', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, group: 'seo' }),
    { ...strings('keywords', 'Keywords'), group: 'seo' } as any,
  ],
  preview: { select: { title: 'plainName', subtitle: 'metaTitle' } },
});

/* ----------------------------------------------------- reference sheets -- */

export const cameraMove = defineType({
  name: 'cameraMove',
  title: 'Camera movement',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() }),
    slug('name'),
    defineField({ name: 'num', title: 'Number', type: 'string' }),
    defineField({ name: 'family', title: 'Family', type: 'string', description: 'One of the seven families, e.g. push-pull, reveal, axis, orbit, altitude.' }),
    defineField({ name: 'camera', title: 'Direction', type: 'text', rows: 3, description: 'The move in camera-department language.' }),
    defineField({ name: 'prompt', title: 'Prompt', type: 'text', rows: 4, description: 'A prompt that produces it. Copy, change the subject, run.' }),
    defineField({ name: 'useFor', title: 'Use for', type: 'text', rows: 3 }),
    order,
  ],
  orderings: [{ title: 'Sheet order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'family' } },
});

export const animationStyle = defineType({
  name: 'animationStyle',
  title: 'Animation style',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() }),
    slug('name'),
    defineField({ name: 'num', title: 'Number', type: 'string' }),
    defineField({ name: 'aka', title: 'Also known as', type: 'string' }),
    defineField({ name: 'color', title: 'Accent colour', type: 'string' }),
    defineField({ name: 'what', title: 'What it is', type: 'text', rows: 4, description: 'In production terms, not mood words.' }),
    strings('scaffold', 'Scaffold', 'The order the prompt should be written in.'),
    strings('works', 'Words that work', 'Words that reliably move the model toward the style.'),
    defineField({ name: 'breaks', title: 'What breaks', type: 'text', rows: 4, description: 'The failure this style invites, and the fix.' }),
    defineField({ name: 'example', title: 'Example prompt', type: 'text', rows: 5 }),
    order,
  ],
  orderings: [{ title: 'Sheet order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'aka' } },
});

/* ------------------------------------------------------ downloadable tool -- */

export const tool = defineType({
  name: 'tool',
  title: 'Downloadable tool',
  type: 'document',
  fields: [
    defineField({
      name: 'slug', title: 'Resource', type: 'slug',
      validation: (R) => R.required(),
      description: 'Must match the Supply Drop resource this document belongs to. The same definition renders the page and the branded PDF.',
    }),
    defineField({
      name: 'intro', title: 'Intro', type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 4 } as any)],
      description: 'One entry per paragraph.',
    }),
    defineField({
      name: 'howToUse', title: 'How to use it', type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 3 } as any)],
    }),
    arrayOf('sections', 'Sections', 'toolSection'),
    arrayOf('bands', 'Scoring bands', 'band'),
    defineField({ name: 'licence', title: 'Licence', type: 'text', rows: 3 }),
    order,
  ],
  preview: { select: { subtitle: 'slug.current' }, prepare: (v: any) => ({ title: v.subtitle ?? 'Tool', subtitle: 'Downloadable tool' }) },
});


/* ----------------------------------------------------------------- menu -- */

export const navMenu = defineType({
  name: 'navMenu',
  title: 'Menu',
  type: 'document',
  description: 'The bar across the top and the overlay behind the burger.',
  fields: [
    defineField({
      name: 'menu', title: 'Which menu', type: 'string',
      options: { list: [
        { title: 'Top bar (the drop-downs)', value: 'primary' },
        { title: 'Overlay and footer', value: 'overlay' },
      ] },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'label', title: 'Heading', type: 'string', description: 'DIVISIONS, SUPPLY DROP, INTEL, or the group title in the overlay.' }),
    defineField({ name: 'color', title: 'Accent colour', type: 'string', description: 'A CSS variable, e.g. var(--brand-gold).' }),
    defineField({
      name: 'href', title: 'Direct link', type: 'string',
      description: 'Set only for a bar item that goes straight somewhere (BASE, WORK, ARSENAL) rather than opening a panel.',
    }),
    arrayOf('items', 'Items', 'navLeaf', 'Each one is a label, a link and the note that appears under it when the menu opens.'),
    order,
  ],
  orderings: [{ title: 'Menu order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'label', menu: 'menu', items: 'items' },
    prepare: (v: any) => ({
      title: v.title,
      subtitle: `${v.menu === 'primary' ? 'Top bar' : 'Overlay'} · ${(v.items ?? []).length} items`,
    }),
  },
});

export const collectionTypes = [
  post, caseStudy, film, pipeline, arsenalCategory, solution, glossaryTerm,
  conceptBrand, capture, faqGroup, resource, writingSample, tool,
  cameraMove, animationStyle, navMenu,
];
