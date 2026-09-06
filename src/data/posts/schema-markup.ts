import type { Post } from './types';

export const post: Post = {
  slug: 'schema-markup-that-changes-what-ai-quotes',
  title: 'The Six Schema Types That Change What Gets Quoted',
  metaTitle: 'Schema Markup for AI Search: The Six Types That Actually Matter',
  metaDescription:
    'Which structured data types affect how AI systems understand and cite a page, what each one removes ambiguity about, and the three mistakes that make markup actively harmful.',
  excerpt:
    'Schema does not make a claim true. It removes the question of what the claim is, and that is worth more than it sounds.',
  published: '2026-08-04',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Search'],
  keywords: [
    'schema markup for AI search',
    'structured data AEO',
    'FAQPage schema',
    'DefinedTerm schema',
    'Article schema author',
    'JSON-LD for AI',
  ],
  image: 'schema-markup',
  imageAlt: 'A page rendered twice, once as text and once as its structured-data graph.',
  standfirst:
    'Six schema types carry most of the value for machine comprehension: Organization, Article, FAQPage, DefinedTerm, HowTo and BreadcrumbList. Each removes a specific ambiguity about what a page contains and who is responsible for it, which is what makes a passage safe to quote.',
  body: [
    {
      t: 'p',
      text: 'Structured data has a reputation problem: years of being sold as a route to rich results made it sound like a formatting trick. Its actual function is duller and more durable. It states, unambiguously, what a page is and who made it, at a moment when a great deal of software is trying to work that out from prose.',
    },
    { t: 'h2', text: 'The six that matter' },
    {
      t: 'table',
      caption: 'What each type disambiguates',
      head: ['Type', 'Removes the question', 'Where it goes'],
      rows: [
        ['Organization', 'Who is this, and is it the same entity as the one mentioned elsewhere?', 'Once, sitewide, with a stable @id'],
        ['Article', 'When was this written, by whom, and has it been updated?', 'Every editorial page'],
        ['FAQPage', 'Which parts of this page are questions and answers?', 'Any page with a real Q&A block'],
        ['DefinedTerm', 'Is this a definition, and of what?', 'Glossary entries, in a DefinedTermSet'],
        ['HowTo', 'Is this a procedure, and what are the steps?', 'Genuine step-by-step pages only'],
        ['BreadcrumbList', 'Where does this sit in the site’s structure?', 'Every page below the root'],
      ],
    },
    {
      t: 'p',
      text: 'Two more are worth adding when they apply honestly: Product for anything sold, and Person for authors who exist as entities elsewhere. Beyond that the returns fall off quickly and the maintenance burden does not.',
    },
    { t: 'h2', text: 'The @id discipline' },
    {
      t: 'p',
      text: 'The single highest-value practice in structured data is giving your organisation one stable @id and referencing it from every other node rather than repeating the details. It converts a set of independent pages into a connected graph, which is what allows a system to conclude that the studio in the Article node and the publisher in the DefinedTermSet are the same organisation.',
    },
    {
      t: 'p',
      text: 'Repeating an organisation’s name and address inline on forty pages does not achieve this. It produces forty organisations that look similar.',
    },
    { t: 'h2', text: 'Author is not optional any more' },
    {
      t: 'p',
      text: 'An Article node with no author is a page nobody is responsible for. Systems that weight source credibility have no way to attach anything to it, and the trend in every published guideline is towards weighting responsibility more heavily rather than less.',
    },
    {
      t: 'p',
      text: 'A real name, a page for that person on your own site, and consistent use across everything they wrote. If work is genuinely collective, say so with an organisation as the author rather than inventing a byline, which is worse than either.',
    },
    { t: 'h2', text: 'The three mistakes that make markup harmful' },
    {
      t: 'ol',
      items: [
        'Marking up content that is not on the page. An FAQPage node describing questions no visitor can see is the fastest way to lose the credibility the markup was meant to establish, and it is detectable.',
        'Dates that lie. A modified date that updates on every deploy tells a system the page changed when it did not, and once that signal is noise it is worthless in both directions.',
        'HowTo on anything that is not a procedure. Steps that are actually a list of considerations misrepresent the page, and the misrepresentation is the thing being indexed.',
      ],
    },
    {
      t: 'note',
      title: 'The rule',
      text: 'Structured data describes the page. If the description and the page disagree, the page is right and the markup is a bug. Generate the markup from the same data that renders the page and this class of error cannot occur.',
    },
    { t: 'h2', text: 'Generate it, never write it' },
    {
      t: 'p',
      text: 'Hand-written JSON-LD in a template is a promise that somebody will remember to update it. They will not. The correct architecture is to render the schema from the same objects that render the content: the FAQ block on the page and the FAQPage node come from one array, the visible published date and the datePublished come from one field.',
    },
    {
      t: 'p',
      text: 'This is not a purity argument. It is the only way the markup stays true through two years of edits, and markup that is not true is worse than absent.',
    },
    { t: 'h2', text: 'What schema will not do' },
    {
      t: 'ul',
      items: [
        'It will not make a thin page rank or get quoted. It removes ambiguity about content that exists; it does not create content.',
        'It will not force a rich result. Eligibility is not entitlement, and it has not been for years.',
        'It will not substitute for a clear first paragraph. A model quoting your page quotes the prose, not the JSON.',
        'It will not fix inconsistent naming elsewhere. If your organisation is described three different ways across the site, the graph inherits the confusion.',
      ],
    },
    {
      t: 'cta',
      href: '/blog/how-to-get-quoted-by-an-answer-engine',
      label: 'Writing the paragraph itself',
      text: 'Schema tells a system what a passage is. This is how to write a passage worth lifting.',
    },
  ],
  faqs: [
    {
      q: 'Which schema types matter most for AI search?',
      a: 'Organization, Article, FAQPage, DefinedTerm, HowTo and BreadcrumbList. Each removes a specific ambiguity: who published this, when and by whom it was written, which parts are questions, whether something is a definition, whether it is a procedure, and where it sits in the site.',
    },
    {
      q: 'Does schema markup improve AI citations?',
      a: 'Indirectly. It does not make a claim true or important, but it removes the question of what the claim is and who is responsible for it, which makes a passage safer to quote. Thin content with perfect markup remains thin content.',
    },
    {
      q: 'What is the @id discipline in structured data?',
      a: 'Giving your organisation one stable identifier and referencing it from every other node rather than repeating the details inline. It turns independent pages into a connected graph; repeating an organisation’s details on forty pages produces forty similar-looking organisations instead.',
    },
    {
      q: 'Does an Article need an author in schema?',
      a: 'Yes. An Article node with no author is a page nobody is responsible for, and every published guideline trend weights responsibility more heavily over time. Use a real person with their own page, or the organisation — never an invented byline.',
    },
    {
      q: 'When does schema markup do harm?',
      a: 'When it describes content that is not on the page, when modified dates update on every deploy and therefore mean nothing, and when HowTo is applied to something that is not a procedure. In all three the markup misrepresents the page, and the misrepresentation is what gets indexed.',
    },
    {
      q: 'Should structured data be written by hand?',
      a: 'No. Render it from the same objects that render the content, so the visible FAQ and the FAQPage node come from one array and the visible date and datePublished come from one field. Hand-written markup is a promise somebody will remember to update it, and they will not.',
    },
  ],
  terms: ['entity-graph', 'answer-engine-optimisation', 'provenance', 'topical-authority'],
  related: [
    'how-to-get-quoted-by-an-answer-engine',
    'llms-txt-what-it-is-and-whether-you-need-one',
    'answer-engine-optimisation-for-brands',
  ],
};
