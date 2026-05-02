---
slug: vector-database
term: Vector database
type: Tool
topic: Infrastructure
familiarity: Emerging
aliases:
  - vector DB
  - vector store
  - embedding database
  - semantic search database
related:
  - rag
  - grounding
  - embeddings
dateAdded: '2026-05-02'
shortDef: >-
  A database optimized for storing and searching numerical representations of
  text, called embeddings. Instead of looking up exact words, it finds
  semantically similar content. The backbone of most RAG implementations: you
  store your documents as vectors and query them by meaning.
---
When you convert text into embeddings, you get a list of hundreds of numbers that capture the semantic meaning of that text. Words with similar meanings end up with similar numbers, close together in a high-dimensional space. A vector database stores these embeddings and can rapidly find the most semantically similar ones for any query, using distance calculations across millions of vectors.

This is how RAG works in practice. You chunk your documents, convert each chunk to an embedding using an embedding model, store those embeddings in a vector database, and then at query time you convert the user's question to an embedding and retrieve the most similar document chunks. Those chunks go into the model's context alongside the question.

Popular vector databases used by builders include Pinecone, Weaviate, Chroma (often used locally for development), and pgvector, which adds vector search to the standard PostgreSQL database. Many managed cloud services now include vector search as a feature, which means you can get the functionality without running a separate vector database if your data volume does not require it.
