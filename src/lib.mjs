// Shared helpers: escaping, placeholders, images, layout, schema.
import config from '../site.config.mjs';

export const cfg = config;
export const B = config.business;
export const SITE = config.site.url.replace(/\/$/, '');

/** Placeholder tracking (reported by build). */
export const missing = new Set();

export const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Render a value or a clearly marked placeholder. */
export function ph(value, label) {
  if (value !== null && value !== undefined && value !== '') return esc(value);
  missing.add(label);
  return `<span class="placeholder" title="Placeholder — must be completed before launch">[${esc(label)}]</span>`;
}

export const absUrl = (path) => SITE + path;

export const OG_IMAGE = () => config.site.ogImage || `${SITE}/assets/img/og-image.png`;

// ---------------------------------------------------------------- services
export const SERVICES = [
  {
    key: 'education',
    id: 'self-directed-401k-education',
    title: 'Self-Directed 401(k) Education',
    short: 'Plain-English explanations of how self-directed 401(k) plans are structured, what they may permit, and the rules that come with them.',
    icon: 'book',
  },
  {
    key: 'solo401k',
    id: 'solo-401k-information',
    title: 'Solo 401(k) Information',
    short: 'Learn how one-participant 401(k) plans work for self-employed individuals and owner-only businesses, and what eligibility generally requires.',
    icon: 'person',
  },
  {
    key: 'planStructure',
    id: 'retirement-plan-guidance',
    title: 'Retirement Plan Structure Guidance',
    short: 'Understand the moving parts — plan document, trust, trustee, plan sponsor — and how the pieces of a self-directed structure fit together.',
    icon: 'layers',
  },
  {
    key: 'businessOwner',
    id: 'business-owner-retirement-planning',
    title: 'Business Owner Retirement Planning Education',
    short: 'Compare common retirement plan types business owners consider, and the questions to bring to your CPA, attorney or plan provider.',
    icon: 'briefcase',
  },
  {
    key: 'planSetup',
    id: 'plan-setup-support',
    title: 'Plan Setup Support',
    short: 'Support coordinating the steps involved in establishing a self-directed 401(k) with the appropriate plan provider.',
    icon: 'check',
  },
  {
    key: 'existingPlan',
    id: 'existing-plan-support',
    title: 'Existing Plan Support',
    short: 'Help understanding ongoing responsibilities for an existing self-directed 401(k), such as recordkeeping and annual reporting questions.',
    icon: 'shield',
  },
  {
    key: 'consultation',
    id: 'consultation-and-educational-support',
    title: 'Consultation & Educational Support',
    short: 'A one-on-one conversation to talk through your goals, answer questions, and outline sensible next steps.',
    icon: 'chat',
  },
].filter((s) => config.services[s.key]?.offered);

export const ICONS = {
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z"/>',
  chat: '<path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8M8 12h5"/>',
  store: '<path d="M4 9h16l-1-5H5L4 9Z"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  growth: '<path d="M3 20h18"/><path d="M5 16l5-5 4 3 6-7"/><path d="M15 7h5v5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
};
export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`;

// ---------------------------------------------------------------- contact bits
export function phoneHtml() {
  if (B.phone) return `<a href="tel:${esc(B.phoneE164 || B.phone.replace(/[^\d+]/g, ''))}">${esc(B.phone)}</a>`;
  return ph(null, 'Business phone — to be provided');
}
export function emailHtml() {
  // Optional: when no email is set, the line is omitted and visitors use the contact form.
  if (B.email) return `<a href="mailto:${esc(B.email)}">${esc(B.email)}</a>`;
  return '';
}
export const showAddress = () => B.locationType === 'office';
export function addressHtml() {
  const a = B.address;
  return `${ph(a.streetAddress, 'Street address — to be provided')}<br>${esc(a.addressLocality)}, ${esc(a.addressRegion)} ${ph(a.postalCode, 'ZIP')}`;
}
const fmtTime = (t) => {
  const [h, m] = t.split(':').map(Number);
  const ap = h >= 12 ? 'PM' : 'AM';
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${ap}`;
};
export function hoursHtml() {
  if (!B.hours || !B.hours.length) {
    return `<p>${ph(null, 'Business hours — to be provided')}</p>${B.hoursNote ? `<p class="muted">${esc(B.hoursNote)}</p>` : ''}`;
  }
  const rows = B.hours
    .map((h) => {
      const d = h.days.length > 2 ? `${h.days[0]} – ${h.days[h.days.length - 1]}` : h.days.join(' & ');
      return `<tr><th scope="row">${esc(d)}</th><td>${fmtTime(h.opens)} – ${fmtTime(h.closes)}</td></tr>`;
    })
    .join('');
  return `<table class="hours"><caption class="sr-only">Business hours (Central Time)</caption>${rows}</table>${B.hoursNote ? `<p class="muted">${esc(B.hoursNote)}</p>` : ''}`;
}

// ---------------------------------------------------------------- schema
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

export function organizationSchema() {
  const isLocal = B.locationType === 'office' && B.address.streetAddress && B.address.postalCode;
  const o = {
    '@type': isLocal ? ['Organization', 'ProfessionalService'] : 'Organization',
    '@id': ORG_ID,
    name: B.publicName,
    url: SITE + '/',
    logo: `${SITE}/assets/img/logo.png`,
    description:
      'Educational information and consultations about Self-Directed 401(k) and Solo 401(k) retirement plan structures for business owners and self-employed professionals in Dallas, Texas.',
    areaServed: B.serviceArea.map((n) => ({ '@type': 'Place', name: n })),
    knowsAbout: ['Self-Directed 401(k)', 'Solo 401(k)', 'Retirement plan education'],
  };
  if (B.legalName && B.legalName !== B.publicName) o.legalName = B.legalName;
  if (B.phoneE164) o.telephone = B.phoneE164;
  if (B.email) o.email = B.email;
  if (B.foundingYear) o.foundingDate = String(B.foundingYear);
  if (B.sameAs?.length) o.sameAs = B.sameAs;
  if (isLocal) {
    o.address = { '@type': 'PostalAddress', ...B.address };
    o.image = OG_IMAGE();
    if (B.geo) o.geo = { '@type': 'GeoCoordinates', ...B.geo };
    if (B.hours?.length)
      o.openingHoursSpecification = B.hours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      }));
  }
  return o;
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE + '/',
    name: B.publicName,
    inLanguage: cfg.site.language,
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

export function faqSchema(faqs) {
  // Note: Google limits FAQ rich results to authoritative sites; markup remains valid schema.
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  };
}

// ---------------------------------------------------------------- UI bits
export function faqList(faqs, headingLevel = 3) {
  return `<div class="faq">${faqs
    .map(
      (f) => `<details class="faq__item"><summary><h${headingLevel} class="faq__q">${esc(f.q)}</h${headingLevel}><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__a">${f.a}</div></details>`,
    )
    .join('')}</div>`;
}

export function ctaBand({ heading, text, button = 'Schedule a Consultation', href = '/contact/' }) {
  return `<section class="cta-band" aria-labelledby="cta-h">
  <div class="container">
    <div class="cta-band__inner">
      <div>
        <h2 id="cta-h">${heading}</h2>
        <p>${text}</p>
      </div>
      <a class="btn btn--gold btn--lg" href="${href}">${button}</a>
    </div>
  </div>
</section>`;
}

export function pageHero({ eyebrow, title, lead, crumbs, aside = '', compact = false }) {
  const bc = crumbs
    ? `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${crumbs
        .map((c, i) =>
          i === crumbs.length - 1 ? `<li aria-current="page">${esc(c.name)}</li>` : `<li><a href="${c.path}">${esc(c.name)}</a></li>`,
        )
        .join('')}</ol></nav>`
    : '';
  return `<section class="page-hero${compact ? ' page-hero--compact' : ''}${aside ? ' page-hero--aside' : ''}">
  <div class="hero-pattern" aria-hidden="true"></div>
  <div class="container page-hero__inner">
    <div class="page-hero__text">
      ${bc}
      ${eyebrow ? `<p class="eyebrow eyebrow--light">${eyebrow}</p>` : ''}
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>
    ${aside ? `<div class="page-hero__aside">${aside}</div>` : ''}
  </div>
</section>`;
}

// ---------------------------------------------------------------- visuals
// Illustrative, educational UI compositions (no stock photography).

const tick = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 12 4 4 8-8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/** Hero visual: how a self-directed 401(k) is put together. */
export function structureVisual() {
  const rows = [
    ['briefcase', 'Plan sponsor', 'Your business'],
    ['book', 'Plan document', 'Permits self-direction'],
    ['shield', 'Trust & trustee', 'Holds plan assets'],
    ['layers', 'Investments', 'As the plan permits'],
  ];
  return `<figure class="visual" aria-label="Illustration: the four building blocks of a self-directed 401(k) — plan sponsor, plan document, trust and trustee, and investments">
  <div class="vcard vcard--main" aria-hidden="true">
    <div class="vcard__head"><span class="vcard__dot"></span><span>Self-Directed 401(k)</span><span class="vcard__tag">Plan structure</span></div>
    <ol class="vstack">
      ${rows.map(([ic, t, d], i) => `<li><span class="vstack__icon">${icon(ic)}</span><span class="vstack__text"><strong>${t}</strong><span>${d}</span></span><span class="vstack__n">0${i + 1}</span></li>`).join('')}
    </ol>
  </div>
  <div class="vcard vcard--float" aria-hidden="true">
    <p class="vcard__label">Owner responsibilities</p>
    <ul class="vchecks">
      <li>${tick}Recordkeeping</li>
      <li>${tick}Annual valuation</li>
      <li>${tick}Required filings</li>
    </ul>
  </div>
  <div class="vbadge" aria-hidden="true">${icon('book')}<span>Education, not advice</span></div>
</figure>`;
}

/** Comparison card: typical employer 401(k) vs self-directed. */
export function compareVisual() {
  const rows = [
    ['Investment choices', 'Pre-selected fund menu', 'Broader range, if the plan permits'],
    ['Who directs', 'Participant, within the menu', 'Participant or trustee'],
    ['Typical sponsor', 'Employer for its workforce', 'Business owner, often owner-only'],
    ['Administration', 'Largely provider-managed', 'More owner responsibility'],
  ];
  return `<figure class="compare">
  <figcaption class="compare__cap">At a glance: how they differ</figcaption>
  <table>
    <thead><tr><th scope="col"><span class="sr-only">Feature</span></th><th scope="col">Typical employer 401(k)</th><th scope="col" class="is-hl">Self-directed 401(k)</th></tr></thead>
    <tbody>${rows.map(([a, b, c]) => `<tr><th scope="row">${a}</th><td>${b}</td><td class="is-hl">${c}</td></tr>`).join('')}</tbody>
  </table>
  <p class="compare__note">General comparison. Features depend on each plan document and provider.</p>
</figure>`;
}

/** Flow diagram for the guide page. */
export function flowVisual() {
  const steps = [
    ['briefcase', 'Business', 'Adopts the plan as sponsor'],
    ['book', 'Plan document', 'Defines what is permitted'],
    ['shield', 'Trust', 'Trustee holds plan assets'],
    ['layers', 'Plan assets', 'Titled in the plan’s name'],
  ];
  return `<figure class="flow" aria-label="Diagram: business adopts a plan document; a trust holds the plan assets; investments are titled in the plan's name">
  <ol>${steps.map(([ic, t, d]) => `<li><span class="flow__icon">${icon(ic)}</span><strong>${t}</strong><span>${d}</span></li>`).join('')}</ol>
  <figcaption>Contributions, income and expenses flow into and out of the plan — never through personal or business accounts.</figcaption>
</figure>`;
}
