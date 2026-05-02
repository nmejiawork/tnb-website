# HANDOFF — TNB Website (thenewbuilder.ai)
*Last updated: May 1, 2026*

## Project Overview
The New Builder homepage at thenewbuilder.ai. Public-facing website for the TNB brand. **LIVE as of April 15, 2026.**

## Tech Stack
Next.js 16.2.1 (App Router), Tailwind CSS 4, Vercel hosting. Email capture wired to Beehiiv via `/api/subscribe`. Bootstrapped from the `tnb-coming-soon` branch of `hc-website`.

## Repo History
Created April 15, 2026 to separate the TNB website from `hc-website`. Previously, the thenewbuilder.ai placeholder lived on the `tnb-coming-soon` branch of `brhecht/hc-website`. That branch is now deprecated and deleted.

## Folder Structure
- `src/app/page.tsx` — main homepage (now includes Glossary nav link, glossary CTA band, footer link)
- `src/app/layout.tsx` — metadata (title: "The New Builder")
- `src/app/globals.css` — base styles (system font, no animations)
- `src/app/icon.svg` — favicon: 5x5 orange grid mark (#EE7C2A / #B0431F checkerboard, 30x30 viewBox)
- `src/app/api/subscribe/route.ts` — Beehiiv email capture endpoint
- `src/app/api/latest-video/route.ts` — YouTube RSS fetch, returns latest video ID (1h cache)
- `src/app/glossary/page.tsx` — `/glossary` index (SSG, browse-first card grid)
- `src/app/glossary/GlossaryControls.tsx` — client component: search/sort/topic-filter with URL state
- `src/app/glossary/[slug]/page.tsx` — per-term article (SSG via generateStaticParams). Top "← Back to glossary" link, clickable topic in meta strip
- `src/app/sitemap.ts` — auto-generated sitemap, includes all glossary terms
- `src/app/robots.ts` — robots.txt
- `src/lib/glossary.ts` — filesystem reader for `/content/glossary/*.md`
- `src/lib/glossary-autolink.ts` — whole-word cross-reference linkifier (longest-first, self-excluding)
- `src/types/glossary.ts` — TypeScript types + topic/type/familiarity taxonomies
- `content/glossary/[slug].md` — one Markdown file per glossary term (cron-managed, frontmatter + body)
- `scripts/glossary-cron.mjs` — Anthropic-backed cron script (bootstrap + weekly modes), web-search-grounded
- `.github/workflows/glossary-cron.yml` — GitHub Actions workflow (Mon 13:00 UTC schedule + manual workflow_dispatch)
- `BUILD-SPEC.md` — locked spec for the dynamic glossary feature (5 tracks, all decisions logged)
- `public/images/brian.png` — Brian's headshot (hero photo, ~4MB)

## Current Status
**LIVE at thenewbuilder.ai** — deployed April 15, 2026 via Vercel CLI to project `brian-hechts-projects/newbuilder`.

**Dynamic Glossary feature (May 1):** SHIPPED. Live at `/glossary` with 42 bootstrap terms. Weekly cron is on auto-pilot — fires Mondays 13:00 UTC, generates ~5-10 new terms, dedupes against existing, commits + auto-deploys via Vercel. Failure pings Nico's Brain Inbox.

Pending:
1. Add Beehiiv env vars in Vercel (subscribe form returns error without them): `BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID`
2. Push code to `brhecht/tnb-website` on GitHub + connect to Vercel project for auto-deploys (Brian needs to add Nico as collaborator)
3. (Operational reminder) The Anthropic API key used by the glossary cron was exposed in chat during setup. Recommended to rotate at console.anthropic.com when convenient, then update the GitHub Secret + the Vercel env vars on hc-funnel and builder-bot (which share the same key).

## Homepage Sections (Approved April 15)
1. **Nav** — "THE NEW BUILDER" wordmark left, YouTube/LinkedIn/Contact right (hidden mobile)
2. **Hero** — Brian's photo left, bold tagline right: "Navigating the AI era. Together." + one-liner
3. **Why I'm building this** — stacked layout, max-width 720px
4. **Builders Figuring it Out. Together.** — 3x2 card grid. Podcast + YouTube link to YouTube channel. Newsletter links to #subscribe anchor. War Room, Meetups, Curated Events are non-clickable.
5. **Latest Episode** — YouTube embed (auto-fetched via `/api/latest-video` from channel RSS, fallback `bKFXxGx6JhI`)
6. **Stay in the loop** — email capture (Email + First name + Subscribe), wired to Beehiiv (utm_source: "newbuilder-homepage")
7. **About Brian** — short bio
8. **Footer** — copyright left, LinkedIn/YouTube/Email links right

## Design Decisions
- White background, black type, gray accents (#6b7280, #9ca3af, #e5e7eb dividers)
- System fonts only: -apple-system stack, no Google Fonts
- Photo: rounded corners (border-radius 16px), hero LEFT column
- No animations or transitions
- No em dashes in copy
- Mobile: hero stacks (photo top), grid 2-col tablet / 1-col phone, nav links hidden

## Environment Variables (Vercel)
```
BEEHIIV_API_KEY=          # from Beehiiv Settings > API
BEEHIIV_PUBLICATION_ID=   # from Beehiiv dashboard URL: pub_xxxxxxxx
```

## Deploy
Site is live. Deployed via `vercel deploy --prod` from local repo to Vercel project `brian-hechts-projects/newbuilder`.

**To add Beehiiv env vars:**
```bash
cd ~/Developer/clients/hc/B-Suite/tnb-website
vercel env add BEEHIIV_API_KEY production
vercel env add BEEHIIV_PUBLICATION_ID production
vercel deploy --prod
```

**To connect GitHub (for auto-deploys):**
1. Brian adds Nico as collaborator on `brhecht/tnb-website`
2. `git remote add origin https://github.com/brhecht/tnb-website.git && git push -u origin main`
3. In Vercel dashboard: Settings > Git > Connect to `brhecht/tnb-website`

## Known Bugs / Issues
None.

## Backlog
- Wire War Room, Meetups, Curated Events cards when those pages exist
- Add Beehiiv env vars (`BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID`) in Vercel — subscribe form broken until then
- Replace `src/app/icon.svg` with the canonical TNB icon source asset (current is a recreation from a screenshot Brian shared April 30 — close but not pixel-perfect)

## Session Log
### May 1, 2026 — Dynamic Glossary feature shipped end-to-end
- **What shipped:** Full dynamic glossary feature per `BUILD-SPEC.md` (5 spec tracks locked, all decisions logged in repo). Live at `thenewbuilder.ai/glossary` with 42 terms generated by the bootstrap cron run.
  - **Pages:** `/glossary` (SSG browse-first card grid w/ search, sort, topic-filter, URL state, mobile responsive); `/glossary/[slug]` (article-style per-term pages w/ glossary-term auto-linking in long-form); `/sitemap.xml` (auto-includes all term pages); `/robots.txt`.
  - **Data layer:** Markdown files in `/content/glossary/[slug].md` with strict frontmatter; gray-matter for parsing; in-process cache.
  - **Cron:** GitHub Actions workflow with weekly schedule (Mon 13:00 UTC) + manual `workflow_dispatch` for bootstrap or weekly modes. Calls Anthropic API (claude-sonnet-4-6) with `web_search_20250305` tool grounded. Streams response (avoids 10-min synchronous timeout). Strict JSON validation. Commits new MD files + auto-deploys via Vercel. Failure pings Brain Inbox `/api/handoff-notify` (recipient: nico).
  - **Homepage discoverability:** Glossary nav link, dedicated CTA band ("New AI words coming at you fast?") between 6-card grid and YouTube embed, footer link.
  - **Bootstrap output (May 1):** 42 terms across 7 topics — heaviest in AI Models & Capabilities (11), Agents & Automation (9), Patterns & Practices (9). Web-grounded (e.g. FDE entry cites the FT report on 800% growth in 2025). Voice nailed the locked TNB-utility tone.
  - **Per-term UX iteration:** Replaced bottom-only back link with prominent "← Back to glossary" at top of article (where breadcrumb was). Made the topic in the meta strip clickable — lands on `/glossary?topic=...` filtered index. Type badge stays static (no hidden filter dimension).
- **Known issues:**
  - Mount has stale `src/app/favicon.ico` (FUSE EPERM blocks deletion locally; absent in repo so deploys are correct — pure local-mount nuisance).
  - Anthropic API key exposed in chat during GitHub Secret setup — see Pending #3 above.
- **Build issues caught and fixed during the session (chronological):**
  - PAT `workflow` scope missing → user updated `cowork` PAT to add `workflow` scope; workflow file now pushable from Cowork.
  - `gray-matter` dependency missing from package.json (had been installed without `--save`) → fixed.
  - Cron model name `claude-sonnet-4-5` (stale) → corrected to `claude-sonnet-4-6`.
  - Anthropic SDK requires streaming for long-running calls → switched from `messages.create()` to `messages.stream()` + `finalMessage()`.
- **Next:** Brian's content-completeness audit (review the 42 corpus terms, identify gaps or unwanted entries, re-run `weekly` workflow with adjustments if needed). Then weekly cron is hands-off forever.

### April 30, 2026 — Favicon swapped to TNB orange grid mark
- **What shipped:** Replaced default Next.js `favicon.ico` with `src/app/icon.svg` — 5x5 orange grid (#EE7C2A / #B0431F), strict checkerboard, 30x30 viewBox. Next.js App Router auto-serves it at `/icon.svg`. Old default favicon.ico removed.
- **Known issues:** Pattern is a recreation from a screenshot Brian shared — if the canonical TNB icon source asset surfaces, swap `icon.svg` content directly. At 16px the grid reads as orange static (expected for any detailed favicon).
- **Next:** Beehiiv env vars still pending (independent of this change).

### April 15, 2026 — Homepage built, deployed, and iterated
- **What shipped:** Full Next.js implementation deployed to thenewbuilder.ai. All sections from approved design (nav, hero, story, 6-card grid, YouTube embed, subscribe, bio, footer).
- Brian's photo: clean headshot (BRH.png, no watermark), rounded corners 16px.
- Podcast card links to Riverside episode (`share.riverside.fm/episode/7e6dc792...`).
- YouTube + nav/footer links → `@HumbleConvictionStartups`.
- Contact email → `brian@thenewbuilder.ai`.
- War Room / Meetups / Curated Events: non-clickable (`cursor: default`).
- `tnb-coming-soon` branch deleted from hc-website (local + remote).
- `bsync.sh` v2.1 conflict resolved in bhub, pushed.
- `HANDOFF-MASTER.md` updated and pushed to bhub.
- Vercel project renamed `newbuilder` → `thenewbuilder`.
- Code on `nmejiawork/tnb-website` (transfer to `brhecht` pending).
- **Next:** Brian provides Beehiiv API key + publication ID. Brian adds Nico as collaborator for GitHub auto-deploy.

### April 27, 2026 — YouTube embed → auto-update via RSS
- **What shipped:** Eliminado `LATEST_VIDEO_ID` hardcodeado. El embed ahora se auto-actualiza al video más reciente del canal `@the_new_builder` (channel ID: `UCqAhVRJlLyY86vWAE5s_xhA`).
- Nuevo endpoint `/api/latest-video`: fetcha RSS de YouTube, cachea 1 hora en Vercel, fallback `bKFXxGx6JhI`. `page.tsx` usa `useEffect` para llamarlo on mount.
- `YT_CHANNEL` corregido de `@HumbleConvictionStartups` → `@the_new_builder`.
- Resolvió conflicto de merge (remote tenía `fbAOEBio9QY`, eliminado a favor del sistema dinámico).
- **Resultado:** Cuando Brian suba un episodio nuevo, la página lo muestra en ≤1 hora sin tocar código.
- **Next:** Beehiiv env vars siguen pendientes.

### April 20, 2026 — Homepage YouTube embed swapped
- **What shipped:** `LATEST_VIDEO_ID` updated from `_3601d3OpYY` (HC pitching video) to `fbAOEBio9QY` in `src/app/page.tsx`. Latest Episode section on thenewbuilder.ai now shows the new video.
- **Known issues:** Beehiiv env vars (`BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID`) still missing in Vercel Production — subscribe form still broken (5 days). Task open in B Things (Today, HC Admin). Unrelated to this change.
- **Next:** Add Beehiiv env vars + redeploy. GitHub repo transfer `nmejiawork` → `brhecht` still pending.
