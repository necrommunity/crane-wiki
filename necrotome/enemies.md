---
enemies:
  - name: Armadillos
    info: "Armoured enemy which rolls towards the player when they step into its line of sight."
    tiers: 2
  - name: Bats
    info: "Flying enemy with percentage chance to hit the player when in proximity."
    tiers: 4
  - name: Beetles
    info: "Armoured, environment affecting enemy that tracks the player."
    types: 2
  - name: Blademasters
    info: "Armoured enemy unable to be killed until attacked"
    tiers: 2
  - name: Cauldrons
    info:
    types:
    tiers:
  - name: Clones
    info:
    types:
    tiers:
  - name: Devils
    info:
    types:
    tiers:
  - name: Elementals
    info:
    types:
    tiers:
  - name: Evil Eyes
    info:
    types:
    tiers:
  - name: Gargoyles
    info:
    types:
    tiers:
  - name: Ghost
    info:
    types:
    tiers:
  - name: Goblins
    info:
    types:
    tiers:
  - name: Golems
    info:
    types:
    tiers:
  - name: Gorgons
    info:
    types:
    tiers:
  - name: Harpy
    info:
    types:
    tiers:
  - name: Hellhound
    info:
    types:
    tiers:
  - name: Leprechaun
    info:
    types:
    tiers:
  - name: Mages
    info:
    types:
    tiers:
  - name: Mimics
    info:
    types:
    tiers:
  - name: Moles
    info:
    types:
    tiers:
  - name: Monkeys
    info:
    types:
    tiers:
  - name: Mushrooms
    info:
    types:
    tiers:
  - name: Orcs
    info:
    types:
    tiers:
  - name: Pixie
    info:
    types:
    tiers:
  - name: Sarcophagi
    info:
    types:
    tiers:
  - name: Shopkeepers
    info:
    types:
    tiers:
  - name: Shove Monsters
    info:
    types:
    tiers:
  - name: Skeletons
    info:
    types:
    tiers:
  - name: Slimes
    info:
    types:
    tiers:
  - name: Spider
    info:
    types:
    tiers:
  - name: Spirits
    info:
    types:
    tiers:
  - name: Tar Monster
    info:
    types:
    tiers:
  - name: Warlocks
    info:
    types:
    tiers:
  - name: Water Ball
    info:
    types:
    tiers:
  - name: Yeti
    info:
    types:
    tiers:
  - name: Zombie
    info:
    types:
    tiers:
---  
# Enemies <small><sub><sup>[Return](./)</sup></sub></small>
---
{{#each enemies}}
#### [{{name}}](enemies/{{makeLink name}}) | <small>{{#if tiers}}{{#if types}}{{tiers}} tiers, {{else}}{{tiers}} tiers{{/if}}{{/if}}{{#if types}}{{types}} types{{/if}}</small>

{{#each this.types}}<small>{{this}}</small>{{/each}}
{{info}}
{{/each}}
