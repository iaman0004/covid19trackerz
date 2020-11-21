import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Screen from './screen';

const App = () => (
	<Router>
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-md-12 col-sm-12' style={{ padding: '0' }}>
					<Navbar />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-12 col-sm-12' style={{ padding: '0' }}>
					<Screen />
				</div>
			</div>
		</div>
	</Router>
);

export default App;
