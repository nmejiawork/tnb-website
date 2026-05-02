---
slug: context-window
term: Context window
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - context length
  - token limit
  - context size
related:
  - llm
  - token
  - rag
  - context-engineering
dateAdded: '2026-05-02'
shortDef: >-
  The maximum amount of text a model can see at once, including your prompt, any
  documents you've given it, and its own prior responses. Think of it as the
  model's working memory for a single conversation or task.
---
Every call to an LLM has a limit on how many tokens, roughly chunks of words or characters, can fit in a single request. That limit is the context window. Anything outside the window is invisible to the model. If a conversation or document exceeds it, earlier content gets dropped.

Context windows have grown dramatically. In 2026, Claude's Sonnet models support 200,000 tokens and Gemini 2.5 Pro supports up to 2 million, which is enough to fit entire codebases or book-length documents. Bigger windows open up new use cases but also increase inference cost, since the model has to process every token in the window on each request.

A large context window does not mean the model uses everything in it equally well. Research has shown that models sometimes pay less attention to content buried in the middle of a long prompt. This is part of why context engineering, the practice of deciding what to include and where to put it, has become its own discipline.
