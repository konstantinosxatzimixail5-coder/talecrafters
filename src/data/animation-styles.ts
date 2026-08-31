// A prompting guide, one entry per animation style. Each has the same four
// parts, because the useful thing is not a magic phrase, it is knowing which
// four decisions a style needs you to make before you type anything.

export interface AnimationStyle {
  slug: string;
  num: string;
  name: string;
  aka: string;
  color: string;
  /** What the style actually is, in production terms. */
  what: string;
  /** The order the prompt should be written in. */
  scaffold: string[];
  /** Words that reliably move the model toward the style. */
  works: string[];
  /** The failure this style invites, and the fix. */
  breaks: string;
  /** A prompt you can paste. */
  example: string;
}

export const animationStyles: AnimationStyle[] = [
  {
    slug: 'cel-2d',
    num: '01',
    name: '2D Cel Animation',
    aka: 'traditional hand-drawn, flat cel',
    color: 'var(--brand-magenta)',
    what:
      'Flat colour fills bounded by a drawn line, on a painted background. The line weight and the number of colours per character are the whole identity of the style, and both have to be stated or the model will render a painting with an outline on it.',
    scaffold: [
      'Name the technique first: hand-drawn 2D cel animation.',
      'State line weight and colour count: bold uniform ink line, three flat tones per character.',
      'Separate character treatment from background treatment: cel characters usually sit on a softer painted background.',
      'Then the subject, then the shot.',
    ],
    works: ['flat cel shading', 'uniform ink outline', 'limited palette', 'painted background', 'hand-inked', 'no gradients on character'],
    breaks:
      'The model smuggles in soft shading and ambient occlusion, and the result reads as 3D wearing a line. Fix it by naming what must be absent: no gradients, no rim light, no soft shadow on the character.',
    example:
      'Hand-drawn 2D cel animation. Bold uniform ink outline, three flat tones per character, no gradients on the figure. A young courier stands in the rain outside a lit noodle bar, painted watercolour background behind her, slow dolly in.',
  },
  {
    slug: 'anime',
    num: '02',
    name: 'Anime',
    aka: 'Japanese animation, TV anime, film anime',
    color: 'var(--brand-cyan)',
    what:
      'Not one style. TV anime, film anime and 1980s OVA look nothing alike, and a prompt that says only “anime” averages all three into the flattest possible version. Pick an era and a production register.',
    scaffold: [
      'Pick the register: TV anime, theatrical anime, 90s OVA, modern digital.',
      'State the eye and face treatment explicitly. It is the single strongest signal.',
      'State background treatment separately: detailed painted backgrounds are a film-anime tell.',
      'Then the shot, in film language.',
    ],
    works: ['theatrical anime', 'painted background art', 'cel shading with hard shadow terminator', 'detailed background, simplified character', 'wide screen composition'],
    breaks:
      'Generic “anime style” collapses into a glossy portrait with big eyes and no background craft. Naming the background treatment separately is the fastest fix.',
    example:
      'Theatrical anime, detailed painted background art with simplified cel-shaded characters, hard shadow terminator. A boy on a station platform at dusk, cicadas, heat haze, wide composition, slow pedestal up.',
  },
  {
    slug: 'claymation',
    num: '03',
    name: 'Claymation',
    aka: 'stop-motion, plasticine, clay animation',
    color: 'var(--brand-gold)',
    what:
      'The style lives in the imperfections: thumbprints in the surface, a slight seam where a limb attaches, and the tiny frame-to-frame jitter of a puppet re-posed by hand. Ask for clay and you get a smooth 3D render in matte plastic. Ask for the artefacts and you get claymation.',
    scaffold: [
      'Name the material and the fingerprints: hand-sculpted plasticine, visible thumbprints, uneven surface.',
      'Name the rig: miniature practical set, shallow depth of field from macro photography.',
      'Name the motion character: stop-motion, slight frame-to-frame jitter, held poses.',
      'Then the subject.',
    ],
    works: ['hand-sculpted plasticine', 'visible fingerprints and tool marks', 'miniature set', 'macro lens, shallow focus', 'stop-motion jitter', 'practical lighting'],
    breaks:
      'Perfectly smooth clay and perfectly smooth motion. Both give it away as 3D. Explicitly request surface imperfection and a slight motion stagger.',
    example:
      'Stop-motion claymation. Hand-sculpted plasticine with visible thumbprints and tool marks, miniature practical set, macro lens with shallow depth of field, slight frame-to-frame jitter. A small round detective examines a fallen button on a kitchen floor, slow tilt down.',
  },
  {
    slug: 'pixar-3d',
    num: '04',
    name: 'Stylised 3D',
    aka: 'Pixar-flavoured, feature-animation 3D',
    color: 'var(--brand-violet-text)',
    what:
      'Appealing proportions, soft global illumination, subsurface scattering on skin, and materials that read as slightly idealised versions of the real thing. The technical vocabulary works here better than any style name, and it avoids naming a studio.',
    scaffold: [
      'State the render character: soft global illumination, subsurface scattering, gentle rim light.',
      'State proportion: large head-to-body ratio, oversized eyes, simplified hands.',
      'State material behaviour: soft cloth, slightly waxy skin, no micro-detail.',
      'Then the shot, with a real lens.',
    ],
    works: ['stylised 3D character animation', 'soft global illumination', 'subsurface scattering', 'appealing proportions', 'shallow depth of field, 50mm'],
    breaks:
      'Uncanny realism creeping in at the skin. If it starts looking like a game cinematic, push proportions further from human and reduce micro-detail.',
    example:
      'Stylised 3D character animation, soft global illumination, subsurface scattering on skin, gentle rim light, oversized eyes and simplified hands. A nervous office worker holds a stack of files taller than himself, 50mm, shallow focus, slow dolly in.',
  },
  {
    slug: 'storybook',
    num: '05',
    name: 'Storybook Illustration',
    aka: 'picture book, children’s illustration',
    color: 'var(--brand-cyan)',
    what:
      'A print medium first: visible paper grain, ink that sits on a surface, and colour laid down in washes rather than lit. The paper is the part people forget to ask for, and it is the part that sells it.',
    scaffold: [
      'Name the medium and the surface: gouache on cold-press paper, visible tooth.',
      'Name the mark: loose ink line, uneven edges, colour slightly outside the line.',
      'Keep lighting flat: a storybook illustration is not lit, it is coloured.',
      'Then the subject.',
    ],
    works: ['gouache on textured paper', 'visible paper grain', 'loose ink line', 'flat colour wash', 'colour registration slightly off'],
    breaks:
      'Digital smoothness and a lit scene. Ask for paper tooth and imperfect registration, and remove any lighting language from the prompt.',
    example:
      'Storybook illustration, gouache on cold-press paper with visible tooth, loose ink line, flat colour washes, colour slightly off-register. A blue snake in reading glasses takes notes on a clipboard while a young man lies on a couch.',
  },
  {
    slug: 'motion-graphics',
    num: '06',
    name: 'Motion Graphics',
    aka: 'explainer, kinetic design, infographic animation',
    color: 'var(--brand-gold)',
    what:
      'Vector shapes, a locked palette and a grid. This is the style where a system matters more than a look: if colour carries meaning, say what each colour means, and never let the model add a sixth colour to a five-colour system.',
    scaffold: [
      'State the construction: flat vector shapes, no texture, no lighting.',
      'State the palette as a closed set, and what each colour means.',
      'State layout discipline: aligned to a grid, generous negative space.',
      'Then the content of the frame.',
    ],
    works: ['flat vector illustration', 'closed palette', 'geometric shapes', 'grid-aligned layout', 'no gradients, no texture', 'isometric'],
    breaks:
      'Palette creep and decorative gradients. Both destroy an explainer, because they add meaning where none was intended. State the palette as a closed set.',
    example:
      'Flat vector motion graphics, four-colour closed palette (dark navy ground, cyan for safe paths, red for compromised paths, white for labels), no gradients, no texture, grid-aligned with generous negative space. A network diagram showing an operator request branching to a fraudulent server.',
  },
  {
    slug: 'comic',
    num: '07',
    name: 'Comic & Graphic Novel',
    aka: 'sequential art, panel narrative, ligne claire',
    color: 'var(--brand-magenta)',
    what:
      'Two decisions carry the style: the inking school and the colouring era. Heavy spotted blacks with flat colour reads as one thing; clean uniform line with flat fills reads as another entirely.',
    scaffold: [
      'Name the inking: heavy spotted blacks, or clean uniform ligne claire line.',
      'Name the colour era: flat separated colour, or halftone dot screen, or modern digital flats.',
      'Name the panel treatment if you want panels: otherwise the model will invent gutters.',
      'Then the shot, in comic terms: low angle, close on the eyes.',
    ],
    works: ['heavy spotted blacks', 'ligne claire', 'halftone dot screen', 'flat separated colour', 'strong panel composition', 'dramatic low angle'],
    breaks:
      'Rendered painting with a line on top. If it looks airbrushed, push harder on the inking language and ask for flat colour with no rendering.',
    example:
      'Graphic novel panel, heavy spotted blacks and clean brush inking, flat separated colour with visible halftone dots, no rendering. A detective in a doorway lit from behind, low angle, rain on the glass.',
  },
  {
    slug: 'papercraft',
    num: '08',
    name: 'Papercraft & Collage',
    aka: 'cut paper, layered paper, mixed-media collage',
    color: 'var(--brand-violet-text)',
    what:
      'Physical layers casting real shadows. The convincing detail is the edge: torn paper has a fibrous white edge, cut paper does not, and choosing between them is the whole style decision.',
    scaffold: [
      'Name the technique and the edge: torn paper with fibrous edges, or precise scalpel-cut edges.',
      'Name the depth: layered with a visible gap between planes, soft drop shadow per layer.',
      'Name the lighting: single soft key from one side so the layers separate.',
      'Then the subject.',
    ],
    works: ['layered cut paper', 'torn fibrous edges', 'soft shadow between layers', 'shallow diorama depth', 'single soft key light'],
    breaks:
      'Flat vector wearing a paper texture. Ask explicitly for shadows cast between layers. That is what makes it physical.',
    example:
      'Layered cut-paper diorama, scalpel-cut clean edges, three planes of depth with soft shadows between them, single soft key from the left. A city skyline at dusk with a small figure on a rooftop.',
  },
  {
    slug: 'rotoscope',
    num: '09',
    name: 'Rotoscope',
    aka: 'traced live action, painted-over footage',
    color: 'var(--brand-cyan)',
    what:
      'Real human motion under a drawn surface. The tension between accurate weight and unstable line is the entire appeal, so ask for the boil (the line shifting slightly frame to frame) rather than a clean trace.',
    scaffold: [
      'Name the source behaviour: traced from live-action, naturalistic human weight and timing.',
      'Name the surface: painted-over, visible brush edges, line boil between frames.',
      'Name the palette limit: rotoscope tends to work with fewer colours than you expect.',
      'Then the shot.',
    ],
    works: ['rotoscoped', 'traced from live action', 'line boil', 'painterly fill', 'naturalistic motion, stylised surface'],
    breaks:
      'Motion that is too smooth or a surface that is too clean, either of which turns it into ordinary 2D. Ask for boil explicitly.',
    example:
      'Rotoscoped animation traced from live action, naturalistic human weight, painted-over surface with visible brush edges and line boil between frames, six-colour palette. A woman walks a dog through a park at dawn, side tracking parallel.',
  },
  {
    slug: 'pixel',
    num: '10',
    name: 'Pixel Art',
    aka: 'sprite art, 16-bit, low-resolution',
    color: 'var(--brand-gold)',
    what:
      'Constrained on purpose. Resolution and palette size are the style, and models will cheat both unless you give numbers. Anti-aliasing is the giveaway: real pixel art has almost none.',
    scaffold: [
      'Give a resolution and a palette count: 64×64, sixteen colours.',
      'Forbid anti-aliasing and gradients directly.',
      'Name the dithering if you want the era: ordered dithering reads as 16-bit.',
      'Then the subject, kept simple: detail does not survive the grid.',
    ],
    works: ['16-bit pixel art', 'limited palette', 'no anti-aliasing', 'ordered dithering', 'crisp pixel grid', 'side-scroller perspective'],
    breaks:
      'Smooth edges and thousands of colours: a photo with a pixel filter over it. Numbers in the prompt are the only reliable fix.',
    example:
      '16-bit pixel art, 96×96, sixteen-colour palette, no anti-aliasing, ordered dithering for shadows, crisp pixel grid. A lone traveller at a campfire outside a walled town at night.',
  },
  {
    slug: 'watercolour',
    num: '11',
    name: 'Watercolour & Ink',
    aka: 'wash, sumi-e, loose ink and wash',
    color: 'var(--brand-magenta)',
    what:
      'Defined by what the medium does on its own: blooms where wet meets wet, hard edges where a wash dried, and paper showing through as the only white. Nothing in a watercolour is lit; it is stained.',
    scaffold: [
      'Name the medium behaviour: wet-on-wet blooms, dried hard edges, granulating pigment.',
      'Name the white: paper white left unpainted, no opaque white.',
      'Name the line: dry brush ink over the wash, or no line at all.',
      'Then the subject, and keep it simple.',
    ],
    works: ['watercolour wash', 'wet-on-wet bloom', 'granulating pigment', 'paper white left unpainted', 'dry brush ink line', 'loose edges'],
    breaks:
      'Digital airbrush pretending to be watercolour. Ask for blooms and dried edges by name, and forbid opaque white.',
    example:
      'Loose watercolour and ink. Wet-on-wet blooms, dried hard edges, granulating pigment, paper white left unpainted, dry brush ink line. A fishing boat at a harbour wall in morning mist.',
  },
  {
    slug: 'retro-3d',
    num: '12',
    name: 'Retro 3D',
    aka: 'low-poly, PS1, early CGI, vaporwave',
    color: 'var(--brand-violet-text)',
    what:
      'A period style built from technical limitations: low polygon counts, affine texture warping, vertex wobble and hard-edged shadows. Naming the limitations is what produces it: naming the aesthetic produces a modern render in pastel colours.',
    scaffold: [
      'Name the limitation set: low polygon count, low-resolution textures, no anti-aliasing.',
      'Name the era artefact: affine texture warping, vertex jitter, hard shadow edges.',
      'Name the lighting model: vertex lighting, no global illumination.',
      'Then the subject.',
    ],
    works: ['low-poly', 'PS1-era rendering', 'affine texture warping', 'vertex lighting', 'low-resolution textures', 'no anti-aliasing'],
    breaks:
      'A clean modern render with pastel colours and a chrome sphere. Ask for the artefacts, not the mood.',
    example:
      'Retro low-poly 3D, PS1-era rendering. Low polygon count, low-resolution textures, affine texture warping, vertex lighting, no anti-aliasing, hard shadow edges. An empty shopping mall atrium at night with a single escalator running.',
  },
];

export const getStyle = (slug: string) => animationStyles.find((s) => s.slug === slug);
