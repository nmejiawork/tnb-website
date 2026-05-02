---
slug: agent-scaffold
term: Agent scaffold
type: Concept
topic: Agents & Automation
familiarity: Specialist
aliases:
  - agent scaffolding
  - agent harness
  - agent infrastructure
related:
  - agentic-loop
  - orchestration
  - context-engineering
  - evals
  - swe-bench
dateAdded: '2026-05-02'
shortDef: >-
  The non-model infrastructure that wraps around an LLM to make it function as
  an agent: the tool definitions, system instructions, context retrieval logic,
  error recovery, and state management that determine how the agent actually
  behaves.
---
The scaffold is everything around the model. The model itself generates text; the scaffold decides what information it sees, what tools it can call, how it recovers from failures, and how its state is persisted between turns. Two agents running the same underlying model can score wildly differently depending solely on the quality of their scaffold.

SWE-bench data made this concrete: the same model running Claude Opus 4.5 scored between 50% and 55% depending on which agent framework wrapped it, with a standardized scaffolding scoring 46%. The harness around the model provides roughly 2x the performance impact of the model itself, according to research cited in 2026 benchmark analyses. That means investing in scaffold quality often outperforms switching to a marginally better model.

Practically, scaffold includes: the tools your agent can use and how they are described, the system prompt and instruction structure, how your agent retrieves relevant code context, how it handles tool call failures and retries, and how it compacts older context to avoid hitting token limits. Builders who treat scaffold engineering as a first-class discipline consistently get better agent performance than those who treat it as an afterthought.
