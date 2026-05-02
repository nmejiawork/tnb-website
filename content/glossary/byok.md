---
slug: byok
term: BYOK
type: Concept
topic: Business Models
familiarity: Emerging
aliases:
  - bring your own key
  - byom
  - bring your own model
  - bring-your-own-key
related:
  - usage-based-pricing
  - inference
  - open-source-model
  - ai-wrapper
  - llm
dateAdded: '2026-05-02'
shortDef: >-
  Bring Your Own Key. A pricing model where you connect an AI tool to your own
  API keys from model providers, paying the provider directly for usage rather
  than paying the tool a markup. Gives cost transparency and model flexibility.
---
BYOK tools like Cline, Aider, and Roo Code charge you nothing (or very little) for the software itself. You bring API keys from Anthropic, OpenAI, or any other provider, and the tool routes your requests directly to that provider. You pay only for what you use, at published API rates, with no additional layer of fees.

The appeal for builders is twofold: cost transparency and model flexibility. You can see exactly what each session costs. You can also swap providers instantly without switching tools. If a new model outperforms on a specific task, you update the config and run. BYOM (Bring Your Own Model) extends this to open-source or locally hosted models, where you point the tool at a local Ollama instance or your own fine-tuned model.

The tradeoff is that BYOK shifts billing and key management to you. Heavy agentic usage can generate larger API bills than a flat subscription, especially with reasoning-heavy models. Teams need to budget for token usage and sometimes set spending limits to avoid surprises. For cost-sensitive builders or those who want maximum model flexibility, BYOK is often the preferred approach.
