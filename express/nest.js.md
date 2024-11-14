# Nest.js

In de theorie hebben we gezien hoe we een API kunnen bouwen aan het hand van het Nest.js framework. Hieronder vind je enkele oefeningen hieromtrent. We gebruiken op dit moment nog geen databank, maar halen de data uit een JSON bestand. Dit bestand kan je inlezen in het Nest project met het `import` statement. &#x20;

## 1. Pokemon API

###

Maak een nieuwe Nest.js applicatie aan voor de Pokemon API via de Nest CLI. Noem deze bv. Pokemon-API.

### Controller

Maak een controller aan met de naam Pokemon. Deze controller moet de volgende endpoints bevatten:

* GET /pokemon
  * Deze endpoint geeft alle pokemon terug in een JSON array
* GET /pokemon/:id
  * Deze endpoint geeft een pokemon terug met het meegegeven id
* POST /pokemon
  * Deze endpoint maakt een nieuwe pokemon aan.
* PUT /pokemon/:id
  * Deze endpoint update een pokemon met het meegegeven id. Het meegegeven object bevat de nieuwe waarden. Het id mag niet veranderen.
* DELETE /pokemon/:id
  * Deze endpoint verwijdert een pokemon met het meegegeven id.

Voorzie de nodige code in de overeenkomstige methodes om de endpoints volledig werkend te maken.

{% hint style="info" %}
We werken hier enkel met een controller klasse. In principe kan je in Nest.js ook gebruik maken van Service klassen (net zoals bij Angular). Als je meer wil weten hieromtrent kan je steeds terecht in de Nest.js documentatie online.&#x20;
{% endhint %}

### Error handling

Als een pokemon niet gevonden wordt met een bepaald id, moet je een 404 error teruggeven met de tekst "Pokemon not found".

### Angular

Zorg ervoor dat de frontend vanaf nu de zelfgemaakte backend gebruikt in plaats van de json-server.

Vermits je Frontend (Angular) en backend (API) elk op een aparte TCP poort werken, krijg je waarschijnlijk te maken met CORS foutmeldingen. Zie de cursus hoe je dit kan oplossen.

## 2. Steam API <a href="#steam-api" id="steam-api"></a>

Maak een nieuwe nest js applicatie aan met de naam steam-api.&#x20;

### Opdracht

Maak een Steam API die toegang geeft tot enerzijds Games en anderzijds Genres. Voor de  data maak je gebruik van de `steam.json` file. Deze file bevat een lijst met games en genres. De service moet de volgende methodes bevatten:

Maak een GamesController aan die de volgende endpoints heeft:

* Een GET endpoint die alle games teruggeeft (/games)
* Een GET endpoint die een game teruggeeft op basis van de id (/games/:id)

Vervolgens maak je een GenresController aan die de volgende endpoints heeft:

* Een GET endpoint die alle genres teruggeeft (/genres)
* Een GET endpoint die een genre teruggeeft op basis van de id (/genres/:id)
* Een GET endpoint die alle games teruggeeft die bij een genre horen (/genres/:id/games)

Als de game of genre niet gevonden kan worden moet je een 404 teruggeven met een gepaste error message.

Probeer je API uit met Postman.

Je kan deze steam.json file gebruiken:

{% file src="../.gitbook/assets/steam.json" %}
