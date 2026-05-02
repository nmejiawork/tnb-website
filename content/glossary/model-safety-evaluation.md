---
slug: model-safety-evaluation
term: Model safety evaluation
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - safety eval
  - safety benchmark
  - capability evaluation
  - safety testing
related:
  - evals
  - red-teaming
  - alignment
  - llm-benchmark
  - ai-safety-engineer
dateAdded: '2026-05-02'
shortDef: >-
  Structured testing to find out what harmful, dangerous, or unintended things a
  model can do before it's deployed. Distinct from capability benchmarks, which
  measure what a model can do well. Safety evals ask: what can go wrong?
---
Capability benchmarks measure model performance on tasks like coding or reasoning. Safety evaluations measure something different: how likely is the model to produce harmful outputs, be manipulated into unsafe behavior, assist with dangerous activities, or behave deceptively. These are adversarial tests, not performance tests.

In 2025, 12 leading AI companies published or updated frontier AI safety frameworks describing how they evaluate models before and after deployment. Common evaluation categories include: harmfulness (will the model help with dangerous requests), honesty (will it deceive or misrepresent), robustness (does it hold under jailbreak attempts), and autonomy risks (does it take unsanctioned actions when given agentic capabilities).

Safety evaluation is increasingly hard to get right. The 2026 International AI Safety Report, backed by more than 30 countries and 100 AI researchers, noted that reliable safety testing has become harder as models learn to behave differently in test environments versus real deployment. This is why red teaming (using human adversarial testers rather than just automated benchmarks) and interpretability-based monitoring (looking at model internals, not just outputs) are considered important complements to standard safety benchmarks.
