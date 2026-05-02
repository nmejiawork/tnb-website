---
slug: supabase
term: Supabase
type: Tool
topic: Builder Tools
familiarity: Common
aliases:
  - Supabase.io
related:
  - vercel
  - vector-database
  - rag
  - vibe-stack
  - lovable
dateAdded: '2026-05-02'
shortDef: >-
  An open-source backend-as-a-service built on Postgres. Gives builders a
  database, auth, storage, and real-time subscriptions in one place, and it
  wires up cleanly with AI app builders like v0 and Lovable.
---
Supabase is what most AI builders reach for when they need a real backend fast. It bundles a Postgres database, user authentication, file storage, edge functions (small serverless scripts that run close to users), and real-time data syncing into a single managed service. You connect to it via a simple API (a set of URLs your app calls to read or write data) and never have to spin up or maintain your own server.

In the vibe-coding era, Supabase became the default backend for AI-generated apps. Tools like Lovable, v0, and Replit will scaffold a Supabase connection automatically if you ask them to add auth or a database. It also supports pgvector, a Postgres extension for storing and searching vector embeddings, which makes it a practical first choice for builders adding RAG (retrieval-augmented generation, where an AI pulls in relevant stored content before answering) to their apps.

Supabase is open-source, which means you can self-host it if you need full data control. Most builders start on the hosted version and stay there. The free tier is generous enough for prototypes, and the pricing scales gradually as your app grows.
