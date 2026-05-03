---
slug: agent-memory
term: Agent memory
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - ai memory
  - persistent memory
  - long-term memory
  - memory layer
related:
  - rag
  - context-window
  - context-engineering
  - agentic-loop
  - embeddings
dateAdded: '2026-05-02'
shortDef: >-
  A dedicated system that lets an AI agent remember information across separate
  conversations or sessions. Unlike RAG (which retrieves documents), agent
  memory tracks facts about users or projects over time and injects relevant
  context automatically.
---
The context window (the amount of text a model can hold at once) empties between sessions. Agent memory solves that. Tools like Mem0, Letta, and Supermemory extract facts from conversations, store them in a structured way, and retrieve them in future sessions. The result: an agent that remembers your preferences, the project decisions you made last week, and the constraints you mentioned in passing.

There are two main architectural approaches. Vector memory stores facts as embeddings (numerical representations) and retrieves semantically similar ones; it answers 'what did the user say about Python?' Graph memory stores facts as a network of connected entities and relationships; it answers 'this user works with Python for data pipelines using pandas at a company that uses dbt.' Graph memory handles multi-hop questions better.

In 2026, agent memory became a first-class architectural component with its own benchmarks (LOCOMO, LongMemEval) and a growing ecosystem of tools. Mem0, Zep, and Letta emerged as dedicated memory services. Anthropic built native memory into Claude models. The operational challenge is memory quality: knowing which facts to retain, how to resolve contradictions, and when to forget outdated information.
