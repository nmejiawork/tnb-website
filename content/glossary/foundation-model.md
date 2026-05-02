---
slug: foundation-model
term: Foundation model
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - FM
  - base model
  - pretrained model
related:
  - llm
  - frontier-model
  - fine-tuning
  - open-weights
  - model-distillation
dateAdded: '2026-05-02'
shortDef: >-
  A large model trained on broad data that can be adapted to many tasks. It's
  the starting point most teams build on, via prompting, fine-tuning, or RAG,
  rather than training from scratch.
---
A foundation model is a large neural network trained on massive, diverse datasets using self-supervised learning. Because it learns general patterns across domains, it can be adapted to a wide range of downstream tasks without being rebuilt from scratch. LLMs like GPT, Claude, and Llama are the most familiar examples, but foundation models also exist for images, audio, and video.

The term was coined by Stanford researchers in 2021 specifically because earlier labels like 'large language model' were too narrow (not all FMs are language models) and 'pretrained model' undersold what made them special. The key insight: one model, trained once at massive scale, becomes the foundation for thousands of applications on top of it.

For builders, the practical consequence is that you almost never start from zero. You pick a foundation model that fits your use case, then layer on fine-tuning, retrieval, or prompting to specialize it. The cost and effort difference between training a foundation model and adapting one is enormous, which is why access to capable open-weight foundation models has been such a big deal for the broader builder community.
