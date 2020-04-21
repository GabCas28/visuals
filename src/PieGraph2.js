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

function PieGraph2(props) {
	const maxX = 12;
	const maxY = 127;
	let div = new ReactFauxDOM.Element('div');

	let data = Array.from(props.messages).filter((e) => getMidi(e) < maxX);

	const color = d3.scaleOrdinal(d3['schemeSet1']);
	color.domain(data.map((d) => getMidi(d)));

	const margin = { top: 20, right: 20, bottom: 20, left: 20 },
		graphWidth = useWindowWidth() - 50 - margin.left - margin.right,
		graphHeight = graphWidth - margin.top - margin.bottom;

	const cent = { x: graphWidth / 2 + 5, y: graphHeight / 2 + 5 };

	let ro = d3.scaleLinear().range([ 0, graphWidth / 2 ]);
	let y = d3.scaleLinear().range([ graphHeight, 0 ]);

	ro.domain([ 0, Math.min(cent.x,cent.y) ]);
	y.domain([ 0, maxY ]);

	let svg = d3
		.select(div)
		.append('svg')
		.attr('width', graphWidth + margin.left + margin.right)
		.attr('height', graphHeight + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${cent.x},${cent.y})`);

	const pie = d3.pie().sort(null).value((e) => {
		// return getValue(e);
		return (12);
	})
	//console.log('data', data);
	//console.log('pie', pie(data));
	const arcPath = d3.arc().innerRadius(0).outerRadius((e) => {
		//console.log('ro', e);
		return ro(getValue(e.data));
	});
	const paths = svg.selectAll('path').data(pie(data));
	paths
		.enter()
		.append('path')
		.attr('class', 'arc')
		.attr('fill', (d) => color(getMidi(d.data)))
		.attr('d', (d) => {
			//console.log('d', d);
			// console.log('data', d.data);
			return arcPath(d);
		})
		.attr('stroke', '#fff')
		.attr('stroke-width', 3);

	return div.toReact();
}

export default PieGraph2;
