---
slug: prompt-engineering
term: Prompt engineering
type: Concept
topic: Patterns & Practices
familiarity: Common
aliases:
  - prompting
  - prompt design
  - prompt crafting
related:
  - llm
  - system-prompt
  - context-engineering
  - chain-of-thought
  - rag
dateAdded: '2026-05-02'
shortDef: >-
  The practice of crafting instructions and examples to reliably get useful
  outputs from an LLM. More structured than casual chatting, less code-heavy
  than fine-tuning. In 2026 it includes techniques like few-shot examples,
  chain-of-thought, and system prompt design.
---
Prompt engineering sits between 'just ask it nicely' and full model customization. It is the skill of structuring your inputs so the model produces the kind of output you actually want, consistently. That includes choosing the right framing, adding worked examples, specifying output format, and deciding what context to include.

Key techniques include zero-shot prompting, where you give just an instruction with no examples; few-shot prompting, where you include two to five examples of the desired input-output pattern; and chain-of-thought prompting, where you ask the model to show its reasoning steps before giving a final answer. Each technique suits different task types and model capabilities.

Prompt engineering has evolved considerably since 2022. In 2026 it increasingly overlaps with context engineering, which is more about what information the model has access to than how the question is worded. The clearest distinction: prompt engineering asks better questions; context engineering creates better conditions for answering.
