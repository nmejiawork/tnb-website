---
slug: inference
term: Inference
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - model inference
  - LLM inference
  - AI inference
related:
  - token
  - llm
  - inference-time-compute
  - temperature
dateAdded: '2026-05-02'
shortDef: >-
  The act of running a trained AI model to generate a response. Training is when
  the model learns; inference is when it actually works. Every API call you make
  is inference. In 2026, the industry is shifting significant attention from
  training costs to inference costs and optimization.
---
In machine learning, there are two distinct phases: training, where a model learns from data and its weights, the internal numerical parameters, get updated; and inference, where you take a trained model and run new inputs through it to get outputs. As a builder using an API, every call you make is inference. You are not changing the model, you are running it.

Inference costs have become a major commercial and technical focus in 2026. As LLMs get deployed at scale across millions of users and agent-driven tasks, the cost per token at inference matters enormously. Companies like Anthropic, OpenAI, and Google are investing in techniques like speculative decoding, caching, and smaller distilled models to make inference faster and cheaper.

Builders need to think about inference economics when designing products. A simple chat interface might spend 99% of its cost on inference. An agentic workflow that loops many times through a model can quickly exceed budget if inference cost per step is not considered up front.
