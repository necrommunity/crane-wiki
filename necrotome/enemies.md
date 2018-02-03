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
    info: Mirrors your movements.
    variants: 1
  - name: Devils
    info: Armoured enemy that must be broken out of its shell.
    variants: 3
  - name: Elementals
    info: Leaves a trail of hot coals or ice as it moves.
    variants: 2
  - name: Evil Eyes
    info: Stationary until it sees you, then charges.
    variants: 2
  - name: Gargoyles
    info: They look like statues until you get close.
    variants: 4
  - name: Ghost
    info: Can only be hit after you move away from them.
    variants: 1
  - name: Goblins
    info: They run away, but then sneak up when your back is turned.
    variants: 2
  - name: Golems
    info: Slow-moving enemy with lots of health.
    variants: 2
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