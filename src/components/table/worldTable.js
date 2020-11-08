import React, { useEffect } from 'react';
import './table.css';
import { generateID, updateNew } from '../../function';

const Table = ({ tableData }) => {
	useEffect(() => {
		document.title = 'Covid19 | Global Outbreak';
	}, []);

	return (
		<table className='table table-sm'>
			<thead>
				<tr>
					<th scope='col'>Country</th>
					<th scope='col' className='table-data'>
						Infected
					</th>
					<th scope='col' className='table-data'>
						Active
					</th>
					<th scope='col' className='table-data'>
						Recovered
					</th>
					<th scope='col' className='table-data'>
						Death
					</th>
				</tr>
			</thead>
			<tbody>
				{tableData.map(item => (
					<tr key={generateID()} className='table-row'>
						<td key={generateID()}>
							<img className='img-fluid flag' src={item.countryInfo.flag} alt={item.country} />
							&nbsp;&nbsp;{item.country}
						</td>
						<td key={generateID()} className='table-data'>
							{item.cases}
						</td>
						<td key={generateID()} className='table-data'>
							{item.active}
							<span className='confirmed-new'>{updateNew(item.todayCases)}</span>
						</td>
						<td key={generateID()} className='table-data'>
							{item.recovered}
							<span className='confirmed-rcvd'>{updateNew(item.todayRecovered)}</span>
						</td>
						<td key={generateID()} className='table-data'>
							{item.deaths}
							<span className='confirmed-death'>{updateNew(item.todayDeaths)}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
