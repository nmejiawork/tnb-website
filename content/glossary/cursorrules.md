---
slug: cursorrules
term: .cursorrules
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - cursor rules
  - cursor rules file
  - .cursor/rules
related:
  - cursor
  - claude-md
  - agents-md
  - ai-rules-file
  - agentic-ide
dateAdded: '2026-05-02'
shortDef: >-
  A configuration file you add to your project root that Cursor reads at the
  start of every session. Use it to set coding conventions, preferred libraries,
  and project context so Cursor doesn't start from scratch each time.
---
When you open a project in Cursor (the AI-powered code editor built on VS Code), it automatically picks up a .cursorrules file if one exists. That file is plain markdown where you document things like: which framework you're using, how you want code formatted, which patterns to avoid, and any project-specific quirks. Cursor folds this into its context (the information it uses when generating suggestions), making every session aware of your project's rules from the first prompt.

The .cursorrules format is Cursor-specific and has the largest library of community examples, searchable at sites like cursor.directory. Teams share their files, which means you can bootstrap a reasonable starting config by finding one that matches your tech stack and adapting it. Newer versions of Cursor also support scoped rules in a .cursor/rules/ directory, letting you set different conventions for different parts of the codebase.

The main limitation is portability. A .cursorrules file is invisible to other AI coding tools: if a colleague opens the same project in Claude Code or Windsurf, they get no guidance from it. Teams that use multiple tools often maintain both .cursorrules and AGENTS.md, keeping them in sync so every contributor's tool of choice picks up the same project conventions.
