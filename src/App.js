import React, { Component } from 'react';
import './App.css';
import Devices from './Devices';
import SpectrumGraph from './SpectrumGraph';

class App extends Component {
	state = {
		devices: [],
		selectedDevice: null,
		messages: new Map([])
	};
	initialTestMessages = () => {
		let messages = Array(128).fill().map((_, i) => {
			return { data: [ 0, i, i ] };
		});
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
	selectDevice = (device) => {
		this.setState({
			selectedDevice: device
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
				<h1>These are the input devices available:</h1>
				<Devices devices={this.state.devices} selectDevice={this.selectDevice} />
				<SpectrumGraph messages={this.state.messages} width="600" height="300" />
			</div>
		);
	}
}

export default App;
