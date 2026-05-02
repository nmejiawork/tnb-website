---
slug: post-training
term: Post-training
type: Concept
topic: AI Models & Capabilities
familiarity: Emerging
aliases:
  - post-training pipeline
  - alignment training
  - post-pretraining
related:
  - sft
  - dpo
  - rlhf
  - reinforcement-fine-tuning
  - fine-tuning
dateAdded: '2026-05-02'
shortDef: >-
  Everything that happens to a model after the initial large-scale pretraining:
  fine-tuning, alignment, RLHF, DPO, and RL. Post-training is what turns a raw
  next-token predictor into a helpful, safe, instruction-following assistant.
---
Pretraining is where the model learns the world from raw text at scale. Post-training is where the model learns to behave. The standard pipeline runs roughly as follows: supervised fine-tuning (SFT) teaches the model to follow instructions, DPO or preference learning shapes which responses it prefers, and reinforcement learning (sometimes with verifiable rewards, as in RLVR) teaches it to reason and solve problems.

Post-training has become increasingly expensive and central to what differentiates models. For reasoning models like DeepSeek-R1, the RL post-training stage consumed 40% or more of the total compute budget. The quality of post-training data, the mix of SFT versus RL, and the reward signal design are now major competitive differentiators between model providers.

For builders, post-training matters because the model you're using has already been shaped by whoever ran this pipeline. Fine-tuning is essentially running a smaller-scale version of post-training on your own data to further specialize the model for your use case. Understanding what post-training does explains why instruct models behave differently from base models, and why fine-tuning instruct models versus base models requires different approaches.
