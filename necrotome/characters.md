---
characters:
  - name: Cadence
    info: The main character in the game, and the default gameplay experience.
  - name: Melody
    info: Cadence's mother
  - name: Aria
    info: Cadence's grandmother
---
# Characters <small><sub><sup>[Return](.)</sup></sub></small>
---
{{#each characters}}
#### [{{name}}](characters/{{makeLink name}})
{{info}}
{{/each}}