/**
 * Auto-linking helper for glossary cross-references in long-form definitions (D1.4 / D3.6).
 *
 * Given a paragraph string + the current term's slug + the corpus of all terms,
 * produces an array of React-renderable segments where any whole-word mentions of
 * other glossary terms (or their aliases) are wrapped as Link nodes.
 *
 * Self-references are excluded. Longest-match-first to avoid partial overlaps
 * (e.g., "Claude Code" wins over "Claude" if both exist).
 *
 * Pure function — no React import needed here. Caller is responsible for rendering
 * the segments into JSX (Link components for `link` segments, plain text for `text`).
 */

import type { GlossaryTerm } from "@/types/glossary";

export type Segment =
  | { type: "text"; value: string }
  | { type: "link"; value: string; slug: string };

interface MatchTarget {
  name: string;
  slug: string;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Build a sorted list of (name, slug) pairs from the corpus, excluding the current term. */
function buildTargets(terms: GlossaryTerm[], currentSlug: string): MatchTarget[] {
  const targets: MatchTarget[] = [];
  for (const t of terms) {
    if (t.slug === currentSlug) continue;
    targets.push({ name: t.term, slug: t.slug });
    for (const a of t.aliases) {
      // Avoid pure-substring duplicates if alias === term (case-insensitive).
      if (a.toLowerCase() === t.term.toLowerCase()) continue;
      targets.push({ name: a, slug: t.slug });
    }
  }
  // Longest first so multi-word matches win over their constituent single words.
  targets.sort((a, b) => b.name.length - a.name.length);
  return targets;
}

/**
 * Tokenizes a paragraph into segments, replacing whole-word matches of glossary
 * terms with link segments.
 *
 * Strategy: walk the targets longest-first. For each target, scan the current
 * segments for whole-word matches in any `text` segment, splitting it into
 * (text, link, text, ...) as we go. `link` segments are not re-scanned, so
 * once a piece of text is claimed by a longer match, shorter overlaps can't
 * eat into it.
 */
export function linkifyParagraph(
  paragraph: string,
  currentSlug: string,
  terms: GlossaryTerm[],
): Segment[] {
  const targets = buildTargets(terms, currentSlug);
  let segments: Segment[] = [{ type: "text", value: paragraph }];

  for (const target of targets) {
    const re = new RegExp(`\\b(${escapeRegExp(target.name)})\\b`, "g");
    const next: Segment[] = [];
    for (const seg of segments) {
      if (seg.type !== "text") {
        next.push(seg);
        continue;
      }
      const text = seg.value;
      let lastIndex = 0;
      let matched = false;
      // Reset regex lastIndex per segment (it's stateful for /g regexes).
      re.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = re.exec(text)) !== null) {
        matched = true;
        const matchStart = m.index;
        const matchEnd = matchStart + m[0].length;
        if (matchStart > lastIndex) {
          next.push({ type: "text", value: text.slice(lastIndex, matchStart) });
        }
        next.push({ type: "link", value: m[0], slug: target.slug });
        lastIndex = matchEnd;
      }
      if (matched) {
        if (lastIndex < text.length) {
          next.push({ type: "text", value: text.slice(lastIndex) });
        }
      } else {
        next.push(seg);
      }
    }
    segments = next;
  }

  return segments;
}
