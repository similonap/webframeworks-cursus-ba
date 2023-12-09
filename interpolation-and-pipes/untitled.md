# Interpolation & pipes

Maak telkens een nieuw component dat:&#x20;

* **De huidige tijd weergeeft**
  * in het formaat ‘HH:mm:ss’
  * De tijd wordt uiteraard elke seconde up-to-date gebracht ‐
* **Een teller weergeeft**
  * Die elke 200ms verhoogt in waarde
* **Een willekeurige waarde weergeeft**
  * tussen 1 en 100
  * Elke 2 seconden wordt een andere willekeurige waarde weergegeven
  * (kijk ook eens of de lodash module je hierbij kan helpen)
* **Een tekst weergeeft:**
  * “De applicatie werd opgestart: \[xx minuten geleden]”
  * Uiteraard wordt deze automatisch up-to-date gebracht
  * Gebruik moment.js hiervoor
