---
slug: agent-framework
term: Agent framework
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - ai agent framework
  - agentic framework
  - llm agent framework
related:
  - langgraph
  - orchestration
  - multi-agent
  - agentic-loop
  - smolagents
dateAdded: '2026-05-02'
shortDef: >-
  A library or SDK that provides the building blocks for creating AI agents:
  orchestration logic, tool integration, memory management, multi-agent
  coordination, and state persistence. Frameworks let you build agents from
  components rather than from scratch.
---
Building an agent from a raw model API requires solving a lot of the same problems every time: how does the agent decide what tool to call next, how does it remember what it did earlier in the session, how do you handle tool call failures, how do you coordinate multiple agents working together. Agent frameworks package the solutions to these problems as reusable components.

The landscape split into distinct categories. Code-first frameworks (LangGraph, smolagents, CrewAI) give developers programmatic control and are best for complex production systems. Visual builders (n8n, Dify, Langflow) wrap similar functionality in a graphical interface for faster iteration. Lab-specific SDKs (OpenAI Agents SDK, Anthropic Agent SDK, Google ADK) offer the tightest integration with a specific model family.

By 2026, every major AI lab had released its own agent framework, signaling where the industry believed product value would accumulate. LangGraph led for Python multi-agent orchestration; Mastra for TypeScript teams; smolagents for Hugging Face ecosystem builders. The practical advice most experienced builders give: start with the simplest framework that can do the job, and only add complexity when you hit a real constraint.
