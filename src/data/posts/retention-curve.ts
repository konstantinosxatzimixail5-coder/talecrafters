import type { Post } from './types';

export const post: Post = {
  slug: 'reading-a-retention-curve-as-an-edit-note',
  title: 'Reading a Retention Curve as an Edit Note',
  metaTitle: 'How to Read a Retention Curve (And Turn It Into Edit Notes)',
  metaDescription:
    'The four features of an audience retention graph that mean something, what each one is telling you to change, and why average view duration hides all of it.',
  excerpt:
    'It is the only editorial feedback in video that is not an opinion. Most teams look at the wrong number on it.',
  published: '2026-07-17',
  author: 'Konstantinos Chatzimichail',
  section: 'Story',
  tags: ['Story', 'Performance', 'Systems'],
  keywords: [
    'audience retention curve',
    'how to read retention graph',
    'video retention analysis',
    'average view duration',
    'video drop off analysis',
    'retention curve edit notes',
  ],
  image: 'retention-curve',
  imageAlt: 'A retention graph annotated with the edit decision each feature implies.',
  standfirst:
    'Four features of a retention curve carry almost all the information: the opening cliff, the slope through the middle, sharp local drops, and rises. Each maps to a specific edit decision. Average view duration is an average of a shape and hides all four.',
  body: [
    {
      t: 'p',
      text: 'Editorial feedback is almost entirely opinion, delivered by people with different tastes and different amounts of authority. A retention curve is the exception: it records what an audience did, second by second, and it does not care what anyone thinks. It is the most useful document in a content operation and it is routinely reduced to one number.',
    },
    { t: 'h2', text: 'The four features' },
    {
      t: 'table',
      caption: 'What each shape is telling you to change',
      head: ['Feature', 'What it measures', 'The edit note'],
      rows: [
        [
          'Opening cliff (0–3s)',
          'The hook, and nothing else',
          'Rewrite the first line, or the first frame. Nothing later in the piece can affect this number.',
        ],
        [
          'Middle slope',
          'Whether the piece keeps giving reasons to stay',
          'A steep steady slope means no open loops. Add a question that is not yet answered.',
        ],
        [
          'Sharp local drop',
          'One specific moment that lost people',
          'Go to that timestamp. It is almost always a beat where nothing changed, or a claim that was not believed.',
        ],
        [
          'Rise',
          'People scrubbed backwards',
          'Something was said too fast or shown too briefly. Slow down at that point.',
        ],
      ],
    },
    {
      t: 'p',
      text: 'The rise is the most under-used of the four. A bump in a retention graph is an audience telling you, precisely, that they wanted more time with something — and it is the only note in the entire discipline that comes with a timestamp and an unambiguous instruction.',
    },
    { t: 'h2', text: 'Why average view duration is the wrong number' },
    {
      t: 'p',
      text: 'Two pieces can have identical average view duration and completely different curves. One holds ninety per cent of its audience to the midpoint and then loses them at a specific moment. The other loses two thirds in the first three seconds and holds the remainder to the end. The first has an edit problem at a known timestamp. The second has a hook problem and a piece that works.',
    },
    {
      t: 'p',
      text: 'The averages are the same. The correct action is opposite in each case. Reporting on the average is how teams spend a quarter improving the wrong half of their content.',
    },
    {
      t: 'note',
      title: 'Normalise before comparing',
      text: 'Retention curves are not comparable across lengths. A sixty per cent completion on a thirty-second piece and on a ten-minute piece are different achievements. Compare like with like, or compare the shape rather than the number.',
    },
    { t: 'h2', text: 'Diagnosing a sharp drop' },
    {
      t: 'p',
      text: 'Go to the timestamp and watch the fifteen seconds before it, not the moment itself. People leave a few seconds after the thing that made them leave, because deciding takes time. The cause is upstream of the cliff.',
    },
    {
      t: 'p',
      text: 'In our logs the causes cluster into four:',
    },
    {
      t: 'ul',
      items: [
        'A beat where nothing changed. The value at the top and the bottom of that section is identical, and the audience registered the absence.',
        'An unbelieved claim. Something was asserted without evidence, and the drop is scepticism rather than boredom.',
        'A loop closed too early. The only unanswered question got answered, so there was no reason to continue.',
        'A tonal break. The piece changed register — a joke in something sincere, an ad break in something intimate — and the audience took the exit.',
      ],
    },
    { t: 'h2', text: 'What the curve cannot tell you' },
    {
      t: 'p',
      text: 'It measures attention, not persuasion, and the two come apart more often than anyone comfortable would like. A piece can hold a hostile audience beautifully. A piece can lose half its viewers and convert the rest at a rate nothing else touches.',
    },
    {
      t: 'p',
      text: 'It also cannot tell you why anybody stayed, which means it is a debugging tool rather than a design tool. Curves tell you what to fix and never what to make.',
    },
    { t: 'h2', text: 'Turning it into a working practice' },
    {
      t: 'ol',
      items: [
        'Look at the curve for every piece, not just the underperformers. The successful ones contain the reusable information.',
        'Record the four features as numbers in a shared log: cliff depth, middle slope, timestamp of the largest local drop, timestamps of any rises.',
        'Write the edit note next to each, and then write what you did about it. Most teams collect the data and never close the loop.',
        'Look for the same timestamp appearing across pieces. A drop at seven seconds in eleven of your last twenty videos is a format problem rather than an edit problem.',
        'Use rises to decide what to make more of. They are the only positive signal in the graph.',
      ],
    },
    {
      t: 'cta',
      href: '/glossary/retention-curve',
      label: 'Retention curve, defined',
      text: 'The short version, with the related terms and the questions people ask about reading one.',
    },
  ],
  faqs: [
    {
      q: 'How do you read an audience retention curve?',
      a: 'Four features carry the information: the cliff in the first three seconds measures the hook, the middle slope measures whether the piece keeps earning attention, sharp local drops identify specific failing moments, and rises show where viewers scrubbed back because something went too fast.',
    },
    {
      q: 'Why is average view duration a bad metric?',
      a: 'Because it is an average of a shape. Two pieces with identical averages can have opposite problems — one with a hook failure and a working body, one with a strong opening and a specific mid-piece collapse — and the correct action differs completely.',
    },
    {
      q: 'What does a rise in a retention graph mean?',
      a: 'That viewers scrubbed backwards, which almost always means something was said too quickly or shown too briefly. It is the only note in the discipline that arrives with a timestamp and an unambiguous instruction: slow down here.',
    },
    {
      q: 'How do you find the cause of a sharp drop in retention?',
      a: 'Watch the fifteen seconds before the drop rather than the moment itself — people leave a few seconds after the thing that made them leave. The usual causes are a beat where nothing changed, an unbelieved claim, a loop closed too early, or a tonal break.',
    },
    {
      q: 'What can a retention curve not tell you?',
      a: 'Why anybody stayed, and whether anybody was persuaded. It measures attention rather than conviction, which means it is a debugging tool. It tells you what to fix and never what to make.',
    },
  ],
  terms: ['retention-curve', 'hook', 'open-loop', 'pattern-interrupt', 'pacing', 'value-shift'],
  related: [
    'how-to-write-a-hook-for-short-form-video',
    'open-loops-and-why-explainer-videos-lose-people',
    'creative-testing-at-volume-how-many-variants-is-enough',
  ],
};
