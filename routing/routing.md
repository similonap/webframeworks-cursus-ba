# Routing

### Alles in Router

Pas je huidige angular applicatie aan zodat we gebruik maken van Router.

Zorg voor de volgende routes:

* /welcome (toon de welcome component uit property binding)
* /movieplayer (toon de MoviePlayer uit property binding)
* /todo (toon de todo lijst uit property binding)
* /redbox (toon de red box uit event binding)
* Zorg ervoor dat alle andere routes doorverwijzen naar de welcome pagina

### Pokedex

* Maak een nieuwe angular applicatie genaamd "Pokedex"
* Voeg de RouterModule toe en zorg voor de volgende pagina's
  * Home pagina (op /home)
  * Pokemon pagina (op /pokemon)
  * Pokemon details pagina (op /pokemon/:id)
  * Alle andere pagina's verwijzen naar de Home pagina
* Gebruik de **pokemon json** om de pokemon in te laden. (onderaan deze pagina)
  * Zorg voor een interface voor de pokemon objecten.
  * importeer de json met het `import` statement
  *   Voeg het volgende toe aan je tsconfig.json bestand om json files te kunnen importeren:

      ```
      "resolveJsonModule": true,
      "esModuleInterop": true,
      ```

      je moet deze plaatsen onder **compilerOptions**
* De home pagina ziet er als volgt uit:

![](<../.gitbook/assets/Screenshot 2021-11-13 at 21.28.07.png>)

* Zorg ervoor dat de actieve tab op actief staat als die route actief is.
* De pokemon list pagina ziet er als volgt uit:

![](<../.gitbook/assets/Screenshot 2021-11-13 at 21.28.55.png>)

* Als je op een pokemon klikt kom je op de detail pagina terecht.
* De pokemon detail pagina ziet er als volgt uit:

![](<../.gitbook/assets/Screenshot 2021-11-13 at 21.29.35.png>)

* Je kan een parameter van de route opvragen op de volgende manier:

```typescript
constructor(private route: ActivatedRoute) { }

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    let id = params.get("id")!;
  })
}
```

{% file src="../.gitbook/assets/pokedex (1).json" %}
