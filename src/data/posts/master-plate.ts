import type { Post } from './types';

export const post: Post = {
  slug: 'how-a-master-plate-works-in-synthetic-product-production',
  title: 'How a Master Plate Works in Synthetic Product Production',
  metaTitle: 'How a Master Plate Works in Synthetic Product Production',
  metaDescription:
    'A master plate is the one locked frame every later product render is generated from. What goes into building one, the four gates it enables, and why patching a bad render instead of returning to the plate makes a set drift.',
  excerpt:
    'The single technique that separates a product set that holds from one that quietly falls apart by shot forty. It is not a prompt.',
  published: '2026-08-24',
  author: 'TaleCrafters',
  section: 'Method',
  tags: ['Method', 'Product', 'Pipelines'],
  keywords: [
    'master plate',
    'AI product photography consistency',
    'generative product shots',
    'product consistency AI',
    'synthetic product photography',
    'reference image product AI',
    'AI packaging shots',
  ],
  image: 'master-plate',
  imageAlt:
    'A single product bottle held in a precise grid of registration marks, with three fainter copies of the same bottle aligned behind it.',
  standfirst:
    'A master plate is one clean, deliberately unglamorous frame of a product, locked before any campaign shot exists, that every later angle is generated from and tested against. It is the cheapest insurance in generative production and almost nobody builds one.',
  body: [
    {
      t: 'p',
      text: 'Ask a generative model for a bottle on a marble surface and it will give you a bottle. Ask it again and it will give you a different bottle. The label will have moved, the shoulder will be a little rounder, the cap will have gained a ridge. Individually each frame looks fine. Put four of them in a carousel and the product appears to be four products.',
    },
    {
      t: 'p',
      text: 'This is the failure that kills most generative product work, and it is not solved by better prompting. It is solved by refusing to let the model invent the product more than once.',
    },
    { t: 'h2', text: 'What a master plate is' },
    {
      t: 'p',
      text: 'A master plate is one frame. It shows the product, correct in shape, correct in label, correct in proportion, lit plainly and shot flat. It is not a hero image. It is deliberately boring, because its job is to be a reference rather than an advert. Every subsequent render in the campaign is generated from it, and tested against it.',
    },
    {
      t: 'p',
      text: 'If the client has real photography, the plate comes from a photograph, cleaned. If they do not, the plate is generated once, checked to death against the physical product or the packaging artwork, corrected, and then frozen. Freezing is the important word. After sign-off, nobody regenerates the plate to make it prettier.',
    },
    { t: 'h2', text: 'Building one' },
    {
      t: 'ol',
      items: [
        'Get the source of truth. Packaging dieline, label artwork at print resolution, or a photograph of the actual object. Not a render from the client’s website, which is itself already a copy of something.',
        'Shoot or generate the plate flat. Even light, no rim, no atmosphere, no shallow depth of field. Every one of those hides detail you will later need to check against.',
        'Verify the type at full resolution. Every printed word, every certification mark, every unit of measure. This is where a plate either becomes useful or becomes an expensive lie that propagates into forty shots.',
        'Record the geometry. Cap-to-shoulder ratio, label height as a fraction of body height, the silhouette. Written down, not remembered.',
        'Freeze it, name it, version it. The file has a version tag and a date. When the packaging changes in nine months, you cut a new plate rather than editing this one.',
      ],
    },
    {
      t: 'note',
      title: 'The flatness rule',
      text: 'A dramatic plate is a useless plate. Every bit of atmosphere in the reference is a bit of information the model has to guess at, and it will guess differently every time. Boring reference, dramatic output.',
    },
    { t: 'h2', text: 'What the plate unlocks: the silhouette overlay' },
    {
      t: 'p',
      text: 'The plate’s real value shows up at the gate. Once a plate exists, every campaign render can be tested rather than judged.',
    },
    {
      t: 'p',
      text: 'Overlay the render on the plate at forty per cent opacity, scaled to match. Look at the outline. If the silhouette has drifted, the frame is dead. Not "needs a touch-up": dead. It goes back to the source file and is regenerated with a tighter constraint, because a retouched frame passes on its own and still does not belong to the set.',
    },
    {
      t: 'p',
      text: 'Forty per cent is not magic, it is just the opacity at which a human eye reliably catches a two per cent shift in a shoulder curve. The discipline is the point: a mechanical test with a pass and a fail, applied to every frame, rather than an art director squinting at shot thirty-one at six in the evening.',
    },
    { t: 'h2', text: 'The four gates a plate makes possible' },
    {
      t: 'table',
      caption: 'Control gates on a plate-locked product set',
      head: ['Gate', 'The test', 'Failure means'],
      rows: [
        ['Type', 'Read every printed word at 100% zoom against the artwork', 'Regenerate. Never retouch a label.'],
        ['Silhouette', 'Overlay on the plate at 40% opacity, check the outline', 'Regenerate from the plate with tighter conditioning'],
        ['Light', 'One key direction and one colour temperature across the whole set', 'Regenerate the outlier, not the set'],
        ['Claims', 'No invented certification, award, ingredient or percentage', 'Kill the frame. This one has no appeal.'],
      ],
    },
    { t: 'h2', text: 'Why patching is the trap' },
    {
      t: 'p',
      text: 'The temptation on a bad frame is obvious. It is nearly right. A retoucher could fix the label in ten minutes, and the deadline is tomorrow.',
    },
    {
      t: 'p',
      text: 'What happens next is that the patched frame passes review and the underlying drift stays in the pipeline. The next batch drifts the same way, because nothing about the generation changed. Now you are patching every frame, your retouching budget has quietly become the largest line item in a production you sold as cheap, and the set still does not hold together at a glance.',
    },
    {
      t: 'quote',
      text: 'Patching produces a shot that passes and a set that still drifts. Returning to the plate produces a set.',
    },
    { t: 'h2', text: 'Handing the plate over' },
    {
      t: 'p',
      text: 'The plate is the asset with the longest useful life in the whole engagement, which is exactly why it should leave with the client. A brand that holds its own plates starts its next campaign from a lock. A brand that does not starts from scratch and pays for the same verification twice.',
    },
    {
      t: 'p',
      text: 'A studio that will not hand over plates and trained identities is selling you a dependency. That is a commercial choice they are entitled to make and you are entitled to price in.',
    },
    {
      t: 'cta',
      href: '/pipelines/phantom-set',
      label: 'Read the Phantom Set pipeline',
      text: 'The full pipeline this technique sits inside, published with its gates and its failure modes.',
    },
  ],
  faqs: [
    {
      q: 'What is a master plate in AI product photography?',
      a: 'One clean, flatly lit, deliberately unglamorous frame of a product, verified against the real packaging artwork and then frozen. Every campaign render is generated from it and tested against it, which is what stops the product changing shape between shots.',
    },
    {
      q: 'How is a master plate different from a reference image?',
      a: 'A reference image is whatever you happened to upload that session. A master plate is versioned, verified against a source of truth, frozen after sign-off, and paired with a written record of the product’s geometry. The difference is that a plate can be tested against, and a reference image can only be hoped at.',
    },
    {
      q: 'What is the silhouette overlay test?',
      a: 'Overlay the finished render on the master plate at forty per cent opacity, scaled to match, and inspect the outline. Any visible drift in the product’s silhouette fails the frame, which then returns to the plate to be regenerated rather than going to a retoucher.',
    },
    {
      q: 'Why not just retouch a frame that is nearly right?',
      a: 'Because the drift is in the generation, not the frame. Retouching fixes the symptom and leaves the cause, so the next batch drifts identically and the retouching bill grows until it is the biggest line item in the production.',
    },
    {
      q: 'Who should own the master plate after a campaign?',
      a: 'The client. It is the asset with the longest useful life in the engagement, and a brand that holds its own plates starts the next campaign from a lock instead of paying for the same verification again.',
    },
  ],
  terms: ['master-plate', 'character-consistency', 'temporal-coherence', 'cost-per-accepted-asset'],
  related: [
    'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
    'what-does-generative-video-production-cost-2026',
    'how-to-brief-an-ai-video-production-studio',
  ],
  resources: ['generative-film-shot-consistency-checklist'],
};
