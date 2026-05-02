---
slug: openai-agents-sdk
term: OpenAI Agents SDK
type: Tool
topic: Agents & Automation
familiarity: Emerging
aliases:
  - Agents SDK
  - OpenAI Agents SDK for Python
  - OpenAI Agents SDK for TypeScript
related:
  - openai-agentkit
  - agent-framework
  - orchestration
  - tool-use
dateAdded: '2026-05-02'
shortDef: >-
  OpenAI's open-source framework for building multi-step, tool-using agents in
  Python and TypeScript. It handles orchestration, tool calling, and state
  management so you don't have to wire everything together from scratch.
---
The OpenAI Agents SDK is a lightweight but opinionated library for building agents that call tools, hand off between sub-agents, and maintain conversation state across multiple steps. It abstracts the boilerplate of looping over tool calls and re-injecting results, so you write the agent's logic at a higher level and let the SDK handle the mechanical parts.

It supports Python and TypeScript (added in 2025), includes built-in support for handoffs between agents (one agent delegates to another specialized agent), and integrates with OpenAI's built-in tools like web search and code interpreter. It also composes with MCP servers, so any MCP-compatible tool can be added to an agent's toolkit.

The SDK is the open-source foundation under AgentKit, which adds the hosted GUI, connectors, and eval tooling on top. For builders who want control and portability without vendor-managed infrastructure, the SDK is the starting point. It is model-agnostic in design but most optimized for OpenAI model families.
