---
slug: git-worktree
term: Git worktree
type: Concept
topic: Builder Tools
familiarity: Specialist
aliases:
  - git worktrees
  - worktree
  - multiple working trees
related:
  - parallel-agents
  - background-agent
  - agentic-engineering
  - claude-code
  - vibe-coding
dateAdded: '2026-05-02'
shortDef: >-
  A Git feature that lets you check out multiple branches of the same repository
  into separate directories simultaneously. In AI agent workflows, each worktree
  gives a different agent its own isolated workspace to avoid conflicts when
  running in parallel.
---
In standard Git usage, you can only have one branch checked out at a time in a given directory. Worktrees change that: you can create additional working directories, each checked out to a different branch, all sharing the same underlying repository. No duplication of the full codebase, just multiple active views of it.

For parallel AI agent workflows, worktrees are the practical infrastructure that makes simultaneous agents non-conflicting. Each agent gets its own worktree on its own branch. Agent A works on the login bug in its worktree. Agent B builds the export feature in its worktree. Neither can see or interfere with the other's changes. When they finish, you review both sets of changes independently and merge the ones you want.

Tools like Warp, agent-cli, and Cursor's background agents use worktrees either automatically or with minimal setup to enable parallel workflows. Builders unfamiliar with worktrees often discover them when trying to run multiple Claude Code sessions and hitting file conflicts. The pattern is foundational to agentic engineering: if you want to run agents in parallel, worktrees are how you keep them in their own lanes.
