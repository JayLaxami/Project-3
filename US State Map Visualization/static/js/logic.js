let url = "http://127.0.0.1:5000/api/v1.0/id";

d3.json(url).then(function (data) {
  createFeatures(data);
  // console.log(data);

});

function createFeatures(data) {


  let features = [];

  for (let i = 0; i < Object.keys(data.id).length; i++) {
    // console.log(data.total_vaccinations[i])
    let feature = {
      "type": "Feature",
      "properties": {
        "location": data.location[i],
        "total_vaccinations": data.total_vaccinations[i].toLocaleString("en-US"),
        "daily_vaccinations": data.daily_vaccinations[i].toLocaleString("en-US"),
        "people_fully_vaccinated": data.people_fully_vaccinated[i].toLocaleString("en-US")
      },
      "geometry": {
        "type": "Point",
        "coordinates": [data.longitude[i], data.latitude[i]]
      }
    };

    features.push(feature);
  }
function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>Total Vaccine:${feature.properties.total_vaccinations}</h3><hr><p>Daily Vaccine:${feature.properties.daily_vaccinations}</p><hr><p>Fully Vaccinated: ${feature.properties.people_fully_vaccinated}</p>`);
  console.log(feature);
  }


  let geojson = {
    "type": "FeatureCollection",
    "features": features
  };
  
  let covidVaccines = L.geoJSON(geojson, {
    
    onEachFeature: onEachFeature
  });
  
  createMap(covidVaccines);

function createMap(covidVaccines) {
      // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 })

  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
 });
 //       // Create a baseMaps object.
  let baseMaps = {
   "Street Map": street,
   "Topographic Map": topo
  };
//    // Create an overlay object to hold our overlay.
  let overlayMaps = {
    CovidVaccines: covidVaccines
  };
  
  let myMap = L.map("map", {
    center: [48.74894534,
      -69.52148437
      
  ],
    zoom: 4,
    layers: [street,covidVaccines]
});
  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
  }).addTo(myMap);
  
}};
  