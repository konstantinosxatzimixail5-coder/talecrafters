import type { Post } from './types';

export const post: Post = {
  slug: 'temporal-coherence-why-ai-video-falls-apart',
  title: 'Temporal Coherence: Why AI Video Falls Apart After a Few Seconds',
  metaTitle: 'Temporal Coherence: Why AI Video Falls Apart After a Few Seconds',
  metaDescription:
    'Why generative video holds together at the start of a clip and negotiates with physics by the end, which failures appear in what order, and the editorial technique that makes the limitation irrelevant.',
  excerpt:
    'The limitation is real and it is not going away this year. The good news is that cinema solved this problem in 1918.',
  published: '2026-06-25',
  author: 'TaleCrafters',
  section: 'Craft',
  tags: ['Craft', 'Generative video', 'Technique'],
  keywords: [
    'temporal coherence AI video',
    'AI video consistency over time',
    'why AI video degrades',
    'AI video morphing artifacts',
    'generative video limitations',
    'AI video clip length',
    'video model coherence',
  ],
  image: 'temporal-coherence',
  imageAlt:
    'A filmstrip in which the early frames are crisp and the later ones progressively dissolve into inconsistency.',
  standfirst:
    'Generative video models hold a scene together for a few seconds and then begin to negotiate with physics. This is structural, not a bug, and the production answer is not a better prompt. It is cutting.',
  body: [
    {
      t: 'p',
      text: 'Watch enough generative video and you learn to feel the moment it starts to go. Nothing obvious happens. The shot simply stops being convincing somewhere around the two-thirds mark, and if you scrub back you find a hand that gained a finger during a gesture, or hair that settled into a shape it could not have reached, or a background object that quietly changed material.',
    },
    {
      t: 'p',
      text: 'That is temporal coherence failing, and it is the defining production constraint of this medium in 2026.',
    },
    { t: 'h2', text: 'Why it happens' },
    {
      t: 'p',
      text: 'A video model is not simulating a world and photographing it. It is producing a sequence of frames that are each plausible and mutually consistent, under a constraint that gets harder to satisfy the further it travels from its conditioning.',
    },
    {
      t: 'p',
      text: 'Early frames are anchored: to the reference, to the first frame, to the prompt. Later frames are anchored mostly to earlier generated frames, so small errors compound. Nothing catastrophic occurs at any single step, which is precisely why the failure is hard to spot. It is a slow drift, not a break.',
    },
    { t: 'h2', text: 'The failure order' },
    {
      t: 'p',
      text: 'The degradation is not random. Things go in roughly this order, which is useful because it tells you what to look for and when.',
    },
    {
      t: 'table',
      caption: 'What breaks, in what order, as a clip runs on',
      head: ['Order', 'What drifts', 'How it reads to a viewer'],
      rows: [
        ['1', 'Fine texture: fabric weave, skin pore, hair strand', 'A slight softening nobody consciously notices'],
        ['2', 'Small rigid objects: jewellery, buttons, cutlery', 'Something in the frame is subtly wrong'],
        ['3', 'Extremities: fingers, feet, ears', 'The obvious tell, and the one people name'],
        ['4', 'Physical logic: gravity, contact, occlusion', 'The shot stops feeling real'],
        ['5', 'Identity: face structure, proportion, age', 'It is no longer the same person'],
        ['6', 'Scene topology: geometry, object persistence', 'The space is incoherent'],
      ],
    },
    {
      t: 'p',
      text: 'The practically important line is three. Extremity failure is the first one an untrained viewer reliably catches, which means your usable clip length is the point just before it, not the point where the model stops producing frames.',
    },
    { t: 'h2', text: 'The technique: cut before the drift' },
    {
      t: 'p',
      text: 'Cinema solved the problem of shots that cannot run forever a century ago, and the solution was editing. Generative production inherits the answer wholesale.',
    },
    {
      t: 'ol',
      items: [
        'Generate longer than you need. Ask for eight seconds when you want three. The cost difference is trivial and it gives you choice.',
        'Take the stable opening. The first portion is anchored hardest and therefore best.',
        'Cut on motion. A cut during a movement hides the discontinuity between two independently generated clips, which is the same reason editors have always cut on action.',
        'Vary shot size across the cut. Two similar-sized shots joined together announce the join. Wide to close does not.',
        'Never cross-dissolve two generative clips. A dissolve holds both images on screen simultaneously, which is exactly the condition under which an audience compares them and notices they do not match.',
      ],
    },
    {
      t: 'note',
      title: 'The reframe',
      text: 'Do not think of clip length as a limitation on your film. Think of it as a shot-length discipline. Most good commercials cut every two to four seconds anyway, and the constraint is pushing you towards a rhythm the format already wanted.',
    },
    { t: 'h2', text: 'What extends usable length, and what does not' },
    {
      t: 'p',
      text: 'Things that genuinely help:',
    },
    {
      t: 'ul',
      items: [
        'Less motion in frame. A slow move on a mostly static subject holds far longer than a subject in complex action.',
        'Fewer articulated objects. Hands are the enemy of length. A composition where hands are out of frame or still buys seconds.',
        'A simpler background. Every additional object is another thing that has to persist.',
        'Locked-off camera. Camera movement compounds with subject movement and halves the budget.',
        'First-and-last-frame conditioning where the model supports it, which re-anchors the end of the clip rather than letting it float.',
      ],
    },
    {
      t: 'p',
      text: 'Things that do not help, despite being widely recommended: adding "consistent, coherent, stable" to the prompt, raising resolution, and generating the same clip repeatedly hoping for a longer stable window. The third one is expensive and the ratio does not improve with attempts.',
    },
    { t: 'h2', text: 'Testing for it before the client does' },
    {
      t: 'p',
      text: 'Two checks, neither of which takes long.',
    },
    {
      t: 'p',
      text: 'First, scrub the clip backwards at speed. Drift that is invisible forwards is obvious in reverse, because the eye is no longer being carried by the motion and starts comparing frames instead.',
    },
    {
      t: 'p',
      text: 'Second, pull the first and last frame and put them side by side at full size. Anything that has changed between them and should not have is your drift, quantified. If the face is different, the clip is dead regardless of how good the middle looks.',
    },
    { t: 'h2', text: 'Where this is going' },
    {
      t: 'p',
      text: 'Coherent windows have lengthened steadily, and models with native scene-extension and reference conditioning now chain generations well past the single-clip limit. The drift has not been eliminated; it has been pushed further out and made more graceful.',
    },
    {
      t: 'p',
      text: 'The production discipline does not change when the window lengthens. Shot-length discipline, cutting on motion, varying shot size and checking the first frame against the last are just editing, and editing was always the part that made sequences work.',
    },
    {
      t: 'cta',
      href: '/glossary/temporal-coherence',
      label: 'Read the glossary definition',
      text: 'The short version, with the related terms and the questions people actually ask about it.',
    },
  ],
  faqs: [
    {
      q: 'What is temporal coherence in AI video?',
      a: 'The degree to which a generated sequence stays consistent with itself over time: the same face, the same objects, the same physical logic from the first frame to the last. It degrades as a clip runs on because later frames are anchored mostly to earlier generated frames, so small errors compound.',
    },
    {
      q: 'Why does AI video get worse towards the end of a clip?',
      a: 'Early frames are anchored to the reference, the first frame and the prompt. Later frames are anchored mainly to what was already generated, so small inconsistencies accumulate. Nothing breaks at any single step, which is why it reads as a slow loss of conviction rather than an obvious error.',
    },
    {
      q: 'How long should an AI video clip be?',
      a: 'Short enough to end before extremity drift begins, which is usually well before the model stops producing frames. Generate longer than you need, take the stable opening portion, and assemble the piece from short clips joined by cuts on motion.',
    },
    {
      q: 'Does adding words like "consistent" to a prompt improve coherence?',
      a: 'No. Neither does raising resolution or regenerating the same clip repeatedly. What genuinely helps is less motion in frame, fewer articulated objects such as hands, a simpler background, a locked-off camera, and first-and-last-frame conditioning where the model supports it.',
    },
    {
      q: 'How do you test a clip for temporal drift?',
      a: 'Scrub it backwards at speed, which stops the eye being carried by the motion and makes drift obvious. Then compare the first and last frames side by side at full size. Anything that changed and should not have is your drift.',
    },
    {
      q: 'Why should you not cross-dissolve two AI-generated clips?',
      a: 'A dissolve holds both images on screen at once, which is exactly the condition under which a viewer compares them and notices they do not match. Cut on motion instead.',
    },
  ],
  terms: ['temporal-coherence', 'character-consistency', 'image-to-video', 'master-plate'],
  related: [
    'why-your-ai-video-looks-cheap-and-what-fixes-it',
    'trained-identity-vs-lora-vs-reference-image',
    'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
  ],
  resources: ['generative-film-shot-consistency-checklist'],
};
