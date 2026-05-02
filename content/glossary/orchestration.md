---
slug: orchestration
term: Orchestration
type: Concept
topic: Agents & Automation
familiarity: Emerging
aliases:
  - agent orchestration
  - workflow orchestration
  - LLM orchestration
related:
  - multi-agent
  - ai-agent
  - agentic-loop
  - mcp
  - tool-use
dateAdded: '2026-05-02'
shortDef: >-
  Coordinating multiple AI models, agents, or tools to complete a larger task.
  The orchestration layer decides what runs when, passes outputs between steps,
  handles failures, and ensures the pieces work together as a system rather than
  a collection of isolated calls.
---
As AI applications become more complex, a single model call is rarely enough. You might need to route different queries to different models, run a retrieval step before a generation step, have one agent plan and another execute, or fan out to multiple agents in parallel and collect their results. The orchestration layer manages all of this.

In code, orchestration is handled by frameworks like LangGraph, OpenAI's Agents SDK, or CrewAI. These frameworks give you primitives for defining agent roles, connecting them to tools, managing state across steps, and handling the control flow that determines which agent acts next and what it receives as input. Without an orchestration layer, complex multi-step workflows become hard to debug, expensive to maintain, and fragile in production.

The right level of orchestration depends on the task. Simple sequential chains, where step A feeds step B, require minimal orchestration. Dynamic workflows where an agent might take different paths based on what it discovers mid-task, or multi-agent systems where specialists collaborate, require heavier orchestration with explicit state management and error handling.
