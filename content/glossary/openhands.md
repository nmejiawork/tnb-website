---
slug: openhands
term: OpenHands
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - OpenDevin
  - All Hands AI
  - OpenHands Cloud
related:
  - claude-code
  - codex-cli
  - agentic-ide
  - subagents
  - swe-bench
dateAdded: '2026-05-02'
shortDef: >-
  An open-source AI coding agent that can write code, execute commands, browse
  the web, and manage files across an entire development workflow. Think of it
  as an open-source alternative to Devin, with a CLI, local GUI, and hosted
  cloud version.
---
OpenHands (formerly OpenDevin) is a full-stack open-source coding agent platform built by All Hands AI. Unlike code completion tools, it acts autonomously: it reads your codebase, writes and runs tests, modifies files, and handles end-to-end engineering tasks. It consistently ranks near the top of the SWE-bench leaderboard, the standard benchmark for AI coding agents.

The architecture is model-agnostic. You can power it with Claude, GPT, or local models via your own API keys. Agents run in sandboxed environments, either locally in Docker or remotely in containerized cloud infrastructure, which means generated code doesn't run unsandboxed on your machine. The SDK, REST API, and web GUI are all MIT-licensed.

For builders choosing between OpenHands and proprietary alternatives like Claude Code or Codex, the main trade-offs are control versus convenience. OpenHands gives you full visibility into how the agent works, BYOK flexibility, and no per-seat subscription, but requires more setup and infrastructure thinking than a managed product.
