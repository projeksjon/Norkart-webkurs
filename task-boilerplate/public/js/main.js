
//Initializing the map
function setMap() {

      console.log('Loading map');

      //Set view takes two parameters;
            //1. The coordinates for the center of the map
            //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out
      var map = L.map('map').setView([58.15381, 7.99641], 13.5);


      //Adding the base map. Base map decides how the background map looks like
      var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      L.tileLayer(basemapUrl).addTo(map);

      //Adding geoJSON layer to the map:
      L.geoJSON(utesteder)
      .addTo(map);
}

window.onload = setMap;
