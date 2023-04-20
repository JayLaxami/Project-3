let url = "http://127.0.0.1:5000/";
//let dropdownMenu = d3.select("#selDataset");

function init() {
    let url2 = url + "/api/v1.0/total_vaccinations"; 
    d3.json(url2).then(function (data) {
                 console.log(data);
    });
    
    // d3.json(url).then(function (data) {
    //    const names = data.names
    //    function init() {
    //     d3.json(url).then(function (data) {
    
    //         const names = data.names
    //         for (let index = 0; index < names.length; index++) {
    //             const element = names[index];
    //             dropdownMenu.append("option").text(element).property("value", element)
    //         }
    //         buildCharts(names[0])
    //         buildBarChart(names[0]);
           
    // });
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


// Plotting viz1
function plotTotalVaccinations(urlEnd) {
    // States
    let url_total = url + "/api/v1.0/" + urlEnd;

    d3.json(url_total).then(function(data) {    
        //console.log(data);          
        
        var xValues = "";
        var yValues = "";

       loc = Object.keys(data.location).map(function(key) {return data.location[key];})
        if(urlEnd === "total_vaccinations") {
            xValues = loc
            yValues = Object.keys(data.total_vaccinations).map((key) => data.total_vaccinations[key] )
        } else if(urlEnd === "people_fully_vaccinated") {
            xValues = loc
            yValues = Object.keys(data.people_fully_vaccinated).map((key) => data.people_fully_vaccinated[key] )
        } else if(urlEnd === "people_vaccinated") {
            xValues = loc
            yValues = data.people_vaccinated;
        }
        
        // console.log("Alabama");
        
        console.log(xValues); 
        console.log(yValues);

        // Trace for the Data
        let trace1 = {
            x: xValues,
            y: yValues, 
            type: "bar"
            };

        // Data trace array
        let traceData = [trace1];
        
        // Apply the group barmode to the layout
        let layout = {
            title: "",
            xaxis: {
                title: "U.S States",
                dtick : 1
            },
            yaxis: {
                title: "Count"
            }
        };

        
        
        // Render the plot to the div tag with id "viz"
        Plotly.newPlot("viz1", traceData, layout, {scrollZoom: true});
    });
}
// plotTotalVaccinations(url_end)


