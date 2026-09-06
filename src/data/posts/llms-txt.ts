import type { Post } from './types';

export const post: Post = {
  slug: 'llms-txt-what-it-is-and-whether-you-need-one',
  title: 'llms.txt: What It Is, What It Is Not, and Whether You Need One',
  metaTitle: 'llms.txt Explained: What It Does and Whether Your Site Needs One',
  metaDescription:
    'A plain account of the llms.txt convention: what the file contains, how it differs from robots.txt and a sitemap, what evidence there is that anything reads it, and how to write one that is useful regardless.',
  excerpt:
    'A proposed convention with modest adoption and a real second use. Worth an hour, not a project.',
  published: '2026-08-07',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Search'],
  keywords: [
    'llms.txt',
    'what is llms.txt',
    'llms.txt vs robots.txt',
    'llms.txt example',
    'AI crawler file',
    'llms.txt SEO',
  ],
  image: 'llms-txt',
  imageAlt: 'A plain text file listing a site’s pages with one-line summaries.',
  standfirst:
    'llms.txt is a proposed convention: a markdown file at your root that summarises what a site contains and links to its most useful pages, written for a model rather than a crawler. It is not a permissions file, it is not a sitemap, and no major system has committed to reading it. Write one anyway, for a reason that has nothing to do with whether it is read.',
  body: [
    {
      t: 'p',
      text: 'The proposal is simple enough to describe in a sentence. Put a file at /llms.txt containing a short description of what the site is, followed by a curated list of its most useful pages with one line each explaining what is in them. Markdown, human-readable, no schema.',
    },
    {
      t: 'p',
      text: 'The intent is that a model asked about your organisation could read one short document instead of crawling and inferring from a hundred pages of navigation, cookie banners and footer links.',
    },
    { t: 'h2', text: 'What it is not' },
    {
      t: 'table',
      caption: 'Three files that get confused with each other',
      head: ['File', 'Audience', 'Purpose', 'Enforceable'],
      rows: [
        ['robots.txt', 'Crawlers', 'What may and may not be fetched', 'By convention only, and widely honoured'],
        ['sitemap.xml', 'Search indexes', 'Every URL, with dates and priorities', 'Not a permission, an inventory'],
        ['llms.txt', 'Language models', 'What the site is and which pages matter', 'No commitment from anybody'],
      ],
    },
    {
      t: 'p',
      text: 'The distinction that matters most: llms.txt grants nothing and forbids nothing. If you want to control training or crawling, that conversation belongs in robots.txt directives and in whatever opt-out mechanisms the relevant operators publish. Putting a licence statement in llms.txt is theatre.',
    },
    { t: 'h2', text: 'Does anything read it?' },
    {
      t: 'p',
      text: 'The honest answer as of writing is: not demonstrably, at least not by the systems that matter most. Adoption on the publishing side has grown steadily; commitments on the consuming side have not followed. Anyone telling you it is a ranking factor is inventing that.',
    },
    {
      t: 'p',
      text: 'That is an argument against building a project around it. It is not an argument against writing one, because the file has a second use that does not depend on any model reading it.',
    },
    { t: 'h2', text: 'The second use, which is the real one' },
    {
      t: 'p',
      text: 'Writing an llms.txt forces you to answer, in one page, what your site is for and which twenty pages actually matter. Almost every site fails that exercise the first time. You discover that four of the twenty do not exist, that two of them say the same thing, and that the sentence describing the company is different from the one in the footer, which is different again from the one in the meta description.',
    },
    {
      t: 'p',
      text: 'Fixing those is worth the hour regardless of whether a model ever fetches the file, because those inconsistencies are also what any system infers from when it composes an answer about you.',
    },
    {
      t: 'note',
      title: 'Generate it, do not maintain it',
      text: 'A hand-written llms.txt is stale in a month. Generate it from the same data that produces your sitemap and your navigation, so a new page appears in all three or in none.',
    },
    { t: 'h2', text: 'What to put in one' },
    {
      t: 'ol',
      items: [
        'One H1 with the organisation’s name and a blockquote of one sentence saying what it does. Use the same sentence everywhere else on the site.',
        'A short paragraph of context: where you are, what you make, who for. Facts a model can attach to an entity.',
        'Sections by page type, not by navigation label. Services, case studies, reference, definitions, writing.',
        'One line per page: the title as a link, then what is in it. Not marketing copy — a description.',
        'Numbers where you have them. Counts, dates, published figures. This is the material that gets quoted.',
        'A contact route and the canonical URLs for the organisation’s profiles.',
      ],
    },
    {
      t: 'p',
      text: 'Keep it under a few thousand words. The point is that it is cheaper to read than the site; a file that is not cheaper to read than the site has no reason to exist.',
    },
    { t: 'h2', text: 'What to do instead, if you only do one thing' },
    {
      t: 'p',
      text: 'If the choice is between an llms.txt and getting your structured data right, choose the structured data. Organisation markup with consistent naming, Article nodes with real authors and dates, DefinedTerm on your definitions, and breadcrumbs that match the URLs are all read by systems that have committed to reading them.',
    },
    {
      t: 'p',
      text: 'llms.txt is a reasonable bet with a low stake. Schema is not a bet.',
    },
    {
      t: 'cta',
      href: '/glossary/entity-graph',
      label: 'Entity graph, defined',
      text: 'Why consistent naming across a site does more for machine comprehension than any single file can.',
    },
  ],
  faqs: [
    {
      q: 'What is llms.txt?',
      a: 'A proposed convention: a markdown file at a site’s root containing a short description of what the site is and a curated list of its most useful pages with one line each. It is written to be read by a language model rather than by a crawler.',
    },
    {
      q: 'What is the difference between llms.txt and robots.txt?',
      a: 'robots.txt states what may and may not be fetched and is widely honoured by convention. llms.txt states what a site contains and which pages matter, grants and forbids nothing, and has no commitment from any major operator to be read.',
    },
    {
      q: 'Do AI systems actually read llms.txt?',
      a: 'Not demonstrably, at least not the systems that matter most. Publisher adoption has grown; consumer commitments have not followed. Anyone describing it as a ranking factor is inventing that.',
    },
    {
      q: 'Is llms.txt worth writing anyway?',
      a: 'Yes, for about an hour of work. The exercise forces you to state in one page what the site is for and which twenty pages matter, and almost every site discovers inconsistencies doing it — different descriptions of the company in three places, pages that duplicate each other, pages that do not exist.',
    },
    {
      q: 'Should llms.txt be written by hand?',
      a: 'No. Generate it from the same data that produces the sitemap and the navigation, so a new page appears in all three or in none. A hand-written one is stale within a month.',
    },
    {
      q: 'Is llms.txt or schema markup more important?',
      a: 'Schema, by a wide margin. Organisation markup with consistent naming, Article nodes with real authors and dates, and DefinedTerm on definitions are read by systems that have committed to reading them. llms.txt is a low-stake bet; schema is not a bet.',
    },
  ],
  terms: ['entity-graph', 'answer-engine-optimisation', 'provenance', 'topical-authority'],
  related: [
    'schema-markup-that-changes-what-ai-quotes',
    'answer-engine-optimisation-for-brands',
    'what-to-publish-when-nobody-clicks',
  ],
};
