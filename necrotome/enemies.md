---
enemies:
  - name: Armadillos
    info: Armoured enemy which rolls towards the player when they step into its line of sight.
    variants: 3
  - name: Bats
    info: Flying enemy with random movement.
    variants: 4
  - name: Beetles
    info: Armoured, environment affecting enemy that tracks the player.
    variants: 2
  - name: Blademasters
    info: Armoured enemy unable to be killed until attacked.
    variants: 2
  - name: Cauldrons
    info: Stationary entity with no attack.  Drops hot coals when hit.
    variants: 1
  - name: Clones
    info:
    variants:
  - name: Devils
    info:
    variants:
  - name: Elementals
    info:
    variants:
  - name: Evil Eyes
    info:
    variants:
  - name: Gargoyles
    info:
    variants:
  - name: Ghost
    info:
    variants:
  - name: Goblins
    info:
    variants:
  - name: Golems
    info:
    variants:
  - name: Gorgons
    info:
    variants:
  - name: Harpy
    info:
    variants:
  - name: Hellhound
    info:
    variants:
  - name: Leprechaun
    info:
    variants:
  - name: Mages
    info:
    variants:
  - name: Mimics
    info:
    variants:
  - name: Moles
    info:
    variants:
  - name: Monkeys
    info:
    variants:
  - name: Mushrooms
    info:
    variants:
  - name: Orcs
    info:
    variants:
  - name: Pixie
    info:
    variants:
  - name: Sarcophagi
    info:
    variants:
  - name: Shopkeepers
    info:
    variants:
  - name: Shove Monsters
    info:
    variants:
  - name: Skeletons
    info: "Dem bones."
    variants:
  - name: Slimes
    info:
    variants:
  - name: Spider
    info:
    variants:
  - name: Spirits
    info:
    variants:
  - name: Tar Monster
    info:
    variants:
  - name: Warlocks
    info:
    variants:
  - name: Water Ball
    info:
    variants:
  - name: Yeti
    info:
    variants:
  - name: Zombie
    info:
    variants:
---  
# Enemies <small><sub><sup>[Return](./)</sup></sub></small>
---
{{#each enemies}}
#### [{{name}}](enemies/{{makeLink name}}) <small>| {{variants}} {{#compare variants 0 operator=">"}} {{#compare variants 1}} variant {{else}} variants
{{/compare}}
{{/compare}}
</small>

{{info}}
{{/each}}