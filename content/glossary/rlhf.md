---
slug: rlhf
term: RLHF
type: Concept
topic: AI Models & Capabilities
familiarity: Specialist
aliases:
  - Reinforcement Learning from Human Feedback
  - reinforcement learning from human feedback
  - RLAIF
  - DPO
related:
  - llm
  - fine-tuning
  - reasoning-model
dateAdded: '2026-05-02'
shortDef: >-
  The training technique used to align LLMs with human preferences. Human raters
  score model outputs, and the model is trained to prefer responses that get
  better ratings. It's why ChatGPT and Claude are helpful and avoid obviously
  harmful outputs. Most builders won't implement this but will encounter the
  term.
---
Pre-trained language models are good at predicting text but not necessarily at being helpful, honest, or safe. RLHF is the technique used to bridge that gap. Human raters evaluate pairs of model responses and indicate which one is better. These preferences train a 'reward model' that learns to predict human ratings. The base language model is then fine-tuned using reinforcement learning to maximize this reward, nudging it toward outputs humans rate highly.

RLHF is why modern AI assistants apologize, hedge their statements, refuse certain requests, and maintain a helpful tone. The process bakes human values and preferences directly into model behavior. Anthropic's Constitutional AI, used in Claude, is a variant that partly replaces human raters with a set of written principles, called a constitution, that the model uses to critique and revise its own outputs.

Most builders will never run RLHF themselves; it requires enormous computational resources and human labeling infrastructure. But understanding the concept explains a lot about model behavior: why models sometimes refuse edge cases that seem harmless, why outputs can be overly cautious, and why different models have noticeably different 'personalities.' The choices made during RLHF shape every interaction a user has with the model.
