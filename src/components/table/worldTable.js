import React, { useEffect } from 'react';
import './table.css';
import {generateID} from '../../randomID';

const Table = ({tableData}) =>{

    useEffect(()=>{
        document.title = "Covid19 | Global Outbreak";
    });

    return(
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Infected</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Death</th>
                </tr>
            </thead>  
            <tbody>
                {tableData.map(item=>(
                    <tr key={generateID()} className="table-row">
                        <td key={generateID()} className="table-data">{item.location}</td>
                        <td key={generateID()} className="table-data">{item.confirmed}</td>
                        <td key={generateID()} className="table-data">{item.recovered}</td>
                        <td key={generateID()} className="table-data">{item.dead}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;