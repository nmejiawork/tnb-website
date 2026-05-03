---
slug: model-weights
term: Model weights
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - weights
  - parameters
  - model parameters
related:
  - open-weights
  - fine-tuning
  - quantization
  - model-distillation
  - local-model
dateAdded: '2026-05-02'
shortDef: >-
  The billions of numerical values stored in a trained AI model that encode
  everything it learned. Weights are what get adjusted during training, and what
  you download when you run an open-weight model locally.
---
A neural network is, at its core, a mathematical function with millions or billions of numerical parameters, called weights. During training, the model processes data and adjusts these weights using gradient descent (a method of repeatedly nudging weights in the direction that reduces prediction error). After training is complete, the weights are fixed and contain the model's learned knowledge and capabilities.

When people talk about a 70B model, the '70B' refers to 70 billion weights. More weights means more capacity to store patterns and knowledge, but also more memory and compute required to run the model. A 70B model running at full precision (32-bit floating point numbers) requires roughly 140GB of memory just to hold the weights, which is why quantization techniques that compress the numbers to 4 or 8 bits are important for running large models on consumer hardware.

The weights are what get shared when a lab releases an open-weight model. Having access to the weights means you can run the model on your own hardware, fine-tune it on your own data, inspect its internals, or build derivative models. Closed models like GPT-4 or Claude never expose their weights: you can only access them via API.
