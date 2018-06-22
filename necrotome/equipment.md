---
equipment:
  - name: Weapons
    type: Held
  - name: Shovels
    type: Held
  - name: Torches
    type: Held
  - name: Armor
    type: Worn
  - name: Headwear
    type: Worn
  - name: Footwear
    type: Worn
  - name: Rings
    type: Worn
  - name: Spells
    type: Usable Items
  - name: Consumables
    type: Usable Items
  - name: Pickups and Charms
    type: Usable Items
  - name: Familiars
    type: Usable Items
---  
# Necrotome: Equipment <small><sub><sup>[Return](.)</sup></sub></small>
---  
{{#each equipment}}
#### [{{name}}](equipment/{{makeLink name}}) <small>| {{type}} </small>  
{{info}}
{{/each}}