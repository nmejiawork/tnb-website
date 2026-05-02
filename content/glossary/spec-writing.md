---
slug: spec-writing
term: Spec Writing
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - AI spec
  - product spec for AI
  - spec-first development
related:
  - spec-driven-development
  - context-engineering
  - prompt-engineering
  - claude-md
dateAdded: '2026-05-02'
shortDef: >-
  Writing a detailed natural-language specification before asking an AI to build
  something. Instead of prompting iteratively from scratch, you front-load the
  thinking into a structured document: what the thing should do, how it should
  behave, what the edge cases are. The spec becomes the prompt.
---
Spec writing is what separates fast, directed AI-assisted development from slow, iterative correction loops. When you prompt an AI to build something without a clear spec, the first output is usually a reasonable misinterpretation: you meant X, the AI built Y, and you spend three rounds correcting it back toward X. A good spec narrows the interpretation space before code is written.

The practice has grown alongside vibe coding and spec-driven development. Tools like Claude and ChatGPT have gotten good enough at code generation that the bottleneck is now the quality of the instruction, not the execution. Many experienced builders now invest 15-30 minutes writing a spec before touching a model, and spend less total time than teams that start prompting immediately.

A good AI spec typically includes: what the thing does (the happy path), what it doesn't do (scope boundaries), data shapes, error cases, style preferences (for UI), and any constraints on implementation. Claude.md and AGENTS.md files are persistent versions of the same idea, carrying spec-level instructions across all sessions rather than per-prompt.
