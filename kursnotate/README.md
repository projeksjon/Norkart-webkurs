# Kursnotater


## Innhold:

[Innhold:](#innhold)
- [Webprogrammering](#webprogrammering)
- [HTML](#html)
- [CSS](#css)
- [javaScript](#javascript)


## Webprogrammering


## HTML
HTML definerer alle elementer på en nettside, eksempel tekst-element, bilde-element og link-element.

```HTML
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    <img src = "source_url"></img>
    <a href ="link_url">I'm a link, click me!</>
</body>
</html>
```

- `<!DOCTYPE html>` definerer at dokumenter er HTML5
- `<html>` er rot-elementet til siden
- `<head>` inneholder meta-informasjon om dokumentet
- `<body>` inneholder alt som blir synlig på siden

### HTML-tags
HTML-tags er som regel bygget av elementtype, attributtverdier og innhold.

Struktur: `<elementType attributter> innhold </elementType>`

Eksempel: `<h1 class="header"> Hello! </h1> `

Her er `h1` elementtype, `class="header"` en attributt, og innholdet til elementet er `Hello!`


## CSS


## javaScript
JavaScript har ingenting med Java å gjøre (utenom likhet i navnet)

I webutvikling kan man velge å enten skrive JavaScript koden i html filen eller lage en egen fil. Skal man skrive javasvcripten i html-filen skal dette gjøres inni `<script> </script>` taggen. Det mest vanlige, og mest ryddige, er å skrive JS koden i en egen fil som man lagrer som "filnavn".js for deretter å importere denne filen i html filen din ved å skrive `<script src="filnavn.js"/> `. 

JavaScript er et skriftspråk som er best kjent for å tilføre dynamiske elementer til nettsider, for eksempel kan den fjerne, bytte ut og legge til elementer. Om du har et html-element med noe tekst, kan man enkelt endre teksten i dette elementet ved å bruke events og JavaScript.

### Events
JavaScript samhandler med HTML gjennom events. Et event oppstår når brukeren gjør ulike ting, f.eks trykker på en knapp, skriver noe tekst inn i et input felt, beveger på musen etc. Eventsene brukes til å kjøre JavaScript koden. JavaScript kode kan få et vindu til å lukke seg, eller en tekst til å vises, eller validering av data og mye mye mer. Alle HTML elementer inneholder et sett med eventer som kan kjøre JavaScript kode. 

Eksempel:

En paragraf med noe tekst i HTML

`<p id="demo">Velkommen til denne siden</p>
<button onclick="sayGoodbye()">Hade</button>`

Kan endres ved å skrive dette i JavaScript

`
function sayGoodbye() {
   document.getElementById("demo").innerHTML = "Hadebra!";
}
`

