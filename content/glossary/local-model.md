---
slug: local-model
term: Local model
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - on-device model
  - edge model
  - local llm
  - self-hosted model
related:
  - ollama
  - open-weights
  - byok
  - inference
  - fine-tuning
dateAdded: '2026-05-02'
shortDef: >-
  An AI model running on your own hardware rather than a cloud API. Local models
  offer complete data privacy, no API costs, offline access, and unlimited
  usage, at the cost of requiring sufficient hardware and accepting some
  performance tradeoffs.
---
Running a model locally means pulling the weights to your machine and running inference on your own GPU or CPU. Tools like Ollama make this simple: one command downloads the model and starts a local server. Your code talks to it the same way it would talk to a cloud API. No data leaves your machine, no API key is required, and usage is unlimited once you have the model.

The practical requirements: models are large files (7B parameter models are roughly 4-8GB; 70B models require 40GB+ and a capable GPU). Consumer-grade gaming GPUs can run smaller models competently. Larger models need workstation-class hardware or multi-GPU setups. Cloud APIs consistently outperform local models of comparable size on hard tasks, but the gap has narrowed significantly as open-weight model quality improved.

Common builder use cases for local models: development and testing where you want fast iteration without incurring API costs, privacy-sensitive data that cannot leave your network, offline capability for demos or travel, and high-volume batch processing where API costs would be prohibitive. Many teams use local models as a development tier and frontier APIs for production, keeping the same code and swapping the endpoint.
