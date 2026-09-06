import type { Post } from './types';

export const post: Post = {
  slug: 'how-to-choose-an-ai-video-production-agency',
  title: 'How to Choose an AI Video Production Agency: Twelve Questions and the Answers That Disqualify',
  metaTitle: 'How to Choose an AI Video Production Agency (12 Questions to Ask)',
  metaDescription:
    'Twelve questions to ask any generative video studio before you commission, with the answers that should end the conversation: acceptance rates, locks, gates, disclosure, consent, rights and what happens when a model is deprecated.',
  excerpt:
    'Everybody has a showreel. Ask what got cut from it and how many renders it took.',
  published: '2026-08-25',
  author: 'Konstantinos Chatzimichail',
  section: 'Method',
  tags: ['Method', 'Buying', 'Production'],
  keywords: [
    'how to choose an AI video agency',
    'AI video production agency',
    'evaluating AI video studios',
    'questions to ask AI video studio',
    'generative video agency selection',
    'AI production partner',
  ],
  image: 'choosing-an-ai-video-agency',
  imageAlt: 'A studio evaluation sheet, with most rows scored zero.',
  standfirst:
    'A showreel proves a studio can produce one good frame. Twelve questions prove whether they can produce forty consistent ones inside a budget. The disqualifying answers are all versions of not having measured anything.',
  body: [
    {
      t: 'p',
      text: 'Generative production has a specific evaluation problem: the best possible output of a competent operator and the best possible output of a beginner are much closer together than they used to be. Anybody can produce a beautiful frame. The distance between a studio and a person with a subscription shows up at volume, under a deadline, with a client’s legal team reading.',
    },
    {
      t: 'p',
      text: 'These are the questions we would ask, and they are the questions we expect to be asked.',
    },
    { t: 'h2', text: 'On measurement' },
    {
      t: 'ol',
      items: [
        'What is your acceptance rate on the hardest shot type in this brief? A studio that has run this before will have a number and will volunteer that it is lower for legible packaging type than for environment plates. "It depends" without a follow-up means they have not logged it.',
        'What is your cost per accepted asset, and does it include the rejected renders? If the number excludes rejects it is a cost per generation, which flatters everybody and predicts nothing.',
        'Show me a run log from a real campaign. Not a case study — the log. Timestamps, attempt counts, what failed and why.',
      ],
    },
    { t: 'h2', text: 'On consistency' },
    {
      t: 'ol',
      items: [
        'What do you lock, and where is it written? The answer should be a file, not a description of good intentions. Palette, light behaviour, materials, wardrobe rules, lens family.',
        'How do you keep a face or a product identical across forty shots? Reference conditioning, a master plate, a trained identity — any of them is a real answer. "Careful prompting" is not.',
        'What happens when the model you use is deprecated? A studio that has thought about it will describe assets that survive the change. One that has not will look surprised.',
      ],
    },
    { t: 'h2', text: 'On control' },
    {
      t: 'ol',
      items: [
        'What are your gates, and what do they reject automatically? A pipeline without automated rejection is a person watching everything, which is a cost you are paying.',
        'What is your spend ceiling per asset and what happens when a shot hits it? "The run halts and a person decides" is the answer. "We keep going until it works" is a blank cheque with your name on it.',
        'Who signs off, and at what points? Human review at named checkpoints, at any volume, or the volume is the product.',
      ],
    },
    { t: 'h2', text: 'On rights and disclosure' },
    {
      t: 'ol',
      items: [
        'What does your consent file contain for a synthetic presenter? If the answer does not mention a derivative-training clause, the release is a photography release and it does not cover this.',
        'Who decides whether this campaign has to be labelled, and when? The correct answer is "at brief stage, to the strictest of platform policy, advertising code and applicable law". Deciding at delivery is how a campaign gets pulled.',
        'What do we own at the end, and in what form? Frames, plates, project files and the lock file. If the deliverable requires a specific model or account to still exist, you do not own the work.',
      ],
    },
    {
      t: 'note',
      title: 'The single most useful question',
      text: 'Ask to see the shots that did not make the reel, from a job that went well. A studio confident in its process will show you the near misses and explain what the gate caught. One that cannot will change the subject, and that is your answer.',
    },
    { t: 'h2', text: 'The answers that should end the conversation' },
    {
      t: 'table',
      caption: 'Disqualifying answers, and what they actually mean',
      head: ['What they say', 'What it means'],
      rows: [
        ['"We don’t really track acceptance rate."', 'The quote is a guess and the overrun is yours.'],
        ['"Consistency is just about good prompting."', 'They have not run a sequence longer than a few shots.'],
        ['"We can do unlimited revisions."', 'There is no ceiling, so there is no budget control, so there is a number later.'],
        ['"Disclosure is the client’s side."', 'True in part, and a studio that will not advise on it has not read the rules.'],
        ['"We use the latest model."', 'Not a capability. Everyone has the same access.'],
        ['"The AI does most of it."', 'The generation is the cheap part. If that is the pitch, the expensive parts are not being done.'],
      ],
    },
    { t: 'h2', text: 'What a good answer sounds like' },
    {
      t: 'p',
      text: 'Specific, quantified, and slightly unflattering. A studio that tells you the packaging shots will need three times the renders of the environment plates, that the acceptance rate on faces at that shot size is lower than they would like, and that they will halt at a ceiling and come back to you, is describing a process they have actually run.',
    },
    {
      t: 'p',
      text: 'Studios that have not run one describe outcomes. It is a reliable tell, and it costs nothing to check.',
    },
    {
      t: 'cta',
      href: '/supply-drop/production-readiness-scorecard',
      label: 'The readiness scorecard',
      text: 'Twenty-five scored questions across locks, gates, measurement, compliance and handover. Use it on a supplier or on yourself.',
    },
  ],
  faqs: [
    {
      q: 'What should you ask an AI video production agency before hiring them?',
      a: 'Ask for their acceptance rate on the hardest shot type in your brief, their cost per accepted asset including rejected renders, what they lock and where it is written, what their gates reject automatically, what their spend ceiling per asset is, and what you own at the end. Specific numbers indicate a process; outcome descriptions indicate a showreel.',
    },
    {
      q: 'How do you tell a real generative studio from someone with a subscription?',
      a: 'At volume, under a deadline, with legal reading. Anyone can produce one good frame. Ask to see the near misses from a job that went well and what the gate caught — a studio confident in its process will show you, and one without a process will change the subject.',
    },
    {
      q: 'What does "unlimited revisions" mean in generative production?',
      a: 'That there is no spend ceiling, and therefore no budget control. Generative production fails financially in a specific way: a nearly-right shot invites one more attempt, each attempt is cheap, and forty of them are not. A ceiling that halts the run and escalates is a control; a promise of unlimited attempts is a number arriving later.',
    },
    {
      q: 'Who is responsible for AI disclosure, the brand or the studio?',
      a: 'Legal responsibility usually sits with the advertiser, but a studio that will not advise on it has not read the rules and will not have designed the asset to carry a label. The decision belongs at brief stage, to the strictest of platform policy, advertising code and applicable law.',
    },
    {
      q: 'What should you own at the end of a generative production?',
      a: 'Frames, plates, project files and the lock file. If the deliverable depends on a specific model, account or seed still existing, you have bought access rather than assets.',
    },
  ],
  terms: ['acceptance-rate', 'gate', 'credit-ceiling', 'cost-per-accepted-asset', 'run-log', 'disclosure'],
  related: [
    'how-to-brief-an-ai-video-production-studio',
    'cost-per-accepted-asset-measuring-generative-production',
    'what-does-generative-video-production-cost-2026',
  ],
  resources: ['production-readiness-scorecard', 'synthetic-media-production-brief-template'],
};
