---
slug: multi-agent
term: Multi-agent system
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - multi-agent
  - multi-agent architecture
  - agent swarm
  - agent orchestration
  - agent network
related:
  - ai-agent
  - agentic-loop
  - mcp
  - orchestration
dateAdded: '2026-05-02'
shortDef: >-
  A setup where multiple AI agents work together on a task, each with a
  specialized role. One agent might plan, another searches the web, another
  writes code, another checks the output. They coordinate rather than one agent
  doing everything.
---
Single agents work well for bounded tasks. But as tasks become more complex, longer-running, or require different types of expertise, splitting the work across multiple specialized agents often produces better results. One agent might act as an orchestrator that breaks down a goal and delegates subtasks. Specialist agents handle specific domains: research, coding, data analysis, quality checking. Each agent only needs to be good at its own job.

This architecture mirrors how teams of people work. The orchestrator is like a manager who assigns work and reviews it. The specialist agents are like individual contributors with deep expertise in their lane. The main challenge is coordination: agents need to communicate reliably, share context, and handle failures gracefully when one agent in the chain produces bad output.

Multi-agent adoption has accelerated fast. Gartner reported a 1,445% increase in inquiries about multi-agent systems from Q1 2024 to Q2 2025. Most major agent frameworks now have first-class support for multi-agent patterns. MCP, the Model Context Protocol, is becoming the standard layer for how agents connect to tools and to each other.
