---
slug: open-weights
term: Open weights
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - open weight model
  - open-weight
  - open weight
  - open-weights model
related:
  - open-source-model
  - fine-tuning
  - ollama
  - model-distillation
  - frontier-model
dateAdded: '2026-05-02'
shortDef: >-
  AI models whose trained parameters (weights) are publicly released for
  download and use, but not necessarily with fully open training code or data.
  The practical distinction: you can run and fine-tune the model, but you may
  not know exactly how it was built.
---
Open weights sits between fully open-source AI (where everything, code, data, and training pipeline, is public) and closed proprietary models (where nothing is shared). An open-weights release gives you the actual model parameters: the billions of numbers that encode what the model learned. You can download them, run the model locally, fine-tune it on your own data, and inspect its outputs. What you often cannot do is reproduce the training from scratch, because the training data or code is not shared.

In practical builder terms, open weights means: you can run it locally with tools like Ollama, you can fine-tune it on your own data without API dependencies, you can deploy it on your own infrastructure without usage-based costs, and you can audit what the model does without going through an API. Models like Llama 4, Qwen 3, and Gemma 4 follow this model.

The open-weights ecosystem matured significantly in 2026. Qwen and DeepSeek models from Chinese labs became widely adopted globally, raising geopolitical questions about which open weights to trust for sensitive workloads. Western alternatives from Meta, Google, and OpenAI gained urgency as a result. For builders, open weights offer a real path to cost control, customization, and data sovereignty that closed APIs cannot match.
