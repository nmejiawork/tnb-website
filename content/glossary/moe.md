---
slug: moe
term: MoE
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - Mixture of Experts
  - sparse mixture of experts
related:
  - frontier-model
  - inference
  - llama-4
  - model-distillation
dateAdded: '2026-05-02'
shortDef: >-
  Short for Mixture of Experts. A model architecture that activates only a
  subset of specialized sub-networks per input token, enabling very large total
  parameter counts while keeping inference fast and cheap. Llama 4, Mixtral, and
  several frontier models use this design.
---
See Mixture of Experts for the full definition. MoE is the common abbreviation you'll encounter in model releases, benchmarks, and architecture discussions. When a model card says '400B total, 17B active,' that's MoE: 400 billion parameters exist but only 17 billion are used per token.

The practical implications for builders: always look at active parameters, not total parameters, when estimating inference costs. A 400B MoE model can cost roughly the same to run as a 17B dense model, and may significantly outperform it on complex tasks. The routing overhead is small and the quality benefits from having specialized experts are real.

MoE has moved from a research curiosity to a mainstream architectural choice for large models. Mistral's Mixtral was the first widely-deployed open MoE model; Llama 4 brought it to Meta's flagship release; GPT-4 and several frontier closed models are rumored to use MoE internally.
