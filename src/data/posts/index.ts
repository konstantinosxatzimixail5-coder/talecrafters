// The post index.
//
// One import per file rather than a glob, so a post that fails to compile
// fails the build loudly instead of quietly disappearing from the blog. The
// export is sorted newest first, which is the order every consumer wants.

import type { Post } from './types';

import { post as cost2026 } from './generative-video-production-cost-2026';
import { post as aiAct } from './eu-ai-act-article-50';
import { post as ukDisclosure } from './uk-disclosure';
import { post as masterPlate } from './master-plate';
import { post as syntheticUgc } from './synthetic-ugc-consent';
import { post as hundredShots } from './hundred-shots';
import { post as agenticVsAutomation } from './agentic-vs-automation';
import { post as costPerAsset } from './cost-per-accepted-asset';
import { post as howToBrief } from './how-to-brief';
import { post as repurposing } from './repurposing-engine';
import { post as marketingWeek } from './creative-automation-week';
import { post as foodPhotography } from './food-photography';
import { post as looksCheap } from './why-ai-video-looks-cheap';
import { post as trainedIdentity } from './trained-identity';
import { post as temporalCoherence } from './temporal-coherence';

// --- buying and models -----------------------------------------------------
import { post as choosingAModel } from './choosing-an-ai-video-model';
import { post as switchingModels } from './switching-models';
import { post as ugcAdCost } from './ai-ugc-ad-cost';
import { post as choosingAnAgency } from './choosing-an-ai-video-agency';
import { post as perSecondPricing } from './per-second-pricing';

// --- search and answer engines ---------------------------------------------
import { post as aeo } from './answer-engine-optimisation';
import { post as gettingQuoted } from './getting-quoted';
import { post as zeroClick } from './zero-click';
import { post as llmsTxt } from './llms-txt';
import { post as schemaMarkup } from './schema-markup';

// --- story and attention ---------------------------------------------------
import { post as noStory } from './ai-video-no-story';
import { post as writingHooks } from './writing-hooks';
import { post as threeActs } from './three-acts-in-thirty-seconds';
import { post as beatSheet } from './beat-sheet-before-shot-list';
import { post as retentionCurve } from './retention-curve';
import { post as openLoops } from './open-loops';
import { post as storyboards } from './ai-storyboards';

// --- craft -----------------------------------------------------------------
import { post as cuttingAiVideo } from './cutting-ai-video';
import { post as syntheticPresenter } from './synthetic-presenter';
import { post as legibleText } from './legible-text';
import { post as dubbing } from './dubbing-and-lip-sync';
import { post as voiceCloning } from './voice-cloning';
import { post as choosingARegister } from './choosing-a-register';
import { post as whyHandsFail } from './why-hands-fail';
import { post as matchingPlates } from './matching-filmed-plates';

// --- systems and operations ------------------------------------------------
import { post as creativeTesting } from './creative-testing-at-volume';
import { post as lockFile } from './brand-lock-file';
import { post as automateFirst } from './what-to-automate-first';
import { post as opsLedger } from './creative-operations-ledger';
import { post as mcpForMarketing } from './mcp-for-marketing-teams';

// --- rights and disclosure -------------------------------------------------
import { post as contentCredentials } from './content-credentials';
import { post as whoOwns } from './who-owns-ai-content';
import { post as aiInThePitch } from './ai-in-the-pitch';

export type { Post, Block, PostFaq, PostSource } from './types';
export { readingMinutes, wordCount } from './types';

export const posts: Post[] = [
  cost2026,
  aiAct,
  ukDisclosure,
  masterPlate,
  syntheticUgc,
  hundredShots,
  agenticVsAutomation,
  costPerAsset,
  howToBrief,
  repurposing,
  marketingWeek,
  foodPhotography,
  looksCheap,
  trainedIdentity,
  temporalCoherence,
  choosingAModel,
  switchingModels,
  ugcAdCost,
  choosingAnAgency,
  perSecondPricing,
  aeo,
  gettingQuoted,
  zeroClick,
  llmsTxt,
  schemaMarkup,
  noStory,
  writingHooks,
  threeActs,
  beatSheet,
  retentionCurve,
  openLoops,
  storyboards,
  cuttingAiVideo,
  syntheticPresenter,
  legibleText,
  dubbing,
  voiceCloning,
  choosingARegister,
  whyHandsFail,
  matchingPlates,
  creativeTesting,
  lockFile,
  automateFirst,
  opsLedger,
  mcpForMarketing,
  contentCredentials,
  whoOwns,
  aiInThePitch,
].sort((a, b) => b.published.localeCompare(a.published));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Posts that link to a given Supply Drop resource. Used to cross-link the two. */
export const postsForResource = (slug: string) =>
  posts.filter((p) => p.resources?.includes(slug));

/** Posts that define or lean on a given glossary term. */
export const postsForTerm = (slug: string) => posts.filter((p) => p.terms?.includes(slug));
