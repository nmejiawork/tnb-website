---
slug: model-router
term: Model router
type: Concept
topic: Infrastructure
familiarity: Emerging
aliases:
  - llm router
  - model routing
  - multi-model routing
  - ai gateway
related:
  - inference
  - llm
  - open-source-model
  - usage-based-pricing
  - orchestration
dateAdded: '2026-05-02'
shortDef: >-
  A system that automatically sends AI requests to different models depending on
  the task, cost, or speed requirements. Instead of committing every request to
  one model, a router picks the best fit for each job.
---
Not every task needs your most expensive model. A simple FAQ response does not need the same reasoning depth as a complex code review. A model router sits between your application and your model providers, inspecting each request and deciding which model to send it to based on rules you define: use a fast cheap model for simple classifications, route complex multi-step reasoning to a frontier model, fall back to an open-source model for cost-sensitive batch jobs.

Tools like OpenRouter, LiteLLM, and various enterprise AI gateways implement this pattern. Some teams build it themselves as part of their agent scaffold. The routing logic can be rule-based (if the task is X, use model Y) or itself AI-powered (a small cheap model decides which bigger model to call).

In 2026, with top frontier models priced within a few dollars per million tokens of each other, the biggest routing gains come from correctly identifying which tasks do not need frontier models at all. Teams building high-volume AI products often find that intelligent routing cuts inference costs 50-70% with minimal quality loss. It is also a hedge against any single provider's pricing or availability changes.
