import type { Post } from './types';

export const post: Post = {
  slug: 'how-to-choose-an-ai-video-model-2026',
  title: 'How to Choose an AI Video Model in 2026 (Without Rewriting Your Pipeline Next Quarter)',
  metaTitle: 'How to Choose an AI Video Model in 2026: A Production Buyer’s Guide',
  metaDescription:
    'The leaderboard is not the buying criterion. What actually decides which generative video model you should be producing on: reference conditioning, clip length, audio, licensing, throughput and how much of your pipeline moves when the model does.',
  excerpt:
    'Everyone asks which model is best. The useful question is which one your pipeline can survive being wrong about.',
  published: '2026-09-05',
  author: 'Konstantinos Chatzimichail',
  section: 'Production',
  tags: ['Production', 'Models', 'Buying'],
  keywords: [
    'best AI video model 2026',
    'AI video generator comparison',
    'how to choose AI video model',
    'Veo vs Kling vs Seedance',
    'generative video model selection',
    'AI video model for commercial use',
    'AI video model licensing',
  ],
  image: 'choosing-an-ai-video-model',
  imageAlt:
    'A comparison board of generative video model outputs, each annotated with the production constraint it failed.',
  standfirst:
    'Choose a video model on reference conditioning, licensing and throughput, not on a leaderboard position. Quality rankings change every few weeks; the cost of rebuilding a pipeline around a different conditioning method does not, and it is the larger number.',
  body: [
    {
      t: 'p',
      text: 'Every fortnight a new model takes the top of a benchmark and every fortnight somebody asks whether we are switching. The honest answer is that we mostly are not, and the reason is not loyalty. It is that the benchmark measures the thing that matters least to a production schedule.',
    },
    {
      t: 'p',
      text: 'Rankings measure output quality on prompts written to show output quality. What decides whether a model can carry a campaign is a different list, and almost none of it appears in a comparison table.',
    },
    { t: 'h2', text: 'The six things that actually decide it' },
    {
      t: 'table',
      caption: 'The buying criteria, in the order they should be weighted',
      head: ['Criterion', 'The question', 'Why it outranks raw quality'],
      rows: [
        [
          'Reference conditioning',
          'Can it take an image and hold identity from it?',
          'Without it, every shot after the first is a new person. This alone rules out otherwise excellent models.',
        ],
        [
          'Clip length and extension',
          'How long before drift, and can it chain?',
          'Sets your shot-length discipline and therefore your shot count and therefore your budget.',
        ],
        [
          'First and last frame control',
          'Can you pin both ends?',
          'The difference between directing a shot and receiving one.',
        ],
        [
          'Licence and provenance',
          'Is commercial use unambiguous, and what does the output carry?',
          'A client legal team will ask. "The terms of service imply it" is not an answer.',
        ],
        [
          'Throughput and queue',
          'How many concurrent jobs, and what happens at 6pm on a Thursday?',
          'A model that is twenty per cent better and four times slower loses on every deadline.',
        ],
        [
          'Failure shape',
          'How does it go wrong?',
          'Predictable failure is cheaper than occasionally spectacular output, because you can gate for it.',
        ],
      ],
    },
    {
      t: 'p',
      text: 'Notice that quality is not on the list. That is not because it does not matter; it is because above a threshold every serious model clears it, and below that threshold none of the other criteria save you. Quality is a gate, not a ranking.',
    },
    { t: 'h2', text: 'The failure shape argument' },
    {
      t: 'p',
      text: 'This is the one people find counter-intuitive. Given two models, one that produces a brilliant frame seven times in ten and something unusable three times in ten, and one that produces a good frame nine times in ten and a slightly soft frame once, the second is cheaper to produce on even if the first has the higher ceiling.',
    },
    {
      t: 'p',
      text: 'The reason is that a pipeline is a set of gates, and gates catch predictable failures cheaply. A model that fails the same way every time can have a check written for it. A model that fails differently each time needs a human looking at everything, and human attention is the most expensive thing in the building.',
    },
    {
      t: 'cta',
      href: '/glossary/acceptance-rate',
      label: 'Acceptance rate, defined',
      text: 'The number that converts a per-second price into a production budget, and the one most studios do not track.',
    },
    { t: 'h2', text: 'The thing that makes switching expensive' },
    {
      t: 'p',
      text: 'It is never the prompts. Prompt vocabulary transfers reasonably well between models because they were all trained on film and respond to film language. What does not transfer is everything around the prompt.',
    },
    {
      t: 'ul',
      items: [
        'Conditioning method. A pipeline built on image references does not move to a model that only takes text without rebuilding the identity strategy from scratch.',
        'Aspect and duration assumptions. Shot lists are written against a usable clip length. Change the length and the shot count changes and the edit changes.',
        'Your negatives. Negative prompts are written from artefacts you have personally seen, so they are model-specific by construction. A new model means a new empty list and a fortnight of rebuilding it.',
        'Acceptance-rate history. The moment you switch, every budget you have quoted from is describing a different machine.',
        'The lock file. Palette and light behaviour tuned to one model’s response are a starting point, not a spec, on the next one.',
      ],
    },
    {
      t: 'note',
      title: 'The switching rule we use',
      text: 'A new model has to be better on a criterion we are currently losing on, not better in general. "Better in general" is how a studio ends up with six half-built pipelines and no acceptance-rate history on any of them.',
    },
    { t: 'h2', text: 'What to do about deprecation' },
    {
      t: 'p',
      text: 'Models get withdrawn, and 2026 has already provided the case study: a widely adopted model was deprecated and its consumer product closed, which stranded workflows that had been built around its specific behaviour. Anyone who had treated it as infrastructure discovered it was a product.',
    },
    {
      t: 'p',
      text: 'The defence is not to predict which model survives. It is to keep the things that would have to be rebuilt outside the model:',
    },
    {
      t: 'ol',
      items: [
        'Keep the lock file model-agnostic. Write palette, light direction and material behaviour in plain production language, not in phrasing tuned to one model’s quirks.',
        'Keep identity in an asset, not in a checkpoint. A set of reference frames survives a model change. A fine-tune does not.',
        'Keep the shot list in beats, not in generations. A beat can be produced by anything; a generation ID cannot be reproduced anywhere else.',
        'Log acceptance rate per model, not per campaign, so that when you do move you can quote from the new machine rather than the old one.',
        'Never let a client deliverable depend on a model still existing. Deliver the frames, not the recipe.',
      ],
    },
    { t: 'h2', text: 'The one benchmark worth running yourself' },
    {
      t: 'p',
      text: 'Take the three hardest shots from a brief you actually ran. Not showreel shots: the ones with legible packaging type, a recurring face, and a hand doing something. Run twenty attempts of each on any model you are considering, and count how many you would have sent.',
    },
    {
      t: 'p',
      text: 'That number is your acceptance rate on that model for that class of work, and it is worth more than every comparison article published this year, including this one. It takes an afternoon and it is the only figure that describes your work rather than somebody else’s prompt.',
    },
    {
      t: 'cta',
      href: '/supply-drop/prompting-library',
      label: 'The Prompting Library',
      text: 'The scaffolds we test a new model against, including the shot-list lock block that has to survive a switch.',
    },
  ],
  faqs: [
    {
      q: 'What is the best AI video model in 2026?',
      a: 'There is no single answer, and the leaderboard position is the wrong criterion. Choose on reference conditioning, usable clip length and extension, first-and-last-frame control, commercial licensing clarity, throughput under load, and how predictably the model fails. Above a quality threshold every serious model clears, those six decide production cost.',
    },
    {
      q: 'How often should you switch AI video models?',
      a: 'Only when a new model is better on a criterion you are currently losing on. Switching for general improvement costs you your negative-prompt list, your acceptance-rate history, and a rebuilt identity strategy — usually more than the improvement is worth.',
    },
    {
      q: 'Why does a lower-quality model sometimes cost less to produce on?',
      a: 'Because predictable failure can be gated automatically and unpredictable failure cannot. A model that fails the same way every time lets you write a check for it; one that fails differently each time requires a person to look at everything, which is the most expensive resource in a studio.',
    },
    {
      q: 'What happens when an AI video model is deprecated?',
      a: 'Workflows built around its specific behaviour stop working. The defence is to keep everything that would need rebuilding outside the model: a model-agnostic lock file, identity held as reference assets rather than a fine-tune, a shot list written in beats, and deliverables that are frames rather than recipes.',
    },
    {
      q: 'Do prompts transfer between AI video models?',
      a: 'The vocabulary transfers because most video models respond to film language. What does not transfer is the negative-prompt list, which is built from artefacts you saw in a specific model, and any conditioning strategy tied to how that model accepts references.',
    },
    {
      q: 'How do you benchmark an AI video model for your own work?',
      a: 'Take the three hardest shots from a brief you have actually run — legible type, a recurring face, a hand doing something — run twenty attempts of each, and count how many you would have sent. That acceptance rate describes your work rather than somebody else’s demo prompt.',
    },
  ],
  terms: ['acceptance-rate', 'reference-image', 'temporal-coherence', 'first-last-frame', 'model-licence'],
  related: [
    'temporal-coherence-why-ai-video-falls-apart',
    'trained-identity-vs-lora-vs-reference-image',
    'what-does-generative-video-production-cost-2026',
  ],
  resources: ['production-readiness-scorecard', 'ai-video-cost-calculator'],
};
