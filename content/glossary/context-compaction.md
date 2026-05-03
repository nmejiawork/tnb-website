---
slug: context-compaction
term: Context compaction
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - context compression
  - adaptive context compaction
  - context summarization
related:
  - context-window
  - context-engineering
  - agent-scaffold
  - claude-code
  - token
dateAdded: '2026-05-02'
shortDef: >-
  A technique where an agent progressively summarizes older parts of a
  conversation or session to free up space in the context window. Keeps the most
  relevant recent context intact while preventing performance from degrading
  over long runs.
---
Every model has a context window: a limit on how much text it can hold at once. In long agentic sessions, this fills up. Without compaction, one of two things happens: the session hits the limit and stops, or older relevant context gets pushed out and the agent starts losing track of what it was doing. Both are bad.

Context compaction addresses this by summarizing older turns. When the session gets long, the agent generates a compressed summary of what happened earlier and substitutes it for the raw transcript. Recent tool outputs and code changes stay intact in full fidelity; the older history is condensed. Claude Code ships built-in auto-compaction. Custom agent scaffolding can implement more sophisticated versions.

The impact on agent reliability is significant. Research showed that adaptive context compaction prevents performance degradation in sessions that would otherwise hit token limits. For background agents running multi-hour tasks, it is often the difference between a successful run and a failed one. Builders tuning agent scaffolds for production treat it as a baseline feature rather than an optimization.
