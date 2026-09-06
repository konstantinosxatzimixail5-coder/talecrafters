import type { Post } from './types';

export const post: Post = {
  slug: 'switching-ai-video-models-without-losing-your-look',
  title: 'Switching AI Video Models Without Losing Your Look',
  metaTitle: 'How to Switch AI Video Models Without Losing Brand Consistency',
  metaDescription:
    'A migration procedure for moving a campaign or a brand look from one generative video model to another: what to port, what to rebuild, what to re-shoot, and the calibration set that tells you when you have arrived.',
  excerpt:
    'A model change is a re-grade, not a re-render. Treat it as the second and you will pay for the campaign twice.',
  published: '2026-09-02',
  author: 'Konstantinos Chatzimichail',
  section: 'Production',
  tags: ['Production', 'Systems', 'Method'],
  keywords: [
    'switching AI video models',
    'AI model migration',
    'brand consistency AI video',
    'AI video model deprecated',
    'porting prompts between models',
    'generative pipeline migration',
  ],
  image: 'switching-models',
  imageAlt:
    'Two sets of frames of the same subject, produced by different models, aligned side by side for comparison.',
  standfirst:
    'Moving a look between generative video models is a calibration problem, not a prompting problem. Build a fixed calibration set of six shots, match them on the new model first, and only then touch the campaign. Everything else is guessing at scale.',
  body: [
    {
      t: 'p',
      text: 'Sooner or later the model you built on gets deprecated, gets worse, gets expensive, or gets beaten badly enough that staying is indefensible. When it happens mid-campaign, the instinct is to re-run the shot list on the new model and see what comes back. That instinct costs a week.',
    },
    {
      t: 'p',
      text: 'The reason is that a look is not stored in the prompts. It is stored in the interaction between the prompts and one specific model’s response to them, and the second half of that pair has just been replaced.',
    },
    { t: 'h2', text: 'The calibration set' },
    {
      t: 'p',
      text: 'Before touching anything in the campaign, build six shots that between them exercise everything the brand look depends on. Ours are always the same shape:',
    },
    {
      t: 'ol',
      items: [
        'A face in the key light, mid shot. Tests identity, skin rendering and light direction at once.',
        'The product with legible type, static. Tests the thing most likely to disqualify a frame.',
        'A wide with the palette in it. Tests colour and the way the model handles distance.',
        'A hand doing something. Tests the failure everybody sees.',
        'A moving camera on a static subject. Tests motion coherence without confounding it with performance.',
        'A texture close-up. Tests the material vocabulary the brand look actually rests on.',
      ],
    },
    {
      t: 'p',
      text: 'Match those six on the new model. Not approximately: side by side at full size, with the old frame and the new one in the same viewer. When all six match, the migration is done and the campaign can be re-run mechanically. Until they match, every campaign shot you generate is a shot you will generate again.',
    },
    { t: 'h2', text: 'What ports, what rebuilds, what dies' },
    {
      t: 'table',
      caption: 'Migration inventory',
      head: ['Asset', 'What happens to it', 'Effort'],
      rows: [
        ['Beat sheet and shot list', 'Ports unchanged. It was never model-specific.', 'None'],
        ['Lock file (palette, light, materials)', 'Ports as intent, rebuilds as phrasing.', 'Half a day'],
        ['Reference frames for identity', 'Port directly. This is why identity lives in assets.', 'None'],
        ['Prompt scaffolds', 'Port. Order survives; specific adjectives may not.', 'Low'],
        ['Negative prompts', 'Dies. Rebuild from the new model’s own artefacts.', 'Two weeks of logs'],
        ['Fine-tunes and adapters', 'Dies. Not portable, and retraining is a new decision.', 'High'],
        ['Acceptance-rate history', 'Dies as a predictor. Keep it as a record.', 'Rebuild over a batch'],
        ['Approved frames already delivered', 'Unaffected. This is why you deliver frames.', 'None'],
      ],
    },
    {
      t: 'note',
      title: 'The one that surprises people',
      text: 'The negative prompt list is the single most expensive thing to lose, and it is the one nobody budgets for. It represents every artefact you have personally seen and written down, which is a fortnight of production you cannot shortcut by copying somebody else’s list.',
    },
    { t: 'h2', text: 'The mid-campaign case' },
    {
      t: 'p',
      text: 'If half the shots are approved and the model disappears, you have three options and only one of them is usually right.',
    },
    {
      t: 'p',
      text: 'Finish on a different model and hope the cut absorbs the difference. This works only if the two halves never sit adjacent in the edit, which you can rarely guarantee once an editor starts working.',
    },
    {
      t: 'p',
      text: 'Re-run everything on the new model. Expensive, and the correct answer more often than people want it to be, because a sequence that is nearly consistent reads worse than one that is consistently different.',
    },
    {
      t: 'p',
      text: 'Re-run the shots that sit adjacent to new material and grade the rest towards them. This is the compromise that usually survives, and it depends entirely on having the calibration set to grade against.',
    },
    { t: 'h2', text: 'The grade is doing more than you think' },
    {
      t: 'p',
      text: 'A significant portion of what reads as "the model’s look" is contrast curve, colour response and grain, and all three are addressable in post. Before deciding that two models cannot be matched, take a frame from each into a grading tool and try. Frequently the difference collapses to a curve and a small amount of noise.',
    },
    {
      t: 'p',
      text: 'What does not collapse: geometry, material behaviour, and the way faces are constructed. If the new model builds cheekbones differently, no grade will fix it, and the calibration set will tell you that on day one rather than on shot forty.',
    },
    {
      t: 'cta',
      href: '/glossary/colour-management',
      label: 'Colour management, defined',
      text: 'Why generative and filmed material drift apart in the grade, and what to fix it with.',
    },
    { t: 'h2', text: 'Making the next migration cheaper' },
    {
      t: 'ul',
      items: [
        'Keep the calibration set as a permanent artefact. It costs six generations to maintain and it is the fastest evaluation you will ever run on a new model.',
        'Write the lock file in production language rather than in model dialect. "Hard key from camera left, no fill, shadow side near black" survives; a phrasing trick tuned to one sampler does not.',
        'Store references as image assets in the project, not as prompt text describing them.',
        'Version the negative list per model, in the repository, so the two weeks of learning is not in somebody’s notes app.',
        'Never accept a deliverable spec that requires the model to still exist. Frames, plates and project files — not seeds and settings.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How do you switch AI video models without losing consistency?',
      a: 'Build a fixed calibration set of six shots that exercise identity, legible type, palette, hands, camera motion and texture. Match all six on the new model side by side at full size before touching the campaign. Once they match, the rest of the shot list can be re-run mechanically.',
    },
    {
      q: 'What transfers between AI video models and what does not?',
      a: 'Beat sheets, shot lists, reference frames and prompt structure transfer. Negative-prompt lists do not, because they were built from artefacts specific to the old model. Fine-tunes and adapters do not transfer at all, and acceptance-rate history stops being predictive.',
    },
    {
      q: 'What should you do if a model is deprecated mid-campaign?',
      a: 'Usually re-run everything on the new model. A sequence that is nearly consistent reads worse than one that is consistently different. The middle option — re-running only the shots adjacent to new material and grading the rest towards them — works only if you have a calibration set to grade against.',
    },
    {
      q: 'Can colour grading fix the difference between two AI video models?',
      a: 'Often, for contrast, colour response and grain. Never for geometry, material behaviour or the way a model constructs a face. Test on one frame before committing, because the calibration set will tell you on day one what shot forty would tell you a week later.',
    },
    {
      q: 'Why is the negative prompt list so expensive to lose?',
      a: 'Because it is a record of artefacts you personally observed in your own failed renders, which takes roughly a fortnight of production to accumulate. Copying a generic list from elsewhere mostly adds terms that describe nothing the new model was going to do.',
    },
  ],
  terms: ['negative-prompt', 'reference-image', 'colour-management', 'acceptance-rate', 'identity-lock'],
  related: [
    'how-to-choose-an-ai-video-model-2026',
    'trained-identity-vs-lora-vs-reference-image',
    'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
  ],
  resources: ['generative-film-shot-consistency-checklist', 'production-readiness-scorecard'],
};
