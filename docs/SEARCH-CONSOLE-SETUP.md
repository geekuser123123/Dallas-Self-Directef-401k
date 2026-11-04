# Google Search Console Setup

> Search Console verification is **not** done until the domain owner completes the
> steps below and Google confirms it. Nothing in this repository verifies it automatically.

## What the website already provides

- HTTPS-only delivery on Netlify, with an HSTS header in `netlify.toml`
- `https://selfdirected401kdallas.com/sitemap.xml`, generated on every build, listing only indexable pages
- `https://selfdirected401kdallas.com/robots.txt`, which allows all crawlers and points to the sitemap
- A self-referencing canonical URL on every indexable page
- A unique `<title>` and meta description on every page (the build fails if two pages share one)
- Clean internal links (every internal link is checked during QA) and a custom `404.html`
- `noindex` on the thank-you and 404 pages only
- A responsive, mobile-friendly layout
- JSON-LD structured data: Organization, WebSite, WebPage, BreadcrumbList, Service, Article and FAQPage

## Step 1: Deploy and connect the domain

1. Deploy the repository to Netlify. Build settings come from `netlify.toml`: `node build.mjs` → `dist`.
2. In Netlify → **Domain management**, add `selfdirected401kdallas.com` (the confirmed TLD) and `www`.
3. Point DNS to Netlify, either with Netlify DNS or with the records Netlify shows for your registrar.
4. Wait for the HTTPS certificate. Then check that these load over `https://`:
   - `https://selfdirected401kdallas.com/`
   - `https://selfdirected401kdallas.com/sitemap.xml`
   - `https://selfdirected401kdallas.com/robots.txt`
   - `http://` and `www.` versions should redirect to the canonical `https://` apex.

## Step 2: Add a Domain property

1. Open <https://search.google.com/search-console> and sign in with the Google account
   that will **also manage the Google Business Profile**. This is ideally a business-owned
   account, not a personal one.
2. Click **Add property** → **Domain** and enter `selfdirected401kdallas.com`. Don't include
   `https://` or `www`.
3. Google shows a **TXT record** such as `google-site-verification=XXXXXXXX`. Copy it.

## Step 3: Add the DNS TXT record

At your DNS provider (Netlify DNS or your registrar):

| Type | Host / Name | Value | TTL |
|---|---|---|---|
| TXT | `@` (the root domain) | `google-site-verification=XXXXXXXX` | default |

Don't remove any existing TXT records, such as SPF for email. A domain can have several.

## Step 4: Verify

1. Wait for DNS propagation. This is often minutes but can take up to 48 hours.
2. Back in Search Console, click **Verify**. If it fails, wait and try again. You can
   check the record with `dig TXT selfdirected401kdallas.com +short`.
3. **Leave the TXT record in place permanently.** Removing it un-verifies the property.

## Step 5: Submit the sitemap

Search Console → **Sitemaps** → enter `sitemap.xml` → **Submit**.

## Step 6: Check indexing

- **URL Inspection**: inspect the homepage and `/self-directed-401k/`, then click **Request indexing**.
- **Pages report**: check for "Excluded" or "Error" pages over the next few weeks.
  The thank-you and 404 pages are excluded on purpose.
- Test structured data with the [Rich Results Test](https://search.google.com/test/rich-results)
  and the [Schema.org Validator](https://validator.schema.org/).
  Google currently shows FAQ rich results only for a limited set of sites. The FAQ markup is
  still valid, but it may not appear as a rich result.

## Step 7: Ongoing

- Rebuild after any content change. The sitemap `lastmod` updates automatically.
- Keep the TXT record and the Google account access.
- Add other owners or users with **Settings → Users and permissions** instead of sharing passwords.
