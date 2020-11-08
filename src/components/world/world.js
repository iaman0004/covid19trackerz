import React, { useState, useEffect } from 'react';
import './world.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Timer from '../timer/timer';
import Navbar from '../navbar/navbar';
import Loading from '../loading/loading';
import WorldTable from '../table/worldTable';

const World = () => {
	const [world, setWorld] = useState([]);
	const [totalWorldCase, setTotalWorldCase] = useState([]);
	const [loading1, setLoading1] = useState(true);
	const [loading2, setLoading2] = useState(true);

	useEffect(() => {
		axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort').then(response => {
			setWorld(response.data);
			setLoading1(false);
		});

		axios.get('https://corona.lmao.ninja/v2/all?yesterday').then(response => {
			setTotalWorldCase(response.data);
			setLoading2(false);
		});
	}, []);

	return (
		<div className='container-fluid'>
			<Navbar />
			{!loading1 && !loading2 ? (
				<div>
					<div className='row'>
						<div className='col'></div>
						<div className='col-md-8 to-india'>
							<h2>---GLOBAL STATS---</h2>
						</div>
						<div className='col'></div>
					</div>
					<div className='row global-state'>
						<div className='col'></div>
						<div className='col-md-10 col-sm-12'>
							<Timer
								infected={totalWorldCase.cases}
								active={totalWorldCase.active}
								recoverd={totalWorldCase.recovered}
								deaths={totalWorldCase.deaths}
								newInfected={totalWorldCase.todayCases}
								newDeaths={totalWorldCase.todayDeaths}
							/>
						</div>
						<div className='col'></div>
					</div>
					<div className='row'>
						<div className='col'></div>
						<div className='col-md-8'>
							<div className='world-data'>
								<WorldTable tableData={world} />
							</div>
						</div>
						<div className='col'></div>
					</div>
					<div className='row'>
						<div className='col'></div>
						<div className='col-md-8 to-india'>
							<Link to={'/india'}>
								<button type='submit' className='btn'>
									<span className='circle'>
										<span className='icon arrow'></span>
									</span>
									<span className='button-text'>India</span>
								</button>
							</Link>
						</div>
						<div className='col'></div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default World;
