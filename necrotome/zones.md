---
zones:
  - name: Zone 1
    info: A dark cave with relatively weak monsters.
  - name: Zone 2
    info: A swampy grassland with high-health enemies.
  - name: Zone 3
    info: Fast moving, high damage enemies themed around fire and ice.
  - name: Zone 4
    info: The Crypt itself, lots of very technical enemies.
  - name: Zone 5
    info: An electrified wire runs from the start room to the exit - use it to hit multiple enemies at once.

---
# Zones <small><sub><sup>[Return](.)</sup></sub></small>
---
{{#each zones}}
#### [{{name}}](zones/{{makeLink name}})
{{info}}
{{/each}}