# Norkart-webkurs


## Innhold:

[Innhold:](#innhold)
- [Bakgrunnskart](#bakgrunnskart)
- [Popup](#popup)


## Bakgrunnskart

Bakgrunsskart definerer stilen på kartet, og kan enkelt byttes i koden i `public/js/index.js`.

```javascript

    var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      L.tileLayer(basemapUrl).addTo(map);

```
Her er noen eksempler på bakgrunnskart dere kan bruke:

[grey](./public/images/grey.png)
[satellite](./public/images/satellite.png)
[streets](./public/images/streets.png)
[osm]('./public/images/osm.png')
http://{s}.tile.osm.org/{z}/{x}/{y}.png

https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw
