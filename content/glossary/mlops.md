---
slug: mlops
term: MLOps
type: Concept
topic: Infrastructure
familiarity: Emerging
aliases:
  - machine learning operations
  - ML operations
  - ModelOps
related:
  - ai-engineer
  - agentops
  - fine-tuning
  - llm
dateAdded: '2026-05-02'
shortDef: >-
  The practice of deploying, monitoring, and maintaining machine learning models
  in production. Like DevOps but for AI. Covers how models are versioned,
  updated, monitored for drift, and managed through their lifecycle once they're
  running in real products.
---
Training a model is only part of the job. Getting it into a product that users depend on, and keeping it working well over time as data changes and requirements evolve, is the challenge that MLOps addresses. It borrows concepts from DevOps (the practice of managing software systems in production) and adapts them for the particularities of machine learning systems.

Core concerns in MLOps include model versioning and reproducibility, monitoring for performance degradation (sometimes called model drift, when a model's real-world performance declines because the input distribution has shifted from what it was trained on), automated retraining pipelines, A/B testing of model variants, and infrastructure for scalable inference.

As AI moves from research to production at scale, MLOps tooling has matured significantly. Tools like MLflow and Weights and Biases handle experiment tracking and model versioning. Kubernetes manages deployment infrastructure. In 2026, the emerging parallel discipline is AgentOps, which applies similar principles to the specific challenges of deploying and monitoring AI agents rather than standalone models.
