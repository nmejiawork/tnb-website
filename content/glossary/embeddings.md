---
slug: embeddings
term: Embeddings
type: Concept
topic: Infrastructure
familiarity: Emerging
aliases:
  - text embeddings
  - vector embeddings
  - semantic embeddings
related:
  - vector-database
  - rag
  - llm
dateAdded: '2026-05-02'
shortDef: >-
  Numerical representations of text (or images or other data) where meaning is
  encoded as position in a mathematical space. Similar meanings end up close
  together. Embeddings are how you make semantic search and RAG work: you
  compare meaning, not just exact words.
---
An embedding converts a word, sentence, or document into a list of numbers, typically hundreds to thousands of them. These numbers are not arbitrary; they are learned during training so that texts with similar meanings end up with similar numbers. 'Car' and 'automobile' will have embeddings that are very close together. 'Car' and 'philosophy' will be far apart.

This mathematical structure enables semantic search, where you find content by meaning rather than keyword matching. It is the engine that powers RAG: you embed your documents once, store them in a vector database, and then at query time you embed the user's question and retrieve the documents whose embeddings are closest. The result is retrieval that actually understands what the user is asking rather than just matching words.

Embedding models are separate from the main LLM. OpenAI, Cohere, and open-source projects like Nomic and Sentence Transformers all offer embedding models optimized for this task. Choosing the right embedding model, and keeping it consistent between when you index documents and when you query, is a detail that catches many builders early in building their first RAG pipeline.
