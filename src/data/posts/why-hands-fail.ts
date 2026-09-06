import type { Post } from './types';

export const post: Post = {
  slug: 'why-hands-still-fail-in-ai-video',
  title: 'Why Hands Still Fail, and How to Frame Around Them',
  metaTitle: 'Why AI Still Gets Hands Wrong (And How to Shoot Around It)',
  metaDescription:
    'Hands remain the most reliable generative failure because they are high-articulation, self-occluding and something every viewer is expert in. Why the problem is structural, and the eight compositional moves that avoid it.',
  excerpt:
    'It is not that models cannot draw hands. It is that hands are the hardest object in the frame and the one everybody checks.',
  published: '2026-06-16',
  author: 'Konstantinos Chatzimichail',
  section: 'Craft',
  tags: ['Craft', 'Production'],
  keywords: [
    'AI hands wrong',
    'why AI cannot draw hands',
    'AI video hand artifacts',
    'fixing AI hands',
    'AI image hand problems',
    'framing around AI failures',
  ],
  image: 'why-hands-fail',
  imageAlt: 'A sequence of hands from generated frames, each failing in a different way.',
  standfirst:
    'Hands fail because they have more articulated joints than anything else in a typical frame, they occlude themselves constantly, and every viewer has spent their life looking at them. The reliable production answer is compositional: frame so the hardest hand configurations are not in shot.',
  body: [
    {
      t: 'p',
      text: 'Hands have been the standing joke about generative imagery for years, and the joke has outlived its accuracy: a still of a hand at rest is now usually fine. What has not changed is hands in motion, hands interacting with objects, and hands doing anything specific — which is, unfortunately, most of what hands do in advertising.',
    },
    { t: 'h2', text: 'Why it is structurally hard' },
    {
      t: 'ul',
      items: [
        'Articulation. A hand has more independently moving joints than the rest of a body’s visible structure combined, and the valid configurations are a small subset of the possible ones.',
        'Self-occlusion. Fingers hide other fingers constantly, so the model is inferring geometry it cannot see from geometry it can, at every frame.',
        'Variety in training data. Hands appear at every scale, angle and degree of blur, in far more configurations than faces, which means less consistent signal per configuration.',
        'Expertise in the viewer. Everybody has looked at hands their entire life and can detect a wrong one instantly without being able to say what is wrong.',
        'No partial credit at the extremities. A slightly wrong shoulder is invisible; a sixth finger is the only thing in the frame.',
      ],
    },
    {
      t: 'p',
      text: 'In video it compounds, because the hand has to be correct in every frame and consistent between them. Extremity drift is typically the third thing to degrade as a clip runs on, and it is the first one an untrained viewer reliably catches.',
    },
    { t: 'h2', text: 'The eight compositional moves' },
    {
      t: 'p',
      text: 'The technique is the same one physical production has always used for something difficult: do not put it in the shot.',
    },
    {
      t: 'ol',
      items: [
        'Crop at the wrist. A frame that ends above the hands cannot have wrong hands, and it is a legitimate composition rather than an evasion.',
        'Put hands behind an object. A hand on the far side of a cup, a counter or a laptop is half a hand.',
        'Hands at rest and together. Interlocked or resting hands present a simpler silhouette than a hand in mid-gesture.',
        'Motion blur. A hand moving fast enough to blur is a hand that does not have to resolve.',
        'Out of focus. A hand in the near foreground at f/2 is a shape, and shapes do not have finger counts.',
        'Small in frame. Fewer pixels per hand is fewer pixels in which to be wrong.',
        'Gloves. Genuinely effective, and appropriate in more categories than people assume: food, industry, medical, laboratory, cold weather.',
        'Cut before the gesture completes. The end of a gesture is where the configuration is most specific and most likely to fail.',
      ],
    },
    {
      t: 'note',
      title: 'The one to reach for first',
      text: 'Crop at the wrist. It costs nothing, requires no post, and removes the failure entirely. A generative shot list should be reviewed once with the single question: which of these shots needs the hands, actually?',
    },
    { t: 'h2', text: 'When you genuinely need the hand' },
    {
      t: 'p',
      text: 'Product interaction is the case where none of the above helps, because the hand holding the product is the shot. Three approaches, in order of cost:',
    },
    {
      t: 'table',
      caption: 'Getting a usable hand-on-product shot',
      head: ['Approach', 'Cost', 'When'],
      rows: [
        ['Generate many, gate hard', 'Moderate', 'The shot is achievable but the acceptance rate is low. Budget the attempts explicitly.'],
        ['Inpaint the hand into an approved plate', 'Moderate', 'The rest of the frame is right and only the hand failed.'],
        ['Film the hand, composite into a generated world', 'Higher', 'When the hand has to do something specific. Two hours and a phone camera is often enough.'],
      ],
    },
    {
      t: 'p',
      text: 'The third is under-used and frequently the cheapest overall. A hand, a product and a piece of neutral background, filmed properly, then composited into a generated environment, removes the least reliable element from the least reliable process.',
    },
    { t: 'h2', text: 'The gate' },
    {
      t: 'p',
      text: 'Whatever the approach, every frame containing a visible hand gets checked at full size before it goes anywhere. Count the fingers, check the joint directions, check the thumb is on the correct side, and check the hand connects to a plausible wrist.',
    },
    {
      t: 'p',
      text: 'In video, do this on the first frame, the last frame and one in the middle at minimum. A hand that is correct at the start and wrong at the end is the standard failure, and it is invisible at playback speed.',
    },
    {
      t: 'cta',
      href: '/supply-drop/generative-film-shot-consistency-checklist',
      label: 'The consistency checklist',
      text: 'The extremity gate, with the pass criteria and the rule about never patching a frame into passing.',
    },
  ],
  faqs: [
    {
      q: 'Why does AI still get hands wrong?',
      a: 'Because hands have more articulated joints than anything else in a typical frame, they occlude themselves constantly so geometry has to be inferred, they appear in far more configurations than faces in training data, and every viewer is an expert in them. There is also no partial credit: a sixth finger is the only thing in the frame.',
    },
    {
      q: 'How do you avoid AI hand problems?',
      a: 'Compositionally. Crop at the wrist, put hands behind an object, keep them at rest, use motion blur or shallow focus, keep them small in frame, use gloves where the category allows, and cut before a gesture completes. Cropping at the wrist costs nothing and removes the failure entirely.',
    },
    {
      q: 'What do you do when the shot needs a hand holding the product?',
      a: 'Generate many and gate hard with the attempts budgeted explicitly, inpaint the hand into an otherwise approved plate, or film the hand against neutral background and composite it into a generated world. The third is under-used and is often the cheapest overall.',
    },
    {
      q: 'Are hands worse in AI video than in images?',
      a: 'Considerably. The hand has to be correct in every frame and consistent between them, and extremity drift is typically the third thing to degrade as a clip runs on — and the first one an untrained viewer reliably catches.',
    },
    {
      q: 'How should you check a frame for hand errors?',
      a: 'At full size, every time: count the fingers, check joint directions, check the thumb is on the correct side, and check the hand connects to a plausible wrist. In video, check the first frame, the last frame and one in the middle — a hand correct at the start and wrong at the end is the standard failure and is invisible at playback speed.',
    },
  ],
  terms: ['drift', 'temporal-coherence', 'gate', 'inpainting', 'acceptance-rate'],
  related: [
    'temporal-coherence-why-ai-video-falls-apart',
    'legible-text-in-ai-generated-images',
    'why-your-ai-video-looks-cheap-and-what-fixes-it',
  ],
  resources: ['generative-film-shot-consistency-checklist'],
};
