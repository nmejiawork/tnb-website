---
slug: reinforcement-fine-tuning
term: Reinforcement Fine-Tuning
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - RFT
  - reinforcement finetuning
  - RL fine-tuning
related:
  - fine-tuning
  - rlhf
  - evals
  - reasoning-model
dateAdded: '2026-05-02'
shortDef: >-
  A technique for customizing a reasoning model by training it with
  reinforcement learning on examples specific to your domain, rather than just
  prompting or standard fine-tuning. The model learns to reason better on your
  particular tasks by being rewarded for correct answers.
---
Standard fine-tuning teaches a model to imitate examples: you show it inputs and outputs and it adjusts weights to match the pattern. Reinforcement fine-tuning goes further: you define a grader (a function or model that scores the output) and the model learns through trial and error, optimizing for whatever that grader rewards. Applied to reasoning models, this produces a version of the model that is specifically better at your type of problem.

OpenAI made RFT generally available on o4-mini and in beta for GPT-5, framing it as a way for domain-specific teams to build reasoning performance that generic prompting cannot achieve. Use cases include legal document analysis, scientific literature extraction, code review, and financial modeling, anywhere that structured domain expertise in the reasoning process matters.

RFT requires more infrastructure than standard fine-tuning: you need a robust grader, enough labeled examples, and the compute budget for RL training runs. For most builders, it is overkill unless the domain gap between a general model and a specialized one produces unacceptable error rates. But for enterprise teams with well-defined, high-stakes tasks, it's a meaningful lever.
