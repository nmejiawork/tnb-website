---
slug: chain-of-thought
term: Chain-of-thought
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - CoT
  - chain of thought prompting
  - step-by-step reasoning
related:
  - prompt-engineering
  - reasoning-model
  - inference-time-compute
  - llm
dateAdded: '2026-05-02'
shortDef: >-
  A prompting technique where you ask the model to reason through a problem step
  by step before giving its final answer. Often as simple as adding 'think step
  by step' to a prompt. Consistently improves accuracy on logic, math, and
  multi-step tasks.
---
Chain-of-thought emerged from research in 2022 showing that large language models produce much more accurate answers on reasoning tasks when asked to show their intermediate steps rather than jumping to a final answer. The mechanism is intuitive: articulating the reasoning process forces the model down a more structured path and catches errors that would otherwise be invisible.

In practice, you implement it by either explicitly prompting the model to 'think step by step' or by providing few-shot examples where the reasoning trace is shown before the answer. Reasoning models like OpenAI's o-series take this further by building an internal scratchpad into the model architecture itself, rather than relying on prompt instructions.

Chain-of-thought is most valuable for tasks with multiple steps, logical dependencies, or where incorrect intermediate assumptions would lead to wrong conclusions. For simple lookups or creative tasks, it adds latency without much benefit. Knowing when to use it is part of good prompt engineering.
