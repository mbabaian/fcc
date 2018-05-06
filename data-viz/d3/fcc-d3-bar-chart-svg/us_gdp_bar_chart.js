const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const w = 1100;
const h = 700;
const padding = 50;

var svg = d3.select(".chart").append("svg")
			.attr("width", w)
			.attr("height", h);

var xScale = d3.scaleLinear().range([padding, w - padding]);
var yScale = d3.scaleLinear().range([h - padding, padding]);

var tooltip = d3.select("body").append("div")
    				.attr("class", "tooltip")
    				.style("opacity", 0);

d3.json(url, function(error, data){
	var json = data.data;
	var bardata = [];
	var year = [];

	for (key in json) {
	    bardata.push(json[key][1]);
	    year.push(json[key][0]);
	}

	drawChart(bardata, year);
	console.log(year);
	// console.log(bardata.length);
});

// DRAW THE BAR CHART
function drawChart(data, year) {
	xScale.domain([0, year.length+1]) // 1947 - 2015
	yScale.domain([0, d3.max(data)])

	svg.selectAll(".bar")
	   .data(data)
	   .enter().append("rect")
	   .attr("class", "bar")
	   .attr("x", (d, i) => xScale(i))
	   .attr("y", (d) => yScale(d))
	   .attr("width", 3)
	   .attr("height", (d) => h - padding - yScale(d))

		 .on("mouseover", function (d) {
			 tooltip.transition()
			 		.duration(200)
					.style("opacity", .9);

				tooltip.html("$"+d+" Billions" +"</br>" + "test")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
				
		 });

		var xAxis = d3.axisBottom(xScale);
		svg.append('g')
			.attr('transform', 'translate(0,' + (h - padding) +')')
			.call(xAxis);

    var yAxis = d3.axisLeft(yScale);
    svg.append('g')
       .attr('transform', 'translate(' + (padding) + ',0)')
       .call(yAxis);


}
