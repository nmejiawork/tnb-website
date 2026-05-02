---
slug: rag
term: RAG
type: Concept
topic: Patterns & Practices
familiarity: Common
aliases:
  - Retrieval-Augmented Generation
  - retrieval augmented generation
  - retrieval-augmented generation
related:
  - llm
  - context-window
  - vector-database
  - hallucination
  - fine-tuning
  - grounding
dateAdded: '2026-05-02'
shortDef: >-
  A technique where relevant documents are fetched from a database and included
  in the model's context before it responds. Instead of relying purely on what
  it was trained on, the model answers using your actual data. Reduces
  hallucination significantly for knowledge-heavy tasks.
---
RAG addresses one of the core limitations of LLMs: their knowledge is frozen at the point they were trained, and they cannot access your organization's private documents, recent events, or specialized data. RAG solves this by treating every query as a two-step process. First, retrieve the most relevant content from a knowledge base. Second, stuff that content into the model's prompt alongside the original question so it can answer using real, current information.

The retrieval step typically relies on a vector database, which stores documents as numerical representations called embeddings that capture semantic meaning. When a query comes in, the system finds the most semantically similar documents and passes them to the model. The quality of this retrieval step, how well you chunk documents, what embedding model you use, and how you rank results, determines the quality of the final answer.

RAG has become the default first approach for builders who need AI to answer questions about their own data. It is faster to implement than fine-tuning, less expensive, easier to update as your data changes, and allows you to audit exactly what sources the model used to produce an answer. Fine-tuning is still preferred for changing a model's behavior or style, but RAG is usually the right starting point for knowledge grounding.
