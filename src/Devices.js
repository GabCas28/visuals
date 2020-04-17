import React from 'react';
import './Devices.css';
//function devices(props){
function Devices({ devices, deselectDevice, selectDevice }) {
	function handleClick(e,device){
		if (e.target.innerHTML === 'Mute') {
			e.target.classList.toggle("green");
			e.target.innerHTML = 'Listen';
			deselectDevice(device);
		} else if (e.target.innerHTML === 'Listen') {
			e.target.classList.toggle("green");
			e.target.innerHTML = 'Mute';
			selectDevice(device);
		}
	}
	const deviceList = devices.map((device) => {
		return (
			<li className="collection-item row" key={device.id}>
				<div className="col s3">Name: {device.name}</div>
				<div className="col s3">Manufacturer: {device.manufacturer} </div>
				<div className="col s2">Type: {device.type}</div>
				<div className="col s2">
					State: {device.state}, {device.action}
				</div>
				<button
					className="devices btn purple lighten-4"
					onClick={(e) => {
						handleClick(e, device);
					}}
				>
					Mute
				</button>
			</li>
		);
	});

	return <ul className="collection">{deviceList}</ul>;
}
export default Devices;
