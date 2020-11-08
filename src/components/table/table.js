import React, { useEffect } from 'react';
import './table.css';
import { generateID, updateNew } from '../../function';

const Table = ({ tableData, setCurrentRecord }) => {
	useEffect(() => {
		document.title = 'Covid19 | Outbreak in India';
	});

	return (
		<table className='table table-sm'>
			<thead>
				<tr>
					<th scope='col' className='state'>
						State
					</th>
					<th scope='col' className='confirmed table-data'>
						Infected
					</th>
					<th scope='col' className='active table-data'>
						Active
					</th>
					<th scope='col' className='recovered table-data'>
						Recovered
					</th>
					<th scope='col' className='death table-data'>
						Death
					</th>
				</tr>
			</thead>
			<tbody>
				{tableData.map(item => (
					<tr key={generateID()} className='table-row'>
						<td key={generateID()} className='table-lead'>
							<a href='#stateData' onClick={() => setCurrentRecord(item.state)}>
								{item.state}
							</a>
						</td>
						<td key={generateID()} className='table-data'>
							{item.confirmed}
							<span className='confirmed-new'>{updateNew(item.deltaconfirmed)}</span>
						</td>
						<td key={generateID()} className='table-data'>
							{item.active}
						</td>
						<td key={generateID()} className='table-data'>
							{item.recovered}
							<span className='confirmed-rcvd'>{updateNew(item.deltarecovered)}</span>
						</td>
						<td key={generateID()} className='table-data'>
							{item.deaths}
							<span className='confirmed-death'>{updateNew(item.deltadeaths)}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
