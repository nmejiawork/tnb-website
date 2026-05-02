---
slug: spec-driven-development
term: Spec-driven development
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - spec-driven
  - specification-driven development
  - spec first
  - spec-first ai coding
related:
  - agentic-engineering
  - background-agent
  - parallel-agents
  - claude-md
  - context-engineering
dateAdded: '2026-05-02'
shortDef: >-
  A development pattern where you write a detailed specification first, then
  hand it to an AI agent to implement. The spec becomes the primary artifact: it
  is the interface between human intent and agent execution.
---
Spec-driven development emerged as the natural complement to agentic engineering. When you are directing AI agents rather than writing code yourself, the quality of your specification determines the quality of the output. A vague prompt produces vague code. A detailed spec covering edge cases, error handling, data schemas, and acceptance criteria gives the agent what it needs to implement correctly without clarification.

In practice, a spec for agent consumption looks like a technical document: it describes the feature, the inputs and outputs, the constraints, the expected behavior in edge cases, and optionally the test criteria for acceptance. Builders share these as markdown files passed to agents via CLAUDE.md references, slash commands, or context files. Augment Code's 'Intent' product positioned itself explicitly as 'spec-driven multi-agent development' in 2026.

The pattern has a direct impact on parallel agent workflows. If you are running five agents simultaneously on five tasks, you need five good specs. The investment in spec writing pays off compounded: a spec written for one agent run can be refined and reused, becomes documentation, and trains future developers (human or AI) on what the feature is supposed to do. Teams that get good at spec writing often find their velocity increases non-linearly.
