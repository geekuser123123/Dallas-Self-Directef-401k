import { pageHero, esc, B, cfg, phoneHtml, emailHtml } from '../lib.mjs';

const UPDATED = 'November 4, 2026';
const N = esc(B.publicName);
const contactBlock = () => `<p><strong>${N}</strong><br>Email: ${emailHtml()}<br>Phone: ${phoneHtml()}<br>Or use our <a href="/contact/">contact form</a>.</p>`;

const legal = (path, name, title, description, lead, body) => {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name, path },
  ];
  return {
    path,
    title,
    description,
    crumbs,
    body: () => `
${pageHero({ compact: true, eyebrow: 'Legal', title: name, lead, crumbs })}
<section class="section section--tight-top">
  <div class="container narrow prose legal">
    <p class="muted">Last updated: ${UPDATED}</p>
    ${body()}
  </div>
</section>`,
  };
};

export const privacy = legal(
  '/privacy-policy/',
  'Privacy Policy',
  `Privacy Policy | ${B.publicName}`,
  `How ${B.publicName} collects, uses and protects information submitted through this website, including contact forms, cookies and analytics.`,
  'How we collect, use and protect the information you share with us.',
  () => `
<p>This Privacy Policy explains how ${N} ("we," "us," "our") handles information collected through this website. By using the website, you agree to the practices described here.</p>

<h2>Information we collect</h2>
<h3>Information you provide</h3>
<p>When you submit our consultation request form or contact us, we collect the information you choose to provide, which may include your first and last name, email address, phone number, business type, area of interest and the content of your message, along with your consent to be contacted.</p>
<p>Please do not send Social Security numbers, account numbers, passwords or other sensitive financial information through the website.</p>
<h3>Information collected automatically</h3>
<p>Like most websites, our hosting provider automatically receives standard technical information when you visit, such as your IP address, browser type, device type, referring page and the date and time of your request. This information is used for security, troubleshooting and to keep the website running reliably.</p>

<h2>How we use your information</h2>
<ul>
  <li>To respond to your inquiry and schedule a consultation you request;</li>
  <li>To communicate with you about the topics you asked about;</li>
  <li>To operate, secure and improve the website;</li>
  <li>To comply with legal obligations and protect our legal rights.</li>
</ul>
<p>We do not sell your personal information, and we do not share it with third parties for their own marketing purposes.</p>

<h2>Third-party service providers</h2>
<p>We use trusted service providers to operate the website. They process information on our behalf and only as needed to provide their services:</p>
<ul>
  <li><strong>Netlify, Inc.</strong> — website hosting and processing of contact form submissions.</li>
  ${cfg.analytics.plausibleDomain ? '<li><strong>Plausible Analytics</strong> — privacy-focused, cookie-free website analytics that collect aggregated usage statistics.</li>' : ''}
  <li>Email and business software we use to receive and respond to your messages.</li>
</ul>

<h2>Cookies and analytics</h2>
<p>This website does not use advertising cookies or cross-site tracking. ${
    cfg.analytics.plausibleDomain
      ? 'We use a privacy-focused analytics service that does not use cookies and does not collect personal information to understand how visitors use the site in aggregate.'
      : 'We do not currently use website analytics. If we add analytics in the future, we will choose a privacy-conscious provider and update this policy.'
  } Our hosting provider may use strictly necessary technical mechanisms to deliver the site securely.</p>

<h2>How we protect your information</h2>
<p>The website is served exclusively over encrypted HTTPS connections. We limit access to inquiry information to people who need it to respond to you, and we use reasonable administrative, technical and physical safeguards. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security.</p>

<h2>Data retention</h2>
<p>We keep inquiry information for as long as needed to respond to you and maintain reasonable business records, and then delete or de-identify it, unless a longer period is required by law.</p>

<h2>Your communication preferences</h2>
<p>We contact you only about the inquiry you submitted, and any related follow-up you agree to. You may ask us to stop contacting you at any time by replying to our message or contacting us using the details below.</p>

<h2>Your privacy rights</h2>
<p>Depending on where you live, you may have rights under applicable law — such as the right to request access to, correction of, or deletion of personal information we hold about you, or to opt out of certain processing. To make a request, contact us using the details below. We will verify your request and respond as required by applicable law. We will not discriminate against you for exercising any rights you have.</p>

<h2>Children's privacy</h2>
<p>This website is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children.</p>

<h2>Links to other websites</h2>
<p>Our website may link to other websites, such as IRS.gov. We are not responsible for their content or privacy practices.</p>

<h2>Changes to this policy</h2>
<p>We may update this Privacy Policy from time to time. The "Last updated" date above shows when it was last revised.</p>

<h2>Contact us</h2>
${contactBlock()}
`,
);

export const terms = legal(
  '/terms/',
  'Terms & Conditions',
  `Terms & Conditions | ${B.publicName}`,
  `The terms that govern use of the ${B.publicName} website, including educational content limitations, intellectual property and liability.`,
  'The terms that govern your use of this website.',
  () => `
<p>These Terms and Conditions ("Terms") govern your use of this website operated by ${N}. By accessing or using the website, you agree to these Terms. If you do not agree, please do not use the website.</p>

<h2>Use of the website</h2>
<p>You may use this website for lawful, personal and informational purposes. You agree not to misuse the website, including by attempting to gain unauthorized access, interfering with its operation, submitting false or misleading information, or using automated means to collect content or submit forms.</p>

<h2>Educational content only</h2>
<p>Content on this website is provided for general educational and informational purposes. It is not individualized investment, legal, tax or accounting advice, and it is not an offer or solicitation to buy or sell any security or investment. Retirement plan rules are complex, change over time and depend on individual facts. You should consult qualified, appropriately licensed professionals before making decisions. Please also read our <a href="/disclosures/">Financial &amp; Educational Disclosures</a>.</p>
<p>Submitting a form or communicating with us through this website does not by itself create an advisory, fiduciary, attorney-client or other professional relationship.</p>

<h2>Accuracy of information</h2>
<p>We work to keep content accurate and current, but we make no guarantee that all information is complete, accurate or up to date. Rules, limits and interpretations change, and we may update content without notice.</p>

<h2>Intellectual property</h2>
<p>The text, design, logos and other original content on this website are owned by ${N} or used with permission and are protected by applicable intellectual property laws. Typefaces are used under the SIL Open Font License. You may view and print pages for personal, non-commercial use; any other use requires our prior written permission.</p>

<h2>Third-party links</h2>
<p>Links to third-party websites are provided for convenience. We do not control and are not responsible for the content, policies or practices of third-party websites, and a link does not imply endorsement.</p>

<h2>Disclaimer of warranties</h2>
<p>The website and its content are provided "as is" and "as available," without warranties of any kind, express or implied, to the fullest extent permitted by law.</p>

<h2>Limitation of liability</h2>
<p>To the fullest extent permitted by law, ${N} and its owners, employees and agents will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss arising from your use of, or reliance on, this website or its content.</p>

<h2>Governing law</h2>
<p>These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-law principles.</p>

<h2>Changes to these Terms</h2>
<p>We may update these Terms from time to time. Continued use of the website after changes are posted means you accept the revised Terms.</p>

<h2>Contact information</h2>
${contactBlock()}
`,
);

export const disclosures = legal(
  '/disclosures/',
  'Financial & Educational Disclosures',
  `Financial & Educational Disclosures | ${B.publicName}`,
  `Important disclosures about the educational nature of ${B.publicName} content and consultations, investment risk, and retirement plan rules.`,
  'Important information about the nature of our content and services.',
  () => `
<h2>Educational and informational purposes only</h2>
<p>All content on this website, and all consultations offered by ${N}, are provided for general educational and informational purposes. They are designed to help you understand retirement plan structures, not to recommend any specific course of action for you.</p>

<h2>Not investment advice</h2>
<p>Nothing on this website or in our consultations is individualized investment advice or a recommendation to buy, sell or hold any security, real estate or other asset. ${N} is not registered as an investment adviser or broker-dealer with the U.S. Securities and Exchange Commission or any state securities regulator. <!-- OWNER: confirm this statement is accurate; edit if any registration exists. --></p>

<h2>Not legal or tax advice</h2>
<p>Nothing on this website is legal or tax advice. Retirement plan, tax and ERISA rules are complex and depend on your individual circumstances. Consult a qualified CPA, enrolled agent, tax attorney or ERISA attorney for advice about your situation.</p>

<h2>Our role</h2>
<p>${N} does not act as a custodian, plan trustee, plan administrator, third-party administrator, or fiduciary to any retirement plan, and does not hold or manage client assets. Plan documents, custody, administration and investment advice, where needed, are provided by independent third parties you select.</p>

<h2>Investments involve risk</h2>
<p>All investments involve risk, including the possible loss of principal. Alternative assets that may be held in self-directed plans — such as real estate, private companies, private loans and precious metals — can be illiquid, difficult to value, concentrated, and subject to fraud risk, and may carry higher fees than traditional investments. Past performance does not guarantee future results.</p>

<h2>No guarantees</h2>
<p>We do not guarantee any investment return, tax result, plan approval or other outcome. Any examples are hypothetical and for illustration only.</p>

<h2>Plan rules and eligibility apply</h2>
<p>Eligibility for a Solo 401(k) or other retirement plan depends on your business, income, employees and other facts. Contribution limits, distribution rules, prohibited transaction rules and reporting requirements apply and change over time. Failure to follow them can result in taxes, penalties or loss of a plan's tax-advantaged status.</p>

<h2>No government endorsement</h2>
<p>References to the Internal Revenue Service (IRS), the U.S. Department of Labor (DOL) or federal law are for educational purposes only. ${N} is not affiliated with, approved by or endorsed by the IRS, the DOL, the SEC or any other government agency.</p>

<h2>Consult qualified professionals</h2>
<p>Before establishing a retirement plan or making any investment, consult qualified professionals who can consider your complete financial, tax and legal circumstances.</p>

<h2>Questions</h2>
${contactBlock()}
`,
);

export const thankYou = {
  path: '/thank-you/',
  title: `Thank You | ${B.publicName}`,
  description: `Thank you for contacting ${B.publicName}. We have received your consultation request.`,
  noindex: true,
  body: () => `
${pageHero({ compact: true, eyebrow: 'Request received', title: 'Thank you — we\'ve received your request', lead: 'We will review your message and follow up by email or phone to arrange a time to talk.' })}
<section class="section section--tight-top">
  <div class="container narrow center">
    <p>While you wait, you may find our <a href="/self-directed-401k/">Self-Directed 401(k) guide</a> helpful.</p>
    <a class="btn btn--primary" href="/">Return to the homepage</a>
  </div>
</section>`,
};

export const notFound = {
  path: '/404.html',
  file: '404.html',
  title: `Page Not Found | ${B.publicName}`,
  description: 'The page you were looking for could not be found.',
  noindex: true,
  body: () => `
${pageHero({ compact: true, eyebrow: 'Error 404', title: 'We couldn\'t find that page', lead: 'The page may have moved or no longer exists.' })}
<section class="section section--tight-top">
  <div class="container narrow center">
    <div class="btn-row btn-row--center">
      <a class="btn btn--primary" href="/">Go to the homepage</a>
      <a class="btn btn--outline" href="/contact/">Contact us</a>
    </div>
  </div>
</section>`,
};
