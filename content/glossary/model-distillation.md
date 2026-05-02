---
slug: model-distillation
term: Model distillation
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - knowledge distillation
  - distilled model
  - model compression
related:
  - llm
  - fine-tuning
  - open-source-model
  - inference
dateAdded: '2026-05-02'
shortDef: >-
  The process of training a smaller model to replicate the behavior of a larger
  one. The small 'student' model learns from the large 'teacher' model's
  outputs, often reaching 80 to 90% of the quality at a fraction of the size and
  inference cost.
---
Full-sized frontier models are expensive to run. Distillation is a technique for creating smaller, cheaper models that are nearly as good for specific tasks. The student model is not trained on raw data the way the teacher was; it is trained on the teacher's output distributions, learning to mimic what the teacher would say rather than learning from scratch.

Distillation enables several things that matter to builders: cheaper inference (smaller models cost less per token), faster response times, and the ability to deploy capable models on hardware that cannot run the full-sized version. Many of the smaller 'mini' and 'flash' models from major AI labs are produced through distillation from their larger counterparts.

One nuance: distilled models tend to be excellent in the range of tasks the teacher handled well, but they inherit any blind spots and may be more brittle on edge cases. They also tend to do best when the distillation data closely matches the domain they will be used in, which is why domain-specific distillation is often more effective than general-purpose distillation for niche applications.
