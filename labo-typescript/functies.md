# Functies

### Oefenen met functies

* Maak een functie die
  * Het kwadraat van een getal berekend.
* Maak een functie die
  * een tekst: string en een count: number verwacht &#x20;
  * een string\[] teruggeeft, met lengte count en waar elk element de meegegeven tekst bevat
  * Bv: tekst: hey en count: 4 => \["hey","hey","hey","hey"]
* Maak een “anonymous” functie die
  * een tekst : string verwacht
  * En optioneel een separator : string met default waarde = “-”&#x20;
  * Die een string\[ ] teruggeeft waarbij de text werd opgesplitst adhv. de separator
* Maak een functie om het product te maken van een onbekend aantal parameters
* Schrijf deze bovenstaande functies ook volgens de “fat arrow” syntax.

### Gestructureerde mededeling (GM)

Maak een functie om (bekijk ook het gecompileerde resultaat in javascript):&#x20;

* Een gestructureerde mededeling (als tekst) samen te stellen.
* Een GM
  * Bestaat uit 10 vrij te kiezen cijfers, gevolgd door een controlegetal van 2 cijfers
  * kan zelf inhoudelijk worden bepaald (bv. _**JJJ/KKKK/BBBCC**_)
  * J = Jaartal (bv. 017), K = Klantnummer, B = Bestel Nummer, C = **Checksum**
* Dus geven we als parameters mee:&#x20;
  * Een jaar : number
  * Een klantNr : number
  * Een bestelNummer : number
* De **checksum** kan je berekenen door alle getallen aan elkaar te concateneren en dan modulo 97 te berekenen.
  * _017/0123/001**36**_\
    &#xNAN;_&#x31;70123001 % 97 = **36**_
* Breid deze functie uit zodat de 3 parameters optioneel worden
  * Gebruik de waarde 0 indien niet opgegeven
* Breid deze functie uit met 2 default parameters
  * separator (scheidingsteken, default ‘/’)
  * decorator (begin/eind karakters, default : ‘+++’

Voorbeeld output:

```
GM(2017, 123, 1)
+++017/0123/00136+++
GM(17, 123, 1)
+++017/0123/00136+++
GM(2017)
+++017/0000/00031+++
```
