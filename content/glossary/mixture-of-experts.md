---
slug: mixture-of-experts
term: Mixture of Experts
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - MoE
  - sparse MoE
  - mixture-of-experts architecture
related:
  - frontier-model
  - inference
  - model-distillation
  - open-weights
dateAdded: '2026-05-02'
shortDef: >-
  A model architecture where only a fraction of the model's sub-networks (called
  experts) activate for any given input, instead of using the full model every
  time. This lets you build very large models that stay fast and cheap to run
  because most of the model sits idle on each token.
---
Traditional dense models use all their parameters on every token. A mixture-of-experts model routes each token to just a subset of specialized sub-networks. A gating mechanism decides which experts handle which inputs. The result is a model with a huge total parameter count that behaves more like a smaller model at inference time, because most parameters aren't activated.

Llama 4 used MoE as a core architectural choice: Maverick has 400B total parameters but only 17B active parameters per token, which is why it can run on fewer GPUs than its total size implies. Mixtral from Mistral AI was an earlier widely-used open MoE model. The MoE design is now standard in most frontier-scale open-weight models.

For builders, MoE matters primarily when evaluating open-weight models for self-hosting: a model's active parameter count (not total) drives inference cost and speed. A 400B MoE model can be both more capable and cheaper to run than a 70B dense model, depending on the task.
