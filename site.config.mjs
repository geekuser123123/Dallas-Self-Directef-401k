/**
 * ============================================================================
 *  SITE & BUSINESS CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *
 *  Every page, the footer, the structured data (JSON-LD), the sitemap and the
 *  canonical URLs read from this file. Change a value here and rebuild — it
 *  updates everywhere, which keeps your Name / Address / Phone (NAP) identical
 *  across the site, Google Search Console and your Google Business Profile.
 *
 *  RULES
 *  - `null` means "not provided yet". The site shows a clearly marked
 *    placeholder (e.g. "[Business phone — to be provided]") and the build
 *    prints a warning. Nothing is invented.
 *  - Run `STRICT=1 node build.mjs` before launch: the build FAILS if any
 *    required launch value is still missing.
 *  - Never put private data here that should not be public (EIN, owner's home
 *    address, personal phone). Fields marked PRIVATE are never rendered.
 * ============================================================================
 */

export default {
  site: {
    // Current production address. No trailing slash.
    // When a custom domain (e.g. selfdirected401kdallas.com) is connected in
    // Netlify, change this one line and redeploy — canonicals, sitemap,
    // robots.txt and structured data all follow.
    url: 'https://dallas-self-directed-401k.netlify.app',
    // Google Search Console "HTML tag" verification code (content value only),
    // e.g. 'AbCdEf123...'. Needed for a URL-prefix property on netlify.app.
    googleSiteVerification: null,
    locale: 'en_US',
    language: 'en-US',
    // Optional default social share image (absolute URL). null = use hero image.
    ogImage: null,
  },

  business: {
    // PRIVATE — used only for your records/checklists, never rendered.
    legalName: null, // [TO BE PROVIDED] e.g. "Example Holdings LLC"
    ein: null, // [DO NOT PUBLISH] — leave null; kept here only as a reminder.

    // PUBLIC name shown in the header, footer, titles and schema.
    // Must match the real-world business name you will use on Google Business
    // Profile. If this is only an SEO/website title, change it to the real
    // name (or DBA) — Google does not allow keywords added to business names.
    publicName: 'Dallas Self-Directed 401(k)',
    publicNameConfirmed: false, // set true once confirmed as the real name / registered DBA
    dba: null, // [IF APPLICABLE]

    owner: null, // [TO BE PROVIDED] — shown on About page only if provided
    foundingYear: null, // only if real; never estimated

    phone: null, // [TO BE PROVIDED] display format, e.g. "(214) 555-0100"
    phoneE164: null, // e.g. "+12145550100" — used for tel: links and schema
    email: null, // [TO BE PROVIDED] official domain email, e.g. "info@selfdirected401kdallas.com"

    /**
     * locationType:
     *  - "unconfirmed"  : default. No address shown, no LocalBusiness schema.
     *  - "service-area" : you meet customers at THEIR location (or in person
     *                     elsewhere) and do NOT receive them at your address.
     *                     Address hidden; service area shown.
     *  - "office"       : staffed office that receives customers during the
     *                     posted hours. Address shown + map + LocalBusiness.
     *  - "online-only"  : no in-person contact. Not eligible for a Google
     *                     Business Profile — do not create one.
     */
    locationType: 'unconfirmed',

    // Only filled when locationType === "office" (or for your records).
    address: {
      streetAddress: null,
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      postalCode: null,
      addressCountry: 'US',
    },
    // Only real coordinates of a real office. Never estimate.
    geo: null, // { latitude: 32.0, longitude: -96.0 }

    // Shown when locationType is "service-area" (and as general market copy).
    serviceArea: ['Dallas, TX', 'Dallas–Fort Worth Metroplex'],

    /**
     * Genuine business hours, or null.
     * Example:
     * [
     *   { days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '17:00' },
     * ]
     */
    hours: null,
    hoursNote: 'Consultations by appointment.', // edit or set null

    // Genuine official profiles only (LinkedIn company page, GBP URL once live, etc.).
    sameAs: [],
  },

  /**
   * SERVICES — set `offered: true` ONLY for services you actually provide.
   * Disabled services are removed from the homepage, Services page,
   * navigation, schema and contact form options automatically.
   */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planStructure: { offered: true },
    businessOwner: { offered: true },
    consultation: { offered: true },
    // Only if actually offered (confirm before enabling):
    planSetup: { offered: false },
    existingPlan: { offered: false },
  },

  /**
   * TEAM — leave empty unless you have real team members with real,
   * permission-cleared photographs. Credentials only if verifiable.
   * { name: '', title: '', bio: '', photo: '/assets/img/team/name.webp', credentials: [] }
   */
  team: [],

  /** ABOUT PAGE company story — real facts only. null shows a marked placeholder. */
  about: {
    story: null,
    professionalBackground: null,
  },

  /**
   * CONTACT FORM
   * Submissions are captured by Netlify Forms (enable "Form detection" in
   * Netlify → Site configuration → Forms). Set up email notifications or an
   * outgoing webhook there — the webhook URL lives in Netlify, not in code.
   */
  form: {
    name: 'consultation',
  },

  analytics: {
    // Privacy-conscious analytics. Leave null to ship no analytics at all.
    // Example: Plausible domain "selfdirected401kdallas.com" (no cookies).
    plausibleDomain: null,
  },

  /**
   * IMAGES — Unsplash CDN (serves WebP/AVIF automatically via auto=format).
   * Before launch: open each URL, confirm the photo suits the brand and that
   * the alt text describes it accurately. For best performance you may
   * download, convert to WebP and place them in src/assets/img/.
   * Photos are illustrative stock images — never captioned as our office/team.
   */
  images: {
    hero: {
      id: 'photo-1556761175-5973dc0f32e7',
      alt: 'Business professionals talking around a meeting table in a bright office',
    },
    consultation: {
      id: 'photo-1600880292203-757bb62b4baf',
      alt: 'Two professionals reviewing information together on a laptop',
    },
    documents: {
      id: 'photo-1554224155-6726b3ff858f',
      alt: 'Person reviewing financial paperwork with a calculator',
    },
    office: {
      id: 'photo-1497366216548-37526070297c',
      alt: 'Modern open-plan office interior with natural light',
    },
    signing: {
      id: 'photo-1450101499163-c8848c66ca85',
      alt: 'Close-up of a person reviewing and signing documents at a desk',
    },
    meeting: {
      id: 'photo-1556761175-b413da4baf72',
      alt: 'Small group of business owners in a planning discussion',
    },
  },
};
