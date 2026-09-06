import type { Post } from './types';

export const post: Post = {
  slug: 'what-to-publish-when-nobody-clicks',
  title: 'What to Publish When Nobody Clicks',
  metaTitle: 'Zero-Click Search: What to Publish When Nobody Visits',
  metaDescription:
    'Two thirds of searches end without a click. What that changes about which pages are worth writing, which metrics still mean anything, and the four page types that survive a zero-click funnel.',
  excerpt:
    'Traffic was always a proxy. The proxy broke; the thing it was measuring did not.',
  published: '2026-08-11',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Strategy', 'Search'],
  keywords: [
    'zero click search',
    'zero click SEO strategy',
    'declining organic traffic AI',
    'content strategy AI search',
    'brand visibility AI answers',
    'what to publish 2026',
  ],
  image: 'zero-click',
  imageAlt: 'A traffic graph declining beside a mentions graph rising.',
  standfirst:
    'When answers are composed rather than clicked, informational pages stop producing sessions and start producing mentions. The pages worth writing are the ones that either cannot be summarised away — original data, tools, positions — or that exist to be quoted on purpose.',
  body: [
    {
      t: 'p',
      text: 'Around two thirds of searches now end without anyone visiting a website. For a content programme built on informational traffic that is not a dip, it is a change in what the programme is for, and pretending otherwise produces a year of writing the same pages while the chart goes down.',
    },
    { t: 'h2', text: 'What actually changed' },
    {
      t: 'p',
      text: 'The commodity answer stopped being worth a visit. Anything that could be reduced to a paragraph is now reduced to a paragraph, upstream of your site, composed from several sources including possibly yours. What survives a summary is what cannot be compressed without loss.',
    },
    {
      t: 'p',
      text: 'That is a narrower category than most content calendars assume, and it is a specific one.',
    },
    { t: 'h2', text: 'The four page types that still work' },
    {
      t: 'table',
      caption: 'What survives a composed answer, and why',
      head: ['Type', 'Example', 'Why a summary cannot replace it'],
      rows: [
        [
          'Original data',
          'Your acceptance rates, your pricing logs, a survey nobody else ran',
          'The number does not exist elsewhere, so quoting it names you.',
        ],
        [
          'Tools and calculators',
          'A cost worksheet, a decision path, a template',
          'The output depends on the visitor’s input. A summary of a tool is not a tool.',
        ],
        [
          'A position',
          'An argued opinion with a cost attached',
          'Summaries flatten disagreement. A real position either survives intact or is worth arguing with.',
        ],
        [
          'Deliberate reference',
          'Definitions, checklists, specifications',
          'Written to be quoted. The mention is the goal, not the consolation prize.',
        ],
      ],
    },
    {
      t: 'p',
      text: 'What is missing from that table is the general explainer, and its absence is the whole strategic point. "What is generative video" is a page that will never be visited again and should be written anyway — as reference, as an entity anchor, and with no expectation that anyone lands on it.',
    },
    { t: 'h2', text: 'Metrics that still mean something' },
    {
      t: 'ul',
      items: [
        'Share of answers: for the twenty questions your buyers ask, how often does an answer engine name you. Checkable by hand in an afternoon, monthly.',
        'Definitional capture: whether your phrasing of a term is the one being reproduced. This is the cleanest evidence that a glossary is working.',
        'Query depth of arriving traffic: fewer visitors, further down the funnel, is the expected shape and a good one.',
        'Branded search volume: the lagging indicator that tells you whether mentions upstream are producing intent downstream.',
        'Assisted conversions from direct and branded entries, which is where the credit for zero-click work actually lands.',
      ],
    },
    {
      t: 'note',
      title: 'The metric to stop defending',
      text: 'Sessions on informational pages. It will decline whatever you do, and defending it produces more of exactly the content that is being summarised away.',
    },
    { t: 'h2', text: 'The uncomfortable trade' },
    {
      t: 'p',
      text: 'Writing to be quoted means answering the question without requiring a visit. You are deliberately choosing mentions over sessions. That is a real cost and worth stating plainly rather than pretending there is no tension.',
    },
    {
      t: 'p',
      text: 'The argument for taking the trade is that the alternative is not sessions, it is neither. The answer gets composed regardless; the only decision available is whether it is composed from your page or somebody else’s.',
    },
    { t: 'h2', text: 'What to do with the freed capacity' },
    {
      t: 'p',
      text: 'A content team that stops producing commodity explainers has recovered a substantial amount of time. The highest-return uses we have seen:',
    },
    {
      t: 'ol',
      items: [
        'Generate one piece of original data per quarter. Your own logs, your own survey, your own test. This is the only durable citation asset there is.',
        'Build the reference layer properly: definitions on their own pages, linked consistently, dated, with the questions people type as headings.',
        'Ship a tool. A calculator or a decision path earns links, gets used, and cannot be summarised.',
        'Say something arguable, in public, with your name on it. Positions get quoted and disagreed with, and both are mentions.',
        'Put more of the budget into formats that are not text at all, because the substitution pressure there is lower and the same claims travel.',
      ],
    },
    {
      t: 'cta',
      href: '/supply-drop',
      label: 'The Supply Drop',
      text: 'What this looks like when we do it: templates, checklists and calculators published in full, with no email gate in front of any of them.',
    },
  ],
  faqs: [
    {
      q: 'What is zero-click search?',
      a: 'A search that ends without the user visiting any website, because the answer was composed on the results page. Around two thirds of searches now resolve this way, which removes sessions from informational pages without removing their value as sources.',
    },
    {
      q: 'What content still gets traffic in 2026?',
      a: 'Four types: original data that exists nowhere else, tools whose output depends on the visitor’s input, argued positions that a summary would flatten, and deliberate reference material written to be quoted. General explainers still deserve to exist as entity anchors, but not as traffic plays.',
    },
    {
      q: 'How do you measure content when traffic falls?',
      a: 'Share of answers across the twenty questions your buyers ask, whether your phrasing of key terms is the one reproduced, the query depth of the traffic that does arrive, branded search volume, and assisted conversions from direct and branded entries.',
    },
    {
      q: 'Should you write content that answers the question without a click?',
      a: 'Yes, because the alternative is not a click — it is the answer being composed from somebody else’s page. You are trading sessions for mentions, and the trade is worth stating openly rather than pretending it does not exist.',
    },
    {
      q: 'What should a content team do with the time freed up by not writing explainers?',
      a: 'Produce one piece of original data per quarter, build the reference layer properly, ship a tool, take a public position, and move budget into non-text formats where substitution pressure is lower.',
    },
  ],
  terms: ['answer-engine-optimisation', 'topical-authority', 'entity-graph', 'content-atomisation', 'generative-engine-optimisation'],
  related: [
    'answer-engine-optimisation-for-brands',
    'how-to-get-quoted-by-an-answer-engine',
    'building-a-content-repurposing-engine',
  ],
};
