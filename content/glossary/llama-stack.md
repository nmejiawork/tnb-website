---
slug: llama-stack
term: Llama Stack
type: Tool
topic: Infrastructure
familiarity: Emerging
aliases:
  - Meta Llama Stack
related:
  - open-weights
  - local-model
  - agent-framework
  - fine-tuning
dateAdded: '2026-05-02'
shortDef: >-
  Meta's open-source framework for building AI applications on top of Llama
  models. It provides standardized interfaces for fine-tuning, inference, safety
  tooling, and agentic application development, so developers get a consistent
  API regardless of where they deploy.
---
Llama Stack is Meta's attempt to create a standard developer experience across the Llama ecosystem. Instead of each deployment target (local, cloud, edge) requiring different code, Llama Stack defines a common set of building blocks and APIs. You write your app once and can run it on AWS, Google Cloud, Azure, or your own hardware without major rewrites.

The Stack covers the full application lifecycle: model download and serving, fine-tuning pipelines, synthetic data generation, safety integrations like Llama Guard, and agentic application primitives. Red Hat, Databricks, and major cloud providers have all committed to Llama Stack integration.

For builders self-hosting Llama models, Llama Stack reduces the operational overhead of stitching together inference servers, fine-tuning frameworks, and safety layers. It is a complement to tools like vLLM and Ollama, which handle the serving layer, by providing the higher-level application framework on top.
