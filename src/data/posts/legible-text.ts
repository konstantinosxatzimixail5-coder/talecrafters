import type { Post } from './types';

export const post: Post = {
  slug: 'legible-text-in-ai-generated-images',
  title: 'Legible Text in AI Images: Why It Fails and What to Do Instead',
  metaTitle: 'Legible Text in AI-Generated Images: Why It Fails and the Fix',
  metaDescription:
    'Why generative models still reconstruct type unreliably, why a nearly-correct word is worse than an obviously wrong one, and the plate-and-composite method that removes the problem entirely.',
  excerpt:
    'A wrong word on a label is not an aesthetic problem. It is a legal one, and there is no partial credit.',
  published: '2026-06-30',
  author: 'Konstantinos Chatzimichail',
  section: 'Craft',
  tags: ['Craft', 'Production', 'Post'],
  keywords: [
    'AI generated text in images',
    'legible text AI image',
    'AI cannot spell',
    'product label AI image',
    'text in AI video',
    'typography generative AI',
  ],
  image: 'legible-text',
  imageAlt: 'A product label rendered four times, each with a different plausible misspelling.',
  standfirst:
    'Type fails in generative images because letterforms are learned as texture rather than as symbols, so the model produces something shaped like the word. The production answer is not a better prompt: generate the plate without the type and set it in post, which is also how the shot should have been built.',
  body: [
    {
      t: 'p',
      text: 'Every other generative failure has degrees. A slightly wrong shadow is usable, a slightly wrong material is usable, a slightly wrong face at a small size is often usable. Type has no degrees. The word is right or the frame is dead, and "nearly right" is the most dangerous outcome because it survives a quick review and reaches a client.',
    },
    { t: 'h2', text: 'Why it happens' },
    {
      t: 'p',
      text: 'A model trained on images learns letterforms the way it learns brickwork: as a texture with statistical regularities. It has learned that a label carries marks of a certain density, that certain shapes follow certain other shapes, and that the whole thing has a particular rhythm. What it has not learned is that the marks are symbols in a system where substituting one changes the meaning entirely.',
    },
    {
      t: 'p',
      text: 'That is why the failures look the way they do. Not gibberish — plausible near-words, correct letter frequencies, believable kerning. It is producing something shaped like the word, and shape is what it was optimising.',
    },
    { t: 'h2', text: 'What improves it, and by how much' },
    {
      t: 'table',
      caption: 'Interventions ranked by how much they actually help',
      head: ['Intervention', 'Effect', 'Notes'],
      rows: [
        ['Fewer characters', 'Large', 'One short word is usually achievable. A sentence is not.'],
        ['Flat, front-on surface', 'Large', 'Curvature, perspective and reflection each multiply the failure rate.'],
        ['Larger in frame', 'Moderate', 'More pixels per glyph is more room to be right.'],
        ['Naming the typeface character', 'Moderate', '"Heavy condensed sans" constrains the shapes it is choosing between.'],
        ['Saying "no other text in frame"', 'Moderate', 'Prevents invented signage appearing elsewhere, which is a separate failure.'],
        ['Higher resolution', 'Small', 'Widely recommended, mostly does not help.'],
        ['Regenerating repeatedly', 'None in expectation', 'The success rate does not improve with attempts. It is the same die.'],
      ],
    },
    {
      t: 'p',
      text: 'The last row is the expensive one. Teams burn very large amounts of budget re-rolling a packshot in the belief that the next attempt is more likely. It is not; each attempt is independent, and a shot with a low base rate stays at that rate however frustrated you become.',
    },
    { t: 'h2', text: 'The method that actually works' },
    {
      t: 'ol',
      items: [
        'Generate the plate with the type deliberately absent. Ask for a blank label, a plain surface, an unmarked panel. Blank surfaces have a very high acceptance rate.',
        'Set the real type in post, using the actual brand typeface, at the correct size, with the correct tracking.',
        'Match the surface: warp the type to the geometry, match the lighting falloff across it, add the same grain and the same slight defocus the surrounding area has.',
        'Match the wear. Real printed type on a real object has edge irregularity. Perfectly clean type on a slightly imperfect surface reads as a sticker.',
        'Check at 100 per cent and at thumbnail size. The join shows at one or the other.',
      ],
    },
    {
      t: 'note',
      title: 'This is not a workaround',
      text: 'Compositing type is how packaging photography has been finished for thirty years. Generating the plate and setting the type is not a concession to the model’s limitation, it is the correct build order, and it happens to also be cheaper.',
    },
    { t: 'h2', text: 'The video case, which is worse' },
    {
      t: 'p',
      text: 'In motion, type has to be right in every frame and consistent between them, which multiplies the problem by the frame count. A label that reads correctly at frame one and mutates at frame forty is the most common product-shot failure there is, and it is invisible on a first playback at speed.',
    },
    {
      t: 'p',
      text: 'The checks: step through the clip frame by frame across the type, and pull the first and last frames side by side. Anything that has changed is a shot that will be caught by somebody else later.',
    },
    {
      t: 'p',
      text: 'The fix is the same and harder: generate the move on a blank label and track the type on in post. It is more work than a still and it is still less work than forty attempts.',
    },
    { t: 'h2', text: 'When to accept generated type' },
    {
      t: 'ul',
      items: [
        'Background signage that is deliberately out of focus and not readable. State that it must be illegible rather than hoping.',
        'Foreign-language texture where no viewer is expected to read it, provided you are certain it does not accidentally say something.',
        'A single very short word, front-on, large, in a register that is not photoreal.',
        'Never on a product label, a legal line, a price, a claim, or anything a regulator could read.',
      ],
    },
    {
      t: 'cta',
      href: '/glossary/acceptance-rate',
      label: 'Why type destroys your acceptance rate',
      text: 'The number that explains why a shot with legible packaging costs three or four times what an environment plate does.',
    },
  ],
  faqs: [
    {
      q: 'Why can AI image models not spell?',
      a: 'Because letterforms are learned as texture rather than as symbols. The model has learned the density, rhythm and shape statistics of type, not that substituting one glyph changes the meaning — so it produces something shaped like the word rather than the word.',
    },
    {
      q: 'Does regenerating help get text right?',
      a: 'No. Each attempt is independent, so the success rate does not improve with frustration. Teams burn large budgets re-rolling packshots on the assumption that the next one is more likely, and it is not.',
    },
    {
      q: 'What is the right way to get legible text in a generated image?',
      a: 'Generate the plate with the type deliberately absent — a blank label has a very high acceptance rate — then set the real typeface in post, warped to the surface geometry, with matched lighting falloff, grain, defocus and edge wear.',
    },
    {
      q: 'Why is text harder in AI video than in images?',
      a: 'Because it has to be correct in every frame and consistent between them. A label that reads correctly at frame one and mutates by frame forty is the commonest product-shot failure, and it is invisible on a first playback at speed.',
    },
    {
      q: 'When is generated text acceptable?',
      a: 'Deliberately illegible background signage, texture nobody is expected to read, and single very short words front-on and large in a non-photoreal register. Never on a product label, a legal line, a price or a claim.',
    },
  ],
  terms: ['acceptance-rate', 'master-plate', 'inpainting', 'gate', 'substantiation'],
  related: [
    'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
    'how-a-master-plate-works-in-synthetic-product-production',
    'why-hands-still-fail-in-ai-video',
  ],
  resources: ['generative-film-shot-consistency-checklist'],
};
