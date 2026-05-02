---
slug: jules
term: Jules
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - Google Jules
  - Jules coding agent
related:
  - openhands
  - claude-code
  - codex-cli
  - background-agent
  - google-ai-studio
dateAdded: '2026-05-02'
shortDef: >-
  Google's asynchronous AI coding agent, announced at I/O 2025. You assign Jules
  a task, like updating a Node.js dependency or fixing a bug in a large
  codebase, and it plans the steps, modifies files, and works in the background
  while you do other things.
---
Jules is Google's entry into the autonomous coding agent space alongside Claude Code (Anthropic) and Codex (OpenAI). Its defining characteristic is asynchronous operation: Jules is optimized for longer tasks where you hand off the work and come back to the result, rather than staying in a tight interactive loop.

The tool was announced in public beta at Google I/O 2025, with examples like updating older versions of Node.js dependencies across a large codebase (a task that involves reading many files, making coordinated changes, and running tests). It uses Gemini under the hood and integrates with GitHub for repository access and pull request creation.

For builders choosing among coding agents, Jules fits a specific niche: tasks that are well-defined, repeatable, and where asynchronous completion is acceptable. For interactive back-and-forth development, Claude Code or Cursor-style tools are generally faster. Jules is more analogous to a background job you assign than a pair programmer you chat with.
