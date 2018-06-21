---
shrines:
  - name: Boss Shrine [DLC only]
    triggered: Drops three random items for the player to choose from. When one is picked up, the other two will disappear. From the next level onward, the player will have to kill two mini-bosses in order to unlock the stairs.
    bombedbefore: [Cheese]
    bombedafter: [Strength Charm]
    xbombedafter: Melody, Eli, Dove - [Cheese]
    strat: goes here
  - name: Shrine of Blood
    triggered: Gives the player a random blood weapon, dropping the player's current weapon. (In the DLC, also gives the player a blood shovel.) On triggering, the player's current health is reduced to 0.5 hearts (maximum health remains the same).
    bombedbefore: [Ring of Regeneration]
    bombedafter: [Crown of Thorns]
    strat: goes here
  - name: Shrine of Chance
    specialtrigger: Can be triggered repeatedly by walking into it, but costs gold to trigger, as indicated on the shrine.
    triggered: May drop a random item, or it may drop nothing. Increases the price of future activations of that shrine. If you are wearing the [Lucky Charm] or [Ring of Luck], a random drop is guaranteed.
    bombedbefore: A random item.
    bombedafter: A random item.
    strat: test
  - name: Shrine of Darkness
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Glass
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of No Return [vanilla only]
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Pace [vanilla only]
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Pain [DLC only]
    specialtrigger: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Peace
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Phasing [vanilla only]
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Rhythm
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Risk
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Sacrifice
    specialtrigger: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Space
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Uncertainty [DLC only]
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of War
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
---  
# Shrines <small><sub><sup>[Return](.)</sup></sub></small>
---
Shrines are scattered throughout the Crypt. Triggering them (generally, by walking into them) produces unique effects. Shrines can also be bombed for items; shrines will drop different items when bombed before and after triggering them.

{{#each shrines}}
### {{name}}
{{#if specialtrigger}}
* ___Special Trigger:___ {{specialtrigger}}
{{/if}}
* _When Triggered:_ {{triggered}}
* _When Bombed:_ 
  * _Before Triggering:_ {{bombedbefore}}
{{#if xbombedbefore}}
    * _Exceptions:_ {{xbombedbefore}}
{{/if}}
  * _After Triggering:_ {{bombedafter}}
{{#if xbombedafter}}
    * _Exceptions:_ {{xbombedafter}}
{{/if}}

#### Racing Strategy: 

{{strat}}
{{/each}}