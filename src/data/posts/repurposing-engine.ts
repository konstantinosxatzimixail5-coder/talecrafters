import type { Post } from './types';

export const post: Post = {
  slug: 'building-a-content-repurposing-engine',
  title: 'Building a Content Repurposing Engine: One Article, Nine Assets',
  metaTitle: 'Building a Content Repurposing Engine: One Article, Nine Assets',
  metaDescription:
    'The architecture behind a repurposing engine that produces nine usable assets from one source without flattening them all into the same voice. What to automate, what to keep agentic, and where it breaks.',
  excerpt:
    'Repurposing fails when nine assets turn out to be the same asset nine times. The fix is structural, not stylistic.',
  published: '2026-07-30',
  author: 'TaleCrafters',
  section: 'Systems',
  tags: ['Systems', 'Content operations', 'Automation'],
  keywords: [
    'content repurposing engine',
    'content repurposing automation',
    'one article nine assets',
    'AI content repurposing workflow',
    'content atomisation',
    'marketing content automation',
    'automated content distribution',
  ],
  image: 'repurposing',
  imageAlt:
    'One document splitting into nine differently shaped output panels, each cropped and framed for a different feed.',
  standfirst:
    'A repurposing engine that produces nine assets from one article is easy to build and usually worthless, because the nine turn out to be the same argument in nine aspect ratios. The version that works extracts different claims for different formats, and the difference is architectural.',
  body: [
    {
      t: 'p',
      text: 'Every content team has been sold the same demo. Paste an article, get a carousel, three quote cards, a script and a newsletter. It works. Then you look at the nine assets and realise they all lead with the same sentence, because they were all generated from the same summary, and the audience on each platform is being handed the identical thing in a different shape.',
    },
    {
      t: 'p',
      text: 'Reach did not go up. You just made nine copies.',
    },
    { t: 'h2', text: 'Why the naive version flattens' },
    {
      t: 'p',
      text: 'The naive engine has one step: summarise, then reformat. Summarisation is lossy by design, so every downstream asset inherits the same compression, which means the same opening claim, the same three points, the same ending.',
    },
    {
      t: 'p',
      text: 'The fix is to stop summarising. Extract instead.',
    },
    { t: 'h2', text: 'The architecture that works' },
    {
      t: 'p',
      text: 'Four stages. The first two are the ones people skip.',
    },
    { t: 'h3', text: 'Stage 1: Decompose into claims' },
    {
      t: 'p',
      text: 'Read the source and produce a structured list of every distinct claim it makes, each with its supporting evidence, its strength, and how surprising it is. Not a summary. An inventory. A decent 1,500-word article yields somewhere between eight and twenty claims.',
    },
    {
      t: 'p',
      text: 'This is the step that makes everything downstream different, because now nine assets can lead with nine different claims rather than nine renderings of the strongest one.',
    },
    { t: 'h3', text: 'Stage 2: Match claims to formats' },
    {
      t: 'p',
      text: 'Formats have appetites. A carousel wants a counter-intuitive claim with three supports. A quote card wants one sentence that survives without context. A short video wants a claim with a visual consequence. A newsletter wants the claim that is most useful to somebody who already trusts you.',
    },
    {
      t: 'p',
      text: 'Encode that as a specification per format rather than as a prompt, so the matching is inspectable. When an asset underperforms you can see which claim it was carrying and whether the format was wrong or the claim was.',
    },
    { t: 'h3', text: 'Stage 3: Draft against the format specification' },
    {
      t: 'p',
      text: 'Now generate, one asset at a time, with the claim and the format spec as inputs and the source article available for evidence. This is where the agentic part earns its cost, because a source article never arrives in the same structure twice.',
    },
    { t: 'h3', text: 'Stage 4: The deterministic tail' },
    {
      t: 'p',
      text: 'Naming, versioning, aspect-ratio export, alt text, scheduling, the run log. None of this needs judgement and all of it needs to be identical every time. Script it.',
    },
    {
      t: 'note',
      title: 'The split, stated once',
      text: 'Judgement where the input varies. Determinism everywhere else. An agent choosing your file naming convention is a system nobody can find anything in by November.',
    },
    { t: 'h2', text: 'What nine assets should actually be' },
    {
      t: 'table',
      caption: 'One 1,500-word article, decomposed',
      head: ['Asset', 'Claim type it wants', 'What kills it'],
      rows: [
        ['LinkedIn carousel', 'Counter-intuitive, with three supports', 'Leading with the article’s thesis'],
        ['Short video, 30s', 'A claim with a visual consequence', 'A talking head reading the intro'],
        ['Quote card', 'One sentence that survives without context', 'A sentence that needs the paragraph before it'],
        ['Newsletter section', 'Most useful to an existing reader', 'Recruiting language aimed at strangers'],
        ['Thread', 'The claim with the most branches', 'Numbered summary of the article'],
        ['Infographic frame', 'The one with a number in it', 'A chart of something nobody asked'],
        ['Podcast read', 'The narrative claim, in order', 'Bullet points read aloud'],
        ['Answer-engine snippet', 'The definitional claim, stated plainly', 'Marketing voice'],
        ['Internal enablement note', 'The claim a salesperson can use tomorrow', 'The claim the marketing team liked'],
      ],
    },
    { t: 'h2', text: 'Where these engines break' },
    {
      t: 'ul',
      items: [
        'No claim inventory. Everything flattens, as above. This is the failure in maybe eighty per cent of the repurposing systems we have been asked to look at.',
        'No human gate. Nine assets a day, unreviewed, is nine times the surface area for a claim nobody substantiated. A person approves the claim inventory once per source. That is one review, not nine.',
        'No naming convention. The system works beautifully for six weeks and then nobody can find the September assets.',
        'No cost ledger. "It saves time" is not auditable. Cost per accepted asset is.',
        'Repurposing something that should not have been published once. An engine amplifies whatever it is fed, including a weak argument.',
      ],
    },
    { t: 'h2', text: 'The realistic gain' },
    {
      t: 'p',
      text: 'The honest number is not "ten times the content". It is that the coordination work collapses. The drafting was never the expensive part; the expensive part was the four hours a week spent renaming files, reformatting the same argument, chasing an approval and rebuilding a deck that already existed.',
    },
    {
      t: 'p',
      text: 'A repurposing engine that removes that and leaves the judgement alone is worth building. One that removes the judgement produces nine assets a week that nobody wants to put their name on.',
    },
    {
      t: 'cta',
      href: '/armoury/creative-automation-workflow-canvas',
      label: 'Download the workflow canvas',
      text: 'Map your own process step by step and mark what a person decides, what a model drafts and what a script handles alone. Free, no email gate.',
    },
  ],
  faqs: [
    {
      q: 'What is a content repurposing engine?',
      a: 'A system that turns one source piece into multiple platform-native assets. The useful version decomposes the source into a claim inventory first, then matches different claims to different formats, rather than summarising once and reformatting the summary nine times.',
    },
    {
      q: 'Why does AI content repurposing produce assets that all feel the same?',
      a: 'Because they were generated from a single summary. Summarisation is lossy, so every downstream asset inherits the same compression and leads with the same claim. Extracting a claim inventory instead of summarising is what makes the outputs genuinely different.',
    },
    {
      q: 'What part of repurposing should be automated rather than agentic?',
      a: 'Naming, versioning, aspect-ratio export, alt text, scheduling and the run log. None of it needs judgement and all of it must be identical every time. Keep the agentic part for reading a source that never arrives in the same structure twice.',
    },
    {
      q: 'How much human review does a repurposing engine need?',
      a: 'One review per source, on the claim inventory, rather than one review per asset. Approving the claims once means nine assets inherit an approved set of statements instead of each requiring separate substantiation.',
    },
    {
      q: 'How do you measure whether a repurposing engine is working?',
      a: 'Cost per accepted asset, logged automatically by the pipeline. "It saves time" is not auditable; total spend divided by assets that actually shipped is.',
    },
  ],
  terms: ['agentic-workflow', 'human-in-the-loop', 'cost-per-accepted-asset', 'rag'],
  related: [
    'agentic-workflow-vs-automation-where-each-actually-works',
    'what-creative-automation-actually-removes-from-a-marketing-week',
    'cost-per-accepted-asset-measuring-generative-production',
  ],
  resources: ['creative-automation-workflow-canvas'],
};
