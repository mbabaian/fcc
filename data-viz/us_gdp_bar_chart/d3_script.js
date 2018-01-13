var url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';

// SET DIMENSIONS OF CANVAS
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// SET RANGES 
var x = d3.scaleLinear()
            .domain([0, d3.max(width)])
            .range([0, 800]);

         //d3.scaleTime()
           // .range([0, width]);
var y = d3.scaleLinear()
            .domain([0, 18064.7])
            .range([height, 0]);

var svg = d3.select("body")
                .append("svg")
                .attr("height", height)
                .attr("width", width)
            .append("g")
                .attr("transform", "translate(" +margin.left+ "," +margin.top+ ")");
       
// DEFINE AXIS
var xAxis = d3.axisBottom()
                .scale(x);

var yAxis = d3.axisLeft()
                .scale(y)
                .ticks(20);
            


// LOADING THE DATA
d3.json(url, function(error, data) {
    for (var i = 0; i < data.data.length; i++){

        var date = data.data[i][0]; //x axis
        var value = data.data[i][1];    // y axis

        console.log(date);
        console.log(value);
    }

var x = d3.scaleTime()
    .domain([0, d3.max(data)])
    .range([0, 450]);

var y = d3.scaleLinear(data) 
    .domain([0, data.max])
        
var xAxis = d3.axisBottom()
                .scale(x);

var yAxis = d3.axisLeft()
                .scale(y)
                .ticks(50);

var tooltip = d3.select("body").append("div")
                .style("position", "absolute")
                .style("padding", "0 10px")
                .style("background", "white")
                .style("opacity", 0)

// CALL THE SCALE FUNCTION
var myChart = d3.select(".chart")
        .selectAll("g")
          .data(data)
        .enter().append("rect")
            .attr("style", "bar")
            .attr("x", function(d) {return x(d.date) + "px"; } )
            .attr("y", function(d) {return y(d.value); })
            .style("height", function(d) { return x(d) + "px"; })
            .style("width", 700)
        
        
// ADD TOOLTIP    

        .on('mouseover', function(d) {

        tooltip.transition()
            .style("opacity", .9)

        tooltip.html(d)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY) + "px")

        d3.select(this)
            .style('opacity', .5)
        })

         .on('mouseout', function(d) {
        d3.select(this)
            .style('opacity', 1)
        })

});



