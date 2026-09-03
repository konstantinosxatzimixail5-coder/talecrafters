// Concept projects. Every brand on this page is invented. Nobody commissioned
// any of it, nobody paid for it, and none of these products exist.
//
// Six brands, and the same set the portfolio publishes. They are one body of
// work shown in two places, so a frame missing from one of them is a bug and
// not an editorial decision. The counts on the page are derived from this
// array rather than typed, because they were typed once and were wrong.
//
// Each entry says what it was built to prove, because that is the only reason a
// fake brand earns a page. A spec shelf that does not state its test is a
// showreel; one that does is a control experiment.

import type { ProjectVideo } from './video';

export interface Shot {
  src: string;
  /** Set when the picture was replaced in the Studio. Wins over `src`. */
  upload?: unknown;
  alt: string;
  label: string;
  focus?: string;
}

export interface ConceptBrand {
  slug: string;
  num: string;
  name: string;
  product: string;
  proves: string;
  accent: string;
  note: string;
  pipelines: { label: string; href: string }[];
  shots: Shot[];
  /** Films from the set, played on the page. See src/data/video.ts. */
  videos?: ProjectVideo[];
}

export const conceptBrands: ConceptBrand[] = [
  {
    slug: 'feral',
    num: '01',
    name: 'FERAL',
    product: 'Yuzu Static, canned energy drink',
    proves: 'One label held across five sets, one creator held across three rooms, and the same can leaving a billboard',
    accent: 'var(--brand-magenta)',
    note:
      'The wordmark on this can is a halftone build with a magenta offset behind green type and a small black box under it reading YUZU STATIC. That is a lot of small structure to keep identical while the light, the surface and the room change underneath it. Five frames, five sets, one plate. The creator frames run the other line: one trained face, a corner shop, a car park and a bathroom mirror, all lit by whatever was in the room. The billboard is the last exam. A break-out board asks a viewer to read the can as flat artwork and as a solid object in the same second, and the light on the street has to agree with the light on the can or the whole thing collapses into a sticker.',
    pipelines: [
      { label: 'Phantom Set', href: '/pipelines/phantom-set' },
      { label: 'Identity Lock', href: '/pipelines/identity-lock' },
    ],
    shots: [
      { src: 'spec/feral/product-05', alt: 'A FERAL Yuzu Static can standing in shallow water, beaded with condensation, magenta and green vapour behind it and a splash around the base.', label: 'hero, water set' },
      { src: 'spec/feral/product-01', alt: 'The same FERAL can on a dark reflective surface with green smoke behind it and a ripple around the base.', label: 'same plate, smoke set' },
      { src: 'spec/feral/product-02', alt: 'The same FERAL can on cracked black floor tiles in a corridor of school lockers, lit hard from one side, a cigarette and a bottle cap on the floor beside it.', label: 'same plate, lockers' },
      { src: 'spec/feral/product-03', alt: 'The same FERAL can angled in a metal tray of crushed ice with dried lemon slices around it.', label: 'same plate, ice tray' },
      { src: 'spec/feral/product-04', alt: 'A square crop of the FERAL can in the ice tray, shot closer and lit with green light from behind.', label: 'same plate, square crop' },
      { src: 'spec/feral/ugc-01', alt: 'A man with bleached green hair in a black tracksuit reading the side of a FERAL can in front of a lit shop fridge, carrier bags in his other hand.', label: 'creator, corner shop' },
      { src: 'spec/feral/ugc-02', alt: 'The same man sitting on a kerb in a strip-lit car park at night, a FERAL can on the ground beside his neon trainers.', label: 'creator, car park' },
      { src: 'spec/feral/ugc-03', alt: 'The same man sprawled across a night tram seat with a FERAL can between his feet, neon strip lighting down the carriage behind him.', label: 'creator, night tram' },
      { src: 'spec/feral/ugc-04', alt: 'The same man holding a FERAL can up in a bathroom mirror selfie, flash on, pink strip light above the cracked mirror.', label: 'creator, mirror' },
      { src: 'spec/feral/billboard', alt: 'A night-city billboard for FERAL Yuzu Static, the can breaking out of the board in front of the artwork with lime slices and green liquid crossing the frame.', label: 'the same plate, on a billboard' },
    ],
    videos: [
      {
        youtubeId: '5VgtoylYaFw',
        title: 'Anamorphic billboard',
        note: 'The hardest delivery for this can. A break-out board asks the viewer to read the same object as flat artwork and as a solid thing in the same second, so any wobble in the label or the light shows immediately. Same locked plate as the five product sets above.',
        duration: 'PT0M8S',
        uploadDate: '2026-02-11',
        ratio: '16:9',
        poster: 'spec/feral/billboard',
        posterAlt: 'The FERAL Yuzu Static can breaking out of a lit billboard over a wet night street.',
      },
    ],
  },
  {
    slug: 'knuckle',
    num: '02',
    name: 'KNUCKLE',
    product: 'Energy chews, four flavours',
    proves: 'The hardest label test on this shelf: a box, four wrappers and four moulded names',
    accent: 'var(--brand-gold)',
    note:
      'Four flavour names, four wrapper colours, a carton with three lines of small copy across it, and the flavour word moulded into the sweet itself. Every one of those has to read at full zoom, and none of it can be typed back in afterwards. Anything that fails the label gate goes back to the plate.',
    pipelines: [{ label: 'Phantom Set', href: '/pipelines/phantom-set' }],
    shots: [
      { src: 'spec/knuckle/product-02', alt: 'A KNUCKLE Energy Chews carton standing behind four flavour wrappers, JAB in yellow, CROSS in orange, HOOK in red and KNOCKOUT in purple, each with a matching four-hole moulded sweet beside it.', label: 'range, full label test' },
      { src: 'spec/knuckle/product-01', alt: 'A single amber KNUCKLE chew sliding out of a black leather sleeve on a dark gritty surface, the flavour names stamped into each of its four holes.', label: 'hero, macro' },
    ],
  },
  {
    slug: 'slab',
    num: '03',
    name: 'SLAB',
    product: 'Protein blocks in a blister tray',
    proves: 'A pack claim that has to stay readable, and two people in one frame',
    accent: 'var(--brand-cyan)',
    note:
      'The pack is a pill tray with twelve protein blocks in it and a claim printed on the card: twenty grams of protein, twelve doses. A claim on a pack is the one thing a model will happily invent, so the claim gate applies here as hard as the label gate. The creator frames put two faces and four hands in the same shot, which is where most generated sets fall over.',
    pipelines: [
      { label: 'Phantom Set', href: '/pipelines/phantom-set' },
      { label: 'Identity Lock', href: '/pipelines/identity-lock' },
    ],
    shots: [
      { src: 'spec/slab/product-01', alt: 'A close crop of the SLAB tray, pale protein blocks in foil wells, some sealed and some torn open, numbered along the card.', label: 'plate, macro' },
      { src: 'spec/slab/ugc-01', alt: 'A woman in a car park eating a SLAB block, holding the yellow tray up to camera with the pack claim facing forward.', label: 'creator, pack claim held to camera' },
      { src: 'spec/slab/ugc-02', alt: 'A woman in a gym vest holding a SLAB tray flat to camera, weights racked behind her under strip lighting.', label: 'creator, gym, pack to camera' },
      { src: 'spec/slab/ugc-06', alt: 'A woman in a parked car biting into a SLAB block, the half-empty tray resting against her chest.', label: 'creator, eaten on camera' },
      { src: 'spec/slab/ugc-05', alt: 'A hand setting a SLAB tray down on a wooden desk beside a laptop, a notebook and a cup of coffee.', label: 'creator, desk' },
      { src: 'spec/slab/ugc-04', alt: 'A woman kneeling on an unmade bed surrounded by SLAB trays in six different colourways, spelling the name across the duvet.', label: 'creator, full colourway range' },
      { src: 'spec/slab/ugc-03', alt: 'Two people in a car holding a SLAB tray between them, both mid-laugh, faces close together.', label: 'creator, two in frame' },
    ],
  },
  {
    slug: 'grain-01',
    num: '04',
    name: 'GRAIN 01',
    product: 'Compact digital camera',
    proves: 'One face across three light sources: a bedroom, a club and a rooftop at sunset',
    accent: 'var(--brand-violet-text)',
    note:
      'This set exists to test drift. The same creator appears in warm string lights, in red club light with a flash, and in low sun on a roof. Nothing about the face is allowed to move between them, and the camera she is holding has to stay the same object in all three. Stack the frames, flick through at speed, and the jaw is where a fail shows first. The billboard puts the camera itself through the same test in daylight: a translucent body with a visible board, battery and lens barrel, breaking the edge of a flat surface with nothing to hide the seam.',
    pipelines: [{ label: 'Identity Lock', href: '/pipelines/identity-lock' }],
    shots: [
      { src: 'spec/grain-01/product-01', alt: 'The GRAIN 01 compact camera standing on an acid-green and pink set, translucent lilac body, orange lens ring and a hard flash unit beside it.', label: 'hero, colour set' },
      { src: 'spec/grain-01/product-03', alt: 'An extreme macro of the GRAIN 01 lens barrel and xenon flash, the orange ring and the fluted reflector filling the frame.', label: 'macro, lens and flash' },
      { src: 'spec/grain-01/product-02', alt: 'The GRAIN 01 lying on a scattered pile of its own prints and a coiled orange wrist strap on a pale desk.', label: 'still life, prints' },
      { src: 'spec/grain-01/product-04', alt: 'The same pile of prints and the camera shot from a lower angle, a memory card and a glass of water at the edge of frame.', label: 'still life, second angle' },
      { src: 'spec/grain-01/cutaway', alt: 'A GRAIN 01 cutaway diagram: the camera drawn in exploded technical form with the internal board, battery, lens optical path and flash unit called out in small labelled type.', label: 'cutaway diagram' },
      { src: 'spec/grain-01/spec-sheet', alt: 'A GRAIN 01 specification sheet drawn in the style of a patent filing, with numbered figures, a parts key and dense small print down both margins.', label: 'specification sheet' },
      { src: 'spec/grain-01/ugc-02', alt: 'A woman taking a mirror selfie in a bedroom strung with fairy lights, holding a small compact camera on an orange wrist strap.', label: 'bedroom, warm practicals' },
      { src: 'spec/grain-01/ugc-03', alt: 'The same woman laughing in a dark club stairwell, raising the compact camera to her eye, red light behind her.', label: 'club, flash and red spill' },
      { src: 'spec/grain-01/ugc-04', alt: 'The same woman on a rooftop at sunset, camera to her eye, city and air conditioning units behind her.', label: 'rooftop, low sun' },
      { src: 'spec/grain-01/billboard', alt: 'A daylight city billboard for GRAIN 01 on an acid-green ground, the translucent camera bursting through the board in a spray of magenta shards under the line SHOOT OUTSIDE THE FRAME.', label: 'the same body, on a billboard' },
    ],
    videos: [
      {
        youtubeId: 'laoB3HnoxHs',
        title: 'Anamorphic billboard',
        note: 'The camera coming through the board in daylight, which is the unforgiving version: no night city to hide the seam, and a translucent body with a visible circuit board and lens barrel that has to stay the same object as it crosses the edge.',
        duration: 'PT0M8S',
        uploadDate: '2026-02-11',
        ratio: '16:9',
        poster: 'spec/grain-01/billboard',
        posterAlt:
          'The GRAIN 01 camera bursting out of an acid-green city billboard in daylight under the line SHOOT OUTSIDE THE FRAME.',
      },
    ],
  },
  {
    slug: 'soie',
    num: '05',
    name: 'SOIE',
    product: 'Petal Veil Radiance Serum, 30ml',
    proves: 'Frosted glass with liquid behind it, and a drop caught on its way out of the pipette',
    accent: 'var(--brand-gold)',
    note:
      'Beauty is the hardest surface on this shelf and the one where a generated frame is spotted fastest, because the audience for it looks at product photography all day. Three things have to hold at once: ribbed frosted glass that reads as glass rather than as plastic, the serum behind it staying the same colour and level in every frame, and a knurled metal cap whose milling does not reinvent itself between shots. The macro exists to prove the last one: a single drop, held on the pipette, with the ribbing visible through the liquid behind it.',
    pipelines: [{ label: 'Phantom Set', href: '/pipelines/phantom-set' }],
    shots: [
      { src: 'spec/soie/product-01', alt: 'A SOIE Petal Veil Radiance Serum bottle standing on a travertine plinth in front of a linen curtain, rose petals at its base and hard window light raking across the wall behind.', label: 'hero, window set' },
      { src: 'spec/soie/product-02', alt: 'A macro of the SOIE pipette above the open bottle, a single amber drop of serum hanging from the glass tip against a soft pink background.', label: 'macro, the drop' },
      { src: 'spec/soie/product-03', alt: 'The SOIE bottle lying on its side in a bed of pale pink rose petals beaded with water, the gold cap catching the light.', label: 'same plate, petals' },
    ],
  },
  {
    slug: 'klnwork',
    num: '06',
    name: 'KLNWORK',
    product: 'Smoke & Fig No. 04, ceramic candle',
    proves: 'Stamped type on a fired glaze, and a live flame across three different rooms',
    accent: 'var(--brand-violet-text)',
    note:
      'Two hard problems in one object. The first is the vessel: a speckled stoneware glaze with the maker name pressed into the clay rather than printed on it, which means the letters have to catch light as depth instead of sitting on the surface as ink. The second is the flame. A lit wick is the fastest way to expose a generated frame, because the light it throws has to agree with everything it falls on. The dark frame exists for that: one flame, one smoke trail, and every reflection in the glass beside it lining up with the source.',
    pipelines: [{ label: 'Phantom Set', href: '/pipelines/phantom-set' }],
    shots: [
      { src: 'spec/klnwork/product-02', alt: 'A KLNWORK candle photographed from above on travertine, the paper band reading SMOKE & FIG No. 04 and the maker name pressed into the glaze below it, with spent matches, wax shavings, torn linen and a halved fig around it.', label: 'hero, flat lay' },
      { src: 'spec/klnwork/product-01', alt: 'The same candle on a weathered wooden window shelf in warm afternoon light, unlit, a stack of books and a dried flower behind it.', label: 'same plate, window shelf' },
      { src: 'spec/klnwork/product-03', alt: 'The same candle lit in a dark room, a thin smoke trail rising from the wick, an empty wine glass and a linen napkin catching the flame light beside it.', label: 'same plate, lit, dark room' },
    ],
  },
];

export const getConcept = (slug: string) => conceptBrands.find((b) => b.slug === slug);
