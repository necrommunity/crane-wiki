---
enemies:
  - name: Armadillos
    info:
    variants:
    tiers:
  - name: Bats
    info:
    variants:
    tiers:
  - name: Beetles
    info:
    variants:
    tiers:
  - name: Blademasters
    info:
    variants:
    tiers:
  - name: Cauldrons
    info:
    variants:
    tiers:
  - name: Clones
    info:
    variants:
    tiers:
  - name: Devils
    info:
    variants:
    tiers:
  - name: Elementals
    info:
    variants:
    tiers:
  - name: Evil Eyes
    info:
    variants:
    tiers:
  - name: Gargoyles
    info:
    variants:
    tiers:
  - name: Ghost
    info:
    variants:
    tiers:
  - name: Goblins
    info:
    variants:
    tiers:
  - name: Golems
    info:
    variants:
    tiers:
  - name: Gorgons
    info:
    variants:
    tiers:
  - name: Harpy
    info:
    variants:
    tiers:
  - name: Hellhound
    info:
    variants:
    tiers:
  - name: Leprechaun
    info:
    variants:
    tiers:
  - name: Mages
    info:
    variants:
    tiers:
  - name: Mimics
    info:
    variants:
    tiers:
  - name: Moles
    info:
    variants:
    tiers:
  - name: Monkeys
    info:
    variants:
    tiers:
  - name: Mushrooms
    info:
    variants:
    tiers:
  - name: Orcs
    info:
    variants:
    tiers:
  - name: Pixie
    info:
    variants:
    tiers:
  - name: Sarcophagi
    info:
    variants:
    tiers:
  - name: Shopkeepers
    info:
    variants:
    tiers:
  - name: Shove Monsters
    info:
    variants:
    tiers:
  - name: Skeletons
    info:
    variants:
    tiers:
  - name: Slimes
    info:
    variants:
    tiers:
  - name: Spider
    info:
    variants:
    tiers:
  - name: Spirits
    info:
    variants:
    tiers:
  - name: Tar Monster
    info:
    variants:
    tiers:
  - name: Warlocks
    info:
    variants:
    tiers:
  - name: Water Ball
    info:
    variants:
    tiers:
  - name: Yeti
    info:
    variants:
    tiers:
  - name: Zombie
    info:
    variants:
    tiers:
---  

{{#each enemies}}
#### [{{name}}](enemies/{{makeLink name}})  
{{#each this.variants}}<small>{{this}}</small>{{/each}}
{{info}}
{{/each}}
