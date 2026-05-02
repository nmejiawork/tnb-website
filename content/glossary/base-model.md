---
slug: base-model
term: Base model
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - pretrained base model
  - foundation LLM
  - pretraining checkpoint
related:
  - instruct-model
  - fine-tuning
  - sft
  - model-weights
  - foundation-model
dateAdded: '2026-05-02'
shortDef: >-
  A model right after pretraining, before any alignment or instruction tuning.
  It predicts the next token well but doesn't know how to hold a conversation or
  follow instructions. The raw material that post-training refines.
---
The base model is the output of the initial large-scale pretraining run: the model has absorbed enormous amounts of text and learned to predict what comes next, but it hasn't been shaped to be a helpful assistant. Give it a question and it might respond with more questions, continue as if writing a document, or generate text that's plausible but completely unhelpful. It's a powerful text predictor, not a conversational agent.

Labs typically release both base and instruct checkpoints for their open-weight models. The base model is useful for researchers who want to understand the model before alignment, for teams that want to run their own SFT from scratch, or for domain-specific pretraining where adding more data before alignment makes sense. For most product builders, the instruct model is the practical starting point.

Understanding the base/instruct distinction helps explain why fine-tuning choices matter. Fine-tuning an instruct model adjusts behavior built on top of the base. Fine-tuning a base model means building all the instruction-following behavior yourself. The tradeoff is control versus effort: starting from base gives you more latitude, but you take on the responsibility for all the post-training work that labs have already done for you.
