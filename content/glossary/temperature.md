---
slug: temperature
term: Temperature
type: Concept
topic: AI Models & Capabilities
familiarity: Common
aliases:
  - sampling temperature
  - LLM temperature
related:
  - llm
  - token
  - inference
  - system-prompt
dateAdded: '2026-05-02'
shortDef: >-
  A dial from 0 to 1 (and beyond) that controls how random or predictable an
  LLM's output is. Low temperature means focused, consistent answers. High
  temperature means more varied and creative but also less reliable. Most
  builder tools expose this as a setting.
---
At each step of generating a token, the model produces a probability distribution over every possible next word. Temperature reshapes that distribution before the model picks. At temperature 0, the model always picks the single most probable token, making output highly consistent. At temperature 1, it samples proportionally from the distribution. Go above 1 and output becomes increasingly unpredictable.

For most production applications, a temperature between 0.2 and 0.7 covers the majority of use cases. Tasks that need accuracy and consistency, like code generation or data extraction, tend to benefit from lower temperatures. Creative tasks like brainstorming or writing copy may benefit from higher values. Setting temperature too high risks incoherence; setting it too low can make outputs feel repetitive and formulaic.

One nuance worth knowing: even at temperature 0, LLM outputs are not perfectly deterministic. Hardware-level floating-point operations and distributed inference can introduce small variations. Reasoning models like OpenAI's o3 lock temperature at 1 because they use a different internal process to control reasoning quality.
