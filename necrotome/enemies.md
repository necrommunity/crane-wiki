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
    variants: 2
  - name: Clone
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
    variants: 6
  - name: Ghost
    info: Can only be hit after you move away from them.
    variants: 1
  - name: Goblins
    info: They run away, but then sneak up when your back is turned.
    variants: 4
  - name: Golems
    info: Slow-moving enemy with lots of health.
    variants: 3
  - name: Gorgons
    info: Freezes your movements for 4 beats as its attack, leaves a statue when killed.
    variants: 2
  - name: Harpy
    info: Moves in an L shape, hard to outrun.
    variants: 1
  - name: Hellhound
    info: Can move diagonally, drops hot coals when killed.
    variants: 1
  - name: Leprechaun
    info: Spawns on a pile of 50 or more gold on the 8th beat after it's created.
    variants: 1
  - name: Mages
    info: Technical enemies that try to afect your movement.
    variants: 3
  - name: Mimics
    info: These enemies are not what they first appear to be.
    variants: 5
  - name: Mole
    info: Moves underground, pops up to attack.
    variants: 1
  - name: Monkeys
    info: Deal no direct damage, but affect your movement in various ways.
    variants: 4
  - name: Mushrooms
    info: This enemy type stretches from environmental to also being one of the few 3/4 time signiature enemies.
    variants: 4 
  - name: Orcs
    info: Armoured enemies that chase the player down.
    variants: 3
  - name: Pixie
    info: Explodes on damage, heals on contact.
    variants: 1
  - name: Sarcophagi
    info: Spawns [Skeletons](enemies/skeletons) of the same colour.
    variants: 3
  - name: Shopkeepers
    info: Friendly until they're attacked (mostly), high damage.
    variants: 9
  - name: Shove Monsters
    info: Pushes you in a straight line to crush you against walls or other entities.
    variants: 2
  - name: Skeletons
    info: Dem bones.
    variants: 12
  - name: Slimes
    info:
    variants: 6
  - name: Spider
    info:
    variants: 1
  - name: Spirits
    info: Stays in walls, moves diagonally once freed.
    variants: 5
  - name: Tar Monster
    info:
    variants: 1
  - name: Warlocks
    info:
    variants: 2
  - name: Water Ball
    info:
    variants: 1
  - name: Yeti
    info:
    variants: 1
  - name: Zombies
    info:
    variants: 3
---  
# Enemies <small><sub><sup>[Return](.)</sup></sub></small>
---
{{#each enemies}}
#### [{{name}}](enemies/{{makeLink name}}) <small>| {{variants}} {{#compare variants 0 operator=">"}} {{#compare variants 1}} variant {{else}} variants
{{/compare}}
{{/compare}}
</small>

{{info}}
{{/each}}