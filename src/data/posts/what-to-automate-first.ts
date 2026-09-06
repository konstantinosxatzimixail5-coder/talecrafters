import type { Post } from './types';

export const post: Post = {
  slug: 'what-to-automate-first-in-a-content-team',
  title: 'What to Automate First in a Content Team (And What to Leave Alone)',
  metaTitle: 'What to Automate First in a Content Team: A Sequencing Guide',
  metaDescription:
    'A sequencing method for creative automation: the variance test that decides between a script, a branch and an agent, the four places automation should never go, and why the boring step is almost always the right first one.',
  excerpt:
    'Everybody wants to automate the writing. The writing is the part with judgement in it. Automate the renaming.',
  published: '2026-06-02',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Method', 'Strategy'],
  keywords: [
    'what to automate first',
    'creative automation strategy',
    'content team automation',
    'marketing workflow automation',
    'agentic workflow content',
    'automation sequencing',
  ],
  image: 'what-to-automate-first',
  imageAlt: 'A process map with each step marked script, branch, agent or person.',
  standfirst:
    'Automate by variance, not by visibility. A step that produces the same shape of output every time is a script. A step with a few known paths is a branch. A step where the path depends on the content is an agent. A step where being wrong is expensive stays a person.',
  body: [
    {
      t: 'p',
      text: 'Every automation conversation starts in the same place: the most visible, most creative, most discussed part of the process. It is also the part with the most judgement in it, the least repetition, and the highest cost of being wrong — which makes it close to the worst possible first project.',
    },
    {
      t: 'p',
      text: 'The best first project is almost always something nobody enjoys talking about.',
    },
    { t: 'h2', text: 'The variance test' },
    {
      t: 'p',
      text: 'For any step in the process, ask one question: how much does the output vary given the input?',
    },
    {
      t: 'table',
      caption: 'Variance decides the tool',
      head: ['Variance', 'Example', 'Tool', 'Why'],
      rows: [
        ['None', 'Renaming, resizing, filing, format conversion', 'A script', 'Deterministic. An agent here adds cost and a failure mode.'],
        ['A few known paths', 'Routing by campaign type, applying one of four templates', 'A branch', 'Enumerable. Write the conditions down.'],
        ['Path depends on content', 'Summarising a brief, drafting variants, classifying inbound', 'An agent', 'The work is deciding, which is what the model is for.'],
        ['High, and being wrong is expensive', 'Final approval, claims, anything legal, the creative decision', 'A person', 'Not a technology question.'],
      ],
    },
    {
      t: 'p',
      text: 'The common error is reaching for the third row when the first would do. An agent doing a job a script could do is more expensive, slower, and capable of surprising you, which is three disadvantages and no benefit.',
    },
    { t: 'h2', text: 'Where the hours actually are' },
    {
      t: 'p',
      text: 'When we audit a content team’s week, the time does not sit where anyone expects. Writing is rarely the largest block. The largest block is almost always coordination: finding the current version, renaming exports, chasing an approval, rebuilding the same status deck, reformatting one asset into six sizes, and looking for a file somebody named untitled-final-v3.',
    },
    {
      t: 'p',
      text: 'That work has zero variance, high volume, and no creative content whatsoever. It is also invisible in every plan because nobody puts it on a timesheet.',
    },
    {
      t: 'note',
      title: 'The first project, nine times out of ten',
      text: 'A naming convention, enforced automatically, plus automated export into every required size and format. It is unglamorous, it takes about a week, and it returns several hours per person per week forever. Nothing else has that ratio.',
    },
    { t: 'h2', text: 'The four places automation should not go' },
    {
      t: 'ol',
      items: [
        'Final approval. Somebody signs, at any volume. The moment approval is automated, nobody is responsible for what ships.',
        'Anything making a factual or regulated claim. A drafted claim is fine; a published one without a human check is a liability with a schedule.',
        'Anything touching a real person’s likeness or voice without a checked consent record. The check is the point and it cannot be inferred.',
        'Anything where the failure is silent. Automation that quietly does nothing is worse than no automation, because the team stops checking.',
      ],
    },
    { t: 'h2', text: 'The sequence' },
    {
      t: 'p',
      text: 'A workable order, in the sense that each step makes the next one possible:',
    },
    {
      t: 'ol',
      items: [
        'Map the process first, one row per step, with an owner and a time estimate against each. Automating an unmapped process automates the mess.',
        'Fix naming and filing. Everything downstream depends on being able to find things reliably.',
        'Automate export and reformatting. Zero variance, immediate return, and it removes the most-resented task in the building.',
        'Add routing. Branches that send work to the right template, the right person, the right queue.',
        'Then, and only then, add agents to the steps where the path genuinely depends on the content.',
        'Instrument all of it. If you cannot say what a run cost and what it produced, you have a demo.',
      ],
    },
    { t: 'h2', text: 'What makes it survive to month six' },
    {
      t: 'p',
      text: 'Most creative automation is abandoned within a quarter, and the reasons are always the same three. Nobody owns it, so nothing gets fixed when it breaks. It has no logging, so nobody can tell whether it is working. And it was built around one person’s way of working, so it stops when they move.',
    },
    {
      t: 'p',
      text: 'The scaffolding that prevents that is boring: a named owner, a run log, a written description of what it does, and a fallback path for when it is down. Building it is about a fifth of the work and it is the fifth that decides whether the other four fifths still exist next year.',
    },
    {
      t: 'cta',
      href: '/supply-drop/creative-automation-workflow-canvas',
      label: 'The workflow canvas',
      text: 'One row per step, an owner against each, and the verdict: a person decides it, a model drafts it, or a script handles it alone.',
    },
  ],
  faqs: [
    {
      q: 'What should a content team automate first?',
      a: 'Naming, filing and export. Zero variance, high volume, no creative content, and it returns several hours per person per week forever. The most visible creative step is the worst first project because it has the most judgement in it and the highest cost of being wrong.',
    },
    {
      q: 'How do you decide between a script, a branch and an agent?',
      a: 'By variance. No variance in the output given the input means a script. A few enumerable paths means a branch. A path that depends on the content itself means an agent. High variance where being wrong is expensive means a person.',
    },
    {
      q: 'What should never be automated in a creative process?',
      a: 'Final approval, anything making a factual or regulated claim, anything touching a real person’s likeness or voice without a checked consent record, and anything whose failure would be silent.',
    },
    {
      q: 'Why does creative automation get abandoned?',
      a: 'Three reasons, always: nobody owns it so nothing gets fixed, there is no logging so nobody can tell whether it works, and it was built around one person’s way of working so it stops when they move.',
    },
    {
      q: 'Why is using an agent for a simple task a mistake?',
      a: 'Because an agent doing a job a script could do is more expensive, slower and capable of surprising you. That is three disadvantages and no benefit. Reach for the simplest tool the variance allows.',
    },
  ],
  terms: ['agentic-workflow', 'orchestration', 'naming-convention', 'human-in-the-loop', 'run-log', 'guardrail'],
  related: [
    'agentic-workflow-vs-automation-where-each-actually-works',
    'what-creative-automation-actually-removes-from-a-marketing-week',
    'the-creative-operations-ledger',
  ],
  resources: ['creative-automation-workflow-canvas'],
};
