---
slug: continue
term: Continue
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - Continue.dev
related:
  - cline
  - cursor
  - agentic-ide
  - byok
  - open-source-model
  - mcp
dateAdded: '2026-05-02'
shortDef: >-
  An open-source AI coding assistant that runs as a plugin inside VS Code or
  JetBrains. You bring your own model and API key, which means full control over
  which AI you use, what data leaves your machine, and what you pay.
---
Continue is a free, open-source alternative to GitHub Copilot or Cursor for teams that want AI coding assistance without locking into a specific model provider or paying a tool subscription. It installs as an extension inside VS Code (Microsoft's widely-used code editor) or JetBrains IDEs, and you configure it to connect to whichever AI you want: Anthropic Claude, OpenAI, Gemini, a local Ollama model, or anything with an OpenAI-compatible API.

Because Continue is open-source and model-agnostic, it's a popular choice for enterprise teams with data privacy requirements, developers who want to run models locally without sending code to any external server, and builders who prefer to pay for model usage directly rather than through a tool subscription. You configure it through a simple JSON file (a structured text file for settings), and the community contributes integrations, prompts, and model configs.

Continue supports chat, inline code edits, and limited agentic actions. It's not as capable as Cursor or Claude Code for complex multi-file tasks, but it's a practical and cost-effective starting point, particularly for teams already running a self-hosted or local model stack.
