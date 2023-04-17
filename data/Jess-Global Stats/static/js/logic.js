let link = "http://127.0.0.1:5000/api/v1.0/Country";
let dropdownMenu = d3.select("#selDataset");

// Perform a request to the link URL
d3.json(link).then(function (Country) {
    // Once we get a response, send the data.features object to the create function.
    createCountries(Country);
  });

  function createCountries(country) {

    let countries = country.index;
    let countryMarker = [];

    // Define a function that we want to run once for each country
    // Create a popup that describes the place, 
    for (let index = 0; index < countries.length; index++) {
        let country = countries[index];

        let countryMarker = L.marker([country.Latitude, country.Longitude])
            .bindPopup(`<h3>${country.Index}</h3><hr><p>${country.Capital}</p><hr><p>First Vaccine Date: ${new Date(country.First_Vaccine_Date)}</p><hr><p>Total Vaccinations: ${county.Total_Vaccinations}</p><hr><p>Number of People Fully Vaccinated: ${county.Persons_Fully_Vaccinated}</p><hr><p>Number of Vaccine Types Used: ${county.Number_of_Vaccine_Types_Used}</p><hr><p>Vaccines Used: ${county.Vaccines_Used}</p>`);
        countryMarker.push(countryMarker)
        createMap(L.layerGroup(countryMarkers));
  // Create a GeoJSON layer that contains the features  of each country
    let countries = L.geoJSON(country, {
        onEachCountry: onEachCountry 
      });
  
      createMap(countries);
  }
  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  
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
      countryMarkers
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
  legend.addTo(map);
}; 

