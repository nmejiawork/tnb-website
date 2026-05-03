---
slug: guardrails
term: Guardrails
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - AI guardrails
  - safety rails
  - output filters
  - content filters
related:
  - human-in-the-loop
  - ai-agent
  - system-prompt
  - llm
dateAdded: '2026-05-02'
shortDef: >-
  Rules, filters, or checks put in place to constrain what an AI model or agent
  can do or say. Guardrails can be soft, like instructions in a system prompt,
  or hard, like code that intercepts and blocks specific outputs or actions
  before they execute.
---
Guardrails are the safety net between an AI system and the real world. They exist because even well-designed models can produce outputs that are wrong, harmful, or off-policy for a given application. The job of guardrails is to catch these cases before they reach a user or trigger an irreversible action.

Soft guardrails live in the system prompt: instructions like 'never discuss competitor products' or 'always include a disclaimer.' Hard guardrails are external code: an output classification layer that flags inappropriate content before it is displayed, a permission check before a tool is called, or a circuit breaker that pauses an agent if it tries to take an action outside its approved scope.

In agentic systems, guardrails are especially critical because agents make sequences of decisions and each step can compound errors from earlier ones. The field of AI safety engineering is increasingly focused on building guardrails that are both robust and non-annoying, because overly aggressive filtering breaks useful functionality just as surely as no filtering at all.
