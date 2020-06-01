import React, { useState, useEffect } from 'react';
import './record.css';
import Axios from 'axios';
import TableUnclicked from '../table/tableUnclicked';
import Graphify from '../graphify/graphify';



const Record = ({current, cases}) =>{
    const [record, setRecord] = useState({});

    const dataState = {
        labels : ['Confirmed', 'Active', 'Recoverd', 'Death'],
        datasets : [
            {
                label : '',
                backgroundColor : ['#0e9aa7', '#d92027', '#79d70f', '#303960'],
                borderColor : 'rgba(0,0,0,1)',
                borderWidth : 0,
                data : [cases[0].confirmed, cases[0].active, cases[0].recovered, cases[0].deaths]
            }
        ]
    }

    useEffect(()=>{
        const fetchStateData = async () =>{
            const response = await Axios('https://api.covid19india.org/state_district_wise.json');
            setRecord(response.data[`${current}`].districtData);
        }
        fetchStateData();
    },[record]);

    return(
        <div className="record-boundary">
            <div className="row">
                <div className="col-12">
                    <div className="state-plate">
                        <h3 className="state-name">{current}</h3>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="case-graph">
                                <Graphify data={dataState}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TableUnclicked tableData={record}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Record;