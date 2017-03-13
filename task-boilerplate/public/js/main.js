
//Initializing the map
function setMap() {

      console.log('Loading map');

      var map = L.map('map').setView([63.430, 10.395], 14);
      //Set view takes two parameters;
            //1. The coordinates for the center of the map
            //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out


      //Adding the base map. Base map decides how the background map looks like
      var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      L.tileLayer(basemapUrl).addTo(map);


      //Adding the carto layer to the map:
      cartodb.createLayer(map, 'https://mathildeo.carto.com/api/v2/viz/808e5efa-f6bd-11e6-bd76-0ee66e2c9693/viz.json', { https: true })
      .addTo(map)
      .on('error', function(err) {
            alert("some error occurred: " + err);
      });

}

window.onload = setMap;
