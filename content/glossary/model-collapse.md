---
slug: model-collapse
term: Model collapse
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - AI model collapse
  - generative model collapse
related:
  - synthetic-data
  - fine-tuning
  - llm
  - hallucination
dateAdded: '2026-05-02'
shortDef: >-
  What happens when a model is trained repeatedly on AI-generated content
  instead of human-created data. Output quality degrades over iterations,
  diversity drops, and the model drifts toward a narrower, less accurate version
  of reality.
---
Models learn from data. If that data increasingly comes from other AI models rather than humans, each generation of training amplifies the errors and biases of the previous one. Small distortions get reinforced, rare information disappears, and the model converges on a blander, more homogeneous output distribution. This is model collapse: a degradation loop caused by recursive self-referential training.

The concern is practical, not just theoretical. As AI-generated content floods the internet, the training data for future models will include more of it. If labs don't actively filter for human-origin content or maintain separate human-curated datasets, model quality could erode over generations. Research published in 2023 and 2024 demonstrated the phenomenon in controlled settings.

For builders using fine-tuning or RAG (retrieval-augmented generation), model collapse is a reminder that data quality matters more than data quantity. Fine-tuning on AI-generated examples without human review, or populating a knowledge base entirely from AI summaries rather than primary sources, can introduce similar degradation at smaller scale.
