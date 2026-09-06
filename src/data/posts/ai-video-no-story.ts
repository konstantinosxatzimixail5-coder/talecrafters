import type { Post } from './types';

export const post: Post = {
  slug: 'why-your-ai-video-has-no-story',
  title: 'Your AI Video Looks Good and Has No Story. Here Is the Diagnosis.',
  metaTitle: 'Why Your AI Video Has No Story (And How to Diagnose It)',
  metaDescription:
    'Generative tools removed the cost of a shot and left the cost of a story exactly where it was. The five structural tests that tell you which part is missing, and the order to fix them in.',
  excerpt:
    'Nobody has ever watched a film for the render quality. The tools got better at the part that was never the problem.',
  published: '2026-07-31',
  author: 'Konstantinos Chatzimichail',
  section: 'Story',
  tags: ['Story', 'Craft', 'Method'],
  keywords: [
    'AI video storytelling',
    'why AI video is boring',
    'story structure for AI film',
    'AI video narrative',
    'generative film story',
    'AI video feels empty',
  ],
  image: 'ai-video-no-story',
  imageAlt: 'A sequence of beautiful frames laid out with no connecting line between them.',
  standfirst:
    'A piece with beautiful shots and no story fails one of five tests: no dramatic question, no want, no obstacle, no reversal, or no value shift. Run them in that order. The first one that fails is the fix, and the other four are usually symptoms of it.',
  body: [
    {
      t: 'p',
      text: 'The most common note on generative work is some version of "it looks incredible and I stopped watching". It is a real observation and it is almost never about the images. The tools removed the cost of producing a shot and did nothing at all to the cost of having something to say, which means the ratio of production value to structure has moved further than at any point since the camcorder.',
    },
    {
      t: 'p',
      text: 'The good news is that structural failure is diagnosable in about ten minutes and does not require taste to detect.',
    },
    { t: 'h2', text: 'Test one: is there a dramatic question?' },
    {
      t: 'p',
      text: 'State the piece as a question beginning with "will". Will she get the job. Will the shop survive. Will he say it. If you cannot, there is no question, and attention through the middle of anything is a function of an unanswered question rather than of how interesting the middle is.',
    },
    {
      t: 'p',
      text: 'This is the most common failure in brand film by a wide margin, because the format is descriptive by default. A film that describes a company has no question in it, which is why it is watched the way descriptions are watched.',
    },
    { t: 'h2', text: 'Test two: does somebody want something?' },
    {
      t: 'p',
      text: 'Name the character and write, in a sentence starting with a verb, what they are trying to get. Not "she represents innovation" — what is she trying to get, from whom, in this piece. A character with no want is a model in a location, however well performed.',
    },
    { t: 'h2', text: 'Test three: what stops them?' },
    {
      t: 'p',
      text: 'The obstacle has to be as strong as the want or the outcome is not in doubt. Test it by stating the opposition’s position as though it were the protagonist’s: if it sounds reasonable, you have real opposition; if it sounds like obstruction for its own sake, you have decoration.',
    },
    {
      t: 'p',
      text: 'In commercial work the opposition is usually not a person and does not need to be. Time, money, a body, an institution, a habit. What it must not be is absent, which is what produces the aspirational film in which nobody appears to risk anything.',
    },
    { t: 'h2', text: 'Test four: does anything reverse?' },
    {
      t: 'p',
      text: 'A reversal is the situation inverting using elements already in play — the advantage becoming the liability, the victory costing more than it was worth. A sequence of escalating obstacles is monotonous however large the obstacles get. Two well-placed reversals do more than five additional complications.',
    },
    { t: 'h2', text: 'Test five: does each scene shift a value?' },
    {
      t: 'p',
      text: 'For every scene, name the value in play — trust, safety, hope, status — and mark it positive or negative at the top and again at the bottom. If the two marks are identical, that scene is delivering information in a scene’s clothing.',
    },
    {
      t: 'table',
      caption: 'The five tests, what failing each looks like, and the cheapest fix',
      head: ['Test', 'How the failure reads', 'Cheapest fix'],
      rows: [
        ['Dramatic question', 'Pleasant, well made, easy to stop watching', 'Ask it in the first ten seconds. Usually costs one line.'],
        ['A want', 'Beautiful people doing nothing in particular', 'Give one character one specific thing to get.'],
        ['An obstacle', 'No tension despite high stakes language', 'Make the opposition’s position reasonable.'],
        ['A reversal', 'The middle drags and the end is predictable', 'Invert one thing at the centre. Usually a re-order, not new material.'],
        ['A value shift', 'Individual scenes feel fine and add to nothing', 'Cut the scenes where nothing moves. There are more than you think.'],
      ],
    },
    {
      t: 'note',
      title: 'Run them in order',
      text: 'The tests are not independent. A piece with no dramatic question will usually fail all five, and fixing the question repairs three of them for free. Diagnosing from the bottom up produces a lot of scene-level work that a single line at the top would have solved.',
    },
    { t: 'h2', text: 'Why generative production makes this worse' },
    {
      t: 'p',
      text: 'Two mechanisms, both structural rather than cultural.',
    },
    {
      t: 'p',
      text: 'The first is that a beautiful shot is now available before a script exists, which inverts the order of production. Traditionally the expense of shooting forced a script to be finished first; now the images arrive early and the structure gets written around what already looks good. That is exactly backwards, and it is very hard to resist because the images are genuinely lovely.',
    },
    {
      t: 'p',
      text: 'The second is that the tools are best at exactly the material that requires no structure. Montage is native to the constraint — short clips joined by cuts — so the path of least resistance produces a piece with no scenes in it. A film assembled entirely from montage cannot fail the value-shift test, because there are no scenes to test.',
    },
    { t: 'h2', text: 'The order to work in' },
    {
      t: 'ol',
      items: [
        'Write the question. One sentence, beginning with "will".',
        'Write the beats. One line each, stating what changes rather than what happens. Six to nine for a short film.',
        'Test the beats against the five questions above. Fix at the beat level, where it costs a sentence.',
        'Only then write the shot list, which is derived from the beats and therefore decides the budget.',
        'Only then generate anything.',
      ],
    },
    {
      t: 'p',
      text: 'Every step you skip gets paid for later at a much higher rate, and the exchange rate is worst at the end, where fixing a structural problem means re-rendering.',
    },
    {
      t: 'cta',
      href: '/glossary/tag/story',
      label: 'The story terms',
      text: 'Beats, reversals, value shifts, dramatic questions and the rest, defined the way a maker needs them.',
    },
  ],
  faqs: [
    {
      q: 'Why does my AI video look good but feel empty?',
      a: 'Because generative tools removed the cost of a shot and did nothing to the cost of a story. Run five tests in order: is there a dramatic question, does somebody want something, what stops them, does anything reverse, and does each scene shift a value. The first failure is the fix.',
    },
    {
      q: 'What is the fastest way to diagnose a weak film?',
      a: 'State it as a question beginning with "will". If you cannot, there is no dramatic question, and attention through a middle section depends on one. This single test catches most brand films, which are descriptive by default.',
    },
    {
      q: 'Why does montage feel like the default in AI video?',
      a: 'Because it is native to the constraint: short clips joined by cuts is exactly what the tools produce well. The problem is that a piece assembled entirely from montage has no scenes, so there is nothing in it that can shift a value.',
    },
    {
      q: 'Should you write the script before generating anything?',
      a: 'Yes, and generative production makes this harder because a beautiful shot is available before a script exists. Traditionally the expense of shooting forced the structure to be finished first. Now the images arrive early and structure gets written around them, which is backwards and expensive to undo.',
    },
    {
      q: 'What does it mean for a scene to have no value shift?',
      a: 'That the thing at stake — trust, safety, hope, status — is worth the same at the end of the scene as at the start. Such a scene is delivering information rather than dramatising anything, and it will feel fine in isolation while adding nothing to the piece.',
    },
  ],
  terms: ['dramatic-question', 'value-shift', 'reversal', 'scene-objective', 'want-vs-need', 'beat-sheet'],
  related: [
    'why-your-ai-video-looks-cheap-and-what-fixes-it',
    'the-beat-sheet-comes-before-the-shot-list',
    'three-act-structure-in-thirty-seconds',
  ],
};
