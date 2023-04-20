
//import 'leaflet-choropleth';

var url = "http://127.0.0.1:5000/api/v1.0/people_fully_vaccinated";
var map = L.map('map').setView([37.8, -96], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);