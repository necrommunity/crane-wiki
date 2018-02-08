---
boss:
  - name: King Konga
    info: Remember to stop on the 8th beat!
    type: Normal
  - name: Death Metal
    info: High BPM boss with high health.
    type: Normal
  - name: Deep Blues
    info: Chess pieces move towards you, kill the king to win.
    type: Normal
  - name: Coral Riff
    info: A large body of water can make approaching this boss tricky.
    type: Normal
  - name: Fortissimole
    info: Cut through the crowd and lure the mole offstage.
    type: Normal
  - name: Dead Ringer
    info: Lure him into the bells and gong to win.
    type: Story (Cadence)
  - name: NecroDancer 1
    info: Destroy the stage and use the lute.
    type: Story (Cadence)
  - name: NecroDancer 2
    info: Tear through the hordes of skeletons and send the NecroDancer to a fiery death.
    type: Story (Melody)
  - name: Golden Lute
    info: A sprawling monster - use the bouncetraps to win!
    type: Story (Aria)
  - name: Frankensteinway
    info: ~
    type: Story (Nocturna)
  - name: Golden Lute
    info: ~
    type: Story (Nocturna)
---  
# Bosses <small><sub><sup>[Return](.)</sup></sub></small>
---  
{{#each boss}}
#### [{{name}}](boss/{{makeLink name}}) <small>| {{type}} </small>  
{{info}}
{{/each}}