import { SITE_URL, site } from '@/lib/site';
import { work } from '@/data/work';
import { pipelines } from '@/data/pipelines';
import { terms } from '@/data/glossary';
import { categories, arms } from '@/data/arsenal';
import { resources } from '@/data/resources';

export const dynamic = 'force-static';

/**
 * /llms.txt — a plain-text map of the site for answer engines.
 *
 * The convention is a markdown document an LLM can read in one request instead
 * of crawling forty pages to work out what the company does. It is generated
 * from the same data files as the site, so it cannot drift out of date.
 */
export function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push('');
  lines.push(`> ${site.description}`);
  lines.push('');
  lines.push(
    'TaleCrafters is a synthetic media studio registered in London and working across the UK, ' +
      'Europe and the US. It operates in three arms: Create (films, campaigns, visual worlds), ' +
      'Systems (agentic workflows, automation and content infrastructure) and Originals (its own ' +
      'films, games and stories). Generation is one stage inside a named pipeline; every pipeline ' +
      'carries mechanical control gates and a human sign-off on the brief and the final cut.'
  );
  lines.push('');

  lines.push('## The three arms');
  lines.push('');
  for (const a of arms) {
    lines.push(`- [${a.name}](${SITE_URL}${a.href}): ${a.line} ${a.blurb}`);
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
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
