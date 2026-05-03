---
slug: mcp-server
term: MCP server
type: Concept
topic: Agents & Automation
familiarity: Common
aliases:
  - mcp tool server
  - model context protocol server
  - mcp service
related:
  - mcp
  - tool-use
  - agent-scaffold
  - claude-code
  - agentic-ide
dateAdded: '2026-05-02'
shortDef: >-
  A running service that exposes tools, data, and capabilities to AI agents
  using the Model Context Protocol standard. You connect an MCP server to your
  agent, and the agent can call its tools just like built-in tools: search a
  database, query an API, or read files.
---
MCP (Model Context Protocol) defines a standard way for agents and tools to talk to each other. An MCP server is the thing that implements the server side of that protocol: it announces what tools and resources it provides, handles requests from agents, and returns results. An agent with an MCP client can connect to any MCP server and immediately use whatever tools it exposes.

The practical impact: you can build an MCP server for your internal knowledge base, your company's APIs, your ticketing system, or any data source, and any MCP-compatible agent can immediately use it. Gemini CLI, Claude Code, Cursor, and Warp all support MCP client connections. Anthropic donated the MCP specification to the Linux Foundation in 2026, and OpenAI, Google, and Microsoft adopted it.

MCP servers are now a product category: Composio offers 850+ pre-built integrations as MCP servers. GitHub, Slack, and database vendors ship first-party MCP servers. The pattern is becoming to AI agents what plugins were to web browsers: a standardized extension mechanism that lets the base tool grow its capabilities without the core team building every integration.
