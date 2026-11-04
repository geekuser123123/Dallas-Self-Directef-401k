import { markSvg } from './brand.mjs';
import { cfg, B, SITE, esc, absUrl, OG_IMAGE, organizationSchema, websiteSchema, breadcrumbSchema, phoneHtml, emailHtml, showAddress, addressHtml, SERVICES } from './lib.mjs';

const NAV = [
  { name: 'Self-Directed 401(k)', path: '/self-directed-401k/' },
  { name: 'Services', path: '/services/' },
  { name: 'About', path: '/about/' },
  { name: 'Contact', path: '/contact/' },
];

const logo = (cls = '', id = 'mk') => `<a class="brand ${cls}" href="/" aria-label="${esc(B.publicName)} — home">
  ${markSvg(id)}
  <span class="brand__text"><span class="brand__kicker">Dallas</span><span class="brand__name">Self-Directed 401(k)</span></span>
</a>`;

function header(path) {
  return `<a class="skip-link" href="#main">Skip to main content</a>
<header class="site-header" data-header>
  <div class="container site-header__inner">
    ${logo()}
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
      <span class="sr-only">Menu</span><span class="nav-toggle__bar" aria-hidden="true"></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Primary">
      <ul>
        ${NAV.map((n) => `<li><a href="${n.path}"${path.startsWith(n.path) ? ' aria-current="page"' : ''}>${n.name}</a></li>`).join('')}
      </ul>
      <a class="btn btn--gold btn--sm site-nav__cta" href="/contact/">Schedule a Consultation</a>
    </nav>
  </div>
</header>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      ${logo('brand--light', 'mk-f')}
      <p>Educational information and consultations about Self-Directed 401(k) and Solo 401(k) retirement plan structures for business owners and self-employed professionals.</p>
    </div>
    <nav aria-label="Footer — site">
      <h2 class="footer-h">Explore</h2>
      <ul>
        <li><a href="/self-directed-401k/">Self-Directed 401(k) Guide</a></li>
        <li><a href="/services/">Services</a></li>
        <li><a href="/about/">About Us</a></li>
        <li><a href="/contact/">Contact</a></li>
      </ul>
    </nav>
    <nav aria-label="Footer — services">
      <h2 class="footer-h">Services</h2>
      <ul>
        ${SERVICES.slice(0, 5).map((s) => `<li><a href="/services/#${s.id}">${s.title}</a></li>`).join('')}
      </ul>
    </nav>
    <div>
      <h2 class="footer-h">Contact</h2>
      <address class="footer-nap">
        <strong>${esc(B.publicName)}</strong><br>
        ${showAddress() ? addressHtml() + '<br>' : `Serving ${esc(B.serviceArea.join(' & '))}<br>`}
        ${phoneHtml()}<br>
        ${emailHtml()}
      </address>
    </div>
  </div>
  <div class="container footer-disclaimer">
    <p><strong>Important:</strong> ${esc(B.publicName)} provides general educational information about retirement plan structures. Content on this website is not individualized investment, legal or tax advice. All investments involve risk, including possible loss of principal, and no investment outcome is guaranteed. Retirement plan rules and eligibility requirements apply. Consult qualified professionals about your own circumstances. <a href="/disclosures/">Read our full disclosures</a>.</p>
  </div>
  <div class="container footer-bottom">
    <p>&copy; ${year} ${esc(B.publicName)}. All rights reserved.</p>
    <ul>
      <li><a href="/privacy-policy/">Privacy Policy</a></li>
      <li><a href="/terms/">Terms &amp; Conditions</a></li>
      <li><a href="/disclosures/">Disclosures</a></li>
    </ul>
  </div>
</footer>`;
}

/**
 * page: { path, title, description, body, crumbs?, schema?: [], noindex?, ogImageKey?, bodyClass? }
 */
export function render(page) {
  const canonical = absUrl(page.path);
  const graph = [organizationSchema(), websiteSchema()];
  graph.push({
    '@type': page.pageType || 'WebPage',
    '@id': canonical + '#webpage',
    url: canonical,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#organization` },
    inLanguage: cfg.site.language,
    ...(page.crumbs ? { breadcrumb: { '@id': canonical + '#breadcrumb' } } : {}),
  });
  if (page.crumbs) graph.push({ ...breadcrumbSchema(page.crumbs), '@id': canonical + '#breadcrumb' });
  if (page.schema) graph.push(...page.schema);
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
  const og = OG_IMAGE();
  const analytics = cfg.analytics.plausibleDomain
    ? `<script defer data-domain="${esc(cfg.analytics.plausibleDomain)}" src="https://plausible.io/js/script.js"></script>`
    : '';

  return `<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
${page.noindex ? "" : `<link rel="canonical" href="${canonical}">`}
<meta name="theme-color" content="#101D32">
${cfg.site.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(cfg.site.googleSiteVerification)}">` : ""}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(B.publicName)}">
<meta property="og:locale" content="${cfg.site.locale}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${esc(og)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/playfair-latin-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-latin-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/styles.css?v=${page.assetVersion}">
<script type="application/ld+json">${ld}</script>
${analytics}
</head>
<body class="${page.bodyClass || ''}">
${header(page.path)}
<main id="main" tabindex="-1">
${page.body}
</main>
${footer()}
<script src="/assets/js/main.js?v=${page.assetVersion}" defer></script>
</body>
</html>
`;
}
