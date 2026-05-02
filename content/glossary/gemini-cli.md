---
slug: gemini-cli
term: Gemini CLI
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - gemini-cli
  - google gemini terminal agent
related:
  - claude-code
  - agentic-ide
  - warp
  - background-agent
  - mcp
dateAdded: '2026-05-02'
shortDef: >-
  Google's open-source terminal agent that brings Gemini models directly into
  your command line. Free to use with a Google account, Apache 2.0 licensed, and
  supports MCP server integration for extending its capabilities.
---
Gemini CLI is Google's answer to the wave of AI terminal agents. You install it via npm, point it at a project, and interact with Gemini models directly from your shell (the command-line interface your computer uses to run programs). It supports file reading, code editing, running shell commands, and connecting to external tools via MCP servers.

What set it apart on launch was access: a genuinely generous free tier (60 requests per minute, 1,000 per day with just a Google account) and a 1-million-token context window, the largest among CLI coding tools at launch. For solo builders and open-source contributors, that made it the lowest-cost serious coding agent available.

Gemini CLI is fully open source under Apache 2.0, which means teams with audit requirements can inspect exactly what it does. It sits in the broader category of terminal agents competing with Claude Code and Codex CLI, and runs natively inside Warp alongside other agents.
