import React, { useState, useEffect } from 'react';
import './record.css';
import Axios from 'axios';
import TableUnclicked from '../table/tableUnclicked';
import Graphify from '../graphify/graphify';
import Loading from '../loading/loading';



const Record = ({current, cases}) =>{
    const [record, setRecord] = useState({});
    const [loading, setLoading] = useState(true);

    const dataState = {
        labels : ['Confirmed', 'Active', 'Recoverd', 'Death'],
        datasets : [
            {
                label : '',
                backgroundColor : ['#0e9aa7', '#d92027', '#17b978', '#fcefee'],
                borderColor : 'rgba(0,0,0,1)',
                labelColor : '#fff',
                borderWidth : 0,
                data : [cases[0].confirmed, cases[0].active, cases[0].recovered, cases[0].deaths]
            }
        ]
    }

    useEffect(()=>{
        Axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(res=>{
            setRecord(res.data[`${current}`].districtData);
            setLoading(false);
        });
    },[current]);

    return(
        <div className="record-boundary">
            <div className="row">
                <div className="col-12">
                    <div className="state-plate">
                        <h3 className="state-name">{current}</h3>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-5 col-sm-12">
                            <div className="case-graph">
                                <Graphify data={dataState}/>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row districts">
                        <div className="col"></div>
                        <div className="col-md-8 col-sm-12 state-district-data">
                            {!loading?<TableUnclicked tableData={record}/>:<Loading/>}
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Record;