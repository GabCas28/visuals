import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Chromas from './Chromas';
function Navbar(props) {
	// setTimeout(()=>{
	//     props.history.push('/about')
	// },2000)
	return (
		<nav className="nav-wrapper blue-grey darken-4">
			<div className="container">
				<Link to="/" className="left brand-logo">
					Midi Visuals
				</Link>
				<ul className="right">
					<li>
						<NavLink exact to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/bar">Bar Chart</NavLink>
					</li>
					<li>
						<NavLink to="/doughnut">Doughnut Chart</NavLink>
					</li>
					<li>
						<NavLink to="/pie">Pie Chart</NavLink>
					</li>
					<li>
						<NavLink to="/mario">Mario</NavLink>
					</li>
					<li>
						<Chromas selectChromas={props.selectChromas}/>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default withRouter(Navbar);
