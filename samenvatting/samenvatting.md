# Samenvatting

## Project opzetten

### Node.js LTS

Vooraleer je Angular kan installeren, moet je Node.js installeren. Dit kan je doen door naar [deze link](https://nodejs.org/en/) te gaan en de LTS-versie te downloaden. De LTS versie is de versie die het meest stabiel is en het langst ondersteund wordt.

### Angular CLI

Angular CLI is een command line tool die je helpt bij het maken van Angular projecten. Je kan Angular CLI installeren door het volgende commando uit te voeren in je terminal:

```bash
npm install -g @angular/cli
```

Als je powershell gebruikt moet je vaak de uitvoeringsbeleid aanpassen om npm te kunnen installeren. Dit kan je doen door het volgende commando uit te voeren in je terminal:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Angular project aanmaken

Om een nieuw Angular project aan te maken, kan je het volgende commando uitvoeren in je terminal:

```bash
ng new project-naam
```

Dit commando zal een nieuwe map aanmaken met de naam `project-naam` en hierin een nieuw Angular project aanmaken. Opgelet dat je 'server side rendering' niet aanzet, dit is niet nodig voor de cursus.

```
? Which stylesheet format would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                    
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no
```

### Angular project starten

Om je Angular project te starten, kan je het volgende commando uitvoeren in je terminal:

```bash
cd project-naam
ng serve
```

### Bestandenstructuur

Bij het aanmaken van een nieuw Angular project, zal Angular CLI een aantal bestanden en mappen aanmaken:

* `src/`: Deze map bevat alle bronbestanden van je project.
* `src/app/`: Deze map bevat alle componenten, services, pipes, ...
* `public/`: Deze map bevat alle statische bestanden zoals afbeeldingen, ...
* `angular.json`: Dit bestand bevat de configuratie van je Angular project.
* `package.json`: Dit bestand bevat alle dependencies van je project.

en er wordt altijd een `app.component` aangemaakt met bij behorende html, css en spec.ts bestanden. Dit is de root component van je Angular project.

### CSS Framework toevoegen

De gemakkelijkste manier om een CSS framework toe te voegen aan je Angular project is door het framework te importeren in je `styles.css` bestand. Je kan bv de CDN van Bulma toevoegen aan je `styles.css` bestand:

```css
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
```

Je kan deze ook zelf installeren via npm en dan importeren in je `styles.css` bestand:

```bash
npm install bulma
```

En dan kan je deze toevoegen in je `angular.json` bestand:

```json
"styles": [
    "src/styles.css",
    "node_modules/bulma/css/bulma.min.css"
],
```

### Font Awesome toevoegen

Om Font Awesome toe te voegen aan je Angular project, kan je het volgende commando uitvoeren in je terminal:

```bash
npm install @fortawesome/fontawesome-free
```

En dan kan je deze toevoegen in je `angular.json` bestand:

```json
"styles": [
    "src/styles.css",
    "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
],
```

En dan kan je de iconen gebruiken in je HTML bestanden:

```html
<i class="fa-solid fa-home"></i>
```

### Lodash toevoegen

Om Lodash toe te voegen aan je Angular project, kan je het volgende commando uitvoeren in je terminal:

```bash
npm install lodash
npm install --save-dev @types/lodash
```

En dan kan je Lodash importeren in je typescript bestanden:

```typescript
import * as _ from 'lodash';
```

Als je bijvoorbeeld een random getal wilt genereren tussen 1 en 10, kan je het volgende schrijven:

```typescript
const random = _.random(1, 10);
```

## Basisconcepten

### App component

De app component is de root component van je Angular project. Deze component wordt automatisch aangemaakt bij het aanmaken van een nieuw Angular project. De app component bestaat uit een typescript bestand, een html bestand en een css bestand.

Het html bestand bevat de template van de component. Wil je bijvoorbeeld `Hello World` tonen, dan kan je het volgende in je html bestand schrijven:

```html
<h1>Hello World</h1>
```

Het typescript bestand bevat de logica van de component. Wil je bijvoorbeeld een variabele `title` aanmaken en deze tonen in je html bestand, dan kan je het volgende in je typescript bestand schrijven:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "Hello World";
}
```

En dan kan je deze variabele tonen in je html bestand:

```html
<h1>{{ title }}</h1>
```

### Interpolatie

Interpolatie is een manier om data van je typescript bestand te tonen in je html bestand. Je kan dit doen door `{{ variabele }}` te schrijven in je html bestand. Telkens de field `title` in je typescript bestand verandert, zal de waarde in je html bestand ook veranderen. Je kan daar ook expressies gebruiken:

```html
<h1>{{ title.toUpperCase() }}</h1>
```

of functies aanroepen die in je typescript bestand staan:

```html
<h1>{{ getTitle() }}</h1>
```

en in je typescript bestand:

```typescript
getTitle(): string {
  return this.title.toUpperCase();
}
```

Naast functies kan je ook een getter gebruiken:

```typescript
get titleUpperCase(): string {
  return this.title.toUpperCase();
}
```

en in je html bestand:

```html
<h1>{{ titleUpperCase }}</h1>
```

### Componenten aanmaken

Componenten zijn de bouwstenen van je Angular project. Een component bestaat uit een typescript bestand, een html bestand en een css bestand. Om een nieuwe component aan te maken, kan je het volgende commando uitvoeren in je terminal:

```bash
ng generate component component-naam
```

Dit commando zal een nieuwe map aanmaken met de naam `component-naam` en hierin een nieuwe component aanmaken. Je kan ook een component aanmaken in een specifieke map door de mapnaam toe te voegen aan het commando:

```bash
ng generate component mapnaam/component-naam
```

### Componenten gebruiken

Om een component te gebruiken in de html van een andere component, kan je de selector van de component gebruiken. De selector is de naam van de component tussen haakjes. Als je bijvoorbeeld een component `header` hebt aangemaakt, kan je deze gebruiken in de html van de app component:

```html
<app-header></app-header>
```

Je moet wel opletten dat je de component importeert in de module waarin je de component wilt gebruiken. Als je bijvoorbeeld de `header` component wilt gebruiken in de app component, moet je de `header` component importeren in de `app.component.ts` file:

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

Als je de angular extension hebt geïnstalleerd in je editor, wordt dit over het algemeen automatisch gedaan.

### Code uitvoeren bij initialisatie

Als je code wilt uitvoeren bij de initialisatie van een component, kan je de `ngOnInit` functie gebruiken. Deze functie wordt automatisch aangeroepen bij de initialisatie van de component. Wil je bijvoorbeeld een interval starten bij de initialisatie van de component, dan kan je het volgende in je typescript bestand schrijven:

```typescript
getal: number = 0;

ngOnInit(): void {
  setInterval(() => {
    this.getal++;
  }, 1000);
}
```

Je zou dit in principe ook in de constructor kunnen doen, maar het is beter om dit in de `ngOnInit` functie te doen. Dit is omdat de `ngOnInit` functie pas wordt aangeroepen nadat de view is geïnitialiseerd.

### @for lus

Stel dat je een lijst van namen hebt en je wilt deze tonen in je html bestand, dan kan je een `@for` lus gebruiken. 

Stel dat je de volgende lijst van namen hebt in je typescript bestand:

```typescript
names: string[] = ['Alice', 'Bob', 'Charlie'];
```

dan kan je hier over itereren in je html bestand:

```html
<ul>
  @for (name of names; track name) {
    <li>{{ name }}</li>
  }
</ul>

Je moet er voor zorgen dat de variabele die je gebruikt in de track statement uniek is in de lijst. In dit geval is dat `name`. Als je geen unieke variabele hebt kan je altijd $index gebruiken.

```html
<ul>
  @for (name of names; track $index) {
    <li>{{ name }}</li>
  }
</ul>
```

Je kan ook `$index` gebruiken om de index van de huidige iteratie te tonen:

```html
<ul>
  @for (name of names; track $index) {
    <li>{{ $index + 1 }}. {{ name }}</li>
  }
</ul>
```

Er bestaan nog andere $-variabelen die je kan gebruiken zoals `$count`, `$first`, `$last`, `$even` en `$odd`. 

### @if statement

Stel dat je een variabele `show` hebt in je typescript bestand en je wilt een element tonen als `show` `true` is. 

```typescript
show: boolean = true;
```

dan kan je dit doen in je html bestand:

```html
@if (show) {
  <p>Element wordt getoond</p>
}
```

Je kan ook een `@else` statement toevoegen:

```html
@if (show) {
  <p>Element wordt getoond</p>
} @else {
  <p>Element wordt niet getoond</p>
}
```

of zelfs een `@else if` statement:

```html
@if (show) {
  <p>Element wordt getoond</p>
} @else if (!show) {
  <p>Element wordt niet getoond</p>
}
```

### @switch statement

Stel dat je een variabele `color` hebt in je typescript bestand en je wilt een element tonen afhankelijk van de waarde van `color`. 

```typescript
color: string = 'red';
```

dan kan je dit doen in je html bestand:

```html
@switch (color) {
    @case ('red') {
      <p style="color: red;">Rood</p>
    }
    @case ('green') {
      <p style="color: green;">Groen</p>
    }
    @case ('blue') {
      <p style="color: blue;">Blauw</p>
    }
    @default {
      <p>Geen kleur</p>
    }
}
```

### Pipes

Pipes zijn een manier om data te transformeren naar een gewenste vorm. Hier een aantal voorbeelden van interessante pipes:

* `uppercase`: Om een string in hoofdletters te tonen. Je moet dan de UpperCasePipe importeren in je typescript bestand.
* `lowercase`: Om een string in kleine letters te tonen. Je moet dan de LowerCasePipe importeren in je typescript bestand.
* `date`: Om een datum te tonen in een bepaald formaat. Je moet dan de DatePipe importeren in je typescript bestand.
* `currency`: Om een getal te tonen in een bepaald formaat. Je moet dan de CurrencyPipe importeren in je typescript bestand.
* `number`: Om een getal te tonen in een bepaald formaat. Je moet dan de DecimalPipe importeren in je typescript bestand.

Je kan deze pipes gebruiken in je html bestand:

```html
<p>{{ title | uppercase }}</p>
<p>{{ title | lowercase }}</p>
<p>{{ date | date: 'dd/MM/yyyy' }}</p>
<p>{{ price | currency: 'EUR' }}</p>
<p>{{ number | number: '1.2-2' }}</p>
```

Vergeet dan niet de pipes te importeren in je typescript bestand:

```typescript
import { UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
```

```typescript
imports: [UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, DecimalPipe],
```

## Binding

### Event binding

Event binding is een manier om events te koppelen aan functies in je typescript bestand. Je kan dit doen door `(event)="functie()"` te schrijven in je html bestand. Als je bijvoorbeeld een knop hebt en je wilt een functie `onClick` aanroepen als er op de knop wordt geklik, dan kan je het volgende in je html bestand schrijven:

```html
<button (click)="handleClick()">Klik hier</button>
```

En dan kan je de `onClick` functie implementeren in je typescript bestand:

```typescript
handleClick(): void {
  console.log('Klik');
}
```

Wil je de waarde van een input element tonen op het scherm als de gebruiker typt, dan kan je het volgende in je html bestand schrijven:

```html
<input type="text" (input)="handleInput($event)">
```

`$event` is een speciale variabele die de waarde van het event bevat. Je kan deze waarde doorgeven aan de `handleInput` functie in je typescript bestand:

```typescript
handleInput(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  const value = inputElement.value;
  console.log(value);
}
```

Je kan ook de `(change)` event gebruiken in plaats van de `(input)` event. Het verschil tussen de twee is dat de `(input)` event wordt aangeroepen telkens de waarde van het input element verandert, terwijl de `(change)` event wordt aangeroepen als de focus van het input element verandert.

### Property binding

Property binding is een manier om de waarde van een attribuut van een html element te binden aan een variabele in je typescript bestand. Je kan dit doen door `[attribuut]="variabele"` te schrijven in je html bestand. Zo kan je bijvoorbeeld de `innerText` van een `p` element binden aan een variabele `text` in je typescript bestand:

```html
<p [innerText]="text"></p>
```

En dan kan je de `text` variabele initialiseren in je typescript bestand:

```typescript
text: string = "Hello World";
```

Als je bijvoorbeeld de src van een afbeelding wilt binden aan een variabele in je typescript bestand, kan je het volgende in je html bestand schrijven:

```html
<img [src]="image">
```

En dan kan je de `image` variabele initialiseren in je typescript bestand:

```typescript
image: string = "https://via.placeholder.com/150";
```

Telkens de waarde van de `image` variabele verandert, zal de src van de afbeelding ook veranderen.

Je kan ook de `style` van een element binden aan een variabele in je typescript bestand:

```html
<p [style.color]="color">Hello World</p>
```

En dan kan je de `color` variabele initialiseren in je typescript bestand:

```typescript
color: string = "red";
```

of bijvoorbeeld de `backgroundColor`:

```html
<p [style.backgroundColor]="backgroundColor">Hello World</p>
```

of de `src` van een link

```html
<a [href]="link">Link</a>
```

en je kan de `link` variabele initialiseren in je typescript bestand:

```typescript
link: string = "https://www.google.com";
```

of via een functie:

```html
<p [style.color]="getColor()">Hello World</p>
```

en in je typescript bestand:

```typescript
getColor(): string {
  return "red";
}
```

Vaak wordt hiervoor een getter gebruikt:

```typescript
get color(): string {
  return "red";
}
```

Wil je een element disabled maken afhankelijk van een variabele in je typescript bestand, dan kan je het volgende in je html bestand schrijven:

```html
<button [disabled]="disabled">Klik hier</button>
```

je kan dan een getter gebruiken in je typescript bestand:

```typescript
get disabled(): boolean {
  return true;
}
```

Nog een interessante property binding is de `[class]` binding. Hiermee kan je een class toevoegen aan een element afhankelijk van een variabele in je typescript bestand. Als je bijvoorbeeld een variabele `isActive` hebt in je typescript bestand en je wilt een class `active` toevoegen aan een `div` element als `isActive` `true` is, dan kan je het volgende in je html bestand schrijven:

```html
<div [class.active]="isActive"></div>
```

Als `isActive` `true` is, zal de class `active` worden toegevoegd aan het `div` element. Als `isActive` `false` is, zal de class `active` worden verwijderd van het `div` element.

### Template reference variables

Wil je een referentie naar een element in je html bestand, dan kan je een template reference variable gebruiken. Je kan dit doen door `#variabele` te schrijven in je html bestand. Als je bijvoorbeeld een input element hebt en je wilt een referentie naar dit element, dan kan je het volgende in je html bestand schrijven:

```html
<input type="text" #inputElement/>
```

Wil je dan ergens in je html bestand de waarde van het input element gebruiken, bv bij het klikken op een knop, dan kan je het volgende schrijven:

```html
<button (click)="handleClick(inputElement.value)">Klik hier</button>
```

en dan kan je de `handleClick` functie implementeren in je typescript bestand:

```typescript
handleClick(value: string): void {
  console.log(value);
}
```

Bij een number input kan je de value ook casten naar een number:

```typescript
handleClick(value: string): void {
  console.log(Number(value));
}
```

Dit kan je ook doen door eerst een + voor de variabele te zetten:

```html
<button (click)="handleClick(+inputElement.value)">Klik hier</button>
```

en dan kan je de `handleClick` functie implementeren in je typescript bestand:

```typescript
handleClick(value: number): void {
  console.log(value);
}
```

### Two-way binding

Two-way binding is een manier om de waarde van een input element te binden aan een variabele in je typescript bestand. Als het input element verandert, zal de waarde van de variabele ook veranderen en omgekeerd. Je kan dit doen door `[(ngModel)]="variabele"` te schrijven in je html bestand. Je moet hier wel de `FormsModule` importeren in je component vooraleer je two-way binding kan gebruiken:

```typescript
imports: [FormsModule],
```

Als je bijvoorbeeld een input element hebt en je wilt de waarde van het input element binden aan een variabele `name` in je typescript bestand, dan kan je het volgende in je html bestand schrijven:

```html
<input type="text" [(ngModel)]="name">
```

En dan kan je de `name` variabele initialiseren in je typescript bestand:

```typescript
name: string = "Alice";
```

Als je nu de waarde van het input element verandert, zal de waarde van de `name` variabele ook veranderen en omgekeerd.

Je kan ook een `select` element gebruiken met two-way binding:

```html
<select [(ngModel)]="selected">
  <option value="1">Optie 1</option>
  <option value="2">Optie 2</option>
  <option value="3">Optie 3</option>
</select>
```

en dan kan je de `selected` variabele initialiseren in je typescript bestand:

```typescript
selected: string = "1";
```

Zorg er wel voor dat de waarden van de `option` elementen overeenkomen met de waarden van de `selected` variabele.

Een ander voorbeeld is een `checkbox` element:

```html
<input type="checkbox" [(ngModel)]="checked">
```

en dan kan je de `checked` variabele initialiseren in je typescript bestand:

```typescript
checked: boolean = true;
```

## Parent-child component communicatie

Als je een variabele van een parent component wilt doorgeven aan een child component, kan je dit doen door een input property te gebruiken. Je kan dit doen door `@Input() variabele: type` te schrijven in de child component. Als je bijvoorbeeld een variabele `color` wil doorgeven aan een square component, kan je het volgende in de square component schrijven:

```typescript
@Input() color: string;
```

De html van de square component kan er dan als volgt uitzien:

```html
<div [style.backgroundColor]="color" style="width: 100px; height: 100px;"></div>
```

En dan kan je de `color` variabele doorgeven in de parent component:

```html
<app-square [color]="color"></app-square>
```

De waarde van @Input wordt pas doorgegeven als de component geïnitialiseerd is. Je kan dus pas in de `ngOnInit` functie van de child component de waarde van de input property gebruiken.

Je kan ook volledige objecten doorgeven:

```typescript
@Input() user: User;
```

en dan kan je de user doorgeven in de parent component:

```html
<app-user [user]="user"></app-user>
```


## Routing

Als je routing wil gebruiken moet je in je `app.component.html` bestand een `router-outlet` toevoegen:

```html
<router-outlet></router-outlet>
```

Op deze plaats zullen de verschillende componenten getoond worden die je hebt gedefinieerd in je routing.

Vervolgens moet je in je `app.routes.ts` bestand de verschillende routes definiëren:

```typescript
export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "counter", component: CounterComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];
```

De bovenstaande routes definiëren drie routes: `home`, `counter` en `not-found`. Als de gebruiker naar de root van de applicatie navigeert, zal hij worden doorgestuurd naar de `home` route. Als de gebruiker naar een route navigeert die niet bestaat, zal hij worden doorgestuurd naar de `not-found` route.

Wil je links naar deze routes maken, dan kan je het volgende in je html bestand schrijven:

```html
<a [routerLink]="['/home']">Home</a>
<a [routerLink]="['/counter']">Counter</a>
```

om aan te geven dat een route actief is kan je de `routerLinkActive` directive gebruiken om een bepaalde class toe te voegen aan een element als de route actief is:

```html
<a [routerLink]="['/home']" [routerLinkActive]="['active']">Home</a>
<a [routerLink]="['/counter']" [routerLinkActive]="['active']">Counter</a>
```

Als de gebruiker op /home navigeert, zal de class `active` worden toegevoegd aan de `home` link. Als de gebruiker op /counter navigeert, zal de class `active` worden toegevoegd aan de `counter` link.

Je kan ook dynamische routes definieren als je bijvoorbeeld een id wil meegeven:

```typescript
export const Routes = [
  { path: "user/:id", component: UserComponent }
];
```

en dan kan je de id uitlezen in je component aan de hand van `@Input` parameters. Je moet hier wel nog een wijziging aanbrengen in je `app.config.ts` bestand:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding())]
};
```

`withComponentInputBinding()` zorgt ervoor dat de id uit de url wordt doorgegeven aan de component.

Je kan dan de id uitlezen in je component:

```typescript
@Input() id: string;
```

Wil je nu een link maken naar de `user` route met id `1`, dan kan je het volgende in je html bestand schrijven:

```html
<a [routerLink]="['/user', 1]">User 1</a>
```

of als je de id in een variabele hebt:

```html
<a [routerLink]="['/user', id]">User {{ id }}</a>
```

## Services

Services zijn een manier om code te delen tussen verschillende componenten. Als je bijvoorbeeld een API wilt aanroepen in verschillende componenten of data wilt delen tussen verschillende componenten, kan je een service gebruiken. Om een service aan te maken, kan je het volgende commando uitvoeren in je terminal:

```bash
ng generate service service-naam
```

Dit commando zal een nieuwe service aanmaken met de naam `service-naam`. Je kan dan de service gebruiken in je componenten door de service te injecteren in de constructor van de component:

```typescript
constructor(private service: ServiceNaam) {}
```

Dit maakt een instantie van de service beschikbaar in de component. Je kan dan de methodes van de service aanroepen in de component.

### lokaal JSON bestand inlezen in een service

Als je data wil inlezen van een lokaal JSON bestand, kan je dit doen in een service. 

Stel dat we het volgende JSON bestand hebben:

```json
[
    {
        "id": 0,
        "name": "Andie Similon",
        "age": 39,
        "city": "Edegem"
    },   
    {
        "id": 1,
        "name": "Hans Verbeeck",
        "age": 32,
        "city": "Antwerp"
    },
    {
        "id": 2,
        "name": "Jon Beton",
        "age": 22,
        "city": "Veurne"
    }
]
```

en we hebben dit opgeslagen in een bestand `staff.json` in de `src` map van ons project.

Het eerste wat we dan moeten doen is een nieuwe service aanmaken:

```bash
ng generate service staff
```

Vervolgens importeren we de json file in de ```staff.service.ts``` file:

```typescript
import staffJson from '../staff.json';
```

Zorg wel dat je het juiste path gebruikt naar het bestand. Dit is relatief ten opzichte van het bestand waarin je de import doet. In dit geval staat het bestand in een mapje boven de map waarin het bestand staat waarin je de import doet. 

Voor alle data die je importeert uit een json bestand moet je een interface aanmaken.

```typescript
export interface Staff {
  id: number;
  name: string;
  age: number;
  city: string;
}
```

Sla deze best op in een `types.ts` bestand in de `src` map.

De service zal er dan ongeveer als volgt uitzien:

```typescript
import { Injectable } from '@angular/core';
import staffJSON from "../staff.json";
import { Staff } from '../types';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private _staff : Staff[] = staffJSON;

  constructor() { }

  get staff(): Staff[] {
    return this._staff;
  }
}
```

We hebben hier een private variabele `_staff` die de data van het json bestand bevat. Deze data wordt ingelezen bij het initialiseren van de service. Vervolgens hebben we een getter `staff` die de data teruggeeft.

Je kan deze service dan gebruiken in een component door de service te injecteren in de constructor van de component:

```typescript
constructor(public staffService: StaffService) {}
```

Omdat we de service publiek maken in de constructor wordt er automatisch een publiek veld voor aangemaakt dat beschikbaar is vanuit je html code:

```typescript
@for (staff of staffService.staff; track $index) {
    <ul>{{staff.name}}</ul>
}
```

Vaak wordt er in het component zelf ook nog een getter aangemaakt om de data op te halen:

```typescript
get staff(): Staff[] {
  return this.staffService.staff;
}
```

en dan kan je in je html bestand de data tonen:

```html
@for (staff of staff; track $index) {
    <ul>{{staff.name}}</ul>
}
```

Wil je data met een bepaalde id ophalen, dan kan je een methode toevoegen aan de service:

```typescript
getStaffById(id: number): Staff {
  return this.staff.find(staff => staff.id === id);
}
```

je kan deze rechstreeks in je html aanroepen via de service of je kan ook nog een getter aanmaken in je component zoals je hierboven hebt gezien.

## JSON server

JSON server is een eenvoudig te gebruiken tool om een REST API te maken van een JSON bestand. Om JSON server te installeren, kan je het volgende commando uitvoeren in je terminal:

```bash
npm install -g json-server
```

Om JSON server te starten, kan je het volgende commando uitvoeren in je terminal. De structuur moet er als volgt uitzien:

```
{
  "endpoint1": [
    {
      "id": 1,
      "key": "value"
    },
    ...
  ],
  "endpoint2": [
    {
      "id": 1,
      "key": "value"
    },
    ...
  ]
}
````

Bijvoorbeeld voor de `staff.json` file:

```json
{
  "staff": [
    {
      "id": 0,
      "name": "Andie Similon",
      "age": 39,
      "city": "Edegem"
    },   
    {
      "id": 1,
      "name": "Hans Verbeeck",
      "age": 32,
      "city": "Antwerp"
    },
    {
      "id": 2,
      "name": "Jon Beton",
      "age": 22,
      "city": "Veurne"
    }
  ]
}
```

Vervolgens kan je JSON server starten met het volgende commando:

```bash
json-server staff.json
```

## HttpClient en API calls

Als je data wilt ophalen van een externe API, kan je de `HttpClient` module van Angular gebruiken. Je moet nog wel `provideHttpClient()` toevoegen aan je `app.config.ts` bestand:

```typescript
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()), provideHttpClient()]
};
```

Vervolgens kan je de `HttpClient` module injecteren in de constructor van de service:

```typescript
constructor(private client: HttpClient) {}
```

en dan kan je een API call maken in de service:

```typescript
getStaff() {
  return this.client.get<Staff[]>("http://localhost:3000/staff");
}
```

en dan kan je deze methode aanroepen in de component. Bijvoorbeeld in de `ngOnInit` functie:

```typescript
ngOnInit(): void {
  this.staffService.getStaff().subscribe(staff => {
    // doe iets met de data
  });
}
```

Je kan ook `async` en `await` gebruiken om de data op te halen:

```typescript
async ngOnInit() {
  const staff = await firstValueFrom(this.staffService.getStaff());
  // doe iets met de data
}
```

## PUT, POST en DELETE requests

Als je data wilt toevoegen of updaten in een API, kan je een PUT of POST request maken met de `HttpClient` module.

Om data toe te voegen, kan je een POST request maken:

```typescript
async addStaff(staff: Staff) {
  await firstValueFrom(this.client.post<Staff>("http://localhost:3000/staff", staff));
}
```

eventueel kan je na de post request de data opnieuw ophalen:

```typescript
async getStaff() {
  this.staff = await firstValueFrom(this.client.get<Staff[]>("http://localhost:3000/staff"));
}
```

```typescript
async addStaff(staff: Staff) {
  await firstValueFrom(this.client.post<Staff>("http://localhost:3000/staff", staff));
  await this.getStaff();
}
```

Met een PUT request kan je data updaten:

```typescript
async updateStaff(staff: Staff) {
  await firstValueFrom(this.client.put<Staff>(`http://localhost:3000/staff/${staff.id}`, staff));
  await this.getStaff();
}
```

Een delete request kan je maken met de `delete` methode:

```typescript
async deleteStaff(id: number) {
  await firstValueFrom(this.client.delete(`http://localhost:3000/staff/${id}`));
  await this.getStaff();
}
```

Uiteraard kan je hier ook de subscribe methode gebruiken in plaats van `firstValueFrom`.

```typescript
deleteStaff(id: number) {
  this.client.delete(`http://localhost:3000/staff/${id}`).subscribe(() => {
    this.getStaff();
  });
}
```

## NestJS

NestJS is een framework voor het bouwen van een REST API met Node.js. Om nestJS te installeren, kan je het volgende commando uitvoeren in je terminal:

```bash
npm install -g @nestjs/cli
```

Om een nieuw nestJS project aan te maken, kan je het volgende commando uitvoeren in je terminal:

```bash
nest new project-naam
```

Dit commando zal een nieuw nestJS project aanmaken met de naam `project-naam`. Je kan dan een nieuwe controller aanmaken met het volgende commando:

```bash
nest generate controller staff
```

Je kan dan de controller gebruiken om een REST API te bouwen. Hier een voorbeeld van een controller:

```typescript
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Staff } from 'src/types';

@Controller('staff')
export class StaffController {
  staff: Staff[] = [
    {
      "id": 0,
      "name": "Andie Similon",
      "age": 39,
      "city": "Edegem"
    },   
    {
      "id": 1,
      "name": "Hans Verbeeck",
      "age": 32,
      "city": "Antwerp"
    },
    {
      "id": 2,
      "name": "Jon Beton",
      "age": 22,
      "city": "Veurne"
    }
  ]


  constructor() {

  }

  @Get()
  getAll() {
    return this.staff;
  }
}
```

Zorg dat je ook in dit project een `types.ts` bestand hebt met de interface `Staff`. 

Je kan ook de staff array in een json bestand zetten en deze inlezen in de controller:

```typescript
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import * as staffJSON from "../staff.json";

@Controller('staff')
export class StaffController {
  staff: Staff[] = staffJSON;

  constructor() {

  }

  @Get()
  getAll() {
    return this.staff;
  }
}
```

Vergeet wel niet in `tsconfig.json` het volgende toe te voegen:

```json
"resolveJsonModule": true,
```

Als je nu de nest server start met het volgende commando:

```bash
npm run start:dev
```

kan je de data ophalen via de url `http://localhost:3000/staff`. 

### GET request met parameters

Als je data wilt ophalen met parameters, kan je deze parameters toevoegen aan de url. Bijvoorbeeld als je data wilt ophalen met een bepaalde id, kan je de id toevoegen aan de url:

```typescript
@Get(':id')
getById(@Param('id') id: string) {
  return this.staff.find(staff => staff.id === parseInt(id));
}
```

Je kan dan de data ophalen via de url `http://localhost:3000/staff/1`.

### POST request

Om data toe te voegen, kan je een POST request maken:

```typescript
@Post()
addStaff(@Body() staff: Staff) {
  this.staff.push(staff);
  return staff;
}
```

### PUT request

Om data te updaten, kan je een PUT request maken:

```typescript
@Put(':id')
updateStaff(@Param('id') id: string, @Body() staff: Staff) {
  const index = this.staff.findIndex(staff => staff.id === parseInt(id));
  this.staff[index] = staff;
  return staff;
}
```

### DELETE request

Om data te verwijderen, kan je een DELETE request maken:

```typescript
@Delete(':id')
deleteStaff(@Param('id') id: string) {
  this.staff = this.staff.filter(staff => staff.id !== parseInt(id));
  return this.staff;
}
```

