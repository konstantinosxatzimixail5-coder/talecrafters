// Branded PDF builder for the Armoury tools.
//
// Reads the same data the /armoury/<slug> pages render, produces one HTML
// document per tool in the studio's own colours and typefaces, and prints it
// through the Chromium already installed for Playwright. Chromium rather than a
// PDF library because the layout is CSS the site already uses: a second layout
// engine would mean a second set of rules to keep in step with the first.
//
//   node scripts/pdf/render.mjs
//
// Fonts are the same Google faces the site loads, kept alongside this script so
// the build does not depend on a network or on a prior `next build`. All four
// are SIL Open Font Licence and redistributable.

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const OUT = resolve(ROOT, 'public/downloads');
const WORK = resolve(HERE, '.work');

const CHROME = [
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/opt/pw-browsers/chromium/chrome-linux/chrome',
  process.env.CHROME_PATH,
].find((p) => p && existsSync(p));

if (!CHROME) {
  console.error('No Chromium found. Set CHROME_PATH to a Chrome or Chromium binary.');
  process.exit(1);
}

const BRAND = {
  black: '#18181F',
  paper: '#0F0F14',
  white: '#F5F5F0',
  concrete: '#3A3A3A',
  concreteLight: '#8A8A8A',
  violet: '#8B00FF',
  violetText: '#B278FF',
  cyan: '#00E5CC',
  magenta: '#FF2D6F',
  gold: '#C9A84C',
};

/** The CSS custom property names used in the data, resolved to hex. */
const COLOR = {
  'var(--brand-cyan)': BRAND.cyan,
  'var(--brand-magenta)': BRAND.magenta,
  'var(--brand-gold)': BRAND.gold,
  'var(--brand-violet-text)': BRAND.violetText,
};

const b64 = (p) => readFileSync(resolve(HERE, p)).toString('base64');
const asset64 = (p) => readFileSync(resolve(ROOT, p)).toString('base64');

const FONTS = `
@font-face{font-family:'TCDisplay';src:url(data:font/woff2;base64,${b64('fonts/SpaceGrotesk.woff2')}) format('woff2');font-weight:300 700;font-display:block}
@font-face{font-family:'TCBody';src:url(data:font/woff2;base64,${b64('fonts/Inter.woff2')}) format('woff2');font-weight:100 900;font-display:block}
@font-face{font-family:'TCMono';src:url(data:font/woff2;base64,${b64('fonts/JetBrainsMono.woff2')}) format('woff2');font-weight:100 900;font-display:block}
@font-face{font-family:'TCWordmark';src:url(data:font/woff2;base64,${b64('fonts/Anton.woff2')}) format('woff2');font-weight:400;font-display:block}
`;

const MARK = `data:image/png;base64,${asset64('public/brand/mark.png')}`;

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** The misregistered wordmark, same construction as the site component. */
const wordmark = (size, d) => `
<span class="wordmark" style="font-size:${size}px;text-shadow:${-d}px ${d * 0.7}px 0 ${BRAND.magenta}, ${d}px ${-d * 0.7}px 0 ${BRAND.cyan}">TALECRAFTERS</span>`;

function renderBlock(b, accent) {
  switch (b.t) {
    case 'para':
      return `<p class="para">${esc(b.text)}</p>`;
    case 'note':
      return `<p class="note" style="border-color:${accent}55">${esc(b.text)}</p>`;
    case 'check':
      return `
        ${b.title ? `<p class="blocklabel" style="color:${accent}">${esc(b.title.toUpperCase())}</p>` : ''}
        <ul class="checks">
          ${b.items
            .map(
              (i) =>
                `<li><span class="box" style="border-color:${accent}"></span><span>${esc(i)}</span></li>`
            )
            .join('')}
        </ul>`;
    case 'fields':
      return `
        ${b.title ? `<p class="blocklabel" style="color:${accent}">${esc(b.title.toUpperCase())}</p>` : ''}
        <div class="fields">
          ${b.fields
            .map(
              (f) => `<div class="field">
                <p class="fieldlabel">${esc(f.label)}${
                  f.hint ? `<span class="hint"> &middot; ${esc(f.hint)}</span>` : ''
                }</p>
                <div class="rule" style="height:${(f.lines ?? 1) * 20}px"></div>
              </div>`
            )
            .join('')}
        </div>`;
    case 'table':
      return `
        <table>
          <thead><tr>${b.head
            .map((h) => `<th style="color:${accent}">${esc(h.toUpperCase())}</th>`)
            .join('')}</tr></thead>
          <tbody>${b.rows
            .map(
              (r) =>
                `<tr>${r
                  .map((c, k) => `<td class="${k === 0 ? 'first' : ''}">${c ? esc(c) : '&nbsp;'}</td>`)
                  .join('')}</tr>`
            )
            .join('')}</tbody>
        </table>`;
    case 'scale':
      return `
        ${b.title ? `<p class="blocklabel" style="color:${accent}">${esc(b.title.toUpperCase())}</p>` : ''}
        <ul class="scale">
          ${b.items
            .map(
              (i) => `<li>
                <span class="scaletext">
                  <span class="scalelabel">${esc(i.label)}</span>
                  <span class="scaledetail">${esc(i.detail)}</span>
                </span>
                <span class="boxes">${[0, 1, 2, 3, 4, 5]
                  .map((n) => `<span class="numbox">${n}</span>`)
                  .join('')}</span>
              </li>`
            )
            .join('')}
        </ul>`;
    default:
      return '';
  }
}

function buildHtml(resource, tool) {
  const accent = COLOR[resource.color] ?? BRAND.cyan;
  const year = new Date().getFullYear();

  return `<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8">
<title>${esc(resource.title)} — TaleCrafters</title>
<style>
${FONTS}
@page {
  size: A4;
  margin: 16mm 15mm 18mm;
  background: ${BRAND.paper};
}
* { box-sizing: border-box; }
html, body { margin:0; padding:0; background:${BRAND.paper}; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
body { font-family:'TCBody', system-ui, sans-serif; color:${BRAND.white}; font-size:9.6pt; line-height:1.55; }

.wordmark { font-family:'TCWordmark', sans-serif; color:${BRAND.white}; line-height:0.86; letter-spacing:-0.005em; display:inline-block; }

/* Cover ------------------------------------------------------------------ */
.cover { height:243mm; display:flex; flex-direction:column; justify-content:space-between; page-break-after:always; position:relative; }
.cover .rule-top { height:4px; background:${accent}; margin-bottom:14mm; }
.lockup { display:flex; align-items:center; gap:7px; }
.lockup img { height:26px; width:auto; display:block; }
.cover h1 { font-family:'TCDisplay', sans-serif; font-weight:700; font-size:40pt; line-height:0.94; letter-spacing:-0.035em; margin:16mm 0 6mm; max-width:150mm; }
.cover .kicker { font-family:'TCMono', monospace; font-size:10pt; color:${accent}; margin:0 0 12mm; max-width:140mm; line-height:1.5; }
.cover .specs { display:flex; flex-wrap:wrap; gap:0; border-top:1px solid ${BRAND.concrete}; }
.cover .spec { width:50%; padding:5mm 6mm 5mm 0; border-bottom:1px solid rgba(255,255,255,0.07); }
.cover .spec .k { font-family:'TCMono', monospace; font-size:7pt; letter-spacing:0.24em; color:${BRAND.concreteLight}; display:block; margin-bottom:2mm; }
.cover .spec .v { font-family:'TCDisplay', sans-serif; font-size:12pt; color:${BRAND.white}; }
.cover .foot { font-family:'TCMono', monospace; font-size:8pt; color:${BRAND.concreteLight}; letter-spacing:0.12em; }
.cover .foot a { color:${accent}; text-decoration:none; }

/* Body ------------------------------------------------------------------- */
.intro { margin-bottom:8mm; }
.intro p { font-size:11pt; line-height:1.6; color:${BRAND.white}; margin:0 0 4mm; }
.howto { border:1px solid ${accent}44; padding:6mm; margin-bottom:9mm; }
.howto .blocklabel { margin-top:0; }
.howto ol { margin:0; padding-left:0; list-style:none; counter-reset:h; }
.howto li { display:flex; gap:4mm; margin-bottom:3mm; font-size:9.4pt; color:rgba(245,245,240,0.82); }
.howto li::before { counter-increment:h; content:counter(h, decimal-leading-zero); font-family:'TCMono', monospace; color:${accent}; flex:0 0 8mm; }

section.tool { margin-bottom:9mm; }
h2 { font-family:'TCDisplay', sans-serif; font-weight:700; font-size:17pt; letter-spacing:-0.03em; margin:0 0 1mm; color:${BRAND.white}; page-break-after:avoid; }
.sectionkicker { font-family:'TCMono', monospace; font-size:8.4pt; color:${accent}; margin:0 0 5mm; }
.blocklabel { font-family:'TCMono', monospace; font-size:7.4pt; letter-spacing:0.24em; margin:6mm 0 3mm; }
.para { margin:0 0 3.5mm; color:rgba(245,245,240,0.82); }
.note { border:1px solid; background:rgba(255,255,255,0.025); padding:4.5mm; margin:5mm 0; font-size:9.2pt; color:rgba(245,245,240,0.9); }

ul.checks { list-style:none; margin:0 0 4mm; padding:0; }
ul.checks li { display:flex; gap:3.5mm; margin-bottom:2.6mm; align-items:flex-start; color:rgba(245,245,240,0.85); page-break-inside:avoid; }
.box { flex:0 0 3.4mm; height:3.4mm; border:1px solid; display:inline-block; margin-top:1mm; }

.fields { margin-bottom:4mm; }
.field { margin-bottom:4mm; page-break-inside:avoid; }
.fieldlabel { margin:0 0 1.5mm; font-size:9.2pt; color:${BRAND.white}; }
.hint { color:${BRAND.concreteLight}; }
.rule { border-bottom:1px solid rgba(255,255,255,0.16); }

table { width:100%; border-collapse:collapse; margin:5mm 0; border:1px solid ${BRAND.concrete}; page-break-inside:avoid; }
th { font-family:'TCMono', monospace; font-size:7pt; letter-spacing:0.12em; text-align:left; padding:2.6mm 2.4mm; border-bottom:1px solid ${BRAND.concrete}; background:rgba(255,255,255,0.025); vertical-align:bottom; }
td { padding:2.6mm 2.4mm; font-size:8.6pt; line-height:1.45; vertical-align:top; color:rgba(245,245,240,0.75); border-top:1px solid rgba(255,255,255,0.07); }
td.first { color:${BRAND.white}; }
tbody tr:first-child td { border-top:none; }

ul.scale { list-style:none; margin:0 0 4mm; padding:0; }
ul.scale li { display:flex; justify-content:space-between; gap:5mm; padding-bottom:2.6mm; margin-bottom:2.6mm; border-bottom:1px solid rgba(255,255,255,0.07); page-break-inside:avoid; }
.scalelabel { display:block; font-size:9.2pt; color:${BRAND.white}; }
.scaledetail { display:block; font-size:8.2pt; color:${BRAND.concreteLight}; margin-top:0.8mm; }
.boxes { display:flex; gap:1.2mm; flex:0 0 auto; padding-top:0.6mm; }
.numbox { width:4.6mm; height:4.6mm; border:1px solid rgba(255,255,255,0.22); font-family:'TCMono', monospace; font-size:6.4pt; color:${BRAND.concreteLight}; display:flex; align-items:center; justify-content:center; }

.endmatter { border-top:1px solid ${BRAND.concrete}; padding-top:6mm; margin-top:10mm; page-break-inside:avoid; }
.endmatter p { font-size:8.6pt; color:${BRAND.concreteLight}; line-height:1.6; margin:0 0 3mm; }
.endmatter .cta { border:1px solid ${BRAND.magenta}55; padding:5mm; margin-top:5mm; }
.endmatter .cta p { color:rgba(245,245,240,0.86); font-size:9.4pt; }
.endmatter .cta a { color:${BRAND.cyan}; text-decoration:none; }
</style></head>
<body>

<div class="cover">
  <div>
    <div class="rule-top"></div>
    <div class="lockup"><img src="${MARK}" alt="">${wordmark(19, 1)}</div>
    <h1>${esc(resource.title)}</h1>
    <p class="kicker">${esc(resource.kicker)}</p>
    <div class="specs">
      <div class="spec"><span class="k">FORMAT</span><span class="v">${esc(resource.format.replace(', PDF and on this page', ''))}</span></div>
      <div class="spec"><span class="k">LENGTH</span><span class="v">${esc(resource.count)}</span></div>
      <div class="spec"><span class="k">GATE</span><span class="v">None</span></div>
      <div class="spec"><span class="k">COST</span><span class="v">Nothing</span></div>
    </div>
  </div>
  <div class="foot">
    FOR: ${esc(resource.forWhom)}<br><br>
    TALECRAFTERS &middot; SYNTHETIC MEDIA STUDIO &middot; LONDON &middot; EST. 2023<br>
    <a href="https://talecrafters.studio/armoury/${resource.slug}">talecrafters.studio/armoury/${resource.slug}</a>
  </div>
</div>

<div class="intro">
  ${tool.intro.map((p) => `<p>${esc(p)}</p>`).join('')}
</div>

<div class="howto">
  <p class="blocklabel" style="color:${accent}">HOW TO USE IT</p>
  <ol>${tool.howToUse.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
</div>

${tool.sections
  .map(
    (s) => `<section class="tool">
      <h2>${esc(s.title)}</h2>
      ${s.kicker ? `<p class="sectionkicker">${esc(s.kicker)}</p>` : ''}
      ${s.blocks.map((b) => renderBlock(b, accent)).join('')}
    </section>`
  )
  .join('')}

${
  tool.bands
    ? `<section class="tool">
        <h2>Reading the score</h2>
        <table>
          <thead><tr>
            <th style="color:${accent}">SCORE</th>
            <th style="color:${accent}">VERDICT</th>
            <th style="color:${accent}">WHAT TO DO</th>
          </tr></thead>
          <tbody>${tool.bands
            .map(
              (b) =>
                `<tr><td class="first">${esc(b.range)}</td><td style="color:${accent}">${esc(
                  b.verdict
                )}</td><td>${esc(b.action)}</td></tr>`
            )
            .join('')}</tbody>
        </table>
      </section>`
    : ''
}

<div class="endmatter">
  <p><strong style="color:${BRAND.white}">Licence.</strong> ${esc(tool.licence)}</p>
  <p>&copy; ${year} TaleCrafters Ltd, 71&ndash;75 Shelton Street, Covent Garden, London WC2H 9JQ.</p>
  <div class="cta">
    <p>If working through this turned up something you would rather not run yourself, that is what the studio is for.
    Bring the brief and the deadline: <a href="https://talecrafters.studio/contact">talecrafters.studio/contact</a></p>
  </div>
</div>

</body></html>`;
}

// --- run --------------------------------------------------------------------

mkdirSync(OUT, { recursive: true });
mkdirSync(WORK, { recursive: true });

// The data lives in TypeScript because the site imports it. esbuild strips the
// types into something Node can import, which keeps one definition rather than
// a second copy of the content that would immediately start drifting.
const bundle = resolve(WORK, 'data.mjs');
execFileSync(
  resolve(ROOT, 'node_modules/.bin/esbuild'),
  [
    resolve(HERE, 'entry.ts'),
    '--bundle',
    '--format=esm',
    '--platform=node',
    `--outfile=${bundle}`,
    '--log-level=error',
  ],
  { cwd: ROOT, stdio: ['ignore', 'ignore', 'inherit'] }
);
const { resources, tools } = await import(`file://${bundle}`);

let built = 0;
for (const resource of resources.filter((r) => r.pdf)) {
  const tool = tools.find((t) => t.slug === resource.slug);
  if (!tool) {
    console.error(`No tool content for ${resource.slug}, skipping.`);
    continue;
  }

  const htmlPath = resolve(WORK, `${resource.slug}.html`);
  writeFileSync(htmlPath, buildHtml(resource, tool));

  const pdfPath = resolve(ROOT, `public${resource.pdf}`);
  execFileSync(
    CHROME,
    [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=10000',
      `--print-to-pdf=${pdfPath}`,
      `file://${htmlPath}`,
    ],
    { stdio: ['ignore', 'ignore', 'pipe'] }
  );

  console.log(`built ${resource.pdf}`);
  built += 1;
}

rmSync(WORK, { recursive: true, force: true });
console.log(`\n${built} PDFs written to public/downloads.`);
