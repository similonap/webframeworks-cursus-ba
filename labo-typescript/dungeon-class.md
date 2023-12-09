# Project: Dungeon Class

In deze kleine opdracht gaan we de basis schrijven voor een Dungeon generator. We willen op een gerandomiseerde manier een aantal kamers gaan genereren met kleine gangen daar tussen.&#x20;

Er is al een start project (via stackblitz) waar deze dungeon generator al in aanwezig is. Je kan dit project zelf forken om ermee verder te kunnen werken.

{% embed url="https://stackblitz.com/edit/node-imposter?embed=1&file=index.ts&hideNavigation=1&view=editor" %}



Het `dungeonGenerator.ts` bestand bevat alle code om de dungeon te genereren. Je kan hiervoor de `createDungeon`methode gebruiken die een random seed aanvaard en een configuratie. Deze functie geeft een Dungeon object terug dat een array van `GameTile` bevat en een array van kamers.&#x20;

{% hint style="info" %}
Bekijk zeker de interfaces die gedefinieerd zijn in types.ts. Deze zullen je wat meer info geven over de objecten die de dungeonGenerator terug geeft.
{% endhint %}

**Voorbeeld configuratie:**

```javascript
{
  gridHeight: 50,
  gridWidth: 50,
  maxRooms: 9,
  roomSizeRange: [5, 10],
}
```

je kan ook objecten genereren voor een bepaalde dungeon aan de hand van de`createObjects` methode. Dit zijn objecten die zich bevinden in de kamers.

**Opdracht:**

* Maak de `GameDungeon`klasse en laat deze de interface `IDungeon` implementeren.
* Deze heeft een constructor die een random seed en configuratie aanvaard.
* Zorg voor een `print` ethode die deze dungeon afprint op de volgende manier:&#x20;

![](<../.gitbook/assets/Screenshot 2021-09-24 at 20.55.05.png>)

* &#x20;Voorzie ook een aantal methodes om tile op te vragen aan de hand van de `getTileAt`methode. Hetzelfde voor de `getObjectAt`methode.
