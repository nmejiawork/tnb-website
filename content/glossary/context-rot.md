---
slug: context-rot
term: Context rot
type: Concept
topic: Builder Tools
familiarity: Emerging
aliases:
  - context degradation
  - session rot
related:
  - context-window
  - context-compaction
  - context-engineering
  - claude-md
  - cursorrules
dateAdded: '2026-05-02'
shortDef: >-
  What happens when an AI coding session gets too long. The model's context
  window fills with stale, irrelevant, or conflicting information, and its
  output quality starts to noticeably degrade. The fix is usually to start a
  fresh session.
---
Every AI coding tool operates within a context window: a limit on how much text, code, and conversation history the model can hold in memory at once. In a fresh session, the model has a clear view of your codebase and instructions. As the session grows, earlier parts of the conversation scroll out of the window, and the remaining context fills up with intermediate edits, error messages, and back-and-forth that's no longer relevant to the current task.

Context rot is the name builders give to the quality drop that results. The model starts making suggestions that contradict earlier decisions, reverting changes it already made, or ignoring instructions it followed earlier in the same session. It's not a bug in the traditional sense; it's a predictable consequence of how transformer-based models (the architecture behind most AI coding tools) handle long-horizon tasks.

Practical mitigations include starting a new session after every completed task, using files like CLAUDE.md or .cursorrules to reinject project context at the start of each session, breaking large tasks into smaller scoped sub-tasks, and using tools that support explicit context compaction (where the model summarizes earlier conversation before the window fills up).
