import React from 'react';
import './Devices.css';
//function devices(props){
function Devices({ devices, selectDevice }) {
	const deviceList = devices.map((device) => {
		return (
			<div className="device" key={device.id}>
				<div>Name: {device.name}</div>
				<div>Manufacturer: {device.manufacturer} </div>
				<div>Type: {device.type}</div>
				<div>State: {device.state}</div>
				<button
					onClick={() => {
						selectDevice(device.id);
					}}
				>
					Select device
				</button>
			</div>
		);
	});

	return <div className="device-list">{deviceList}</div>;
}
export default Devices;
