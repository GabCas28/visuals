import React from 'react';
import './Devices.css';
//function devices(props){
function Chromas({ selectChromas }) {
	function handleChange(e) {
        selectChromas(e.target.value);
		
	};

	return (
		<div className="col s12">
			<select onChange={(e) => handleChange(e)}>
				<option value="12">12 notes</option>
				<option value="24">24 notes</option>
				<option value="36">36 notes</option>
				<option value="48">48 notes</option>
				<option value="60">60 notes</option>
				<option value="72">72 notes</option>
				<option value="84">84 notes</option>
				<option value="96">96 notes</option>
				<option value="108">108 notes</option>
				<option value="120">120 notes</option>
			</select>
		</div>
	);
}
export default Chromas;
