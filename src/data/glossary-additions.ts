// Sixty further terms.
//
// Kept in their own file rather than appended to glossary.ts, which was already
// a thousand lines. The array is concatenated there, so nothing else changes:
// same Term shape, same pages, same DefinedTerm nodes, same tag pages.
//
// The test every entry has to pass is whether a producer with a deadline would
// find it useful. Definitions that are correct and useless are worse than
// absent, because they make the glossary look like a dictionary somebody
// scraped rather than a document somebody wrote.

import type { Term } from './glossary';

export const additionalTerms: Term[] = [
  // --- production ----------------------------------------------------------
  {
    slug: 'acceptance-rate',
    term: 'Acceptance Rate',
    aka: ['pass rate', 'yield'],
    short:
      'The proportion of generated outputs that survive review and actually ship, measured per shot type rather than averaged across a campaign.',
    tags: ['production', 'strategy'],
    body: [
      'If a batch produces sixty frames and four are used, the acceptance rate is around seven per cent and the real cost of each shipped frame is fifteen renders. This is the number that turns a per-second price into a production budget, and it is the number most studios do not track.',
      'It varies enormously by difficulty. Shots with legible packaging type sit far lower than environment plates with no product and no face in them, often by a factor of three or four. Averaging the two produces a figure that describes neither and misleads on both, which is why the number is only useful measured per shot type against your own logs.',
      'Track it per shot type, log it automatically, and quote from it. A studio that can tell you its acceptance rate on the hardest shot in your brief has run this before.',
    ],
    qa: [
      {
        q: 'What is a good acceptance rate for generative production?',
        a: 'There is no single number, because it depends almost entirely on shot difficulty. What matters is knowing yours per shot type before you quote, rather than discovering it after the batch has run.',
      },
      {
        q: 'Why does legible text lower the acceptance rate so much?',
        a: 'Type is the thing generative models still reconstruct least reliably, and a wrong word on a label is a legal problem rather than an aesthetic one, so there is no partial credit. The frame either reads correctly at full resolution or it dies.',
      },
    ],
    related: ['cost-per-accepted-asset', 'gate', 'master-plate', 'credit-ceiling'],
  },
  {
    slug: 'credit-ceiling',
    term: 'Credit Ceiling',
    aka: ['spend cap', 'budget gate'],
    short:
      'An agreed maximum spend per asset, encoded in the pipeline so a run halts and asks for a decision instead of quietly spending past it.',
    tags: ['production', 'systems'],
    body: [
      'Generative production fails financially in a specific way: a shot that is nearly right invites one more attempt, and one more attempt is cheap, and forty of them are not. The ceiling exists because the marginal decision is always defensible and the cumulative one never is.',
      'It only works if it is in the pipeline rather than in a meeting. A number everybody agreed and nobody encoded is an intention. A number that stops the run and raises a decision is a control.',
      'We set one per asset before a batch starts. When a shot reaches it, the job halts and a person decides whether to keep going, change the approach, or drop the shot.',
    ],
    qa: [
      {
        q: 'Where should a credit ceiling be set?',
        a: 'At the point where a rational person would stop and reconsider the approach rather than try again. In practice that is roughly three times the expected render count for that shot type.',
      },
      {
        q: 'What should happen when a batch hits the ceiling?',
        a: 'The run halts and escalates to a named person. Logging a warning and continuing is not a ceiling, it is a note.',
      },
    ],
    related: ['cost-per-accepted-asset', 'acceptance-rate', 'human-in-the-loop', 'run-log'],
  },
  {
    slug: 'set-specification',
    term: 'Set Specification',
    aka: ['set spec', 'lighting spec'],
    short:
      'A short written document fixing the light direction, colour temperature, surfaces and lens language for a whole set, written before anything is generated.',
    tags: ['production', 'control'],
    body: [
      'The reason shot forty does not match shot one is almost never the model. It is that nobody wrote down what the world was supposed to look like, so every prompt re-invented it slightly. A set specification is the cure and it fits on one page.',
      'It states one key light direction as a clock position, one colour temperature in kelvin, one named surface and background, one focal length range, one depth-of-field choice, and a list of what is never in frame. Every item is a decision that would otherwise be made forty times by whoever happens to be at the keyboard.',
      'Written, not remembered. A specification in somebody’s head survives until the second batch runs while they are on holiday.',
    ],
    qa: [
      {
        q: 'How long should a set specification be?',
        a: 'One page. If it runs longer, it has started describing shots rather than the world they sit in, and the shot list is a different document.',
      },
      {
        q: 'What is the most commonly missed item?',
        a: 'The exclusion list: what is never in frame. Props and background objects are where a set drifts fastest, because nothing in the brief forbids them.',
      },
    ],
    related: ['master-plate', 'shot-list', 'phantom-set', 'character-consistency'],
  },
  {
    slug: 'silhouette-overlay',
    term: 'Silhouette Overlay',
    aka: ['outline check', 'plate overlay test'],
    short:
      'A control gate that lays a finished render over its master plate at around forty per cent opacity to check the product outline has not drifted.',
    tags: ['control', 'production'],
    body: [
      'The test is mechanical, which is the point. Scale the render to match the plate, drop the opacity to about forty per cent, and look at the edge. A shoulder that has grown, a cap that has gained a ridge, a base that has widened: all obvious in overlay and all invisible when the frame is judged on its own at the end of a long day.',
      'Forty per cent is not magic. It is the opacity at which the eye reliably catches a two per cent shift without either image dominating.',
      'A frame that fails goes back to the plate and is regenerated with tighter conditioning. It does not go to a retoucher, because the drift is in the generation and retouching leaves the cause in place.',
    ],
    qa: [
      {
        q: 'Can this be automated?',
        a: 'The comparison can, with an edge-difference threshold, and it is worth doing on large sets. The judgement about whether a given difference matters commercially still needs a person, which is why we keep it as a gate rather than a filter.',
      },
      {
        q: 'What if the product is meant to be seen from a new angle?',
        a: 'Then it needs its own plate for that angle, cut and verified the same way. Testing a three-quarter render against a front plate produces a false failure every time.',
      },
    ],
    related: ['master-plate', 'gate', 'drift', 'acceptance-rate'],
  },
  {
    slug: 'batch-rendering',
    term: 'Batch Rendering',
    aka: ['batching', 'render batch'],
    short:
      'Running a group of related generations as one unit with shared settings, a shared ledger and a shared decision point at the end.',
    tags: ['production', 'systems'],
    body: [
      'Batching is how generative production stops being a person at a keyboard and becomes a pipeline. One set of conditioning, one credit ceiling, one run log, one review at the end rather than a decision after every render.',
      'The ordering matters more than people expect. Run the hardest shots first, not the ones at the top of the shot list: hard shots reveal the real acceptance rate within the first hour, while there is still time to change the approach. Easy shots make you optimistic and tell you nothing.',
      'A batch that produces no ledger entry is not a batch, it is a session.',
    ],
    qa: [
      {
        q: 'How big should a batch be?',
        a: 'Small enough that a failure pattern is caught before it has been repeated fifty times. In practice that means batching by shot type rather than by deliverable, and reviewing between batches.',
      },
      {
        q: 'Why run the hardest shots first?',
        a: 'Because they tell you your real acceptance rate while the budget is still uncommitted. Discovering a fifteen per cent pass rate on the last batch of the week is discovering it too late.',
      },
    ],
    related: ['acceptance-rate', 'credit-ceiling', 'run-log', 'cost-per-accepted-asset'],
  },
  {
    slug: 'cutdown',
    term: 'Cutdown',
    aka: ['edit variant', 'short-form cut'],
    short:
      'A shorter version of a finished piece cut for a different placement, planned as part of the shoot rather than cropped out of it afterwards.',
    tags: ['production', 'post'],
    body: [
      'A ninety-second film cut down to fifteen seconds is not the same film shorter. It is a different argument, usually with a different opening, and it fails when it is produced by trimming rather than by editing.',
      'In generative production the temptation is stronger, because the source material is cheap and a crop costs nothing. What a crop costs is composition: a 16:9 frame cropped to 9:16 loses whichever half of the frame was doing the work.',
      'Plan the cutdowns at brief stage and generate for them. Composing with the vertical crop in mind costs nothing during generation and cannot be recovered afterwards.',
    ],
    qa: [
      {
        q: 'Should cutdowns be listed in the brief?',
        a: 'Yes, with their ratios and durations. They are cheaper when they are planned as part of the production and more expensive when they arrive as a request after delivery.',
      },
      {
        q: 'Why not just crop?',
        a: 'Because the subject is rarely in the middle of the frame, and the part that gets cropped away is usually the part carrying the composition. Generating with the crop in mind is free; recovering it is not.',
      },
    ],
    related: ['aspect-ratio-matrix', 'shot-list', 'register', 'content-atomisation'],
  },
  {
    slug: 'aspect-ratio-matrix',
    term: 'Aspect Ratio Matrix',
    aka: ['format matrix', 'ratio grid'],
    short:
      'The full grid of placements, ratios and durations a campaign has to deliver, decided at brief stage because it changes how frames are composed.',
    tags: ['production', 'strategy'],
    body: [
      'Most campaigns need the same idea in four or five shapes: 16:9, 1:1, 4:5, 9:16, and occasionally something a specific placement demands. Writing that down as a grid before production is the difference between composing once for all of them and re-composing five times.',
      'The matrix also exposes duplication. Nine placements often turn out to need three actual pieces in three ratios, which is a substantially smaller job than nine pieces, and nobody notices until the grid is on a page.',
      'It is deterministic work once the decisions are made, which makes the export side of it a script rather than a person.',
    ],
    qa: [
      {
        q: 'Which ratio should be composed for first?',
        a: 'The tightest one, usually 9:16, with the wider ratios composed as extensions of it. Composing wide first and cropping down loses the subject; composing tight first and extending outward does not.',
      },
      {
        q: 'Should the matrix live in the brief or the delivery note?',
        a: 'The brief. Discovered at delivery it is a re-export at best and a re-shoot at worst.',
      },
    ],
    related: ['cutdown', 'deliverable-specification', 'shot-list', 'naming-convention'],
  },
  {
    slug: 'deliverable-specification',
    term: 'Deliverable Specification',
    aka: ['delivery spec', 'deliverables list'],
    short:
      'The exact list of files a client receives, with formats, resolutions, colour space, naming and who owns what afterwards.',
    tags: ['production', 'strategy'],
    body: [
      'The argument at the end of a project is almost never about the work. It is about whether the master files, the plates and the trained identities were part of the deal. A deliverable specification settles that at the start, when it is a sentence rather than a negotiation.',
      'For generative production it should name the reusable artefacts explicitly: master plates, trained identities, set specifications, prompt sets and the version of the model they were built against. These are the assets with the longest life in the engagement.',
      'A studio that will not put the reusable files in the spec is selling a dependency. That is a legitimate commercial choice and it should be priced as one.',
    ],
    qa: [
      {
        q: 'Who should own the master plates and trained identities?',
        a: 'The client, in our view. They are what makes the second campaign cheaper than the first, and retaining them converts a production relationship into a dependency.',
      },
      {
        q: 'What is usually missing from a delivery spec?',
        a: 'Colour space, the model and version the work was built on, and a statement about what happens to a trained identity at the end of its term.',
      },
    ],
    related: ['master-plate', 'trained-identity', 'aspect-ratio-matrix', 'naming-convention'],
  },
  {
    slug: 'previsualisation',
    term: 'Previsualisation',
    aka: ['previs', 'pre-vis'],
    short:
      'Rough visual planning of shots before production, now cheap enough with generative tooling that skipping it is harder to defend than doing it.',
    tags: ['production', 'strategy'],
    body: [
      'Previs used to be a line item only large productions could justify. Generative tooling has moved it to somewhere near free, which changes what it is for: not proving the film can be made, but finding out which version of it is worth making.',
      'The useful discipline is to previs the decisions rather than the shots. Two lighting approaches, three shot-size patterns, two performance registers. Comparing those is a real question. Comparing forty pretty frames is a mood board.',
      'Previs frames are not plates and should never quietly become them. They are made fast and loose by design, and a previs frame promoted to a reference brings all of its sloppiness into the campaign.',
    ],
    qa: [
      {
        q: 'Can previs frames be used as references for the final work?',
        a: 'Not directly. Previs is made fast and is not verified against anything. Promoting a previs frame to a reference imports every approximation in it into the finished set.',
      },
      {
        q: 'What should previs actually test?',
        a: 'Decisions with alternatives: lighting approach, shot-size rhythm, performance register. Frames without a competing version to compare against are decoration.',
      },
    ],
    related: ['shot-list', 'set-specification', 'register', 'master-plate'],
  },
  {
    slug: 'proxy-render',
    term: 'Proxy Render',
    aka: ['low-res pass', 'draft render'],
    short:
      'A fast, low-resolution generation used to test composition and motion before committing budget to a full-quality pass.',
    tags: ['production', 'post'],
    body: [
      'Compositional problems and motion problems are visible at low resolution. Type problems and texture problems are not. That split tells you exactly what a proxy pass is for and where it stops being useful.',
      'The economics are simple: a proxy costs a fraction of a full render, so testing five compositions in proxy and rendering one at full quality is cheaper than rendering three at full quality and picking the least bad.',
      'The failure mode is treating a proxy as an approval. A client who signs off a proxy has approved the composition, not the frame, and that distinction needs saying out loud before it is discovered at delivery.',
    ],
    qa: [
      {
        q: 'What can a proxy render not tell you?',
        a: 'Anything about legible type, fine texture, or fine extremity detail. Those only appear at full resolution and they are where most failures live.',
      },
      {
        q: 'Should clients see proxy renders?',
        a: 'Often yes, for composition decisions, provided everybody understands they are approving the arrangement rather than the image.',
      },
    ],
    related: ['upscaling', 'acceptance-rate', 'gate', 'cost-per-accepted-asset'],
  },
  {
    slug: 'hero-frame',
    term: 'Hero Frame',
    aka: ['key art frame', 'hero still'],
    short:
      'The single image a campaign is built around and every other asset is judged against for tone, light and colour.',
    tags: ['production', 'strategy'],
    body: [
      'Somewhere in every campaign there is one frame that decides what the rest look like. Naming it early and treating it as a reference makes that decision explicit instead of emergent.',
      'In generative production the hero frame does a second job: it becomes the grading reference for the whole set. Grading each clip to look good on its own produces nine slightly different blacks; grading everything to the hero produces a campaign.',
      'It is not the same thing as a master plate. A plate fixes what the product is. A hero frame fixes what the world looks like.',
    ],
    qa: [
      {
        q: 'How is a hero frame different from a master plate?',
        a: 'A master plate is a flat, deliberately unglamorous reference for the product’s geometry and labelling. A hero frame is the finished, fully lit image that sets the tone the rest of the set is graded and composed against.',
      },
      {
        q: 'When should the hero frame be locked?',
        a: 'Before the bulk of the set is generated. Locking it afterwards means re-grading everything to match a decision made late.',
      },
    ],
    related: ['master-plate', 'set-specification', 'colour-management', 'register'],
  },
  {
    slug: 'product-cinematic',
    term: 'Product Cinematic',
    aka: ['product film', 'hero product shot'],
    short:
      'A short, highly controlled moving piece whose subject is a single product, built from a locked plate rather than described in a prompt.',
    tags: ['production'],
    body: [
      'The format is unforgiving because there is nothing else in frame to distract from an error. Every drift in the silhouette, every misrendered character on a label, every physically impossible reflection is the subject of the shot.',
      'Which is exactly why it is the format where a plate-locked pipeline earns its cost most visibly. A product cinematic generated from a description will be beautiful and wrong. One generated from a verified plate will be correct, and correctness is what the client is buying.',
      'Keep readable type out of frame wherever the composition allows, and composite real type in post where it does not.',
    ],
    qa: [
      {
        q: 'Why are product cinematics harder than they look?',
        a: 'There is nothing else in the frame. Every error is on the subject, at full size, and the audience is looking directly at the thing that is wrong.',
      },
      {
        q: 'How do you handle packaging text in a product cinematic?',
        a: 'Compose it out of frame where possible and composite real type in post where not. Asking a model to render a label the audience can read is the lowest-yield thing in generative production.',
      },
    ],
    related: ['master-plate', 'silhouette-overlay', 'temporal-coherence', 'camera-path'],
  },

  // --- models --------------------------------------------------------------
  {
    slug: 'diffusion-transformer',
    term: 'Diffusion Transformer',
    aka: ['DiT'],
    short:
      'A diffusion model whose denoising network is a transformer rather than a convolutional U-Net, which is what let video models scale.',
    tags: ['models'],
    body: [
      'The original image diffusion models used a U-Net to predict noise. Replacing it with a transformer changed the scaling behaviour: performance improved predictably with size and data in a way the convolutional version did not, which is the reason the current generation of video models exists at all.',
      'For a producer, the practical consequence is that quality now tracks compute more reliably than it tracks clever prompting. The gains of the last two years came from bigger models trained longer, not from a trick anyone can apply at the keyboard.',
      'The second consequence is cost structure. Transformer attention scales badly with sequence length, and a video is a long sequence, which is why clip length is priced the way it is.',
    ],
    qa: [
      {
        q: 'Why did video generation improve so quickly?',
        a: 'Largely because the denoising network became a transformer, which scales predictably with compute and data. Most of the visible progress is scale rather than a technique that transfers to prompting.',
      },
      {
        q: 'Does this matter when writing a prompt?',
        a: 'Not directly. It matters when reading a pricing page, because attention cost grows with sequence length and that is why longer clips cost disproportionately more.',
      },
    ],
    related: ['diffusion-model', 'attention', 'foundation-model', 'text-to-video'],
  },
  {
    slug: 'attention',
    term: 'Attention',
    aka: ['self-attention', 'attention mechanism'],
    short:
      'The mechanism that lets a model weigh every part of its input against every other part, and the reason long sequences cost disproportionately more.',
    tags: ['models'],
    body: [
      'Attention is how a model decides which parts of the input matter for the part it is currently producing. In video, that means every frame can be conditioned on every other frame, which is what makes coherence possible at all.',
      'The cost grows roughly with the square of the sequence length. Double the clip and you do not double the compute, you roughly quadruple it. That single fact explains most of the pricing and most of the length limits in generative video.',
      'It also explains why coherence degrades with length: the model is holding an increasingly expensive relationship in mind, and the practical compromises made to keep that affordable are exactly where drift creeps in.',
    ],
    qa: [
      {
        q: 'Why do longer AI video clips cost more than proportionally?',
        a: 'Attention cost scales with roughly the square of sequence length, so doubling the clip length roughly quadruples the compute rather than doubling it.',
      },
      {
        q: 'Is attention why faces drift across a long clip?',
        a: 'Partly. Maintaining relationships across a long sequence is expensive, so the compromises that make it affordable are where coherence starts to give way.',
      },
    ],
    related: ['diffusion-transformer', 'context-window', 'temporal-coherence', 'token'],
  },
  {
    slug: 'context-window',
    term: 'Context Window',
    aka: ['context length'],
    short:
      'The maximum amount of input a model can consider at once, measured in tokens, and a hard ceiling on how much brief it can hold.',
    tags: ['models', 'systems'],
    body: [
      'Everything a model knows about your task at the moment of generating has to fit inside the window: the instruction, the reference material, the conversation so far, the tool results. When it does not fit, something gets dropped, and what gets dropped is rarely what you would have chosen.',
      'In creative automation this is the constraint that shapes architecture. A workflow that pastes an entire brand guideline into every call is spending most of its window on material that is irrelevant to the current step, which is why retrieval exists.',
      'Bigger windows have not removed the discipline. They have moved the failure from "it did not fit" to "it fit and the model attended to the wrong third of it".',
    ],
    qa: [
      {
        q: 'Does a bigger context window mean I can stop being selective?',
        a: 'No. Relevance still beats volume: a model given eighty pages will attend to some of them, and you do not choose which. Curating what goes in remains the highest-leverage thing you control.',
      },
      {
        q: 'How does this affect a creative automation build?',
        a: 'It decides whether you can paste reference material into every call or need retrieval. Most real systems need retrieval sooner than they expect.',
      },
    ],
    related: ['token', 'rag', 'context-engineering', 'attention'],
  },
  {
    slug: 'embedding',
    term: 'Embedding',
    aka: ['vector representation'],
    short:
      'A list of numbers representing a piece of text, an image or a clip, positioned so that similar things sit close together.',
    tags: ['models', 'systems'],
    body: [
      'Embeddings are how a system finds things by meaning rather than by keyword. Two descriptions of the same shot land near each other even with no words in common, which is what makes a searchable asset library possible.',
      'For a studio the practical use is unglamorous and valuable: find the frame that looks like this, find the brief that resembles that one, find whether we have already made this. All of which are otherwise a person scrolling.',
      'They are also the mechanism underneath retrieval, so understanding that they encode similarity rather than truth explains why a retrieval system sometimes confidently returns something adjacent and wrong.',
    ],
    qa: [
      {
        q: 'What are embeddings used for in a creative pipeline?',
        a: 'Semantic search over assets and briefs, deduplication, and retrieval for agentic workflows. All of them replace a person scrolling with a query.',
      },
      {
        q: 'Why does semantic search sometimes return the wrong thing confidently?',
        a: 'Because embeddings encode similarity, not correctness. Something can be very close in meaning and still be the wrong asset, and nothing in the mechanism knows the difference.',
      },
    ],
    related: ['rag', 'latent-space', 'token', 'multimodal-model'],
  },
  {
    slug: 'variational-autoencoder',
    term: 'Variational Autoencoder',
    aka: ['VAE'],
    short:
      'The component that compresses an image into the compact latent space a diffusion model works in, and decodes it back to pixels afterwards.',
    tags: ['models'],
    body: [
      'Diffusion happens in a compressed space rather than on pixels, because denoising a full-resolution image directly would be prohibitively expensive. The VAE is the pair of translators at either end of that.',
      'It is invisible when it works and unmistakable when it does not. Mushy fine texture, smeared small text, and a particular soft blotchiness in dark gradients are usually decode artefacts rather than failures of the generation itself.',
      'This is why upscaling sometimes rescues an image that looked broken: the structure was correct and the decode was losing it.',
    ],
    qa: [
      {
        q: 'Why does fine detail look mushy in generated images?',
        a: 'Often it is the decode rather than the generation. Detail is lost compressing into and out of latent space, which is why fine texture and small text suffer most.',
      },
      {
        q: 'Can that be fixed after the fact?',
        a: 'Sometimes, with a good upscale, if the underlying structure is right. If the structure is wrong, upscaling makes a larger wrong image.',
      },
    ],
    related: ['latent-space', 'diffusion-model', 'upscaling', 'denoising-steps'],
  },
  {
    slug: 'sampler',
    term: 'Sampler',
    aka: ['sampling method', 'solver'],
    short:
      'The algorithm that decides how a diffusion model steps from noise to image, trading speed against fidelity and consistency.',
    tags: ['models', 'control'],
    body: [
      'Two runs with the same prompt, the same seed and different samplers produce recognisably different images. The sampler is a real creative variable and it is usually left at whatever the interface defaulted to.',
      'The trade-off is roughly speed against stability. Faster samplers converge in fewer steps and are more prone to changing character between runs; slower ones are steadier, which matters far more on a set than on a single frame.',
      'Pick one, record it in the set specification, and do not change it mid-campaign. A sampler change halfway through a set is a drift source nobody will think to look for.',
    ],
    qa: [
      {
        q: 'Does the sampler need to stay the same across a campaign?',
        a: 'Yes. Changing it mid-set introduces a difference that looks like model drift and is very hard to diagnose because nobody thinks to check it.',
      },
      {
        q: 'Which sampler is best?',
        a: 'The one that is stable across runs for your shot type. On a single hero frame, speed is worth trading for quality; on a hundred-shot set, consistency wins.',
      },
    ],
    related: ['denoising-steps', 'seed', 'cfg-scale', 'set-specification'],
  },
  {
    slug: 'distillation',
    term: 'Distillation',
    aka: ['model distillation', 'step distillation'],
    short:
      'Training a smaller or faster model to reproduce the behaviour of a larger one, which is how most fast generation modes are built.',
    tags: ['models'],
    body: [
      'A distilled model does in four steps what its parent did in forty. That is where "turbo", "lightning" and "fast" modes come from, and the speed is real.',
      'What is traded away is usually variety and fine control. Distilled models tend to converge on a narrower range of outputs and respond less to guidance settings, which is excellent for volume and limiting for exploration.',
      'The production use is straightforward: distil for proxies and exploration, use the full model for the frames that ship. Mixing them within a set is a drift source.',
    ],
    qa: [
      {
        q: 'Are fast generation modes worse?',
        a: 'Not worse, narrower. They produce less variety and respond less to guidance, which is a good trade for proxies and volume and a bad one for a hero frame.',
      },
      {
        q: 'Can distilled and full models be mixed in one set?',
        a: 'Not without introducing a visible difference. Use one for exploration and the other for delivery, and do not interleave them.',
      },
    ],
    related: ['proxy-render', 'foundation-model', 'cfg-scale', 'inference'],
  },
  {
    slug: 'quantisation',
    term: 'Quantisation',
    aka: ['quantization', 'model compression'],
    short:
      'Storing a model’s weights at lower numeric precision so it runs on smaller hardware, at some cost to output quality.',
    tags: ['models', 'systems'],
    body: [
      'A model held at eight or four bits per weight instead of sixteen takes far less memory and runs on far cheaper hardware. For a studio running anything locally, this is the difference between one workstation and a rack.',
      'The quality cost is real but non-linear. Moderate quantisation is often visually indistinguishable; aggressive quantisation shows up first in exactly the places that matter, meaning fine detail, small text and subtle colour.',
      'If you run local inference, record the quantisation level alongside the model version. Two operators running the same model at different precisions will produce a set that does not match, and nobody will guess why.',
    ],
    qa: [
      {
        q: 'Does quantisation change the output?',
        a: 'Yes, subtly, and first in fine detail, small text and colour subtlety. Moderate levels are often invisible; aggressive levels are not.',
      },
      {
        q: 'Why record the quantisation level?',
        a: 'Because two operators running the same model at different precisions produce sets that do not match, and it is close to undiagnosable unless it was written down.',
      },
    ],
    related: ['checkpoint', 'inference', 'drift', 'naming-convention'],
  },
  {
    slug: 'checkpoint',
    term: 'Checkpoint',
    aka: ['model weights', 'model file'],
    short:
      'A saved snapshot of a model’s weights at a point in training, and the thing you actually pin when you say a pipeline is reproducible.',
    tags: ['models', 'systems'],
    body: [
      'Two checkpoints of nominally the same model produce different images. A pipeline that says which model it uses but not which checkpoint has not said anything reproducible.',
      'For hosted models the equivalent is the version string, and it moves without asking you. A campaign generated across a silent provider update is a campaign with an invisible seam in it.',
      'Record the checkpoint or version in the set specification and in the run log. It is one line and it is the difference between being able to regenerate a frame in six months and not.',
    ],
    qa: [
      {
        q: 'Why record the exact checkpoint or model version?',
        a: 'Because a provider can update a hosted model without notice, and a set generated across that boundary will have an invisible seam that nothing in the files explains.',
      },
      {
        q: 'What if the version is not published?',
        a: 'Record the date and time of the run instead, along with anything the provider does expose. It is weaker but it at least brackets the problem.',
      },
    ],
    related: ['fine-tuning', 'quantisation', 'run-log', 'drift'],
  },
  {
    slug: 'inference',
    term: 'Inference',
    aka: ['generation', 'model run'],
    short:
      'Actually running a trained model to produce an output, as distinct from training it, and the part you are billed for per use.',
    tags: ['models', 'systems'],
    body: [
      'Training is the expensive thing that happened once, somewhere else. Inference is the thing you pay for every time you press generate, and it is where a production budget actually goes.',
      'It is worth separating in your head because the two have opposite economics. Training cost is sunk and enormous; inference cost is small, per-unit and entirely under your control through batch sizes, resolutions, step counts and how many failures you tolerate.',
      'Every lever in this glossary that saves money saves it at inference.',
    ],
    qa: [
      {
        q: 'What is the difference between training and inference?',
        a: 'Training builds the model, once, at enormous cost. Inference runs it, every time you generate, at a small per-use cost. Only the second one appears on your invoice.',
      },
      {
        q: 'What most affects inference cost?',
        a: 'Resolution, sequence length, step count and your acceptance rate. The last one is usually the largest and the least tracked.',
      },
    ],
    related: ['acceptance-rate', 'cost-per-accepted-asset', 'denoising-steps', 'quantisation'],
  },
  {
    slug: 'autoregressive-video-model',
    term: 'Autoregressive Video Model',
    aka: ['AR video model', 'next-frame model'],
    short:
      'A video model that generates forward in time, each segment conditioned on what it already produced, rather than denoising the whole clip at once.',
    tags: ['models'],
    body: [
      'The two families behave differently in ways that matter on a set. A model that denoises the whole clip at once tends to hold global coherence better but is capped in length. One that generates forward can in principle run indefinitely, and accumulates error as it goes.',
      'That accumulation is the mechanism behind the drift you see towards the end of a long generation: later output is conditioned mostly on earlier output rather than on the original reference, so small deviations compound.',
      'Practically it means the two families want different production discipline. Whole-clip models want you to work within their length. Forward models want you to re-anchor, with a reference or a fresh conditioning frame, before the drift becomes visible.',
    ],
    qa: [
      {
        q: 'Why does a long generated clip get worse towards the end?',
        a: 'In a forward-generating model, later frames are conditioned mostly on earlier generated frames rather than on the original reference, so small errors compound rather than being corrected.',
      },
      {
        q: 'How do you work around it?',
        a: 'Re-anchor before the drift shows: use first-and-last-frame conditioning where the model supports it, or cut and start a new generation from a fresh reference.',
      },
    ],
    related: ['temporal-coherence', 'first-last-frame', 'drift', 'text-to-video'],
  },
  {
    slug: 'flow-matching',
    term: 'Flow Matching',
    aka: ['rectified flow'],
    short:
      'A training approach that learns a straighter path from noise to image, letting a model produce good output in fewer steps.',
    tags: ['models'],
    body: [
      'Classic diffusion learns a winding route from noise to image and has to take many small steps along it. Flow matching learns a straighter one, so fewer steps get you to the same place.',
      'The visible effect is that recent models produce usable output at step counts that would have been unusable two years ago, which lowers cost per render and makes proxy passes genuinely cheap.',
      'It is not a control you operate. It is a reason the defaults on a current model are better than the defaults you learned on an older one, which is worth knowing before you copy old settings forward.',
    ],
    qa: [
      {
        q: 'Do I need to change my settings for a flow-matching model?',
        a: 'Usually yes, downward. Step counts and guidance values carried over from older diffusion models are often too high and will cost you money and sometimes quality.',
      },
      {
        q: 'Is this the same as distillation?',
        a: 'No. Distillation trains a fast model to imitate a slow one. Flow matching changes how the path from noise to image is learned in the first place.',
      },
    ],
    related: ['diffusion-model', 'denoising-steps', 'distillation', 'sampler'],
  },

  // --- control -------------------------------------------------------------
  {
    slug: 'depth-map',
    term: 'Depth Map',
    aka: ['depth pass', 'z-depth'],
    short:
      'A greyscale image encoding how far each pixel is from the camera, used to hold a composition steady while everything else changes.',
    tags: ['control'],
    body: [
      'A depth map throws away colour, texture and identity and keeps only spatial arrangement. Conditioning on one gives you the same room, the same camera position and the same object placement across an entire set, with the surface treatment free to change.',
      'It is the cheapest way to hold a composition across variants. Nine ads that need identical staging and different products are one depth map and nine generations, not nine compositions negotiated one at a time.',
      'What it does not hold is identity. A depth map will keep a bottle in the same place and will not keep it the same bottle, which is why depth conditioning and a master plate are complementary rather than alternatives.',
    ],
    qa: [
      {
        q: 'What does a depth map control?',
        a: 'Spatial arrangement: where things are relative to the camera and to each other. It does not control colour, texture or identity, so it holds staging without holding the subject.',
      },
      {
        q: 'When is depth conditioning the right tool?',
        a: 'When several assets need identical staging with different content, or when a client has approved a composition and everything else is still moving.',
      },
    ],
    related: ['controlnet', 'master-plate', 'set-specification', 'segmentation-mask'],
  },
  {
    slug: 'pose-estimation',
    term: 'Pose Estimation',
    aka: ['skeleton conditioning', 'pose control'],
    short:
      'Extracting a figure’s joint positions as a stick-figure skeleton, then conditioning generation on it so the body does what you asked.',
    tags: ['control'],
    body: [
      'Describing a body position in words is unreliable and always has been. A skeleton removes the ambiguity: the model gets the geometry directly and spends its capacity on everything else.',
      'For synthetic presenters this is the difference between a performance you directed and one you accepted. Extract the pose from a reference performance, apply it to your trained identity, and the gesture is yours rather than the model’s idea of the word "gesturing".',
      'Hands remain the hard case. A pose skeleton fixes where the hand is and not how many fingers it has, so hands in frame still need the same gating they always did.',
    ],
    qa: [
      {
        q: 'Does pose conditioning fix hands?',
        a: 'It fixes where the hand is, not what it is made of. Finger count and contact points still need checking at full resolution.',
      },
      {
        q: 'Where does a pose reference come from?',
        a: 'Any footage of the movement you want, including a phone video of somebody in the office doing the gesture. The extraction keeps the geometry and discards the person.',
      },
    ],
    related: ['controlnet', 'character-consistency', 'trained-identity', 'lip-sync'],
  },
  {
    slug: 'segmentation-mask',
    term: 'Segmentation Mask',
    aka: ['mask', 'region mask'],
    short:
      'A map marking which pixels belong to which object, used to change one element of a frame without disturbing the rest.',
    tags: ['control', 'post'],
    body: [
      'Masks are what make surgical edits possible: change the background and keep the product, change the jacket and keep the face, replace the sky and keep the roofline. Without one, every edit is a re-generation and every re-generation is a fresh chance to drift.',
      'In a plate-locked pipeline masks do a second job. Masking the product out of the edit region guarantees the locked element cannot be touched by an inpainting pass, which turns a discipline into a mechanism.',
      'Mask quality is the whole game at edges. Hair, glass, motion blur and semi-transparency are where an automatic mask fails and where a bad edit announces itself.',
    ],
    qa: [
      {
        q: 'How does a mask help protect a locked product?',
        a: 'It excludes the product region from the edit, so an inpainting pass physically cannot alter it. That converts "do not touch the product" from an instruction into a constraint.',
      },
      {
        q: 'Where do automatic masks fail?',
        a: 'Hair, glass, motion blur and anything semi-transparent. Those edges usually need a manual pass, and they are exactly where a viewer looks.',
      },
    ],
    related: ['inpainting', 'master-plate', 'controlnet', 'rotoscoping'],
  },
  {
    slug: 'denoising-strength',
    term: 'Denoising Strength',
    aka: ['image-to-image strength', 'transformation strength'],
    short:
      'How far an image-to-image generation is allowed to move from its input, from a light retouch to a complete reimagining.',
    tags: ['control'],
    body: [
      'At low values the output is recognisably the input with the surface reworked. At high values the input is a suggestion the model was shown before it made something else. Everything interesting happens in a fairly narrow band in between.',
      'This is the single most useful dial in plate-locked work, because it is the direct trade between fidelity to the lock and freedom in the frame. Too low and every variant looks like the plate; too high and the product stops being the product.',
      'Find the value that holds your silhouette on the hardest shot, write it in the set specification, and stop adjusting it per frame. Per-frame tuning is a drift source dressed as craft.',
    ],
    qa: [
      {
        q: 'What denoising strength should I use for product work?',
        a: 'Low enough that the silhouette survives the overlay test on your hardest shot. Find it once, write it down, and hold it across the set rather than tuning per frame.',
      },
      {
        q: 'Why not tune it per frame?',
        a: 'Because a different value produces a subtly different relationship to the plate, and forty frames at forty settings is a set that drifts for reasons nobody can reconstruct.',
      },
    ],
    related: ['reference-strength', 'silhouette-overlay', 'set-specification', 'cfg-scale'],
  },
  {
    slug: 'reference-strength',
    term: 'Reference Strength',
    aka: ['reference weight', 'conditioning weight'],
    short:
      'How heavily a model is told to weigh a supplied reference image against the text prompt when the two disagree.',
    tags: ['control'],
    body: [
      'Every generation with a reference is an argument between the picture and the words. Reference strength decides who wins, and the default is rarely the right answer for production work.',
      'High values hold identity and fight the prompt: ask for a different angle and you may get the reference angle back. Low values follow the prompt and let the subject drift. Which failure you prefer depends entirely on whether identity or staging is the thing that must not move.',
      'For a recurring face, bias high and change the staging with a pose or depth condition rather than with words. That way the two controls are not competing for the same job.',
    ],
    qa: [
      {
        q: 'Why does my subject refuse to change angle?',
        a: 'Reference strength is probably too high, so the reference is overriding the prompt. Lower it and control the angle with a pose or depth condition instead of with words.',
      },
      {
        q: 'What is the right setting for a recurring presenter?',
        a: 'High enough to hold the face, with staging controlled by a separate conditioning signal. Asking one dial to do identity and composition at once is why it feels like it never obeys.',
      },
    ],
    related: ['reference-image', 'denoising-strength', 'trained-identity', 'character-consistency'],
  },
  {
    slug: 'motion-brush',
    term: 'Motion Brush',
    aka: ['motion painting', 'directed motion'],
    short:
      'A control that lets you paint which regions of a still image should move and in which direction, instead of describing motion in words.',
    tags: ['control'],
    body: [
      'Words are a poor interface for motion. "The steam rises gently" gets you steam, a swaying plant, a drifting camera and a person shifting their weight, because the model has no way to know which of those you meant.',
      'A motion brush makes it explicit: this region moves this way, everything else holds. For product work that is precisely the requirement, since the product must be the still thing while its environment lives.',
      'It also lengthens usable clips. Restricting motion to a small region gives the model less to keep coherent, which pushes drift further out.',
    ],
    qa: [
      {
        q: 'Why does everything move when I only wanted one thing to?',
        a: 'Because a text prompt cannot scope motion to a region. A motion brush can, which is why it is the right tool whenever most of the frame must hold still.',
      },
      {
        q: 'Does restricting motion make clips last longer?',
        a: 'In practice yes. Less moving content means less for the model to keep coherent, so visible drift arrives later.',
      },
    ],
    related: ['camera-path', 'temporal-coherence', 'image-to-video', 'camera-control'],
  },
  {
    slug: 'camera-path',
    term: 'Camera Path',
    aka: ['camera trajectory', 'move path'],
    short:
      'The defined route a virtual camera takes through a shot, specified as a movement rather than described as an adjective.',
    tags: ['control'],
    body: [
      'Generative tooling makes camera movement free, and free movement gets applied to everything, which is why so much generative video has the same lazy drift on every shot.',
      'A specified path is a decision: this shot pushes in because the story pushes in, that one is locked off because a locked frame among moving ones reads as confidence. Naming the move in camera-department language rather than as "cinematic" is most of the work.',
      'A path also compounds with subject motion, and the compound is what breaks coherence. A moving camera on a moving subject is the most expensive thing you can ask for and the first place to economise when a clip will not hold.',
    ],
    qa: [
      {
        q: 'Why does all my generated video have the same slow push-in?',
        a: 'Because camera movement is free and gets applied by default. Specify the move per shot, and specify locked-off where the shot does not need one.',
      },
      {
        q: 'Why does a moving camera make coherence worse?',
        a: 'It compounds with subject motion, so the model has to keep two changing relationships consistent at once. Locking the camera is the cheapest way to buy clip length.',
      },
    ],
    related: ['camera-control', 'motion-brush', 'temporal-coherence', 'shot-list'],
  },
  {
    slug: 'prompt-weighting',
    term: 'Prompt Weighting',
    aka: ['token weighting', 'emphasis syntax'],
    short:
      'Syntax for telling a model that some words in a prompt matter more than others, rather than repeating them and hoping.',
    tags: ['control'],
    body: [
      'Most models accept some form of emphasis notation. It exists because a long prompt dilutes: the twentieth adjective competes with the first, and the thing you actually care about ends up weighted the same as the surface it is standing on.',
      'The discipline is to weight sparingly. One or two emphasised terms per prompt read as intent; six read as noise and often produce a worse image than none.',
      'The better fix is usually a shorter prompt. Weighting is a patch for a prompt that is trying to say too much at once, and shortening it is free.',
    ],
    qa: [
      {
        q: 'How many terms should be weighted in one prompt?',
        a: 'One or two. Beyond that the emphasis stops meaning anything, and the output often gets worse than an unweighted version of the same prompt.',
      },
      {
        q: 'Is weighting better than repeating a word?',
        a: 'Yes, where the model supports it. Repetition is a blunt approximation that also lengthens the prompt and dilutes everything else in it.',
      },
    ],
    related: ['prompt-engineering', 'negative-prompt', 'cfg-scale', 'regional-prompting'],
  },
  {
    slug: 'regional-prompting',
    term: 'Regional Prompting',
    aka: ['area prompting', 'multi-region conditioning'],
    short:
      'Applying different prompts to different areas of one frame, so elements stop bleeding into each other.',
    tags: ['control'],
    body: [
      'Ask for a red product on a blue surface and you will sometimes get a purple product on a purple surface. The model applies the whole prompt to the whole image, so attributes migrate.',
      'Regional prompting scopes them. This region is the product, that region is the background, and the words for each stay where they were put. For any composition with two strongly described elements it is the difference between the shot you asked for and an average of it.',
      'It costs setup time, so it earns its place on repeated compositions rather than one-offs. On a nine-variant campaign with the same staging, it is set up once.',
    ],
    qa: [
      {
        q: 'Why do colours from one part of my prompt appear elsewhere in the image?',
        a: 'Because the whole prompt is applied to the whole frame, so attributes migrate between elements. Regional prompting scopes each description to an area and stops the bleed.',
      },
      {
        q: 'Is it worth the setup for a single image?',
        a: 'Usually not. It pays off on repeated compositions, where the regions are defined once and reused across every variant.',
      },
    ],
    related: ['prompt-weighting', 'segmentation-mask', 'controlnet', 'negative-prompt'],
  },
  {
    slug: 'lip-sync',
    term: 'Lip Sync',
    aka: ['lip synchronisation', 'viseme matching'],
    short:
      'Matching a generated or existing face’s mouth movement to an audio track, and the point at which a synthetic presenter becomes convincing or does not.',
    tags: ['control', 'ethics'],
    body: [
      'Audiences forgive a great deal in a generated face and forgive almost nothing in the mouth, because lip reading is partly involuntary. Sync that is slightly wrong reads as dubbing, and dubbing reads as untrustworthy.',
      'The technical failure modes are consistent: plosives arriving late, the jaw moving without the lips shaping, and a mouth that keeps moving fractionally after the audio stops. All three are visible at normal speed once you know to look.',
      'The consent position is stricter here than anywhere else in synthetic production. Putting words a person did not say into a recognisable mouth is the definition of the thing regulation is aimed at, and it needs an explicit release naming synthetic dialogue.',
    ],
    qa: [
      {
        q: 'Why does generated lip sync look like dubbing?',
        a: 'Usually timing: plosives landing late, or the mouth continuing fractionally after the audio ends. Lip reading is partly involuntary, so small errors register as wrongness rather than as detail.',
      },
      {
        q: 'What consent does synthetic dialogue need?',
        a: 'An explicit release covering synthetic dialogue specifically, separate from any release signed for the original footage. Words a person did not say in a recognisable mouth is exactly what transparency regulation targets.',
      },
    ],
    related: ['synthetic-ugc', 'voice-cloning', 'consent-file', 'disclosure'],
  },
  {
    slug: 'rotoscoping',
    term: 'Rotoscoping',
    aka: ['roto', 'matte pulling'],
    short:
      'Isolating a moving subject from its background frame by frame, still the most reliable way to protect a real element inside a generated one.',
    tags: ['post', 'control'],
    body: [
      'Roto is the oldest technique in this glossary and it has not been displaced. When a real product or a real performer has to sit inside a generated environment, roto is what keeps the real thing real.',
      'Automatic matting has improved enormously and still fails in the same places: hair, motion blur, glass, and anything semi-transparent. Those are also the edges an audience looks at, so the last five per cent of the work is most of the perceived quality.',
      'In a hybrid pipeline roto is often what lets you avoid the hardest generative problem entirely. Compositing a real label into a generated scene beats asking a model to render legible type, every time.',
    ],
    qa: [
      {
        q: 'Is rotoscoping still needed with modern AI matting?',
        a: 'Yes, for the edges automatic matting still fails on: hair, motion blur, glass and semi-transparency. Those are the edges viewers actually look at.',
      },
      {
        q: 'How does roto help with generative work?',
        a: 'It lets you sidestep the hardest generative problems. Compositing real packaging type into a generated scene is more reliable than asking a model to render a readable label.',
      },
    ],
    related: ['segmentation-mask', 'inpainting', 'master-plate', 'colour-management'],
  },
  {
    slug: 'colour-management',
    term: 'Colour Management',
    aka: ['colour pipeline', 'color management'],
    short:
      'Keeping colour consistent from generation through grade to delivery, and the reason a set of individually good clips can look like nine different films.',
    tags: ['post', 'production'],
    body: [
      'Generated clips arrive looking finished, which is a trap. Each one was optimised to look good alone, so a sequence of them has nine slightly different blacks, eight skin tones and a colour temperature that wanders shot to shot.',
      'The fix is ordinary post discipline that generative work routinely skips: grade the sequence as one piece, from one reference frame, after the edit is locked. Not per clip, and not before.',
      'Record the colour space in the delivery specification. A campaign delivered in mixed colour spaces looks broken on exactly one platform and nobody can work out why.',
    ],
    qa: [
      {
        q: 'Why do my generated clips not match each other?',
        a: 'Because each was graded, implicitly, to look good on its own. Grading the assembled sequence from one reference frame after picture lock is what makes them a set.',
      },
      {
        q: 'When should grading happen?',
        a: 'After the edit is locked, never before. Grading clips individually and then cutting them together guarantees the mismatch you are trying to avoid.',
      },
    ],
    related: ['hero-frame', 'deliverable-specification', 'rotoscoping', 'drift'],
  },

  // --- ethics --------------------------------------------------------------
  {
    slug: 'ai-act-article-50',
    term: 'AI Act Article 50',
    aka: ['EU AI Act transparency obligations', 'Article 50'],
    short:
      'The EU transparency provision, enforceable since 2 August 2026, requiring deployers of deepfake and synthetic-media systems to disclose that content is artificially generated.',
    tags: ['ethics', 'strategy'],
    body: [
      'Article 50 covers four categories: systems that interact with people, systems generating synthetic content, emotion recognition and biometric categorisation, and systems producing deepfakes. It applies regardless of whether the underlying system is classified as high-risk, which is the part most marketing teams missed.',
      'The duty that lands on an advertiser is the deployer duty: disclose that content has been artificially generated or manipulated, clearly and distinguishably, at the latest at first exposure. A disclosure at the end of a thirty-second spot does not satisfy it and neither does a policy page.',
      'It follows the output rather than the company. A UK or US brand serving a campaign to EU audiences is inside it, which for most paid social is the default rather than a decision. Penalties run to fifteen million euro or three per cent of worldwide annual turnover.',
    ],
    qa: [
      {
        q: 'Does Article 50 apply to companies outside the EU?',
        a: 'It follows the output. Where a system’s output is used in the Union, the obligations attach regardless of where the brand, agency or studio is established.',
      },
      {
        q: 'What does the December 2026 grace period cover?',
        a: 'Only the machine-readable marking obligation in Article 50(2), and only for systems placed on the market before 2 August 2026. It is a provider concession about watermarking infrastructure, not a deferral of the deployer disclosure duty.',
      },
      {
        q: 'Is there an artistic exemption?',
        a: 'There is a reduced obligation for evidently artistic, creative, satirical or fictional work. It does not cover creator-format advertising, where the persuasive effect depends on the content not reading as fiction.',
      },
    ],
    related: ['disclosure', 'deepfake', 'provenance', 'synthetic-endorsement'],
  },
  {
    slug: 'likeness-rights',
    term: 'Likeness Rights',
    aka: ['image rights', 'personality rights'],
    short:
      'A person’s control over the commercial use of their appearance, which generative production engages far more often than a photoshoot does.',
    tags: ['ethics'],
    body: [
      'Photography captures a likeness. Generative production manufactures new ones, which is a different act and generally needs a different permission. A release drafted for the first does not usually authorise the second.',
      'The exposure is not limited to deliberate use. A wholly synthetic face generated from a demographic description will occasionally land close to a real, identifiable person, particularly in a small market, and the legal position is much the same as if it had been intended.',
      'The dull mitigation works: run a reverse image search on any synthetic identity before it enters production, and keep a written record that you did. It is ten minutes against a claim you cannot easily defend.',
    ],
    qa: [
      {
        q: 'Does a photography release cover generative use of someone’s likeness?',
        a: 'Usually not. It grants use of captured material. Generating new material the person never performed is a distinct act, and the permission has to name it.',
      },
      {
        q: 'What if a synthetic face accidentally resembles a real person?',
        a: 'The exposure is broadly the same as if it were deliberate. Reverse image search the final identity before production and record the result.',
      },
    ],
    related: ['consent-file', 'derivative-training', 'synthetic-ugc', 'deepfake'],
  },
  {
    slug: 'derivative-training',
    term: 'Derivative Training',
    aka: ['training rights', 'model training permission'],
    short:
      'The specific permission to train a model on supplied material so it can generate new output resembling the subject, which pre-2024 releases almost never grant.',
    tags: ['ethics'],
    body: [
      'This is the single clause that decides whether a trained identity is an asset or a liability. A grant to "use the images" does not imply a right to build a model that produces images the person never sat for.',
      'A usable clause names the act explicitly, using words like train or fine-tune; states what the generated likeness may be used to say and sell; sets territory and duration with a real end date; lists excluded categories; and says what happens to the trained artefact when the term ends.',
      'Performers ask for the exclusions and they are right to. Political content, adult content, and claims about health, finance or legal matters are the standard carve-outs, and refusing them is a bad look and a worse negotiation.',
    ],
    qa: [
      {
        q: 'What makes a release cover AI training?',
        a: 'It has to name the act. If the words train, fine-tune or an equivalent do not appear, the permission has not been given, however broad the general grant looks.',
      },
      {
        q: 'What happens to a trained model at the end of the term?',
        a: 'Whatever the agreement says, which is why it has to say something. Deleted, escrowed or retained are all defensible; silence is not.',
      },
    ],
    related: ['consent-file', 'likeness-rights', 'trained-identity', 'model-licence'],
  },
  {
    slug: 'consent-file',
    term: 'Consent File',
    aka: ['release file', 'rights pack'],
    short:
      'The folder of signed permissions and licences that has to exist before the first render, not before the first delivery.',
    tags: ['ethics', 'systems'],
    body: [
      'The timing is the whole discipline. Consent gathered after generation is consent gathered after the risk was taken, and if the answer had been no you have already done the thing.',
      'A complete file holds the signed likeness and voice release including derivative training, the model licence confirmed for commercial use at the specific version, any claim substantiation the asset depends on, and the reverse image search result for a wholly synthetic identity.',
      'Make it a gate rather than a checklist. A pipeline that will not start a render without the file present enforces the rule; a checklist somebody ticks does not.',
    ],
    qa: [
      {
        q: 'When should the consent file be complete?',
        a: 'Before the first render. Consent obtained afterwards is consent obtained after the risk was taken.',
      },
      {
        q: 'What goes in it?',
        a: 'The likeness and voice release with derivative training named, the model licence for the specific version, claim substantiation, and the reverse image search result for any wholly synthetic identity.',
      },
    ],
    related: ['derivative-training', 'likeness-rights', 'model-licence', 'gate'],
  },
  {
    slug: 'model-licence',
    term: 'Model Licence',
    aka: ['model license', 'commercial use terms'],
    short:
      'The terms governing what you may do with a model’s output, which differ per model, per version and sometimes per plan.',
    tags: ['ethics', 'models'],
    body: [
      'Output licensing is not uniform and not intuitive. Some models permit unrestricted commercial use, some restrict it by company size or revenue, some restrict specific sectors, and some change terms between versions of the same product.',
      'The check happens before rendering, for the specific model and version being run, and the answer gets written into the consent file. Discovering a restriction after delivery is discovering it too late to do anything except stop running the campaign.',
      'Open weights are not the same as an open licence. A model you can download may still carry usage restrictions, and the two questions need answering separately.',
    ],
    qa: [
      {
        q: 'Does an open-weights model mean unrestricted commercial use?',
        a: 'No. Availability of weights and the licence governing output are separate questions, and plenty of downloadable models carry real usage restrictions.',
      },
      {
        q: 'When should licensing be checked?',
        a: 'Before rendering, for the exact model and version in use, with the answer recorded. Terms can differ between versions of the same product.',
      },
    ],
    related: ['consent-file', 'checkpoint', 'foundation-model', 'substantiation'],
  },
  {
    slug: 'synthetic-endorsement',
    term: 'Synthetic Endorsement',
    aka: ['AI testimonial', 'generated endorsement'],
    short:
      'A recommendation delivered by a person who does not exist, or by a real person’s likeness saying something they never said.',
    tags: ['ethics'],
    body: [
      'This is the highest-risk format in synthetic advertising, because the entire persuasive weight rests on a viewer believing a person exists and holds an opinion. Nothing else in generative production makes so specific a claim about reality.',
      'Both variants carry problems and they are different problems. An invented endorser is a misleading-advertising question. A real person’s likeness endorsing something they did not endorse is a likeness question, a defamation question and now an Article 50 question at once.',
      'Our position is simple and has never cost us a job worth having: a synthetic presenter may not make a claim the brand could not make in its own voice, and the format is disclosed on the asset.',
    ],
    qa: [
      {
        q: 'Can a synthetic presenter give a product testimonial?',
        a: 'Only with disclosure, and only saying things the brand could substantiate in its own voice. The persuasive power of the format comes from implied independence, which is exactly what makes an undisclosed version misleading.',
      },
      {
        q: 'Is an invented endorser safer than using a real person’s likeness?',
        a: 'It removes the likeness problem and keeps the misleading-advertising problem. Both need disclosure; the second also needs an explicit release.',
      },
    ],
    related: ['synthetic-ugc', 'disclosure', 'ai-act-article-50', 'substantiation'],
  },
  {
    slug: 'substantiation',
    term: 'Substantiation',
    aka: ['claim evidence', 'claim support'],
    short:
      'The evidence held to support a claim made in an advert, required regardless of how the advert was produced.',
    tags: ['ethics', 'strategy'],
    body: [
      'Generative production changes nothing about substantiation and makes it easier to forget, because a model will happily render a certification mark, a percentage or an award that has no basis in anything.',
      'That is why "no invented certification, award, ingredient or percentage" is a hard gate rather than a review note. A frame containing a fabricated claim is killed, and no disclosure rescues it: the problem is the claim, not the production method.',
      'The brief should name which claims the asset must carry and who signs them off, so legal review happens before rendering rather than after.',
    ],
    qa: [
      {
        q: 'Does disclosing AI use fix an unsubstantiated claim?',
        a: 'No. Disclosure addresses how the content was made. An unsupported claim is unsupported whoever made it and however it was produced.',
      },
      {
        q: 'Why is this a gate rather than a review step?',
        a: 'Because models generate plausible certifications, percentages and awards without being asked. It has to be checked every frame, mechanically, not noticed occasionally.',
      },
    ],
    related: ['gate', 'hallucination', 'disclosure', 'synthetic-endorsement'],
  },
  {
    slug: 'provenance',
    term: 'Provenance',
    aka: ['content provenance', 'asset history'],
    short:
      'The recorded history of how a piece of media was made and edited, travelling with the file so a platform or a viewer can check it.',
    tags: ['ethics', 'post'],
    body: [
      'Provenance is becoming a procurement question rather than an ethics one. Platforms read it, an increasing number of client legal teams ask for it, and answering "none" is a slower answer than it was two years ago.',
      'It cannot be retrofitted. A manifest describes the steps that were recorded as they happened, so a finished cut with no provenance stays a finished cut with no provenance. If a client needs it, it goes in the brief.',
      'Provenance and a visible label do different jobs. The manifest satisfies machine detection; the on-asset label satisfies a person at first exposure. Article 50 asks for both in effect, and a screenshot strips only one of them.',
    ],
    qa: [
      {
        q: 'Can provenance be added to a finished file?',
        a: 'Not meaningfully. A manifest records steps as they happen, so it has to be configured before production rather than attached afterwards.',
      },
      {
        q: 'Is provenance metadata enough on its own?',
        a: 'Not for deepfake-category content. Machine-readable marking addresses detection; a person at first exposure needs something visible on the asset.',
      },
    ],
    related: ['c2pa', 'watermarking', 'disclosure', 'ai-act-article-50'],
  },
  {
    slug: 'data-minimisation',
    term: 'Data Minimisation',
    aka: ['need-to-know', 'minimum necessary data'],
    short:
      'Putting only the data a task actually needs into a model, and never keys, client data or unreleased assets.',
    tags: ['ethics', 'systems'],
    body: [
      'Every prompt is a disclosure to a third party. That is true even where a provider promises not to train on it, because a promise about training is not a promise about logs, incidents or subpoenas.',
      'The operating rules are short. No credentials in a prompt, ever. No client personal data unless the engagement specifically requires it and the client has agreed the processor. No unreleased assets in a system without a contractual position on retention.',
      'The commercial version of the argument is easier to sell internally than the compliance one: an unreleased campaign pasted into a general-purpose tool is a leak risk with a date on it.',
    ],
    qa: [
      {
        q: 'Is it safe to paste client material into a model if the provider says it does not train on inputs?',
        a: 'A commitment about training is not a commitment about logging, retention or incidents. Treat every prompt as a disclosure to a third party and decide accordingly.',
      },
      {
        q: 'What should never go in a prompt?',
        a: 'Credentials and keys, personal data the engagement has not accounted for, and unreleased assets where there is no contractual position on retention.',
      },
    ],
    related: ['guardrail', 'consent-file', 'human-in-the-loop', 'connector'],
  },
  {
    slug: 'opt-out',
    term: 'Opt-Out',
    aka: ['training opt-out', 'no-AI signal'],
    short:
      'A machine-readable signal that a work should not be used for model training, and a claim you should be able to honour on work you publish.',
    tags: ['ethics', 'strategy'],
    body: [
      'Opt-out signals sit at several levels: robots directives, headers, per-file metadata and registry-based mechanisms. Coverage is inconsistent and enforcement is mostly reputational rather than technical.',
      'For a studio the relevant question is usually the client’s, not the crawler’s. Some clients want their campaign imagery excluded from training corpora, and the honest answer is that you can express the preference reliably and cannot guarantee it is respected.',
      'Say that plainly in the brief. Promising an enforceable opt-out is a claim about other people’s behaviour that nobody in this supply chain can actually make.',
    ],
    qa: [
      {
        q: 'Can you stop your imagery being used to train models?',
        a: 'You can express the preference through the available signals. You cannot guarantee it is honoured, and any supplier promising otherwise is making a claim about third parties they cannot control.',
      },
      {
        q: 'Should opt-out be in the brief?',
        a: 'If the client cares about it, yes, along with an honest statement of what is enforceable and what is a request.',
      },
    ],
    related: ['provenance', 'c2pa', 'model-licence', 'watermarking'],
  },

  // --- systems -------------------------------------------------------------
  {
    slug: 'skill',
    term: 'Skill',
    aka: ['agent skill', 'capability module'],
    short:
      'A self-contained folder of instructions and resources a model loads on demand for a particular kind of job, instead of one enormous instruction it always carries.',
    tags: ['systems'],
    body: [
      'The alternative to skills is a single instruction that grows every time somebody needs something new, until it is four thousand words, contradicts itself in two places and nobody will touch it.',
      'Splitting it into loadable units fixes three things at once. Each is small enough to review, each is loaded only when relevant so the context window is spent on the current job, and each can be changed without risking every other workflow.',
      'The organisational benefit is bigger than the technical one: a skill is a written-down way of doing something, which means the studio’s method stops living in one person’s head.',
    ],
    qa: [
      {
        q: 'Why not put everything in one system prompt?',
        a: 'It grows, it contradicts itself, and every edit risks unrelated workflows. Smaller loadable units are reviewable in isolation and spend the context window on the job in hand.',
      },
      {
        q: 'What makes a good skill boundary?',
        a: 'A job somebody could describe in a sentence and would want done the same way every time. If it needs three sentences and a caveat, it is probably two skills.',
      },
    ],
    related: ['agentic-workflow', 'context-engineering', 'mcp', 'connector'],
  },
  {
    slug: 'connector',
    term: 'Connector',
    aka: ['integration', 'tool connection'],
    short:
      'The link between a model and a piece of software a team already runs, and usually the difference between a system that gets adopted and one that does not.',
    tags: ['systems'],
    body: [
      'A workflow that requires people to work somewhere new is a change-management project wearing a technology costume. A workflow that reaches into the tools they already open is just a better version of their week.',
      'Connectors are also where the security surface is. Each one is a set of permissions granted to something that acts on its own, so scope them narrowly, prefer read where write is not needed, and log what they do.',
      'The unglamorous truth is that most of the build time on a creative automation engagement goes here, not into anything anybody would call intelligence.',
    ],
    qa: [
      {
        q: 'Why do internal AI tools fail to get adopted?',
        a: 'Most often because they live somewhere new. A system that reaches into the tools a team already opens is adopted by default; one that asks them to move is a project.',
      },
      {
        q: 'What is the security posture for a connector?',
        a: 'Narrow scope, read-only where writing is not needed, and a log of what it did. It is a permission granted to something that acts without being asked each time.',
      },
    ],
    related: ['mcp', 'agentic-workflow', 'guardrail', 'run-log'],
  },
  {
    slug: 'orchestration',
    term: 'Orchestration',
    aka: ['workflow orchestration', 'pipeline control'],
    short:
      'The layer that decides what runs when, what happens on failure, and where a person is asked to decide.',
    tags: ['systems'],
    body: [
      'Every real pipeline has an orchestration layer whether or not anybody built one deliberately. If nobody did, it is a person with a mental checklist, and it stops working the week they are away.',
      'What it has to handle is mostly unglamorous: ordering, retries with a limit, partial failure, and the escalation points where a human decision is required. Retries without a limit are how an unattended job spends a budget overnight.',
      'Keep the orchestration deterministic even when the steps are agentic. A model choosing what to do inside a step is useful; a model choosing whether the step runs at all is a system nobody can predict or audit.',
    ],
    qa: [
      {
        q: 'Should the orchestration layer itself be agentic?',
        a: 'No. Keep judgement inside steps and keep the control flow deterministic, or you get a system whose behaviour cannot be predicted, reproduced or audited.',
      },
      {
        q: 'What is the most common orchestration failure?',
        a: 'Unbounded retries. An unattended job that keeps trying is how a credit ceiling gets discovered the morning after it should have stopped something.',
      },
    ],
    related: ['agentic-workflow', 'credit-ceiling', 'run-log', 'guardrail'],
  },
  {
    slug: 'run-log',
    term: 'Run Log',
    aka: ['ledger', 'audit trail'],
    short:
      'The automatic record of what a pipeline did, what it cost and what happened at each gate, which is what makes a system auditable rather than merely liked.',
    tags: ['systems', 'strategy'],
    body: [
      'A run log turns "this saves us time" into a figure a finance director can check. That is the difference between a tool a team enjoys and a system a company keeps funding.',
      'It has to be written by the pipeline. Nobody fills in a spreadsheet at eleven at night after a render queue finishes, and a log that depends on discipline is a log that stops after week three.',
      'The useful fields are few: batch identifier, shot type, renders consumed, model and version, spend, gate outcomes, operator time, final disposition. From those you can derive cost per accepted asset, acceptance rate per shot type, and where a pipeline change actually paid.',
    ],
    qa: [
      {
        q: 'What should a run log record?',
        a: 'Batch, shot type, renders consumed, model and version, spend, gate outcomes, operator time and final disposition. Everything else can be derived from those.',
      },
      {
        q: 'Why must it be automatic?',
        a: 'Because a manual log depends on somebody doing admin after a long day, and it stops around week three. An automatic one still exists in month six, which is when you need it.',
      },
    ],
    related: ['cost-per-accepted-asset', 'acceptance-rate', 'orchestration', 'credit-ceiling'],
  },
  {
    slug: 'naming-convention',
    term: 'Naming Convention',
    aka: ['file naming standard'],
    short:
      'An agreed, machine-applied pattern for naming files, and the single highest-return thing to automate in a creative team.',
    tags: ['systems', 'production'],
    body: [
      'Time spent finding the final version of something is pure loss. It appears on nobody’s timesheet, it is nobody’s job, and across a team it is hours a week.',
      'A convention only works if a script applies it. A convention people are asked to follow is a convention that holds for a fortnight and then degrades into six dialects and a folder called final-v3-USE-THIS.',
      'The fields worth encoding: client, project, asset type, variant, ratio, version and date. Sortable, greppable, and unambiguous six months later, which is the only test that matters.',
    ],
    qa: [
      {
        q: 'What is the highest-return thing to automate in a content team?',
        a: 'File naming and versioning. It is pure overhead, it is invisible on any timesheet, and a script removes it permanently.',
      },
      {
        q: 'Why not just ask people to follow a convention?',
        a: 'Because conventions applied by humans decay into dialects within weeks. One applied by a script does not.',
      },
    ],
    related: ['run-log', 'deliverable-specification', 'orchestration', 'aspect-ratio-matrix'],
  },
  {
    slug: 'tool-calling',
    term: 'Tool Calling',
    aka: ['function calling', 'tool use'],
    short:
      'A model requesting that a defined function be run and reading the result, which is the mechanism that turns a chat into a workflow.',
    tags: ['systems', 'models'],
    body: [
      'Without tools a model can only produce text. With them it can search a library, queue a render, read a brief from the system it lives in and write the result back. Everything called agentic rests on this one mechanism.',
      'The design work is in the tool definitions rather than the prompt. A tool with a vague name and three optional parameters gets called wrongly and inconsistently; one that describes exactly when it should be used gets called correctly far more often.',
      'Every tool is a permission. A model with a delete tool will eventually call it, so the ones that matter belong behind a human gate rather than behind a well-worded description.',
    ],
    qa: [
      {
        q: 'Why does a model call the wrong tool?',
        a: 'Usually the definition rather than the prompt. Vague names, unclear descriptions and too many optional parameters produce inconsistent calls; precise definitions fix most of it.',
      },
      {
        q: 'Which tools should sit behind a human gate?',
        a: 'Anything that moves money, grants access, publishes, or deletes. A model with the capability will eventually use it, and a description is not a control.',
      },
    ],
    related: ['mcp', 'agentic-workflow', 'guardrail', 'human-in-the-loop'],
  },
  {
    slug: 'guardrail',
    term: 'Guardrail',
    aka: ['constraint', 'safety rail'],
    short:
      'A hard limit on what a workflow can do, enforced by the system rather than requested in an instruction.',
    tags: ['systems', 'ethics'],
    body: [
      'The distinction that matters: an instruction is a request and a guardrail is a constraint. "Do not spend more than fifty pounds" in a prompt is a hope. A credit ceiling that halts the run is a guardrail.',
      'They belong at the points where a plausible wrong answer is expensive: spend, access, publication, deletion. Everywhere else, an instruction is fine and a guardrail is friction.',
      'The test is simple. If a confused or adversarial run could ignore it, it is an instruction. If it physically cannot, it is a guardrail.',
    ],
    qa: [
      {
        q: 'What is the difference between a guardrail and an instruction?',
        a: 'An instruction is a request the model can fail to follow. A guardrail is enforced outside the model, so a confused or adversarial run cannot get past it.',
      },
      {
        q: 'Where are guardrails actually needed?',
        a: 'Spend, access, publication and deletion. Elsewhere they are friction, and friction gets routed around.',
      },
    ],
    related: ['credit-ceiling', 'human-in-the-loop', 'tool-calling', 'data-minimisation'],
  },
  {
    slug: 'eval',
    term: 'Eval',
    aka: ['evaluation set', 'regression test'],
    short:
      'A fixed set of test cases with known good answers, run against a workflow to catch it getting worse.',
    tags: ['systems'],
    body: [
      'Creative systems degrade quietly. A model version changes, a prompt is edited, a connector returns a slightly different shape, and the output gets marginally worse in a way nobody notices until a client does.',
      'An eval is the boring fix: twenty representative inputs, an agreed view of what good looks like, run automatically on every change. It does not need to be sophisticated to be the difference between catching a regression on Tuesday and hearing about it in a review.',
      'For creative work the scoring is usually a person comparing outputs side by side, which is fine. The value is in the fixed inputs and the regular cadence, not in automating the judgement.',
    ],
    qa: [
      {
        q: 'How do you test a creative workflow?',
        a: 'A fixed set of representative inputs, an agreed view of good, and a side-by-side comparison on every change. The rigour is in the fixed inputs, not in automating taste.',
      },
      {
        q: 'Why do creative systems degrade without anyone noticing?',
        a: 'Because the inputs vary constantly, so a small drop in quality is indistinguishable from a hard brief. A fixed eval set removes that excuse.',
      },
    ],
    related: ['drift', 'run-log', 'checkpoint', 'orchestration'],
  },
  {
    slug: 'context-engineering',
    term: 'Context Engineering',
    aka: ['context design'],
    short:
      'Deciding what a model sees for a given task, which now matters more than how the request is worded.',
    tags: ['systems', 'strategy'],
    body: [
      'Prompt engineering was about phrasing. Context engineering is about what is in the window at all: which reference material, which prior steps, which tool results, and in what order.',
      'The failure mode has changed with bigger windows. It used to be that things did not fit. Now they fit and the model attends to the wrong third, which looks like a reasoning failure and is actually a curation failure.',
      'The practical discipline is subtractive. Give it the brief, the specification and the two most relevant examples, not the entire brand archive. Relevance beats volume at every window size we have worked with.',
    ],
    qa: [
      {
        q: 'Is prompt engineering obsolete?',
        a: 'It is a smaller part of the job. Wording still matters; what is in the window matters more, and a well-worded request over the wrong material still fails.',
      },
      {
        q: 'Does a bigger context window remove the need for curation?',
        a: 'No. It changes the failure from "it did not fit" to "it fit and the model attended to the wrong part", which is harder to spot.',
      },
    ],
    related: ['context-window', 'rag', 'skill', 'prompt-engineering'],
  },

  // --- strategy ------------------------------------------------------------
  {
    slug: 'answer-engine-optimisation',
    term: 'Answer Engine Optimisation',
    aka: ['AEO', 'answer engine optimization'],
    short:
      'Structuring content so an AI assistant can quote it accurately, which mostly means answering the question in the first fifty words.',
    tags: ['strategy'],
    body: [
      'A search engine ranks pages. An answer engine extracts claims and reassembles them, so the unit of competition has changed from the page to the passage. Content that buries its answer under four paragraphs of throat-clearing does not get quoted, whatever it ranks for.',
      'What works is unglamorous. State the answer immediately, then justify it. Use the words people actually type as headings. Put numbers in tables rather than in prose. Answer the questions people ask rather than the ones that flatter the product.',
      'The credibility mechanics matter more than in classic search: named sources, dates, and an author that resolves to something. A confident, unattributed claim is exactly what a careful system declines to repeat.',
    ],
    qa: [
      {
        q: 'What is answer engine optimisation?',
        a: 'Structuring content so an AI assistant can extract and quote it accurately: the answer stated in the opening lines, real headings, numbers in tables, and sources that can be checked.',
      },
      {
        q: 'How is it different from SEO?',
        a: 'Classic SEO competes at the level of the page. Answer engines extract passages, so a page can rank well and still never be quoted if its answer is buried.',
      },
    ],
    related: ['generative-engine-optimisation', 'entity-graph', 'topical-authority', 'rag'],
  },
  {
    slug: 'generative-engine-optimisation',
    term: 'Generative Engine Optimisation',
    aka: ['GEO'],
    short:
      'Making a brand legible to generative systems as an entity: what it is, what it does, where it operates and what it can be cited for.',
    tags: ['strategy'],
    body: [
      'A generative system recommending a supplier is doing entity reasoning, not keyword matching. It needs to know that a company exists, what category it belongs to, which markets it serves and whether anything it says can be corroborated.',
      'So the work is partly structural and partly editorial. Consistent structured data across every page, a description that classifies plainly rather than performing, markets stated explicitly, and a body of writing that is specific enough to be worth citing.',
      'The unglamorous half is consistency. A company described four different ways across its own site is a company an entity resolver cannot pin down, and being unresolvable is worse than being uninteresting.',
    ],
    qa: [
      {
        q: 'What is generative engine optimisation?',
        a: 'Making a brand legible to generative systems as an entity rather than a keyword: consistent structured data, a plain classification of what the company is, explicit markets, and writing specific enough to cite.',
      },
      {
        q: 'What is the most common GEO mistake?',
        a: 'Describing the company differently on every page. Inconsistency makes an entity unresolvable, which is a worse position than being unremarkable.',
      },
    ],
    related: ['answer-engine-optimisation', 'entity-graph', 'topical-authority', 'synthetic-media'],
  },
  {
    slug: 'entity-graph',
    term: 'Entity Graph',
    aka: ['knowledge graph', 'entity model'],
    short:
      'The structured picture a search or answer engine builds of who you are and how you connect to places, people, services and topics.',
    tags: ['strategy'],
    body: [
      'The graph is built from what you publish and what corroborates it. Structured data declares the claims; profiles, registrations and citations elsewhere either support them or leave them dangling.',
      'Consistency is the whole discipline. The same name, the same address, the same founding date, the same service descriptions, everywhere. A detail that differs between your own pages is a contradiction the engine has to resolve, usually by trusting less of it.',
      'And nothing should be asserted that cannot be corroborated. A founder node pointing at a person who resolves nowhere is a claim a system has to discount, which is worse than having no founder node at all.',
    ],
    qa: [
      {
        q: 'What strengthens an entity graph?',
        a: 'Consistent structured data across every page, details that match everywhere they appear, and external profiles or registrations that corroborate the claims rather than merely repeating them.',
      },
      {
        q: 'Should you assert everything you can?',
        a: 'No. An assertion that resolves nowhere gets discounted and drags the credibility of the rest with it. Absent beats unverifiable.',
      },
    ],
    related: ['generative-engine-optimisation', 'answer-engine-optimisation', 'topical-authority'],
  },
  {
    slug: 'topical-authority',
    term: 'Topical Authority',
    aka: ['subject authority', 'topic depth'],
    short:
      'Being demonstrably thorough on a subject rather than having one page about it, measured by coverage and depth rather than by volume.',
    tags: ['strategy'],
    body: [
      'One article about generative video costs is a page. A costs article, a measurement methodology, a glossary of the terms it uses, a published pipeline and a calculator that shows the arithmetic is a position. Systems that decide who to cite are increasingly able to tell the difference.',
      'What builds it is coverage of a subject’s real surface: the buying question, the method, the failure modes, the definitions and the regulation. What does not is the same claim restated across fifteen pages at different keyword densities.',
      'The internal linking matters because it is how the coverage is legible. A cluster that does not link to itself is a set of pages that happen to share a topic.',
    ],
    qa: [
      {
        q: 'How do you build topical authority?',
        a: 'Cover the real surface of a subject: the buying question, the method, the failure modes, the definitions, the regulation, and the tools. Then link them so the coverage is visible.',
      },
      {
        q: 'Does publishing more pages help?',
        a: 'Only if they say different things. Restating one claim across fifteen pages is volume, and it is increasingly easy for a system to recognise as such.',
      },
    ],
    related: ['entity-graph', 'answer-engine-optimisation', 'content-atomisation'],
  },
  {
    slug: 'content-atomisation',
    term: 'Content Atomisation',
    aka: ['content decomposition', 'repurposing'],
    short:
      'Breaking one substantial piece into a set of claims and rebuilding each as a native asset for a different format.',
    tags: ['strategy', 'systems'],
    body: [
      'The naive version summarises once and reformats the summary nine times, which produces nine assets that all lead with the same sentence in different aspect ratios. Reach does not move, because nothing new was said.',
      'The version that works decomposes first: read the source and inventory every distinct claim, with its evidence and how surprising it is. A decent long article yields eight to twenty. Then match different claims to different formats, because formats have appetites.',
      'A carousel wants a counter-intuitive claim with three supports. A quote card wants a sentence that survives without context. An answer-engine snippet wants the definitional claim stated plainly. They are different jobs and they want different raw material.',
    ],
    qa: [
      {
        q: 'Why do repurposed assets all feel the same?',
        a: 'Because they were generated from one summary, so they inherit the same compression and lead with the same claim. Inventorying the claims first is what makes the outputs genuinely different.',
      },
      {
        q: 'How many usable claims does a long article contain?',
        a: 'Typically eight to twenty in a 1,500-word piece, which is more than enough to give nine assets nine different openings.',
      },
    ],
    related: ['topical-authority', 'agentic-workflow', 'cutdown', 'answer-engine-optimisation'],
  },
];
