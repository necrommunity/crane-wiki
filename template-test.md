---
import:
  - templates/infobox-boss
boss:
  - name: Dead Ringer
    img: https://vignette.wikia.nocookie.net/crypt-of-the-necrodancer/images/9/9a/Bosscreen_deadringer.png/revision/latest?cb=20150425083231&path-prefix=ja
    type: Story (Cadence)
    health: 2
    attack: lots
    priority: many
    speed: fast
    phases: you betcha
---
{{#each boss}}
  {{> templates/infobox-boss}}
{{/each}}