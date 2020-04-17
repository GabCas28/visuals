import React, { Component } from 'react';
import ReactFauxDOM from 'react-faux-dom';
import './SpectrumGraph.css';
import * as d3 from 'd3';

class SpectrumGraph extends Component {
	getValue = (message) => {
		return parseInt(message[1]);
	};
	getMidi = (message) => {
		return parseInt(message[0]);
	};
	render() {
		let div = new ReactFauxDOM.Element('div');
		let data = Array.from(this.props.messages);
		let margin = { top: 20, right: 20, bottom: 30, left: 40 },
			graphWidth = this.props.width - margin.left - margin.right,
			graphHeight = this.props.height - margin.top - margin.bottom;

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

		x.domain([ 0, 127 ]);
		y.domain([ 0, 127 ]);

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
			.attr('x', (d) =>  x(this.getMidi(d)))
			.attr('width', graphWidth/127)
			.attr('y', (d) => y(this.getValue(d)))
			.attr("value", this.getValue)
			.attr('height', (d) => graphHeight - y(this.getValue(d)));
		return div.toReact();
	}
}

export default SpectrumGraph;
