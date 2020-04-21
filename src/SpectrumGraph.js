import { useState, useEffect } from 'react';
import ReactFauxDOM from 'react-faux-dom';
import './SpectrumGraph.css';
import * as d3 from 'd3';

function useWindowWidth() {
	const [ width, setWidth ] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	return width;
}

function getValue(message) {
	return parseInt(message[1]);
}
function getMidi(message) {
	return parseInt(message[0]);
}

function SpectrumGraph(props) {
	const maxX = 12;
	const maxY = 127;


	let div = new ReactFauxDOM.Element('div');

	let data = Array.from(props.messages).filter((e) => getMidi(e) < maxX);
	
	const color = d3.scaleOrdinal(d3['schemeSet1']);
	color.domain(data.map(d=> getMidi(d)));

	let margin = { top: 20, right: 20, bottom: 30, left: 40 },
		graphWidth = useWindowWidth() - 50 - margin.left - margin.right,
		graphHeight = props.height - margin.top - margin.bottom;

	let x = d3.scaleLinear().range([ 0, graphWidth ]);
	let y = d3.scaleLinear().range([ graphHeight, 0 ]);

	let xAxis = d3.axisBottom().scale(x);
	let yAxis = d3.axisLeft().scale(y).ticks(10);

	//Pass it to d3.select and proceed as normal
	let svg = d3
		.select(div)
		.append('svg')
		.attr('width', graphWidth + margin.left + margin.right)
		.attr('height', graphHeight + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	x.domain([ 0, maxX ]);
	y.domain([ 0, maxY ]);

	svg.append('g').attr('class', 'x axis').attr('transform', `translate(0,${graphHeight})`).call(xAxis);

	svg
		.append('g')
		.attr('class', 'y axis')
		.call(yAxis)
		.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('y', 10)
		.attr('dy', '.71em')
		.style('text-anchor', 'end')
		.text('Frequency');

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
