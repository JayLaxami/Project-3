let url = "http://127.0.0.1:5000/";
let dropdownMenu = d3.select("#selDataset");

function init() {
    d3.json(url).then(function (data) {
       const names = data.names
       function init() {
        d3.json(url).then(function (data) {
    
            const names = data.names
            for (let index = 0; index < names.length; index++) {
                const element = names[index];
                dropdownMenu.append("option").text(element).property("value", element)
            }
            buildCharts(names[0])
            buildBarChart(names[0]);
           
    });
}
init()

function optionChanged(id) {
    console.log(id);
    buildCharts(id);
    buildBarChart(id);
}

function buildCharts(id) {
    console.log(id)
    d3.json(url).then(function(data) {
        console.log(data);
    })
}

