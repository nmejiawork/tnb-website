---
slug: mechanistic-interpretability
term: Mechanistic interpretability
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - MI
  - mech interp
related:
  - alignment
  - red-teaming
  - evals
  - ai-safety-engineer
dateAdded: '2026-05-02'
shortDef: >-
  The effort to reverse-engineer what's actually happening inside a neural
  network, not just what it outputs. The goal is to find specific circuits,
  features, and computations that explain model behavior from the inside.
---
Most AI safety and evaluation work looks at model behavior from the outside: you give it inputs and judge the outputs. Mechanistic interpretability goes inside the model to understand what computations are producing those outputs. Researchers identify 'features' (patterns of neuron activations that correspond to recognizable concepts) and 'circuits' (chains of computation that implement specific behaviors like factual recall or reasoning steps).

Anthropic has been a leading investor in this field, with their March 2025 attribution graph work on Claude tracing how the model implements multi-step reasoning step by step. MIT Technology Review named mechanistic interpretability a breakthrough technology for 2026. The ambition is to have something like an 'MRI for AI': tools that can reliably detect problematic tendencies like deception or misalignment before a model is deployed.

The field is still early and contested. Even leading researchers have acknowledged that fully understanding what large models 'think' may be beyond current methods. But partial wins are already practically useful: interpretability tools have helped identify the mechanisms behind sycophancy, jailbreak resistance, and hallucination, giving safety researchers specific levers to pull.
