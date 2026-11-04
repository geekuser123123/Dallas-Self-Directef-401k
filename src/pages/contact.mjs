import { icon, pageHero, esc, B, cfg, SERVICES, phoneHtml, emailHtml, hoursHtml, showAddress, addressHtml } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact/' },
];

const BUSINESS_TYPES = [
  'Sole proprietor / independent contractor',
  'Single-member LLC',
  'Multi-member LLC or partnership',
  'S corporation',
  'C corporation',
  'Not yet established',
  'Other / not sure',
];

function mapEmbed() {
  // Only shown for a confirmed, customer-facing office address.
  const a = B.address;
  if (!showAddress() || !a.streetAddress || !a.postalCode) return '';
  const q = encodeURIComponent(`${B.publicName}, ${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`);
  return `<div class="map"><iframe title="Map showing the ${esc(B.publicName)} office" src="https://www.google.com/maps?q=${q}&output=embed" width="600" height="360" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`;
}

export default {
  path: '/contact/',
  title: 'Contact Dallas Self-Directed 401(k) | Dallas, Texas',
  description: 'Contact Dallas Self-Directed 401(k) to learn more about retirement plan education and schedule a consultation.',
  crumbs,
  pageType: 'ContactPage',
  body: () => `
${pageHero({
  compact: true,
  eyebrow: 'Contact',
  title: 'Schedule a Consultation',
  lead: 'Tell us a little about your business and what you would like to understand. We will follow up to arrange a time to talk.',
  crumbs,
})}

<section class="section section--tight-top" aria-label="Contact information and consultation form">
  <div class="container contact-grid">
    <div class="contact-info">
      <h2 class="h3">${esc(B.publicName)}</h2>
      <ul class="contact-list">
        ${
          showAddress()
            ? `<li>${icon('pin', 'contact-list__icon')}<div><span class="contact-list__label">Office</span><address>${addressHtml()}</address></div></li>`
            : `<li>${icon('pin', 'contact-list__icon')}<div><span class="contact-list__label">Service area</span>${esc(B.serviceArea.join(' · '))}</div></li>`
        }
        <li>${icon('phone', 'contact-list__icon')}<div><span class="contact-list__label">Phone</span>${phoneHtml()}</div></li>
        <li>${icon('mail', 'contact-list__icon')}<div><span class="contact-list__label">${B.email ? 'Email' : 'Online'}</span>${B.email ? emailHtml() : 'Use the consultation form on this page'}</div></li>
        <li>${icon('clock', 'contact-list__icon')}<div><span class="contact-list__label">Business hours (Central Time)</span>${hoursHtml()}</div></li>
      </ul>
      ${mapEmbed()}
      <div class="notice notice--small">${icon('shield', 'notice__icon')}<p>Please do not send account numbers, Social Security numbers or other sensitive personal information through this form.</p>
      </div>
    </div>

    <div class="form-card">
      <h2 class="h3">Consultation request</h2>
      <p class="muted">Fields marked <span aria-hidden="true">*</span><span class="sr-only">with an asterisk</span> are required.</p>
      <form name="${cfg.form.name}" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="company_website" class="form" novalidate data-form>
        <input type="hidden" name="form-name" value="${cfg.form.name}">
        <p class="hp" aria-hidden="true"><label>Leave this field empty <input name="company_website" tabindex="-1" autocomplete="off"></label></p>
        <div class="form-row">
          <div class="field">
            <label for="first-name">First name <span aria-hidden="true">*</span></label>
            <input id="first-name" name="first_name" type="text" autocomplete="given-name" required maxlength="80">
          </div>
          <div class="field">
            <label for="last-name">Last name <span aria-hidden="true">*</span></label>
            <input id="last-name" name="last_name" type="text" autocomplete="family-name" required maxlength="80">
          </div>
        </div>
        <div class="form-row">
          <div class="field">
            <label for="email">Email address <span aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" autocomplete="email" required maxlength="160">
          </div>
          <div class="field">
            <label for="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="30" aria-describedby="phone-hint">
            <span class="hint" id="phone-hint">Optional</span>
          </div>
        </div>
        <div class="form-row">
          <div class="field">
            <label for="business-type">Business type <span aria-hidden="true">*</span></label>
            <select id="business-type" name="business_type" required>
              <option value="">Select…</option>
              ${BUSINESS_TYPES.map((t) => `<option>${esc(t)}</option>`).join('')}
            </select>
          </div>
          <div class="field">
            <label for="interest">Area of interest <span aria-hidden="true">*</span></label>
            <select id="interest" name="area_of_interest" required>
              <option value="">Select…</option>
              ${SERVICES.map((s) => `<option>${esc(s.title)}</option>`).join('')}
              <option>General question</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label for="message">Message <span aria-hidden="true">*</span></label>
          <textarea id="message" name="message" rows="5" required maxlength="3000" aria-describedby="message-hint"></textarea>
          <span class="hint" id="message-hint">Briefly describe your questions or goals. Please don't include sensitive financial details.</span>
        </div>
        <div class="field field--check">
          <input id="consent" name="consent" type="checkbox" value="yes" required data-label="Consent">
          <label for="consent">I agree that ${esc(B.publicName)} may contact me by email or phone about my inquiry. I understand that consultations are educational and not individualized investment, legal or tax advice. I have read the <a href="/privacy-policy/">Privacy Policy</a>. <span aria-hidden="true">*</span></label>
        </div>
        <div class="form-error" role="alert" aria-live="assertive" data-form-error hidden></div>
        <button class="btn btn--gold btn--lg btn--block" type="submit">Request a Consultation</button>
        <p class="hint center">We'll never sell your information. You can ask us to stop contacting you at any time.</p>
      </form>
    </div>
  </div>
</section>
`,
};
