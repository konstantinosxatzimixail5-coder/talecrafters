import type { Post } from './types';

export const post: Post = {
  slug: 'the-beat-sheet-comes-before-the-shot-list',
  title: 'The Beat Sheet Comes Before the Shot List (And the Shot List Is the Budget)',
  metaTitle: 'Beat Sheet Before Shot List: How Structure Sets a Generative Budget',
  metaDescription:
    'In generative production the shot list is the budget, and the shot list is derived from the beats. How to write a beat sheet that costs a sentence to fix rather than four hundred renders.',
  excerpt:
    'A beat is free to change. A shot is not. Almost every overrun we have seen started as a structural decision made after the rendering began.',
  published: '2026-07-21',
  author: 'Konstantinos Chatzimichail',
  section: 'Story',
  tags: ['Story', 'Production', 'Method'],
  keywords: [
    'beat sheet template',
    'beat sheet vs shot list',
    'how to write a beat sheet',
    'story outline for video',
    'generative video planning',
    'shot list budget',
  ],
  image: 'beat-sheet-before-shot-list',
  imageAlt: 'A beat sheet with each line annotated by the number of shots it will require.',
  standfirst:
    'The shot list determines the render count and therefore the budget, and the shot list is derived from the beats. Changing a beat costs a sentence; changing it after the shot list has been generated costs the shots. Write the beats first, test them, then derive.',
  body: [
    {
      t: 'p',
      text: 'In conventional production the schedule is the budget: days, crew, locations. In generative production the shot list is the budget, because each distinct shot is a set of attempts and the attempts are the cost. That makes the document upstream of the shot list — the beat sheet — the most financially consequential page in the project, and it is usually the one nobody writes.',
    },
    { t: 'h2', text: 'What a beat sheet is' },
    {
      t: 'p',
      text: 'One line per beat, and each line states the turn rather than the event. What the character wants going in, what stops them, and what is different coming out. A list of events that does not name what changed is a running order, and a running order cannot be wrong, which means it cannot be improved.',
    },
    {
      t: 'p',
      text: 'A ninety-second piece usually supports six to nine real beats. More than that and the beats are events, which is what makes a short film feel busy and empty simultaneously.',
    },
    { t: 'h2', text: 'The line that makes it useful' },
    {
      t: 'p',
      text: 'Write each beat in this shape and the diagnosis comes free:',
    },
    {
      t: 'quote',
      text: 'She wants him to admit he read the email. He deflects by changing the subject twice. She stops asking, and now he knows she has stopped asking. Trust: negative to worse.',
    },
    {
      t: 'p',
      text: 'Four elements: an objective, an obstacle, an outcome and a value shift. If any of the four cannot be filled in, that beat is the one to fix, and fixing it costs a sentence.',
    },
    { t: 'h2', text: 'Deriving the shot list, and where the money appears' },
    {
      t: 'p',
      text: 'Once the beats are settled, each becomes a small number of shots. This is the step where a structural decision becomes a number, and it is worth doing explicitly rather than by instinct.',
    },
    {
      t: 'table',
      caption: 'What each beat costs, by what it contains',
      head: ['If the beat needs…', 'Shots', 'Attempts multiplier', 'Why'],
      rows: [
        ['A wide with no people', '1', 'Low', 'Environment plates have the highest acceptance rate of anything.'],
        ['A recurring face', '2–3', 'Medium', 'Identity has to be conditioned and checked against the reference.'],
        ['Legible product type', '1–2', 'High', 'Type is the least reliably reconstructed thing there is, with no partial credit.'],
        ['Hands doing something', '2', 'High', 'The failure everybody sees, and the first one an untrained viewer catches.'],
        ['Two people interacting', '3–4', 'High', 'Geometry, facing and identity all have to hold at once.'],
        ['A dialogue exchange', '4–6', 'Medium', 'Coverage, and lip-sync adds a separate failure mode.'],
      ],
    },
    {
      t: 'p',
      text: 'Run that table over a beat sheet and the expensive beats identify themselves before anybody has generated anything. Frequently one beat accounts for a third of the projected cost, and frequently it is not the beat anyone would have guessed.',
    },
    {
      t: 'note',
      title: 'The conversation this enables',
      text: '"Beat five is a third of the budget because it needs two people, a hand and legible packaging in one shot. We can split it into two shots and halve it, or we can cut the packaging and lose nothing." That is a producer conversation. Without a beat sheet it happens after the money is spent, as an apology.',
    },
    { t: 'h2', text: 'Testing the sheet before deriving anything' },
    {
      t: 'ol',
      items: [
        'Replace every "because of that" with "and then". If nothing is lost, you have a chronology rather than a story.',
        'Check every beat has a value marked at both ends. Identical marks mean the beat is delivering information.',
        'Find the reversal. If nothing inverts anywhere, the middle will drag regardless of the shot count.',
        'Read the first beat and the last beat only. They should describe a change. If they describe the same state, the piece does not arrive anywhere.',
        'Count the beats. Above nine on a short, start merging.',
      ],
    },
    { t: 'h2', text: 'Why this discipline slipped' },
    {
      t: 'p',
      text: 'Because generation is available before writing is finished, and it is enormously more fun. The historical constraint that forced a script to exist first was cost, and cost has moved to a different part of the process without moving the requirement.',
    },
    {
      t: 'p',
      text: 'The consequence is a specific and now common failure: a project with forty beautiful shots, no structural spine, and no budget left to fix it. Every one of those we have been asked to rescue would have cost a fraction of the rescue fee to prevent with an afternoon and a page.',
    },
    {
      t: 'cta',
      href: '/supply-drop/synthetic-media-production-brief-template',
      label: 'The brief template',
      text: 'Where the beats, the locks and the shot list sit in a brief that can actually be quoted from.',
    },
  ],
  faqs: [
    {
      q: 'What is a beat sheet?',
      a: 'A one-line-per-beat outline stating what changes at each step rather than what happens: the objective, the obstacle, the outcome and the value shift. A list of events that does not name what changed is a running order, and a running order cannot be diagnosed.',
    },
    {
      q: 'Why does the beat sheet matter for budget?',
      a: 'Because the shot list is the budget in generative production, and the shot list is derived from the beats. Changing a beat costs a sentence; changing it after the shots have been generated costs the shots.',
    },
    {
      q: 'How many beats should a short film have?',
      a: 'Six to nine for a ninety-second piece. Above that the beats are events rather than turns, which is what makes a short film feel busy and empty at the same time.',
    },
    {
      q: 'Which beats cost the most to produce generatively?',
      a: 'Anything combining a recurring face, legible product type and hands in a single shot. Environment plates with no people are the cheapest. Running that assessment over the beat sheet usually reveals that one beat accounts for a third of the projected cost.',
    },
    {
      q: 'How do you test a beat sheet?',
      a: 'Replace every "because of that" with "and then" — if nothing is lost it is a chronology. Check each beat has a value marked at both ends. Find the reversal. Read the first and last beats alone and confirm they describe a change.',
    },
  ],
  terms: ['beat-sheet', 'story-beat', 'value-shift', 'shot-list', 'acceptance-rate', 'story-spine'],
  related: [
    'why-your-ai-video-has-no-story',
    'three-act-structure-in-thirty-seconds',
    'how-to-brief-an-ai-video-production-studio',
  ],
  resources: ['synthetic-media-production-brief-template', 'ai-video-cost-calculator'],
};
