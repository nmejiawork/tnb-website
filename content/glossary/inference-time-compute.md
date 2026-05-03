---
slug: inference-time-compute
term: Inference-time compute
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - test-time compute
  - TTC
  - inference scaling
related:
  - reasoning-model
  - llm
  - inference
  - chain-of-thought
dateAdded: '2026-05-02'
shortDef: >-
  Giving a model more time and compute to think during a response, rather than
  only at training. Instead of scaling up how big the model is, you scale up how
  hard it works on each question. Reasoning models are the main example of this
  in practice.
---
The original recipe for making AI smarter was to train a bigger model on more data. Inference-time compute is a different lever: let the model spend more computation on a single response. It can explore multiple reasoning paths, check its own work, or sample and compare many candidate answers before settling on one.

This shift matters because it unlocks a different scaling curve. Rather than needing more GPUs during training, you can run a smaller model longer to get better answers for hard problems. Builders can dynamically allocate more inference budget to complex tasks and less to simple ones, which enables cost-efficient design.

The concept is closely tied to reasoning models. When you turn on 'extended thinking' in Claude or use o3 in OpenAI's API, you are effectively increasing inference-time compute. The practical question for builders becomes: how much thinking time is worth buying for this particular task?
