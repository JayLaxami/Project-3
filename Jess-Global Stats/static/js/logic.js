let link = "http://127.0.0.1:5000/api/v1.0/Country";
let dropdownMenu = d3.select("#selDataset");
let data;
var map;
var countryMarker = [];
// Perform a request to the link URL
d3.json(link).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(countryData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.Country}</h3><hr><p>${feature.properties.Capital}</p><hr><p>First Vaccine Date: ${new Date(feature.properties.First_Vaccine_Date)}</p><hr><p>Total Vaccinations: ${feature.properties.Total_Vaccinations.toLocaleString("en-US")}</p><hr><p>Number of People Fully Vaccinated: ${feature.properties.Persons_Fully_Vaccinated.toLocaleString("en-US")}</p><hr><p>Number of Vaccine Types Used: ${feature.properties.Number_of_Vaccine_Types_Used}</p><hr><p>Vaccines Used: ${feature.properties.Vaccines_Used}</p>`);
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let countries = L.geoJSON(countryData, {
    onEachFeature: onEachFeature
  });

  // Send our earthquakes layer to the createMap function/
  createMap(countries);
}


function createMap(countries) {
  
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
      Countries: countries
    };
  
    // Create our map, giving it the streetmap and earthquakes layers to display on load.
    let map = L.map("map", {
      center: [30.76, -19.94],     
      zoom: 2.1,
      layers: [street, countries]
    });
  

     // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
  //legend.addTo(map);
}; 
