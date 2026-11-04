import { img, icon, pageHero, ctaBand, faqList, faqSchema, SITE, ORG_ID, B } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Self-Directed 401(k)', path: '/self-directed-401k/' },
];

const faqs = [
  {
    q: 'Is a Self-Directed 401(k) the same as a Self-Directed IRA?',
    a: '<p>No. Both can allow alternative investments, but a 401(k) is an employer-sponsored qualified plan held in a trust, while an IRA is an individual account held by a custodian or trustee. They differ in contribution structure, loan availability (IRAs do not permit loans), how assets are held, and certain tax rules — for example, qualified plans may qualify for an exception to unrelated debt-financed income (UDFI) tax on some leveraged real estate under Internal Revenue Code §514(c)(9), subject to conditions.</p>',
  },
  {
    q: 'Can I buy real estate with a Self-Directed 401(k)?',
    a: '<p>If the plan document permits it, the plan can generally purchase real estate as an investment. The property must be titled to the plan, expenses must be paid by the plan, income must return to the plan, and neither you nor any disqualified person may use or personally benefit from the property.</p>',
  },
  {
    q: 'Can I take a loan from my Self-Directed 401(k)?',
    a: '<p>Only if the plan document allows participant loans. When permitted, loans are generally limited to the lesser of $50,000 or 50% of your vested account balance (subject to IRS rules and certain exceptions) and must follow a repayment schedule.</p>',
  },
  {
    q: 'Does a Self-Directed 401(k) offer Roth contributions?',
    a: '<p>Many plans include a designated Roth feature for employee deferrals, and some permit Roth treatment for other contribution types under rules updated by the SECURE 2.0 Act. Availability depends on your plan document and provider.</p>',
  },
  {
    q: 'Can I roll existing retirement funds into a Self-Directed 401(k)?',
    a: '<p>Many plans accept rollovers from other eligible plans and from traditional IRAs, but it depends on the plan document. Roth IRA funds generally cannot be rolled into a 401(k). Use a direct rollover where possible to avoid withholding and the 60-day rollover rules.</p>',
  },
  {
    q: 'What happens if a prohibited transaction occurs?',
    a: '<p>Prohibited transactions can trigger excise taxes and, depending on the circumstances, can jeopardize the tax-favored status of plan assets. Correction may be possible in some cases through IRS or Department of Labor programs. If you suspect a problem, consult an ERISA attorney or qualified tax professional promptly.</p>',
  },
  {
    q: 'Do you offer Solo 401(k) information for Dallas business owners?',
    a: `<p>Yes. We provide Solo 401(k) and Self-Directed 401(k) education for business owners in ${B.serviceArea.join(' and the ')}. <a href="/contact/">Contact us</a> to schedule a consultation.</p>`,
  },
];

const INVESTMENTS = [
  ['Real estate', 'Residential, commercial or raw land held as an investment — never for personal use by you or disqualified persons.'],
  ['Private lending & notes', 'Promissory notes and loans to unrelated parties, often secured by real estate.'],
  ['Private businesses', 'Interests in private companies or LLCs, subject to ownership limits and prohibited transaction rules.'],
  ['Precious metals', 'Certain gold, silver, platinum and palladium bullion meeting IRS fineness standards, held by an appropriate custodian or trustee.'],
  ['Traditional securities', 'Publicly traded stocks, bonds, ETFs and mutual funds through a brokerage account titled to the plan.'],
  ['Other permitted assets', 'Other assets the plan document allows and the law does not prohibit — evaluated case by case.'],
];

export default {
  path: '/self-directed-401k/',
  title: 'Self-Directed 401(k) Dallas TX | Retirement Plan Guide',
  description:
    'Learn how Self-Directed 401(k) plans work, who may qualify, and what business owners should understand about retirement plan options.',
  crumbs,
  pageType: 'WebPage',
  ogImageKey: 'signing',
  schema: [
    {
      '@type': 'Article',
      '@id': `${SITE}/self-directed-401k/#article`,
      headline: 'Understanding Self-Directed 401(k) Plans',
      description: 'An educational guide to how Self-Directed 401(k) and Solo 401(k) plans work, eligibility, potential investments, and plan rules.',
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: `${SITE}/self-directed-401k/`,
      dateModified: new Date().toISOString().slice(0, 10),
      about: [{ '@type': 'Thing', name: 'Self-Directed 401(k)' }, { '@type': 'Thing', name: 'Solo 401(k)' }],
    },
    faqSchema(faqs),
  ],
  body: () => `
${pageHero({
  eyebrow: 'Retirement Plan Guide',
  title: 'Understanding Self-Directed 401(k) Plans',
  lead: 'A clear, educational guide for Dallas business owners and self-employed professionals: what a Self-Directed 401(k) is, how it works, who may be eligible, and the rules that come with it.',
  image: 'signing',
  crumbs,
})}

<div class="container guide">
  <aside class="guide__toc" aria-label="On this page">
    <p class="guide__toc-h">On this page</p>
    <ol>
      <li><a href="#what-is">What is a Self-Directed 401(k)?</a></li>
      <li><a href="#how-it-works">How does it work?</a></li>
      <li><a href="#eligibility">Who may be eligible?</a></li>
      <li><a href="#investments">Potential investment options</a></li>
      <li><a href="#rules">Rules & responsibilities</a></li>
      <li><a href="#questions">Common questions</a></li>
    </ol>
  </aside>

  <article class="guide__body prose">
    <section id="what-is" aria-labelledby="what-is-h">
      <h2 id="what-is-h">What is a Self-Directed 401(k)?</h2>
      <p>A Self-Directed 401(k) is a qualified retirement plan under Internal Revenue Code §401(k) whose plan document allows participants to choose their own investments from a broad range of permitted assets — not only a pre-selected menu of mutual funds.</p>
      <p>Most traditional employer 401(k) plans are administered by a large recordkeeper, and the employer selects a limited lineup of investment funds. In a self-directed plan, the plan document is written to permit wider participant direction. For business owners with no employees other than themselves and a spouse, the most common form is a <strong>Solo 401(k)</strong> (also called a one-participant or individual 401(k)) with self-direction features.</p>
      <p>"Self-directed" describes <em>who chooses the investments</em> and <em>what the plan permits</em>. It does not change the fundamental tax rules: contributions are subject to annual IRS limits, distributions are subject to plan and tax rules, and the plan must stay in compliance to keep its tax-advantaged status.</p>
    </section>

    <figure class="guide__figure">${img('documents', { w: 1200, h: 675, widths: [480, 800, 1200], sizes: '(min-width: 1100px) 760px, 100vw' })}</figure>

    <section id="how-it-works" aria-labelledby="how-h">
      <h2 id="how-h">How does a Self-Directed 401(k) work?</h2>
      <p>While every provider structures things a little differently, the core building blocks are consistent:</p>
      <ol class="numbered">
        <li><strong>The business adopts a plan.</strong> Your business (sole proprietorship, LLC, partnership or corporation) becomes the plan sponsor and adopts a written plan document — usually a pre-approved document from a plan provider — that permits self-directed investments.</li>
        <li><strong>A trust holds the plan assets.</strong> Plan assets are held in trust for participants. A trustee — in many owner-only plans, the business owner — is responsible for holding and directing those assets according to the plan document.</li>
        <li><strong>Contributions are made.</strong> As both "employee" and "employer," an owner may make elective deferrals (pre-tax or Roth, if offered) and the business may make employer contributions, within annual limits set by the IRS.</li>
        <li><strong>Investments are made in the plan's name.</strong> Accounts and assets are titled to the plan or trust, not to you personally. Some arrangements give the trustee "checkbook control" through a plan bank account; others use a custodian to hold alternative assets.</li>
        <li><strong>Income stays in the plan.</strong> Income, gains and expenses relating to plan investments flow into and out of the plan — never through your personal or business accounts.</li>
        <li><strong>The plan is administered and reported.</strong> Records are maintained, assets are valued at least annually, and required filings — such as Form 5500-EZ for many one-participant plans — are made on time.</li>
      </ol>
    </section>

    <section id="eligibility" aria-labelledby="elig-h">
      <h2 id="elig-h">Who may be eligible?</h2>
      <p>A Solo or self-directed 401(k) is generally used by people who have <strong>business or self-employment income</strong> — it is not available simply as a personal account. Eligibility depends on facts about your business. In general:</p>
      <ul>
        <li><strong>Self-employed individuals and business owners</strong> with earned income from the business may sponsor a plan.</li>
        <li><strong>Owner-only businesses</strong> — with no eligible employees other than owners, partners and their spouses — are typically candidates for a one-participant (Solo) 401(k).</li>
        <li><strong>Businesses with employees</strong> may still sponsor a 401(k) with self-directed features, but employees who meet eligibility requirements must generally be covered, which brings additional administration and nondiscrimination testing.</li>
        <li><strong>Side businesses count.</strong> Someone with a W-2 job and a separate self-employment business may be able to sponsor a Solo 401(k) through that business, though deferral limits are shared across all 401(k) plans in which they participate.</li>
      </ul>
      <p class="callout">${icon('shield', 'callout__icon')}<span>Eligibility rules — including the long-term part-time employee rules introduced by the SECURE Act and SECURE 2.0 Act — can be technical. Confirm your situation with a qualified tax professional or plan provider before establishing a plan.</span></p>
    </section>

    <section id="investments" aria-labelledby="inv-h">
      <h2 id="inv-h">Potential investment options</h2>
      <p>The plan document determines what is permitted. Depending on the plan and provider, a Self-Directed 401(k) may be able to hold:</p>
      <div class="mini-grid">
        ${INVESTMENTS.map(([t, d]) => `<div class="mini-card"><h3>${t}</h3><p>${d}</p></div>`).join('')}
      </div>
      <h3>Assets and transactions that are not allowed</h3>
      <ul>
        <li><strong>Collectibles</strong> — artwork, rugs, antiques, gems, stamps, most coins, alcoholic beverages and similar items — are treated as distributions if acquired by an individually directed account.</li>
        <li><strong>Life insurance</strong> is restricted in qualified plans and subject to "incidental benefit" limits; it is generally not a self-directed investment option.</li>
        <li><strong>Transactions with disqualified persons</strong> — such as yourself, your spouse, ancestors, descendants and their spouses, and entities you control — are prohibited (see below).</li>
      </ul>
      <p>Alternative assets can be <strong>illiquid, difficult to value, concentrated and higher risk</strong> than diversified traditional investments, and may involve additional fees. Investments can lose value, and no return is guaranteed.</p>
    </section>

    <section id="rules" aria-labelledby="rules-h">
      <h2 id="rules-h">Plan rules and responsibilities</h2>
      <p>The flexibility of a self-directed plan comes with real responsibility, particularly when you serve as the plan's trustee. Key areas include:</p>
      <h3>Prohibited transactions</h3>
      <p>Internal Revenue Code §4975 (and, for plans covered by Title I, ERISA §406) prohibits transactions between the plan and "disqualified persons." Examples include selling property to or buying property from the plan, lending money between yourself and the plan, using plan assets for personal benefit, or having the plan pay you for services relating to a plan investment. Penalties can be significant.</p>
      <h3>Exclusive benefit and separation of assets</h3>
      <p>Plan assets must be held for the exclusive benefit of participants and beneficiaries. Do not commingle plan funds with personal or business money, and title every plan asset in the name of the plan or its trust.</p>
      <h3>Recordkeeping and valuation</h3>
      <p>Keep complete records of contributions, investments, income and expenses. Alternative assets must be valued at fair market value at least annually for reporting purposes.</p>
      <h3>Annual reporting</h3>
      <p>One-participant plans generally must file <strong>Form 5500-EZ</strong> for any plan year in which total plan assets exceed $250,000 at year-end, and for the plan's final year. Plans covering employees generally file Form 5500 or 5500-SF. Late filing penalties apply.</p>
      <h3>Keeping the plan document current</h3>
      <p>Plan documents must be updated or restated when the law changes. Operating the plan in a way that doesn't match its document can create compliance problems.</p>
      <h3>Unrelated business income</h3>
      <p>Some plan investments — for example, an operating business held through a pass-through entity — can generate unrelated business taxable income (UBTI) that is taxable to the plan. Debt-financed real estate in a qualified plan may qualify for an exception under §514(c)(9) if specific conditions are met.</p>
    </section>

    <section id="questions" aria-labelledby="q-h">
      <h2 id="q-h">Common questions</h2>
      ${faqList(faqs)}
    </section>

    <p class="source-note">This guide is general educational information based on federal rules as generally understood at the time of writing. Rules, limits and interpretations change. See <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS: One-Participant 401(k) Plans</a> and <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" rel="noopener" target="_blank">IRS: Prohibited Transactions</a> for official information, and consult qualified professionals about your circumstances. <a href="/disclosures/">Read our disclosures</a>.</p>
  </article>
</div>

${ctaBand({
  heading: 'Have questions about your situation?',
  text: 'Schedule an educational consultation to talk through Self-Directed 401(k) structures and whether they may be relevant to your business.',
})}
`,
};
