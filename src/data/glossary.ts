// The glossary. Terms from generative and synthetic media production, defined
// the way a producer needs them rather than the way a paper defines them.
//
// The set below is the original core. Sixty further terms live in
// glossary-additions.ts and are concatenated into `terms` at the foot of this
// file: one file of a thousand lines was already at the limit of what anybody
// wants to scroll, and splitting it changes nothing else.
//
// Every entry carries a one-line definition for the snippet, two or three
// paragraphs of body, and the questions people actually type. Each gets its own
// page and its own DefinedTerm node.

export interface GlossaryQA {
  q: string;
  a: string;
}

export interface Term {
  slug: string;
  term: string;
  /** Alternative spellings and acronyms, for on-page search and schema. */
  aka?: string[];
  /** One sentence. This is the meta description and the snippet. */
  short: string;
  tags: string[];
  body: string[];
  qa: GlossaryQA[];
  related: string[];
}

// Type-only in the other direction, so there is no runtime cycle.
import { additionalTerms } from './glossary-additions';

export const GLOSSARY_TAGS = [
  'production',
  'models',
  'control',
  'ethics',
  'systems',
  'post',
  'strategy',
  'story',
  'audience',
] as const;

const coreTerms: Term[] = [
  {
    slug: 'agentic-workflow',
    term: 'Agentic Workflow',
    aka: ['AI agent workflow', 'agentic automation'],
    short:
      'A process where a model plans and executes several steps against real tools, with a person deciding at named checkpoints rather than approving every keystroke.',
    tags: ['systems', 'production'],
    body: [
      'A prompt gets you one answer. An agentic workflow gets you a sequence: the model reads the brief, calls the tools it needs, checks its own output against a rule, and stops at the points where a person has to decide. The difference that matters commercially is not intelligence, it is scope. One is a reply. The other is a job that runs.',
      'The engineering is unglamorous and it is where the value sits. A directory of skills the model can load. Connectors to the software the team already runs. A naming convention so the outputs are findable next quarter. A ledger recording cost per accepted asset. Teams that skip that part get a demo that works once, in front of an audience, and never again.',
      'Every workflow we build carries a human gate: a person signs off the brief and the final output, at any volume. No exception has ever been worth it.',
    ],
    qa: [
      {
        q: 'What is the difference between an agentic workflow and automation?',
        a: 'Classic automation follows a fixed path someone drew in advance. An agentic workflow decides its own path within stated boundaries, which makes it useful for work that varies (briefs, research, drafting) and dangerous for work that must never vary, like billing.',
      },
      {
        q: 'Do agentic workflows replace the creative team?',
        a: 'No. They remove the coordination tax. The team still decides what is good; the workflow removes the four hours a week spent renaming files, chasing approvals and rebuilding the same deck.',
      },
      {
        q: 'What does an agentic workflow cost to run?',
        a: 'The honest unit is cost per accepted asset, not cost per generation. A pipeline that produces forty frames and passes three has a real cost of the forty. Any studio quoting you the three is quoting the wrong number.',
      },
    ],
    related: ['mcp', 'operator-stack', 'cost-per-accepted-asset', 'human-in-the-loop'],
  },
  {
    slug: 'ai-slop',
    term: 'AI Slop',
    short:
      'Generated content produced at volume without editorial judgement, recognisable by its smoothness, its symmetry and its complete absence of a point of view.',
    tags: ['strategy', 'ethics'],
    body: [
      'Slop is not a technical failure. Most of it is technically clean: correct anatomy, pleasant lighting, no artefacts. What it lacks is a decision. Nobody chose the lens, nobody chose what to leave out, and nobody was willing to make the frame worse in one way to make it better in another. The audience reads that absence instantly, even when they cannot name it.',
      'The commercial cost is specific. Slop trains an audience to skip a format. Once a feed has taught someone that a certain gloss means nothing worth reading, every subsequent piece in that register pays the tax, including the good one.',
      'The fix is not less generation. It is a person with taste holding a veto, and a brief that states what the piece is allowed to be bad at.',
    ],
    qa: [
      {
        q: 'How do you tell AI slop from good generative work?',
        a: 'Ask what the piece is refusing to do. Good work makes a choice you could argue with: a strange crop, an ugly colour, a beat held too long. Slop makes no choice at all, which is why every piece of it looks like every other piece.',
      },
      {
        q: 'Does using AI automatically produce slop?',
        a: 'No. Slop is what you get when the tool is the whole process. When generation is one stage inside a pipeline with gates, a register and an editor, the output looks like the studio rather than like the model.',
      },
    ],
    related: ['human-in-the-loop', 'register', 'synthetic-media'],
  },
  {
    slug: 'c2pa',
    term: 'C2PA / Content Credentials',
    aka: ['Content Credentials', 'content provenance'],
    short:
      'An open standard that attaches a signed, tamper-evident record of how a piece of media was made and edited, travelling with the file itself.',
    tags: ['ethics', 'post'],
    body: [
      'C2PA writes a manifest into the asset: which tool made it, what was changed, and by whom, each step cryptographically signed. Strip it and the absence is itself information. It is the closest thing the industry has to a chain of custody for a picture.',
      'For a brand this is becoming a procurement question rather than an ethics question. Platforms, broadcasters and an increasing number of client legal teams now ask what provenance an asset carries before it runs. Answering "none" is a slower answer than it used to be.',
      'We treat credentials as a deliverable, not an afterthought. If a client needs them attached, that goes in the brief, because retrofitting provenance onto a finished cut is not possible.',
    ],
    qa: [
      {
        q: 'Is C2PA the same as a watermark?',
        a: 'No. A watermark marks the pixels. C2PA signs the file’s history. A watermark survives a screenshot badly; a C2PA manifest does not survive a screenshot at all, which is why serious workflows use both.',
      },
      {
        q: 'Do I legally have to disclose AI-generated content?',
        a: 'It depends on where it runs and what it claims. Several platforms require a synthetic-media label, the EU AI Act sets transparency duties for certain deepfake content, and advertising codes apply regardless. We work to the stricter of platform policy and client legal.',
      },
    ],
    related: ['disclosure', 'watermarking', 'deepfake', 'synthetic-media'],
  },
  {
    slug: 'camera-control',
    term: 'Camera Control',
    aka: ['camera motion control', 'AI camera moves'],
    short:
      'Directing a generative video model with the vocabulary of a camera department (dolly, truck, crane, rack focus) instead of describing what the shot should feel like.',
    tags: ['production', 'control'],
    body: [
      'Models trained on film respond to film language. "Dolly in slowly on the subject" produces a repeatable result; "make it cinematic and emotional" produces a lottery. The gain is not aesthetic, it is variance: a named move gives you a shot you can ask for twice.',
      'The moves that work are the ones a crew could physically do, plus a small number that only exist because the camera is imaginary: the unbroken orbit-to-street zoom, the fly-through an aperture too small for a rig. Those are worth reaching for precisely because a shoot could not deliver them.',
      'We publish our working reference of thirty-eight camera movements with a usable prompt for each, free and without an email gate.',
    ],
    qa: [
      {
        q: 'Which camera moves work best in AI video generation?',
        a: 'Single, clearly named moves with one intention: slow dolly in, truck left with parallax, crane down, rack focus. Compound moves (orbit while craning while pulling focus) fail more often, because the model has to satisfy three constraints at once.',
      },
      {
        q: 'Why does my AI video ignore the camera direction?',
        a: 'Usually because the prompt describes mood alongside movement, and the mood words dominate. Put the move first, in camera vocabulary, in its own sentence, then describe the subject.',
      },
    ],
    related: ['text-to-video', 'image-to-video', 'temporal-coherence', 'shot-list'],
  },
  {
    slug: 'cfg-scale',
    term: 'CFG Scale',
    aka: ['guidance scale', 'classifier-free guidance'],
    short:
      'A dial controlling how literally a diffusion model obeys the prompt, trading obedience against image quality.',
    tags: ['models', 'control'],
    body: [
      'Low guidance lets the model wander: prettier, looser, less like what you asked for. High guidance forces compliance: closer to the prompt, and past a threshold, burnt contrast, over-saturated colour and a plasticky surface. The useful range is narrower than the slider suggests.',
      'Practically it is a diagnostic. If a frame keeps ignoring one element of the brief, raising guidance is the wrong first move: rewriting the prompt so that element leads the sentence is usually the right one. Guidance is for fine adjustment, not for arguing with the model.',
    ],
    qa: [
      {
        q: 'What CFG scale should I use?',
        a: 'Start in the middle of whatever the model documents as its default band and move in small steps. If you need to go far above it to get compliance, the prompt is the problem.',
      },
      {
        q: 'Why do my images look burnt or over-saturated?',
        a: 'Guidance set too high is the most common cause. Drop it, and move the emphasis into the prompt wording instead.',
      },
    ],
    related: ['diffusion-model', 'negative-prompt', 'seed', 'prompt-engineering'],
  },
  {
    slug: 'character-consistency',
    term: 'Character Consistency',
    short:
      'Keeping the same face, body and wardrobe recognisably identical across shots, scenes and sessions.',
    tags: ['production', 'control'],
    body: [
      'This is the single hardest problem in synthetic production and the one that decides whether a piece of work is a demo or a campaign. Audiences tolerate a great deal of oddity in a generated frame; they do not tolerate a presenter whose jaw changes between two adverts in the same set.',
      'The test is mechanical: stack the frames and flick through them at speed. Drift in the jawline, the eye spacing or the hairline shows up immediately, in a way that studying one frame at a time hides. A fail goes back to the identity sheet. It never goes to inpainting, because patching a face teaches you nothing and produces a second face that also drifts.',
    ],
    qa: [
      {
        q: 'How do you keep an AI character consistent across scenes?',
        a: 'Train the identity once from a sheet of twenty-plus stills at varied angles under even light, then generate every scene from that trained identity rather than from a fresh description. Reference images alone drift by the fourth shot.',
      },
      {
        q: 'Why does my character’s face change between shots?',
        a: 'Because each shot is being generated from the prompt rather than from a locked identity. Text cannot specify a face precisely enough to reproduce it, and small wording changes move it further.',
      },
    ],
    related: ['trained-identity', 'identity-lock', 'drift', 'lora'],
  },
  {
    slug: 'controlnet',
    term: 'ControlNet',
    short:
      'A conditioning layer that constrains a diffusion model with structural input (a pose skeleton, a depth map, an edge trace) so composition survives a change of style.',
    tags: ['models', 'control'],
    body: [
      'ControlNet answers the question text cannot: exactly where. You supply structure (the pose of a figure, the depth of a room, the outline of a product) and the model fills it with the look you asked for while respecting the geometry you gave it.',
      'In production the point is repeatability. The same depth map rendered in four registers gives four styles of the same shot, which is how a campaign holds its layout while changing its skin. It is also the cheapest fix for a composition the model keeps refusing to build.',
    ],
    qa: [
      {
        q: 'What is ControlNet used for?',
        a: 'Locking composition, pose or layout while letting style vary. Common inputs are pose skeletons, depth maps, Canny edge traces and segmentation masks.',
      },
      {
        q: 'Does ControlNet work for video?',
        a: 'Structural conditioning exists for video too, and it is what keeps motion tied to a real reference. The failure mode moves from wrong geometry to jitter between frames, which is a temporal coherence problem.',
      },
    ],
    related: ['diffusion-model', 'reference-image', 'temporal-coherence', 'master-plate'],
  },
  {
    slug: 'cost-per-accepted-asset',
    term: 'Cost Per Accepted Asset',
    aka: ['CPAA', 'render budget'],
    short:
      'The only generation metric that means anything: total spend divided by the number of assets that actually shipped.',
    tags: ['systems', 'strategy'],
    body: [
      'Generation is cheap per attempt and expensive per keeper. A pipeline that renders sixty frames to ship four has a real unit cost fifteen times the sticker price. Studios quoting the sticker price are either new or hoping you do not ask.',
      'Tracking it changes behaviour. Once the ledger exists, the argument stops being about which model is best and starts being about which gate is failing most, because the gate that fails most is the one burning the budget. That is a fixable, boring, extremely profitable question.',
    ],
    qa: [
      {
        q: 'How do you budget an AI video production?',
        a: 'Agree a credit ceiling per asset before a batch starts and log every run. The job halts and asks for a decision at the ceiling rather than quietly spending past it.',
      },
      {
        q: 'Is generative production actually cheaper?',
        a: 'For the right brief, substantially: no crew, no location, no reshoot. For a brief that needs a real face, a real place and a real product on the same day, often not. We say which one you have before quoting.',
      },
    ],
    related: ['agentic-workflow', 'operator-stack', 'gate'],
  },
  {
    slug: 'deepfake',
    term: 'Deepfake',
    short:
      'Synthetic media that depicts a real, identifiable person doing or saying something they did not, whether or not the intent is malicious.',
    tags: ['ethics'],
    body: [
      'The word covers a technique and an accusation, which is why it is worth using precisely. A trained synthetic presenter who is nobody is not a deepfake. A generated clip of a named public figure is one, even when it is clearly a joke and clearly labelled.',
      'Our position is procedural rather than moral. No identifiable real person appears in our output without a signed release for the likeness and, where a voice is used, for the voice. That is a gate, not a preference, and it applies to satire as firmly as it applies to advertising.',
    ],
    qa: [
      {
        q: 'Is a synthetic presenter a deepfake?',
        a: 'Not if the person does not exist. Deepfake means a depiction of a real, identifiable individual. A trained identity built from a licensed sheet of a fictional person is a synthetic presenter, and should still be disclosed as synthetic.',
      },
      {
        q: 'Is it legal to use someone’s likeness in AI content?',
        a: 'Not without permission, in most jurisdictions that matter to advertising. Personality and image rights, plus platform policy, plus advertising codes, all apply. Get the release before rendering, not after.',
      },
    ],
    related: ['c2pa', 'disclosure', 'voice-cloning', 'trained-identity'],
  },
  {
    slug: 'denoising-steps',
    term: 'Denoising Steps',
    aka: ['sampling steps', 'inference steps'],
    short:
      'How many passes a diffusion model takes to walk an image from noise to a finished frame.',
    tags: ['models'],
    body: [
      'Fewer steps is faster and rougher. More steps is slower and, up to a point, cleaner: then it stops improving and only costs money. Every model has a plateau, and finding it once for the model you use saves more budget than any prompt trick.',
      'For iteration, run low steps: you are judging composition, not surface. Only the frames that survive selection are worth rendering at full step count. Teams that render everything at maximum quality spend their budget rejecting beautiful pictures.',
    ],
    qa: [
      {
        q: 'How many steps should I use for image generation?',
        a: 'Run a ladder once, holding the seed and prompt across several step counts, and look for where the difference stops being visible. That number is your ceiling for that model. Iterate well below it.',
      },
    ],
    related: ['diffusion-model', 'seed', 'cfg-scale', 'cost-per-accepted-asset'],
  },
  {
    slug: 'diffusion-model',
    term: 'Diffusion Model',
    short:
      'The architecture behind most image and video generators: it learns to reverse a noising process, and generates by denoising random static into a frame that matches your conditioning.',
    tags: ['models'],
    body: [
      'Training teaches the model to destroy pictures in a controlled way and to undo that destruction. Generation runs the undoing on pure noise, steered by your prompt, your reference image and whatever structural conditioning you supply. That is the whole idea; everything else is engineering.',
      'Two practical consequences follow. First, output is stochastic: the same prompt gives different frames unless you fix the seed. Second, the model has no concept of the object it is drawing, only of what pictures of it tend to look like, which is exactly why labels, spoke counts and hands need gates.',
    ],
    qa: [
      {
        q: 'How does a diffusion model actually generate an image?',
        a: 'It starts from random noise and repeatedly predicts what to remove, guided by your prompt and any conditioning, until a coherent frame is left. Each pass is a denoising step.',
      },
      {
        q: 'Why does the same prompt give different images?',
        a: 'Because the starting noise differs each run. Fix the seed and the same prompt with the same settings reproduces the same frame.',
      },
    ],
    related: ['denoising-steps', 'seed', 'latent-space', 'cfg-scale'],
  },
  {
    slug: 'disclosure',
    term: 'Disclosure',
    aka: ['AI disclosure', 'synthetic media label'],
    short:
      'Telling the audience that what they are looking at was made or materially altered by a generative model, in the place they will actually see it.',
    tags: ['ethics', 'strategy'],
    body: [
      'Disclosure is now a mix of platform policy, advertising code and, in some markets, statute. The practical rule is simpler than the legal landscape: label to the strictest standard that applies, and put the label where the viewer is, not in a caption nobody expands.',
      'The commercial fear, that admitting a piece is synthetic destroys its credibility, has largely not survived contact with reality. What destroys credibility is being caught. Brands that label early get to compete on whether the work is good.',
    ],
    qa: [
      {
        q: 'Do I have to label AI-generated ads?',
        a: 'On most major platforms, yes, for realistic synthetic depictions of people, places or events. Advertising codes on misleading representation apply independently, and the EU AI Act adds transparency duties for certain content.',
      },
      {
        q: 'Where should the AI label go?',
        a: 'In frame or on the asset, not only in the platform metadata. A metadata flag protects you with the platform; an on-asset label protects you with the audience.',
      },
    ],
    related: ['c2pa', 'deepfake', 'watermarking', 'synthetic-media'],
  },
  {
    slug: 'drift',
    term: 'Drift',
    short:
      'The slow, cumulative change in a subject across a set of generations (a face, a product, a colour) where no single frame looks wrong but the run does.',
    tags: ['production', 'control'],
    body: [
      'Drift is dangerous precisely because it is invisible at the frame level. Reviewed one at a time, every image passes. Played in sequence, the jaw has narrowed, the can has grown a millimetre and the key light has swung fifteen degrees.',
      'Every gate we run exists to catch it: stack and flick for faces, silhouette overlay for products, one stated key direction for a set. The rule underneath all three is the same: compare against the locked reference, never against the previous frame, because comparing to the previous frame is how drift accumulates unnoticed.',
    ],
    qa: [
      {
        q: 'How do you stop AI image drift across a series?',
        a: 'Lock a master reference before the set exists and generate everything from it. Then check each new frame against that reference, not against the last one you liked.',
      },
    ],
    related: ['character-consistency', 'master-plate', 'gate', 'temporal-coherence'],
  },
  {
    slug: 'fine-tuning',
    term: 'Fine-Tuning',
    short:
      'Continuing a model’s training on a narrow dataset so it reliably produces one style, one subject or one house voice.',
    tags: ['models'],
    body: [
      'Full fine-tuning updates the model’s weights and needs real data and real compute. Most production work does not need it: a lightweight adapter such as a LoRA, or a trained identity inside a platform, gets ninety per cent of the benefit for a fraction of the cost and can be swapped out per project.',
      'The reason to fine-tune properly is a house style that has to hold across thousands of assets and outlive any one tool. The reason not to is that a fine-tune is a maintenance commitment, and a stale one is worse than none.',
    ],
    qa: [
      {
        q: 'Should I fine-tune a model for my brand?',
        a: 'Only after a LoRA or a trained identity has failed to hold the style at the volume you need. Start light, measure the failure rate, escalate if the numbers justify it.',
      },
      {
        q: 'What is the difference between fine-tuning and prompting?',
        a: 'Prompting steers a general model at run time. Fine-tuning changes what the model is, so the behaviour persists without being asked for each time.',
      },
    ],
    related: ['lora', 'trained-identity', 'foundation-model', 'style-transfer'],
  },
  {
    slug: 'first-last-frame',
    term: 'First–Last Frame',
    aka: ['keyframe interpolation', 'FLF'],
    short:
      'Handing a video model a start image and an end image and asking it to generate the motion between them.',
    tags: ['production', 'control'],
    body: [
      'This is the most controllable way to direct a generated shot. You are no longer describing motion in words; you are specifying where the shot begins and where it ends, and letting the model solve the middle. Composition, framing and continuity all become decisions you make in stills.',
      'It is also how episodic work holds together. The last frame of one shot becomes the first frame of the next, so a sequence can run for minutes without the world quietly reorganising itself between cuts.',
    ],
    qa: [
      {
        q: 'How do I control motion in AI video?',
        a: 'Supply the first and last frame rather than describing the move. If the model only accepts one image, supply the first frame and keep the requested move to a single named camera action.',
      },
    ],
    related: ['image-to-video', 'camera-control', 'temporal-coherence', 'autoregressive-video-model'],
  },
  {
    slug: 'foundation-model',
    term: 'Foundation Model',
    short:
      'A large general-purpose model trained on broad data, intended to be adapted to specific tasks rather than used raw.',
    tags: ['models'],
    body: [
      'The commercial significance of a foundation model is that it is a substrate, not a product. Everything useful gets built on top: adapters, skills, tool access, retrieval, and the guard rails a client will actually sign off.',
      'For a studio the practical consequence is churn. Models are replaced faster than pipelines are, so anything valuable belongs in the pipeline (the plates, the identity sheets, the gates, the ledger) and not in a particular model’s quirks.',
    ],
    qa: [
      {
        q: 'Which AI model is best for video?',
        a: 'The question ages badly. Build the pipeline so the generation stage is swappable, then choose per project on licence terms, motion quality and how the model handles the specific failure your subject invites.',
      },
    ],
    related: ['fine-tuning', 'multimodal-model', 'agentic-workflow'],
  },
  {
    slug: 'gate',
    term: 'Gate',
    aka: ['control gate', 'quality gate'],
    short:
      'A named, mechanical test a frame must pass before anyone sees it, with a stated action on failure.',
    tags: ['production', 'systems'],
    body: [
      'A gate is not a vibe check. It has a test that two people would run the same way, and a defined consequence. "Zoom to full resolution and read every word on the packaging; a fail returns to the master plate" is a gate. "Make sure it looks right" is a hope.',
      'Gates are also what makes volume safe. At four assets a week, taste catches everything. At four hundred, only a checklist does, and the checklist has to name the failure modes that particular subject invites: labels for packaging, spoke counts for motorcycles, hands for anything held.',
    ],
    qa: [
      {
        q: 'What quality checks should an AI production have?',
        a: 'At minimum: a likeness check for people, a label check for anything printed, a silhouette check for products, a light-direction check across a set, and a claim check so nothing invented ends up as a factual assertion.',
      },
      {
        q: 'Who signs off generated work?',
        a: 'A person, on the brief and on the final cut, at any volume. That is the human gate, and it is the one gate with no exceptions.',
      },
    ],
    related: ['drift', 'master-plate', 'human-in-the-loop', 'cost-per-accepted-asset'],
  },
  {
    slug: 'hallucination',
    term: 'Hallucination',
    short:
      'Confident invention: a model producing a certification mark, a statistic, a limb or a citation that does not exist.',
    tags: ['models', 'ethics'],
    body: [
      'A generative model optimises for plausibility, not truth. It has no mechanism for knowing that the award badge it has drawn on your packaging is fictional, because it is not drawing an award badge; it is drawing what award badges look like.',
      'In visual work the expensive hallucinations are the legally loaded ones: invented certifications, invented ingredient claims, invented awards. That is why the claim gate exists, and why it is separate from the label gate. A label can be checked by reading. A claim has to be checked against a document.',
    ],
    qa: [
      {
        q: 'How do you stop AI hallucinations in marketing content?',
        a: 'Constrain and verify. Give the model the source text rather than asking it to recall, and run a claim gate where every factual assertion on screen has to trace to a document before it renders.',
      },
    ],
    related: ['gate', 'rag', 'ai-slop', 'disclosure'],
  },
  {
    slug: 'human-in-the-loop',
    term: 'Human in the Loop',
    aka: ['HITL', 'human gate'],
    short:
      'A named person with authority to stop the run, placed at the points in a workflow where a wrong decision is expensive.',
    tags: ['systems', 'ethics'],
    body: [
      'The phrase is often used to mean somebody is watching. That is not the same thing. A human in the loop has a specific decision to make at a specific step and the authority to reject, which means the workflow has to be built to stop and wait.',
      'The two places it always sits are the brief and the final cut. Everything between those can be automated, batched and run overnight. Those two cannot, at any volume, for any client.',
    ],
    qa: [
      {
        q: 'Can AI content production be fully automated?',
        a: 'The production can. The judgement cannot, and should not be. Automate the drafting, the variants and the formats; keep a person on the brief and the final approval.',
      },
    ],
    related: ['gate', 'agentic-workflow', 'ai-slop'],
  },
  {
    slug: 'identity-lock',
    term: 'Identity Lock',
    short:
      'Our pipeline for synthetic presenters: train the face once from a stills sheet, then run every subsequent variant from the trained identity rather than from a description.',
    tags: ['production', 'systems'],
    body: [
      'Casting brief, identity sheet, trained identity, scene plates, motion, voice. Four days from brief to nine finished variants, after which variant forty costs what variant ten did, because the cast already exists.',
      'The gates are the point: likeness, hands, consent, disclosure. Nothing renders until a signed release for the voice and the likeness reference sits in the folder, and nothing releases without a synthetic-media label that satisfies both platform policy and client legal.',
    ],
    qa: [
      {
        q: 'How do you make a consistent AI presenter for ads?',
        a: 'Write the persona as a casting brief, shoot or generate twenty-plus stills at varied angles under even light, train an identity from that sheet, and build every scene from the identity. Never from a fresh prompt.',
      },
    ],
    related: ['trained-identity', 'character-consistency', 'synthetic-ugc', 'voice-cloning'],
  },
  {
    slug: 'image-to-video',
    term: 'Image-to-Video',
    aka: ['I2V'],
    short:
      'Generating a moving shot from a still you have already approved, rather than from text alone.',
    tags: ['production'],
    body: [
      'This is the default working method for anything that has to look like a specific thing. You settle composition, lighting, product and wardrobe as a still (cheap, fast, reviewable) and only then spend a video render on it. Text-to-video is for exploration; image-to-video is for delivery.',
      'It also puts the gates in the right place. A label that fails at the still stage costs one image. The same failure discovered after motion costs the clip.',
    ],
    qa: [
      {
        q: 'Is image-to-video better than text-to-video?',
        a: 'For controlled work, almost always. You approve the frame before you pay for the motion, and the model has far less room to reinvent the subject.',
      },
    ],
    related: ['text-to-video', 'first-last-frame', 'master-plate', 'camera-control'],
  },
  {
    slug: 'inpainting',
    term: 'Inpainting',
    aka: ['generative fill'],
    short:
      'Regenerating a masked region of an existing image while the rest of the frame stays untouched.',
    tags: ['post'],
    body: [
      'Inpainting is the right tool for removing a boom, cleaning a plate or extending a surface. It is the wrong tool for fixing a face, and that distinction is worth holding firmly.',
      'Patching a drifted likeness by inpainting produces a frame that passes on its own and a set that still fails, because the underlying identity was never corrected. The rule in our pipelines is blunt: a likeness failure regenerates from the identity sheet. It never gets patched.',
    ],
    qa: [
      {
        q: 'When should you use inpainting?',
        a: 'For removals, cleanups and small environmental fixes. Not for faces, not for logos, and not for packaging type, all of which should return to their locked source instead.',
      },
    ],
    related: ['outpainting', 'character-consistency', 'gate', 'master-plate'],
  },
  {
    slug: 'latent-space',
    term: 'Latent Space',
    short:
      'The compressed mathematical space a generative model actually works in, where similar concepts sit near each other.',
    tags: ['models'],
    body: [
      'Models do not manipulate pixels; they manipulate a much smaller encoded representation and decode it at the end. That is why generation is tractable at all, and why a small change to a prompt can produce a large change to a frame. You have moved to a different neighbourhood.',
      'The practical use is interpolation. Moving smoothly between two points in latent space is what produces a morph, a style blend or a coherent transition, and it is the mechanism underneath first–last frame video.',
    ],
    qa: [
      {
        q: 'Why does changing one word change the whole image?',
        a: 'Because the word moved the conditioning to a different region of latent space. Nearby regions look similar; distant ones do not, and prompts do not map to distance in an intuitive way.',
      },
    ],
    related: ['diffusion-model', 'seed', 'first-last-frame'],
  },
  {
    slug: 'lora',
    term: 'LoRA',
    aka: ['Low-Rank Adaptation'],
    short:
      'A small trained adapter that teaches a large model one style, character or object without retraining the model itself.',
    tags: ['models', 'control'],
    body: [
      'A LoRA is a few megabytes that sit alongside a model of many gigabytes and steer it. Cheap to train, easy to version, trivial to remove. For a studio this is the right granularity: one per brand style, one per recurring character, swapped per project.',
      'The failure mode is overcooking. A LoRA trained too hard on too few images stops being a style and starts being a photocopier, reproducing the training set’s backgrounds and poses along with the thing you wanted.',
    ],
    qa: [
      {
        q: 'How many images do you need to train a LoRA?',
        a: 'For a style, a few dozen varied examples. For a character, twenty to forty clean stills at varied angles under even light. Quality and variety matter more than quantity.',
      },
      {
        q: 'LoRA or full fine-tuning?',
        a: 'LoRA first, every time. Escalate to a full fine-tune only when a measured failure rate at your actual volume justifies the maintenance.',
      },
    ],
    related: ['fine-tuning', 'trained-identity', 'style-transfer', 'character-consistency'],
  },
  {
    slug: 'master-plate',
    term: 'Master Plate',
    short:
      'The single locked reference frame of a subject that every later generation is built from, so the subject cannot wander across a set.',
    tags: ['production', 'control'],
    body: [
      'One clean frame of the product on a transparent background: correct shape, correct label, correct proportions, nothing else in the picture. Every subsequent angle, set and motion clip references that file instead of a fresh prompt.',
      'The plate is also the arbiter. When a frame is questioned, it is checked against the plate at forty per cent opacity: not against the previous frame, and not against memory. That single discipline is what makes ninety frames of one product survivable.',
    ],
    qa: [
      {
        q: 'How do you keep a product looking identical across AI images?',
        a: 'Build a master plate first, generate everything from it, and run a silhouette overlay on every output. Any shift in outline kills the frame and it goes back to the plate.',
      },
    ],
    related: ['phantom-set', 'drift', 'gate', 'reference-image'],
  },
  {
    slug: 'mcp',
    term: 'MCP',
    aka: ['Model Context Protocol'],
    short:
      'An open protocol for connecting a model to external tools and data through a standard interface, so a capability written once works across clients.',
    tags: ['systems'],
    body: [
      'Before a standard existed, every integration between a model and a piece of software was bespoke. MCP makes the connection a server: expose the tool once, and any compatible client can use it. That is the difference between a demo and infrastructure.',
      'For a studio the payoff is that the pipeline stops being tool-shaped. Generation, asset storage, the tracker and the approvals channel all become things the workflow can reach, which is what allows a batch job to run overnight and leave a person a decision in the morning.',
    ],
    qa: [
      {
        q: 'What is MCP used for?',
        a: 'Giving a model controlled access to real systems (files, databases, APIs, internal tools) through one standard interface rather than a bespoke integration each time.',
      },
    ],
    related: ['agentic-workflow', 'operator-stack', 'foundation-model'],
  },
  {
    slug: 'multimodal-model',
    term: 'Multimodal Model',
    short:
      'A model that takes and produces more than one kind of input (text, image, audio, video) inside a single system.',
    tags: ['models'],
    body: [
      'The practical gain is that a brief, a reference frame and a voice note can go into the same conversation and come out as a shot list, a plate and a script. The handoffs that used to lose information between tools happen inside one context instead.',
      'The practical risk is the same thing. A model that can see your reference will also confidently describe what is not in it, so multimodal input does not remove the need for a claim gate. It moves it earlier.',
    ],
    qa: [
      {
        q: 'What can multimodal models do that text models cannot?',
        a: 'Read a frame and act on what is in it: critique a composition, extract a palette, match a reference, or take a rough sketch and turn it into a specification.',
      },
    ],
    related: ['foundation-model', 'hallucination', 'agentic-workflow'],
  },
  {
    slug: 'negative-prompt',
    term: 'Negative Prompt',
    short:
      'A list of things to steer away from, applied as a counterweight to the main prompt.',
    tags: ['control'],
    body: [
      'Negative prompts work best on concrete, visual nouns: extra fingers, watermark, text, blur. They work badly on abstractions, because "not boring" describes nothing the model can move away from.',
      'They are also over-used. A long inherited negative prompt copied from a forum quietly fights your actual brief. Start empty, add the specific failure you keep seeing, and remove anything that has not earned its place.',
    ],
    qa: [
      {
        q: 'What should I put in a negative prompt?',
        a: 'The specific artefacts you are actually getting, named as objects. Nothing aspirational, nothing abstract, and nothing you have not personally seen the model produce.',
      },
    ],
    related: ['prompt-engineering', 'cfg-scale', 'diffusion-model'],
  },
  {
    slug: 'operator-stack',
    term: 'Operator Stack',
    short:
      'Our pipeline for the unglamorous layer: skills, code, connectors, naming, versioning and the ledger that makes a creative studio explainable to a finance team.',
    tags: ['systems'],
    body: [
      'Half a day mapping how the work runs today, one to two weeks building, then a live walkthrough. Everything sits inside the client’s own accounts, because a system you cannot operate without us is not an asset, it is a dependency.',
      'The gates here are commercial rather than visual: a human signs the brief and the cut, model licences are checked for commercial use before rendering, no keys or client data go inside a prompt, and a credit ceiling per asset is agreed before a batch starts.',
    ],
    qa: [
      {
        q: 'What does a creative automation engagement actually deliver?',
        a: 'A mapped process with an owner per step, the skills and scripts that run it, connectors into the tools you already use, an interface a non-technical person can operate, and a ledger showing cost per accepted asset.',
      },
    ],
    related: ['agentic-workflow', 'mcp', 'cost-per-accepted-asset', 'gate'],
  },
  {
    slug: 'outpainting',
    term: 'Outpainting',
    aka: ['uncrop', 'generative expand'],
    short:
      'Extending an image beyond its original edges, generating new content that matches what is already there.',
    tags: ['post'],
    body: [
      'The everyday use is format. One approved frame becomes a 16:9 header, a 4:5 feed post and a 9:16 vertical without recomposing or reshooting, which is why a crop matrix belongs in the pipeline rather than in a scramble the day before launch.',
      'The limit is that outpainting invents. Extend far enough and you are generating a room the art director never approved, so extensions get reviewed like any other generation, not treated as a resize.',
    ],
    qa: [
      {
        q: 'How do you get multiple aspect ratios from one AI image?',
        a: 'Outpaint from the approved frame rather than re-generating per format, then check each extension for invented detail before it ships.',
      },
    ],
    related: ['inpainting', 'upscaling', 'master-plate'],
  },
  {
    slug: 'phantom-set',
    term: 'Phantom Set',
    short:
      'Our pipeline for any subject a customer can hold up against the picture: lock a master plate, specify the set once, then generate every angle from the plate.',
    tags: ['production', 'systems'],
    body: [
      'Plate, label lock, set specification, angles, motion, formats. Two rounds (thirty frames for selection, then ninety frames and six clips) with layered files landing in two working days.',
      'Four gates hold it together: read every word on the packaging at full zoom, overlay each render on the plate at forty per cent opacity, keep one key direction across the whole set, and let no invented certification, award or ingredient claim survive.',
    ],
    qa: [
      {
        q: 'Can AI product photography match a real studio shoot?',
        a: 'For packaging, food, hard goods and anything that can be plate-locked, routinely. For a product with unusual translucency or a finish the model has not seen, a real shoot still wins, and we will say so.',
      },
    ],
    related: ['master-plate', 'gate', 'drift', 'image-to-video'],
  },
  {
    slug: 'prompt-engineering',
    term: 'Prompt Engineering',
    short:
      'Writing model instructions with the precision of a brief: what, in what order, with what constraints and what it must not do.',
    tags: ['control', 'production'],
    body: [
      'The useful version of this skill looks nothing like the tricks that circulate. It is closer to writing a shot description for a crew: subject first, then camera, then light, then the two things that must not happen. Vague adjectives are the main cause of expensive variance.',
      'It is also the least durable part of any pipeline. Models change and prompt habits stop working; plates, identity sheets, gates and ledgers do not. Anything you want to still own in two years belongs in those, not in a prompt.',
    ],
    qa: [
      {
        q: 'What makes a good AI image prompt?',
        a: 'One clear subject, one named camera and lens behaviour, one lighting setup, and specific nouns instead of mood adjectives. Then a negative list containing only failures you have actually seen.',
      },
      {
        q: 'Is prompt engineering still a useful skill?',
        a: 'Yes, but it is a small part of production. The leverage is in the pipeline around the prompt: what is locked before generation starts and what gets checked afterwards.',
      },
    ],
    related: ['negative-prompt', 'cfg-scale', 'camera-control', 'shot-list'],
  },
  {
    slug: 'rag',
    term: 'RAG',
    aka: ['Retrieval-Augmented Generation'],
    short:
      'Fetching relevant source material at run time and giving it to the model, so the answer comes from documents rather than from memory.',
    tags: ['systems', 'models'],
    body: [
      'The point is provenance. A model asked to recall your pricing will invent something plausible; a model handed your price list will quote it and can cite which document it came from. That difference is what makes a system usable in a regulated conversation.',
      'In creative work RAG underwrites the claim gate. When a brand book, a grant document or a technical specification is retrievable, a claim on screen can be traced to a line in a file before it renders.',
    ],
    qa: [
      {
        q: 'Does RAG stop hallucination?',
        a: 'It reduces it substantially and makes the remainder checkable, which matters more. A retrieved source can be verified; a recalled fact cannot.',
      },
    ],
    related: ['hallucination', 'agentic-workflow', 'gate'],
  },
  {
    slug: 'reference-image',
    term: 'Reference Image',
    aka: ['image conditioning'],
    short:
      'A picture supplied alongside the prompt to steer composition, style, colour or subject.',
    tags: ['control'],
    body: [
      'A reference does what a paragraph of adjectives cannot: it shows the model the thing. It is the fastest route to a specific look, and the most common cause of confusion when a team supplies four references pulling in different directions.',
      'One reference, one job. Style here, composition there, subject somewhere else, and say which is which, because a model given a mood board will average it, and an averaged mood board is exactly what slop looks like.',
    ],
    qa: [
      {
        q: 'How many reference images should I use?',
        a: 'One per intention. If you need style, structure and subject controlled at once, use separate conditioning for each rather than stacking references and hoping.',
      },
    ],
    related: ['controlnet', 'master-plate', 'style-transfer', 'ai-slop'],
  },
  {
    slug: 'register',
    term: 'Register',
    short:
      'A deliberate visual dialect: a decision about lighting model, edge quality and how much the world is allowed to be wrong.',
    tags: ['strategy', 'production'],
    body: [
      'Photoreal, 3D cartoon, storybook illustration, live-action pastiche. Each is a register, and the choice is strategic rather than decorative: it decides what the audience will forgive and what they will notice.',
      'Registers are also the antidote to volume fatigue. A house style makes the second piece cheap and the fifth invisible. Fixing a list of registers before any frame exists is how a run of seven pieces stays recognisable as one brand without ever looking like the same advert twice.',
    ],
    qa: [
      {
        q: 'How do you stop social content looking repetitive?',
        a: 'Decide the registers before production, not during it, and give each its own plate set and prompt vocabulary. Let the brand mark carry the continuity instead of the style.',
      },
    ],
    related: ['ai-slop', 'style-transfer', 'master-plate'],
  },
  {
    slug: 'seed',
    term: 'Seed',
    short:
      'The number that fixes a model’s starting randomness, making a generation reproducible.',
    tags: ['control', 'models'],
    body: [
      'Same seed, same prompt, same settings, same frame. That reproducibility is what turns generation from a slot machine into an experiment: change exactly one variable and you can see what it did.',
      'It is also the cheapest debugging tool in the stack. When a set stops working, holding the seed and varying one term at a time finds the culprit in minutes rather than in a hundred rerolls.',
    ],
    qa: [
      {
        q: 'What does the seed do in image generation?',
        a: 'It sets the initial noise. Fixing it makes results repeatable, so you can isolate the effect of a prompt change, a guidance change or a model change.',
      },
    ],
    related: ['diffusion-model', 'denoising-steps', 'cfg-scale'],
  },
  {
    slug: 'shot-list',
    term: 'Shot List',
    short:
      'The ordered list of shots a piece needs, with framing, movement and intent stated per shot, written before anything is generated.',
    tags: ['production'],
    body: [
      'Generative production tempts teams to skip this and generate their way to a film. It does not work, for the same reason it never worked on a shoot: without a list you discover in the edit that you have nine versions of one moment and nothing to cut to.',
      'The list also sets the budget. Frames per shot, seconds per clip and a credit ceiling per asset all follow from it, which is how a project gets a number before it gets a render.',
    ],
    qa: [
      {
        q: 'Do you still need a shot list for AI video?',
        a: 'More than before. The generation is cheap enough to hide the absence of a plan until the edit, where it becomes expensive.',
      },
    ],
    related: ['camera-control', 'first-last-frame', 'cost-per-accepted-asset'],
  },
  {
    slug: 'style-transfer',
    term: 'Style Transfer',
    short:
      'Applying the visual character of one image or corpus to the content of another.',
    tags: ['control', 'post'],
    body: [
      'Modern style control happens mostly through conditioning and adapters rather than the classic two-image method, but the intent is unchanged: keep the content, change the dialect.',
      'The brand risk is homogenisation. A style applied uniformly across a campaign produces consistency and, past a point, wallpaper. It works best as one register among several, not as the whole visual policy.',
    ],
    qa: [
      {
        q: 'How do you apply a brand style to AI images?',
        a: 'Train a light adapter on a curated set of on-brand frames, or condition on a single strong reference per intention. Then check the output against the brand book, not against the reference.',
      },
    ],
    related: ['lora', 'reference-image', 'register', 'fine-tuning'],
  },
  {
    slug: 'synthetic-media',
    term: 'Synthetic Media',
    short:
      'Any image, video, audio or text produced or materially altered by a generative model.',
    tags: ['strategy'],
    body: [
      'The term is broader and more useful than "AI content", because it covers the middle ground where most professional work actually sits: a real shoot with a generated environment, a real voice with a generated read, a real product with a generated set.',
      'That middle ground is also where the disclosure question gets interesting, and where a studio earns its fee. The skill is not generating. It is knowing which parts of a piece should be synthetic and which absolutely should not.',
    ],
    qa: [
      {
        q: 'What counts as synthetic media?',
        a: 'Anything generated or materially altered by a model, including a real photograph with a generated background, or a real recording with a cloned voice.',
      },
      {
        q: 'Is synthetic media the same as AI-generated content?',
        a: 'Broadly, though synthetic media is the more precise term because it includes hybrid work where only part of the asset is generated.',
      },
    ],
    related: ['disclosure', 'deepfake', 'c2pa', 'ai-slop'],
  },
  {
    slug: 'synthetic-ugc',
    term: 'Synthetic UGC',
    short:
      'Creator-style content (presenter to camera, phone-look, room lighting) produced with a trained identity rather than a booked creator.',
    tags: ['production', 'strategy'],
    body: [
      'The commercial case is variance testing. A paid social test needs the same person delivering six openings and four asks, then needs them again next month when the offer changes. Booking a creator for that is expensive and slow; a trained identity makes variant forty cost what variant ten did.',
      'The register is the hard part, not the face. Real creator content is badly lit, slightly wrong and shot in a room somebody lives in. Synthetic UGC that arrives beautifully lit reads as an advert and performs like one.',
    ],
    qa: [
      {
        q: 'Does synthetic UGC perform as well as real creator content?',
        a: 'When the register is right and the disclosure is handled, it competes on the same terms. When it is too polished, it stops being UGC and becomes a commercial with a phone frame around it.',
      },
      {
        q: 'Do I have to disclose synthetic creators?',
        a: 'Yes. Label to platform policy and to client legal, and put the label where the viewer will see it.',
      },
    ],
    related: ['identity-lock', 'trained-identity', 'disclosure', 'register'],
  },
  {
    slug: 'temporal-coherence',
    term: 'Temporal Coherence',
    short:
      'Whether a generated clip holds together across time: the same face, the same coat, the same number of fingers, from first frame to last.',
    tags: ['production', 'models'],
    body: [
      'A single generated frame can be perfect while the clip it belongs to is unusable, because the model has no persistent memory of the object between frames. Textures crawl, patterns swim, and a logo reassembles itself slightly differently four times a second.',
      'The mitigations are all forms of constraint: generate from an approved still rather than text, supply first and last frames, keep shots short, and avoid fine repeating detail in anything that has to move. High-frequency pattern is where coherence fails first.',
    ],
    qa: [
      {
        q: 'Why does my AI video flicker or morph?',
        a: 'The model is regenerating detail per frame without a persistent reference. Shorten the clip, drive it from an approved still, and remove fine repeating patterns from the subject.',
      },
    ],
    related: ['image-to-video', 'first-last-frame', 'drift', 'character-consistency'],
  },
  {
    slug: 'text-to-video',
    term: 'Text-to-Video',
    aka: ['T2V'],
    short:
      'Generating a moving shot directly from a written description, with no source image.',
    tags: ['production', 'models'],
    body: [
      'Text-to-video is the fastest way to explore an idea and the slowest way to deliver a specific one. You cannot approve a composition you have not seen, and every reroll re-rolls everything.',
      'It earns its place in early development: twenty rough clips to find the shot, then the chosen frame is rebuilt as a still, approved, and driven through image-to-video for delivery.',
    ],
    qa: [
      {
        q: 'When should I use text-to-video instead of image-to-video?',
        a: 'For exploration, mood-finding and shots where the exact subject does not matter. Switch to image-to-video the moment a specific product, face or layout has to be right.',
      },
    ],
    related: ['image-to-video', 'camera-control', 'temporal-coherence', 'prompt-engineering'],
  },
  {
    slug: 'token',
    term: 'Token',
    short:
      'The unit a language model reads and writes, roughly a short word or a fragment of one. It is also the unit most models are billed by.',
    tags: ['models', 'systems'],
    body: [
      'Tokens matter commercially because they are the meter. A workflow that re-sends the same brand book on every call is paying for it every time, which is why caching and retrieval are cost decisions as much as engineering ones.',
      'They also bound what a model can hold at once. A context window measured in tokens is the real constraint on how much of your brand, your brief and your prior work can be in the room during a single decision.',
    ],
    qa: [
      {
        q: 'How are AI models priced?',
        a: 'Usually per token of input and output, at different rates, with discounts for cached input. Image and video models bill per generation or per second of output instead.',
      },
    ],
    related: ['rag', 'cost-per-accepted-asset', 'foundation-model'],
  },
  {
    slug: 'trained-identity',
    term: 'Trained Identity',
    aka: ['Soul ID', 'character model'],
    short:
      'A face trained once from a sheet of stills, which then carries across sessions, models and formats without re-uploading a reference.',
    tags: ['production', 'control'],
    body: [
      'The sheet is the whole job: twenty or more stills of one face, varied angles and expressions, one full-height frame, even lighting, no sunglasses, no crop through the jaw. A weak sheet produces an identity that drifts, and no amount of downstream prompting recovers it.',
      'Once trained, the identity becomes an asset the client owns. That is the difference between hiring a face and building one: the second one is still there next quarter, at the same cost per variant.',
    ],
    qa: [
      {
        q: 'How many photos do you need to train an AI character?',
        a: 'Twenty or more, at varied angles and expressions, evenly lit, including at least one full-height frame. Variety matters more than volume.',
      },
    ],
    related: ['identity-lock', 'character-consistency', 'lora', 'synthetic-ugc'],
  },
  {
    slug: 'upscaling',
    term: 'Upscaling',
    short:
      'Increasing the resolution of a generated frame or clip, adding plausible detail rather than recovering real detail.',
    tags: ['post'],
    body: [
      'Upscaling invents. That is fine on skin, fabric and foliage, and it is a problem on type, logos and any fine structure a viewer knows the shape of, where invented detail reads as a defect.',
      'The working order is: approve at working resolution, run the gates, then upscale the survivors and check the label again. Upscaling before selection is how a budget disappears into frames nobody ships.',
    ],
    qa: [
      {
        q: 'Does upscaling improve AI image quality?',
        a: 'It improves resolution and can improve perceived sharpness. It does not fix composition, anatomy or a wrong label, and it can make a wrong label worse by making it legible.',
      },
    ],
    related: ['outpainting', 'gate', 'cost-per-accepted-asset'],
  },
  {
    slug: 'voice-cloning',
    term: 'Voice Cloning',
    short:
      'Building a synthetic voice from recordings of a real one, either quickly from a short sample or properly from a long one.',
    tags: ['production', 'ethics'],
    body: [
      'An instant clone needs one to three minutes of clean mono audio and is good enough for a scratch read. A professionally trained clone needs thirty minutes at minimum, two to three hours for the strongest result, and holds emotional range far better, which is the part that decides whether a listener stays.',
      'Consent is not a formality here. A signed release for the voice sits in the folder before anything renders, and that applies to a founder’s own voice as much as to anyone else’s.',
    ],
    qa: [
      {
        q: 'How much audio do you need to clone a voice?',
        a: 'One to three minutes for an instant clone, thirty minutes to three hours for a trained one. The longer version is noticeably better at emotion, pacing and emphasis.',
      },
      {
        q: 'Is voice cloning legal for advertising?',
        a: 'With the speaker’s written consent and appropriate disclosure, generally yes. Without consent it engages personality rights, and increasingly statute. We do not render without the release.',
      },
    ],
    related: ['deepfake', 'disclosure', 'identity-lock', 'synthetic-ugc'],
  },
  {
    slug: 'watermarking',
    term: 'Watermarking',
    aka: ['invisible watermark', 'SynthID'],
    short:
      'Embedding a machine-detectable signal in generated media so it can later be identified as synthetic.',
    tags: ['ethics', 'post'],
    body: [
      'Modern watermarks are statistical rather than visual: a pattern spread through the pixels or the audio that survives compression, cropping and re-encoding, and that a detector can read even when a human cannot see it.',
      'They are one layer, not the answer. A determined actor can degrade a watermark; a provenance manifest can be stripped; a visible label can be cropped. Anyone serious runs all three and assumes each will fail sometimes.',
    ],
    qa: [
      {
        q: 'Can you detect AI-generated images?',
        a: 'Reliably when the generator embedded a watermark and you have the matching detector. Unreliably otherwise: general-purpose "AI detectors" produce enough false positives to be unsafe as evidence.',
      },
    ],
    related: ['c2pa', 'disclosure', 'deepfake', 'synthetic-media'],
  },
];

export const terms: Term[] = [...coreTerms, ...additionalTerms];

export const getTerm = (slug: string) => terms.find((t) => t.slug === slug);

export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const letterOf = (t: Term) => t.term[0].toUpperCase();

/** Terms grouped by first letter, letters with nothing in them omitted. */
export function byLetter() {
  const map = new Map<string, Term[]>();
  for (const t of [...terms].sort((a, b) => a.term.localeCompare(b.term))) {
    const l = letterOf(t);
    map.set(l, [...(map.get(l) ?? []), t]);
  }
  return map;
}

export function termsByTag(tag: string) {
  return terms.filter((t) => t.tags.includes(tag)).sort((a, b) => a.term.localeCompare(b.term));
}
