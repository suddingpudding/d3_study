var dataSet=[300, 130, 5, 60, 240];

//d3.select("#myGraph")
//    .append("rect")
//    .attr("x",0)
//    .attr("y",0)
//    .attr("width", dataSet[0])
//    .attr("height", "20px");


d3.select("#myGraph")
    .selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", function(d, i){
        return i * 25;
    
    })
    .attr("width", function(d, i){
        return d + "px";
    })
    .attr("height", "20px");




