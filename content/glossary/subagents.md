---
slug: subagents
term: Subagents
type: Concept
topic: Agents & Automation
familiarity: Emerging
aliases:
  - sub-agents
  - subagent
  - Claude Code subagents
related:
  - parallel-agents
  - claude-code
  - claude-skills
  - agentic-loop
  - multi-agent
dateAdded: '2026-05-02'
shortDef: >-
  Isolated Claude instances that Claude Code spawns to handle a specific task.
  Each subagent runs in its own context window, does its work, and returns only
  the result to the main conversation. Useful for parallelism and for keeping
  heavy exploration from polluting your main thread.
---
When a task requires a lot of reading, searching, or background exploration, dumping all of that into the main conversation bloats the context window quickly. Subagents solve this. The main Claude instance delegates a chunk of work to a subagent via the Task tool; the subagent runs independently, then hands back a distilled result.

You define subagents in .claude/agents/ as markdown files with a name, a description, and a system prompt. Claude auto-invokes them when the task matches their description, similar to how skills work, but subagents are full Claude instances with their own tool access and context. You can also invoke them explicitly with @agent-name.

The two big benefits are parallelism and context hygiene. Multiple subagents can run simultaneously on different parts of a problem, and because each has its own context, the main thread doesn't accumulate noise. Subagents can even maintain their own auto-memory, letting them learn from corrections within their domain independently of the main session.
