import React, { Component } from 'react';
import './Home.css';
import Devices from './Devices';
import SpectrumGraph from './SpectrumGraph';
import DoughnutGraph from './DoughnutGraph';
import PieGraph from './PieGraph';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			devices: [],
			selectedDevices: [],
			messages: new Map([])
		};
	}

	initialTestMessages = () => {
		let messages = new Map(
			Array(128).fill().map((_, i) => {
				return [ i, 0 ];
			})
		);
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
		this.initialTestMessages();
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
				<Devices
					devices={this.state.devices}
					deselectDevice={this.deselectDevice}
					selectDevice={this.selectDevice}
				/>

				<div id="graph-container" className="card-panel black lighten-2 row">
					<div className="col s12 m5">
						<SpectrumGraph
							n_notes={this.props.n_notes}
							messages={this.state.messages}
							width="600"
							height="400"
						/>
					</div>
					<div className="col s12 m7">
						<div className="col s12 m6">
							<DoughnutGraph
								n_notes={this.props.n_notes}
								messages={this.state.messages}
								width="400"
								height="370"
							/>
						</div>
						<div className="col s12 m6">
							<PieGraph
								n_notes={this.props.n_notes}
								messages={this.state.messages}
								width="400"
								height="370"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
