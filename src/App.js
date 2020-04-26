import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import SpectrumGraph from './components/SpectrumGraph';
import DoughnutGraph from './components/DoughnutGraph';
import Navbar from './components/Navbar';
import { HashRouter, Route } from 'react-router-dom';
import PieGraph from './components/PieGraph';
import Devices from './components/Devices';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			n_notes: 12,
			devices: [],
			selectedDevices: [],
			messages: new Map([]),
			test: false,
			mounted: false
		};
	}
	testMessages = () => {
		if (this.state.test === false) {
			let messages = new Map(
				Array(120).fill().map((_, i) => {
					return [ i, i * (127 / this.state.n_notes) ];
				})
			);
			this.setState({
				messages: messages,
				test: true
			});
		}
	};
	initialMessages = () => {
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
		this.initialMessages();
		navigator.requestMIDIAccess({ sysex: true }).then(this.onMIDISuccess, this.onMIDIFailure);
	}
	//componentDidUpdate(prevProps, prevState) {}
	onMIDISuccess = (midiAccess) => {
		console.log('MIDI ready!');
		// console.log(midiAccess);
		this.setState({
			midi: midiAccess,
			mounted: true
		});
		// midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
		this.listInputsAndOutputs(midiAccess);
		this.startLoggingMIDIInput(midiAccess);
	};

	onMIDIFailure = (msg) => {
		console.log('Failed to get MIDI access - ' + msg);
	};

	listInputsAndOutputs = (midiAccess) => {
		//'MIDI INPUTS'
		midiAccess.inputs.forEach((input) => {
			this.addMidiDevice(input);
			this.selectDevice(input);
		});
		//'MIDI OUTPUTS'
		//midiAccess.outputs.forEach(function(output) {});
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
	routes = [ { path: '/', component: 'Home' } ];
	selectChromas = (n_notes) => {
		this.setState({
			n_notes: n_notes,
			test: false
		});
	};
	render() {
		return (
			<HashRouter>
				<div className="App">
					<Navbar selectChromas={this.selectChromas} />
					<div className="">
						<Devices
							mounted={this.state.mounted}
							devices={this.state.devices}
							deselectDevice={this.deselectDevice}
							selectDevice={this.selectDevice}
							testMessages={this.testMessages}
						/>
					</div>
					{/* Exact attribute to match the precise url */}
					<Route
						exact
						path="/"
						render={(props) => (
							<Home
								{...props}
								mounted={this.state.mounted}
								devices={this.state.devices}
								selectDevice={this.selectDevice}
								deselectDevice={this.deselectDevice}
								messages={this.state.messages}
								n_notes={this.state.n_notes}
								testMessages={this.testMessages}
							/>
						)}
					/>
					<Route
						exact
						path="/doughnut"
						render={(props) => (
							<DoughnutGraph
								{...props}
								n_notes={this.state.n_notes}
								messages={this.state.messages}
								width={window.innerWidth}
								height={window.innerHeight - 100}
							/>
						)}
					/>
					<Route
						exact
						path="/pie"
						render={(props) => (
							<PieGraph
								{...props}
								n_notes={this.state.n_notes}
								messages={this.state.messages}
								width={window.innerWidth}
								height={window.innerHeight - 100}
							/>
						)}
					/>
					<Route
						exact
						path="/bar"
						render={(props) => (
							<SpectrumGraph
								{...props}
								n_notes={this.state.n_notes}
								messages={this.state.messages}
								width={window.innerWidth}
								height={window.innerHeight - 100}
							/>
						)}
					/>
				</div>
			</HashRouter>
		);
	}
}

export default App;
