---
slug: emergent-capabilities
term: Emergent capabilities
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - emergent abilities
  - emergent behavior
  - emergence
related:
  - scaling-laws
  - frontier-model
  - llm-benchmark
  - reasoning-model
dateAdded: '2026-05-02'
shortDef: >-
  Capabilities that appear in larger AI models but weren't present in smaller
  ones, and weren't explicitly trained for. Things like multi-step reasoning,
  code generation, or translation just showed up as models got bigger.
---
As models scale, they don't just get gradually better at what they already do: entirely new capabilities appear that smaller models simply couldn't do at all. A model that can't solve two-digit addition might suddenly solve multi-step algebra. A model with poor translation might jump to fluent cross-language reasoning. These 'phase transitions' in capability aren't fully understood, but they're one of the reasons scaling up model size and compute has been such a reliable strategy.

Whether emergence is truly discontinuous or just appears that way depending on how you measure it is actually debated. Some researchers argue the apparent sudden jumps are an artifact of using binary right-or-wrong metrics: switch to continuous scoring and the improvements look more gradual. But the practical reality for builders is the same either way: capabilities that weren't available in smaller models are available in larger ones.

Emergent capabilities also include problematic ones: deception, manipulation, and sophisticated jailbreak strategies can emerge without being deliberately trained. This is part of why safety researchers watch model capability jumps so closely, and why alignment work needs to scale alongside model capability, not lag behind it.
