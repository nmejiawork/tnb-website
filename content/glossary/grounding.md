---
slug: grounding
term: Grounding
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - grounded outputs
  - grounded generation
  - factual grounding
related:
  - rag
  - hallucination
  - context-engineering
  - vector-database
dateAdded: '2026-05-02'
shortDef: >-
  Connecting a model's response to specific, verifiable sources, documents,
  database records, or live data, so it is anchored to real facts rather than
  generating from memory alone. The goal is reducing hallucination and making
  outputs auditable.
---
An ungrounded LLM answers from its training weights, which means it draws on patterns learned from its training data but has no live connection to the outside world. Grounding changes this by giving the model real information at query time, whether that is retrieved documents via RAG, live API data, database records, or tool outputs. The model then generates a response based on that supplied evidence rather than recalling from memory.

Well-grounded AI applications are much easier to trust in production because you can trace claims back to sources. In regulated industries like legal, healthcare, or finance, grounding is often a prerequisite for deployment. Many enterprise AI systems require that every AI-generated claim cite the document it came from.

Context engineering and RAG are the two most common implementation paths for grounding. But grounding can also happen via tool use in agents, where the agent calls a live API or database query mid-task rather than relying on what it was trained to know. The distinction between 'model knows this from training' versus 'model retrieved this now' is increasingly important as agents take actions with real-world consequences.
