import type { Post } from './types';

export const post: Post = {
  slug: 'creative-testing-at-volume-how-many-variants-is-enough',
  title: 'Creative Testing at Volume: How Many Variants Is Enough?',
  metaTitle: 'How Many Ad Variants Should You Test? The Volume Question Answered',
  metaDescription:
    'Generative production removed the cost of a variant and did not remove the cost of a bad test. How to design a variant matrix that produces a finding rather than a leaderboard, and where the returns stop.',
  excerpt:
    'Ninety variants that differ on four axes at once produce a winner and no knowledge. The winner is not the point.',
  published: '2026-06-09',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Performance', 'Strategy'],
  keywords: [
    'how many ad variants to test',
    'creative testing strategy',
    'ad variant matrix',
    'creative volume performance marketing',
    'AI ad testing',
    'hook testing framework',
  ],
  image: 'creative-testing-at-volume',
  imageAlt: 'A variant matrix with one axis varied and the others held constant.',
  standfirst:
    'Vary one axis at a time and you learn something reusable. Vary four and you get a winner you cannot explain and cannot repeat. The right volume is however many variants it takes to isolate one axis, which is usually between five and eight, not ninety.',
  body: [
    {
      t: 'p',
      text: 'The pitch for generative creative is volume: test a hundred concepts a week instead of four. The pitch is broadly true and it hides a problem, which is that a hundred variants differing on everything at once produce a ranked list and no explanation. Next month you start again from nothing, because you learned which asset won rather than why.',
    },
    { t: 'h2', text: 'The difference between a test and a tournament' },
    {
      t: 'p',
      text: 'A tournament ranks options. It is useful and it is not knowledge: the winner tells you what to run this month and nothing about what to make next month. A test isolates a variable and produces a claim you can carry forward, which compounds.',
    },
    {
      t: 'p',
      text: 'Both have a place. The mistake is running a tournament while believing you ran a test, which is what happens whenever a matrix varies more than one thing.',
    },
    { t: 'h2', text: 'Designing a matrix that produces knowledge' },
    {
      t: 'table',
      caption: 'One axis at a time',
      head: ['Round', 'What varies', 'What is held', 'What you learn'],
      rows: [
        ['1', 'Hook (6 variants, one per mechanism)', 'Everything else identical', 'Which mechanism this audience responds to'],
        ['2', 'Opening visual (4)', 'Winning hook, everything else identical', 'Whether the cliff is visual or verbal'],
        ['3', 'Body structure (3)', 'Winning hook and visual', 'Whether the middle slope is a structure problem'],
        ['4', 'Call to action (3)', 'Everything above', 'Whether the ask or the argument is the limit'],
        ['5', 'Presenter or register (4)', 'Everything above', 'How much of performance is who is delivering it'],
      ],
    },
    {
      t: 'p',
      text: 'Twenty assets across five rounds, and at the end you hold four reusable claims about your audience rather than one winning file. The next campaign starts from those claims, which is the only mechanism by which testing gets cheaper over time.',
    },
    {
      t: 'note',
      title: 'The volume that is actually useful',
      text: 'Enough variants of one axis to distinguish them, which for most paid social is five to eight. Beyond that you are splitting budget more ways and slowing every result down, in exchange for distinctions the data cannot support.',
    },
    { t: 'h2', text: 'Where the returns stop' },
    {
      t: 'ul',
      items: [
        'Statistical: past a point, additional variants divide the same budget and nothing reaches significance. More variants means slower learning, not faster.',
        'Practical: someone has to watch all of them. Ninety assets is over an hour of review before anything is watched twice.',
        'Creative: variants generated to fill a matrix rather than to test an idea are noise, and they dilute the average performance of the batch.',
        'Platform: several delivery systems concentrate spend on early leaders, so a large matrix gets pruned by the algorithm before your test finishes. You measured the platform, not the creative.',
      ],
    },
    {
      t: 'p',
      text: 'The last one catches sophisticated teams. If the platform allocates on early signal, a fifty-variant test is a five-variant test with forty-five assets that never got a chance, and the five were chosen by delivery rather than by design.',
    },
    { t: 'h2', text: 'What to hold constant, and how' },
    {
      t: 'p',
      text: 'A test is only valid if everything except the tested axis is genuinely identical, which is harder in generative production than it sounds, because two generations from the same prompt are not the same asset.',
    },
    {
      t: 'ol',
      items: [
        'Generate the invariant portion once and reuse the file. Do not regenerate it per variant.',
        'For hook tests, change only the audio and the first two seconds of picture. Everything after is one master.',
        'Keep the same presenter, same wardrobe, same light, same grade across a round. Vary those in their own round.',
        'Name files so the axis is in the name. Reading a results table where the filenames do not encode the variable is how findings get lost.',
        'Log which round each asset belongs to, so a winner from round one can be traced when it stops winning in month four.',
      ],
    },
    { t: 'h2', text: 'The metric to test on' },
    {
      t: 'p',
      text: 'For hook rounds, the first-three-seconds retention, not the conversion. A hook that wins on conversion may have won for reasons downstream of the hook, and you will have attributed it wrongly.',
    },
    {
      t: 'p',
      text: 'For structure rounds, the middle slope of the retention curve. For call-to-action rounds, conversion. Matching the metric to the axis is the step that makes the round interpretable, and it is skipped more often than any other.',
    },
    {
      t: 'cta',
      href: '/blog/reading-a-retention-curve-as-an-edit-note',
      label: 'Reading a retention curve',
      text: 'Which feature of the graph corresponds to which part of the piece, so a test round measures what it thinks it is measuring.',
    },
  ],
  faqs: [
    {
      q: 'How many ad variants should you test at once?',
      a: 'Enough variants of a single axis to distinguish them, which for most paid social is five to eight. Beyond that, additional variants divide the same budget, nothing reaches significance, and learning gets slower rather than faster.',
    },
    {
      q: 'Why is testing ninety variants a bad idea?',
      a: 'Because if they differ on several axes at once you get a winner you cannot explain and cannot repeat. You also hit four ceilings: statistical significance, review time, creative dilution, and platforms that concentrate spend on early leaders and prune your test before it finishes.',
    },
    {
      q: 'How do you design a creative test that produces reusable knowledge?',
      a: 'Vary one axis per round and hold everything else identical: hooks first, then opening visual, then body structure, then call to action, then presenter or register. Twenty assets across five rounds yields four reusable claims about your audience rather than one winning file.',
    },
    {
      q: 'What metric should each test round use?',
      a: 'Match the metric to the axis. Hook rounds are judged on first-three-seconds retention, structure rounds on the middle slope of the retention curve, and call-to-action rounds on conversion. A hook judged on conversion may have won for reasons downstream of the hook.',
    },
    {
      q: 'How do you hold variables constant in generative testing?',
      a: 'Generate the invariant portion once and reuse the file rather than regenerating it per variant — two generations from the same prompt are not the same asset. For hook tests, change only the audio and the first two seconds of picture over one master.',
    },
  ],
  terms: ['eval', 'retention-curve', 'hook', 'cost-per-accepted-asset', 'naming-convention', 'run-log'],
  related: [
    'reading-a-retention-curve-as-an-edit-note',
    'how-to-write-a-hook-for-short-form-video',
    'what-an-ai-ugc-ad-actually-costs',
  ],
  resources: ['creative-automation-workflow-canvas'],
};
