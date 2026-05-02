---
slug: hallucination
term: Hallucination
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - confabulation
  - AI hallucination
  - model hallucination
related:
  - llm
  - rag
  - grounding
  - fine-tuning
dateAdded: '2026-05-02'
shortDef: >-
  When an AI model generates something that sounds completely plausible but is
  factually wrong. Citing a study that does not exist, inventing statistics, or
  misremembering a date. The model is not lying; it genuinely has no way to know
  the difference.
---
Hallucination happens because LLMs are trained to produce statistically probable text, not to retrieve verified facts. When the model does not know something, it does not stop and say so. It produces the most plausible-sounding continuation of the prompt, which can be entirely fabricated. This is a structural property of how the models work, not a bug that will simply be patched away.

For builders, this is one of the most important failure modes to design around. Common mitigations include grounding, which means giving the model real documents or data to reference rather than relying on its training, using retrieval-augmented generation, asking the model to cite its sources, and setting up evaluation pipelines to catch errors before they reach users.

Hallucination rates vary significantly across models and tasks. Models are much less likely to hallucinate on well-represented topics and much more likely to hallucinate on niche facts, recent events, or anything outside their training data. The risk is highest when users trust the output without verifying it.
