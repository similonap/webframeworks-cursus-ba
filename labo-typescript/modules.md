# Modules

* Verplaats de klasse gestructureerde mededeling&#x20;
  * naar een aparte module
  * exporteer de klasse rechtstreeks via het export statement
* Importeer ze
  * Importeer alles uit de module een geef het een naam (namespace) ‘GM’.&#x20;
  * Importeer enkel de klasse met alias ‘GM’
* en maak er vervolgens gebruik van
* Alternatief:
  * Exporteer de klasse via een afzonderlijk export statement en geef een alias ‘GestrMed’
  * Importeer en gebruik de klasse
* **Uitbreiding:**
  * Maak een 2e klasse in de module ‘vrije mededeling’
    * In de constructor kan enkel een mededeling (tekst) worden meegegeven
    * Deze geeft vervolgens (via toString) enkel de eerste 30 karakters terug
  * Exporteer & importeer ze volgens bovenstaande manieren en roep ze aan.
