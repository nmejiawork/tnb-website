---
slug: context-poisoning
term: Context Poisoning
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - context pollution
  - context contamination
related:
  - system-prompt-injection
  - agent-memory
  - context-window
  - context-compaction
dateAdded: '2026-05-02'
shortDef: >-
  When bad, irrelevant, or adversarially crafted content accumulates in a
  model's context window and degrades the quality of subsequent responses. It's
  a soft failure mode: the model doesn't crash, it just drifts toward worse
  outputs as the context fills with noise.
---
Every time you add something to a model's context, it influences all subsequent outputs. If a long agentic session accumulates error messages, failed attempts, misleading tool results, or injected instructions from external sources, the model's behavior can degrade subtly. It may start repeating earlier mistakes, lose track of the original goal, or be steered by adversarial content it processed earlier.

Context poisoning differs from a direct prompt injection attack in that it doesn't necessarily require a malicious actor. It can happen naturally: a coding agent that processes a buggy codebase for too long starts producing code that reflects those bad patterns. A research agent that reads low-quality sources starts generating lower-quality summaries.

Mitigations include context compaction (summarizing or pruning older context), using subagents for isolated tasks so pollution doesn't spread to the main context, and being selective about what tool outputs get injected back into the context window. In agentic systems, context hygiene is a first-class engineering concern.
