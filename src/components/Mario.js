import React, { useState, useEffect } from 'react';
function Mario(props) {
	function getMidi(message) {
		return parseInt(message[0]);
	}
	document.addEventListener ('keydown', function (event){
			console.log (event.which);
		}); 
	useEffect(() => {
		props.messages.forEach((message)=>{
			var iframe = document.getElementById("mario");
			switch (message) {
				case 6:
					var evt = new KeyboardEvent('keydown', { keyCode: 39, which: 39 });
					console.log(evt);
					document.dispatchEvent(evt);
					break;
				case 1:
					var evt = new KeyboardEvent('keydown', { keyCode: 37, which: 37 });
					document.dispatchEvent(evt);
					console.log(evt);
					break;
				case 2:
					var evt = new KeyboardEvent('keydown', { keyCode: 90, which: 90 });
					document.dispatchEvent(evt);
					console.log(evt);
					break;
				case 3:
					var evt = new KeyboardEvent('keydown', { keyCode: 88, which: 88 });
					document.dispatchEvent(evt);
					console.log(evt);
					break;
				default:
					break;
			}
		});
	});

	return (
		<div className="card-panel black center row">
			<div id="controls" className="card-panel col s1 left-align black left">
				<p>Move Right: </p>
				<p>Move Left: </p>
				<p>Jump: </p>
				<p>Attack: </p>
			</div>
			<iframe
				id="mario"
				className="col s6 offset-s2"
				src="https://www.retrogames.cc/embed/21929-super-mario-bros-europe-rev-0a.html"
				width="600"
				height="450"
				frameborder="no"
				allowfullscreen="true"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
				scrolling="no"
			/>
		</div>
	);
}
export default Mario;
