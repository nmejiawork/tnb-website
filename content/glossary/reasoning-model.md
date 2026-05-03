---
slug: reasoning-model
term: Reasoning model
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - thinking model
  - extended thinking
  - o-series model
  - chain-of-thought model
related:
  - llm
  - chain-of-thought
  - inference-time-compute
  - temperature
dateAdded: '2026-05-02'
shortDef: >-
  An LLM variant that spends extra compute time 'thinking through' a problem
  before giving its final answer. Instead of responding instantly, it works
  through intermediate steps. Models like OpenAI's o3 and Claude's extended
  thinking mode work this way.
---
Standard LLMs generate a response token by token in a single forward pass, meaning they produce output as fast as they can without pausing to reflect. Reasoning models change this by explicitly allocating compute to an internal scratchpad where the model works through a problem step by step before producing its answer. This visible thinking trace is sometimes called chain-of-thought, though reasoning models take this further than a prompted technique.

The practical upside is meaningfully better performance on tasks that require multi-step logic, math, code debugging, and complex planning. The tradeoff is latency and cost. A reasoning model might take seconds or minutes to respond where a standard model responds almost instantly, and the extended thinking consumes tokens that show up in your bill.

In 2026, the major reasoning model families include OpenAI's o3 and o4-mini, Anthropic's Claude with extended thinking enabled, and Google's Deep Think mode in Gemini. The distinction between reasoning and non-reasoning models is becoming a standard part of how builders choose which model to use for a given task.
