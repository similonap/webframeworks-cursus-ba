# Nest.js

In dit labo gaan we werken met nest.js. Dit is een framework voor het maken van een backend. Nest.js is gebouwd bovenop Express. Het gelijkt conceptueel heel hard op Angular.

Je kan de documentatie vinden op [https://docs.nestjs.com/](https://docs.nestjs.com/)

Je mag alle opdrachten maken in hetzelfde nest.js project.

## 1. Pokemon Controller

### Service

Maak een service aan de hand van de nest.js cli. Deze service moet de volgende methodes bevatten:

* getAllPokemon()
* getPokemonById(id)
* createPokemon(pokemon)
* updatePokemon(id, pokemon)
* deletePokemon(id)

### Controller

Maak een controller aan met de naam pokemon. Deze controller moet de volgende endpoints bevatten:

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

Deze endpoints moeten de juiste methodes van de service aanroepen.

### Error handling

Als een pokemon niet gevonden wordt met een bepaald id, moet je een 404 error teruggeven met de tekst "Pokemon not found".

### Angular

Zorg ervoor dat de frontend vanaf nu de zelfgemaakte backend gebruikt in plaats van de json-server.

Krijg je de volgende error:

<figure><img src="../.gitbook/assets/Screenshot 2022-12-05 at 14.24.10.png" alt=""><figcaption></figcaption></figure>

voeg dan&#x20;

```
app.enableCors();
```

toe in je main.ts bestand in je Nest.js server.

## 2. Steam API <a href="#steam-api" id="steam-api"></a>

Maak een nieuwe nest js applicatie aan met de naam steam-api. Je kan hier het volgende commando voor gebruiken:

```
npx nest new steam-api
```

### Opdracht <a href="#opdracht" id="opdracht"></a>

Maak een Steam service aan die toegang waar je gebruik maakt van de `steam.json` file. Deze file bevat een lijst met games en genres. De service moet de volgende methodes bevatten:

* Een getter die alle games teruggeeft
* Een getter die alle genres teruggeeft
* Een getter die een game teruggeeft op basis van de id
* Een getter die een genre teruggeeft op basis van de id

Een service kan je aanmaken met het volgende commando:

```
npx nest g service steam
```

Vervolgens maak je een GamesController aan die de volgende endpoints heeft:

* Een GET endpoint die alle games teruggeeft (/games)
* Een GET endpoint die een game teruggeeft op basis van de id (/games/:id)

Een controller kan je aanmaken met het volgende commando:

```
npx nest g controller games
```

Vervolgens maak je een GenresController aan die de volgende endpoints heeft:

* Een GET endpoint die alle genres teruggeeft (/genres)
* Een GET endpoint die een genre teruggeeft op basis van de id (/genres/:id)
* Een GET endpoint die alle games teruggeeft die bij een genre horen (/genres/:id/games)

Als de game of genre niet gevonden kan worden moet je een 404 teruggeven met een gepaste error message.

Je kan de nest applicatie starten met het volgende commando:

```
npm run start:dev
```

Probeer je API uit met Postman.

Je kan deze steam.json file gebruiken:

{% file src="../.gitbook/assets/steam.json" %}
