// The Armoury. Free reference material, published without an email gate,
// because a prompt list behind a form is a lead magnet rather than a resource.

export interface Resource {
  slug: string;
  title: string;
  kicker: string;
  color: string;
  count: string;
  format: string;
  blurb: string;
  forWhom: string;
}

export const resources: Resource[] = [
  {
    slug: 'camera-movements',
    title: 'Cinematic Camera Movements',
    kicker: 'The shot vocabulary that actually survives a generative model',
    color: 'var(--brand-cyan)',
    count: '38 moves',
    format: 'Direction + working prompt for each',
    blurb:
      'Every camera movement we use in production, with the direction written in camera-department language and a prompt that produces it. Grouped into seven families, with a note on when each one is worth reaching for and which ones will cost you a render if you compound them.',
    forWhom: 'Anyone directing a video model who is tired of writing “cinematic” and hoping.',
  },
  {
    slug: 'animation-prompting',
    title: 'Prompting Guide by Animation Style',
    kicker: 'Twelve styles, and the four decisions each one needs from you',
    color: 'var(--brand-magenta)',
    count: '12 styles',
    format: 'Scaffold, keywords, failure mode, example',
    blurb:
      'Cel, anime, claymation, stylised 3D, storybook, motion graphics, comic, papercraft, rotoscope, pixel, watercolour and retro 3D. Each entry gives the order to write the prompt in, the words that reliably move the model, the specific way that style fails, and a prompt you can paste.',
    forWhom: 'Anyone who has asked for claymation and been handed smooth plastic.',
  },
];

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);
