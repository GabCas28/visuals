import React from 'react';
import './Home.css';
import SpectrumGraph from './SpectrumGraph';
import DoughnutGraph from './DoughnutGraph';
import PieGraph from './PieGraph';

function Home({ n_notes, messages }) {
	return (
		<div className="App">
			<div id="graph-container" className="card-panel black lighten-2 row">
				<div className="col s12 m5">
					<SpectrumGraph n_notes={n_notes} messages={messages} width="600" height="400" />
				</div>
				<div className="col s12 m7">
					<div className="col s12 m6">
						<DoughnutGraph n_notes={n_notes} messages={messages} width="400" height="370" />
					</div>
					<div className="col s12 m6">
						<PieGraph n_notes={n_notes} messages={messages} width="400" height="370" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
