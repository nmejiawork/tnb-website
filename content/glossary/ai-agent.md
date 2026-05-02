---
slug: ai-agent
term: AI agent
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - agent
  - autonomous agent
  - agentic AI
  - AI assistant with tools
related:
  - agentic-loop
  - mcp
  - multi-agent
  - tool-use
  - human-in-the-loop
dateAdded: '2026-05-02'
shortDef: >-
  An AI system that does not just respond to prompts but takes actions
  autonomously: browsing the web, calling APIs, writing and running code, or
  coordinating with other agents. It plans, executes, and adjusts based on what
  happens. 2025 to 2026 was widely called the year agents became real.
---
An AI agent wraps an LLM with the ability to take actions in the world. Instead of answering a question in one shot, the agent is given a goal and a set of tools, such as web search, code execution, file read and write, or API calls, and then figures out how to accomplish that goal across as many steps as it takes. It is not following a rigid script; it is reasoning about what to do next at each step.

The practical difference from a basic chatbot is significant. A chatbot answers questions. An agent books a flight, updates a database, writes and runs tests, or coordinates with other agents, then reports back when the job is complete or when it hits a decision it needs human input on. This is what people mean when they talk about AI that 'acts' rather than just 'responds.'

Agents introduce new design challenges that do not exist in simpler AI applications: how to handle failure mid-task, when to ask for human approval before taking an irreversible action, how to observe what the agent did and why, and how to make sure a rogue agent cannot cause serious damage. These are the problems AgentOps and observability tooling are being built to solve.
