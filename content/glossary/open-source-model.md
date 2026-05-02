---
slug: open-source-model
term: Open-source model
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - open model
  - open-weights model
  - open source LLM
  - OSS model
related:
  - llm
  - fine-tuning
  - inference
  - mlops
dateAdded: '2026-05-02'
shortDef: >-
  An AI model whose weights are publicly released so anyone can download, run,
  and modify it. Models like Meta's Llama and Mistral are the main examples.
  Contrast with closed models like Claude or GPT-4, which you can only access
  via API. Open models give you data privacy and customization control but
  require your own infrastructure.
---
Most frontier AI models, the most capable ones, are closed: you access them via an API, your data flows through the provider's servers, and you have no ability to modify the model itself. Open-source models flip this. When Meta releases a Llama model, anyone can download the weights, run the model on their own hardware, and fine-tune it on their own data without the original data ever leaving their systems.

The quality gap between open and closed models has been narrowing fast. In 2026, efficient open-source models like Llama and Mistral are good enough for many use cases that previously required frontier APIs. This is significant for builders with data privacy requirements, enterprise compliance needs, or workloads at a scale where API costs become prohibitive.

The practical constraint is infrastructure. Running a capable open-source model requires GPU hardware, either owned or rented from a cloud provider. This adds operational complexity compared to a simple API call. Managed inference services for open-source models, offered by providers like Together AI and Fireworks AI, bridge this gap by letting you use open models without managing the hardware yourself.
