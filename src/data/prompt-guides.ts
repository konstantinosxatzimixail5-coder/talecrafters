// The Prompting Library.
//
// The camera-movements sheet answers "how do I ask for a crane down". The
// animation-prompting sheet answers "how do I ask for claymation". Neither
// answers the question people actually arrive with, which is "what goes in a
// prompt, in what order, and why did mine come back wrong".
//
// So each entry here is a guide rather than a string: the slots the prompt is
// built from, in the order that survives, one written example you can paste,
// the specific way that kind of prompt fails, and the fix. A prompt you can
// copy is worth one shot. The scaffold behind it is worth every shot after.

export interface PromptFamily {
  key: string;
  name: string;
  color: string;
  blurb: string;
}

export interface PromptGuide {
  slug: string;
  name: string;
  family: string;
  /** One line: what this guide is for. Used as the card subtitle and the
   *  `description` on the ItemList node. */
  purpose: string;
  /** When a person should reach for this rather than the one next to it. */
  when: string;
  /** The ordered slots. Order is the whole point: most prompt failures are
   *  ordering failures wearing a vocabulary costume. */
  scaffold: string[];
  /** A complete prompt, written out. Copyable. */
  prompt: string;
  /** How this shape of prompt fails, specifically. */
  failure: string;
  /** What to change when it does. */
  fix: string;
}

export const promptFamilies: PromptFamily[] = [
  {
    key: 'video',
    name: 'Video & shot',
    color: 'var(--brand-cyan)',
    blurb:
      'Prompts that have to produce motion. Every one of them is a negotiation between what you asked for and what the model can hold together for the length of the clip, so they are written shortest-constraint-first.',
  },
  {
    key: 'image',
    name: 'Stills & key art',
    color: 'var(--brand-magenta)',
    blurb:
      'A still has no temporal budget to spend, which means you can ask for far more in one prompt. The failure mode moves from drift to sameness: without a stated lens, light and imperfection, every frame comes back looking like a stock library.',
  },
  {
    key: 'character',
    name: 'Character & consistency',
    color: 'var(--brand-violet-text)',
    blurb:
      'The prompts that make the same person appear twice. Description alone will not do it past a couple of shots; these are the shapes that carry identity across a sequence.',
  },
  {
    key: 'story',
    name: 'Story, script & structure',
    color: 'var(--brand-gold)',
    blurb:
      'Prompting a language model for narrative work. The recurring mistake is asking for output when you should be asking for structure, and then wondering why the draft is smooth and says nothing.',
  },
  {
    key: 'post',
    name: 'Fixes & post',
    color: 'var(--brand-magenta)',
    blurb:
      'What to write when the frame is nearly right: inpainting, outpainting, reframing, upscaling and the extension prompts that chain one clip into the next without a visible seam.',
  },
  {
    key: 'systems',
    name: 'Systems & agents',
    color: 'var(--brand-cyan)',
    blurb:
      'Prompts that run more than once. These are written like specifications rather than requests, because anything you leave to the model’s judgement will vary on run four hundred.',
  },
];

export const promptGuides: PromptGuide[] = [
  // ------------------------------------------------------------- video ---
  {
    slug: 'single-shot-text-to-video',
    name: 'The single-shot text-to-video prompt',
    family: 'video',
    purpose: 'The base shape every other video prompt is a variation on.',
    when: 'Any time you want one continuous shot from nothing but text.',
    scaffold: [
      'CAMERA. The move, in camera-department language, in its own sentence. One move.',
      'SUBJECT. Who or what is in frame, and the single action they perform.',
      'SETTING. Where, and how much of it is visible.',
      'LIGHT. One key direction and one time of day.',
      'LENS. Focal length and depth of field, stated as numbers where you can.',
      'GRADE. Two words at most, and only if it matters.',
    ],
    prompt:
      'Slow dolly in. A woman in a grey wool coat stands at a rain-streaked window and slowly lifts her hand to the glass. A dim apartment interior, city lights out of focus behind her. Key light from the window, camera left, late blue evening. 50mm, shallow depth of field, focus on her eyes. Muted, cool grade.',
    failure:
      'Mood adjectives migrate to the front and take over. A prompt that opens with "cinematic, dramatic, beautiful" gets a beautifully lit shot with none of the movement you asked for, because the model spent its budget on the adjectives.',
    fix: 'Move every adjective behind the camera move and the action. If the shot is still wrong, delete the grade line entirely and see what you actually asked for.',
  },
  {
    slug: 'image-to-video-animation',
    name: 'The image-to-video prompt',
    family: 'video',
    purpose: 'Animating a still you already approved, without losing what made it good.',
    when: 'Whenever the composition matters more than the motion, which is most of the time in advertising.',
    scaffold: [
      'WHAT MOVES. Name it. One thing, or two if they move together.',
      'WHAT DOES NOT MOVE. Name that too, explicitly.',
      'THE CAMERA. Usually nothing, or one slow push.',
      'DURATION FEEL. Slow, steady, drifting — not a number, a quality.',
    ],
    prompt:
      'Only the steam from the cup moves, rising slowly and dissipating. The hands, the cup, the table and the background stay completely still. Camera locked off, no movement. Slow, calm, continuous.',
    failure:
      'You describe the picture again. The model already has the picture; re-describing it gives it permission to reinterpret, and a reinterpreted still is a different still.',
    fix: 'Delete every sentence that describes what is already visible in the reference. If the prompt still reads as a description rather than an instruction, you have not finished cutting.',
  },
  {
    slug: 'first-and-last-frame',
    name: 'First-and-last-frame conditioning',
    family: 'video',
    purpose: 'Pinning both ends of a clip so the middle cannot wander.',
    when: 'Any shot longer than about four seconds, and any shot that has to end on a specific composition.',
    scaffold: [
      'START FRAME. The image, plus one sentence naming what state it is in.',
      'END FRAME. The image, plus one sentence naming what changed.',
      'THE TRANSIT. How it gets from one to the other — the path, not the destination.',
      'WHAT IS CONSTANT. Anything that must be identical in both.',
    ],
    prompt:
      'Start: the bottle stands upright, label facing camera, cap on. End: the same bottle, same position, same label, cap off and resting beside it. Between them, a single hand enters from frame right, turns the cap once and withdraws. Lighting, background and label position identical throughout.',
    failure:
      'The two frames disagree about something you did not notice — a shadow direction, a label crop, a hand that is present in one and not the other — and the model resolves the disagreement by inventing a transition through it.',
    fix: 'Put the two frames side by side at full size before you generate. Anything that differs and should not is a shot you have already lost.',
  },
  {
    slug: 'dialogue-shot',
    name: 'The dialogue shot',
    family: 'video',
    purpose: 'A character speaking, without the dead-eyed presenter look.',
    when: 'Talking head, testimonial, any piece where a face has to carry a line.',
    scaffold: [
      'SHOT SIZE. Named, and held for the whole clip.',
      'THE LINE. In quotes, short enough to fit the duration.',
      'DELIVERY. The intention behind the line, not the emotion on top of it.',
      'LISTENING. What the face does before and after speaking.',
      'BREATH. Where they take one.',
    ],
    prompt:
      'Medium close-up, static. She says, "We tried it for a week." She is deciding whether to admit the rest as she says it, so the line comes out slightly slower than it should. Before the line she holds a small breath. After it she does not look away.',
    failure:
      'You direct the emotion and get a performance of the emotion: eyebrows doing the work, a face announcing sadness rather than a person being sad.',
    fix: 'Replace every emotion word with an intention. Not "sad", but "trying not to be asked a follow-up question". The face solves it better than you can specify it.',
  },
  {
    slug: 'product-hero-motion',
    name: 'The product hero move',
    family: 'video',
    purpose: 'A product turning, catching light, staying legible.',
    when: 'Any packshot where the label has to survive at full resolution.',
    scaffold: [
      'THE MOVE. Slow, single-axis, and slower than you think.',
      'THE PRODUCT. Named plainly, with material words.',
      'THE LABEL. Stated as a hard constraint: unchanged, in frame, in focus.',
      'THE LIGHT. Where the specular highlight travels.',
      'THE GROUND. What it sits on, and whether that moves.',
    ],
    prompt:
      'Slow orbit right, ninety degrees over the full clip, single axis, no vertical movement. A matte glass bottle with a paper label. The label stays sharp, unchanged and facing camera throughout. A soft strip light above and slightly behind, so the highlight travels down the shoulder of the bottle as it turns. Dark stone surface, static.',
    failure:
      'The type on the label dissolves into plausible-looking letterforms somewhere in the second half of the move, which is a legal problem rather than an aesthetic one.',
    fix:
      'Shorten the move, or generate the turn and composite the real label over it in post. Legible type is the one thing worth solving outside the model.',
  },
  {
    slug: 'crowd-and-background-life',
    name: 'Crowds and background life',
    family: 'video',
    purpose: 'Populating a frame without ten people melting into each other.',
    when: 'Streets, offices, venues — anywhere the emptiness would read as a set.',
    scaffold: [
      'FOREGROUND. Your actual subject, fully specified.',
      'MIDGROUND. One or two figures, described only by silhouette and direction of travel.',
      'BACKGROUND. Density and motion as a texture, never as individuals.',
      'FOCUS. State what is out of focus, because that is what makes the rest survivable.',
    ],
    prompt:
      'A man in a navy jacket walks towards camera, in focus. Two figures cross behind him left to right, out of focus, silhouettes only. Beyond them a busy street at dusk, movement visible but no individual faces resolvable. 85mm, wide open, deep background heavily defocused.',
    failure:
      'Every background figure is rendered at the same fidelity as the subject, so every one of them is a chance to see a hand with six fingers.',
    fix:
      'Push depth of field until the background is texture. A crowd the model does not have to draw is a crowd it cannot get wrong.',
  },
  {
    slug: 'negative-prompting',
    name: 'Negative prompting that works',
    family: 'video',
    purpose: 'Naming what must not be there, usefully.',
    when: 'After a first batch, never before it.',
    scaffold: [
      'ARTEFACTS. The specific ones you saw, not a generic list.',
      'CONTENT. Objects or actions that keep appearing and should not.',
      'STYLE. The register you keep drifting into.',
      'Nothing abstract. "Bad quality" is not a thing the model can not-do.',
    ],
    prompt:
      'Negative: extra fingers, warped hands, floating jewellery, text on the wall, second light source from camera right, lens flare, slow motion.',
    failure:
      'A copied-in list of forty negative terms from a forum, most of which describe nothing the model was going to do, diluting the few that matter.',
    fix:
      'Write negatives from your own failed renders only. If you cannot point at the frame where you saw it, it does not go in the list.',
  },
  {
    slug: 'shot-list-to-prompts',
    name: 'Turning a shot list into prompts',
    family: 'video',
    purpose: 'Going from a board to a batch without losing continuity between shots.',
    when: 'Any sequence longer than three shots.',
    scaffold: [
      'THE LOCK BLOCK. One paragraph, identical in every prompt: world, light, palette, lens family.',
      'THE SHOT BLOCK. What changes per shot: size, move, action.',
      'THE ORDER. Generate the hardest shot first, not the first shot first.',
    ],
    prompt:
      'LOCK (paste into every shot): Late afternoon, low sun from the west, warm key and cool fill, muted teal and sand palette, anamorphic 40mm look throughout, light haze in every exterior.\n\nSHOT 4: Wide, static. The car sits alone at the end of the road. No people. Hold.',
    failure:
      'The lock paragraph is edited slightly between shots — a word here, a colour there — and the sequence quietly stops matching itself.',
    fix:
      'Keep the lock in one file and paste it. Never retype it. If it needs to change, it changes for every shot including the ones already rendered.',
  },
  {
    slug: 'duration-and-pacing',
    name: 'Prompting for pace',
    family: 'video',
    purpose: 'Getting a clip that cuts well rather than one that fills its runtime.',
    when: 'Whenever the output is destined for an edit, which is always.',
    scaffold: [
      'THE ACTION ARC. Beginning, middle and end of one movement.',
      'WHERE IT STARTS. Mid-action beats from-rest, almost every time.',
      'WHERE IT ENDS. Before the action completes, so you have a cut point.',
      'NO EXTRA BEATS. Say "nothing else happens" and mean it.',
    ],
    prompt:
      'The pour is already in progress when the clip begins. The liquid continues to fill the glass at a steady rate for the whole shot and does not finish. Nothing else happens, no one enters, the camera does not move.',
    failure:
      'The model gives you a complete little story: an entrance, the action, a resolution, and a half-second of nothing at the end. None of it cuts.',
    fix:
      'Start mid-action and end mid-action. A clip with no beginning and no ending is a clip an editor can put anywhere.',
  },

  // ------------------------------------------------------------- image ---
  {
    slug: 'photoreal-still',
    name: 'The photoreal still',
    family: 'image',
    purpose: 'A frame that reads as a photograph rather than a render.',
    when: 'Key art, packshots, anything sitting next to real photography.',
    scaffold: [
      'CAMERA BODY AND LENS. Real ones, with real numbers.',
      'SUBJECT AND ACTION.',
      'LIGHT. Source, direction, quality, and one modifier.',
      'THE IMPERFECTION. One thing that would not be in a render.',
      'THE CROP. Where the frame cuts the subject.',
    ],
    prompt:
      'Shot on a full-frame body, 35mm at f/2, natural light through a north-facing window camera left, soft and slightly cool. A baker’s hands dusting flour across a worktop, flour visible in the air. Slight motion blur on the left hand. Faint sensor grain, one dust mark. Cropped at the wrists and above the elbow.',
    failure:
      'Perfect symmetry, perfect skin, perfect focus, perfect light. Every one of those is a tell, and together they are the entire reason a frame reads as generated.',
    fix:
      'Add exactly one flaw and one asymmetry. More than that reads as an aesthetic; one reads as a photograph.',
  },
  {
    slug: 'composition-control',
    name: 'Composition control',
    family: 'image',
    purpose: 'Getting the subject where you want it in the frame.',
    when: 'When the image has to hold type, a logo, or a safe area.',
    scaffold: [
      'FRAME SHAPE. Aspect ratio stated first.',
      'SUBJECT PLACEMENT. In thirds, or in explicit left/right/lower terms.',
      'NEGATIVE SPACE. Where it is and what has to stay empty.',
      'HORIZON. Height in frame.',
      'WHAT ENTERS THE EDGES.',
    ],
    prompt:
      '9:16 vertical. The figure stands in the lower right third, small in frame. The upper left two thirds is empty sky, uninterrupted, with nothing entering the frame edges. Horizon low, at roughly one fifth from the bottom.',
    failure:
      'The subject is centred no matter what you write, because centred is the strongest prior in almost every image model.',
    fix:
      'Describe the empty area rather than the subject’s position. Models place things far more reliably when told what has to stay empty than when told where to put something.',
  },
  {
    slug: 'lighting-vocabulary',
    name: 'Lighting, said properly',
    family: 'image',
    purpose: 'Asking for light in words that move a model.',
    when: 'Any time "cinematic lighting" has failed you, which is every time.',
    scaffold: [
      'SOURCE. What is emitting.',
      'DIRECTION. Relative to camera, in clock or camera-left/right terms.',
      'QUALITY. Hard or soft, and why.',
      'RATIO. How dark the shadow side is.',
      'PRACTICALS. Anything visible in frame that emits.',
    ],
    prompt:
      'A single bare bulb above and slightly behind the subject, hard, high contrast, shadow side almost black. One practical visible in the background, warm, out of focus. No fill.',
    failure:
      '"Cinematic lighting" produces a soft, safe, three-point studio look, because that is the average of everything labelled cinematic in the training data.',
    fix:
      'Name the source and the ratio. "No fill" is worth more than any adjective you could put in front of the word lighting.',
  },
  {
    slug: 'style-without-artist-names',
    name: 'Style without naming an artist',
    family: 'image',
    purpose: 'Getting a specific look without leaning on a living person’s name.',
    when: 'Commercial work. Always, in practice.',
    scaffold: [
      'MEDIUM. What it was physically made with.',
      'SURFACE. What the image sits on and how that reads.',
      'MARK. How the marks were made and how visible they are.',
      'PALETTE. Three or four colours, named.',
      'ABSENCE. What this style does not have.',
    ],
    prompt:
      'Screen-printed on uncoated paper, three inks only, visible misregistration at the edges. Ink sits on the surface rather than soaking in. Palette limited to warm red, cream and near-black. No gradients, no soft shadows, no photographic texture.',
    failure:
      'An artist’s name gets you an average of everything attributed to them, which is rarely the thing you liked, and puts a name you do not own inside your production record.',
    fix:
      'Decompose the look into medium, surface, mark, palette and absence. The absence line does more work than the other four combined.',
  },
  {
    slug: 'text-in-image',
    name: 'Legible text in an image',
    family: 'image',
    purpose: 'Getting words that are actually the words.',
    when: 'Reluctantly, and only for short strings.',
    scaffold: [
      'THE STRING. In quotes, exact, short.',
      'WHERE IT SITS. On what surface, at what angle.',
      'TYPE CHARACTER. Weight, case, and one structural word.',
      'NOTHING ELSE TEXTUAL. Say so.',
    ],
    prompt:
      'The word "OPEN" in the window, uppercase, heavy condensed sans, painted directly on the glass, facing camera flat. No other text or lettering anywhere in the frame.',
    failure:
      'Anything past a single short word degrades, and a nearly-correct word is worse than an obviously wrong one because it ships.',
    fix:
      'Generate the plate without the text and set the type in post. This is not a workaround, it is how the shot should have been built.',
  },
  {
    slug: 'aspect-ratio-set',
    name: 'One image, every ratio',
    family: 'image',
    purpose: 'A frame that survives being cropped to six placements.',
    when: 'Paid social, where the same asset has to run 1:1, 4:5, 9:16 and 16:9.',
    scaffold: [
      'GENERATE WIDEST. Build the 16:9 first, with headroom.',
      'SAFE AREA. State what must survive the tightest crop.',
      'MARGIN. State what is deliberately expendable at the edges.',
      'THEN OUTPAINT. Extend upward for vertical, never re-generate.',
    ],
    prompt:
      'Compose 16:9. The subject and the product occupy the central square of the frame and must survive a 1:1 crop. Everything outside that square is environment only and is expendable. Leave clean, uninterrupted space above the subject for a vertical extension.',
    failure:
      'Four separate generations for four ratios, which produces four subtly different products, four different lights and a campaign that does not look like one campaign.',
    fix:
      'One master frame, outpainted. The set is only coherent if it came from one image.',
  },

  // --------------------------------------------------------- character ---
  {
    slug: 'character-brief',
    name: 'The character brief',
    family: 'character',
    purpose: 'Writing the paragraph you will paste into every shot for the next six weeks.',
    when: 'Before the first generation of any character who appears more than twice.',
    scaffold: [
      'STRUCTURE. Face shape, bone, proportion — things that do not change with mood.',
      'FIXED MARKS. Scars, moles, gaps, asymmetries. Two or three, specific.',
      'HAIR. Length, texture, parting, and how it sits when disturbed.',
      'WARDROBE. Exact, including fastenings and wear.',
      'WHAT IS NOT SPECIFIED. Expression and pose, deliberately left open.',
    ],
    prompt:
      'A woman in her late thirties. Narrow face, high cheekbones, slightly asymmetric jaw, heavier on the left. A small scar through the right eyebrow. Dark brown hair to the collarbone, thick, centre parting, falls forward when she leans. Charcoal wool coat, three buttons, the top one missing, cuffs worn at the edge. Expression and pose vary by shot.',
    failure:
      'The brief describes a mood ("warm, approachable, confident") and therefore describes nobody, so every shot returns a different person who is warm, approachable and confident.',
    fix:
      'Cut every adjective that could not be measured. Bone structure and scars carry identity; personality words carry nothing.',
  },
  {
    slug: 'reference-image-conditioning',
    name: 'Prompting with a reference image',
    family: 'character',
    purpose: 'Telling the model which parts of the reference to keep.',
    when: 'Any shot after the first, once you have a frame you like.',
    scaffold: [
      'WHAT THE REFERENCE IS FOR. Identity, or style, or composition. One of them.',
      'WHAT TO KEEP. Named explicitly.',
      'WHAT TO CHANGE. Named explicitly.',
      'WHAT THE REFERENCE IS NOT. Usually: not the pose, not the light.',
    ],
    prompt:
      'Use the reference for facial identity only. Keep the face, hair and the scar through the eyebrow exactly. Change the pose, the wardrobe, the location and the lighting entirely. Do not carry the reference’s composition or grade.',
    failure:
      'The reference is doing three jobs at once, so the model returns a near-copy of the reference frame with a small change, and you get the same shot eleven times.',
    fix:
      'One reference, one job. If you need identity and style locked, use two references and say which is which.',
  },
  {
    slug: 'trained-identity-prompting',
    name: 'Prompting a trained identity',
    family: 'character',
    purpose: 'Getting the most out of a LoRA or a trained character without over-driving it.',
    when: 'When the character is in more than about twenty shots, so training paid for itself.',
    scaffold: [
      'THE TRIGGER. Exactly as trained, once, early.',
      'MINIMAL DESCRIPTION. The model already knows the face; describing it again fights the weights.',
      'THE SHOT. Everything the training does not cover: pose, action, light, lens.',
      'STRENGTH. Lower than the default, almost always.',
    ],
    prompt:
      '<trigger> stands at a workbench, sleeves pushed up, sorting components into trays. Overhead fluorescent, flat and slightly green. 35mm, waist up, static. No description of her face.',
    failure:
      'The trigger plus a full facial description, at full strength, which produces a rigid, frontal, over-saturated version of the character that cannot turn her head.',
    fix:
      'Delete the facial description and drop the strength until she can move. A trained identity that only works in one pose was trained on one pose.',
  },
  {
    slug: 'multi-character-staging',
    name: 'Two or more people in frame',
    family: 'character',
    purpose: 'Stopping characters from swapping places, merging or facing the wrong way.',
    when: 'Any two-hander, and every shot of a group.',
    scaffold: [
      'POSITIONS. Left to right, in frame terms, before anything else.',
      'FACING. Where each one is looking, relative to the other.',
      'DEPTH. Who is nearer camera.',
      'IDENTITY ANCHORS. One distinguishing feature each, so they cannot merge.',
      'WHAT THEY ARE DOING. Only after the geometry is fixed.',
    ],
    prompt:
      'Two people. On the left, nearer camera, three-quarters back to us: a tall man in a black roll-neck, facing right, towards her. On the right, further from camera, facing camera-left towards him: a shorter woman in a red jacket, red visible throughout. He speaks, she listens. They do not swap positions and neither leaves frame.',
    failure:
      'The two of them trade places mid-clip, or blend into a third person somewhere in the middle of the shot.',
    fix:
      'Give each one a colour the other does not have. Geometry plus a colour anchor holds where description alone does not.',
  },
  {
    slug: 'continuity-across-shots',
    name: 'Continuity across a sequence',
    family: 'character',
    purpose: 'The same person, the same clothes, the same day, across twelve shots.',
    when: 'Any narrative sequence.',
    scaffold: [
      'THE CONTINUITY LINE. One sentence, identical in every prompt.',
      'STATE. What has already happened to them — wet, dusty, tired — carried forward.',
      'TIME. Where the sun is, in every shot.',
      'THE PROP. Whatever they are carrying, and in which hand.',
    ],
    prompt:
      'Continuity (every shot): same woman, charcoal coat with the top button missing, hair damp from rain, canvas bag over the left shoulder, late afternoon light from the west. She keeps the bag on the left shoulder in every shot.',
    failure:
      'The coat is fine for eight shots and then dries, the bag moves shoulders, and the sun sets and rises inside one scene.',
    fix:
      'Write the continuity line once, keep it in a file, paste it. The failure is never that the model forgot; it is that the prompt stopped saying it.',
  },

  // ----------------------------------------------------------- story -----
  {
    slug: 'premise-to-beats',
    name: 'From premise to beats',
    family: 'story',
    purpose: 'Getting structure out of a language model instead of prose.',
    when: 'At the very start, before a single line of script exists.',
    scaffold: [
      'THE PREMISE. One sentence, with a want and an obstacle in it.',
      'THE FORMAT AND LENGTH. So the beat count is real.',
      'ASK FOR BEATS ONLY. Explicitly forbid prose and dialogue.',
      'ASK FOR THE TURN IN EACH BEAT. What changes, not what happens.',
      'ASK FOR THREE OPTIONS. Not one.',
    ],
    prompt:
      'Premise: a shop owner has to sell the last thing in the shop, and the only buyer is the person she has been avoiding. Format: a 90-second short. Give me the beat structure only — no prose, no dialogue, no description. For each beat, state what the character wants, what stops them, and what has changed by the end of it. Give me three structurally different versions, not three flavours of one.',
    failure:
      'You ask for a script and get 800 words of competent, unsurprising prose that is impossible to fix because there is no structure underneath it to move.',
    fix:
      'Never ask for the finished thing first. Beats are cheap to throw away; a draft is not, and you will find yourself defending it.',
  },
  {
    slug: 'hook-generation',
    name: 'Hooks that are not clickbait',
    family: 'story',
    purpose: 'The first three seconds, in twenty variants.',
    when: 'Short-form video, ads, anything with a scroll in front of it.',
    scaffold: [
      'THE CLAIM. The single true, specific thing the piece proves.',
      'THE AUDIENCE STATE. What they believe right now.',
      'THE GAP. The distance between those two.',
      'ASK FOR MECHANISMS. Contradiction, cost, specificity, omission — not "make it punchy".',
      'BAN. Rhetorical questions, "in this video", and the word "secret".',
    ],
    prompt:
      'The claim: shortening a clip by two seconds raises completion more than any change to the edit. The audience currently believes completion is a function of how good the content is. Write twenty opening lines, each under nine words, each using a different mechanism: stating a cost, contradicting the belief, naming a number, withholding the subject, or admitting a failure. No rhetorical questions, no "in this video", no "secret".',
    failure:
      'Twenty variations of the same sentence, because you asked for twenty hooks rather than for twenty mechanisms.',
    fix:
      'Name the mechanisms in the prompt. Variety comes from the constraint list, never from asking for variety.',
  },
  {
    slug: 'scene-audit',
    name: 'Auditing a scene you already wrote',
    family: 'story',
    purpose: 'Finding out why a scene is flat without being told it is great.',
    when: 'After a draft, before a rewrite.',
    scaffold: [
      'PASTE THE SCENE.',
      'FORBID PRAISE. Explicitly.',
      'ASK FOR THE FIVE ELEMENTS. Goal, obstacle, tactic, reversal, value shift.',
      'ASK WHICH ONE IS MISSING. Force a single answer.',
      'ASK FOR THE CHEAPEST FIX. One change, not a rewrite.',
    ],
    prompt:
      'Here is a scene. Do not tell me what works. For this scene, state: what the character is actively trying to get, what physically stops them, what tactic they switch to when the first fails, what reverses, and what is worth more or less at the end than at the start. Then name the single one of those five that is absent or weakest, and give me the smallest change that would fix it.',
    failure:
      'The model opens with what it likes about the scene, and the useful half of the answer arrives after you have stopped reading.',
    fix:
      '"Do not tell me what works" is the most valuable sentence in any editorial prompt. Put it near the top.',
  },
  {
    slug: 'dialogue-pass',
    name: 'The dialogue pass',
    family: 'story',
    purpose: 'Making people sound like people.',
    when: 'Once the structure is settled and not before.',
    scaffold: [
      'THE SCENE, and what each character wants from the other.',
      'WHAT THEY WILL NOT SAY. The thing being avoided.',
      'REGISTER. Per character, in concrete terms.',
      'A LENGTH CAP. Per line.',
      'BAN. Names in dialogue, exposition, and answering the question asked.',
    ],
    prompt:
      'Two people, a kitchen, late. He wants her to say she is staying. She wants to leave without saying she is leaving. Neither says either thing. He speaks in short sentences and does not finish half of them; she is precise and slightly formal, which is how she gets when she is upset. No line longer than twelve words. No one uses the other’s name. Nobody answers the question they are asked.',
    failure:
      'Everyone is articulate, everyone answers the question, and everyone says exactly what they mean, which is how nobody has ever spoken.',
    fix:
      '"Nobody answers the question they are asked" fixes more dialogue than any note about voice.',
  },
  {
    slug: 'vsl-structure',
    name: 'The VSL / long-form sales script',
    family: 'story',
    purpose: 'Structure for a script that has to hold attention and then ask for something.',
    when: 'Direct response, launches, anything with a call to action at the end.',
    scaffold: [
      'THE ONE PROBLEM. Stated in the audience’s words, not yours.',
      'THE MECHANISM. Why the usual fix fails — this is the whole piece.',
      'PROOF. Specific, dated, checkable.',
      'THE OFFER. What it is, plainly.',
      'THE OBJECTIONS. Three, answered in order of how much they cost.',
      'THE ASK. One action.',
    ],
    prompt:
      'Write the structure only for a six-minute script. The problem, in the audience’s words. Then the mechanism: the specific reason the standard solution fails, which is the argument the whole script rests on. Then three pieces of proof, each specific and checkable. Then the offer stated plainly in one sentence. Then the three objections in order of cost, each answered in under forty words. Then one ask. No adjectives in the structure pass.',
    failure:
      'A script that is all proof and no mechanism, so it reads as a list of claims and converts like one.',
    fix:
      'Write the mechanism first and check it survives being said out loud in one sentence. If it does not, there is no script yet.',
  },
  {
    slug: 'voice-matching',
    name: 'Matching an existing voice',
    family: 'story',
    purpose: 'Getting output that sounds like the person it is signed by.',
    when: 'Founder content, ghostwriting, any brand with a real author behind it.',
    scaffold: [
      'SAMPLES. Three, real, unedited.',
      'ASK FOR THE ANALYSIS FIRST. Sentence length, rhythm, what they never do.',
      'CONFIRM THE ANALYSIS before asking for a single word of new copy.',
      'THEN THE BRIEF.',
      'THE TELLS. What the model must not import from its own defaults.',
    ],
    prompt:
      'Here are three things I have written. Before writing anything new, describe my voice: average sentence length, where I break rhythm, what I do instead of transitions, the constructions I never use, and the punctuation I avoid. Wait for me to confirm. Then write the new piece to that description. Do not use em dashes, tricolons, or any sentence of the form "it is not X, it is Y".',
    failure:
      'The model reads three samples and writes in its own voice with a couple of your words in it.',
    fix:
      'Force the analysis step and read it. If the description of your voice is wrong, nothing written from it can be right.',
  },
  {
    slug: 'story-from-a-case-study',
    name: 'A story out of a case study',
    family: 'story',
    purpose: 'Turning a result into something anyone would watch.',
    when: 'Client work, testimonials, anything that starts as a set of numbers.',
    scaffold: [
      'THE NUMBERS. All of them, unedited.',
      'THE MOMENT IT NEARLY FAILED. Ask for this explicitly.',
      'WHO DECIDED. A story needs a person making a call.',
      'THE COST OF THE DECISION. What was given up.',
      'ONLY THEN THE RESULT.',
    ],
    prompt:
      'Here are the numbers and the timeline. Find the point in it where the project was closest to failing, and who made the decision that saved it and what that decision cost. Build the story around that moment. The result goes last and gets one sentence.',
    failure:
      'A chronology: we were approached, we did the work, the numbers went up. True, complete, and unwatchable.',
    fix:
      'Ask for the near-failure. Every case study has one, and it is the only part of it that is a story.',
  },

  // ------------------------------------------------------------ post -----
  {
    slug: 'inpainting-prompt',
    name: 'Inpainting a fix',
    family: 'post',
    purpose: 'Repairing part of a frame without disturbing the rest.',
    when: 'A single wrong element in an otherwise finished frame.',
    scaffold: [
      'DESCRIBE THE PATCH ONLY. Not the picture.',
      'MATCH TERMS. Light direction, grain, focus depth of the surrounding area.',
      'THE EDGE. What it has to blend into.',
      'MASK GENEROUSLY, PROMPT NARROWLY.',
    ],
    prompt:
      'A hand with five fingers, relaxed, resting on the table edge, lit from camera left to match, same shallow focus as the surrounding area, same film grain. Blends into the dark wood at the lower edge.',
    failure:
      'The patch is technically correct and lit from the wrong side, so it reads as a sticker.',
    fix:
      'Copy the light direction and focus depth from the frame into the patch prompt, every time. Those two carry the join.',
  },
  {
    slug: 'outpainting-extension',
    name: 'Outpainting a frame',
    family: 'post',
    purpose: 'Extending a composition for another ratio.',
    when: 'Vertical cutdowns, banner crops, anything needing more frame than you generated.',
    scaffold: [
      'DIRECTION AND AMOUNT.',
      'WHAT CONTINUES. The surfaces and lines running out of frame.',
      'WHAT MUST NOT APPEAR. Usually: no new subject, no new light source.',
      'PERSPECTIVE. State that the vanishing point does not move.',
    ],
    prompt:
      'Extend upward by fifty per cent. The wall and the window frame continue as they are, same perspective, same vanishing point. Nothing new enters: no ceiling detail, no additional light source, no objects, no people. Empty wall.',
    failure:
      'The model fills the new space with something interesting, because empty space is not what it was trained to produce.',
    fix:
      'Say "empty" and then say what specifically must not appear. Positive instruction plus explicit exclusions.',
  },
  {
    slug: 'clip-extension',
    name: 'Extending a clip',
    family: 'post',
    purpose: 'Chaining a second generation onto the end of the first.',
    when: 'When the shot has to run longer than one generation holds.',
    scaffold: [
      'THE LAST FRAME as the conditioning image.',
      'STATE THE MOTION ALREADY IN PROGRESS. Direction and speed.',
      'WHAT CONTINUES UNCHANGED.',
      'WHERE IT ENDS. Give the second half a destination.',
    ],
    prompt:
      'Continue from this frame. The camera is already moving left at a slow, constant speed and continues at exactly that speed. The subject, light and background are unchanged. By the end of the clip the doorway has entered the right side of frame. No change of pace, no new elements.',
    failure:
      'The second clip starts from rest, so the join reads as a stutter no matter how well the frames match.',
    fix:
      'Always state that the motion is already in progress and at what speed. Matching velocity matters more than matching pixels.',
  },
  {
    slug: 'upscale-and-restore',
    name: 'Upscaling without inventing detail',
    family: 'post',
    purpose: 'More resolution, same picture.',
    when: 'Final delivery, broadcast, print.',
    scaffold: [
      'STATE FIDELITY OVER CREATIVITY.',
      'PROTECT. Faces, type, logos — named.',
      'ALLOW. Where invented detail is acceptable.',
      'GRAIN. Whether to keep it. Usually yes.',
    ],
    prompt:
      'Upscale at maximum fidelity to the source. Do not add detail to the face, the label or any lettering. Invented texture is acceptable in the background foliage only. Preserve existing grain, do not denoise.',
    failure:
      'An upscaler that hallucinates skin texture turns a real-looking face into a waxwork at 4K, and the artefact only appears at full size.',
    fix:
      'Always review an upscale at 100 per cent on the face before anything else. That is where it goes wrong.',
  },
  {
    slug: 'reframe-for-vertical',
    name: 'Reframing for vertical',
    family: 'post',
    purpose: 'A 16:9 master becoming a 9:16 cut that still works.',
    when: 'Every campaign, in practice.',
    scaffold: [
      'WHAT MUST STAY IN FRAME. The subject and one other thing.',
      'WHAT IS EXPENDABLE.',
      'THE TRACKING RULE. Whether the crop follows the subject or holds.',
      'WHERE TYPE GOES. Reserve it now, not later.',
    ],
    prompt:
      'Reframe to 9:16. Keep the subject’s head and hands in frame at all times; everything to the left of the doorway is expendable. The crop tracks the subject horizontally but never moves vertically. Reserve the lower fifth of the frame empty for captions.',
    failure:
      'An automatic reframe centres on whatever is moving, which in a two-shot is whoever is not speaking.',
    fix:
      'Name the subject the crop should follow. Motion is not a reliable proxy for importance.',
  },

  // --------------------------------------------------------- systems -----
  {
    slug: 'system-prompt-shape',
    name: 'The shape of a system prompt',
    family: 'systems',
    purpose: 'A prompt that behaves identically on run one and run four hundred.',
    when: 'Anything running unattended.',
    scaffold: [
      'ROLE. One line.',
      'INPUTS. Named, typed, with what to do when one is missing.',
      'THE PROCEDURE. Numbered, and short enough to follow.',
      'OUTPUT SHAPE. Exact, with an example.',
      'REFUSALS. What to do rather than guess.',
      'NEVER. The two or three things that must not happen.',
    ],
    prompt:
      'You classify inbound briefs. Inputs: brief text (required), client name (optional). If the brief text is empty, return {"status":"missing_input"} and stop. Procedure: 1) identify the deliverable, 2) identify the deadline, 3) identify anything regulated. Output exactly this JSON and nothing else: {"deliverable":"","deadline":"","regulated":true|false,"confidence":0.0}. If you cannot determine a field, leave it empty and lower confidence. Never invent a deadline. Never return prose.',
    failure:
      'The prompt works beautifully in testing and then, on an input nobody imagined, returns a helpful paragraph explaining itself, which breaks the parser downstream.',
    fix:
      'Every system prompt needs an explicit "what to do when you cannot" branch. Without one the model will improvise, and improvisation is the thing you were trying to remove.',
  },
  {
    slug: 'batch-brief',
    name: 'The batch brief',
    family: 'systems',
    purpose: 'One brief that produces forty consistent assets.',
    when: 'Volume production, variant testing, localisation.',
    scaffold: [
      'THE INVARIANT. Everything identical across the batch.',
      'THE VARIABLE. The one axis that changes, and its values.',
      'THE NAMING. How each output is labelled, so the set is findable later.',
      'THE GATE. What disqualifies an output before a human sees it.',
      'THE CEILING. Maximum attempts per asset.',
    ],
    prompt:
      'Invariant across all outputs: same product, same lighting setup, same 50mm lens, same grade, same empty upper third. Variable: background surface only — concrete, oak, brushed steel, linen, marble. Name each output as product_surface_v01. Reject automatically any frame where the label is not fully legible or the upper third is not clear. Maximum six attempts per surface, then stop and flag.',
    failure:
      'Forty assets that vary on three axes because the invariant was written as a suggestion rather than a constraint.',
    fix:
      'Write the invariant as a block and paste it unchanged. Anything you retype, you will change.',
  },
  {
    slug: 'evaluation-prompt',
    name: 'The evaluation prompt',
    family: 'systems',
    purpose: 'Having a model grade output against a rule instead of a vibe.',
    when: 'Any pipeline with a gate in it.',
    scaffold: [
      'THE CRITERIA. Binary where possible.',
      'ONE AT A TIME. Ask for each judgement separately.',
      'EVIDENCE. Require the reason before the verdict.',
      'NO SCORES OUT OF TEN. They are noise.',
      'THE ESCALATION. What "unsure" routes to.',
    ],
    prompt:
      'For each criterion, first state the evidence you are using, then answer only PASS or FAIL. 1) Is all text in the frame legible and correctly spelled? 2) Does every visible hand have five fingers? 3) Is the product label unmodified from the reference? 4) Is the upper third free of any object? If you cannot determine one with confidence, answer ESCALATE and say which criterion. Do not give an overall score.',
    failure:
      'A single "rate this 1-10" call, which returns 7 for everything and gates nothing.',
    fix:
      'Binary criteria, evidence first, escalation branch. A gate that never fails anything is not a gate.',
  },
  {
    slug: 'atomisation-prompt',
    name: 'Atomising one piece into many',
    family: 'systems',
    purpose: 'Turning a long piece into assets that are genuinely different from each other.',
    when: 'Repurposing, always.',
    scaffold: [
      'INVENTORY FIRST. Every distinct claim, with its evidence.',
      'RANK BY SURPRISE.',
      'MATCH CLAIM TO FORMAT. Different claims, different formats.',
      'FORBID SUMMARISING. Explicitly.',
    ],
    prompt:
      'Read this article. Do not summarise it. List every distinct claim it makes, with the evidence given for each, and rank them by how much they would surprise someone who works in this field. Then assign the top eight to formats: the most counter-intuitive with three supports to a carousel, the most quotable standalone sentence to a quote card, the most definitional to an answer-engine snippet. Each asset opens on a different claim.',
    failure:
      'Nine assets that all open with the article’s first sentence in different aspect ratios.',
    fix:
      'The word "summarise" is the enemy. Inventory the claims, then build from the claims.',
  },
  {
    slug: 'research-brief-prompt',
    name: 'The research prompt',
    family: 'systems',
    purpose: 'Getting facts you can publish rather than plausible sentences.',
    when: 'Anything touching regulation, numbers, or a date.',
    scaffold: [
      'THE QUESTION. Narrow.',
      'THE SOURCE STANDARD. Primary only, named types.',
      'THE UNKNOWN BRANCH. What to say when it cannot find one.',
      'THE FORMAT. Claim, source, date, confidence.',
      'BAN. Summarising from memory.',
    ],
    prompt:
      'Question: what disclosure does this regulation require for synthetic media in advertising, as of today. Use primary sources only: the legislation itself, the regulator’s own guidance, or an official platform policy page. For each claim give the exact source URL and the date it was published or last amended. Where you cannot find a primary source, write NOT FOUND rather than answering from memory. Do not paraphrase legal text — quote it.',
    failure:
      'A confident, well-organised summary of the regulation as it stood eighteen months ago, with no dates on anything.',
    fix:
      'Require a date on every claim. A claim without a date is not checkable, and an uncheckable claim about the law is a liability.',
  },
];

export const guidesInFamily = (key: string) => promptGuides.filter((g) => g.family === key);

export const getPromptGuide = (slug: string) => promptGuides.find((g) => g.slug === slug);
