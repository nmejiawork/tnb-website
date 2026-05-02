---
slug: constitutional-ai
term: Constitutional AI
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - CAI
  - Constitutional AI training
related:
  - rlhf
  - guardrails
  - ai-red-teamer
  - frontier-model
dateAdded: '2026-05-02'
shortDef: >-
  Anthropic's training method for making AI models safer and more helpful.
  Instead of relying entirely on human labelers to mark outputs as good or bad,
  the model is given a set of principles (a constitution) and trained to
  critique and revise its own responses against those principles.
---
Traditional RLHF relies heavily on human raters comparing model outputs. Constitutional AI supplements this with an AI feedback loop: the model is given a list of principles and asked to evaluate its own outputs against them, then revise the bad ones. Human feedback is still used, but the constitution reduces how much of it is needed and makes the training process more transparent.

Anthropic published Constitutional AI as a research paper and it's core to how Claude is trained. The constitution includes principles about being helpful, honest, and avoiding harm, and the model internalizes them through training rather than treating them as external rules in the prompt. This is why Claude's behavior feels more principled and less brittle than pure RLHF models on edge cases.

For builders, the practical implication is that Claude tends to reason about ethics in context rather than pattern-matching to a blocklist. That makes it more nuanced but also occasionally more cautious than you might want. Understanding that this comes from the training methodology, not just the system prompt, helps you calibrate when Constitutional AI's conservatism is a feature versus when it's friction to work around with a well-crafted system prompt.
