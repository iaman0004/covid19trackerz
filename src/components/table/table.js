import React, { useEffect } from 'react';
import './table.css';
import {generateID} from '../../randomID';

const Table = ({tableData, setCurrentRecord}) =>{
    
    const updateNew = (num) =>{
        if(parseInt(num) !== 0){
            return `+${num}`;   
        }
        return null;
    }

    useEffect(()=>{
        document.title = "Covid19 | Outbreak in India";
    });

    return(
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col" className="state">State</th>
                    <th scope="col" className="confirmed">Infected</th>
                    <th scope="col" className="active">Active</th>
                    <th scope="col" className="recovered">Recovered</th>
                    <th scope="col" className="death">Death</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item)=>(
                        <tr key={generateID()} className="table-row">
                            <td key={generateID()} className="table-lead"><a href="#stateData" onClick={()=>setCurrentRecord(item.state)}>{item.state}</a></td>
                            <td key={generateID()} className="table-data">{item.confirmed}<span className="confirmed-new">{updateNew(item.deltaconfirmed)}</span></td>
                            <td key={generateID()} className="table-data">{item.active}</td>
                            <td key={generateID()} className="table-data">{item.recovered}<span className="confirmed-rcvd">{updateNew(item.deltarecovered)}</span></td>
                            <td key={generateID()} className="table-data">{item.deaths}<span className="confirmed-death">{updateNew(item.deltadeaths)}</span></td>
                        </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;