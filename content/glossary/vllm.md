---
slug: vllm
term: vLLM
type: Tool
topic: Infrastructure
familiarity: Specialist
aliases:
  - vLLM inference server
  - PagedAttention
related:
  - local-model
  - ollama
  - llama-stack
  - inference
  - open-weights
dateAdded: '2026-05-02'
shortDef: >-
  A high-throughput open-source inference server for large language models. It's
  the standard way to serve open-weight models like Llama in production at
  scale, optimized for GPU efficiency through a technique called PagedAttention.
---
vLLM was built at UC Berkeley and quickly became the go-to inference serving framework for teams running their own open-weight models. Its core innovation, PagedAttention, manages GPU memory more efficiently by treating the KV cache (the stored attention state for a conversation) like virtual memory pages rather than reserving large fixed blocks. The result is significantly higher throughput than naive serving implementations.

In practice, vLLM exposes an OpenAI-compatible API endpoint. That means any application built against the OpenAI API can point at a vLLM server running a local Llama or Mistral model with minimal code changes. This compatibility has made it the default serving layer for teams switching between hosted and self-hosted model backends.

Ollama is the simpler, developer-friendly option for local experimentation on a single machine. vLLM is the production-grade option for teams running multi-GPU inference clusters or serving models to many concurrent users. If you're self-hosting Llama 4 or any other large open-weight model in production, vLLM is the current industry standard.
