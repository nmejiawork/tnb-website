/**
 * Glossary data layer.
 *
 * Reads MD files from /content/glossary/*.md at build time, parses frontmatter,
 * and returns typed term records. Used by both the index page and the per-term page.
 *
 * Treats the filesystem as the database (D4.1 in BUILD-SPEC.md). All reads happen
 * at build time on the server. Never imported into client components.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type {
  GlossaryFrontmatter,
  GlossaryTerm,
  Topic,
  TermType,
  Familiarity,
} from "@/types/glossary";
import {
  isFamiliarity,
  isTermType,
  isTopic,
} from "@/types/glossary";

const CONTENT_DIR = path.join(process.cwd(), "content", "glossary");

/** Lightweight in-process cache so repeated calls (index + per-term) don't re-read disk. */
let cachedTerms: GlossaryTerm[] | null = null;

function paragraphsFromBody(body: string): string[] {
  // Split on blank lines, trim, drop empties. Preserves intentional paragraph structure.
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

/**
 * Validates and coerces frontmatter into a typed GlossaryFrontmatter.
 * Returns null on malformed input — lets callers skip bad files without crashing the build.
 */
function validateFrontmatter(fm: Record<string, unknown>): GlossaryFrontmatter | null {
  const slug = fm.slug;
  const term = fm.term;
  const type = fm.type;
  const topic = fm.topic;
  const familiarity = fm.familiarity;
  const aliases = fm.aliases;
  const related = fm.related;
  const dateAdded = fm.dateAdded;
  const shortDef = fm.shortDef;

  if (typeof slug !== "string" || slug.length === 0) return null;
  if (typeof term !== "string" || term.length === 0) return null;
  if (!isTermType(type)) return null;
  if (!isTopic(topic)) return null;
  if (!isFamiliarity(familiarity)) return null;
  if (typeof shortDef !== "string" || shortDef.length === 0) return null;

  // dateAdded: accept Date object (yaml date) or ISO string
  let dateString: string;
  if (dateAdded instanceof Date) {
    dateString = dateAdded.toISOString().slice(0, 10);
  } else if (typeof dateAdded === "string" && dateAdded.length > 0) {
    dateString = dateAdded;
  } else {
    return null;
  }

  // aliases & related: accept missing/null as empty arrays; otherwise must be string[]
  const aliasArr = Array.isArray(aliases)
    ? aliases.filter((a): a is string => typeof a === "string" && a.length > 0)
    : [];
  const relatedArr = Array.isArray(related)
    ? related.filter((r): r is string => typeof r === "string" && r.length > 0)
    : [];

  return {
    slug,
    term,
    type: type as TermType,
    topic: topic as Topic,
    familiarity: familiarity as Familiarity,
    aliases: aliasArr,
    related: relatedArr,
    dateAdded: dateString,
    shortDef,
  };
}

/** Read all glossary terms from disk. Cached per-process. */
export function getAllTerms(): GlossaryTerm[] {
  if (cachedTerms) return cachedTerms;

  if (!fs.existsSync(CONTENT_DIR)) {
    cachedTerms = [];
    return cachedTerms;
  }

  const filenames = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const terms: GlossaryTerm[] = [];

  for (const filename of filenames) {
    const fullPath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const parsed = matter(raw);
    const fm = validateFrontmatter(parsed.data as Record<string, unknown>);
    if (!fm) {
      // Malformed term — log to stderr but don't break the build.
      // The cron should never produce these; if it does, we'll see in logs and fix.
      console.warn(`[glossary] Skipping malformed frontmatter in ${filename}`);
      continue;
    }
    // Defense in depth: filename slug should match frontmatter slug.
    const fileSlug = filename.replace(/\.md$/, "");
    if (fileSlug !== fm.slug) {
      console.warn(
        `[glossary] Slug mismatch in ${filename} (frontmatter: "${fm.slug}"). Using frontmatter value.`,
      );
    }
    terms.push({
      ...fm,
      longDef: paragraphsFromBody(parsed.content),
    });
  }

  cachedTerms = terms;
  return cachedTerms;
}

/** Get a single term by slug. Returns null if not found. */
export function getTermBySlug(slug: string): GlossaryTerm | null {
  return getAllTerms().find((t) => t.slug === slug) ?? null;
}

/** All slugs (for generateStaticParams). */
export function getAllSlugs(): string[] {
  return getAllTerms().map((t) => t.slug);
}

/** Days since dateAdded, given today. Returns 0 minimum. */
export function daysSinceAdded(dateAdded: string, today: Date = new Date()): number {
  const added = new Date(dateAdded + "T00:00:00Z");
  const todayUTC = new Date(today.toISOString().slice(0, 10) + "T00:00:00Z");
  const diff = Math.floor((todayUTC.getTime() - added.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

/** Human-readable "Added X" label, matching v4 mockup conventions. */
export function addedLabel(dateAdded: string, today: Date = new Date()): string {
  const d = daysSinceAdded(dateAdded, today);
  if (d < 1) return "today";
  if (d === 1) return "1 day ago";
  if (d < 30) return `${d} days ago`;
  if (d < 60) return "1 month ago";
  return `${Math.round(d / 30)} months ago`;
}

/** Resolve related-term slugs to their term records, dropping any missing. */
export function getRelatedTerms(slugs: string[]): GlossaryTerm[] {
  if (slugs.length === 0) return [];
  const all = getAllTerms();
  const out: GlossaryTerm[] = [];
  for (const s of slugs) {
    const t = all.find((x) => x.slug === s);
    if (t) out.push(t);
  }
  return out;
}
