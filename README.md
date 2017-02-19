# Norkart-webkurs


## Innhold:

[Innhold:](#innhold)
- [Oppgave](#oppgave)
- [Kjøre koden](#kjøre-koden)
- [Bakgrunnskart](#bakgrunnskart)
- [Popup](#popup)
- [Styling](#styling)

## Oppgave

Lag en nettside som på best mulig måte viser dine topp tre utesteder i Trondheim.

## Kjøre koden
Last ned koden ved å trykke "Clone or Download". Deretter last ned zip, eller clone hvis du har git installert. Når koden er lastet ned kan du åpne `index.html` i nettleseren, og du er i gang!

## Bakgrunnskart

Bakgrunsskart definerer stilen på kartet, og kan enkelt byttes i koden i `public/js/index.js`.

```javascript

    var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    L.tileLayer(basemapUrl).addTo(map);

```
Her er noen eksempler på bakgrunnskart dere kan bruke. Det eneste dere trenger å gjøre er å endre `basemapUrl`.


![grey](./public/images/grey.png)

`https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw`

![satellite](./public/images/satellite.png)

`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw`

![streets](./public/images/streets.png)

`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw`


![osm](./public/images/osm.png)

`http://{s}.tile.osm.org/{z}/{x}/{y}.png`


## Popup
Legg inn kort forklaring eller eventuelt bare link til docs for hvordan man legger inn popup

## Styling
Hvordan endre stylingen av punktene
