---
slug: background-agent
term: Background agent
type: Concept
topic: Agents & Automation
familiarity: Emerging
aliases:
  - async agent
  - cloud agent
  - async background agent
related:
  - parallel-agents
  - agentic-loop
  - human-in-the-loop
  - claude-code
  - cursor
dateAdded: '2026-05-02'
shortDef: >-
  An AI agent that runs independently in the background, without occupying your
  terminal or IDE session. You assign a task, it works in an isolated
  environment, and delivers results (usually a pull request) when done.
---
The idea is simple: instead of watching an agent work, you delegate and walk away. Background agents run in isolated virtual machines or cloud sandboxes, execute multi-step tasks, and open pull requests (proposed code changes, in the GitHub workflow) when they finish. You can check in from your phone, another computer, or a Slack notification.

This pattern became mainstream in early 2026 when Cursor, GitHub Copilot's coding agent, and Codex automations all shipped background agent capabilities within the same two-week window. Developers assign a bug fix or feature to a background agent, context-switch to other work, and return to a reviewable diff rather than supervising every step.

The practical shift is from watching agents to managing them. A developer might have several background agents running across different branches simultaneously, each working on a distinct task. The workflow then becomes: write a clear spec or ticket, assign it to an agent, review the output when it lands. Human judgment moves to the front end (writing the spec) and the back end (code review), not the middle.
