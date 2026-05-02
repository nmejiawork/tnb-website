---
slug: prompt-caching
term: Prompt caching
type: Concept
topic: Infrastructure
familiarity: Emerging
aliases:
  - context caching
  - kv cache
  - kv-cache
  - cache prefix
related:
  - token
  - inference
  - context-window
  - llm
  - usage-based-pricing
dateAdded: '2026-05-02'
shortDef: >-
  An API feature that lets you cache repeated parts of a prompt (like a long
  system prompt or a large document) so you only pay to process them once.
  Subsequent requests that reuse the cached prefix are faster and cheaper.
---
Many production AI applications send the same large block of text at the start of every request: a detailed system prompt, a long document for analysis, or a reference codebase. Without caching, you pay full token processing costs every single time. Prompt caching stores the key-value representations (the model's internal state after processing that text) so they can be reused.

Anthropic introduced prompt caching for Claude in 2024. Google followed with context caching for Gemini. For builders running high-volume applications, the cost reduction is real: cache hits cost significantly less than full reprocessing, and the latency drops because the model does not have to re-read content it has already seen. A product that sends a 50,000-token system prompt to every user request can save 80-90% of those token costs.

The mechanics: you mark a specific prefix in your prompt as cacheable. As long as subsequent requests share that same prefix (in the same order, with the same content), the cache kicks in. This makes it most useful for static content like instructions or reference documents. Dynamic content that changes per request cannot be cached and must be processed fresh each time.
