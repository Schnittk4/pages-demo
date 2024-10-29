import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
window.onload = setup

function setup(){
    // const div = document.querySelector('')
    const div = d3.select('#main-vis')
    const tinyData = [
        {w: '100', h: '100', x: '200', y: '100', c: 'blue'},
        {w: '50', h: '50', x: '100', y: '100', c: 'tomato'},
        {w: '15', h: '15', x: '100', y: '100', c: 'green'}
        ]
        

        
    const svg = d3.create('svg')
        .attr("width", "500")
        .attr("height", "500") // specifies tag

    svg.selectAll('circle')
        .data(tinyData)
        .join('circle')
        .attr('fill', row => row.c)
        .attr('cy', row => row.y)
        .attr('cx', row => row.x)
        .attr('r', row => row.h);
    // return svg.node();
    div.node().appendChild(svg.node())
}

        