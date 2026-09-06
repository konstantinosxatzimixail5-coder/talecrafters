import type { Post } from './types';

export const post: Post = {
  slug: 'open-loops-and-why-explainer-videos-lose-people',
  title: 'Open Loops, and Why Well-Made Explainers Lose People',
  metaTitle: 'Open Loops in Video: Why Good Explainers Lose Their Audience',
  metaDescription:
    'A well-structured explainer answers every question as it arrives, which leaves the viewer with nothing to carry. How open loops work, how to stack them, and the one rule that stops the technique becoming a trick.',
  excerpt:
    'Clarity and completeness are not the same thing. Answering everything as you go is the most polite way to lose an audience.',
  published: '2026-07-14',
  author: 'Konstantinos Chatzimichail',
  section: 'Story',
  tags: ['Story', 'Craft', 'Performance'],
  keywords: [
    'open loop storytelling',
    'why explainer videos lose viewers',
    'Zeigarnik effect content',
    'video retention technique',
    'curiosity gap video',
    'narrative loops',
  ],
  image: 'open-loops',
  imageAlt: 'A timeline with three loops opening and closing in a different order from the one they opened in.',
  standfirst:
    'An unfinished question occupies attention in a way a completed one does not. Explainers that answer everything as it arrives leave a viewer holding nothing, which is why competent, clear, well-lit explanatory content is so easy to stop watching.',
  body: [
    {
      t: 'p',
      text: 'There is a class of video that gets everything right and still loses two thirds of its audience by the midpoint: clear, well-paced, correct, nicely shot, and structured as a sequence of complete answers. It is not failing on quality. It is failing because at every moment the viewer is complete, and a complete viewer has nothing pulling them forward.',
    },
    { t: 'h2', text: 'The mechanism' },
    {
      t: 'p',
      text: 'Unfinished tasks occupy attention more than finished ones. Ask a question and leave it unanswered and the viewer is holding something; close it and the holding stops. That is the entire technique, and its consequence is that the placement of answers matters as much as their content.',
    },
    {
      t: 'p',
      text: 'Note what this is not. It is not withholding information to be annoying, and it is not the "stay to the end" promise, which audiences have correctly learned to discount. It is ordering the material so that the reason to continue exists at every point.',
    },
    { t: 'h2', text: 'Stacking' },
    {
      t: 'p',
      text: 'One loop holds attention until it closes. Several loops, opened and closed out of order, hold attention continuously. The structure looks like this:',
    },
    {
      t: 'table',
      caption: 'A three-loop stack across a six-minute piece',
      head: ['Time', 'Action', 'Loops open'],
      rows: [
        ['0:00', 'Open loop A: a claim with an unexplained mechanism', 'A'],
        ['1:10', 'Open loop B: an unexplained consequence of A', 'A, B'],
        ['2:30', 'Close A', 'B'],
        ['2:45', 'Open loop C: a cost nobody has named yet', 'B, C'],
        ['4:00', 'Close B', 'C'],
        ['5:20', 'Close C', 'none'],
      ],
    },
    {
      t: 'p',
      text: 'At no point between the start and 5:20 is the viewer holding nothing. That is the whole design. Note that A closes before the piece is halfway through — the technique does not require withholding the main answer, and pieces that do withhold it tend to be resented.',
    },
    { t: 'h2', text: 'The rule' },
    {
      t: 'p',
      text: 'Every loop must close. A loop left open reads as a piece that wasted the viewer’s time, and the effect is retrospective: they enjoyed it right up until the end, and then reclassified it.',
    },
    {
      t: 'p',
      text: 'This is the difference between the technique and the trick. A trick opens loops it has no intention of closing because the metric it optimises is watch time rather than trust, and it works until the audience has seen two of them.',
    },
    {
      t: 'note',
      title: 'The testimonial mistake',
      text: 'Opening a case study with the result closes the only loop the piece has. "We increased conversions by forty per cent" as the first line leaves nothing to find out. The same fact at the end, with the near-failure in the middle, is a story.',
    },
    { t: 'h2', text: 'Restructuring an explainer without lying' },
    {
      t: 'ol',
      items: [
        'List every question your piece answers, in the order it currently answers them.',
        'Find the most interesting answer. Move the question that produces it to the front, and the answer to the middle.',
        'Introduce a consequence before its cause. "This is why the whole approach breaks" before explaining what the approach is.',
        'Name something you are going to come back to, specifically, once. Not "more on that later" — name it.',
        'Check that every named thing is returned to. Then check again, because this is the step that gets dropped in an edit.',
      ],
    },
    {
      t: 'p',
      text: 'None of this requires withholding anything the audience needs to follow along. The information arrives; it arrives in an order that gives them a reason to still be there.',
    },
    { t: 'h2', text: 'The tension with instructional content' },
    {
      t: 'p',
      text: 'Sometimes people are watching to do a thing, and then completeness at every step is the whole point. Somebody following a procedure does not want a loop, they want the next instruction.',
    },
    {
      t: 'p',
      text: 'The resolution is that these are different formats with different jobs, and the mistake is running one at the length of the other. A procedure should be as short as it can be and structured for scanning. A piece meant to hold attention for six minutes needs loops. Trying to do both produces something that is tedious to watch and difficult to follow.',
    },
    {
      t: 'cta',
      href: '/glossary/open-loop',
      label: 'Open loop, defined',
      text: 'The definition, with the related attention terms and the questions people ask about them.',
    },
  ],
  faqs: [
    {
      q: 'What is an open loop in video?',
      a: 'A question raised and deliberately left unanswered so the viewer carries it forward. Unfinished questions occupy attention in a way completed ones do not, which is why content that answers everything as it arrives is easy to stop watching.',
    },
    {
      q: 'Why do explainer videos lose viewers even when they are clear?',
      a: 'Because clarity and completeness are different things. A piece structured as a sequence of complete answers leaves the viewer complete at every moment, and a complete viewer has nothing pulling them forward.',
    },
    {
      q: 'How many open loops should a video have?',
      a: 'Enough that the viewer is never holding nothing — typically two or three across a long piece, opened and closed out of order. Every one of them must close; a loop left open makes the audience reclassify the whole piece as a waste of their time.',
    },
    {
      q: 'What is the difference between an open loop and clickbait?',
      a: 'Whether the loop closes with something worth the wait. The technique is identical. Clickbait opens loops it has no intention of closing, optimises for watch time rather than trust, and stops working after an audience has seen two of them.',
    },
    {
      q: 'Should a case study open with the result?',
      a: 'No. Opening with the result closes the only loop the piece has. The same number at the end, with the moment the project nearly failed in the middle, is a story rather than an announcement.',
    },
    {
      q: 'Do open loops work in instructional content?',
      a: 'Poorly. Somebody following a procedure wants the next instruction, not a question. These are different formats: a procedure should be short and scannable, a piece designed to hold attention for minutes needs loops, and trying to do both produces something tedious and hard to follow.',
    },
  ],
  terms: ['open-loop', 'curiosity-gap', 'retention-curve', 'hook', 'payoff', 'dramatic-question'],
  related: [
    'how-to-write-a-hook-for-short-form-video',
    'reading-a-retention-curve-as-an-edit-note',
    'why-your-ai-video-has-no-story',
  ],
};
