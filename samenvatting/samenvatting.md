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
