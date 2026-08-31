// Three of seven. The other four stay in the studio.
//
// A pipeline is not a prompt. It is the order the work happens in, the file
// that everything downstream references, and the four tests a frame has to pass
// before anyone sees it. This is the part that makes volume survivable.

export interface Stage {
  name: string;
  tool: string;
  fixes: string;
  time: string;
}

export interface Gate {
  name: string;
  test: string;
  fail: string;
}

export interface Pipeline {
  slug: string;
  num: string;
  name: string;
  title: string;
  mechanism: string;
  accent: string;
  summary: string;
  loop: string;
  useWhen: string;
  stages: Stage[];
  gates: Gate[];
}

export const pipelines: Pipeline[] = [
  {
    slug: 'identity-lock',
    num: '03',
    name: 'Identity Lock',
    title: 'Cast once, run forty',
    mechanism: 'The trained face',
    accent: 'var(--brand-cyan)',
    summary:
      'Train the face once. After that, forty advert variants arrive carrying the same creator, the same voice and the same energy at three in the morning on a bank holiday.',
    loop: 'Four days from casting brief to nine finished variants. Variant forty costs what variant ten did, because the cast already exists.',
    useWhen:
      'Synthetic UGC, spokesperson content, any paid-social test that needs the same face across a dozen openings and will need it again next month.',
    stages: [
      { name: 'Casting', tool: 'Written by hand', fixes: 'The persona gets written as a casting brief: age band, build, wardrobe, room, accent, energy, and the two things this person would never say on camera.', time: 'Half a day' },
      { name: 'Identity sheet', tool: 'Nano Banana Pro, GPT Image 2', fixes: 'Twenty or more stills of one face. Varied angles and expressions, one full-height frame, even lighting, no sunglasses and no crop through the jaw.', time: 'Two hours' },
      { name: 'Soul ID', tool: 'Higgsfield Soul ID', fixes: 'The sheet trains into an identity in about five minutes. It then carries across sessions, models and formats with no reference re-upload.', time: 'Five minutes' },
      { name: 'Plates', tool: 'Popcorn', fixes: 'The scene set gets built: kitchen, car, gym, desk. Backgrounds and outfits move while the likeness holds from frame to frame.', time: 'One day' },
      { name: 'Motion', tool: 'Sora 2, Veo 3.1 or Kling', fixes: 'Image to video inside one workspace. Handheld and phone-look presets keep the register believable; Cinema Studio moves stay reserved for the hero cut.', time: 'One day' },
      { name: 'Voice', tool: 'ElevenLabs IVC and PVC', fixes: 'An instant clone needs one to three minutes of clean mono audio. The professional clone trains on thirty minutes at minimum, two to three hours for the strongest result, and holds emotional range far better.', time: 'One to two days' },
    ],
    gates: [
      { name: 'Likeness gate', test: 'Stack the frames and flick through at speed. Drift in the jaw, eyes or hairline shows up immediately.', fail: 'Regenerate from the identity sheet. Never patch by inpainting.' },
      { name: 'Hand gate', test: 'Freeze every frame where fingers touch the product.', fail: 'Reroll the shot, or crop above the wrist.' },
      { name: 'Consent gate', test: 'Signed release for the voice and for the likeness reference.', fail: 'Nothing renders until both sit in the folder.' },
      { name: 'Disclosure gate', test: 'Synthetic creator labelled to platform policy and to client legal.', fail: 'Add the label, then release.' },
    ],
  },
  {
    slug: 'phantom-set',
    num: '05',
    name: 'Phantom Set',
    title: 'Ninety frames before lunch',
    mechanism: 'The master plate',
    accent: 'var(--brand-magenta)',
    summary:
      'Every frame lit the way you asked for, packaging type still readable at full zoom, and nobody had to book a stylist, a retoucher or a room with a cyclorama.',
    loop: 'Two rounds. Thirty frames for selection, then ninety frames and six clips. Layered files land in two working days.',
    useWhen:
      'Any subject a customer can hold up against the picture: product stills, packaging, food, vehicles, anything with printed type on it.',
    stages: [
      { name: 'Plate', tool: 'GPT Image 2, or a phone against white', fixes: 'One clean product frame on a transparent background. Everything downstream references this file, so the bottle keeps its shape.', time: 'One hour' },
      { name: 'Label lock', tool: 'GPT Image 2', fixes: 'Small type, logos and packaging text held through edits as transparent PNGs, so the label stays readable while the set changes around it.', time: 'One hour' },
      { name: 'Set', tool: 'Written as a specification', fixes: 'Surface, backdrop, props and lighting specified once and reused, never improvised per frame: one key, one fill, one practical, one stated colour temperature.', time: 'Half a day' },
      { name: 'Angles', tool: 'Nano Banana Pro, GPT Image 2', fixes: 'Hero three-quarter, macro texture, flat lay, in-hand, lifestyle and splash. One set, one lighting rig, six crops for six placements.', time: 'One day' },
      { name: 'Motion', tool: 'Kling, Veo 3.1', fixes: 'Image to video for the pour, the orbit, the lid lift and the cap reveal. Eight seconds each, cut down to two for paid.', time: 'Half a day' },
      { name: 'Formats', tool: 'Photoshop, Figma Make', fixes: 'Crop matrix per placement: 1:1 grid, 4:5 feed, 9:16 Reels and TikTok, 16:9 site header, plus the marketplace sizes.', time: 'Two hours' },
    ],
    gates: [
      { name: 'Label gate', test: 'Zoom to full resolution and read every word on the packaging.', fail: 'Reroll from the master plate. Never retype in post.' },
      { name: 'Silhouette gate', test: 'Overlay the render on the master plate at forty per cent opacity.', fail: 'Any shift in outline kills the frame.' },
      { name: 'Light gate', test: 'One key direction and one shadow direction across the whole set.', fail: 'Regenerate the odd frame so the set stays honest.' },
      { name: 'Claim gate', test: 'No invented certification marks, awards or ingredient wording.', fail: 'Remove it, then render again.' },
    ],
  },
  {
    slug: 'operator-stack',
    num: '07',
    name: 'Operator Stack',
    title: 'The boring half that pays',
    mechanism: 'The ledger layer',
    accent: 'var(--brand-gold)',
    summary:
      'Prompting is the easy part. What earns its keep is the directory structure, the skills, the connectors and the ledger telling you what every accepted asset actually cost.',
    loop: 'Half a day mapping how the work runs today, one to two weeks building, then a live walkthrough. Everything sits inside the client’s own accounts.',
    useWhen:
      'A marketing team already producing at volume and losing the margin to coordination. This is the pipeline that becomes a Creative System engagement.',
    stages: [
      { name: 'Map', tool: 'A whiteboard and an owner per step', fixes: 'Every step written down with an owner: what a person decides, what a model drafts, what a script handles alone at four in the morning.', time: 'Half a day' },
      { name: 'Skills', tool: 'Claude Skills', fixes: 'A skill is a directory holding a SKILL.md file plus references, templates and scripts. Its description stays in context and the body loads only when a task matches, so instruction sets stay out of the way until needed.', time: 'Two days' },
      { name: 'Code', tool: 'Claude Code', fixes: 'The repetitive end: batch renaming, render queues, spreadsheet updates, site copy edits and the client-facing pages themselves.', time: 'Three days' },
      { name: 'Connect', tool: 'MCP servers', fixes: 'The studio gets wired to the tools already in use: generation, asset storage, the tracker, the approvals channel.', time: 'One day' },
      { name: 'Interface', tool: 'Figma Make', fixes: 'A pipeline turns into something the client can operate. React and Tailwind underneath, so a prototype can graduate into the real product.', time: 'Two days' },
      { name: 'Ledger', tool: 'Sheets, a run log', fixes: 'Naming convention, version tags, run log and cost per accepted asset. This is the part that makes a creative studio explainable to a finance team.', time: 'Ongoing' },
    ],
    gates: [
      { name: 'Human gate', test: 'A person signs off the brief and the final cut, at any volume.', fail: 'No exception has ever been worth it.' },
      { name: 'Rights gate', test: 'Model licence checked for commercial use under the client terms.', fail: 'Swap the model before rendering, never after.' },
      { name: 'Secret gate', test: 'No keys, client data or unreleased assets inside a prompt.', fail: 'Rotate the key and route through the connector.' },
      { name: 'Cost gate', test: 'Credit ceiling per asset agreed before a batch starts.', fail: 'The job halts and asks for a decision.' },
    ],
  },
];

export const getPipeline = (slug: string) => pipelines.find((p) => p.slug === slug);
