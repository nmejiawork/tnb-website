---
slug: fine-tuning
term: Fine-tuning
type: Concept
topic: Patterns & Practices
familiarity: Common
aliases:
  - model fine-tuning
  - supervised fine-tuning
  - SFT
  - LoRA fine-tuning
related:
  - llm
  - rag
  - prompt-engineering
  - rlhf
dateAdded: '2026-05-02'
shortDef: >-
  Further training a pre-trained model on your own dataset to specialize its
  behavior. Shifts how the model responds, not just what it knows. More
  expensive and slower to iterate than RAG or prompt engineering, but useful for
  deeply changing tone, format, or domain expertise.
---
A base LLM has broad capabilities learned from massive pre-training. Fine-tuning takes that model and continues training it on a curated, smaller dataset, typically hundreds to thousands of examples, to make it better at a specific task or to change how it behaves. It modifies the model's internal weights rather than just giving it instructions in the prompt.

Fine-tuning is best used when you need to change the model's style, output format, or reasoning patterns in ways that are hard to achieve through prompting alone. It is also useful for building smaller, cheaper models that match the quality of larger ones on a narrow task. The downside is cost and iteration speed. Collecting and cleaning training data takes time. Runs cost money. And if your requirements change, you have to retrain.

In 2026, LoRA, which stands for Low-Rank Adaptation, is the dominant technique for fine-tuning because it updates only a small subset of model parameters, making it far cheaper than full fine-tuning. For most builders, the recommended path is: start with prompt engineering, add RAG if you need to ground knowledge, and only consider fine-tuning after the other two approaches hit their ceiling.
