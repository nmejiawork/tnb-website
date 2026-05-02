---
slug: llms-txt
term: llms.txt
type: Concept
topic: Builder Tools
familiarity: Emerging
aliases:
  - llms txt
  - llms-full.txt
related:
  - context-engineering
  - context-window
  - rag
  - agents-md
  - claude-md
dateAdded: '2026-05-02'
shortDef: >-
  A convention for publishing a concise, AI-readable version of a website's
  documentation at /llms.txt. Lets AI coding agents pull current, accurate docs
  into context instead of relying on training data that may be outdated.
---
When an AI coding agent tries to help you use a library or API, it pulls from what it learned during training, which may be months or years out of date. llms.txt is a community-driven convention, modeled loosely on robots.txt (the file websites use to tell search engine crawlers what to index), that encourages documentation sites to publish a clean, token-efficient version of their docs that AI tools can retrieve in real time.

The format is simple: a markdown file at yourdomain.com/llms.txt that contains concise, structured documentation for your product, library, or API, written with the assumption that an AI is reading it rather than a human. Some sites also publish an llms-full.txt with the complete reference content, and a condensed version for agents working under tight context budgets.

For builders, llms.txt matters in two directions. When you're building with a framework that publishes one, you can point your coding agent directly at that URL for accurate, current documentation. When you're building a product other developers integrate with AI assistance, publishing llms.txt means their agents get helpful, reliable information about your API instead of hallucinated guesses.
