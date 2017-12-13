function showInformationToilets(feature, layer) { 
      var popupContent = '<h3>Ukjent status</h3>';      
      if (feature.properties && feature.properties.access) {
            switch(feature.properties.access) {
                  case 'yes':
                      popupContent = '<h3>Offentlig toalett</h3>';
                      break;
                  case 'public':
                      popupContent = '<h3>Offentlig toalett</h3>';
                      break;
                  case 'permissive':
                      popupContent = '<h3>Offentlig toalett</h3>';
                      break;
                  default:
                      popupContent = '<h3>Ukjent status</h3>';
                      break;
          }
      }
      layer.bindPopup(popupContent);
}
function showInformationHiking(feature, layer) {

}

//Initializing the map
function setMap() {

      //Set view takes two parameters;
      //1. The coordinates for the center of the map
      //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out
      var map = L.map('map').setView([60.391263, 5.322054], 13.5);


      //Adding the base map. Base map decides how the background map looks like
      // var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      var basemapUrl='https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw';
      L.tileLayer(basemapUrl).addTo(map);

      // //Adding geoJSON layer to the map:
      var toiletsLayer = L.geoJSON(toilets, {
            onEachFeature: showInformationToilets
      }).addTo(map);
      var mountainHikingLayer = L.geoJSON(mountain_hiking).addTo(map);
}

window.onload = setMap;
