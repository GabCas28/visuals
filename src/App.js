import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import SpectrumGraph from './components/SpectrumGraph';
import PieGraph from './components/PieGraph';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import PieGraph2 from './components/PieGraph2';

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
	routes = [ { path: '/', component: 'Home' } ];
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					{/* Exact attribute to match the precise url */}
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/doghnut"
						render={(props) => (
							<PieGraph
								{...props}
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
							<PieGraph2
								{...props}
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
								messages={this.state.messages}
								width={window.innerWidth}
								height={window.innerHeight - 100}
							/>
						)}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
