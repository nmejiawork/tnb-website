---
slug: a2a-protocol
term: A2A protocol
type: Concept
topic: Agents & Automation
familiarity: Specialist
aliases:
  - agent to agent
  - agent-to-agent protocol
  - a2a
  - google a2a
related:
  - mcp
  - orchestration
  - multi-agent
  - tool-use
  - agentic-loop
dateAdded: '2026-05-02'
shortDef: >-
  Agent-to-Agent protocol. An open standard, led by Google, for how AI agents
  discover and communicate with each other. Where MCP connects agents to tools
  and data, A2A connects agents to other agents in a distributed system.
---
MCP (Model Context Protocol) standardized how agents connect to tools: databases, APIs, file systems. A2A picks up where MCP leaves off by standardizing how agents connect to each other. When you have a Planner Agent that needs to delegate to a Research Agent and a Code Agent, A2A defines how they announce their capabilities, pass tasks, and return results.

The practical value is interoperability. Without a standard, every multi-agent system has its own proprietary wiring between agents. With A2A, an agent you build can discover and collaborate with agents built by different teams using different frameworks, as long as they speak the same protocol. Google pushed A2A in early 2026 as part of its Gemini Agent Platform.

For most TNB builders, A2A is still infrastructure-level rather than something you configure daily. But as multi-agent architectures become standard, the underlying protocol matters for how your agents will integrate with the broader ecosystem. It is to agents what REST (a way for software systems to communicate over the web) was to web APIs a decade ago: the interoperability layer the whole ecosystem eventually converges on.
