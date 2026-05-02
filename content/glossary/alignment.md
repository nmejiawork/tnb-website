---
slug: alignment
term: Alignment
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - AI alignment
  - model alignment
  - value alignment
related:
  - rlhf
  - constitutional-ai
  - reinforcement-fine-tuning
  - sycophancy
  - red-teaming
dateAdded: '2026-05-02'
shortDef: >-
  The process of training an AI model to behave in ways that match human
  intentions and values, not just optimize for narrow metrics. It's the
  difference between a model that's technically capable and one that's actually
  safe and useful.
---
An unaligned model might be highly capable but respond in ways that are harmful, deceptive, or simply unhelpful in practice. Alignment is the ongoing effort to close the gap between what a model is technically able to do and what you actually want it to do. RLHF (reinforcement learning from human feedback) and Constitutional AI are two of the main techniques used to achieve this.

Alignment problems show up at different levels. At the surface level, a model might be overly cautious, refuse reasonable requests, or give flattering but wrong answers (sycophancy). At a deeper level, researchers worry about whether models might develop goals that diverge from human values as they become more capable, potentially pursuing objectives in ways that were never intended.

For builders, alignment shows up most concretely in how a model responds to edge cases, sensitive topics, and adversarial inputs. Fine-tuning, guardrails, and system prompts are all tools builders use to layer additional alignment on top of what the base model already has. The field is active and imperfect: no current method can reliably prevent all misaligned outputs.
