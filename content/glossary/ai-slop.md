---
slug: ai-slop
term: AI slop
type: Concept
topic: Patterns & Practices
familiarity: Emerging
aliases:
  - slop
  - ai-generated slop
  - generic AI output
related:
  - vibe-coding
  - hallucination
  - evals
  - context-engineering
  - prompt-engineering
dateAdded: '2026-05-02'
shortDef: >-
  Low-quality, generic, or visually interchangeable output produced by AI tools,
  particularly in writing and UI design. The term signals content that looks
  AI-generated in the pejorative sense: competent but bland, derivative, and
  lacking any distinctive point of view.
---
AI slop entered the builder vocabulary as a reaction to the homogenization of AI output. When everyone uses the same models with similar prompts, the results start looking the same: web designs using Inter or Roboto fonts, landing pages with the same hero section structure, blog posts that hedge every claim identically. The output is technically correct but forgettable.

In coding, AI slop shows up as technically functional code that lacks project-specific conventions, repeats patterns instead of extracting shared logic, and prioritizes passing tests over readability. In UI, it is the default Tailwind aesthetic that ships from every vibe-coded MVP. Design-focused builders have started writing explicit instructions in CLAUDE.md or system prompts to avoid it: 'commit to a bold visual direction before writing a line of code.'

The term is also used in content contexts: AI-generated articles that summarize without adding perspective, social posts that use AI sentence structures, and product copy that sounds templated. The cure is more specific constraints, stronger examples in context, and explicit evaluation criteria. It is essentially a prompt engineering and context engineering problem disguised as a quality problem.
