import React from 'react';
import './table.css';
import { generateID } from '../../randomID';

const TableUnclicked = ({tableData}) =>{
    const updateNew = (num) =>{
        if(parseInt(num) !== 0){
            return `+${num}`;   
        }
        return null;
    }

    return(
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">District</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Active</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Death</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(tableData).map((item)=>(
                        <tr key={generateID()}>
                            <td key={generateID()}>{item}</td>
                            <td key={generateID()}>{tableData[item].confirmed}<span className="confirmed-new">{updateNew(tableData[item].delta.confirmed)}</span></td>
                            <td key={generateID()}>{tableData[item].active}</td>
                            <td key={generateID()}>{tableData[item].recovered}<span className="confirmed-rcvd">{updateNew(tableData[item].delta.recovered)}</span></td>
                            <td key={generateID()}>{tableData[item].deceased}<span className="confirmed-death">{updateNew(tableData[item].delta.deceased)}</span></td>
                        </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableUnclicked;