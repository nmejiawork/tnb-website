---
slug: ai-gateway
term: AI Gateway
type: Tool
topic: Infrastructure
familiarity: Emerging
aliases:
  - LLM gateway
  - model gateway
  - AI proxy
related:
  - model-router
  - llmops
  - prompt-caching
  - byok
  - agent-observability
dateAdded: '2026-05-02'
shortDef: >-
  A proxy layer between your application and one or more AI model APIs. It
  handles routing between providers, caches prompts, enforces rate limits, logs
  all requests, and centralizes API key management so your application code
  doesn't talk directly to model endpoints.
---
As teams use multiple AI providers (OpenAI for some tasks, Anthropic for others, local models for sensitive data), managing API keys, rate limits, and observability across all of them becomes its own engineering problem. An AI Gateway sits in front of all of them: your application sends requests to the gateway, and the gateway handles the routing, caching, and logging.

Popular options include Cloudflare AI Gateway, Portkey, and self-hosted solutions. They typically offer a unified OpenAI-compatible API surface regardless of which backend model is actually serving the request, which makes swapping models easier. Some gateways also support semantic caching (reusing recent responses to identical or near-identical prompts), which can significantly reduce costs in high-traffic applications.

For builders operating at even moderate scale, an AI gateway provides visibility that is otherwise hard to get: which prompts are expensive, which requests are failing, where latency is coming from, and how costs are distributed across providers. It also makes provider fallback easier: if OpenAI is down or rate-limited, route to Anthropic automatically.
