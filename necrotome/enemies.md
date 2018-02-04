---
enemies:
  - name: Armadillo
    info: Armoured enemy which rolls towards the player when they step into its line of sight.
    variants: 3
  - name: Bat
    info: Flying enemy with random movement.
    variants: 4
  - name: Beetle
    info: Armoured, environment affecting enemy that tracks the player.
    variants: 2
  - name: Blademaster
    info: Armoured enemy unable to be killed until attacked.
    variants: 2
  - name: Cauldron
    info: Stationary entity with no attack.  Drops hot coals when hit.
    variants: 2
  - name: Clone
    info: Mirrors your movements.
    variants: 1
  - name: Devil
    info: Armoured enemy that must be broken out of its shell.
    variants: 3
  - name: Elemental
    info: Leaves a trail of hot coals or ice as it moves.
    variants: 2
  - name: Evil Eye
    info: Stationary until they see you, then charges.
    variants: 2
  - name: Gargoyle
    info: They look like a statue until you get close.
    variants: 6
  - name: Ghost
    info: Can only be hit after you move away from them.
    variants: 1
  - name: Goblin
    info: They run away, but then sneak up when your back is turned.
    variants: 4
  - name: Golem
    info: Slow-moving enemy with lots of health.
    variants: 3
  - name: Gorgon
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
    variants:
  - name: Mage
    info: Technical enemy that tries to affect your movement.
    variants: 3
  - name: Mimic
    info: This enemy is not what they first appear to be.
    variants: 5
  - name: Mole
    info: Moves underground, pop up to attack.
    variants: 1
  - name: Monkey
    info: Deals no direct damage, but affects your movement in various ways.
    variants: 4
  - name: Mushroom
    info: This enemy type stretches from environmental to also being one of the few 3/4 time signature enemies.
    variants: 4 
  - name: Orc
    info: Armoured enemy that chases you down.
    variants: 3
  - name: Pixie
    info: Explodes on damage, heals on contact.
    variants: 1
  - name: Sarcophagus
    info: Spawns [Skeletons](enemies/skeletons) of the same variant.
    variants: 3
  - name: Shopkeeper
    info: Passive until attacked (mostly), high damage.
    variants: 9
  - name: Shove Monster
    info: Pushes you in a straight line to crush you against walls or other entities.
    variants: 2
  - name: Skeleton
    info: Dem bones.
    variants: 12
  - name: Slime
    info:
    variants: 6
  - name: Spider
    info:
    variants: 1
  - name: Spirit
    info: Stays in walls, moves diagonally once freed.
    variants: 5
  - name: Tar Monster
    info:
    variants: 1
  - name: Warlock
    info:
    variants: 2
  - name: Water Ball
    info:
    variants: 1
  - name: Yeti
    info:
    variants: 1
  - name: Zombie
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