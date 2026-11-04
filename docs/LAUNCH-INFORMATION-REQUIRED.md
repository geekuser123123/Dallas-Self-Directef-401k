# Information Required Before Launch

Nothing on the website has been invented. Every missing fact shows as a highlighted
`[placeholder]` on the page, and `node build.mjs` lists everything still missing.
Fill these in `site.config.mjs` (and `src/pages/*` where noted), then run
`STRICT=1 node build.mjs`. It must finish with no warnings.

## 1. Business identity (required)

| Item | Where | Notes |
|---|---|---|
| **Legal business name** | `business.legalName` | Private. Used for your records and for schema `legalName` only if it differs from the public name. |
| **Public business name** | `business.publicName` | Currently "Dallas Self-Directed 401(k)". **Confirm this is the real-world name** (legal name or registered DBA / assumed name with the Texas SOS or Dallas County). If it is only a website title, replace it with the real name. Then set `publicNameConfirmed: true`. |
| DBA | `business.dba` | If applicable. |
| EIN | — | **Do not publish.** Leave out of the website entirely. |
| Owner / principal | `business.owner` | Shown on the About page. |

## 2. Contact details (NAP: Name, Address, Phone)

| Item | Where | Notes |
|---|---|---|
| **Business phone** | `business.phone` + `business.phoneE164` | A dedicated business line. Use the **same number** on Google Business Profile. |
| **Business email** | `business.email` | Use an email on the domain (e.g. `info@selfdirected401kdallas.com`). |
| **Location type** | `business.locationType` | `office`, `service-area`, or `online-only`. See the Google Business Profile checklist. |
| Street address and ZIP | `business.address` | **Only if** you have a staffed office that receives customers. Otherwise leave it `null`. Never use a virtual office, UPS box or coworking mailbox. |
| Coordinates | `business.geo` | Only the exact coordinates of a real office. |
| **Business hours** | `business.hours` | Genuine hours when someone can be reached. |
| Service area | `business.serviceArea` | Defaults to Dallas, TX and the DFW Metroplex. Adjust it to match reality. |
| Official social profiles | `business.sameAs` | Only real, active company profiles. Add the Google Business Profile URL once it is live. |

## 3. Services (confirm what you actually offer)

In `site.config.mjs → services`, set `offered: true` only for real services.
`planSetup` and `existingPlan` are **off** by default because they were marked "only
if actually offered". When you switch a service on or off, it is added to or removed
from the homepage, the Services page, the footer, the form options and the schema
automatically.

**Confirm the "What we do — and don't do" statements.** The Services page, About
page (Professional Standards) and Disclosures page say the business is **not** a
custodian, trustee, TPA, registered investment adviser or fiduciary, and does not
give legal or tax advice. If any of that is wrong, edit:

- `src/pages/services.mjs`: the notice near the top
- `src/pages/about.mjs`: "Transparency about our role"
- `src/pages/legal.mjs`: the Disclosures sections "Not investment advice" and "Our role"

## 4. About page content

| Item | Where |
|---|---|
| Company history (real) | `about.story` (HTML string) |
| Professional background / verifiable credentials (if any) | `about.professionalBackground` |
| Team members (optional, real people with real photos only) | `team` array |

## 5. Domain and technical

- [ ] Confirm the final domain and TLD in `site.url`. **`https://selfdirected401kdallas.com` is assumed.**
- [ ] Netlify → Domain management: add the domain, set the apex as primary, and let Netlify redirect `www`.
- [ ] Netlify → HTTPS: confirm the Let's Encrypt certificate is active.
- [ ] Netlify → Forms: enable form detection and set up an email notification (or an outgoing webhook) for the `consultation` form. Send a test submission.
- [ ] Optional: enable privacy-friendly analytics (`analytics.plausibleDomain`).
- [ ] Review each stock photo URL in `images` and confirm the alt text matches the image.
  (The photos are served from the Unsplash CDN. You can swap in other Unsplash or Pexels images by changing the ID.)
- [ ] Have the Privacy Policy, Terms and Disclosures reviewed by an attorney.
- [ ] Set `STRICT = "1"` in `netlify.toml` once everything above is complete.
