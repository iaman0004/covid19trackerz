import React from 'react';
import './table.css';
import { generateID } from '../../randomID';

const TableUnclicked = ({tableData}) =>{
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
                            <td key={generateID()}>{tableData[item].confirmed}</td>
                            <td key={generateID()}>{tableData[item].active}</td>
                            <td key={generateID()}>{tableData[item].recovered}</td>
                            <td key={generateID()}>{tableData[item].deceased}</td>
                        </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableUnclicked;