---
slug: transformer
term: Transformer
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - transformer architecture
  - transformer model
related:
  - llm
  - foundation-model
  - token
  - context-window
  - attention-mechanism
dateAdded: '2026-05-02'
shortDef: >-
  The neural network architecture that powers almost every modern LLM. It
  processes text in parallel using a mechanism called attention, which lets the
  model weigh relationships between all words in a sequence at once.
---
Before transformers, AI language models processed text word by word in sequence, which made it hard to learn relationships between words far apart in a sentence. The transformer, introduced in Google's 2017 paper 'Attention Is All You Need,' solved this by processing all tokens in parallel and using self-attention to let every token relate to every other token simultaneously.

Self-attention works by computing a relevance score between each pair of tokens in the input, then using those scores to produce a richer representation of each token in context. Multiple 'attention heads' run in parallel, each picking up different kinds of relationships. Stack enough of these layers together and you get a model that can hold complex, long-range meaning across large amounts of text.

Virtually every major LLM today (GPT, Claude, Gemini, Llama) is built on transformer architecture, including multimodal models that handle images or audio. Understanding the transformer is useful as a builder because it explains why context windows exist, why longer inputs cost more to process, and why certain prompting patterns work the way they do.
