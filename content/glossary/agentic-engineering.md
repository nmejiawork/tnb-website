---
slug: agentic-engineering
term: Agentic engineering
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - agentic development
  - agentic coding
  - agent-first development
related:
  - vibe-coding
  - parallel-agents
  - background-agent
  - agent-scaffold
  - context-engineering
dateAdded: '2026-05-02'
shortDef: >-
  A development approach where humans write specifications and review outputs
  while AI agents do the code writing. The engineer's role shifts from
  implementing features to directing, coordinating, and reviewing agent work.
---
Andrej Karpathy coined vibe coding in early 2025 to describe giving in to AI-generated code without fully understanding it. In February 2026, he declared vibe coding passe and proposed something bigger: agentic engineering. The idea: humans stop writing code almost entirely and instead direct AI agents that do it for them. The human skill set shifts from implementation to specification, coordination, and review.

In practice, agentic engineering involves: writing clear task specs that agents can execute without asking for clarification, decomposing work into agent-sized units, running multiple background agents simultaneously, reviewing diffs and pull requests rather than writing code, and maintaining the agent infrastructure (CLAUDE.md files, skills, scaffold configuration) that makes agents effective.

The pattern is already visible in how experienced builders describe their workflows in 2026: assigning five tasks to five parallel agents, reviewing their pull requests, merging the good ones, and giving feedback on the rest. The bottleneck moved from 'how fast can I type code' to 'how clearly can I specify what I want and how rigorously can I review it.' Engineering skill did not become less important, it just expressed differently.
