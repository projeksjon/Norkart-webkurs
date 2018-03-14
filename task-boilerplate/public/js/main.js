
//Initializing the map
function setMap() {

      console.log('Loading map');

      var map = L.map('map').setView([58.969976, 5.733107], 14);
      //Set view takes two parameters;
            //1. The coordinates for the center of the map
            //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out


      //Adding the base map. Base map decides how the background map looks like
      var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      L.tileLayer(basemapUrl).addTo(map);

      //Adding geoJSON layer to the map:
      L.geoJSON(restaurants).addTo(map);
}

window.onload = setMap;
