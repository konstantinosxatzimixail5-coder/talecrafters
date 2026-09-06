import type { Post } from './types';

export const post: Post = {
  slug: 'answer-engine-optimisation-for-brands',
  title: 'Answer Engine Optimisation: What Actually Gets a Brand Quoted',
  metaTitle: 'Answer Engine Optimisation (AEO): What Gets a Brand Quoted in 2026',
  metaDescription:
    'How answer engines choose what to quote, the three structural properties that separate cited pages from invisible ones, and why most AEO advice is ordinary SEO with a new name on it.',
  excerpt:
    'Search used to reward the page that ranked. Answer engines reward the source that can be quoted, and those are different documents.',
  published: '2026-08-18',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Strategy', 'Search'],
  keywords: [
    'answer engine optimisation',
    'AEO',
    'how to get cited by AI',
    'AI search optimisation',
    'generative engine optimisation',
    'get quoted by ChatGPT',
    'AI Overviews optimisation',
  ],
  image: 'answer-engine-optimisation',
  imageAlt: 'A page of text with three paragraphs highlighted as the only parts a model would quote.',
  standfirst:
    'Answer engines quote passages, not pages. The three properties that decide whether yours is one of them are a direct answer stated in the first fifty words of a section, a claim specific enough to be checked, and an entity a model can attach the claim to. Everything else is ordinary search hygiene wearing a new acronym.',
  body: [
    {
      t: 'p',
      text: 'Roughly two thirds of searches now end without a click. That statistic gets quoted as an apocalypse and it is not one; it is a change in what a page is for. A page used to be a destination. Increasingly it is a source, and sources are selected on different criteria from destinations.',
    },
    { t: 'h2', text: 'What a model is actually doing' },
    {
      t: 'p',
      text: 'When an answer engine composes a response it is looking for passages it can lift with minimal risk: statements that answer the question directly, that do not depend on the surrounding paragraphs to make sense, and that come from somewhere it can attribute. A passage that satisfies all three is cheap to use. A passage that satisfies two is a liability.',
    },
    {
      t: 'p',
      text: 'That reframes the writing problem. You are not optimising a page for a ranking, you are producing quotable units and making them easy to lift.',
    },
    { t: 'h2', text: 'The three properties' },
    {
      t: 'table',
      caption: 'What separates a cited passage from an ignored one',
      head: ['Property', 'What it means in practice', 'The failure it prevents'],
      rows: [
        [
          'Self-contained answer',
          'Each section opens with a forty-to-sixty word statement that answers its heading without needing the paragraph before it.',
          'A model cannot lift a sentence that starts "This is why…" because it does not know what "this" is.',
        ],
        [
          'Checkable specificity',
          'Numbers, dates, named mechanisms, stated conditions. "Often" is not quotable; "in eight to fifteen attempts per usable shot" is.',
          'Generic claims are available from a thousand sources, so there is no reason to pick yours.',
        ],
        [
          'Attachable entity',
          'The claim is attached to a named thing — a defined term, an organisation, a method — that exists elsewhere in a knowledge graph.',
          'A floating claim has nowhere to be filed, so it is not retrieved for the next related question.',
        ],
      ],
    },
    { t: 'h2', text: 'The structural moves that follow' },
    {
      t: 'ol',
      items: [
        'Write headings as questions people actually type, then answer them immediately underneath. The heading is the retrieval key and the first sentence is the payload.',
        'Put the answer before the argument. Journalism has known this for a century and calls it the inverted pyramid; the difference now is that something automated is reading only the top.',
        'Mark up what the page is. FAQPage for question blocks, DefinedTerm for definitions, Article with a real author and dates. Schema does not make a claim true, but it removes ambiguity about what the claim is.',
        'Define your terms on their own pages and link to them consistently. A glossary is not a content-marketing tactic, it is an entity graph you control.',
        'Date everything and keep it current. Freshness is a stronger signal in retrieval-based systems than it ever was in classical ranking, because a model quoting a stale number gets caught.',
        'Cite your own sources with links. Pages that show their working are safer to quote and are treated as such.',
      ],
    },
    {
      t: 'note',
      title: 'The uncomfortable part',
      text: 'Optimising for citation means writing pages that answer the question without requiring a visit. That is a real trade: you are exchanging sessions for mentions. The counter-argument is that the alternative is neither, because the answer gets composed from somebody else’s page regardless.',
    },
    { t: 'h2', text: 'Engines differ more than people assume' },
    {
      t: 'p',
      text: 'Citation overlap between the major answer engines is low, which means measuring one of them measures very little. Broadly, and with the caveat that all of this moves: engines built on a conventional index inherit that index’s rankings, so classical SEO covers most of the ground. Engines that retrieve live tend to reward freshness, specificity and clean citation. Engines that lean on brand familiarity reward being mentioned in many places rather than ranking in one.',
    },
    {
      t: 'p',
      text: 'The practical consequence is that off-site mentions matter more than they did. Being quoted in somebody else’s article is an input to whether you get quoted directly, which makes the old-fashioned work of saying something worth repeating a retrieval strategy.',
    },
    { t: 'h2', text: 'What does not work' },
    {
      t: 'ul',
      items: [
        'Stuffing a page with question headings that are then answered vaguely. The heading gets you retrieved and the vagueness gets you dropped.',
        'Publishing fifteen pages that restate one claim at different keyword densities. Coverage means covering different things.',
        'Schema that describes a page that does not exist. Marking up an FAQ that is not on the page is the fastest way to lose the trust the markup was meant to establish.',
        'Chasing every engine separately. The three properties above serve all of them; the platform-specific tactics change monthly.',
      ],
    },
    {
      t: 'cta',
      href: '/glossary/answer-engine-optimisation',
      label: 'The glossary definition',
      text: 'The short version, with the related terms and the questions people ask about it.',
    },
    { t: 'h2', text: 'How to know if it is working' },
    {
      t: 'p',
      text: 'Not from traffic, which will decline for informational queries regardless of what you do. The measurable signals are: whether your brand is named in answers to your category’s questions, whether your definitions are the ones being reproduced, and whether the queries that do produce clicks have moved further down the funnel.',
    },
    {
      t: 'p',
      text: 'That last one is the honest win. Fewer visitors, arriving later, already knowing what you do. That is a better business outcome than the traffic chart suggests, and it is the one the traffic chart cannot show you.',
    },
  ],
  faqs: [
    {
      q: 'What is answer engine optimisation?',
      a: 'Structuring content so that AI answer engines can extract, trust and cite it. Where classical search rewards the page that ranks, answer engines reward the passage that can be quoted, which requires self-contained answers, checkable specificity and claims attached to named entities.',
    },
    {
      q: 'How do you get cited by ChatGPT or Perplexity?',
      a: 'Open every section with a forty-to-sixty word answer to the heading that makes sense without the paragraph before it. Make claims specific enough to be checked — numbers, dates, named mechanisms. Attach them to defined terms and named entities. Date everything and cite your own sources.',
    },
    {
      q: 'Is AEO different from SEO?',
      a: 'Partly. Crawlability, structure and authority are shared. What differs is the unit: SEO optimises a page for a ranking, AEO produces quotable passages. A page can rank well and be useless to quote, and increasingly that is the worse position.',
    },
    {
      q: 'Does schema markup help with AI search?',
      a: 'It removes ambiguity about what a claim is and who made it, which makes a passage safer to use. It does not make a claim true or important. Marking up content that is not actually on the page destroys the trust the markup was meant to build.',
    },
    {
      q: 'How do you measure answer engine optimisation?',
      a: 'Not by traffic, which declines for informational queries regardless. Measure whether your brand is named in answers to your category’s questions, whether your definitions are the ones reproduced, and whether the queries that still convert have moved further down the funnel.',
    },
    {
      q: 'Why do different AI engines cite different sources?',
      a: 'Because they retrieve differently. Engines built on a conventional index inherit its rankings; engines that retrieve live reward freshness and clean citation; engines that lean on brand familiarity reward being mentioned in many places. Overlap between them is low, so monitoring one measures very little.',
    },
  ],
  terms: ['answer-engine-optimisation', 'generative-engine-optimisation', 'entity-graph', 'topical-authority', 'rag'],
  related: [
    'how-to-get-quoted-by-an-answer-engine',
    'what-to-publish-when-nobody-clicks',
    'building-a-content-repurposing-engine',
  ],
};
