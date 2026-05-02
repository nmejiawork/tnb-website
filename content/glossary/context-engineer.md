---
slug: context-engineer
term: Context engineer
type: Role
topic: Roles & Org
familiarity: Emerging
aliases:
  - context engineering role
  - context designer
related:
  - prompt-engineer
  - ai-engineer
  - context-engineering
  - rag
  - agent-memory
  - context-window
dateAdded: '2026-05-02'
shortDef: >-
  Someone who designs and manages the full information payload an AI model sees,
  not just the prompt, but retrieved documents, memory, tool schemas,
  conversation history, and system instructions. Seen as the practical evolution
  of prompt engineering for production AI systems.
---
The term gained real traction in mid-2025 when Andrej Karpathy described context engineering as 'the delicate art and science of filling the context window with just the right information for the next step.' Shopify CEO Tobias Lütke endorsed the framing around the same time. The core insight is that in a production AI application, the single prompt a user types is only a small slice of what the model actually sees.

A context engineer decides what retrieved documents to include (RAG, or retrieval-augmented generation), how to summarize conversation history so it fits in the context window without eating up useful space, which tool descriptions to expose, and how to structure all of it so the model can reason clearly. Too little context and the model lacks what it needs; too much irrelevant context and performance degrades.

As a role, context engineer sits somewhere between AI engineer and systems architect. It requires understanding retrieval pipelines, memory layers, token budgets, and model behavior. Enterprise teams began posting explicit context engineer job descriptions by early 2026. For builders working on agents or complex LLM applications, the work is already happening whether or not the title is on the door.
