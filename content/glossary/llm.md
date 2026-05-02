---
slug: llm
term: LLM
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - large language model
  - large language models
  - foundation model
related:
  - context-window
  - token
  - hallucination
  - fine-tuning
  - rag
dateAdded: '2026-05-02'
shortDef: >-
  A large language model is a neural network trained on massive amounts of text
  that can generate, summarize, translate, and reason over language. The models
  behind ChatGPT, Claude, and Gemini are all LLMs. Most AI builder tools run on
  one underneath.
---
An LLM is a type of AI model trained to predict the most probable next word, or more precisely the next token, given everything that came before it. Do that billions of times across an enormous dataset of text and code, and you end up with a model that can write, reason, translate, summarize, and answer questions at a level that consistently surprises people who use it for the first time.

The key thing for builders to understand: an LLM is not a database and it is not a search engine. It generates statistically probable text. That means it can be confidently wrong, a behavior known as hallucination. It also means its knowledge has a cutoff date and it only knows what it was trained on unless you give it additional context, which is where patterns like RAG come in.

In 2026, the major frontier LLMs include OpenAI's GPT series, Anthropic's Claude, Google's Gemini, and Meta's open-source Llama family. Most builder tools, whether that is Cursor, Lovable, or a custom API integration, are wrappers or applications built on top of one or more of these models.
