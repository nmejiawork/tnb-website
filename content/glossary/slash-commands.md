---
slug: slash-commands
term: Slash Commands
type: Concept
topic: Builder Tools
familiarity: Emerging
aliases:
  - custom slash commands
  - /commands
related:
  - claude-code
  - claude-skills
  - subagents
  - claude-md
dateAdded: '2026-05-02'
shortDef: >-
  User-invoked shortcuts in Claude Code. You type /command-name and Claude
  executes a pre-written prompt or workflow stored in a markdown file. Unlike
  skills, which trigger automatically, slash commands only fire when you call
  them.
---
Claude Code supports a directory structure for custom commands at .claude/commands/ (project-level) and ~/.claude/commands/ (global). Each file is a markdown prompt with an optional $ARGUMENTS placeholder. Type /deploy and Claude runs your deploy checklist; type /security-review and it runs a security audit workflow you wrote once and saved.

Slash commands are the deterministic half of Claude Code's extensibility system. They're predictable: you trigger them, you know what runs. Skills are the probabilistic half: Claude decides when they apply. Both are useful, but for anything where you want explicit control over when a workflow fires, slash commands are the right choice.

You can also chain them: a slash command can invoke a subagent, call a skill, or pipeline a multi-step workflow like research, codebase scan, write a summary. As MCP servers get connected, MCP tool names also become available as slash commands automatically.
