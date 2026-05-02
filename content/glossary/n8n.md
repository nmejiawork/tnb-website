---
slug: n8n
term: n8n
type: Tool
topic: Agents & Automation
familiarity: Emerging
aliases:
  - n8n.io
  - n8n workflow automation
related:
  - langgraph
  - visual-agent-builder
  - mcp
  - orchestration
  - multi-agent
dateAdded: '2026-05-02'
shortDef: >-
  An open-source, self-hostable workflow automation tool with a visual
  node-based editor and native AI agent capabilities. Builders use it to connect
  hundreds of apps, run LLM-powered steps, and deploy multi-agent workflows
  without writing much code.
---
n8n (pronounced 'nodemation') sits between traditional no-code automation tools like Zapier and developer-focused frameworks like LangGraph. Its drag-and-drop canvas lets you connect blocks representing apps, logic, and AI calls, then wire them together into automated pipelines. Over 400 built-in integrations cover most SaaS tools a builder would need.

What changed in 2025-2026 is the AI layer. n8n added native AI Agent nodes and MCP client/server support, which means you can plug LLMs directly into automation flows, spawn sub-agents, and connect to MCP tool servers without custom code. Teams use it for email triage, customer support flows, data enrichment, and internal tool automation.

At 150,000+ GitHub stars it is one of the most-used open-source AI tools. Its self-hosting option gives teams full control over their data, which matters for companies under GDPR or other data residency rules. The common pattern: prototype with n8n to validate agent logic quickly, then decide whether to graduate to a code-first framework for complex production requirements.
