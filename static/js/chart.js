// var x = [50, 150, 75];
// for (var i=0; i<x.length; i++) {
//     var el = document.createElement('div')
//     el.style.width = x[i] + 'px';
//     el.className = 'bar';
//     el.innerHTML = x[i];
//     var container = document.getElementById('chart')
//     container.appendChild(el);
// }

d3.json('/data').then(function(data){

    var elements = d3.select("#d3chart")
     .selectAll('bar')
     .data(data);

    elements.enter()
            .append('div')
            .attr('class', 'bar')
            .style('width', function(d, i){
                console.log(d, i)
                return d.y + 'px';
            })
            .text(function(d, i){
                return d.y
            })
            .on('mouseover', function(d, i){
                d3.select(this).style('background', 'orange');
                d3.select('#selected').text('You moused over bar number ' + (i+1))
            })
            .on('mouseout', function(d, i){
                d3.select(this).style('background', 'steelblue')
                d3.select('#selected').text("")
            })
            .on('click', function(d,i){
                d.y += 50;
                d3.select(this)
                .transition()
                .duration(1000)
                .style('width', d.y + "px")
                .text(d.y)
            })
    })
