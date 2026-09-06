import type { Post } from './types';

export const post: Post = {
  slug: 'how-to-get-quoted-by-an-answer-engine',
  title: 'How to Write a Paragraph an Answer Engine Will Quote',
  metaTitle: 'How to Write a Paragraph an AI Answer Engine Will Quote',
  metaDescription:
    'A paragraph-level technique for AI citation: the shape of a quotable answer block, the six sentence patterns that make a passage unliftable, and how to test a page by pretending to be the model.',
  excerpt:
    'Most pages fail citation at the sentence level, not the strategy level. Here is what the sentences have to do.',
  published: '2026-08-14',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Search', 'Craft'],
  keywords: [
    'how to get cited by AI',
    'AI citation writing',
    'quotable content AI search',
    'writing for answer engines',
    'direct answer block',
    'AEO writing technique',
  ],
  image: 'getting-quoted',
  imageAlt: 'A paragraph with each sentence marked liftable or not liftable.',
  standfirst:
    'A quotable paragraph answers its own heading in the first sentence, survives being removed from the page, and contains at least one thing that could be wrong. Passages that depend on what came before them are not quoted, however good the page is.',
  body: [
    {
      t: 'p',
      text: 'The strategy layer of answer engine optimisation is well covered and mostly correct. The part nobody writes about is the sentence, which is where the failures actually happen. A page can have perfect structure, current dates, valid schema and no quotable paragraph in it.',
    },
    { t: 'h2', text: 'The shape of an answer block' },
    {
      t: 'p',
      text: 'Under every heading that is a question, the first paragraph should be forty to sixty words and should do four things in order: state the answer, name the mechanism, give the condition or the number, and stop.',
    },
    {
      t: 'quote',
      text: 'Temporal coherence degrades as a clip runs on because later frames are anchored mostly to earlier generated frames rather than to the reference, so small errors compound. Usable clip length ends at the onset of extremity drift, which is typically well before the model stops producing frames.',
    },
    {
      t: 'p',
      text: 'That passage can be lifted into an answer with no edits and no surrounding context. It names the subject, gives the mechanism, and ends on a usable condition. Nothing in it points at anything outside itself.',
    },
    { t: 'h2', text: 'The six patterns that make a passage unliftable' },
    {
      t: 'table',
      caption: 'Sentence-level failures, and what to write instead',
      head: ['Pattern', 'Example', 'Fix'],
      rows: [
        ['Backward reference', '"This is why the technique works."', 'Name the thing. "Cutting on motion works because…"'],
        ['Forward promise', '"There are three reasons, which we will cover below."', 'Give the three reasons here.'],
        ['Unbound pronoun', '"It fails at around four seconds."', '"Temporal coherence fails at around four seconds."'],
        ['Hedged quantity', '"This can sometimes be quite expensive."', '"Attempts per usable shot run three to fifteen times."'],
        ['Buried subject', '"What we have found, over many campaigns, is that…"', 'Delete the preamble. Start at the finding.'],
        ['Conclusion-last', 'Argument for a paragraph, then the point.', 'Point first, argument after. Every time.'],
      ],
    },
    {
      t: 'p',
      text: 'Five of those six are ordinary good writing and would improve the page for humans as well. That is the reassuring part of this discipline: almost nothing it asks for is a compromise.',
    },
    { t: 'h2', text: 'Include something that could be wrong' },
    {
      t: 'p',
      text: 'A claim that cannot be false is not information. "Consistency matters in generative production" is unfalsifiable and therefore useless to a system trying to answer a question with something specific. "Acceptance rate on shots with legible packaging type runs three to four times lower than on environment plates" could be wrong, which is exactly why it is worth quoting.',
    },
    {
      t: 'p',
      text: 'This has an obvious obligation attached. If you publish falsifiable claims you have to be right, and where you cannot be certain you have to say so in the sentence rather than by hedging the whole paragraph into mush. "In our logs, on our shot types" is a condition, not a hedge.',
    },
    {
      t: 'note',
      title: 'The test',
      text: 'Take any paragraph out of your page, paste it alone into a blank document, and read it. If you cannot tell what it is about, no model can either, and it will never be the passage that gets used.',
    },
    { t: 'h2', text: 'Headings are retrieval keys' },
    {
      t: 'p',
      text: 'Write them as the question, not as the topic. "Cost" is a topic. "What does generative video production cost?" is a query somebody typed. The heading is what gets matched; the paragraph under it is what gets used. Mismatching them — a question heading with a paragraph that answers a different question — is the most common structural fault on otherwise good pages.',
    },
    {
      t: 'p',
      text: 'Keep the heading and its answer adjacent. An image, a pull quote or a call-out between the two weakens the association, and there is no reason to put one there.',
    },
    { t: 'h2', text: 'The FAQ block is not decoration' },
    {
      t: 'p',
      text: 'A question-and-answer block at the foot of a page is the highest-density quotable material you can publish, provided the answers are complete sentences that stand alone. Answers that say "see above" or "as discussed" are worthless. Answers that repeat the body verbatim are wasteful but harmless.',
    },
    {
      t: 'p',
      text: 'The right length is two to four sentences: enough to be a whole answer, short enough to be used entirely. One-sentence answers get quoted and say too little; six-sentence answers get truncated in the middle.',
    },
    { t: 'h2', text: 'How to check a page before publishing' },
    {
      t: 'ol',
      items: [
        'Read only the headings. Do they read as a list of questions somebody would type?',
        'Read only the first sentence under each heading. Does that alone answer the page?',
        'Find every pronoun in the first sentence of every section and check it has a referent inside that sentence.',
        'Count the falsifiable claims. Fewer than three on a long page means the page says nothing specific.',
        'Check every number has a condition attached and a date if it could change.',
        'Paste three random paragraphs into a blank document and see whether they survive alone.',
      ],
    },
    {
      t: 'cta',
      href: '/glossary/answer-engine-optimisation',
      label: 'Answer engine optimisation, defined',
      text: 'The definition, and how it differs from generative engine optimisation, which is not the same thing.',
    },
  ],
  faqs: [
    {
      q: 'What makes a paragraph quotable by an AI answer engine?',
      a: 'It answers its own heading in the first sentence, survives being removed from the page, contains a specific claim that could be wrong, and refers to nothing outside itself. Passages that begin with "this", "it" or "as we saw" cannot be lifted regardless of how good the page is.',
    },
    {
      q: 'How long should an answer block be?',
      a: 'Forty to sixty words under a question heading: state the answer, name the mechanism, give the condition or the number, stop. For FAQ answers, two to four complete sentences — one sentence says too little and six gets truncated mid-answer.',
    },
    {
      q: 'Why do hedged sentences fail in AI search?',
      a: 'Because a claim that cannot be false carries no information, and a system composing an answer has no reason to prefer it to the thousand other pages saying the same thing. Conditions ("in our logs, on this shot type") are precision; hedges ("can sometimes be quite") are the absence of it.',
    },
    {
      q: 'Should headings be questions?',
      a: 'Where the section answers one, yes — the heading is the retrieval key and should match what somebody typed. Keep the heading and its answering paragraph adjacent, with no image or pull quote between them.',
    },
    {
      q: 'How do you test a page for citability?',
      a: 'Read only the headings and check they read as typed questions. Read only the first sentence of each section and check they answer the page. Then paste three random paragraphs into a blank document — anything you cannot identify out of context will never be the passage that gets used.',
    },
  ],
  terms: ['answer-engine-optimisation', 'entity-graph', 'topical-authority', 'rag', 'context-engineering'],
  related: [
    'answer-engine-optimisation-for-brands',
    'what-to-publish-when-nobody-clicks',
    'schema-markup-that-changes-what-ai-quotes',
  ],
};
