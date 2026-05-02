---
slug: agentic-loop
term: Agentic loop
type: Concept
topic: Agents & Automation
familiarity: Emerging
aliases:
  - agent loop
  - think-act loop
  - observe-reason-act loop
  - ReAct loop
related:
  - ai-agent
  - mcp
  - tool-use
  - multi-agent
  - human-in-the-loop
dateAdded: '2026-05-02'
shortDef: >-
  The core cycle an AI agent runs through: observe the current state, reason
  about what to do, take an action using a tool, observe the result, and repeat.
  It keeps going until the task is done or the agent gets stuck. The basic
  engine of any agent.
---
When an AI doesn't just answer once, it keeps going. The model takes an action, sees what happens, decides what to do next, and repeats until the job is done. That cycle is the agentic loop. It's what separates an agent from a one-shot chatbot response. Each iteration can involve calling tools, querying databases, running code, browsing the web, or taking actions in other software.

The loop structure is also called ReAct, a pattern from AI research that stands for Reasoning and Acting. The model alternates between thinking about what to do next and actually doing it, using tool call results as observations that feed the next reasoning step. Most modern agent frameworks, from LangGraph to OpenAI's Agents SDK, are built around variations of this loop.

Knowing how to design a well-behaved loop is one of the key skills in building agents that work reliably. Common failure modes include infinite loops, where the agent keeps calling tools without making progress; context overflow, where the loop runs so many iterations that earlier steps fall out of the context window; and poor exit conditions, where the agent does not know when to stop.
