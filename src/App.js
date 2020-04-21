import React, { Component } from 'react';
import './App.css';
import Devices from './Devices';
import SpectrumGraph from './SpectrumGraph';
import PieGraph from './PieGraph';
import PieGraph2 from './PieGraph2';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			devices: [],
			selectedDevices: [],
			messages: new Map([])
		};
	}

	initialTestMessages = () => {
		let messages = new Map(Array(128).fill().map((_, i) => {
			return [ i, i ] ;
		}));
		this.setState({
			messages: messages
		});
	};

	addMidiDevice = (device) => {
		// we copy the array and alter the copy
		var devices = this.state.devices;
		devices.push(device);
		// we set the new array as state
		this.setState({
			devices: devices
		});
		//console.log(ninja);
	};
	deselectDevice = (device) => {
		let selected = this.state.selectedDevices;
		selected = selected.filter(function(ele) {
			return ele !== device;
		});
		this.state.midi.inputs.forEach((input) => {
			if (input === device) {
				input.onmidimessage = null;
				input.action = 'not listening';
			}
		});
		this.setState({
			selectedDevices: selected
		});
	};

	selectDevice = (device) => {
		let selected = this.state.selectedDevices;
		selected.push(device);
		this.state.midi.inputs.forEach((input) => {
			if (input === device) {
				input.onmidimessage = this.onMIDIMessage;
				input.action = 'listening';
			}
		});
		this.setState({
			selectedDevices: selected
		});
	};
	componentDidMount() {
		// this.initialTestMessages();
		navigator.requestMIDIAccess({ sysex: true }).then(this.onMIDISuccess, this.onMIDIFailure);
	}
	//componentDidUpdate(prevProps, prevState) {}
	onMIDISuccess = (midiAccess) => {
		console.log('MIDI ready!');
		console.log(midiAccess);

		this.setState({
			midi: midiAccess
		});
		// midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
		this.listInputsAndOutputs(midiAccess);
		this.startLoggingMIDIInput(midiAccess);
	};

	onMIDIFailure = (msg) => {
		console.log('Failed to get MIDI access - ' + msg);
	};

	listInputsAndOutputs = (midiAccess) => {
		console.log('MIDI INPUTS');
		midiAccess.inputs.forEach((input) => {
			this.addMidiDevice(input);
			this.selectDevice(input);
		});
		console.log('MIDI OUTPUTS');
		midiAccess.outputs.forEach(function(output) {});
	};

	onMIDIMessage = (event) => {
		let messages = this.state.messages;
		messages.set(event.data[1], event.data[2]);
		this.setState({
			messages: messages
		});
	};

	startLoggingMIDIInput = (midiAccess) => {
		midiAccess.inputs.forEach((entry) => {
			entry.onmidimessage = this.onMIDIMessage;
		});
	};
	render() {
		return (
			<div className="App">
				<h2 className="card-panel white accent-4 lighten-2">Midi Visuals</h2>
				<Devices
					devices={this.state.devices}
					deselectDevice={this.deselectDevice}
					selectDevice={this.selectDevice}
				/>
				<div id="graph-container" className="card-panel white s lighten-2">
					<SpectrumGraph messages={this.state.messages}  height="400" />
				</div>
				<div id="graph-container" className="card-panel white s lighten-2 row">
					<PieGraph messages={this.state.messages}  width="400" height="400" />
				</div>	
				<div id="graph-container" className="card-panel white s lighten-2 row">
					<PieGraph2 messages={this.state.messages}  width="400" height="400" />
				</div>
			</div>
		);
	}
}

export default App;
