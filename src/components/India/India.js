import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './India.css';

import Table from '../table/table';
import Record from '../record/record';
import Timer from '../timer/timer';
import Navbar from "../navbar/navbar";
import Loading from '../loading/loading';

const India = () =>{
    const [currentRecord, setCurrentRecord] = useState("Haryana");
    const [currentCase, setCurrentCase] = useState([]);
    const [countryCase, setCountryCase] = useState([]);
    const [totalIndiaCase, setTotalIndiaCase] = useState([]);
    const [loading, setLoading] = useState(true);

    // india
    useEffect(() =>{
        axios.get('https://api.covid19india.org/data.json')
        .then(response=>{
            setCountryCase((response.data.statewise).filter(res=>res.statecode !== "TT"));
            setCurrentCase((response.data.statewise).filter(res=>res.state === currentRecord));
            setTotalIndiaCase((response.data.statewise).filter(res=>res.statecode === "TT"));
            setLoading(false);
        });
    },[currentRecord]);

    return(
        <div className="container-fluid">
            <Navbar/>
            {!loading
            ?(
                <div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-8 to-india">
                            <h2>---INDIA---</h2>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-8 col-sm-12">
                            <Timer infected={totalIndiaCase[0].confirmed}
                                active={totalIndiaCase[0].active}
                                recoverd={totalIndiaCase[0].recovered}
                                deaths={totalIndiaCase[0].deaths}
                                newInfected={totalIndiaCase[0].deltaconfirmed}
                                newDeaths={totalIndiaCase[0].deltadeaths}
                            />
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-8 col-sm-12 states">
                                <div className="tool-tip"><i>Hint : Click to view more</i></div>
                            <div className="record-table">
                                <Table tableData={countryCase} setCurrentRecord={setCurrentRecord}/>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="state-data" id="stateData">
                                <Record current={currentRecord} cases={currentCase}/>
                            </div>
                        </div>
                    </div>
                </div>
            ):<Loading/>}
        </div>
    );
}

export default India;