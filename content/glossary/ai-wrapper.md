---
slug: ai-wrapper
term: AI wrapper
type: Concept
topic: Business Models
familiarity: Common
aliases:
  - LLM wrapper
  - model wrapper
  - thin wrapper
related:
  - llm
  - prompt-engineering
  - rag
  - usage-based-pricing
dateAdded: '2026-05-02'
shortDef: >-
  A product built primarily by calling an LLM API with specific prompts, without
  significant proprietary technology on top. Used sometimes as a compliment for
  simplicity, sometimes as a criticism implying that competitors can easily
  replicate it. Every AI product starts here; the question is what you build
  beyond it.
---
Every AI product that calls an LLM API is, at some level of abstraction, a wrapper. The term 'AI wrapper' has a range of meanings in the builder community. Used neutrally, it describes any product where the core value is prompt design, workflow automation, and user experience layered over an existing model. Used critically, it implies that the product has no defensible moat: if OpenAI or Anthropic ships a similar feature natively, the wrapper loses its reason to exist.

The strategic question for AI wrapper businesses is what they are building on top of: is it proprietary data that makes the model smarter for a specific use case, a distribution channel with strong lock-in, a workflow integration that creates switching costs, or a user experience that competitors would struggle to match? Pure prompting over a public API with no additional layer is vulnerable; wrappers with those additional elements are not.

For TNB-audience builders, this is a constant conversation about defensibility. The answer often comes back to data, distribution, and depth of workflow integration, the same three vectors that have always mattered for software businesses. The AI layer changes the speed at which products can be built and the range of what is possible, but the fundamental question of what makes a business hard to copy has not changed.
