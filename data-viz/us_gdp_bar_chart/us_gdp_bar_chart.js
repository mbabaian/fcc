var url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';

//VIDEO TUTORIAL https://www.youtube.com/watch?v=2S1AbEWX85o
//WEBPAGE TUTORIAL http://bl.ocks.org/Jverma/887877fc5c2c2d99be10



d3.json(url, function(error, data){
    //console.log(data.data);
    var json = data.data;
    var bardata = [];

    for (key in json) {
       // console.log(data.data[key][1]);
       // console.log(data.data[key][0]);

        // console.log(a);
        bardata.push(json[key][1]);
        //bardata.push(json[key][0]);
    }

        drawChart(bardata);

});

// DRAW THE BAR CHART

function drawChart(data) {


var x = d3.scaleTime()
    .domain([0, d3.max(data)])
    .range([0, 450]);

var y = d3.scaleLinear()
    .domain([0, d3.max(data)])


var tooltip = d3.select("body").append("div")
                .style("position", "absolute")
                .style('padding', '0 10px')
                .style('background', 'white')
                .style("opacity", 0)


// CALL THE SCALE FUNCTION
    d3.select(".chart")
        .selectAll("div")
          .data(data)
        .enter().append("div")
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
            .style("fill", "yellow")
        })

         .on('mouseout', function(d) {
        d3.select(this)
            .style('opacity', 1)
        })


}
