---
slug: aider
term: Aider
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases: []
related:
  - cline
  - claude-code
  - codex-cli
  - openhands
  - git-worktree
dateAdded: '2026-05-02'
shortDef: >-
  A terminal-based AI pair programming tool that edits code files directly and
  auto-commits changes to git. You chat with it in your terminal; it maps your
  repo, makes the edits, and writes the commit messages. Works with any LLM via
  BYOK.
---
Aider is one of the oldest and most battle-tested open-source AI coding tools, with over 40,000 GitHub stars and 90+ releases. It runs in your terminal, not in an editor extension or a separate GUI. You start it in your project directory, chat naturally about what you want changed, and Aider edits the relevant files and commits those changes to git automatically with descriptive commit messages.

The repo-map feature is the core of how Aider works well at scale: it reads your codebase structure to understand what files and functions exist, so it can make precise edits rather than guessing at file paths. This map gets updated as the codebase evolves.

The main limitation is that Aider is terminal-only, has no visual interface, and cannot see a running application. For visual debugging or UI work, you need another tool. But for pure code editing and refactoring workflows where you prefer the terminal, Aider is the most mature option in the open-source BYOK space and has consistently scored well on SWE-bench.
