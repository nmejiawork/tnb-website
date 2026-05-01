# BUILD-SPEC — Dynamic Glossary
*Last updated: May 1, 2026*
*Status: Pre-build, Track 1 (Strategic Intent) in progress*

## What This Is

Working spec for the Dynamic Glossary feature on thenewbuilder.ai. Captures Brian's raw vision, locked decisions, open questions, and out-of-scope items. Updated continuously as we interview through the spec. Not a formal PM-BRIEF (those go to Nico); this is Brian + Claude's pair-build source of truth that survives session breaks.

## Process

1. Brian brain-dumped raw vision (captured below verbatim)
2. Claude actively read the dump, surfacing tensions, gaps, and hand-waves
3. Surgical interview — one focused question at a time, gated by track
4. Locked decisions migrate from Open Questions → Decision Log
5. No code until all five tracks are clean: Strategic Intent → Content Scope → UX/IA → Technical Architecture → Edges

## Raw Vision (Brian — May 1, 2026, verbatim)

> What I'm trying to do on the one hand is add value to the TNB website. Right now it's really just a landing page. And I want to give people something to do there, which is a little bit sticky. But also, I realized that for myself, and for the philosophy of the new builder, I'm trying to have a big umbrella where there's something for everyone, whether you're a hobbyist or a hardcore hacker. And there's so much terminology and it's changing all the time, that I would love if there was a way for people to go there and just look stuff up. So for example, Scott, who's an expert in the Slack group, is frequently using phrases, some of which are not that complicated like an artifact, versus some things I just saw today, I think it was FDE — I have no idea what it means. And in fact, last week, maybe didn't mean anything because these words are coming into usage so frequently. So I imagine a place that there would be some central database of all these terms, maybe classified in different ways, things like concepts, skills, commands, connectors. I don't know. You know, all the different things that you might use. Also, some of the things you might use in a business context. But then also, I never want to make people feel like they're beginner, intermediate or [advanced] because I don't want anyone to feel dumb or not know what to do. But maybe they're tagged as level one, level two, level three in terms of complexity. Obviously, all the standard search and filter things. And then I even think of something where each one has a two to three line definition. And then there's a "read more" and then either a dynamically generated page or a page that exists and is just stored where you can get a more extended definition or maybe even a copilot where you can ask questions about that. And then another thing is I would like the list to be self-generating and self-healing — i.e. at some interval (weekly) it looks for more terms and concepts, adds them, refreshes existing ones, and deletes any that are no longer relevant. I do not need all of these things at least at stage one, but that's a brain dump of the vision.

## Tensions & Gaps Identified (Claude's active read)

1. **Personal tool vs. brand asset.** Brian framed it both as "for myself" (I want to look up FDE) and "for people" (sticky landing page). These are different products with different effort, risk, and editorial profiles. Decision needed before scoping.
2. **Self-generating without quality control = brand risk.** The most ambitious technical bet (weekly cron auto-discovers/refreshes/deletes terms) is also the riskiest editorially. If AI generates a wrong, off-brand, or hallucinated definition and ships it to the public site, that's TNB brand erosion. The "self-healing" promise needs an explicit quality model.
3. **"Read more" is three different products.** Stored page (low effort, static), dynamically generated page (medium effort, AI-written on demand), AI copilot Q&A (high effort, conversational). Pick one for v1.
4. **Source-of-truth for term universe is undefined.** Slack ingestion? Brian's manual additions? AI-generated from general knowledge? Each has different cost, privacy, and quality implications.
5. **Voice of definitions vs. TNB brand DNA.** TNB is "sharing notes, not dispensing wisdom." Encyclopedia voice is fundamentally guru voice. Auto-generated definitions tend toward neutral/encyclopedic. Tension to resolve.
6. **Complexity tagging vs. "no one feels dumb."** Even renaming "beginner" to "level 1" doesn't change the affordance — once it's filterable, it surfaces. Worth probing whether the goal is complexity sorting (which surfaces) or "I want to filter out stuff I already know" (which is a different feature).
7. **TNB-ness of the term universe.** "AI" is broad. The glossary could be generic AI/tech terms (commodity), or uniquely TNB-curated (brand asset). FDE is a builder-business term; "agentic loop" is technical. The universe needs a scoping principle.

## Decision Log

### Track 5 — Edges (default-specs)

**D5.1 — Empty / loading / error states.** Locked in v4 mockup.
- Empty state (no terms match filter+search): "No matches found." + Clear filters CTA.
- Loading: not needed for v1 — pages are statically generated, not runtime-fetched.
- 404 (someone visits `/glossary/foo` for a slug that doesn't exist): standard Next.js 404 page (existing site behavior).

**D5.2 — Analytics.** Vercel Analytics on each glossary page (if not already enabled site-wide, enable it). Track: term-page views (which terms get traffic), search queries, filter usage. No custom event taxonomy needed for v1 — basic page-view data tells us which terms are actually getting hit. Revisit at v1.1 once we have signal.

**D5.3 — Cross-linking from TNB external content (newsletter, podcast, Slack).** Manual editorial process for v1. No infrastructure required. Convention: when writing a newsletter / podcast show note / Slack post and a relevant glossary term comes up, paste the URL `thenewbuilder.ai/glossary/[slug]`. Per-term URLs are clean by design (D1.1) so this is friction-free. v1.1 may add a CMS-side helper that suggests relevant glossary links on draft content; deferred.

**D5.4 — Sitemap / robots.** Generate `/sitemap.xml` at build time including all glossary term pages. Even though SEO is nice-to-have not primary, the cost of sitemap generation is near-zero and any inbound bot or share-link unfurler benefits.

**D5.5 — Deprecation / deletion.** Manual in v1 (per D2.4 v1 cron scope). If a term needs removal, delete the MD file and commit. URL returns 404 — acceptable for v1 since manual deletions are rare and the action is intentional.

v1.1 implements deprecate-not-delete: term is marked `deprecated: true` in frontmatter, page still renders with a "this term is no longer in active use" notice, URL stays valid. Auto-deprecation by the cron also lives in v1.1.

**D5.6 — Contributor pipeline.** Explicitly v2. v1 is fully cron-driven + Brian-deletable. No user submissions, no external write surface.

### Track 4 — Technical Architecture

**D4.3 — Bootstrap: seed run at launch.** (May 1)
One-time bootstrap run with a higher-volume prompt: *"Generate ~30-40 most relevant terms a TNB-audience builder would expect to find in this glossary."* Same voice (D2.2), same scoping principle (D2.1), same web-grounding (D2.4). Generates ~30-40 MD files in one commit. After Brian's eyeball-pass, weekly cron takes over and grows from there.

Default cron timing: weekly, **Monday 8am ET**, ahead of any Tuesday newsletter send.

**D4.4 — Failure monitoring: Brain Inbox ping (default-spec).**
GitHub Actions workflow includes a final `if: failure()` step that posts to Brain Inbox via the existing brain-inbox `/api/notify` endpoint, recipient: Nico (matches Notification Routing Rules in master handoff — Brain Inbox is Nico's domain, infra alerts go there). Body includes which step failed and a link to the workflow run. Brian gets a B Things task if the failure persists across two consecutive runs.

**D4.5 — Frontmatter schema (default-spec).**
```yaml
---
slug: agentic-loop
term: Agentic loop
type: Concept                  # Concept | Tool | Role
topic: "Agents & Automation"   # one of D2.3 TOPICS
familiarity: Emerging          # Common | Emerging | Specialist (data only, not displayed in v1 UI)
aliases: []
related: ["mcp", "claude-code", "tool-use"]
dateAdded: 2026-04-28
shortDef: "When an AI doesn't just answer once..."
---

[long-form definition as markdown body, ~150-400 words, 2-4 paragraphs]
```

**D4.6 — Cron prompt design (default-spec, refined during build).**
Two prompts share most structure:
- **Bootstrap (one-time):** generate ~30-40 terms; full corpus.
- **Weekly:** existing glossary passed in context as "do not duplicate"; ask for ~5-10 NEW terms surfacing in the last 7 days.
Both: TNB-utility voice (D2.2), single-topic assignment, three-type assignment, alias enumeration, related-terms suggestions, ~150-400 word long-form. Web search tool enabled for grounding. Familiarity classification included as a model judgment (Common / Emerging / Specialist).

**D4.2 — Cron host: GitHub Actions.** (May 1)
Workflow file at `.github/workflows/glossary-cron.yml`. Scheduled trigger fires weekly. Runs in GitHub's infrastructure (no local dependency, no Vercel function timeout risk). Uses the action's built-in `GITHUB_TOKEN` to commit MD files — no PAT to manage or rotate. Anthropic API key + any auxiliary secrets stored as GitHub Actions secrets on the `brhecht/tnb-website` repo.

Rationale: 6-hour timeout (vs. Vercel Pro's 5-min) eliminates timeout risk for web-grounded Anthropic calls. Native commit auth eliminates PAT lifecycle burden.

**D4.1 — Storage layer: MD files in the `tnb-website` repo.** (May 1)
Path: `/content/glossary/[slug].md`. One file per term. Frontmatter holds metadata (term, type, topic, daysAgo, aliases, related, dateAdded, familiarity-as-data). Body holds short def + long def.

Pages statically generated at build time via Next.js App Router (`generateStaticParams` for `/glossary/[slug]`, dir-read for `/glossary` index).

Rationale: zero new infra, full git audit trail, SEO-perfect SSG, canonical Next.js content-site pattern. Cron commits MD files via GitHub API → Vercel auto-rebuilds → new terms appear live. Brian's machine is never in the loop.

Operational profile: cron runs entirely in cloud infrastructure. No local dependency. Failure-notification path will ping Brain Inbox if a run fails (matches B-Suite cron pattern).

### Track 3 — UX/IA

**D3.1 — `/glossary` index page: browse-first card grid.** (May 1)
All terms shown as a grid of cards. Top nav: search bar + sort (recency / A-Z) + filter (topic, familiarity). Card layout per D2.3 UI Intent: term + term-type badge + 2-3 line definition + topic + familiarity tags + date added (or "New" badge) + Read more →. Vibe: Lenny's tools directory / Notion templates gallery — discoverable, browsable, shows the substance.
- Featured-surfaces approach (C) deferred to v1.1 when term volume earns it.
- Search-first minimal (A) rejected — too austere for a sticky engagement surface.

**D3.3 — Search / filter / sort mechanics.** (May 1, default-spec)
- **Search:** live filter as you type, ~150ms debounce. Matches term name + aliases (definition-body match deferred to v1.1).
- **Sort:** simple dropdown. Default = Recency (newest first). Alternative = A–Z.
- **Filter:** pill chips below the search bar — Topic chips + Familiarity chips. Click to toggle, active state highlighted.
- **URL state:** `?topic=agents&familiarity=emerging&q=mcp` so filtered views are shareable in newsletters / Slack.
- **"Clear all"** button appears when any filter or search is active.
- **Empty state:** "No matches found" + Clear filters CTA.

**D3.4 — Mobile shape.** (May 1, default-spec)
- Single column card stack.
- Search bar full-width, sticky-on-scroll.
- Filter chips below search, horizontally scrollable.
- Sort dropdown collapses to icon button if cramped.
- Per-term page: same content, single column, larger touch targets, no toggles or hover-only affordances.
- All existing TNB design rules preserved (white bg, system fonts, no animations, gray accents).

**D3.6 — Visual lock (v4 mockup, May 1).**

Locked after iterative visual review (v1 → v4). Notable refinements during review:
- **NEW badge killed entirely.** Date-added in card meta covers freshness. Card head shows term + type pill only.
- **Familiarity removed from all user-facing UI** (no card display, no filter chip). Stays as backend metadata for cron logic; not exposed in v1.
- **Card meta strip simplified to `Added X ago`** only. Topic dropped from card display (already discoverable via filter chip when narrowed). Eliminates the "what's this small text?" ambiguity.
- **Sort: text-link toggles** (`Sort  Recency · A–Z`) — not a dropdown.
- **Search input: 280px fixed-width with magnifier icon, 26px height.** Common-design-practice sizing — not a stretched-flex affair.
- **Topic chips: small (10.5px / 3px×8px / radius-12) outlined pills.** Active state = filled black.
- **Auto-linking glossary terms inside long-form definitions.** Whole-word match including aliases, longest-first; self-references excluded; dotted-underline styling (solid on hover). Click navigates to the linked term's page.

**v1 page anatomies:**

`/glossary` (index):
> Nav (TNB wordmark left; Glossary/YouTube/LinkedIn/Contact right) → Page header (h1 "Glossary" + subtitle "Plain-English definitions of the terms builders are using right now. Updated weekly. AI-generated.") → Controls row (search 280px + sort text-toggles right) → Topic chips row (+ Clear all button when active) → Results count → 2-col card grid (desktop) / 1-col (mobile)

`/glossary/[slug]` (per-term):
> Nav → Breadcrumb (Glossary / Term) → Meta strip (TYPE pill · topic · Added X) → h1 title → "Also known as: ..." (italic, if aliases) → Short-def callout block (gray bg, left border) → Long-form definition (2-4 paragraphs, glossary terms auto-linked) → AI disclaimer (gray box, right after long-form) → Related terms section → Back to glossary link

**Card anatomy:**
> [Term name] · · · [TYPE pill]
> [2-3 line short definition]
> Added X ago
> Read more →

**Design constraints honored throughout:** White bg, black type, gray accents (#6b7280, #9ca3af, #e5e7eb, #f3f4f6, #fafafa), system fonts, no animations, no em dashes. Mobile responsive: single-column cards, full-width search, horizontally-scrollable filter chips.

**D3.5 — Homepage discoverability.** (May 1, default-spec)
- **Nav:** add "Glossary" link to right-side nav, before YouTube / LinkedIn / Contact. Hidden on mobile (matches existing nav behavior).
- **Homepage band:** small dedicated section between the 6-card "Builders Figuring it Out. Together." grid and the latest-YouTube embed. Single sentence + CTA button. Maintains the spare TNB aesthetic — no card decoration, just type.
- **Footer:** add "Glossary" link in the existing footer link set.

**D3.2 — Per-term page: article-style.** (May 1)
Page anatomy:
> Term (h1) → metadata strip (term-type badge, topic, familiarity, date) → short def (italic intro, same 2-3 lines as the card) → long-form definition (~150-400 words, 2-4 paragraphs) → AI disclaimer (near long-form, not in footer) → "Related terms" list → Back to glossary link

Aliases shown subtly ("also known as: Forward Deployed Engineer, FDE").

Rejected: tight reference card (A — wastes the cron's long-form generation), layered toggle (C — adds friction users don't need; they already chose to read more by clicking through).

Explicitly NOT in v1:
- Provenance to TNB content ("first heard on Episode 4") — needs content-corpus pipeline (deferred)
- Usage examples — adds AI-gen cost + editorial risk for marginal value
- Comments / feedback affordance — out of scope
- Edit-this-term link — out of scope (cron-managed)

### Track 1 — Strategic Intent

**D1.1 — Primary user at v1: the warm reader.** (May 1, refined)
NOT cold-SEO traffic. The primary user is already TNB-aware — clicking in from the newsletter ("for anyone who wants to know what OpenClaw is, click here"), the TNB Slack, podcast show notes, on-site cross-links, or browsing the site with pre-existing AI/builder interest. Implications:
- Per-term URLs matter (clean inbound links from newsletter/Slack/podcast), but SEO is nice-to-have, not the design driver.
- **In-context linking is THE discovery mechanism, not SEO.** Newsletter, Slack pastes, podcast show notes, and on-site cross-links carry the load. v1 design constraint, not v2 polish.
- Voice can be more conversational than encyclopedic. No SEO keyword stuffing.
- Assume baseline reader literacy — "explain to a TNB-curious reader who's heard the term in a TNB context," not "explain like I'm 5."
- Brian's personal lookup use case is a free byproduct, not a design driver.

**D1.2 — Strategic role: levels the playing field.** (May 1)
Materializes TNB's "big umbrella" claim. Homepage *says* hobbyist-to-hacker; glossary *proves* it by removing vocabulary as a barrier to entry. It's a public **resource**, not editorial content — sits adjacent to the "sharing notes" brand promise rather than competing with it.

**D1.3 — Quality firewall: AI-generation is acceptable + standard disclaimer.** (May 1)
Industry-standard "AI-generated, not fact-checked, may hallucinate" notice on every entry. Removes the brand-erosion risk by reframing the glossary as a utility surface, not curated editorial. This unlocks the self-generating mechanic.

**D1.4 — "Read more" mechanic: static stored page, auto-generated at term creation.** (May 1)
When a new term gets added to the glossary, the long-form page is generated once and stored. Refreshed when the term itself is refreshed by the weekly cron. **Not** generated on demand. **Not** a copilot.

**D1.5 — AI copilot Q&A: V2 stretch goal.** (May 1)
Out of scope for v1. Acknowledged as future enhancement.

**D1.6 — Refresh cadence: weekly cron does all three actions.** (May 1)
Discovers new terms, refreshes existing definitions, deletes terms no longer relevant. (Deletion logic parked for Track 4 — proposed rule: deprecate-not-delete to avoid 404s on linked URLs.)

### Track 2 — Content Scope

**D2.1 — Term universe scoping principle: B-refined "builder conversation universe."** (May 1)
Cron seed prompt language (from Brian, May 1):
> "Terms a builder would reasonably expect to run into in the course of building and having conversations of the sorts we're having on TNB Slack, reading in the LinkedIn posts of me and active users, some of whom are on the technical side. Things people hear about (e.g. 'OpenClaw') but might need a more precise description of."

Implications:
- NOT pure generic AI-builder vocabulary (would be commodity).
- NOT TNB-content-corpus-grounded (would require a content pipeline; deferred).
- IS a curated-by-prompt slice of the AI/builder zeitgeist scoped to what TNB-adjacent conversations actually surface.
- Slack scraping explicitly out of scope for v1 (acknowledged "would be cool eventually, complicated").
- Universe should skew toward terms with TNB-adjacency: AI building, AI products, AI startups, technical-but-accessible. NOT crypto, NOT general SaaS jargon, NOT generic startup vocabulary unless AI-relevant.

**D2.2 — Voice: TNB-utility (option A).** (May 1)
Plain English, light, doesn't claim authority. Threads the needle between "no one feels dumb" and "doesn't read like Wikipedia." Compatible with the AI-generated disclaimer (utility voice doesn't pretend to be Brian). Sample tone:
> *"Agentic loop: when an AI doesn't just answer once, it keeps going. The model takes an action, sees what happens, decides what to do next, and repeats until the job is done."*

**D2.3 — Tag architecture: three real dimensions + three pieces of structural metadata.** (May 1)

Three real (filterable, mutable) dimensions:

| Dimension | Values | Mutability |
|---|---|---|
| **Topic** | One of ~7 controlled buckets (provisional, refined after first cron run) | Mutable — cron can re-bucket on refresh |
| **Familiarity** | Common / Emerging / Specialist | **Mutable — re-evaluated weekly by cron** |
| **Recency** | New this week / Recent / Established | Auto-derived from `created_at` |

Three pieces of structural metadata:

| Field | Purpose |
|---|---|
| **Term type** | Concept / Tool / Role — visual identity (icon/badge) + secondary filter |
| **Aliases** | Array of synonyms/alternate spellings/expansions (e.g. `["FDE", "Forward Deployed Engineer"]`) — solves acronym/full-form ambiguity, powers search |
| **Related terms** | Array of ~3–5 slugs — powers "you might also want to know" cross-links |

**Provisional Topic buckets (refine after first cron run):**
- AI Models & Capabilities (LLM, context window, RLHF)
- Agents & Automation (agentic loop, MCP, tool use)
- Builder Tools (Cursor, Lovable, Vercel, Claude Code)
- Patterns & Practices (vibecoding, eval-driven dev)
- Roles & Org (FDE, AI engineer)
- Business Models (PMF in AI era, tiny team thesis)
- Infrastructure (vector DB, embeddings, RAG, fine-tuning)

**Term Types (three, mutually exclusive):**
- **Concept** — abstract ideas, patterns, practices
- **Tool** — software, products, platforms (no Product/Tool split — version specificity goes in the entry text)
- **Role** — job titles / functions

**Familiarity rename rationale:** "Level 1/2/3" tags the reader. "Common/Emerging/Specialist" tags the term. Same signal, no shame. This is what "no one feels dumb" looks like architecturally.

**Familiarity re-evaluation logic:** Weekly cron asks "Has the general builder population's familiarity with this term shifted in the last 90 days?" When LLM moves Specialist → Emerging → Common over time, the cron catches it. **This is what self-healing actually means for taxonomy.**

**What we're explicitly NOT doing:**
- No reader-sophistication labeling (we tag the term, never the reader)
- No multi-topic tagging (single topic per term; related-terms carries cross-cluster relationships)
- No "Acronym" or "Product" or "Pattern" as separate term types (collapsed to Concept/Tool/Role; aliases handle name variants)

### UI Intent (banked for Track 3)

From Brian, May 1: card must stay readable. Intended card layout:
> Term • Term Type badge • 2–3 line description • Topic + Familiarity tags • Date added (or "New" badge) • Read more →

Top-nav affordances at minimum: search, sort by recency, filter by topic, filter by familiarity. Exact UI in Track 3.

**D2.4 — Quality grounding: web-search-grounded via Anthropic's built-in web search tool (B1).** (May 1)
Cron uses the Anthropic API with `tools: [{type: "web_search"}]` enabled so the model can ground definitions and discover new terms from current information. NOT a custom search pipeline (that's the 3-5x complexity we're avoiding).

**Why this matters strategically:** Model-only knowledge cannot discover new terms — it only knows what was in its training cutoff. Discovery is Brian's #1 priority among cron functions ("adding new terms is the most important thing... that's the whole point"). Grounding is therefore mandatory for the most-important function, not optional polish.

**Build risk is manageable.** Anthropic's built-in tool ≈ 20% more code than non-grounded. Cost ≈ rounding error.

**v1 cron scope (respecting Brian's priority hierarchy: discovery > self-healing):**

| Cron job | v1 | v1.1+ |
|---|---|---|
| Discover new terms (must-have) | ✅ Web-grounded discovery prompt | refined |
| Generate definition for new term | ✅ Web-grounded | refined |
| Refresh existing terms | ⏭️ Skip in v1 (or light model-only pass) | ✅ Web-grounded refresh |
| Re-classify familiarity | ⏭️ Skip in v1 | ✅ Quarterly cron pass |
| Deprecate stale terms | ⏭️ Manual in v1 | ✅ Auto with deprecate-not-delete |

This is honest scope: real "self-healing" arrives in v1.1 once discovery is proven. v1 is "self-generating" (discovery works), not yet "self-healing" (refresh/re-classify/deprecate automation deferred).

## Open Questions (Interview Queue)

### Track 1 — Strategic Intent ✅ LOCKED (see Decision Log)

### Track 2 — Content Scope ✅ LOCKED (see Decision Log)

### Track 3 — UX/IA ✅ LOCKED (see Decision Log; visual confirmation step before Track 4)

### Track 4 — Technical Architecture ✅ LOCKED (see Decision Log)

### Track 5 — Edges ✅ LOCKED (see Decision Log)

## Out of Scope (v1)

- AI copilot Q&A on term pages (V2 stretch goal — D1.5)
- On-demand long-form definition generation (decided to pre-generate and cache statically — D1.4)
- Slack scraping for term sourcing (D2.1 — "would be cool eventually, complicated")
- Automatic refresh of existing definitions (D2.4 — v1.1)
- Automatic re-classification of familiarity (D2.4 — v1.1)
- Automatic deprecation of stale terms (D2.4 — manual in v1, auto in v1.1)
- Multi-topic tagging (single topic + related-terms array carries cross-cluster — D2.3)
- TNB-content-corpus-grounded discovery (deferred — D2.1)
