---
slug: cline
term: Cline
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - Cline VS Code extension
related:
  - agentic-ide
  - claude-code
  - openhands
  - mcp
  - byok
dateAdded: '2026-05-02'
shortDef: >-
  An open-source AI coding agent that runs inside VS Code (and other IDEs) as an
  extension. It can read and edit files, execute terminal commands, and browse
  the web, using your own API keys and any model you choose.
---
Cline is a BYOK (bring your own key) AI coding agent that runs directly inside your editor. You bring API credentials for Claude, OpenAI, or a local model provider, and Cline acts as an autonomous agent inside VS Code: it can view your file structure, read and write code, run shell commands (with your approval), and interact with the web. It has accumulated over 58,000 GitHub stars, making it one of the most popular open-source coding tools.

The key design philosophy is human-in-the-loop safety. Before executing any potentially destructive action (like overwriting a file or running a shell command), Cline requests explicit permission. This makes it lower-risk for daily use than fully autonomous agents that run to completion without checkpoints.

Cline extends via MCP, so you can connect databases, APIs, and other tools and have them show up as capabilities the agent can use. It also supports enterprise deployments with SSO, global policies, and audit trails. For small teams that want agent-level coding assistance without a managed subscription service, Cline is the most mature option.
