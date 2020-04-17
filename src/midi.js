import $ from 'jquery'
import { render } from 'react-dom';
function Midi() {
    function onMIDISuccess(midiAccess) {
		console.log('MIDI ready!');
		console.log(midiAccess);
		// midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
		listInputsAndOutputs(midiAccess);
		startLoggingMIDIInput(midiAccess);
	}

	function onMIDIFailure(msg) {
		console.log('Failed to get MIDI access - ' + msg);
	}

	function listInputsAndOutputs(midiAccess) {
		console.log(midiAccess.inputs.size);
		console.log('MIDI INPUTS');
		midiAccess.inputs.forEach(function(input) {
			console.log(input);
			$('#inputs').append('<option value=' + input.id + '>'+input.name+'</option>');
		});
		console.log('MIDI OUTPUTS');
		midiAccess.outputs.forEach(function(output) {
			console.log(output);
		});
    }
    function onMIDIMessage(event) {
		var str = 'MIDI message received at timestamp ' + event.timestamp + '[' + event.data.length + ' bytes]: ';
		for (var i = 0; i < event.data.length; i++) {
			str += event.data[i].toString(8) + ' ';
		}
		console.log(str);
		console.log(event);
	}

	function startLoggingMIDIInput(midiAccess) {
		midiAccess.inputs.forEach(function(entry) {
			entry.onmidimessage = onMIDIMessage;
		});
    }
    navigator
        .requestMIDIAccess({ sysex: true })
        .then(this.onMIDISuccess,this.onMIDIFailure);
}

export default Midi;