---
slug: attention-mechanism
term: Attention mechanism
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - self-attention
  - multi-head attention
related:
  - transformer
  - context-window
  - token
  - kv-cache
dateAdded: '2026-05-02'
shortDef: >-
  The core operation inside a transformer that lets every token 'look at' every
  other token in the input. It's how the model figures out which words are
  relevant to which, allowing it to understand context and meaning.
---
Attention is the mechanism that made transformers so powerful. For each token in the input, the model computes three vectors: a query (what this token is looking for), a key (what this token offers), and a value (the information to pass forward). Attention scores are computed by matching queries against keys across all tokens, then using those scores to create a weighted mix of values.

Multi-head attention runs this process in parallel across many 'heads,' each learning to attend to different kinds of relationships: one head might focus on syntactic agreement, another on pronoun references, another on topic relevance. The outputs of all heads are combined and passed forward.

As a builder, attention explains two practical things. First, it's why LLMs are sensitive to how you phrase and order things in a prompt: different phrasings produce different attention patterns. Second, it's the source of the quadratic compute cost as context grows, which is why very long contexts are expensive and why techniques like KV cache (saving previously computed key-value pairs to avoid recomputation) matter for cost and speed.
