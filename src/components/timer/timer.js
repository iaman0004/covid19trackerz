import React from 'react';
import './timer.css';
import { standardizeCount } from '../../function';

const Timer = ({ infected, active, recoverd, deaths, newInfected, newDeaths }) => {
	return (
		<div className='container-fluid canvas'>
			<div className='tile'>
				<div className='box infected'>{standardizeCount(infected)}</div>
				<div className='text-case'>Infected</div>
			</div>
			<div className='tile'>
				<div className='box active'>{standardizeCount(active)}</div>
				<div className='text-case'>Active</div>
			</div>
			<div className='tile'>
				<div className='box deaths'>{standardizeCount(deaths)}</div>
				<div className='text-case'>Death</div>
			</div>
			<div className='tile'>
				<div className='box recovered'>{standardizeCount(recoverd)}</div>
				<div className='text-case'>Recovered</div>
			</div>
			<div className='tile'>
				<div className='box new-infected'>{standardizeCount(newInfected)}</div>
				<div className='text-case'>New Cases Today</div>
			</div>
			<div className='tile'>
				<div className='box new-death'>{standardizeCount(newDeaths)}</div>
				<div className='text-case'>New Deaths Today</div>
			</div>
		</div>
	);
};

export default Timer;
