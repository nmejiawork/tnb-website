---
slug: cursor-background-agent
term: Cursor background agent
type: Tool
topic: Builder Tools
familiarity: Emerging
aliases:
  - background agent
  - Cursor cloud agent
related:
  - cursor
  - background-agent
  - long-running-agent
  - agentic-coding
  - git-worktree
dateAdded: '2026-05-02'
shortDef: >-
  A mode in Cursor that runs an AI coding task in the cloud, asynchronously,
  while you do other work. You assign a task, close the laptop if you want, and
  come back to review the result. No waiting at your desk while the agent types.
---
Traditional AI coding sessions are synchronous: you sit and watch the agent work, or at least stay available to approve the next step. Cursor's background agent flips that model. You describe a task, kick it off, and the agent runs in Cursor's cloud infrastructure on a fresh copy of your codebase. You can close the tab, work on something else, or go to sleep. When it's done, you get a notification and review the changes it made.

This is especially useful for larger, well-defined tasks: write tests for this module, refactor this API client, add i18n support to these components. Tasks you know will take a while and don't need hand-holding. The agent works against a sandboxed version of your repo, so nothing gets applied to your main codebase until you explicitly accept the changes.

Background agents represent a shift in how builders think about AI assistance. Instead of AI as a co-pilot you fly with in real time, it becomes more like a contractor you assign work to. You check the pull request when it's ready. This model scales better: you can run multiple background agents on different tasks in parallel while staying focused on something else entirely.
