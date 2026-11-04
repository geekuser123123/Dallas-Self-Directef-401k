import { icon, pageHero, esc, ctaBand, faqList, SERVICES, SITE, ORG_ID, B } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services/' },
];

// Detailed content per service key. Only services enabled in site.config.mjs render.
const DETAIL = {
  education: {
    desc: 'A structured introduction to how Self-Directed 401(k) plans work: the plan document, the plan trust, who directs investments, what kinds of assets a plan may permit, and the federal rules that apply to every self-directed account.',
    for: 'Business owners and self-employed professionals who are hearing about self-directed retirement plans for the first time, or who want to separate fact from marketing claims.',
    expect: ['A plain-English walkthrough of self-directed plan mechanics', 'An overview of prohibited transaction and disqualified person rules', 'Common misconceptions and the risks of alternative assets', 'A list of questions to bring to your CPA or plan provider'],
    faqs: [
      { q: 'Is a Self-Directed 401(k) a different kind of account?', a: '<p>No. It is a 401(k) plan whose plan document permits a broader range of participant-directed investments. The same core tax and qualification rules apply.</p>' },
      { q: 'Will you tell me which investments to buy?', a: '<p>No. Our education explains what may be permitted and the rules involved. Investment selection decisions are yours, ideally made with a licensed professional.</p>' },
    ],
  },
  solo401k: {
    desc: 'Information about one-participant 401(k) plans — often called Solo 401(k) or individual 401(k) plans — including general eligibility, the difference between employee deferrals and employer contributions, Roth options where offered, and annual reporting.',
    for: 'Sole proprietors, single-member LLC owners, partners and owners of small corporations with no eligible employees other than owners and spouses.',
    expect: ['How eligibility generally works, including the effect of hiring employees', 'How the two contribution "buckets" work (amounts are set annually by the IRS)', 'When Form 5500-EZ filing is generally required', 'How a Solo 401(k) compares with SEP IRAs and other options'],
    faqs: [
      { q: 'Can my spouse participate in my Solo 401(k)?', a: '<p>Generally, a spouse who earns compensation from the business may participate without disqualifying the plan from one-participant status. Confirm specifics with your plan provider or tax professional.</p>' },
      { q: 'What happens if I hire employees?', a: '<p>Employees who meet the plan\'s eligibility requirements generally must be covered, which can mean the plan is no longer a "solo" plan and different rules and testing may apply.</p>' },
    ],
  },
  planStructure: {
    desc: 'Guidance on how the components of a self-directed retirement plan fit together: plan sponsor, plan document, trust, trustee, participant, and any custodian or recordkeeper — and the role each plays.',
    for: 'Owners comparing plan providers or trying to understand the paperwork for a plan they are considering.',
    expect: ['A clear map of plan roles and responsibilities', 'How "checkbook control" (trustee-directed) arrangements generally work', 'How assets should be titled and kept separate', 'Questions to ask a prospective plan provider'],
    faqs: [
      { q: 'What does "checkbook control" mean?', a: '<p>It usually describes a plan in which the trustee — often the business owner — opens a bank account in the plan\'s name and directs investments directly. It increases control and responsibility at the same time.</p>' },
    ],
  },
  businessOwner: {
    desc: 'Educational discussions about how retirement plans fit into a business owner\'s broader planning — comparing common plan types, how business structure affects plan options, and how plan choices may change as a business grows.',
    for: 'Owners of growing businesses, partners and entrepreneurs evaluating retirement savings vehicles.',
    expect: ['An overview of Solo 401(k), traditional 401(k), SEP IRA and SIMPLE IRA characteristics', 'How hiring plans may affect retirement plan choices', 'Which professionals to involve and when'],
    faqs: [
      { q: 'Do you prepare plan documents or tax filings?', a: '<p>No. Plan documents are provided by plan providers, and tax filings should be handled by you or your tax professional.</p>' },
    ],
  },
  planSetup: {
    desc: 'Support coordinating the steps involved in establishing a self-directed 401(k) with the appropriate plan provider.',
    for: 'Business owners who have decided to establish a plan.',
    expect: ['A checklist of setup steps', 'Help understanding the documents involved'],
    faqs: [],
  },
  existingPlan: {
    desc: 'Help understanding ongoing responsibilities for an existing self-directed 401(k).',
    for: 'Owners who already have a self-directed 401(k).',
    expect: ['A review of recordkeeping practices', 'An overview of annual reporting questions'],
    faqs: [],
  },
  consultation: {
    desc: 'A one-on-one conversation about your business, your current retirement savings arrangements and your goals. We answer your questions about self-directed structures and outline sensible next steps.',
    for: 'Anyone who wants to talk through their questions with a person rather than search through conflicting information online.',
    expect: ['A focused conversation at a scheduled time', 'Straight answers, including when something depends on facts we\'d need a professional to review', 'A summary of next steps and questions for your advisors'],
    faqs: [
      { q: 'Is the consultation investment advice?', a: '<p>No. Consultations are educational and general in nature. They are not individualized investment, legal or tax advice.</p>' },
      { q: 'How do I book?', a: '<p>Submit the form on our <a href="/contact/">Contact page</a> and we will follow up to schedule a time.</p>' },
    ],
  },
};

export default {
  path: '/services/',
  title: 'Self-Directed 401(k) Services | Dallas, TX',
  description:
    'Explore Self-Directed 401(k) education and retirement plan support for entrepreneurs, self-employed professionals, and business owners.',
  crumbs,
  schema: [
    ...SERVICES.map((s) => ({
      '@type': 'Service',
      '@id': `${SITE}/services/#${s.id}`,
      name: s.title,
      description: DETAIL[s.key].desc,
      serviceType: 'Retirement plan education',
      provider: { '@id': ORG_ID },
      areaServed: B.serviceArea.map((n) => ({ '@type': 'Place', name: n })),
      url: `${SITE}/services/#${s.id}`,
    })),
  ],
  body: () => `
${pageHero({
  eyebrow: 'Services',
  title: 'Self-Directed 401(k) Education & Support',
  lead: 'Educational services for entrepreneurs, self-employed professionals and business owners who want to understand self-directed retirement plan structures.',
  crumbs,
  aside: `<dl class="hero-facts">
    <div><dt>Focus</dt><dd>Retirement plan education</dd></div>
    <div><dt>Format</dt><dd>One-on-one consultations</dd></div>
    <div><dt>Serving</dt><dd>${esc(B.serviceArea.join(' · '))}</dd></div>
  </dl>`,
})}

<section class="section section--tight" aria-label="Service overview">
  <div class="container">
    <nav class="pill-nav" aria-label="Jump to a service">
      ${SERVICES.map((s) => `<a href="#${s.id}">${s.title}</a>`).join('')}
    </nav>
    <div class="notice">${icon('shield', 'notice__icon')}<p>
      <strong>What we do — and don't do.</strong> Our services are educational. We do not act as a custodian, plan trustee, third-party administrator (TPA), registered investment adviser or fiduciary, and we do not provide legal or tax advice. Where those services are needed, we encourage you to engage qualified, appropriately licensed providers.</p>
    </div>
  </div>
</section>

${SERVICES.map(
  (s, i) => `<section class="section service${i % 2 ? ' section--light' : ''}" id="${s.id}" aria-labelledby="${s.id}-h">
  <div class="container service__grid">
    <div class="service__intro">
      ${icon(s.icon, 'service__icon')}
      <h2 id="${s.id}-h">${s.title}</h2>
      <p>${DETAIL[s.key].desc}</p>
      <h3 class="h-small">Who it's for</h3>
      <p>${DETAIL[s.key].for}</p>
      <a class="btn btn--primary" href="/contact/?interest=${encodeURIComponent(s.title)}">Schedule a Consultation</a>
    </div>
    <div class="service__side">
      <h3 class="h-small">What you can expect</h3>
      <ul class="checklist">${DETAIL[s.key].expect.map((e) => `<li>${e}</li>`).join('')}</ul>
      ${DETAIL[s.key].faqs.length ? `<h3 class="h-small">Common questions</h3>${faqList(DETAIL[s.key].faqs, 4)}` : ''}
    </div>
  </div>
</section>`,
).join('')}

${ctaBand({
  heading: 'Not sure where to start?',
  text: 'Tell us about your business and what you\'d like to understand. We\'ll help you find the right starting point.',
})}
`,
};
