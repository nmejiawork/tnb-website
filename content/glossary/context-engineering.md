---
slug: context-engineering
term: Context engineering
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - context management
  - context design
related:
  - prompt-engineering
  - rag
  - context-window
  - system-prompt
  - agentic-loop
dateAdded: '2026-05-02'
shortDef: >-
  The practice of deciding what information goes into a model's context window
  and how it is structured. Not just asking good questions, but managing what
  the model knows when it answers: what to include, what to compress, what to
  retrieve, what to store across turns.
---
Prompt engineering focuses on how you ask. Context engineering focuses on what the model knows. As context windows have grown to hundreds of thousands of tokens and agents run multi-step tasks, what you put in that window and how you arrange it has become a distinct engineering challenge with real cost and quality implications.

The decisions involved include which documents to retrieve and when, how to summarize long prior conversations, whether to include tool results verbatim or compressed, and how to manage memory across multiple turns. Bad context engineering means the model operates on stale, irrelevant, or missing information even when it has a large window available.

For builders, context engineering is increasingly the difference between a demo that works and a product that works reliably. A system that carefully curates what goes into every model call will consistently outperform one that just dumps everything into the context and hopes for the best. This is one of the reasons purpose-built roles around context design, sometimes called context engineers, are emerging in larger AI-first teams.
