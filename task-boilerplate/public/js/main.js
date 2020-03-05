//Initializing the map
function setMap() {
  console.log("Loading map");

  var map = L.map("map").setView([63.41761015625138, 10.404267311096193], 16);
  //Set view takes two parameters;
  //1. The coordinates for the center of the map
  //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out

  //Adding the base map. Base map decides how the background map looks like
  var basemapUrl = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
  L.tileLayer(basemapUrl).addTo(map);

  //Creating marker in map
  var lesesal_geomatikk_marker = L.marker([
    63.414789466893424,
    10.406202357262375
  ]);

  lesesal_geomatikk_marker.addTo(map);
  lesesal_geomatikk_marker.on("click", function(e) {
    console.log("clicked on point");
    console.log(e.latlng);
  });

  map.on("click", handleMapClick);
}

function handleMapClick(event) {
  console.log("map was clicked");
  console.log(event);
}

window.onload = setMap;
