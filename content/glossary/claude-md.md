---
slug: claude-md
term: CLAUDE.md
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - claude.md
  - agent context file
  - project memory file
  - WARP.md
  - GEMINI.md
related:
  - context-engineering
  - system-prompt
  - agent-memory
  - agent-scaffold
  - claude-code
dateAdded: '2026-05-02'
shortDef: >-
  A markdown file you place in your project root to give an AI coding agent
  persistent context about your codebase: architecture decisions, coding
  conventions, off-limit files, and project-specific instructions that load
  automatically each session.
---
When you start a new session with an AI coding agent, it knows nothing about your project history. CLAUDE.md is the fix: a plain text file in your repository that the agent reads at the start of every session. You write it once, update it as the project evolves, and the agent treats it as its standing briefing document.

Common contents include: what the project does and how it is structured, the testing framework and how to run tests, libraries or patterns the team prefers, things the agent should never touch, known technical debt to be aware of, and how to handle authentication in local dev. Well-maintained CLAUDE.md files dramatically reduce the amount of re-explaining you need to do each session.

The pattern generalizes beyond Claude. Warp uses WARP.md, Gemini CLI uses GEMINI.md, and the concept has spread to most agent tools as 'project context files.' Anthropic built a CLAUDE.md generation agent into Claude Code itself, which analyzes your codebase and drafts an initial file. For teams running background agents, a well-written CLAUDE.md is especially important: the agent has no human to ask for clarification.
