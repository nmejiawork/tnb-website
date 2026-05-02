---
slug: sft
term: SFT
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - Supervised Fine-Tuning
  - instruction tuning
related:
  - fine-tuning
  - dpo
  - rlhf
  - alignment
  - reinforcement-fine-tuning
dateAdded: '2026-05-02'
shortDef: >-
  The first step in turning a base model into an instruction-following
  assistant: show it thousands of prompt-response examples and train it to
  produce similar outputs. It's what turns a raw 'autocomplete' model into
  something that answers questions.
---
A freshly pretrained base model is essentially a very good text predictor: given text, it continues it. If you ask it a question, it might just continue the question or riff on the topic rather than actually answering. SFT is the training step that bridges this gap. You feed the model curated prompt-response pairs and train it to produce appropriate responses given instructions. After SFT, the model knows to answer, explain, follow instructions, and hold a conversation.

SFT is the foundation of every instruction-following model you interact with, including ChatGPT, Claude, and Llama-Instruct variants. The quality of SFT data matters enormously: garbage examples produce a model that confidently does the wrong thing. Labs invest heavily in curating, filtering, and generating high-quality SFT datasets, and increasingly use AI-generated synthetic data to scale beyond what human annotators can produce.

In post-training pipelines for reasoning models, SFT often serves as a 'cold start' before reinforcement learning, giving the model a foundation of good response patterns before it explores on its own. But over-training with SFT can also constrain what RL can unlock, which is why the optimal mix of SFT and RL is an active research question.
