import type { Post } from './types';

export const post: Post = {
  slug: 'cutting-ai-video-the-editorial-rules',
  title: 'Cutting AI Video: Nine Editorial Rules That Hide the Seams',
  metaTitle: 'How to Edit AI Video: 9 Rules for Cutting Generated Footage',
  metaDescription:
    'Generated clips do not match each other the way footage from one camera does. Nine edit rules that make independently generated shots read as one piece, including the two transitions you must never use.',
  excerpt:
    'Editing was always the craft that made shots into a sequence. It matters more now, because the shots have less in common than they used to.',
  published: '2026-07-07',
  author: 'Konstantinos Chatzimichail',
  section: 'Craft',
  tags: ['Craft', 'Post', 'Production'],
  keywords: [
    'editing AI video',
    'cutting generated footage',
    'AI video editing tips',
    'AI clip transitions',
    'matching AI video shots',
    'AI video post production',
  ],
  image: 'cutting-ai-video',
  imageAlt: 'An edit timeline with cut points marked on motion peaks.',
  standfirst:
    'Two generated clips share no camera, no lens and no light. Editing is what makes them read as one piece: cut on motion, never dissolve, vary shot size across every join, and let sound carry the continuity the pictures cannot.',
  body: [
    {
      t: 'p',
      text: 'Footage from a single shoot has a great deal in common before an editor touches it — one sensor, one lens set, one grade, one afternoon of light. Independently generated clips share none of that. The picture-to-picture consistency an editor normally inherits has to be manufactured, and the tools for manufacturing it are the oldest ones in the discipline.',
    },
    { t: 'h2', text: 'The nine rules' },
    {
      t: 'ol',
      items: [
        'Cut on motion. A cut during a movement hides the discontinuity between two clips, because the eye is tracking the movement rather than comparing the frames. This is the single highest-value rule and it is a century old.',
        'Never cross-dissolve two generated clips. A dissolve holds both images on screen simultaneously, which is precisely the condition under which an audience compares them and notices they do not match.',
        'Vary shot size across every join. Two similarly sized shots joined together invite comparison. Wide to close does not, because there is nothing to compare.',
        'Take the front of every clip. Coherence degrades as a generation runs on, so the usable portion is at the start. Generate long, cut early.',
        'Never cut two clips from the same generation batch together if they show the same subject at the same size. That is the pairing most likely to reveal identity drift.',
        'Let sound run across the cut. Continuous audio over a picture change is the oldest continuity trick there is and it does more work here than in conventional footage.',
        'Grade to a single target, not to each other. Matching clip two to clip one and clip three to clip two accumulates drift. Set a reference and pull everything to it.',
        'Add one unifying layer over everything: a consistent grain, a slight and consistent lens artefact, a shared halation. It gives the sequence a common surface it did not have.',
        'Cut faster than you want to at first, then find where it can breathe. Long holds are where drift becomes visible, and a held shot has to be earned.',
      ],
    },
    { t: 'h2', text: 'Where the seams actually show' },
    {
      t: 'table',
      caption: 'What an audience notices, and the edit answer',
      head: ['The mismatch', 'When it shows', 'The answer'],
      rows: [
        ['Light direction', 'Immediately, and it is the most damaging one', 'Fix in the prompt, not the edit. No cut hides a key light on the wrong side.'],
        ['Identity drift', 'On a cut between two shots of the same face', 'Insert a different shot between them, or re-render.'],
        ['Grade and contrast', 'Across the whole sequence, as unease', 'One reference frame, everything pulled to it.'],
        ['Grain and sharpness', 'On a dissolve or a slow cut', 'A single grain layer over the finished piece.'],
        ['Motion feel', 'When two clips have different apparent frame rates', 'Match speed, or cut on a movement that masks it.'],
      ],
    },
    {
      t: 'p',
      text: 'The first row is worth dwelling on. Light direction is the one mismatch that no editorial technique conceals, which means it has to be solved before rendering, in the lock file. Everything else on that list is fixable in post; that one is not.',
    },
    {
      t: 'note',
      title: 'The sound budget',
      text: 'Put a disproportionate share of the post budget into sound. Continuous room tone, a consistent music bed and dialogue that runs across picture changes do more for the perceived coherence of a generative sequence than any amount of frame-level work, and cost a fraction of it.',
    },
    { t: 'h2', text: 'The two transitions to avoid' },
    {
      t: 'p',
      text: 'The cross-dissolve, for the reason above. It is not a stylistic preference: it is the one transition that guarantees the comparison you are trying to prevent.',
    },
    {
      t: 'p',
      text: 'And the morph or generated transition between two clips, which draws attention to the join by making it the most interesting thing on screen. It also tends to be the moment where the model invents geometry, which is a strange thing to place at the point of maximum audience attention.',
    },
    { t: 'h2', text: 'What generative footage is unusually good for' },
    {
      t: 'ul',
      items: [
        'Montage, which is short clips joined by cuts and therefore native to the constraint.',
        'Inserts and cutaways, which are short by nature and do not have to match a wide.',
        'Establishing shots with no people in them, which have the highest acceptance rate of anything and hold for longer.',
        'Anything stylised, because a register that is not photoreal has a much wider tolerance for inconsistency.',
      ],
    },
    {
      t: 'p',
      text: 'And what it is bad for: the long unbroken take, the two-hander held in a wide, and anything where the value of the shot is that it did not cut. Those are the shots to film, if they matter enough.',
    },
    {
      t: 'cta',
      href: '/supply-drop/generative-film-shot-consistency-checklist',
      label: 'The consistency checklist',
      text: 'The nine tells, arranged by the stage at which each has to be caught — including the ones only visible on the assembled set.',
    },
  ],
  faqs: [
    {
      q: 'How do you edit AI-generated video so it looks like one piece?',
      a: 'Cut on motion, never cross-dissolve, vary shot size across every join, take the front of every clip, grade everything to a single reference rather than to each other, run sound across the cuts, and add one unifying grain layer over the whole piece.',
    },
    {
      q: 'Why should you never cross-dissolve two AI clips?',
      a: 'Because a dissolve holds both images on screen at once, which is exactly the condition under which a viewer compares them and notices they do not match. Cut on motion instead.',
    },
    {
      q: 'Which mismatch between generated clips cannot be fixed in the edit?',
      a: 'Light direction. No cut, grade or transition conceals a key light on the wrong side of a face. It has to be solved before rendering, in the lock file that every prompt inherits.',
    },
    {
      q: 'Why does sound matter more when editing generative footage?',
      a: 'Because continuous audio across a picture change is the oldest continuity device there is, and generated clips share none of the picture-level consistency an editor normally inherits. Room tone, a consistent bed and dialogue running across cuts buy more perceived coherence per pound than frame-level work.',
    },
    {
      q: 'What is generative footage best suited to in an edit?',
      a: 'Montage, inserts and cutaways, establishing shots with no people, and anything stylised — all of which are short, do not have to match a wide, or have a wide tolerance for inconsistency. It is worst at the long unbroken take, where the value of the shot is that it did not cut.',
    },
  ],
  terms: ['temporal-coherence', 'cutdown', 'colour-management', 'drift', 'montage', 'master-plate'],
  related: [
    'temporal-coherence-why-ai-video-falls-apart',
    'why-your-ai-video-looks-cheap-and-what-fixes-it',
    'matching-generative-footage-to-filmed-plates',
  ],
  resources: ['generative-film-shot-consistency-checklist'],
};
