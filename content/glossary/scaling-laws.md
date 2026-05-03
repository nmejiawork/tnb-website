---
slug: scaling-laws
term: Scaling laws
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - neural scaling laws
  - Chinchilla scaling
related:
  - frontier-model
  - inference-time-compute
  - foundation-model
  - llm-benchmark
dateAdded: '2026-05-02'
shortDef: >-
  The empirical observation that AI model performance improves predictably as
  you scale up compute, data, and parameters. More of each usually means a
  better model, and the relationship follows a power law that researchers can
  measure and forecast.
---
Early in the deep learning era, researchers noticed that model performance didn't improve randomly as models got bigger: it improved in a consistent, predictable pattern. Specifically, loss decreases as a power function of model size, dataset size, and compute budget. This insight, formalized in papers from OpenAI (2020) and DeepMind (the Chinchilla paper, 2022), became the foundation of the race to build larger and larger models.

The Chinchilla result in particular was influential because it showed that many existing large models were undertrained: given a compute budget, you often get better results by training a smaller model on more data than training a huge model on less data. This shifted how labs thought about the balance between model size and training token count.

In 2025, the conversation shifted again. Evidence that pretraining scaling was hitting diminishing returns led researchers to focus more on post-training scaling (how much can you improve a model after pretraining through RL, fine-tuning, or RLVR) and inference-time compute scaling (letting models think longer at test time). Scaling laws still apply in these new regimes, but the variables have changed.
