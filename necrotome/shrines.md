---
shrines:
  - name: Boss Shrine [DLC only]
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Blood
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Chance
   triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Darkness
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Glass
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of No Return [vanilla only]
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Pace [vanilla only]
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Pain [DLC only]
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Peace
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Phasing [vanilla only]
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Rhythm
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Risk
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Sacrifice
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Space
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of Uncertainty [DLC only]
    triggertype: test
    triggered: test
    bombedbefore: test
    xbombedbefore: test
    bombedafter: test
    xbombedafter: test
    strat: test
  - name: Shrine of War
    triggertype: test
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
* _Triggered By:_ {{triggertype}}
* _When Triggered:_ {{triggered}}
* _When Bombed:_ 
  * _Before Triggering:_ {{bombedbefore}}
    * _Exceptions:_ {{xbombedbefore}}
  * _After Triggering:_ {{bombedafter}}
    * _Exceptions:_ {{xbombedafter}}

#### Racing Strategy: 

{{strat}}

{{info}}
{{/each}}