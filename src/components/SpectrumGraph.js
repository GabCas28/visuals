import ReactFauxDOM from 'react-faux-dom';
import './SpectrumGraph.css';
import * as d3 from 'd3';

function getValue(message) {
	return parseInt(message[1]);
}
function getMidi(message) {
	return parseInt(message[0]);
}

function SpectrumGraph(props) {
	const maxX = props.n_notes;
	const maxY = 127;

	let div = new ReactFauxDOM.Element('div');

	let data = Array.from(props.messages).filter((e) => getMidi(e) < maxX);

	const color = d3.scaleOrdinal(d3['schemeSet3']);
	color.domain(data.map((d) => getMidi(d)));

	let margin = { top: 20, right: 40, bottom: 30, left: 40 },
		graphWidth = props.width - margin.left - margin.right,
		graphHeight = props.height - margin.top - margin.bottom;

	let x = d3.scaleLinear().range([ 0, graphWidth ]);
	let y = d3.scaleLinear().range([ graphHeight, 0 ]);

	let labels = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
	let xAxis = d3.axisBottom().scale(x).tickFormat((d) => labels[d%12]);
	// let yAxis = d3.axisLeft().scale(y).ticks(4);

	//Pass it to d3.select and proceed as normal
	let svg = d3
		.select(div)
		.append('svg')
		.attr('preserveAspectRatio', 'xMinYMin meet')
		.attr('viewBox', '0 0 ' + props.width + ' ' + props.height)
		// .attr('width', graphWidth + margin.left + margin.right)
		// .attr('height', graphHeight + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	x.domain([ 0, maxX ]);
	y.domain([ 0, maxY ]);
	let xAxisRepr = svg
		.append('g')
		.attr('class', 'x axis')
		.attr('transform', `translate(${graphHeight / 20},${graphHeight})`)
		.call(xAxis);

	xAxisRepr.selectAll("text").attr("fill",(d)=>color(d)).attr("stroke",(d)=>color(d));

	// svg.append('g').attr('class', 'y axis').call(yAxis);

	svg
		.selectAll('.bar')
		.data(data)
		.enter()
		.append('rect')
		.attr('class', 'bar')
		.attr('fill', (d) => color(getMidi(d)))
		.attr('x', (d) => x(getMidi(d)))
		.attr('width', graphWidth / maxX)
		.attr('y', (d) => y(getValue(d)))
		.attr('value', getValue)
		.attr('height', (d) => graphHeight - y(getValue(d)));
	return div.toReact();
}

export default SpectrumGraph;
