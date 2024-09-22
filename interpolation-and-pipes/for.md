# @for

### Het weer

* Maak een nieuw component
* Definieer een array van 5 getallen tussen 0 en 25 (graden celcius)
* Geef deze weer in een tabel als weerinfo voor 5 vaste locaties: bv. Anchorage, Brussel, Osaka, Auckland & Kaapstad
* Gebruik een @for block
* Breid uit zodat elke 2 seconden opnieuw al de getallen worden aangepast met willekeurige waarden
* Maak een 2e kolom met extra info omtrent de voorspelling:
  * Indien de temperatuur == 0 graden : “Kans op gladheid”
  * Indien de temperatuur ligt tussen 1 en 3: “Kans op sneeuw”
  * Indien de temperatuur ligt boven de 17 graden :”Zacht weertje”
* Maak een 3e kolom met daarin een afbeelding
  * Deze afbeeldingen haal je hier: https://openweathermap.org/
  * Stel de URL samen adhv. van de berekening: temp % 5
  * En gebruik ‘interpolation’
  * Bv. https://openweathermap.org/img/w/01d.png
  * Bv. https://openweathermap.org/img/w/04d.png

### Persoonsinformatie

* Maak een klasse `Persoon`&#x20;
* Deze heeft 3 (read only) properties:&#x20;
  * Naam, Voornaam, Geboortedatum
  * Deze moeten via de constructor worden doorgegeven
* Maak vervolgens een lijst van personen
  * Vul deze op met 5 willekeurige individuen
* Maak een nieuw component&#x20;
* Geef een Tabel weer met daarin:
  * 4 kolommen: Naam, voornaam, geb.Datum en Leeftijd
  * Bereken de leeftijd in de klasse

### Automerken

* Maak een klasse `Automerk`
* Via de constructor geef je mee
  * De naam van het merk (bv. “Jaguar”)
  * Een (variabel) aantal modellen (bv. “F-Pace”, “E-Pace”, “IPace”,…)
* Maak een array van Automerken
* Maak een nieuw component
* Geef deze array weer in een “nested list”

<img src="../.gitbook/assets/Screenshot 2021-10-11 at 09.00.23.png" alt="" data-size="original">

### Deelbaarheid

* Definieer een array met 8 getallen: 2,4,5,6,8,9,10,14
* Maak een nieuw component
* Geef deze weer in een tabel met 2 kolommen
  * Kolom 1: het rangnummer van het getal in de array (start bij 1)
  * Kolom 2: het getal zelf
* Toon enkel de rijen waarvan het betreffende getal deelbaar is door 2
* Toon de getallen die groter zijn dan 9 in vette tekst
* gebruik in deze oefening een combinatie van @for en @if&#x20;

![](<../.gitbook/assets/Screenshot 2021-10-11 at 09.03.43 (1).png>)
