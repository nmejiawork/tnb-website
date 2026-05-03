---
slug: instruct-model
term: Instruct model
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - instruction-tuned model
  - chat model
  - assistant model
related:
  - sft
  - post-training
  - fine-tuning
  - model-weights
  - base-model
dateAdded: '2026-05-02'
shortDef: >-
  A base model that's been fine-tuned to follow instructions and hold
  conversations. The difference between a raw LLM and the assistant you actually
  talk to. Almost every model you interact with via chat is an instruct model.
---
A base model trained purely on next-token prediction doesn't know what to do with a question or instruction. If you prompt it with 'Explain how photosynthesis works,' it might just continue the sentence in a random direction. An instruct model has been fine-tuned on thousands of prompt-response examples and alignment techniques so it responds helpfully when given instructions.

The naming convention varies by lab. OpenAI uses 'GPT-4o' versus 'GPT-4-base.' Meta uses 'Llama-3-Instruct' versus 'Llama-3.' Anthropic's publicly released models are all instruct models by default. When you see an open-weight model on Hugging Face (an open-source model repository), you'll often find both a base checkpoint and one or more instruct variants.

For builders doing fine-tuning, the choice between starting from a base model versus an instruct model matters. Starting from an instruct model is usually faster and safer for products where you want conversational behavior. Starting from a base model gives more flexibility for domain-specific pre-training, but requires more work to make the result usable. Most practical fine-tuning projects today start from an instruct model.
