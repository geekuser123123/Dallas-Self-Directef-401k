# Dallas Self-Directed 401(k): Website

A static, responsive website about Self-Directed 401(k) education for Dallas business
owners. It has no dependencies and builds with Node in under a second, and it deploys
to **Netlify**.

## Quick start

```bash
node build.mjs          # builds ./dist and lists any missing business info
STRICT=1 node build.mjs # pre-launch check: fails if placeholders remain
```

To preview it locally, run `npm run serve` or serve `dist/` with any static server.

## Deploy to Netlify

1. In Netlify, choose **Add new site → Import from Git** and select this repository.
   The build command (`node build.mjs`) and publish directory (`dist`) come from `netlify.toml`.
2. Under **Site configuration → Forms**, enable form detection. The `consultation` form
   on `/contact/` is captured automatically, with honeypot spam filtering. Set up email
   notifications or an outgoing webhook there.
3. The site currently runs at **https://dallas-self-directed-401k.netlify.app** (`site.url`).
   When a custom domain is connected later, update `site.url` in `site.config.mjs` and push.

## Where things live

| Path | Purpose |
|---|---|
| `site.config.mjs` | **Single source of truth** for business name, phone, email, address, hours, services and domain |
| `src/pages/` | Page content: home, about, services, self-directed-401k, contact, legal |
| `src/layout.mjs` | Shared `<head>` (SEO meta, canonical, Open Graph, JSON-LD), header and footer |
| `src/lib.mjs` | Helpers: placeholders, images, schema, services list |
| `src/assets/` | CSS, JS (about 3 KB, no frameworks), self-hosted fonts, logo, social share image |
| `src/static/` | Favicons, copied to the site root |
| `build.mjs` | Renders pages and generates `sitemap.xml` and `robots.txt` |
| `netlify.toml` | Build settings, security headers (CSP, HSTS), caching, redirects |
| `docs/` | Launch checklist, Search Console setup, Google Business Profile checklist |

## Pages

| URL | Title |
|---|---|
| `/` | Dallas Self-Directed 401(k) \| Retirement Plan Education |
| `/self-directed-401k/` | Self-Directed 401(k) Dallas TX \| Retirement Plan Guide |
| `/services/` | Self-Directed 401(k) Services \| Dallas, TX |
| `/about/` | About Us \| Dallas Self-Directed 401(k) |
| `/contact/` | Contact Dallas Self-Directed 401(k) \| Dallas, Texas |
| `/privacy-policy/`, `/terms/`, `/disclosures/` | Legal pages |
| `/thank-you/`, `/404.html` | Utility pages (`noindex`) |

## Accuracy principles

- No invented address, phone, hours, credentials, team, reviews, ratings or history.
  Missing facts appear as highlighted `[placeholders]`, and the build lists them.
- `LocalBusiness`/`ProfessionalService` schema, the street address and the map appear
  **only** when `locationType: 'office'` and a real address is supplied.
- Services marked "only if actually offered" (plan setup, existing plan support) are off
  until you enable them.
- No stock photography: visuals are custom, code-built diagrams in the brand palette. Fonts are self-hosted (no third-party requests).

## Before launch

Read **[docs/LAUNCH-INFORMATION-REQUIRED.md](docs/LAUNCH-INFORMATION-REQUIRED.md)**, then follow
**[docs/SEARCH-CONSOLE-SETUP.md](docs/SEARCH-CONSOLE-SETUP.md)** and
**[docs/GOOGLE-BUSINESS-PROFILE-CHECKLIST.md](docs/GOOGLE-BUSINESS-PROFILE-CHECKLIST.md)**.
