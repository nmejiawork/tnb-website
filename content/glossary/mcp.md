---
slug: mcp
term: MCP
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - Model Context Protocol
  - model context protocol
related:
  - ai-agent
  - tool-use
  - multi-agent
  - agentic-loop
dateAdded: '2026-05-02'
shortDef: >-
  An open protocol, originally from Anthropic, that standardizes how AI agents
  connect to external tools, data sources, and services. Think of it as USB-C
  for agents: one standard interface so agents can plug into any tool without
  custom integration work for each one.
---
Before MCP, every AI application that needed to call an external tool, like a database, a web browser, or a SaaS API, required a custom, one-off integration. MCP, the Model Context Protocol, introduces a shared standard so that any MCP-compatible agent can discover and call any MCP-compatible tool without bespoke wiring. The protocol defines server (a process that exposes tools), client (the agent or app consuming tools), and the transport layer connecting them.

By late 2025, there were over 10,000 public MCP servers deployed, covering tools from web search and code execution to database queries and file systems. The major AI providers, Anthropic, OpenAI, and Google DeepMind, have converged on MCP as the shared vocabulary for tool use. The older terms 'function call' and 'plugin' are increasingly deprecated in favor of MCP's terminology.

For builders, MCP is significant because it dramatically reduces the integration overhead for adding capabilities to agents. Instead of writing custom connectors for every data source or service, you can connect to any existing MCP server. The security consideration is real: each MCP server represents an external process with potential access to sensitive data or systems, so governance over which servers an agent can reach matters.
