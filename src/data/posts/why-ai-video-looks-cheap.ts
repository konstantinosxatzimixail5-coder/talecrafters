import type { Post } from './types';

export const post: Post = {
  slug: 'why-your-ai-video-looks-cheap-and-what-fixes-it',
  title: 'Why Your AI Video Looks Cheap, and What Fixes It',
  metaTitle: 'Why Your AI Video Looks Cheap: Nine Failure Modes and the Fix',
  metaDescription:
    'Nine specific reasons generative video reads as cheap to an audience, from drifting light direction to the eight-second motion tell, with the production fix for each one.',
  excerpt:
    'Audiences cannot name what is wrong with most generative video. They can tell. Here are the nine things they are reacting to.',
  published: '2026-07-09',
  author: 'Konstantinos Chatzimichail',
  section: 'Craft',
  tags: ['Craft', 'Generative video', 'Quality'],
  keywords: [
    'why AI video looks fake',
    'AI video quality problems',
    'generative video failure modes',
    'make AI video look professional',
    'AI video looks cheap',
    'improve AI video quality',
    'AI video production quality',
  ],
  image: 'looks-cheap',
  imageAlt:
    'Nine video frames arranged in a grid, each marked with a diagnostic annotation pointing at a specific visual failure.',
  standfirst:
    'People rarely say "that is AI". They say it looks cheap, or off, or like an advert. What they are reacting to is usually one of nine specific, fixable production failures, and none of them is the model.',
  body: [
    {
      t: 'p',
      text: 'The most useful feedback we ever get on a generative piece is somebody saying they do not like it and being unable to say why. That gap is where the craft lives. An audience registers a violation of physical consistency long before it can name one, and the reaction arrives as a judgement about production value rather than about technology.',
    },
    {
      t: 'p',
      text: 'Nine failures account for almost all of it.',
    },
    { t: 'h2', text: '1. The light direction moves between shots' },
    {
      t: 'p',
      text: 'The most damaging and the most common. Shot one is lit from camera-left, shot three from camera-right, and the audience reads the sequence as two different places, or two different times, or a mistake.',
    },
    {
      t: 'p',
      text: 'Fix: write one key direction, as a clock position, before any generation. Hold it across the set. A shot that violates it is regenerated, not graded.',
    },
    { t: 'h2', text: '2. Everything is at the same distance' },
    {
      t: 'p',
      text: 'Generative output gravitates towards a comfortable medium shot. A sequence of nine medium shots has no rhythm, so it reads as a slideshow with motion.',
    },
    {
      t: 'p',
      text: 'Fix: shot-size discipline written into the edit before the render. Wide, medium, close, insert. Decide the pattern first and generate to it.',
    },
    { t: 'h2', text: '3. The eight-second motion tell' },
    {
      t: 'p',
      text: 'Most models hold coherent motion for a few seconds and then begin to negotiate with physics. Hair settles wrongly, a hand gains a finger during a gesture, fabric stops obeying gravity. Audiences do not see the drift; they see a clip that feels slightly wrong at the end.',
    },
    {
      t: 'p',
      text: 'Fix: cut before the model gets bored. Generate long, use the first stable segment, and build the piece out of short clips joined by real edits rather than one long generation.',
    },
    { t: 'h2', text: '4. Camera moves with no reason' },
    {
      t: 'p',
      text: 'A slow push-in on everything. Generative tooling makes camera movement free, and free movement gets used on shots that do not need it, so every shot arrives with the same lazy drift.',
    },
    {
      t: 'p',
      text: 'Fix: move the camera when the story moves. Otherwise lock it off. A locked frame among moving ones reads as confidence.',
    },
    { t: 'h2', text: '5. The face changes' },
    {
      t: 'p',
      text: 'Between shot two and shot seven the jawline narrows, the eye spacing shifts, the age moves by four years. This is the one audiences do consciously notice, and the moment they do, nothing else in the piece is believed.',
    },
    {
      t: 'p',
      text: 'Fix: a trained identity rather than a re-uploaded reference, plus a per-shot check against the identity sheet. A drifted face is a dead shot.',
    },
    { t: 'h2', text: '6. Text in frame' },
    {
      t: 'p',
      text: 'A sign, a label, a screen. Even in 2026 the failure rate on legible type is high, and a half-formed letter in the background is the single clearest tell available to a viewer.',
    },
    {
      t: 'p',
      text: 'Fix: compose text out of frame, or composite real type in post. Never leave the model to render a word the audience can read.',
    },
    { t: 'h2', text: '7. Grade applied per shot instead of per set' },
    {
      t: 'p',
      text: 'Each clip was made to look good on its own. Together they have nine slightly different blacks and eight different skin tones.',
    },
    {
      t: 'p',
      text: 'Fix: grade the sequence as one piece, from one reference frame, after the edit is locked. This is ordinary post-production discipline and it is skipped constantly on generative work because the clips arrive looking finished.',
    },
    { t: 'h2', text: '8. Sound treated as an afterthought' },
    {
      t: 'p',
      text: 'The fastest way to make a competent generative sequence feel cheap is a stock music bed and no room tone. Audiences forgive a great deal visually if the space sounds real, and forgive almost nothing if it does not.',
    },
    {
      t: 'p',
      text: 'Fix: room tone under everything, foley on the two or three actions the eye lands on, and music chosen after picture lock rather than before.',
    },
    { t: 'h2', text: '9. Too much happening' },
    {
      t: 'p',
      text: 'Because generation is cheap, sequences accumulate spectacle. Nine dramatic shots in thirty seconds has no shape, and the audience stops tracking anything.',
    },
    {
      t: 'p',
      text: 'Fix: one idea per shot, one point of interest per frame, and at least one deliberately quiet beat. Restraint is legible as budget in a way that spectacle is not.',
    },
    {
      t: 'note',
      title: 'The pattern across all nine',
      text: 'Not one of them is a model limitation. Every one is a production decision that was not made, usually because generative output arrives looking finished and invites you to skip the stage where you decide things.',
    },
    { t: 'h2', text: 'The order to fix them in' },
    {
      t: 'p',
      text: 'If you can only address three: light direction, face consistency, and cutting before the motion tell. Those three account for most of the perceived quality gap. Grade and sound are next, and they are cheap. Everything else is refinement.',
    },
    {
      t: 'cta',
      href: '/armoury/generative-film-shot-consistency-checklist',
      label: 'Download the consistency checklist',
      text: 'These nine as pass-or-fail checks, arranged by production stage so they get applied before the render rather than after. Free, no email gate.',
    },
  ],
  faqs: [
    {
      q: 'Why does AI-generated video look fake?',
      a: 'Usually not for the reason people assume. The most common causes are a key light direction that changes between shots, a face that drifts across the sequence, and clips held past the point where the model stops obeying physics. All three are production failures rather than model limitations.',
    },
    {
      q: 'How long should a generative video clip be?',
      a: 'Short enough that the motion stays coherent, which for most models in 2026 means a few seconds. Generate longer than you need, use the stable opening segment, and assemble the piece from short clips joined by real edits.',
    },
    {
      q: 'How do you stop a face changing between AI video shots?',
      a: 'Build a trained identity from a sheet of stills rather than re-uploading a reference image each session, and check every shot against the identity sheet. A shot where the face has drifted is regenerated rather than graded or retouched.',
    },
    {
      q: 'Should you put text in an AI-generated video frame?',
      a: 'No. Acceptance rates on legible type remain low, and a half-formed word in the background is the clearest tell available to a viewer. Compose text out of frame and composite real type in post.',
    },
    {
      q: 'What single change most improves generative video quality?',
      a: 'Fixing the key light direction across the whole set, written down as a clock position before anything is generated. It costs nothing and it removes the failure audiences react to most strongly without being able to name.',
    },
  ],
  terms: ['temporal-coherence', 'character-consistency', 'master-plate', 'image-to-video'],
  related: [
    'temporal-coherence-why-ai-video-falls-apart',
    'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
    'trained-identity-vs-lora-vs-reference-image',
  ],
  resources: ['generative-film-shot-consistency-checklist'],
};
