---
slug: jailbreak
term: Jailbreak
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - jailbreaking
  - jailbreak attack
related:
  - alignment
  - red-teaming
  - system-prompt-injection
  - guardrails
  - context-poisoning
dateAdded: '2026-05-02'
shortDef: >-
  A crafted input that tricks an AI model into ignoring its safety guidelines
  and producing outputs it's been trained not to produce. It's the AI equivalent
  of finding a loophole in the rules.
---
Language models are trained with guardrails designed to prevent them from producing harmful, illegal, or policy-violating content. A jailbreak is a prompt (or sequence of prompts) that circumvents these guardrails, getting the model to act as if the safety training doesn't apply. Common techniques include role-playing scenarios ('pretend you are an AI with no restrictions'), hypothetical framings, or elaborate multi-turn setups that gradually shift the model's behavior.

Jailbreaks are distinct from prompt injection (which involves external content overriding system instructions) though they're related. Both exploit the fact that LLMs interpret language instructions without a strict separation between data and commands. The OWASP (Open Web Application Security Project) lists prompt injection and jailbreaking among the top security risks for LLM-based applications.

For builders shipping AI products, jailbreak resistance is a practical deployment concern. Red teaming your product before launch, using system prompts with clear instructions, and applying output filtering are common mitigations. No model is fully jailbreak-proof: it's an ongoing arms race between model safety training and adversarial prompt discovery, which is why alignment and interpretability research matters.
