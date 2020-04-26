import React, { useEffect } from 'react';
import './Devices.css';
import { useLocation } from 'react-router-dom';
//function devices(props){

function Devices({ devices, deselectDevice, selectDevice, testMessages, mounted }) {
	const location = useLocation();
	const path = location.pathname;
	function handleClick(e, device) {
		if (e.target.innerHTML === 'Mute') {
			e.target.classList.toggle('green');
			e.target.innerHTML = 'Listen';
			deselectDevice(device);
		} else if (e.target.innerHTML === 'Listen') {
			e.target.classList.toggle('green');
			e.target.innerHTML = 'Mute';
			selectDevice(device);
		}
	}
	function button(device) {
		const classes =
			device.action === 'listening'
				? 'col offset-s2 s1 devices btn lighten-4 purple'
				: 'col offset-s2 s1 devices btn lighten-4 green';
		return (
			<button
				className={classes}
				onClick={(e) => {
					handleClick(e, device);
				}}
			>
				{device.action === 'listening' ? 'Mute' : 'Listen'}
			</button>
		);
	}
	useEffect(() => {
		if (mounted && devices.length === 0) {
			testMessages();
		}
	});
	const getDeviceList = (devices) => {
		if (devices.length > 0) {
			return devices.map((device) => {
				return (
					<li className="collection-item grey-text black row" key={device.id}>
						<div className="col s2">Device Name: {device.name}</div>
						<div className="col s3">Manufacturer: {device.manufacturer} </div>
						<div className="col s1">Type: {device.type}</div>
						<div className="col s3">
							State: {device.state}, {device.action}
						</div>
						{button(device)}
					</li>
				);
			});
		} else {
			return (
				<li className="collection-item grey-text black row">
					<div className="center col s12">
						No Midi devices found. Please, connect a Midi device and refresh the page.
					</div>
				</li>
			);
		}
	};
	const deviceList = getDeviceList(devices);
	return (
		<div className={path === '/' ? '' : 'hide'}>
			<ul className="collection">{deviceList}</ul>
		</div>
	);
}
export default Devices;
