---
slug: claude-code
term: Claude Code
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - Claude code agent
related:
  - cursor
  - vibe-coding
  - mcp
  - ai-agent
dateAdded: '2026-05-02'
shortDef: >-
  Anthropic's agentic coding tool. Runs in the terminal, reads your entire
  codebase, plans and executes multi-step changes, and can write code, run
  commands, and validate its own work autonomously. Positioned as agent-first
  rather than editor-first.
---
Claude Code is Anthropic's answer to the question of what an AI coding agent looks like when you start from the command line rather than a visual editor. You give it a goal, it reads your codebase, breaks down a plan, and executes across multiple files without you directing every step. It runs in your terminal, inside VS Code, or via a web IDE, and supports MCP connectors for extending what it can reach.

The key philosophical difference from Cursor: Claude Code is agent-first. You describe what you want, the AI drives, and you review the results. Cursor is IDE-first: you drive, the AI assists. For complex multi-file refactors, large codebase navigation, and tasks where you want the agent to own execution end to end, Claude Code is frequently the tool professionals reach for.

Independent benchmarks have found that Claude Code uses significantly fewer tokens than comparable agents on identical tasks, making it cost-efficient at the per-task level even though subscription pricing is higher than Cursor. It is particularly favored by builders working on serious, long-lived production codebases rather than quick prototype generation.
