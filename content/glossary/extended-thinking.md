---
slug: extended-thinking
term: Extended Thinking
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - deep thinking
  - thinking mode
  - hybrid reasoning
  - thinking budget
related:
  - reasoning-model
  - inference-time-compute
  - chain-of-thought
  - temperature
dateAdded: '2026-05-02'
shortDef: >-
  A model mode where Claude (or other reasoning models) spends extra tokens
  reasoning step by step before producing a final answer. You can set a thinking
  budget to control how much compute, and therefore cost and latency, you want
  it to use.
---
Extended thinking is the consumer-facing version of inference-time compute scaling. Instead of answering immediately, Claude first generates an internal scratchpad of reasoning. You see the reasoning if you want to, and the final answer reflects that deeper deliberation. Anthropic lets developers set a token budget for thinking, so you can dial up accuracy at the cost of speed and tokens.

The practical trade-off: for routine tasks like drafting an email or doing a simple lookup, extended thinking is overkill and will cost more and be slower. For complex tasks like a legal analysis, a multi-step architecture decision, or a tricky debugging session, spending more tokens on thinking tends to produce noticeably better results.

Extended thinking is closely related to the reasoning model category (o-series from OpenAI, Claude's hybrid reasoning mode, Gemini Deep Think), but it's a feature flag you can toggle at the API level, not a separate model family. This gives developers granular control over the quality-cost-latency trade-off on a per-request basis.
