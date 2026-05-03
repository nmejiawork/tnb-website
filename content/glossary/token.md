---
slug: token
term: Token
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - tokens
  - tokenization
related:
  - llm
  - context-window
  - temperature
  - inference
dateAdded: '2026-05-02'
shortDef: >-
  The basic unit an LLM reads and writes. Roughly three-quarters of an English
  word on average. Models charge by the token, and every context window is
  measured in tokens. It is the unit of everything in how language models work
  and cost.
---
LLMs do not process text character by character or word by word. They split text into tokens using a method called byte-pair encoding. Common words like 'the' become a single token. Rare or technical words might become three or four. Code, punctuation, and non-English languages tend to use more tokens per meaningful unit than plain English prose.

This matters for two practical reasons: cost and limits. Almost every AI API charges per input and output token. And the context window, the amount the model can see at once, is measured in tokens. A rough rule of thumb: 1,000 tokens is about 750 English words. Knowing this helps you estimate costs and avoid hitting limits unexpectedly.

Tokens are also what the model produces one at a time during generation, using a probability distribution to pick each next token. Parameters like temperature and top-p control how that selection happens. This is why LLM outputs can feel slightly different even when you send the exact same prompt twice.
