const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const w = 900;
const h = 600;
const padding = 50;
const year = [];

var svg = d3.select(".card")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

var tooltip = d3.select("body").append("div")
    				.attr("class", "tooltip")
    				.style("opacity", 0);

d3.json(url, function(error, data){
	var json = data.data;
	var bardata = [];

	for (key in json) {
		year.push(json[key][0]);
	    bardata.push(json[key][1]);
	}

	
	drawChart(bardata, year);
	//console.log(year);
	console.log(json);
	// console.log(bardata.length);
});

// DRAW THE BAR CHART
function drawChart(data, year) {

	var minDate = data['from_date'];
	var maxDate = data['to_date']; 

	var xScale = d3.scaleTime().range([padding, w - padding]);
	var yScale = d3.scaleLinear().range([h - padding, padding]);
		
	xScale.domain([0, year.length+1])// 1947 - 2015
	yScale.domain([0, d3.max(data)])

	svg.selectAll(".bar")
	   .data(data)
	   .enter().append("rect")
	   .attr("class", "bar")
	   .attr("x", (d, i) => xScale(i))
	   .attr("y", (d) => yScale(d))
	   .attr("width", 3)
	   .attr("height", (d) => h - padding - yScale(d))

		 .on("mouseover", function (d,i) {
			 tooltip.transition()
			 	.duration(200)
				.style("opacity", .9)
				.style("margin-top", "10px")
				.style("margin-left", "10px");

			tooltip.html("$"+d+" Billions</br>" + d[0])
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY) + "px");	
		 });

		// There is a section here for formatting dates http://www.d3noob.org/2016/09/formatting-date-time-axis-with.html
	var xAxis = d3.axisBottom(xScale)
					.tickFormat(d3.timeFormat("%Y"));
	svg.append('g')
		.attr('transform', 'translate(0,' + (h - padding) +')')
		.call(xAxis);

    var yAxis = d3.axisLeft(yScale);
    svg.append('g')
       .attr('transform', 'translate(' + (padding) + ',0)')
       .call(yAxis);
}
