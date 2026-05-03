---
slug: usage-based-pricing
term: Usage-based pricing
type: Concept
topic: Business Models
familiarity: Common
aliases:
  - consumption-based pricing
  - per-token pricing
  - pay-as-you-go AI
  - outcome-based pricing
related:
  - llm
  - token
  - inference
  - ai-agent
dateAdded: '2026-05-02'
shortDef: >-
  A billing model where you pay based on what you actually use, typically per
  token, per API call, or per task completed, rather than a flat subscription.
  Standard for LLM APIs. For agents, a newer variant charges per task completed
  rather than per compute consumed.
---
Most LLM APIs, including those from OpenAI, Anthropic, and Google, charge by the token: a price per thousand input tokens and a separate price per thousand output tokens. This means your costs scale directly with usage, which is good for small projects and potentially expensive for production applications with many users.

For builders, usage-based pricing changes how you design products. Every prompt decision, context length choice, and number of agent loop iterations has a direct cost implication. Builders who think carefully about token efficiency, caching responses where appropriate, and routing simpler requests to cheaper models can dramatically reduce costs without sacrificing quality.

An emerging variant for the agent era is outcome-based or task-based pricing: you pay per task completed rather than per compute consumed. This aligns provider incentives with user results and is already being explored by some AI companies for agent offerings. It also shifts the risk profile: if the agent fails, you do not pay; if it succeeds, you do, regardless of how many tokens it used.
