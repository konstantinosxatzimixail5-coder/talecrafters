import type { Post } from './types';

export const post: Post = {
  slug: 'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
  title: 'How We Keep a Product Consistent Across 100 AI-Generated Shots',
  metaTitle: 'How to Keep a Product Consistent Across 100 AI-Generated Shots',
  metaDescription:
    'The working method behind a hundred-shot generative product set: one master plate, a written set specification, four mechanical gates and a rule about never patching. With the acceptance rates we actually see.',
  excerpt:
    'Shot one is easy. Shot one hundred is the job. This is the method, including the numbers we plan against.',
  published: '2026-08-17',
  author: 'TaleCrafters',
  section: 'Method',
  tags: ['Method', 'Product', 'Consistency'],
  keywords: [
    'AI product consistency',
    'consistent product across AI shots',
    'generative product photography workflow',
    'AI image consistency workflow',
    'product shot consistency',
    'AI ecommerce photography',
    'consistent AI generated images',
  ],
  image: 'hundred-shots',
  imageAlt:
    'A contact sheet of one hundred product frames, each aligned to the same silhouette, a handful marked with a red rejection cross.',
  standfirst:
    'Consistency across a large generative set is not a prompting problem. It is a lock, a written specification, and four tests applied mechanically to every frame. Plan a hundred-shot set as a three-hundred-render job and budget against that ratio rather than hoping for a better one. The figures below are planning assumptions to start from, not published benchmarks: log your own and replace them after two batches.',
  body: [
    {
      t: 'p',
      text: 'A single beautiful frame proves almost nothing. Any model in 2026 will hand you one. The commercially interesting question is what happens at shot forty, when the client has approved the look and the deadline has stopped being theoretical, and the product has quietly grown a millimetre of shoulder.',
    },
    {
      t: 'p',
      text: 'Here is how we run a hundred-shot set, in the order it happens.',
    },
    { t: 'h2', text: '1. Lock the product before the set exists' },
    {
      t: 'p',
      text: 'The first artefact is a master plate: one clean, flatly lit frame of the product, verified against the packaging artwork at full resolution and then frozen. Nothing gets generated until that file has a version tag on it. Every campaign frame afterwards is generated from the plate rather than from a prompt describing the product.',
    },
    {
      t: 'p',
      text: 'The reason this comes first is arithmetic. A drift discovered at shot four costs one regeneration. The same drift discovered at shot ninety costs eighty-six.',
    },
    { t: 'h2', text: '2. Write the set once, in words' },
    {
      t: 'p',
      text: 'Before any frame, the set becomes a document. It is short and it is boring and it is the reason the hundredth shot belongs to the same world as the first.',
    },
    {
      t: 'ul',
      items: [
        'One key light direction, stated as a clock position. Not "soft natural light".',
        'One colour temperature, stated in kelvin.',
        'One surface and one background material, named.',
        'A lens language: focal length range, and whether depth of field is shallow or deep. Pick one and hold it.',
        'A list of what is never in frame. Hands, competitor products, seasonal props, anything with text on it that is not the product.',
      ],
    },
    {
      t: 'note',
      title: 'Why written and not remembered',
      text: 'A specification in somebody’s head survives until that person is on holiday during the second batch. A specification in a file survives the project.',
    },
    { t: 'h2', text: '3. Batch by difficulty, not by deliverable' },
    {
      t: 'p',
      text: 'The instinct is to render in the order the shot list is written. Do the opposite. Run the hardest shots first: the ones with legible printed type, the ones where the product is held, the ones at an angle the plate does not cover well.',
    },
    {
      t: 'p',
      text: 'Hard shots tell you your real acceptance rate within the first hour, while there is still time to change the approach. Easy shots tell you nothing and make you optimistic, which is worse than useless on a fixed budget.',
    },
    { t: 'h2', text: '4. Gate every frame, mechanically' },
    {
      t: 'p',
      text: 'Four tests, applied to every frame, with a pass and a fail rather than a discussion.',
    },
    {
      t: 'table',
      caption:
        'The four gates, with starting planning assumptions for acceptance. These are a place to begin budgeting, not measured benchmarks: log your own and replace them.',
      head: ['Gate', 'Test', 'Typical pass rate, hard shots', 'Typical pass rate, easy shots'],
      rows: [
        ['Type', 'Every printed word read at 100% against the artwork', '15 to 30%', '70 to 90%'],
        ['Silhouette', 'Overlay on the plate at 40% opacity', '55 to 75%', '85 to 95%'],
        ['Light', 'One key direction and temperature across the set', '80 to 90%', '90 to 98%'],
        ['Claims', 'No invented certification, award, ingredient or number', 'Pass or kill', 'Pass or kill'],
      ],
    },
    {
      t: 'p',
      text: 'Those numbers are the reason a hundred-shot set is a three-hundred-render job. They are also why we agree a credit ceiling per asset before a batch starts: when a shot has consumed its ceiling, the run halts and asks for a decision rather than quietly spending its way to a number nobody approved.',
    },
    { t: 'h2', text: '5. Never patch. Return to the plate.' },
    {
      t: 'p',
      text: 'A failed frame goes back to its source file and is regenerated with a tighter constraint. It does not go to a retoucher. This is the rule people break under deadline pressure and it is the rule that decides whether the set holds.',
    },
    {
      t: 'p',
      text: 'A patched frame passes review in isolation and still does not sit correctly beside its neighbours, because the drift that produced it is still in the pipeline and will produce the next twelve frames the same way. The retouching bill then grows silently until it exceeds the generation budget, which is how a cheap production becomes an expensive one without anyone deciding to make it so.',
    },
    { t: 'h2', text: '6. Review the set, not the shot' },
    {
      t: 'p',
      text: 'The final gate is a contact sheet. All hundred frames, small, on one screen. Drift that is invisible at full size is obvious at thumbnail scale, because the eye stops reading each image and starts comparing them.',
    },
    {
      t: 'p',
      text: 'Anything that jumps out at thumbnail scale gets regenerated even if it passed every individual gate. This catches the class of failure no per-frame test can: the shot that is correct and still wrong.',
    },
    { t: 'h2', text: 'What this costs, honestly' },
    {
      t: 'p',
      text: 'Three hundred renders to ship a hundred assets means your true cost per accepted asset is three times the per-render price, before any human time. Add the operator hours, the plate build and the gating, and a set like this lands where it lands. The number is not the point. The point is that it is knowable in advance, and a studio that has run this method before can tell you the ratio at quote time rather than discovering it at invoice time.',
    },
    {
      t: 'cta',
      href: '/armoury/generative-film-shot-consistency-checklist',
      label: 'Download the shot consistency checklist',
      text: 'The gates above as a printable checklist, with the pass criteria written out per shot type. Free, no email gate.',
    },
  ],
  faqs: [
    {
      q: 'How do you keep a product looking the same across many AI-generated images?',
      a: 'Lock the product as a master plate before generating anything, generate every frame from that plate rather than from a text description, write the set specification once, and test every frame with a silhouette overlay against the plate. Frames that drift are regenerated, never retouched.',
    },
    {
      q: 'How many renders does a hundred-shot generative set actually take?',
      a: 'Plan for around three hundred, though it depends almost entirely on how much legible printed type the shots contain. Type is where acceptance rates collapse, so a set full of readable packaging behaves very differently from one without. Treat any published range as a starting assumption and replace it with your own logged figures after two batches.',
    },
    {
      q: 'Why not just retouch the frames that are nearly right?',
      a: 'Because the drift lives in the generation, not the frame. Retouching fixes one image and leaves the cause in place, so the next batch fails the same way and the retouching bill grows until it exceeds what you saved by going generative.',
    },
    {
      q: 'What is the contact sheet review for?',
      a: 'It catches drift that per-frame testing cannot. At thumbnail scale the eye compares images rather than reading them, so a frame that passed every individual gate but does not belong to the set becomes obvious immediately.',
    },
    {
      q: 'Should hard shots or easy shots be rendered first?',
      a: 'Hard shots first, always. They reveal your real acceptance rate within the first hour, while there is still time to change the approach. Easy shots make you optimistic and tell you nothing about the batch you are about to commit budget to.',
    },
  ],
  terms: ['master-plate', 'character-consistency', 'cost-per-accepted-asset', 'temporal-coherence'],
  related: [
    'how-a-master-plate-works-in-synthetic-product-production',
    'cost-per-accepted-asset-measuring-generative-production',
    'what-does-generative-video-production-cost-2026',
  ],
  resources: ['generative-film-shot-consistency-checklist', 'production-readiness-scorecard'],
};
