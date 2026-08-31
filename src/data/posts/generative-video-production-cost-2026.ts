import type { Post } from './types';

export const post: Post = {
  slug: 'what-does-generative-video-production-cost-2026',
  title: 'What Does Generative Video Production Cost in 2026?',
  metaTitle: 'What Does Generative Video Production Cost in 2026? A Real Breakdown',
  metaDescription:
    'Generative video pricing in 2026, from per-second model credits to studio engagements. What the tiers actually buy, why the sticker price misleads, and the one number that tells you what a video really cost.',
  excerpt:
    'Model credits are pennies a second and studio engagements run into five figures. Both numbers are true. Here is what sits between them and which one applies to your brief.',
  published: '2026-08-31',
  author: 'TaleCrafters',
  section: 'Production',
  tags: ['Pricing', 'Production', 'Generative video'],
  keywords: [
    'generative video production cost',
    'AI video production cost 2026',
    'how much does AI video cost',
    'AI video production pricing',
    'generative video pricing',
    'cost of AI commercial production',
    'AI video agency rates',
  ],
  image: 'cost-2026',
  imageAlt:
    'A cost ledger rendered as stacked luminous bars against a dark studio wall, each bar labelled with a production stage.',
  standfirst:
    'In 2026 a generative video costs anywhere from about £0.05 per second in raw model credits to £30,000 or more for a produced campaign, and the gap between those numbers is not margin. It is everything that happens before and after the model runs. Here is what each tier actually buys.',
  body: [
    {
      t: 'p',
      text: 'Everybody asking this question has seen two numbers and cannot reconcile them. One is the per-second price on a model provider’s pricing page, which in 2026 sits somewhere between five and forty pence a second depending on the model and the resolution. The other is a studio quote with a comma in it. The reasonable conclusion is that somebody is lying.',
    },
    {
      t: 'p',
      text: 'Nobody is. They are prices for different things. One is the cost of a render. The other is the cost of a video you are allowed to publish, that matches the rest of the campaign, that a legal team has seen, and that will still be usable when you need the fortieth variant of it in March. Confusing those two is the single most expensive mistake in this market, and it is usually made by the buyer rather than the seller.',
    },
    { t: 'h2', text: 'The four tiers, and what separates them' },
    {
      t: 'p',
      text: 'There are four realistic ways to get a generative video made in 2026. They are not better and worse versions of each other. They are different products.',
    },
    {
      t: 'table',
      caption: 'Generative video production, by tier, 2026',
      head: ['Tier', 'Typical cost', 'What you are buying', 'Where it breaks'],
      rows: [
        [
          'Raw model credits',
          '£0.05 to £0.40 per second of output',
          'One clip, from one prompt, with no guarantee about the next one',
          'The second clip does not match the first',
        ],
        [
          'Subscription tools',
          '£20 to £250 per month',
          'A seat, a credit allowance, templates and an export',
          'Brand control, licensing clarity, anything at campaign scale',
        ],
        [
          'Freelance generative operator',
          '£400 to £3,000 per project',
          'Somebody who knows the tools driving them for you',
          'No pipeline, so consistency lives in one person’s head',
        ],
        [
          'Studio engagement',
          '£3,000 to £30,000+',
          'A locked pipeline, control gates, revisions, licensing, delivery specs',
          'Overkill for a single eight-second clip',
        ],
      ],
    },
    {
      t: 'p',
      text: 'The honest read on that table is that the first two rows are tool costs and the last two are production costs. If your brief is one clip for an internal deck, buy a subscription. If your brief is nine variants that have to feature the same presenter holding the same product with the same label, the first two rows cannot do it at any price, because the thing they are missing is not compute.',
    },
    { t: 'h2', text: 'Why the per-second price is not the price' },
    {
      t: 'p',
      text: 'A render is not an asset. An asset is a render that passed. And the ratio between those two numbers is the whole economics of this business.',
    },
    {
      t: 'p',
      text: 'A pipeline that generates sixty frames and ships four has a real unit cost fifteen times its sticker price. That is not a failure, incidentally. Four in sixty is a normal acceptance rate for hard work like packaging with legible type on it. The failure is quoting the sticker price to a client and then discovering the ratio afterwards.',
    },
    {
      t: 'note',
      title: 'The only number worth quoting',
      text: 'Cost per accepted asset: total spend on a batch, divided by the number of assets that actually shipped. It includes the rejected renders, the operator time, and the retouching. Any studio quoting you cost per generation is quoting the wrong number, and probably does not know its own.',
    },
    { t: 'h2', text: 'What the studio line item actually covers' },
    {
      t: 'p',
      text: 'If you have only ever bought the tool, the studio number looks like a markup on compute. It is not. Roughly, here is where the hours go on a produced piece, and none of these are generation.',
    },
    {
      t: 'ul',
      items: [
        'Locking the things that must not change. A product becomes a master plate: one clean frame, correct shape, correct label, that every later angle is generated from. A presenter becomes a trained identity built from a sheet of stills rather than a reference image re-uploaded and re-interpreted each session.',
        'Writing the set once. One key light direction, one stated colour temperature, one lens language, written down before anything renders, so shot nine and shot one belong to the same world.',
        'Generation. The cheap part. Genuinely the cheap part.',
        'The control gates. Read every printed word at full resolution. Overlay each render on its plate at forty per cent opacity and check the outline has not drifted. Hold one light direction across the whole set. Kill any invented certification, award or ingredient claim.',
        'The rejected work. The renders that failed a gate and went back to the source file rather than into a retouching pass, because patching produces one shot that passes and a set that still drifts.',
        'Delivery. Aspect ratios cut as part of the shoot rather than cropped afterwards, colour handled once, disclosure applied on the asset rather than only in metadata, and licensing cleared for commercial use before rendering rather than after.',
      ],
    },
    { t: 'h2', text: 'What moves the number on a real quote' },
    {
      t: 'p',
      text: 'Five variables account for almost all of the spread between two quotes for what sounds like the same job.',
    },
    {
      t: 'ol',
      items: [
        'Legible type in frame. Packaging, labels, signage and anything with a certification mark on it. Type is where generative models fail most reliably and where a wrong render is a legal problem rather than an aesthetic one. Budget for a low acceptance rate.',
        'A human face that has to recur. One face across nine assets is a trained identity and a set of gates. One face in one asset is a render.',
        'How many worlds. A campaign in one set with one light direction is cheaper than four locations, by roughly the amount you would expect.',
        'Regulated claims. Supplements, finance, health and anything with a substantiation requirement move legal review from a formality to a stage.',
        'Whether you want the reusable files. Plates, trained identities and set specifications handed over means the next campaign starts from a lock rather than from scratch. It costs more once and less every time after.',
      ],
    },
    { t: 'h2', text: 'When generative is not cheaper' },
    {
      t: 'p',
      text: 'It is worth saying plainly, because a studio that will not say it is selling you something. Generative production is not cheaper when the brief needs a real face, a real place and a real product on the same real day. It is not cheaper when the client will only accept a photograph of the actual thing. And it is not cheaper on a single hero piece where a small crew and a good DoP would have got there in a day.',
    },
    {
      t: 'p',
      text: 'Where it is dramatically cheaper is volume, variation and the impossible shoot. Forty product angles. Nine ad variants with one presenter. A restaurant menu that has never been photographed and cannot be photographed in season. A subject that cannot be filmed at all, like a cyberattack on an electricity grid.',
    },
    { t: 'h2', text: 'How to sanity-check a quote you have been sent' },
    {
      t: 'ol',
      items: [
        'Ask for the expected acceptance rate on the hardest shot in the brief. A studio that has done this before will give you a fraction. One that has not will say it depends.',
        'Ask what happens to a frame that fails. "Back to the plate" is the right answer. "Our retoucher fixes it" means the set will drift.',
        'Ask who owns the plates and trained identities afterwards. If the answer is the studio, your second campaign costs the same as your first.',
        'Ask for the credit ceiling per asset and what happens when a batch reaches it. It should halt and ask, not quietly spend past it.',
        'Ask for a date, not a range. A studio with a pipeline can give you one.',
      ],
    },
    {
      t: 'cta',
      href: '/armoury/ai-video-cost-calculator',
      label: 'Open the cost calculator',
      text: 'We publish the arithmetic we use to quote, including the acceptance-rate assumptions per shot type. Free, no email gate.',
    },
    {
      t: 'p',
      text: 'The short version: if somebody quotes you a price per second, they are pricing compute. If they quote you a price per accepted asset, they are pricing production. Only one of those is a number you can put in a plan.',
    },
  ],
  faqs: [
    {
      q: 'How much does an AI video cost in 2026?',
      a: 'Raw model output runs roughly £0.05 to £0.40 per second. A subscription tool is £20 to £250 a month. A freelance operator on a single project is typically £400 to £3,000. A produced studio engagement with locked pipelines, control gates and licensing runs £3,000 to £30,000 and up, depending mostly on how much legible type and how many recurring faces the brief contains.',
    },
    {
      q: 'Why is AI video production so much cheaper than traditional production?',
      a: 'It removes the crew, the location, the equipment hire and the reshoot, which are the line items that make a conventional shoot expensive. It does not remove creative direction, control, revision or legal review, which is why it is not free.',
    },
    {
      q: 'What is cost per accepted asset?',
      a: 'Total spend on a batch divided by the number of assets that actually shipped. It counts the rejected renders. A pipeline that produces sixty frames to ship four has a real unit cost fifteen times its sticker price, and that ratio is the honest measure of a generative production.',
    },
    {
      q: 'Is it cheaper to hire a freelancer than a studio for AI video?',
      a: 'For a single asset, usually yes. For a campaign, usually not, because the consistency lives in the freelancer’s head rather than in a written pipeline, and the cost of the fifth inconsistent variant exceeds the saving on the first.',
    },
    {
      q: 'What makes a generative video brief expensive?',
      a: 'Legible printed type in frame, a human face that has to recur across assets, multiple lighting worlds, regulated claims requiring substantiation, and a requirement that the reusable files be handed over. Any one of those moves the number; three of them together change the shape of the engagement.',
    },
  ],
  terms: ['cost-per-accepted-asset', 'master-plate', 'character-consistency', 'synthetic-media'],
  related: [
    'cost-per-accepted-asset-measuring-generative-production',
    'how-to-brief-an-ai-video-production-studio',
    'how-a-master-plate-works-in-synthetic-product-production',
  ],
  resources: ['ai-video-cost-calculator'],
};
