# Property en Event Binding

### Todo lijst

Maak een component voor een “Todo” lijstje&#x20;

* Voorzie een invoer veld en een knop.&#x20;
* De knop is uit gegrijsd zolang er niets werd ingegeven in het invoer veld
* Klik op de knop voegt het nieuwe item toe aan het lijst
* De lijst wordt weergegeven als een geordende lijst
* Naast elk item in de lijst verschijnt een knopje om het item terug te verwijderen&#x20;
* Indien er nog geen items in je lijst zitten , verschijnt er een tekst in de plaats
  * Je lijst is momenteel leeg’&#x20;
* Je zal zeker nodig hebben:
  * ngIf
  * ngFor
  * Property binding&#x20;
  * Template reference variable
  * Event binding
  * ...

![](<../.gitbook/assets/Screenshot 2021-10-14 at 21.39.40 (1).png>)

### MoviePlayer

* Maak een nieuwe component
* Maak hierin een media player met een HTML element.
* Vb. film:&#x20;

```
<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"
```

* Voeg een keuzelijst toe met enkele resoluties (groottes van videoscherm), bv •&#x20;
  * 640x400
  * 800x600
  * …
* De gebruiker kiest een resolutie en de player past zich onmiddellijk aan.

![](<../.gitbook/assets/Screenshot 2021-10-18 at 14.17.46.png>)

* Activeer de eigen controls van de player (play knop,.. van de player zelf)
* Voeg daarnaast nog een aparte PLAY en PAUSE knop toe onder de player.
* Wanneer de film bezig is, zorg je dat de eigen PLAY knop niet actief is (uitgegrijsd)
* Wanneer de film in pause staat zorg je dat de eigen PAUSE knop niet actief is.
* Test uiteraard ook of dit ook in orde is als je gebruik maakt van de play /pause knoppen van de player zelf.

### Calculator

Maak een calculator component

* Deze bevat de cijfertoetsen
* Deze bevat de standaard bewerkingen: +, - , \*, /&#x20;
* Deze bevat een = toets om het resultaat te bekomen
* Gebruik de ‘mathjs’ library om de expressie uit te rekenen
* Genereer de toetsen op een creatieve manier (ngFor,..)

![](<../.gitbook/assets/Screenshot 2021-10-14 at 21.51.56.png>)
