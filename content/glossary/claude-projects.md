---
slug: claude-projects
term: Claude Projects
type: Concept
topic: Builder Tools
familiarity: Common
aliases:
  - Projects
related:
  - claude-artifacts
  - claude-md
  - context-window
  - system-prompt
dateAdded: '2026-05-02'
shortDef: >-
  A persistent workspace inside Claude.ai where you can load files, custom
  instructions, and conversation history that stays active across sessions.
  Think of it as giving Claude a dedicated context for a specific client,
  product, or project.
---
Every new Claude chat normally starts cold, meaning Claude knows nothing about your project unless you re-paste context. Projects fix that. You create a Project, upload your brand guidelines, technical specs, or research docs, and write a set of custom instructions. From that point forward, every conversation inside that Project has access to all of it, without re-prompting.

For builders, the most direct use case is creating a separate Project per product, client, or codebase. You set the rules once and Claude behaves consistently across all chats in that workspace. Teams on paid plans can share Projects so collaborators all work within the same persistent context.

Projects are Anthropic's answer to the question of how to make Claude more like a persistent team member than a one-shot query engine. They pair well with Artifacts for output management and with Claude Code for code-specific workflows that need long-term context about architecture and conventions.
