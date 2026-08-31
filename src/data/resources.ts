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
  /**
   * Set on a resource that also exists as a branded PDF. The page is the
   * canonical version and the PDF is a copy of it, which is the right way round:
   * a download is not a gate in front of a document, it is a second format of
   * one that already ranks.
   */
  pdf?: string;
  /** Search metadata for the resource's own page. */
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
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
  {
    slug: 'synthetic-media-production-brief-template',
    title: 'Synthetic Media Production Brief Template',
    kicker: 'The six paragraphs a generative brief needs and a normal one does not',
    color: 'var(--brand-gold)',
    count: '7 sections',
    format: 'Fillable template, PDF and on this page',
    blurb:
      'A conventional brief tells a crew what to shoot. A generative brief has to say what must not change. This is the difference, written out: what to lock, where the legible type is, who has to recur, what is regulated, what disclosure applies, and who signs off. It ends with the seven things a proposal should contain before you sign it.',
    forWhom: 'Anyone about to commission generative video or photography and unsure what to send.',
    pdf: '/downloads/talecrafters-synthetic-media-production-brief-template.pdf',
    metaTitle: 'Synthetic Media Production Brief Template (Free, No Email Gate)',
    metaDescription:
      'A fillable brief template for commissioning generative video and photography: what must not change, where the legible type is, who recurs, what is regulated, what disclosure applies and who signs off.',
    keywords: [
      'synthetic media brief template',
      'AI video production brief',
      'generative video brief template',
      'creative brief template AI',
      'AI production brief',
    ],
  },
  {
    slug: 'generative-film-shot-consistency-checklist',
    title: 'Generative Film Shot Consistency Checklist',
    kicker: 'The nine tells, arranged by the stage at which each has to be caught',
    color: 'var(--brand-cyan)',
    count: '27 checks',
    format: 'Checklist, PDF and on this page',
    blurb:
      'Nine ways a generative sequence gives itself away, split into decisions you make before rendering, gates you apply to every frame, and the checks that only work on the assembled set. Includes the pass criteria per gate and the rule about never patching a frame into passing.',
    forWhom: 'Anyone shipping more than three generative shots that have to look like they belong together.',
    pdf: '/downloads/talecrafters-generative-film-shot-consistency-checklist.pdf',
    metaTitle: 'Generative Film Shot Consistency Checklist (Free Download)',
    metaDescription:
      'Twenty-seven pass-or-fail checks for keeping a generative film or photo set consistent: light direction, silhouette overlay, identity drift, extremities, text in frame and the assembled-set tests.',
    keywords: [
      'AI video consistency checklist',
      'generative film checklist',
      'AI shot consistency',
      'AI video quality checklist',
      'character consistency checklist',
    ],
  },
  {
    slug: 'ai-advertising-disclosure-checklist',
    title: 'AI Advertising Disclosure Checklist',
    kicker: 'UK, EU and platform rules on one page, decided at brief stage',
    color: 'var(--brand-magenta)',
    count: '4 sections',
    format: 'Decision path, PDF and on this page',
    blurb:
      'Whether a generative asset has to be labelled, worked out once per campaign instead of argued about at delivery. Covers the CAP misleadingness test, the EU AI Act Article 50 obligations that took effect on 2 August 2026, the platform policies that are usually stricter than either, and the two carve-outs that mostly do not help.',
    forWhom: 'Marketing and legal teams running generative creative across more than one market.',
    pdf: '/downloads/talecrafters-ai-advertising-disclosure-checklist.pdf',
    metaTitle: 'AI Advertising Disclosure Checklist: UK, EU and Platform Rules',
    metaDescription:
      'A one-page decision path for whether a generative advert must be labelled, covering the UK CAP position, EU AI Act Article 50 from August 2026, and platform AI-content policies.',
    keywords: [
      'AI advertising disclosure checklist',
      'AI ad labelling rules',
      'EU AI Act advertising compliance',
      'ASA AI disclosure',
      'AI content disclosure checklist',
    ],
  },
  {
    slug: 'synthetic-ugc-consent-template',
    title: 'Synthetic UGC Consent Template',
    kicker: 'A likeness release with the derivative-training clause in it',
    color: 'var(--brand-violet-text)',
    count: '6 clauses',
    format: 'Template with schedule, PDF and on this page',
    blurb:
      'A likeness and voice release drafted for generative production rather than photography. The clause that matters is the one expressly granting the right to train a model on the supplied material, which almost no pre-2024 release contains. Includes scope, territory, term, exclusions, withdrawal and end-of-term disposal.',
    forWhom: 'Producers building a trained identity from a real performer, and performers being asked to sign one.',
    pdf: '/downloads/talecrafters-synthetic-ugc-consent-template.pdf',
    metaTitle: 'Synthetic UGC Consent Template: Likeness and Voice Release',
    metaDescription:
      'A likeness and voice release drafted for generative production, including the derivative-training clause that photography releases do not contain, plus scope, term, withdrawal and disposal.',
    keywords: [
      'synthetic UGC consent template',
      'AI likeness release',
      'digital likeness consent form',
      'AI voice consent template',
      'model release AI training',
    ],
  },
  {
    slug: 'creative-automation-workflow-canvas',
    title: 'Creative Automation Workflow Canvas',
    kicker: 'Map the process before you automate any of it',
    color: 'var(--brand-violet-text)',
    count: '5 sections',
    format: 'Canvas, PDF and on this page',
    blurb:
      'One row per step, an owner against each, and a verdict: a person decides it, a model drafts it, or a script handles it alone. Includes the variance test that tells you whether a step needs a script, branches or an agentic workflow, the four places agents should never go, and the scaffolding without which none of it survives to month six.',
    forWhom: 'Content and marketing teams working out what to automate first, and what to leave alone.',
    pdf: '/downloads/talecrafters-creative-automation-workflow-canvas.pdf',
    metaTitle: 'Creative Automation Workflow Canvas (Free, No Email Gate)',
    metaDescription:
      'A one-page canvas for mapping a creative process step by step before automating it, with the variance test for choosing between a script, branches and an agentic workflow.',
    keywords: [
      'creative automation canvas',
      'workflow mapping template',
      'content operations audit',
      'marketing workflow automation template',
      'agentic workflow canvas',
    ],
  },
  {
    slug: 'ai-video-cost-calculator',
    title: 'AI Video Cost Calculator',
    kicker: 'Cost per accepted asset, with our acceptance rates published',
    color: 'var(--brand-gold)',
    count: '5 sections',
    format: 'Worksheet, PDF and on this page',
    blurb:
      'The arithmetic we quote from, including the acceptance-rate table per shot type that most studios treat as commercially sensitive. Work through it and you get a cost per accepted asset rather than a cost per generation, which is the difference between a number you can plan with and a number that flatters everybody.',
    forWhom: 'Anyone comparing generative quotes, or working out whether a brief should be generative at all.',
    pdf: '/downloads/talecrafters-ai-video-cost-calculator.pdf',
    metaTitle: 'AI Video Cost Calculator: Cost Per Accepted Asset Worksheet',
    metaDescription:
      'Work out the real cost of generative video production, with published acceptance rates per shot type and the cost-per-accepted-asset formula that counts rejected renders.',
    keywords: [
      'AI video cost calculator',
      'generative video cost',
      'cost per accepted asset',
      'AI video pricing worksheet',
      'AI production cost estimate',
    ],
  },
  {
    slug: 'production-readiness-scorecard',
    title: 'Production Readiness Scorecard',
    kicker: 'Twenty-five questions that separate a pipeline from a habit',
    color: 'var(--brand-cyan)',
    count: '25 questions',
    format: 'Scored assessment, PDF and on this page',
    blurb:
      'Score a team or a supplier out of 125 across locks, control gates, measurement, compliance and handover. Designed to be used on a studio you are evaluating or on yourself before committing to a campaign that depends on consistency. A row nobody can answer scores zero.',
    forWhom: 'Anyone choosing a generative production partner, or deciding whether their own team is ready.',
    pdf: '/downloads/talecrafters-production-readiness-scorecard.pdf',
    metaTitle: 'Production Readiness Scorecard for Generative Production',
    metaDescription:
      'Twenty-five scored questions across locks, control gates, measurement, compliance and handover that tell you whether a team can run generative production at volume or is running demos.',
    keywords: [
      'generative production readiness',
      'AI production scorecard',
      'evaluating AI video studios',
      'AI production capability assessment',
      'choosing an AI video agency',
    ],
  },
];

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);

/** Resources that ship as a PDF, i.e. those with a page under /armoury/[slug]. */
export const downloadableResources = resources.filter((r) => r.pdf);
