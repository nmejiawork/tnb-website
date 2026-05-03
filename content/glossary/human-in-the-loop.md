---
slug: human-in-the-loop
term: Human-in-the-loop
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - HITL
  - human oversight
  - human approval
  - human-on-the-loop
related:
  - ai-agent
  - agentic-loop
  - multi-agent
  - guardrails
dateAdded: '2026-05-02'
shortDef: >-
  A design pattern where a human is brought in at specific points in an AI
  agent's workflow to review, approve, or redirect before the agent continues.
  Not constant supervision, but intentional checkpoints at high-stakes or
  irreversible steps.
---
As agents take on tasks with real-world consequences, such as sending emails, modifying databases, spending money, or interacting with customers, the question of when to involve a human becomes a core design decision. Human-in-the-loop (HITL) is the practice of defining those checkpoints explicitly, rather than letting agents run fully unattended through consequential actions.

In 2022, HITL in AI mostly meant a human reviewed model output before it was published. In 2026, it means a human approves specific actions before an agent executes them in production. The design challenge is calibration: too many checkpoints make the agent slow and annoying to use. Too few checkpoints and irreversible mistakes happen at agent speed. The right answer depends on the stakes of each action type.

Common patterns include 'confirm before writing to production,' 'escalate when confidence is below a threshold,' and 'always require human sign-off for financial transactions above a set amount.' Agentic systems that handle this well define these rules explicitly in code and in system prompts rather than relying on the model to decide when to ask.
