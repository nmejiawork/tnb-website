---
slug: model-card
term: Model Card
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - model documentation
  - model spec
related:
  - llm-benchmark
  - evals
  - constitutional-ai
  - eu-ai-act
dateAdded: '2026-05-02'
shortDef: >-
  A standardized document published alongside an AI model that describes what it
  can do, what it was trained on, what it was evaluated on, its known
  limitations, intended use cases, and safety considerations. The nutrition
  label for an AI model.
---
A model card is a structured disclosure document. When Anthropic releases Claude 4 or Google releases Gemini 2.5, the model card tells you: what benchmarks it was evaluated on and what scores it achieved, what data it was trained on (or what is known about it), what tasks it was designed for, what failure modes and limitations the team identified, and how it should and shouldn't be used.

Model cards were formalized as a concept by Google researchers in 2018 and have become standard practice across major AI labs. They range from thorough technical documents (Anthropic and Llama model cards are detailed) to marketing-forward summaries that omit inconvenient limitations.

For builders choosing models, model cards are the primary source of official capability claims and known limitations. They're also increasingly required by regulation: the EU AI Act mandates technical documentation for high-risk AI systems that aligns closely with the model card concept. Reading model cards critically, especially benchmark footnotes and known-limitations sections, is a basic research skill for anyone evaluating models.
