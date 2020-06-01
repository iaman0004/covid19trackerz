import React from 'react';
import './table.css';
import {generateID} from '../../randomID';

const Table = ({tableData, setCurrentRecord}) =>{
    const onItemClicked = (event, statename) =>{
        // event.preventDefault();
        setCurrentRecord(statename);
    }
    return(
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">State</th>
                    <th scope="col">Infected</th>
                    <th scope="col">Active</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Death</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item)=>(
                        <tr key={generateID()} className="table-row">
                            <td key={generateID()} className="table-lead"><a href="#stateData" onClick={(event)=>onItemClicked(event, item.state)}>{item.state}</a></td>
                            <td key={generateID()} className="table-data">{item.confirmed}</td>
                            <td key={generateID()} className="table-data">{item.active}</td>
                            <td key={generateID()} className="table-data">{item.recovered}</td>
                            <td key={generateID()} className="table-data">{item.deaths}</td>
                        </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;