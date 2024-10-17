# Samenvatting

## Angular Samenvatting

### Project opzetten

#### Node.js LTS

Vooraleer je Angular kan installeren, moet je Node.js installeren. Dit kan je doen door naar [deze link](https://nodejs.org/en/) te gaan en de LTS-versie te downloaden. De LTS versie is de versie die het meest stabiel is en het langst ondersteund wordt.

#### Angular CLI

Angular CLI is een command line tool die je helpt bij het maken van Angular projecten. Je kan Angular CLI installeren door het volgende commando uit te voeren in je terminal:

```bash
npm install -g @angular/cli
```

Als je powershell gebruikt moet je vaak de uitvoeringsbeleid aanpassen om npm te kunnen installeren. Dit kan je doen door het volgende commando uit te voeren in je terminal:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

#### Angular project aanmaken

Om een nieuw Angular project aan te maken, kan je het volgende commando uitvoeren in je terminal:

```bash
ng new project-naam
```

Dit commando zal een nieuwe map aanmaken met de naam `project-naam` en hierin een nieuw Angular project aanmaken. Opgelet dat je 'server side rendering' niet aanzet, dit is niet nodig voor de cursus.

```
? Which stylesheet format would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                    
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no
```

#### Angular project starten

Om je Angular project te starten, kan je het volgende commando uitvoeren in je terminal:

```bash
cd project-naam
ng serve
```

#### Bestandenstructuur

Bij het aanmaken van een nieuw Angular project, zal Angular CLI een aantal bestanden en mappen aanmaken:

* `src/`: Deze map bevat alle bronbestanden van je project.
* `src/app/`: Deze map bevat alle componenten, services, pipes, ...
* `public/`: Deze map bevat alle statische bestanden zoals afbeeldingen, ...
* `angular.json`: Dit bestand bevat de configuratie van je Angular project.
* `package.json`: Dit bestand bevat alle dependencies van je project.

en er wordt altijd een `app.component` aangemaakt met bij behorende html, css en spec.ts bestanden. Dit is de root component van je Angular project.

#### CSS Framework toevoegen

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

#### Font Awesome toevoegen

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

#### Lodash toevoegen

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

### Basisconcepten

#### App component

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

#### Interpolatie

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

#### Componenten aanmaken

Componenten zijn de bouwstenen van je Angular project. Een component bestaat uit een typescript bestand, een html bestand en een css bestand. Om een nieuwe component aan te maken, kan je het volgende commando uitvoeren in je terminal:

```bash
ng generate component component-naam
```

Dit commando zal een nieuwe map aanmaken met de naam `component-naam` en hierin een nieuwe component aanmaken. Je kan ook een component aanmaken in een specifieke map door de mapnaam toe te voegen aan het commando:

```bash
ng generate component mapnaam/component-naam
```

#### Componenten gebruiken

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

#### Code uitvoeren bij initialisatie

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

#### @for lus

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

#### @if statement

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

#### @switch statement

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

#### Pipes

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

#### Event binding

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

#### Property binding

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

#### Template reference variables

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

#### Two-way binding

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

#### Parent-child component communicatie

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


