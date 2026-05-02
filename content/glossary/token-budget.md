---
slug: token-budget
term: Token Budget
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - thinking budget
  - reasoning budget
  - compute budget
related:
  - extended-thinking
  - inference-time-compute
  - token
  - context-compaction
dateAdded: '2026-05-02'
shortDef: >-
  A limit you set on how many tokens a model can spend on internal reasoning
  before producing an answer. Higher budgets mean more thorough reasoning at the
  cost of latency and money. Lower budgets are faster and cheaper. Most useful
  when using extended thinking or reasoning models.
---
Reasoning models and extended thinking modes don't just generate an answer; they first generate a chain of internal thought. All those thinking tokens cost money and time. A token budget lets you cap that spend. Set it high for complex problems where accuracy matters; set it low (or to zero) for simple tasks where thinking is wasteful.

Anthropic exposes this in the Claude API as a thinking parameter with a budget_tokens field. OpenAI has analogous reasoning_effort settings (low, medium, high) on o-series models. Google offers similar controls on Gemini's Deep Think mode. The interface differs but the concept is the same: you're buying more or less deliberation time.

Token budgets are a new dimension of production cost management that didn't exist before reasoning models. Builders optimizing agent pipelines now need to think not just about input/output token counts but also about thinking token costs per step. A multi-step agent that uses high thinking budgets on every step can generate costs that dwarf simple API call patterns.
