import type { Post } from './types';

export const post: Post = {
  slug: 'cost-per-accepted-asset-measuring-generative-production',
  title: 'Cost Per Accepted Asset: Measuring Generative Production Properly',
  metaTitle: 'Cost Per Accepted Asset: How to Measure Generative Production',
  metaDescription:
    'Cost per generation is the wrong number. Cost per accepted asset counts the rejected renders, the operator hours and the review time, and it is the only figure that survives contact with a finance team.',
  excerpt:
    'The metric that makes generative production explainable to the person who signs the invoice, and the arithmetic behind it.',
  published: '2026-08-10',
  author: 'Konstantinos Chatzimichail',
  section: 'Method',
  tags: ['Method', 'Pricing', 'Operations'],
  keywords: [
    'cost per accepted asset',
    'generative production metrics',
    'AI content cost measurement',
    'creative production ROI',
    'AI production efficiency metric',
    'measuring AI content costs',
    'content production unit economics',
  ],
  image: 'cost-per-asset',
  imageAlt:
    'A ledger of production runs drawn as a bar chart, with accepted assets highlighted and rejected renders faded behind them.',
  standfirst:
    'Cost per accepted asset is total spend on a batch divided by the number of assets that actually shipped. It counts the failures. It is the only generative production number that means anything to a finance team, and most studios cannot tell you theirs.',
  body: [
    {
      t: 'p',
      text: 'Every generative production pitch contains a per-unit number, and almost every one of them is measured at the wrong point. Cost per generation, cost per second, cost per credit: all of these count outputs. None of them count assets, and an output that failed review is not an asset. It is a cost.',
    },
    { t: 'h2', text: 'The formula' },
    {
      t: 'note',
      title: 'Cost per accepted asset',
      text: '(model spend + operator hours + review hours + licensing) ÷ assets that shipped. Rejected renders sit in the numerator, not outside the calculation.',
    },
    {
      t: 'p',
      text: 'That is the whole thing. Its power is entirely in what it refuses to exclude. A run that produced sixty frames and shipped four has a cost per accepted asset fifteen times its cost per generation, and the sixty is the number that left your account.',
    },
    { t: 'h2', text: 'Worked example' },
    {
      t: 'p',
      text: 'Take a supplements brand wanting nine paid-social variants with one presenter, plus thirty product stills. Two batches, two very different profiles. The rates below are illustrative rather than a rate card, and the arithmetic is what matters.',
    },
    {
      t: 'table',
      caption:
        'A worked example, with illustrative rates and figures. The shape is the point; put your own numbers in the cells.',
      head: ['', 'Presenter variants', 'Product stills'],
      rows: [
        ['Assets required', '9', '30'],
        ['Renders consumed', '38', '96'],
        ['Acceptance rate', '24%', '31%'],
        ['Model spend', '£210', '£290'],
        ['Operator hours', '11 @ £65', '9 @ £65'],
        ['Review hours', '3 @ £85', '5 @ £85'],
        ['Total', '£1,180', '£1,290'],
        ['Cost per accepted asset', '£131', '£43'],
      ],
    },
    {
      t: 'p',
      text: 'The interesting line is not the total. It is that the presenter variants cost roughly three times per asset what the stills did, despite fewer renders, because the human hours are where the money went. Measured per generation you would have concluded the opposite: the two look almost identical, and the difference that matters disappears.',
    },
    { t: 'h2', text: 'What the number tells you that nothing else does' },
    {
      t: 'ul',
      items: [
        'Which shot types to stop accepting briefs for. If legible packaging type costs you £180 an asset and everything else costs £40, that is a pricing decision rather than a craft complaint.',
        'When a pipeline change paid for itself. Build a trained identity instead of re-uploading references, watch the presenter acceptance rate move from 24 to 60 per cent, and the investment justifies itself in one campaign rather than in a slide.',
        'Where the human time actually goes. Almost always review, almost never generation, which is the opposite of what the tooling narrative suggests.',
        'Whether a job should be generative at all. When cost per accepted asset approaches what a photographer would have charged, the honest answer is to book the photographer.',
      ],
    },
    { t: 'h2', text: 'The three ways it gets fudged' },
    {
      t: 'ol',
      items: [
        'Excluding operator hours because they are salaried. Salaried time is still capacity, and capacity spent on regenerating a bottle is capacity not spent on the next brief.',
        'Counting an asset as accepted when it shipped after two hours of retouching. It was not accepted, it was rescued. Log it as a failure plus a rescue cost, or the number quietly stops meaning anything.',
        'Measuring per campaign rather than per shot type. An average across easy and hard work hides exactly the variance the metric exists to expose.',
      ],
    },
    { t: 'h2', text: 'Running the ledger' },
    {
      t: 'p',
      text: 'This only works if the logging is automatic. Nobody fills in a spreadsheet at eleven at night after a render queue finishes. The pipeline has to write its own ledger: batch identifier, shot type, renders consumed, model spend, gate outcomes, operator time, final disposition.',
    },
    {
      t: 'p',
      text: 'Once that exists, a credit ceiling per asset becomes enforceable rather than aspirational. The run halts when a shot has consumed its allowance and asks a person to decide, instead of quietly spending past a number that was agreed in a meeting and never encoded anywhere.',
    },
    {
      t: 'quote',
      text: 'A pipeline that cannot tell you what its last batch cost per accepted asset is not a pipeline. It is a habit.',
    },
    { t: 'h2', text: 'What to ask a studio' },
    {
      t: 'p',
      text: 'Three questions, and the answers are diagnostic.',
    },
    {
      t: 'ol',
      items: [
        '"What was your cost per accepted asset on the last job like this?" A studio running a ledger gives you a figure and a shot type. One that is not gives you a range for the whole engagement.',
        '"What is your acceptance rate on shots with legible packaging type?" The honest answer in 2026 is a low fraction. Anyone claiming eighty per cent has either not tried it or is not checking properly.',
        '"What is the credit ceiling per asset and what happens when a batch hits it?" It should halt and escalate. If nothing happens, there is no ceiling, only an intention.',
      ],
    },
    {
      t: 'cta',
      href: '/armoury/ai-video-cost-calculator',
      label: 'Open the cost calculator',
      text: 'The same arithmetic, laid out so you can run it against your own numbers before the next quote lands.',
    },
  ],
  faqs: [
    {
      q: 'What is cost per accepted asset?',
      a: 'Total spend on a batch, including model credits, operator hours, review hours and licensing, divided by the number of assets that actually shipped. Rejected renders count towards the cost rather than being excluded from it.',
    },
    {
      q: 'Why is cost per generation the wrong metric?',
      a: 'Because it measures outputs rather than assets. A run producing sixty frames to ship four looks cheap per generation and is fifteen times more expensive per asset, which is the number that appears on the invoice.',
    },
    {
      q: 'What is a normal acceptance rate in generative production?',
      a: 'It depends almost entirely on shot difficulty. Shots with legible printed type typically run fifteen to thirty per cent. Shots without readable text often run seventy to ninety. Averaging across both hides the variance the metric exists to reveal.',
    },
    {
      q: 'Should salaried operator time be included?',
      a: 'Yes. Salaried time is capacity, and capacity spent regenerating a failed frame is capacity not spent on the next brief. Excluding it is the most common way the number gets quietly fudged.',
    },
    {
      q: 'What is a credit ceiling per asset?',
      a: 'An agreed maximum spend for a single asset, encoded in the pipeline rather than in a meeting. When a shot consumes its allowance the run halts and asks a person to decide, instead of spending past a number nobody approved.',
    },
  ],
  terms: ['cost-per-accepted-asset', 'master-plate', 'agentic-workflow', 'human-in-the-loop'],
  related: [
    'what-does-generative-video-production-cost-2026',
    'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
    'agentic-workflow-vs-automation-where-each-actually-works',
  ],
  resources: ['ai-video-cost-calculator', 'production-readiness-scorecard'],
};
