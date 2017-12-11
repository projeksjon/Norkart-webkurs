function showInformationToilets(feature, layer) { 
      var popupContent = '<h3>Ukjent status</h3>';
      var fee = '<h3></h3>';     
      if (feature.properties && feature.properties.fee) {
            if (feature.properties.fee !== 'no') fee = '<h3>Pris: '+feature.properties.fee+'</h3>';  
      }
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
      layer.bindPopup(popupContent + fee);
}
function showInformationHiking(feature, layer) {
      var popupContent = '<h3>Ukjent stitype</h3>';
      if(feature.properties && feature.properties.sac_scale) {
            popupContent = '<h3>Fjelltur</h3>';
            if (feature.properties.name) {
                  popupContent = '<h3>'+feature.properties.name+'</h3>';
            }
      }
      layer.bindPopup(popupContent);
}

//Initializing the map
function setMap() {

      //Set view takes two parameters;
      //1. The coordinates for the center of the map
      //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out
      var map = L.map('map').setView([60.391263, 5.322054], 13.5);


      //Adding the base map. Base map decides how the background map looks like
      var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      var basemapUrl='https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw';
      L.tileLayer(basemapUrl).addTo(map);

      //Adding geoJSON layer to the map:
      var toiletsLayer = L.geoJSON(toilets, {
            onEachFeature: showInformationToilets,
            pointToLayer: function (feature, latlng) {
                  if(feature.properties.fee && feature.properties.fee !== 'no') {
                        return L.circleMarker(latlng, {fillColor: "#ff7800", weight: 0.1, radius: 8, fillOpacity: 1})
                  } else if (!feature.properties.access) {
                        return L.circleMarker(latlng, {fillColor: "#9c2774", weight: 0.1, radius: 8, fillOpacity: 1})
                  }
                  return L.circleMarker(latlng, {fillColor: "#51a026", weight: 0.1, radius: 10, fillOpacity: 1})
            }
      }).addTo(map);
      var mountainHikingLayer = L.geoJSON(mountain_hiking, {
            onEachFeature: showInformationHiking,
            style: function(feature) {
                  if (feature.properties.name) {
                        return {color: "#51a026"};
                  }
                  return {color: "#9c2774"};
            }
      }).addTo(map);




      var hoydedata = 'https://wms.geonorge.no/skwms1/wms.hoyde-dtm1?';
      var hoydedata_layer = 'dtm1_33';

      var turFriluftsStier = 'https://wms.geonorge.no/skwms1/wms.friluftsruter2?';
      var turFriluftsStier_layer = 'Tur- og friluftsruter WMS'
      var turFriluftsStier_layer2 = 'Ruter'

      // L.tileLayer.wms(turFriluftsStier, {
      //       layers: turFriluftsStier_layer2
      // }).addTo(map);
}

window.onload = setMap;
