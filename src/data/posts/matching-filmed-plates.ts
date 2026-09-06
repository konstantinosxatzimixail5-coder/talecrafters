import type { Post } from './types';

export const post: Post = {
  slug: 'matching-generative-footage-to-filmed-plates',
  title: 'Matching Generative Footage to Filmed Plates',
  metaTitle: 'How to Match AI Footage to Real Filmed Plates',
  metaDescription:
    'A hybrid shoot puts generated and filmed material in the same cut. The eight properties that have to match, which ones to fix on set, which in the render, and which only in the grade.',
  excerpt:
    'The mismatch is never resolution. It is lens character, black level and how the light falls off, and two of those have to be decided before anybody shoots.',
  published: '2026-06-12',
  author: 'Konstantinos Chatzimichail',
  section: 'Craft',
  tags: ['Craft', 'Post', 'Production'],
  keywords: [
    'matching AI footage to film',
    'hybrid AI live action',
    'compositing AI video',
    'AI plates real footage',
    'grading AI footage',
    'lens matching AI',
  ],
  image: 'matching-filmed-plates',
  imageAlt: 'A split frame, filmed on one side and generated on the other, matched at the join.',
  standfirst:
    'Eight properties decide whether generated and filmed material read as one piece: light direction, colour temperature, black level, lens character, depth of field, grain, motion blur and camera height. Three must be decided on set, three in the render, and only two are genuinely a grade problem.',
  body: [
    {
      t: 'p',
      text: 'Almost every serious generative job is now a hybrid. Something real gets filmed — a product, a face, a hand, a location — and the rest is generated around it. The join is where the work is, and the join fails for a small number of reasons that are entirely predictable.',
    },
    { t: 'h2', text: 'The eight properties, and where each is solved' },
    {
      t: 'table',
      caption: 'What has to match, and at which stage',
      head: ['Property', 'Fix it', 'What goes wrong'],
      rows: [
        ['Light direction', 'On set and in the lock file', 'The single unfixable mismatch. No grade moves a key light.'],
        ['Camera height and lens angle', 'On set', 'A shot from chest height cannot be matched by one from eye height.'],
        ['Depth of field', 'On set and in the render', 'Different focus falloff reads instantly as two cameras.'],
        ['Lens character', 'In the render', 'Distortion, vignette and edge softness. Nameable in a prompt.'],
        ['Motion blur', 'In the render', 'Shutter behaviour has to match or the movement feels different.'],
        ['Colour temperature', 'In the grade', 'Genuinely a grade problem, and the easiest of the eight.'],
        ['Black level and contrast', 'In the grade', 'Generated blacks are frequently lifted. Match the toe of the curve.'],
        ['Grain', 'In the grade', 'One grain layer over everything at the end, never per clip.'],
      ],
    },
    {
      t: 'p',
      text: 'The top two rows are the ones that decide whether a hybrid shoot is possible at all, and both have to be settled before anybody films anything. That is an unusual demand on a schedule and it is not negotiable.',
    },
    { t: 'h2', text: 'What to capture on set for the generative half' },
    {
      t: 'p',
      text: 'Twenty minutes of reference capture saves a week of matching. The list is short and almost never done:',
    },
    {
      t: 'ol',
      items: [
        'A grey ball and a chrome ball in the key light, at the subject’s position. This is the light direction and quality, recorded.',
        'A colour chart in the same light, shot on the same camera at the same settings.',
        'A clean plate of the background with nothing in it.',
        'A lens grid, or failing that, a straight-edged object at the frame edge, so distortion is measurable.',
        'The camera height, the focal length and the stop, written down. Not remembered.',
        'A short clip of the empty set with the camera doing the intended move, which gives you the motion character to match.',
      ],
    },
    {
      t: 'note',
      title: 'The single most valuable item',
      text: 'The two balls. Light direction is the one mismatch no editorial or grading technique conceals, and a chrome ball tells you where every source was, precisely, months later when nobody remembers.',
    },
    { t: 'h2', text: 'Prompting to match filmed material' },
    {
      t: 'p',
      text: 'The lock block for a hybrid job carries more than a normal one, and it is written from the on-set notes rather than from taste.',
    },
    {
      t: 'quote',
      text: 'Every shot: 35mm equivalent, f/2.8, camera at chest height. Hard key from camera left at roughly 45 degrees, no fill, shadow side near black. Late afternoon, warm key against cool ambient. Slight barrel distortion and edge softness. Shallow depth of field, background falls off within two metres. Fine grain throughout.',
    },
    {
      t: 'p',
      text: 'Every clause in that block corresponds to something measured on set. That is the difference between a lock file that produces matched material and one that produces material that looks nice separately.',
    },
    { t: 'h2', text: 'The grade approach' },
    {
      t: 'p',
      text: 'Grade to a single reference, never to each other. Pick one filmed frame as the target and pull every generated clip to it. Matching clip two to clip one and clip three to clip two accumulates error, and by clip nine the sequence has drifted somewhere nobody chose.',
    },
    {
      t: 'p',
      text: 'Then put one grain layer, one halation and one very slight lens artefact over the entire finished piece. A shared surface does more for perceived coherence than any amount of per-clip work, because it gives the audience a single physical explanation for everything they are looking at.',
    },
    { t: 'h2', text: 'What to film rather than generate' },
    {
      t: 'ul',
      items: [
        'The product, if its appearance is the claim. Always.',
        'Hands doing something specific, which is two hours and a phone camera against a neutral background.',
        'Anything with legible type on it.',
        'A long unbroken take, where the value of the shot is that it did not cut.',
        'A face that has to carry a performance rather than a look.',
      ],
    },
    {
      t: 'p',
      text: 'And what to generate: environments, weather, scale, crowds at distance, anything unbuildable, and everything that would have been a location scout, a travel day and a permit.',
    },
    {
      t: 'cta',
      href: '/glossary/colour-management',
      label: 'Colour management, defined',
      text: 'Why generated and filmed material drift apart in the grade, and the reference-frame discipline that stops it.',
    },
  ],
  faqs: [
    {
      q: 'How do you match AI-generated footage to real filmed footage?',
      a: 'Eight properties have to agree: light direction, camera height and lens angle, depth of field, lens character, motion blur, colour temperature, black level and grain. Light direction and camera height must be settled before anyone films; lens character and motion blur belong in the render; only temperature, black level and grain are genuinely grade problems.',
    },
    {
      q: 'What should you capture on set for a hybrid AI shoot?',
      a: 'A grey ball and a chrome ball in the key light at the subject’s position, a colour chart in the same light, a clean plate, a lens grid or straight edge at frame edge, the camera height, focal length and stop written down, and a short clip of the empty set with the intended camera move.',
    },
    {
      q: 'Which mismatch between AI and filmed footage cannot be fixed?',
      a: 'Light direction. No grade, cut or transition moves a key light, which is why a chrome ball on set is the single most valuable twenty seconds of a hybrid shoot — it records precisely where every source was.',
    },
    {
      q: 'Should you grade AI clips to each other or to a reference?',
      a: 'To a single reference, always. Matching clip two to clip one and clip three to clip two accumulates error, and by the ninth clip the sequence has drifted somewhere nobody chose. Pick one filmed frame as the target and pull everything to it.',
    },
    {
      q: 'What should be filmed rather than generated?',
      a: 'The product if its appearance is the claim, hands doing something specific, anything carrying legible type, a long unbroken take where not cutting is the point, and a face that has to carry a performance. Generate environments, weather, scale, distant crowds and anything that would have been a location scout and a permit.',
    },
  ],
  terms: ['colour-management', 'master-plate', 'phantom-set', 'depth-map', 'hero-frame', 'proxy-render'],
  related: [
    'cutting-ai-video-the-editorial-rules',
    'how-a-master-plate-works-in-synthetic-product-production',
    'why-your-ai-video-looks-cheap-and-what-fixes-it',
  ],
  resources: ['generative-film-shot-consistency-checklist'],
};
