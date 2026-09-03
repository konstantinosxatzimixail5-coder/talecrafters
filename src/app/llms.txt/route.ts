import { SITE_URL, site, markets } from '@/lib/site';



import { arms } from '@/data/arsenal';
import {
  getWork, getCategories, getPipelines, getSolutions, getTerms, getResources,
  getPosts, getFilms, getConceptBrands, getCaptures,
} from '@/content/collections';







export const dynamic = 'force-static';

/**
 * /llms.txt — a plain-text map of the site for answer engines.
 *
 * The convention is a markdown document an LLM can read in one request instead
 * of crawling forty pages to work out what the company does. It is generated
 * from the same data files as the site, so it cannot drift out of date.
 */
export async function GET() {
  // Same source as the pages. A file that says what is on the site has to be
  // generated from what is on the site.
  const [work, categories, pipelines, solutions, terms, resources, posts, films, conceptBrands, captures] =
    await Promise.all([
      getWork(), getCategories(), getPipelines(), getSolutions(), getTerms(),
      getResources(), getPosts(), getFilms(), getConceptBrands(), getCaptures(),
    ]);
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push('');
  lines.push(`> ${site.description}`);
  lines.push('');
  lines.push(
    'TaleCrafters is a synthetic media studio registered in London and working across the UK, ' +
      'Greece, Ireland, Cyprus, the rest of Europe and the US. It operates in three arms: ' +
      'Create (films, campaigns, visual worlds), ' +
      'Systems (agentic workflows, automation and content infrastructure) and Originals (its own ' +
      'films, games and stories). Generation is one stage inside a named pipeline; every pipeline ' +
      'carries mechanical control gates and a human sign-off on the brief and the final cut.'
  );
  lines.push('');

  lines.push('## Markets served');
  lines.push('');
  lines.push(
    `The studio contracts from the United Kingdom and works entirely in English. It sells into ` +
      `${markets.map((m) => m.name).join(', ')}. Half the published case studies were delivered ` +
      `for clients in Greece: a restaurant on Rhodes, a data school in Athens and a motorcycle ` +
      `dealership. There is no office outside the United Kingdom and the site is not published ` +
      `in any language other than English.`
  );
  lines.push('');
  lines.push(`- [AI video production in Greece](${SITE_URL}/ai-video-production-greece)`);
  lines.push(`- [AI video production in London](${SITE_URL}/ai-video-production-london)`);
  lines.push('');

  lines.push('## The three arms');
  lines.push('');
  for (const a of arms) {
    lines.push(`- [${a.name}](${SITE_URL}${a.href}): ${a.line} ${a.blurb}`);
  }
  lines.push('');

  lines.push('## What we are hired for');
  lines.push('');
  for (const s of solutions) {
    lines.push(`- [${s.plainName}](${SITE_URL}/${s.slug}): ${s.metaDescription}`);
  }
  lines.push('');

  lines.push('## Capabilities');
  lines.push('');
  for (const c of categories) {
    lines.push(
      `- [${c.title} — ${c.descriptor}](${SITE_URL}/arsenal#${c.slug}): ${c.intro} Services: ${c.services
        .map((s) => s.name)
        .join(', ')}.`
    );
  }
  lines.push('');

  lines.push('## Case studies');
  lines.push('');
  for (const w of work) {
    lines.push(
      `- [${w.client} — ${w.title}](${SITE_URL}/work/${w.slug}): ${w.summary} Discipline: ${w.discipline}. Year: ${w.year}. Result: ${w.result}`
    );
  }
  lines.push('');

  lines.push('## Original short films, with their process sheets');
  lines.push('');
  lines.push(
    'Original shorts written, designed, directed and cut inside a generative pipeline. ' +
      'Each is published with the working behind it: every generation block, the ' +
      'prompt as written, the design references and the locks that stopped the world drifting.'
  );
  lines.push('');
  for (const f of films) {
    lines.push(
      `- [${f.title}](${SITE_URL}/films/${f.slug}) (${f.runtime}): ${f.logline}` +
        (f.doc ? ` Process document: ${SITE_URL}${f.doc.path}` : '')
    );
  }
  lines.push('');

  lines.push('## Concept projects (spec work, invented brands)');
  lines.push('');
  lines.push(
    'Every brand below is invented. Nobody commissioned any of it and none of these products ' +
      'exist. Each entry states the control gate it was built to test, which is the only reason ' +
      'a fake brand earns a page.'
  );
  lines.push('');
  for (const b of conceptBrands) {
    lines.push(
      `- [${b.name}](${SITE_URL}/concept-projects#${b.slug}): ${b.product}. Proves: ${b.proves}`
    );
  }
  lines.push('');

  lines.push('## Photoreal captures');
  lines.push('');
  lines.push(
    `${captures.length} generated human frames, each kept because it is hard in a specific way, ` +
      `and each labelled as generated: ${SITE_URL}/captures`
  );
  lines.push('');
  for (const c of captures) {
    lines.push(`- ${c.title}: ${c.proves}`);
  }
  lines.push('');

  lines.push('## Production pipelines (published in full)');
  lines.push('');
  for (const p of pipelines) {
    lines.push(
      `- [${p.name} — ${p.title}](${SITE_URL}/pipelines/${p.slug}): ${p.summary} Mechanism: ${p.mechanism}. Gates: ${p.gates
        .map((g) => g.name)
        .join(', ')}.`
    );
  }
  lines.push('');

  lines.push('## Free resources');
  lines.push('');
  for (const r of resources) {
    lines.push(`- [${r.title}](${SITE_URL}/armoury/${r.slug}): ${r.count}. ${r.blurb}`);
  }
  lines.push('');

  lines.push('## Writing');
  lines.push('');
  lines.push(
    `Working notes on synthetic media production, published in full at ${SITE_URL}/blog. Every piece states ` +
      `its answer in the opening paragraph and carries its own questions and answers at the foot.`
  );
  lines.push('');
  for (const p of posts) {
    lines.push(
      `- [${p.title}](${SITE_URL}/blog/${p.slug}) (${p.published}): ${p.standfirst}`
    );
  }
  lines.push('');

  lines.push('## Glossary');
  lines.push('');
  lines.push(
    `A ${terms.length}-term glossary of generative and synthetic media production, each term on its own page with a definition, body and Q&A: ${SITE_URL}/glossary`
  );
  lines.push('');
  for (const t of terms) {
    lines.push(`- [${t.term}](${SITE_URL}/glossary/${t.slug}): ${t.short}`);
  }
  lines.push('');

  lines.push('## Contact');
  lines.push('');
  lines.push(`- Email: ${site.email}`);
  lines.push(`- Enquiries: ${SITE_URL}/contact`);
  lines.push(`- Packages: ${SITE_URL}/packages`);
  lines.push(`- FAQ: ${SITE_URL}/faq`);
  lines.push(`- Registered: ${site.address.street}, ${site.address.city}, ${site.address.postcode}, United Kingdom`);
  lines.push(`- Founded: ${site.founded}`);
  lines.push(`- Working language: English`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
