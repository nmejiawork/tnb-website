---
slug: agents-md
term: AGENTS.md
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - agents.md spec
  - AGENTS.md file
related:
  - claude-md
  - spec-driven-development
  - system-prompt
  - mcp
dateAdded: '2026-05-02'
shortDef: >-
  An emerging convention for documenting how AI agents should behave in a
  codebase or project, analogous to README.md for humans. An AGENTS.md file
  gives an AI agent instructions about the project's structure, conventions, and
  workflows that it should follow when operating autonomously.
---
AGENTS.md is a file-based convention, similar to how CLAUDE.md works in Claude Code, but emerging as a broader cross-tool standard. The idea: place a markdown file in the root of your repository with instructions that any AI agent working on the codebase should follow. This might include: how to run tests, what files to avoid editing, coding conventions, deployment procedures, and which tools to use for which tasks.

OpenAI and other organizations have discussed AGENTS.md as part of the emerging agent ecosystem standards conversation, alongside MCP. The convention addresses a real problem: as AI agents become more autonomous, developers need a reliable way to communicate project-specific context to them without relying on the model's training data or a per-prompt system prompt.

The relationship to CLAUDE.md is close: both are markdown files that give persistent instructions to an AI coding agent. AGENTS.md is the more general, vendor-agnostic framing of the same pattern, intended to work across Claude Code, Codex, OpenHands, and other agents. Think of it as the .editorconfig of AI-assisted development.
