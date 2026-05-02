---
slug: claude-hooks
term: Claude Code Hooks
type: Concept
topic: Builder Tools
familiarity: Specialist
aliases:
  - hooks
  - Claude hooks
  - lifecycle hooks
related:
  - claude-code
  - claude-skills
  - subagents
  - guardrails
dateAdded: '2026-05-02'
shortDef: >-
  Event-driven scripts that run automatically at specific points in a Claude
  Code session, like before a tool fires or after Claude writes a file. Hooks
  let you enforce standards, log activity, block certain actions, or trigger
  external notifications without manually interrupting the workflow.
---
Claude Code exposes lifecycle events such as PreToolUse (before a tool call executes), PostToolUse (after it completes), and SessionStart. You attach a hook handler to any of these events in your settings file, and Claude Code calls your script at that point. The hook can allow the action, block it, ask for clarification, or just log it silently.

A common use: run a linter every time Claude writes a Python file, or send a desktop notification when a long background task finishes. You can also use hooks as quality gates: a PreToolUse hook on Bash can check that a shell command isn't dangerous before letting it execute. For teams, this is a lightweight governance layer without needing a full observability stack.

Hooks come in four types: command hooks (run a shell script), MCP tool hooks (call a tool on a connected MCP server), prompt hooks (send a single-turn prompt to a model for a yes/no decision), and agent hooks (spawn a subagent to verify conditions). They are scoped to sessions, skills, or subagents depending on where they're defined.
