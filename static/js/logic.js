let url = "http://127.0.0.1:5000/api/v1.0/id"

// d3.json(url).then(function(data){
//     console.log(data)
// });
d3.json(url).then(function (data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.id.location);
  });

function createFeatures(coviddata) {
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${id.total_vaccinations_per_hundred}</h3><hr><p>${id.daily_vaccinations}</p><hr><p>Percentage Vaccinated: ${id.people_fully_vaccinated_per_hundred}</p>`);
  }
  
  
  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let vaccination = L.geoJSON(coviddata, {
    onEachFeature: onEachFeature
  });
   // Send our earthquakes layer to the createMap function/
   createMap(vaccination);
}
function createMap(vaccination) {

    // Create the base layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
  
    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });


      // Create a baseMaps object.
    let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };
   // Create an overlay object to hold our overlay.
    let overlayMaps = {
    vaccination: vaccination
  };
  let myMap = L.map("map", {
    center: [
        37.09, -95.71
      ],
    zoom: 5,
    layers: [street,vaccination]
  });

   // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}
  





