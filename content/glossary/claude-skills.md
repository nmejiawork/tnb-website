---
slug: claude-skills
term: Claude Skills
type: Concept
topic: Builder Tools
familiarity: Emerging
aliases:
  - Skills
  - agent skills
  - Claude Code skills
related:
  - claude-code
  - claude-md
  - slash-commands
  - subagents
dateAdded: '2026-05-02'
shortDef: >-
  Reusable instruction modules you attach to Claude or Claude Code to teach it a
  repeatable workflow. A skill describes how to handle a specific type of task
  and Claude invokes it automatically based on context, without you having to
  re-explain the procedure each time.
---
A Skill is essentially a markdown file with a name, a description, and a set of instructions. When Claude detects that the current task matches the description, it loads the skill and follows its instructions. In Claude Code, skills live in a .claude/skills/ directory; in the consumer Claude.ai interface, skills are personal or team-level modules you attach to your account.

Skills are distinct from slash commands (which you trigger manually by typing /command) and from subagents (which are separate Claude instances that run in isolation). Skills are auto-invoked context providers. Claude decides when to use them, which is both their power and the reason you need precise, scoped descriptions so they trigger at the right moment.

Common uses: enforcing a coding style across a whole project, loading a data analysis workflow whenever CSV is mentioned, or carrying your personal writing voice preferences without restating them in every prompt. Once a skill is defined, it travels with you across sessions.
