---
slug: codex-cli
term: Codex CLI
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - openai codex cli
  - codex terminal agent
  - openai codex
related:
  - claude-code
  - gemini-cli
  - background-agent
  - swe-bench
  - parallel-agents
dateAdded: '2026-05-02'
shortDef: >-
  OpenAI's open-source terminal coding agent, written in Rust for speed. Codex
  CLI runs in your terminal, executes tasks in an isolated sandbox, integrates
  with GitHub for automatic pull requests, and supports spawning parallel
  sub-agents for complex work.
---
Codex CLI is OpenAI's entry into the terminal agent category alongside Claude Code and Gemini CLI. Written in Rust (a fast, memory-safe programming language), it is intentionally lightweight: rather than building an IDE-like experience, it focuses on being a fast, local agent that handles tasks in your shell. IDE extensions for VS Code, Cursor, and Windsurf make it a bridge between terminal and editor workflows.

What distinguishes Codex CLI from its terminal competitors is its integration with the broader OpenAI platform. It connects to Codex automations (OpenAI's cloud-based coding agent service) for background task delegation, includes built-in GitHub MCP support for reading repositories and creating pull requests directly, and uses GPT-5 family models with the full OpenAI toolchain. Teams already paying for ChatGPT subscriptions get Codex CLI access included.

In performance benchmarks, Codex CLI (paired with GPT-5.3) leads Terminal-Bench, which measures AI terminal task performance. On SWE-bench Pro, GPT-5.3-Codex reaches 57% with OpenAI's custom scaffolding. The practical choice between Claude Code and Codex CLI often comes down to ecosystem: Claude Code is tighter for teams in the Anthropic stack, Codex for teams already deep in OpenAI's tooling.
