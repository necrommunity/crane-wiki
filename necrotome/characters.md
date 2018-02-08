---
characters:
  - name: Cadence
    info: The main character in the game, and the default gameplay experience.
  - name: Melody
    info: Cadence's mother
  - name: Aria
    info: Cadence's grandmother
---
# Characters
---
{{#each characters}}
#### [{{name}}](characters/{{makeLink name}})
{{info}}
{{/each}}