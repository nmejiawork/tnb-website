---
slug: structured-output
term: Structured Output
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - structured outputs
  - JSON mode
  - schema-constrained generation
  - constrained decoding
related:
  - prompt-engineering
  - function-calling
  - tool-use
  - evals
dateAdded: '2026-05-02'
shortDef: >-
  Getting a model to produce output that conforms to a predefined schema, like a
  specific JSON format, instead of free-form text. Most major model APIs support
  this natively. It makes AI output predictable and machine-parseable, which is
  essential for agentic pipelines.
---
When you call an LLM in an application, you rarely want just prose. You want the model to fill in fields, return arrays, or produce objects your downstream code can process. Structured output enforces that. You provide a JSON schema (a definition of what fields and types you expect), and the model is constrained to produce output that matches it. If it would naturally deviate, it corrects itself.

OpenAI formalized this with JSON mode and then stricter schema enforcement in their Responses API. Anthropic, Google, and most other providers have followed. The practical effect: instead of parsing a sentence to extract an entity or a score, you just access a field. Error handling gets simpler. Pipelines get more reliable.

Structured output is now considered a baseline for production AI applications. If you're wiring model outputs into any kind of subsequent logic, whether it's a database write, an agent decision, or a UI render, you should be using structured output rather than hoping free-form text stays consistent.
