---
slug: llama-4
term: Llama 4
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - Llama 4 Scout
  - Llama 4 Maverick
  - Llama 4 Behemoth
  - Meta Llama 4
related:
  - open-weights
  - mixture-of-experts
  - llama-stack
  - local-model
  - model-distillation
dateAdded: '2026-05-02'
shortDef: >-
  Meta's fourth-generation family of open-weight language models, released April
  2025. Llama 4 uses a mixture-of-experts architecture, is natively multimodal
  (text and images), and comes in sizes ranging from a lightweight Scout to the
  massive, multi-trillion-parameter Behemoth.
---
Llama 4 is Meta's most significant architectural departure from earlier Llama generations. Scout (17B active, 109B total parameters, 10M token context window) is designed to run on limited hardware while Maverick (17B active, 400B total parameters) aims for frontier-adjacent performance at reasonable inference cost. Behemoth, the teacher model used to train the others, was announced but not yet publicly released as of mid-2026.

The MoE architecture means the active parameter count per token is far smaller than the total parameter count, which matters for hosting costs. Llama 4 Scout's 10-million-token context window is the largest of any openly available model. Both Scout and Maverick are natively multimodal, handling text and image inputs across 12 languages.

Llama 4 continues a ongoing debate about the term open-source. Meta distributes the weights openly for most commercial uses but the license includes restrictions that the Open Source Initiative says fail the open-source definition. Most practitioners call these models open-weight rather than open-source, which is a meaningful distinction when evaluating licensing for production deployments.
