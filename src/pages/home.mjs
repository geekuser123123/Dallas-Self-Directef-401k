import { img, icon, SERVICES, faqList, faqSchema, ctaBand, B, esc } from '../lib.mjs';

export const faqs = [
  {
    q: 'What is a Self-Directed 401(k)?',
    a: `<p>A Self-Directed 401(k) is a 401(k) plan whose plan documents allow participants to direct how their account is invested — potentially including assets beyond the mutual funds typically offered on an employer plan menu. It is still a qualified retirement plan governed by the Internal Revenue Code and, where applicable, ERISA, so the same core rules on contributions, distributions and prohibited transactions apply.</p>`,
  },
  {
    q: 'How does a Self-Directed 401(k) work?',
    a: `<p>A business adopts a written plan document that permits self-direction and establishes a trust to hold plan assets. Contributions are made to the plan, and the plan trustee (in many owner-only plans, the business owner) directs investments that the plan document permits. Assets must be titled in the name of the plan, kept separate from personal and business funds, and reported as the rules require.</p>`,
  },
  {
    q: 'Who may qualify for a Solo 401(k)?',
    a: `<p>A Solo 401(k) — also called a one-participant or individual 401(k) — is generally available to a business with self-employment or business income that has no eligible employees other than the owner(s) and their spouses. Sole proprietors, single-member LLCs, partnerships and corporations can all potentially qualify. Employees who must be covered under plan eligibility rules (including long-term part-time rules introduced by the SECURE 2.0 Act) can affect eligibility, so confirm your situation with a qualified professional.</p>`,
  },
  {
    q: 'What investments may be permitted?',
    a: `<p>Beyond publicly traded stocks, bonds and funds, a plan document may permit assets such as real estate, private company interests, promissory notes and private lending, or precious metals that meet IRS fineness standards. Whether a particular investment is permitted depends on the plan document, the plan provider, and federal law.</p>`,
  },
  {
    q: 'Can a Self-Directed 401(k) hold alternative investments?',
    a: `<p>Yes, if the plan document allows it. Federal law prohibits certain assets — such as collectibles (art, antiques, gems, most coins, alcoholic beverages) — and prohibits transactions that benefit you or other "disqualified persons," such as buying property from a family member or personally using plan-owned real estate. Alternative investments can also be less liquid, harder to value and riskier than traditional investments.</p>`,
  },
  {
    q: 'What is the difference between a Solo 401(k) and a traditional 401(k)?',
    a: `<p>A traditional employer-sponsored 401(k) covers eligible employees, usually offers a set menu of funds chosen by the employer and its provider, and is subject to nondiscrimination testing. A Solo 401(k) covers only the owner(s) and spouses, so it is typically simpler to administer, and it may be written to allow self-directed investments. A Solo 401(k) may not be appropriate once you hire eligible employees.</p>`,
  },
  {
    q: 'What responsibilities does a plan participant have?',
    a: `<p>In a self-directed plan — especially one where you act as trustee — you are responsible for following the plan document, avoiding prohibited transactions, keeping plan assets separate, maintaining records, valuing assets, and meeting reporting obligations. For example, one-participant plans generally must file Form 5500-EZ once plan assets exceed $250,000 at the end of a plan year. Mistakes can have significant tax consequences.</p>`,
  },
  {
    q: 'How can I schedule a consultation?',
    a: `<p>Use the <a href="/contact/">consultation request form</a> on our Contact page and tell us a little about your business and what you'd like to learn. We'll follow up to arrange a time. Consultations are educational and do not constitute individualized investment, legal or tax advice.</p>`,
  },
];

const AUDIENCES = [
  {
    icon: 'briefcase',
    title: 'Entrepreneurs & Business Owners',
    text: 'Owners exploring how a 401(k) sponsored by their own business could fit into a broader retirement strategy — and what sponsoring a plan involves.',
  },
  {
    icon: 'person',
    title: 'Self-Employed Professionals',
    text: 'Consultants, contractors and independent professionals with self-employment income who want to understand whether a one-participant plan may be available to them.',
  },
  {
    icon: 'store',
    title: 'Small Business Owners',
    text: 'Owners of small companies weighing plan options. Having eligible employees changes which plan types are suitable — we help you understand the trade-offs.',
  },
  {
    icon: 'compass',
    title: 'Individuals Exploring Options',
    text: 'People who want to learn how self-directed retirement structures work before deciding anything. Eligibility depends on your circumstances; education comes first.',
  },
];

const WHY = [
  ['book', 'Education first', 'We explain how retirement plan structures work so you can make informed decisions with your own advisors.'],
  ['layers', 'Clear explanations', 'Plan documents, trustees, contribution types and reporting — described in plain English, without jargon.'],
  ['chat', 'Professional consultations', 'Focused, unhurried conversations about your goals and the questions that matter for your situation.'],
  ['eye', 'Transparent about our role', 'We are clear about what we do and do not provide, and when you should involve a CPA, attorney or plan provider.'],
  ['person', 'Client-focused communication', 'Prompt, respectful follow-up and straightforward answers — including "that depends, and here is why."'],
];

const STEPS = [
  ['Schedule an Initial Consultation', 'Request a time through our contact form. Tell us briefly about your business and your questions.'],
  ['Discuss Your Retirement Plan Goals', 'We talk through your business structure, current retirement savings arrangements, and what you hope to achieve.'],
  ['Understand Available Plan Structures', 'We explain the plan types and self-directed structures that may be relevant, including their rules, costs and responsibilities.'],
  ['Determine Appropriate Next Steps', 'You leave with a clear list of questions and next steps — including which qualified professionals to involve for individualized advice.'],
];

export default {
  path: '/',
  title: 'Dallas Self-Directed 401(k) | Retirement Plan Education',
  description:
    'Explore Self-Directed 401(k) options in Dallas, Texas. Learn about retirement plan structures, investment flexibility, and retirement planning for business owners.',
  ogImageKey: 'hero',
  schema: [faqSchema(faqs)],
  bodyClass: 'is-home',
  body: () => `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero__media">${img('hero', { eager: true, w: 1920, h: 1080, widths: [640, 960, 1280, 1920], sizes: '100vw' })}</div>
  <div class="container hero__inner">
    <p class="eyebrow eyebrow--light">Self-Directed 401(k) Education · Dallas, Texas</p>
    <h1 id="hero-h">Take Control of Your Retirement with a Self-Directed 401(k)</h1>
    <p class="hero__lead">Explore retirement plan options that provide greater flexibility and help eligible business owners and entrepreneurs understand alternative investment opportunities through self-directed retirement structures.</p>
    <div class="btn-row">
      <a class="btn btn--gold btn--lg" href="/contact/">Schedule a Consultation</a>
      <a class="btn btn--ghost btn--lg" href="/self-directed-401k/">Explore Self-Directed 401(k)</a>
    </div>
    <p class="hero__note">Educational information only — not investment, legal or tax advice.</p>
  </div>
</section>

<section class="section" aria-labelledby="intro-h">
  <div class="container split">
    <div class="split__text">
      <p class="eyebrow">An Introduction</p>
      <h2 id="intro-h">A More Flexible Approach to Retirement Planning</h2>
      <p>A <strong>Self-Directed 401(k)</strong> is a 401(k) plan whose plan document allows participants to direct their own investments — sometimes including assets beyond the stock and bond funds found on a typical employer plan menu. For business owners and the self-employed, it is often set up as a <strong>Solo 401(k)</strong> sponsored by their own business.</p>
      <ul class="checklist">
        <li><strong>Plan flexibility.</strong> The plan document defines which contribution types, loans and investments are available.</li>
        <li><strong>Investment options, where permitted.</strong> Some plans permit real estate, private lending or private business interests — subject to federal rules.</li>
        <li><strong>Built for business owners.</strong> The plan is sponsored by your business, which gives you more control over its design.</li>
        <li><strong>Rules and responsibilities.</strong> More control means more responsibility: prohibited transaction rules, recordkeeping and reporting all apply.</li>
        <li><strong>Proper administration matters.</strong> A compliant plan document, separate plan accounts and timely filings protect the plan's tax-qualified status.</li>
      </ul>
      <a class="text-link" href="/self-directed-401k/">Read the complete Self-Directed 401(k) guide <span aria-hidden="true">→</span></a>
    </div>
    <figure class="split__media">${img('documents', { w: 900, h: 1100, widths: [480, 720, 900], sizes: '(min-width: 960px) 45vw, 100vw' })}</figure>
  </div>
</section>

<section class="section section--light" aria-labelledby="who-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Who We Help</p>
      <h2 id="who-h">Education for people who build their own careers</h2>
      <p>Self-directed retirement structures are not right for everyone, and eligibility depends on your business and circumstances. These are the people we most often speak with.</p>
    </div>
    <div class="grid grid--4">
      ${AUDIENCES.map((a) => `<article class="card">${icon(a.icon, 'card__icon')}<h3>${a.title}</h3><p>${a.text}</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="svc-h">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        <p class="eyebrow">Services</p>
        <h2 id="svc-h">How we can help</h2>
      </div>
      <a class="text-link" href="/services/">View all services <span aria-hidden="true">→</span></a>
    </div>
    <div class="grid grid--3">
      ${SERVICES.map(
        (s) => `<a class="card card--link" href="/services/#${s.id}">${icon(s.icon, 'card__icon')}<h3>${s.title}</h3><p>${s.short}</p><span class="card__more">Learn more <span aria-hidden="true">→</span></span></a>`,
      ).join('')}
    </div>
  </div>
</section>

<section class="section section--dark" aria-labelledby="why-h">
  <div class="container split split--wide">
    <div>
      <p class="eyebrow eyebrow--light">Why Choose Us?</p>
      <h2 id="why-h">Clarity, transparency and a genuinely educational approach</h2>
      <p class="on-dark">We believe good retirement decisions start with understanding. Our role is to help you understand self-directed retirement plan structures so the conversations you have with your CPA, attorney or plan provider are more productive.</p>
      <a class="btn btn--gold" href="/about/">About Our Approach</a>
    </div>
    <ul class="why-list">
      ${WHY.map(([ic, t, d]) => `<li>${icon(ic, 'why-list__icon')}<div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="how-h">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">How It Works</p>
      <h2 id="how-h">A straightforward, four-step process</h2>
    </div>
    <ol class="steps">
      ${STEPS.map(([t, d], i) => `<li class="step"><span class="step__num" aria-hidden="true">0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}
    </ol>
    <p class="notice"><strong>Please note:</strong> Our consultations are educational. They help you understand plan structures and options; they are not individualized investment, legal or tax advice. For recommendations specific to you, consult a licensed financial professional, CPA or attorney.</p>
  </div>
</section>

<section class="section section--light" aria-labelledby="faq-h">
  <div class="container narrow">
    <div class="section-head section-head--center">
      <p class="eyebrow">FAQ</p>
      <h2 id="faq-h">Frequently asked questions</h2>
    </div>
    ${faqList(faqs)}
  </div>
</section>

${ctaBand({
  heading: 'Start Understanding Your Retirement Options Today.',
  text: 'Connect with our team to learn more about Self-Directed 401(k) structures and explore the options that may be relevant to your circumstances.',
})}
`,
};
