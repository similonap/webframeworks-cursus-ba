---
hidden: true
---

# Express

### Oefening 1&#x20;

* Voeg de Express package toe in je project en zet een basis express web server op om een bootstrap template te ‘serven’ bv. https://startbootstrap.com/template-overviews/business-casual/
* Zet de html bestanden in een map ‘views’
* Zet de andere bestanden (css map, img map en vendor map) onder een map ‘public’
* Zorg dat alle bestanden beschikbaar worden via http get
* Gebruik hiervoor app.use (zie vorige slide)
* Test of je de volledige website kan zien via je eigen webserver (http://localhost:8000)

### Oefening 2

* Installeer Postman (of een andere tool)
* Maak een REST API om pokemon (/api/pokemon) op te halen als JSON data.
* Test met Postman

### Oefening 3

* Vorm de vorige oefening om zodat de Express router wordt gebruikt.&#x20;
* Het (JSON) resultaat moet hetzelfde blijven

### Oefening 4

* Voeg een route toe zodat ook 1 object kan worden opgevraagd worden aan de hand van zijn id&#x20;

### Oefening 5

* Voeg de andere VERBS toe en implementeer DELETE zodat een object wordt verwijderd aan de hand van zijn ID
* Test met Postman
  * Delete een object
  * Haal alle (overblijvende) objecten terug op

### Hospitalizations

* Zorg voor een nieuwe nest.js applicatie die COVID hospitalisaties kan weergeven
* Gebruik het volgende JSON bestand om de COVID hospitalisatie dataset in de mongodb database te inserten.
  * Service URL: [https://epistat.sciensano.be/Data/COVID19BE\_HOSP.json](https://epistat.sciensano.be/Data/COVID19BE\_HOSP.json)
  * Je kan eventueel de axios library gebruiken om deze data live in te lezen op het moment als je applicatie opstart.
* Maak een `/hospitalizations` endpoint die twee query parameters aanvaard (year en month)
  * Als deze niet worden meegegeven dan gebruik je het huidige jaar en maand.
  * Je kan met .find() ook regular expressions meegeven. Zo kan je zoeken op jaar en maand en niet op dag.
* Maak een `/hospitalizations/average` endpoint die dezelfde query parameters aanvaard.
  * Deze endpoint geeft de gemiddelde `TOTAL_IN` cijfers voor een provincie
  * Doe wat opzoekwerk op google hoe je een aggregate kan doen in mongodb

