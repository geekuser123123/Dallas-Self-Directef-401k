#!/usr/bin/env node
/**
 * Zero-dependency static site build.
 *   node build.mjs            → builds ./dist (warns about placeholders)
 *   STRICT=1 node build.mjs   → fails if any launch placeholder remains
 */
import { mkdir, rm, writeFile, readFile, cp, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { render } from './src/layout.mjs';
import { missing, SITE, B } from './src/lib.mjs';
import home from './src/pages/home.mjs';
import about from './src/pages/about.mjs';
import services from './src/pages/services.mjs';
import sd401k from './src/pages/sd401k.mjs';
import contact from './src/pages/contact.mjs';
import { privacy, terms, disclosures, thankYou, notFound } from './src/pages/legal.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');
const pages = [home, sd401k, services, about, contact, privacy, terms, disclosures, thankYou, notFound];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(join(root, 'src/assets'), join(out, 'assets'), { recursive: true });
await cp(join(root, 'src/static'), out, { recursive: true });

// Cache-busting version from asset contents.
const h = createHash('sha256');
for (const f of ['css/styles.css', 'js/main.js']) h.update(await readFile(join(root, 'src/assets', f)));
const assetVersion = h.digest('hex').slice(0, 10);

// Duplicate title / description guard (Search Console hygiene).
const seen = { title: new Map(), description: new Map() };
for (const p of pages) {
  for (const k of ['title', 'description']) {
    if (seen[k].has(p[k])) throw new Error(`Duplicate ${k} on ${p.path} and ${seen[k].get(p[k])}`);
    seen[k].set(p[k], p.path);
  }
}

for (const p of pages) {
  const html = render({ ...p, body: p.body(), assetVersion });
  const file = p.file ? join(out, p.file) : join(out, p.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

// sitemap.xml — indexable pages only.
const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter((p) => !p.noindex);
const priority = { '/': '1.0', '/self-directed-401k/': '0.9', '/services/': '0.8', '/contact/': '0.8', '/about/': '0.7' };
await writeFile(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${SITE}${p.path}</loc><lastmod>${today}</lastmod><priority>${priority[p.path] || '0.3'}</priority></url>`).join('\n')}
</urlset>
`,
);

// robots.txt — allow everything, point to sitemap.
await writeFile(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// Placeholder report.
const list = [...missing].sort();
if (!B.publicNameConfirmed) list.unshift('Confirm public business name matches the real-world name (business.publicNameConfirmed)');
if (B.locationType === 'unconfirmed') list.push('Confirm location type: office / service-area / online-only (business.locationType)');

console.log(`✔ Built ${pages.length} pages → dist/  (asset v${assetVersion})`);
console.log(`✔ sitemap.xml (${indexable.length} URLs), robots.txt`);
if (list.length) {
  console.warn(`\n⚠ ${list.length} launch item(s) still need real information:`);
  for (const m of list) console.warn(`   • ${m}`);
  if (process.env.STRICT === '1') {
    console.error('\n✖ STRICT mode: complete site.config.mjs before launch.');
    process.exit(1);
  }
}
