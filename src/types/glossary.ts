/**
 * Type definitions for the dynamic glossary.
 *
 * Schema is the canonical source for the cron's frontmatter output (D4.5 in BUILD-SPEC.md).
 * Familiarity is data-only in v1 — present in MD files for cron re-evaluation but not
 * displayed in the user-facing UI.
 */

export type TermType = "Concept" | "Tool" | "Role";

export type Topic =
  | "AI Models & Capabilities"
  | "Agents & Automation"
  | "Builder Tools"
  | "Patterns & Practices"
  | "Roles & Org"
  | "Business Models"
  | "Infrastructure";

export type Familiarity = "Common" | "Emerging" | "Specialist";

/** Frontmatter shape stored in /content/glossary/[slug].md */
export interface GlossaryFrontmatter {
  slug: string;
  term: string;
  type: TermType;
  topic: Topic;
  familiarity: Familiarity;
  aliases: string[];
  related: string[];
  dateAdded: string; // ISO date YYYY-MM-DD
  shortDef: string;
}

/** Full term record: frontmatter + body (paragraphs of long-form definition) */
export interface GlossaryTerm extends GlossaryFrontmatter {
  longDef: string[]; // body parsed into paragraphs
}

/** Available topics in display order. Source of truth for filter UI + cron prompt. */
export const TOPICS: Topic[] = [
  "AI Models & Capabilities",
  "Agents & Automation",
  "Builder Tools",
  "Patterns & Practices",
  "Roles & Org",
  "Business Models",
  "Infrastructure",
];

export const TERM_TYPES: TermType[] = ["Concept", "Tool", "Role"];
export const FAMILIARITIES: Familiarity[] = ["Common", "Emerging", "Specialist"];

/** Type guard helpers for runtime validation of cron-generated frontmatter. */
export function isTermType(v: unknown): v is TermType {
  return typeof v === "string" && (TERM_TYPES as string[]).includes(v);
}
export function isTopic(v: unknown): v is Topic {
  return typeof v === "string" && (TOPICS as string[]).includes(v);
}
export function isFamiliarity(v: unknown): v is Familiarity {
  return typeof v === "string" && (FAMILIARITIES as string[]).includes(v);
}
