import { icon, pageHero, ctaBand, ph, esc, B, cfg, phoneHtml, emailHtml, showAddress, addressHtml } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about/' },
];

function team() {
  if (!cfg.team.length) return '';
  return `<section class="section section--light" aria-labelledby="team-h">
  <div class="container">
    <div class="section-head"><p class="eyebrow">Our Team</p><h2 id="team-h">The people you'll speak with</h2></div>
    <div class="grid grid--3">
      ${cfg.team
        .map(
          (m) => `<article class="card team-card">
        ${m.photo ? `<img src="${esc(m.photo)}" alt="Portrait of ${esc(m.name)}" width="400" height="400" loading="lazy" decoding="async">` : ''}
        <h3>${esc(m.name)}</h3><p class="team-card__title">${esc(m.title)}</p>
        ${m.credentials?.length ? `<p class="muted">${m.credentials.map(esc).join(' · ')}</p>` : ''}
        <p>${esc(m.bio)}</p></article>`,
        )
        .join('')}
    </div>
  </div>
</section>`;
}

export default {
  path: '/about/',
  title: 'About Us | Dallas Self-Directed 401(k)',
  description:
    'Learn about Dallas Self-Directed 401(k), our approach to retirement plan education, and the people and services behind our business.',
  crumbs,
  pageType: 'AboutPage',
  body: () => `
${pageHero({
  eyebrow: 'About Us',
  title: `About ${esc(B.publicName)}`,
  lead: 'Helping Dallas-area business owners and self-employed professionals understand self-directed retirement plan structures — clearly, accurately and without pressure.',
  crumbs,
  aside: `<dl class="hero-facts">
    <div><dt>Focus</dt><dd>Self-Directed &amp; Solo 401(k) education</dd></div>
    <div><dt>Approach</dt><dd>Education first — never a sales pitch</dd></div>
    <div><dt>Serving</dt><dd>${esc(B.serviceArea.join(' · '))}</dd></div>
  </dl>`,
})}

<section class="section" aria-labelledby="who-we-are-h">
  <div class="container split">
    <div class="split__text">
      <p class="eyebrow">Who We Are</p>
      <h2 id="who-we-are-h">Retirement plan education, done properly</h2>
      <p>${esc(B.publicName)} focuses on education about Self-Directed 401(k) and Solo 401(k) plans for entrepreneurs, small business owners and self-employed professionals in Dallas and the surrounding area.</p>
      <div class="prose">${cfg.about.story ? cfg.about.story : `<p>${ph(null, 'Company history — real background, when the business started and why. To be provided by the owner.')}</p>`}</div>
      ${B.owner ? `<p><strong>Founded by:</strong> ${esc(B.owner)}</p>` : `<p>${ph(null, 'Owner / principal name — to be provided')}</p>`}
    </div>
    <aside class="principles" aria-label="Our principles">
      <p class="principles__label">Our principles</p>
      <ol>
        <li><span>01</span><div><strong>Accuracy over enthusiasm</strong><p>We explain the rules and risks, not only the possibilities.</p></div></li>
        <li><span>02</span><div><strong>Plain English</strong><p>Complex plan concepts, explained clearly.</p></div></li>
        <li><span>03</span><div><strong>Your decision</strong><p>We inform; you decide, with advisors you trust.</p></div></li>
      </ol>
    </aside>
  </div>
</section>

<section class="section section--light" aria-labelledby="mission-h">
  <div class="container narrow center">
    <p class="eyebrow">Our Mission</p>
    <h2 id="mission-h">Make self-directed retirement plans understandable</h2>
    <p class="mission">Our mission is to help business owners understand how self-directed retirement plan structures work — the opportunities, the rules and the responsibilities — so they can make informed decisions together with the qualified professionals they trust.</p>
  </div>
</section>

<section class="section" aria-labelledby="approach-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Our Approach</p>
      <h2 id="approach-h">Our approach to retirement education</h2>
    </div>
    <div class="grid grid--3">
      <article class="card">${icon('book', 'card__icon')}<h3>Explain, don't sell</h3><p>We describe how plans work, including limitations and risks, before discussing whether a structure may be relevant to you.</p></article>
      <article class="card">${icon('shield', 'card__icon')}<h3>Rules up front</h3><p>Prohibited transactions, reporting duties and plan administration are part of every conversation — not an afterthought.</p></article>
      <article class="card">${icon('compass', 'card__icon')}<h3>Know when to refer</h3><p>Some questions require a CPA, ERISA attorney, plan provider or licensed advisor. We tell you when that is the case.</p></article>
    </div>
  </div>
</section>

<section class="section section--light" aria-labelledby="serve-h">
  <div class="container split split--reverse">
    <div class="area-card">
      ${icon('pin', 'area-card__icon')}
      <p class="area-card__label">Service area</p>
      <ul>${B.serviceArea.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>
      <p class="muted">Consultations by appointment.</p>
    </div>
    <div class="split__text">
      <p class="eyebrow">Who We Serve</p>
      <h2 id="serve-h">Business owners across the Dallas area</h2>
      <ul class="checklist">
        <li>Entrepreneurs and owners of closely held businesses</li>
        <li>Self-employed consultants, contractors and independent professionals</li>
        <li>Small business owners evaluating retirement plan options</li>
        <li>Individuals researching self-directed retirement structures</li>
      </ul>
      <p>We primarily serve clients in ${esc(B.serviceArea.join(' and the '))}.</p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="standards-h">
  <div class="container narrow">
    <p class="eyebrow">Our Professional Standards</p>
    <h2 id="standards-h">What you can expect from us</h2>
    <ul class="standards">
      <li><strong>Accuracy.</strong> We base our educational content on IRS and Department of Labor guidance and update it when rules change.</li>
      <li><strong>Transparency about our role.</strong> We provide educational information. We do not act as a custodian, plan trustee, third-party administrator, or registered investment adviser, and we do not provide legal or tax advice.${cfg.about.professionalBackground ? '' : ' ' + ph(null, 'Owner to confirm this statement matches actual services and registrations')}</li>
      <li><strong>No guarantees.</strong> We never promise investment returns or tax outcomes.</li>
      <li><strong>Confidentiality.</strong> Information you share with us is handled as described in our <a href="/privacy-policy/">Privacy Policy</a>.</li>
      <li><strong>Independence of your decision.</strong> You choose whether and how to proceed, and with which providers.</li>
    </ul>
    ${cfg.about.professionalBackground ? `<div class="prose">${cfg.about.professionalBackground}</div>` : `<p>${ph(null, 'Professional background & qualifications — list only real, verifiable credentials or licenses, if any')}</p>`}
  </div>
</section>

${team()}

<section class="section section--light" aria-labelledby="contact-team-h">
  <div class="container narrow center">
    <p class="eyebrow">Contact Our Team</p>
    <h2 id="contact-team-h">Questions? We're happy to talk.</h2>
    <p>${esc(B.publicName)} · ${phoneHtml()} · ${emailHtml()}</p>
    ${showAddress() ? `<p>${addressHtml()}</p>` : ''}
    <a class="btn btn--primary" href="/contact/">Contact Us</a>
  </div>
</section>

${ctaBand({
  heading: 'Ready to learn more?',
  text: 'Schedule an educational consultation to talk through your goals and the plan structures that may be relevant.',
})}
`,
};
