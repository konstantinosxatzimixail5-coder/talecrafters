import type { Post } from './types';

export const post: Post = {
  slug: 'the-brand-lock-file',
  title: 'The Brand Lock File: One Paragraph That Holds Forty Shots Together',
  metaTitle: 'The Brand Lock File: How to Keep Generative Work On-Brand at Volume',
  metaDescription:
    'A lock file is the invariant paragraph pasted into every prompt on a job. What belongs in it, what must not, why it is pasted rather than retyped, and how it differs from brand guidelines.',
  excerpt:
    'Brand guidelines describe a look to a person. A lock file states it to a machine, identically, four hundred times.',
  published: '2026-06-05',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Production', 'Method'],
  keywords: [
    'brand consistency AI generation',
    'lock file prompt',
    'generative brand guidelines',
    'consistent AI visual style',
    'prompt invariant block',
    'AI brand kit',
  ],
  image: 'brand-lock-file',
  imageAlt: 'A short paragraph of production language, shown pasted at the head of twelve different prompts.',
  standfirst:
    'The lock file is one paragraph, identical in every prompt on a job, stating what does not change: palette, light behaviour, materials, lens family and the absences. It is pasted, never retyped, because anything retyped drifts and drift across forty shots is what makes a set look like several sets.',
  body: [
    {
      t: 'p',
      text: 'The most common cause of an inconsistent generative campaign is not the model. It is that the person writing shot thirty-one wrote the world description slightly differently from the person who wrote shot four. Nothing dramatic — a colour named differently, a light described from memory, one adjective added. Forty small differences produce a set that nobody can quite defend.',
    },
    {
      t: 'p',
      text: 'The fix is mechanical and boring, which is why it works.',
    },
    { t: 'h2', text: 'What goes in it' },
    {
      t: 'table',
      caption: 'The six lines of a lock file',
      head: ['Line', 'What it states', 'Example'],
      rows: [
        ['Palette', 'Three or four named colours and nothing else', 'Muted teal, sand, near-black. No other saturated colour.'],
        ['Light', 'Source, direction, quality and ratio', 'Hard key from camera left at 45 degrees, no fill, shadow side near black.'],
        ['Time and weather', 'Fixed, for the whole job', 'Late afternoon, low western sun, light haze in every exterior.'],
        ['Materials', 'What surfaces are made of and how they read', 'Unfinished timber, brushed steel, matte paper. No gloss anywhere.'],
        ['Optics', 'Focal length family, stop, and character', 'Anamorphic 40mm look, f/2.8, slight barrel distortion, edge softness.'],
        ['Absence', 'What must never appear', 'No lens flare, no volumetric light beams, no text on any surface, no gloss.'],
      ],
    },
    {
      t: 'p',
      text: 'The absence line does more work than the other five combined and is the one most often missing. A model will happily add a lens flare to shot twenty-two because lens flares are common in the material it learned from, and the only defence is having said not to.',
    },
    { t: 'h2', text: 'What must not go in it' },
    {
      t: 'ul',
      items: [
        'Anything that varies per shot. Subject, action, camera move, shot size. If it changes, it is not a lock.',
        'Mood adjectives. "Cinematic", "premium", "energetic" describe nothing a model can hold constant and consume attention at the front of every prompt.',
        'Brand values. A lock file is a physical specification. Values belong in the brief that produced it.',
        'Anything you are not certain of. A lock is a commitment; a guess pasted four hundred times is a mistake pasted four hundred times.',
      ],
    },
    {
      t: 'note',
      title: 'Paste, never retype',
      text: 'Keep the lock in one file and paste it. Every time somebody retypes it they improve it slightly, and slightly improved is not identical. If it genuinely needs to change, it changes for every shot including the ones already rendered — which is a decision with a cost, and should be taken as one.',
    },
    { t: 'h2', text: 'How it differs from brand guidelines' },
    {
      t: 'p',
      text: 'Brand guidelines are written for a person who will interpret them. They contain hex values, typography rules, tone-of-voice guidance and photographic direction, and they assume judgement in the reader.',
    },
    {
      t: 'p',
      text: 'A lock file assumes no judgement. It is written in production language — the words a gaffer, a DP and an art director use — because those are the words a model trained on film responds to. "Warm and human" is guideline language. "Hard key from camera left, no fill, warm key against cool ambient" is lock language, and only the second one produces the same frame twice.',
    },
    {
      t: 'p',
      text: 'Deriving one from the other is a real piece of work and it is worth doing once per brand rather than once per campaign.',
    },
    { t: 'h2', text: 'Testing a lock file' },
    {
      t: 'ol',
      items: [
        'Generate six deliberately different subjects using only the lock plus a one-line subject. A wide, a portrait, a product, a hand, an interior, an exterior.',
        'Put all six side by side. They should look like one world containing six things.',
        'Anything that differs and should not points at a line that is missing or ambiguous. Add it.',
        'Repeat once. A lock that survives two rounds of this will survive a campaign.',
        'Keep the six as the calibration set, because it is also what you will test the next model against.',
      ],
    },
    { t: 'h2', text: 'It is also the handover' },
    {
      t: 'p',
      text: 'A client who owns the lock file owns the ability to have the work continued by somebody else, which is why it should be a deliverable and why some studios quietly do not offer it.',
    },
    {
      t: 'p',
      text: 'We hand it over, in production language, model-agnostic, with the six calibration frames. It is the difference between delivering assets and delivering a capability, and the second one is a better thing to have sold.',
    },
    {
      t: 'cta',
      href: '/supply-drop/prompting-library',
      label: 'The shot-list prompt',
      text: 'How the lock block sits in front of every shot prompt, in the Prompting Library.',
    },
  ],
  faqs: [
    {
      q: 'What is a lock file in generative production?',
      a: 'One paragraph, identical in every prompt on a job, stating what does not change: palette, light behaviour, time and weather, materials, optics, and the things that must never appear. It is pasted rather than retyped, because retyped text drifts.',
    },
    {
      q: 'What is the difference between a lock file and brand guidelines?',
      a: 'Guidelines are written for a person who will interpret them and assume judgement. A lock file assumes none, and is written in production language — the words a gaffer and a DP use — because that is what a model trained on film responds to. "Warm and human" is guideline language; "hard key from camera left, no fill" is lock language.',
    },
    {
      q: 'What is the most important line in a lock file?',
      a: 'The absence line — what must never appear. A model will add a lens flare to shot twenty-two because lens flares are common in what it learned from, and the only defence is having said not to.',
    },
    {
      q: 'How do you test a lock file?',
      a: 'Generate six deliberately different subjects using only the lock plus a one-line subject: a wide, a portrait, a product, a hand, an interior, an exterior. Put them side by side. They should look like one world containing six things; anything that differs points at a missing or ambiguous line.',
    },
    {
      q: 'Should the client own the lock file?',
      a: 'Yes. A client who owns it can have the work continued by somebody else, which is the difference between delivering assets and delivering a capability. Hand it over model-agnostic and in production language, with the calibration frames.',
    },
  ],
  terms: ['identity-lock', 'register', 'set-specification', 'master-plate', 'naming-convention', 'colour-management'],
  related: [
    'photoreal-or-stylised-choosing-a-register',
    'switching-ai-video-models-without-losing-your-look',
    'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
  ],
  resources: ['synthetic-media-production-brief-template', 'prompting-library'],
};
