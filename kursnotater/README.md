# Kursnotater


## Innhold:

[Innhold:](#innhold)
- [Webprogrammering](#webprogrammering)
- [HTML](#html)
  - [Tags](HTML-tags)
- [CSS](#css)
  - [Element-selector](#Element-type)
  - [Id-selector](#Id-navn)
  - [Klassenavn-selector](#Klasse-navn)
  - [Kombinert-selector](#Kombinert-selector)
  - [Gruppe-selector](#Gruppe-selector)
- [javaScript](#javascript)


## Webprogrammering


## HTML
HTML definerer alle elementer på en nettside, for eksempel tekst-element, bilde-element og link-element.

```HTML
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

</body>
</html>
```

- `<!DOCTYPE html>` definerer at dokumenter er HTML5
- `<html>` er rot-elementet til siden
- `<head>` inneholder meta-informasjon om dokumentet
- `<body>` inneholder alt som blir synlig på siden


### HTML-tags
HTML-tags er som regel bygget opp av elementtype, attributtverdier og innhold.

**Struktur:** `<elementType attributter> innhold </elementType>`  
**Eksempel:** `<h1 class="header"> Hello! </h1> `  
Her er `h1` element-type, `class="header"` en attributt, og innholdet til elementet er `Hello!`

Noen eksempler på HTML tags er:

``` HTML
<h1>My First Heading</h1>
<h2>This is heading 2. I'm smaller than the h1 element</h2>
<p>My first paragraph.</p>
<img src = "source_url"></img>
<a href ="link_url">I'm a link, click me!</a>
<ul class="list">
  <li>First list element</li>
  <li>Second list element</li>
  <li>Third list element</li>
</ul>

```

## CSS

CSS definerer stilen til HTML-elementene. som for eksempel størrelse, farge og font-type til et tekst-element.

#### CSS selector's
For å spesifisere hvilket HTML element man ønsker å style, brukes CSS-selectors. HTML elementene spesifiseres på tre forskjellige måter:

- Elementtype
- Id-navn
- Klassenavn


##### Element-type:

Her er et eksempel på en CSS-selector for en element-type. Her vil alle paragrafer (element-type `p`) få den spesifiserte stilen.

``` CSS
p {
    text-align: center;
    color: red;
}
```

#### Id-navn

For å spesifisere stil for et html element med en spesifikk id, brukes `#` etterfulgt av id-navnet.

```CSS

#info_para{
  color: green;
}

```
Her vil elementet med `id = "info_para"` få den spesifiserte stilen.


#### Klassenavn

For å spesifisere HTML-elementer basert på klassenavn brukes `.` etterfulgt av klassenavnet.

```CSS
.center{
  text-align: center;
}

```

Her vil alle elementer med `class = "center"` få den spesifiserte stilen.

#### Kombinert selector

Man kan enkelt kombinere flere selectorer.

```CSS
p.center{
  text-align: center;
  color: red;
}
```

#### Gruppe selector

Hvis man ønsker å spesifisere stil for flere elementer samtidig, komibnerer man de med komma:

```CSS
h1, h2, #info{
  text-align: center;
  color: red;
}
```

Her spesifiserer man stilen for både `h1`, `h2` elementer, og elementet med `id = info`.


## javaScript
JavaScript har ingenting med Java å gjøre (utenom likhet i navnet).

I webutvikling kan man velge å enten skrive JavaScript koden i html filen eller lage en egen fil. Skal man skrive javasvcripten i html-filen skal dette gjøres inni `<script> </script>` taggen. Det mest vanlige, og mest ryddige, er å skrive JavaScript koden i en egen fil som man lagrer som "filnavn".js for deretter å importere denne filen i html filen din ved å skrive `<script src="filnavn.js"/> `.

JavaScript er et skriftspråk som er best kjent for å tilføre dynamiske elementer til nettsider, for eksempel ved å fjerne, bytte ut og legge til elementer. Om du har et html-element med tekst, kan man enkelt endre teksten i dette elementet ved å bruke events og JavaScript.

### Events
JavaScript samhandler med HTML gjennom events. Et event oppstår når brukeren gjør ulike ting, f.eks trykker på en knapp, skriver i et input felt, beveger på musen osv. Events kan også være noe nettleseren gjør, uten av bruker gjør noe. Eksempel på et nettleser event er når webapplikasjonen er ferdig lastet.

Events brukes til å kjøre JavaScript-kode og er normalt tiknyttet en eller flere funksjoner. Funksjonen vil da ikke kalles før eventet oppstår. JavaScript kode kan få et vindu til å lukke seg, en tekst til å vises, validering data og mye mye mer. Alle HTML elementer inneholder et sett med eventer som kan kjøre JavaScript kode.

Eksempel:

En paragraf med noe tekst i HTML

```
<p id="demo">Velkommen til denne siden</p>
<button onclick="sayGoodbye()">Hade</button>
```

Kan endres ved å skrive dette i JavaScript

```
function sayGoodbye() {
   document.getElementById("demo").innerHTML = "Hadebra!";
}
```

Resultatet etter knappen er trykket på:
```
<p id="demo">Hadebra!</p>        // <--- Innholdet er endret til Hadebra!
<button onclick="sayGoodbye()">Hade</button>
```
