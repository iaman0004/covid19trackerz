import React, { useState, useEffect } from 'react';
import Table from '../table/table';
import Record from '../record/record';
import axios from 'axios';
import './India.css';
import Timer from '../timer/timer';
import Navbar from "../navbar/navbar";

const India = () =>{
    // india
    const [currentRecord, setCurrentRecord] = useState("Haryana");
    const [currentCase, setCurrentCase] = useState([{confirmed : 368, active : 963, recovered : 32, deaths : 36}]);
    const [countryCase, setCountryCase] = useState([]);
    const [totalIndiaCase, setTotalIndiaCase] = useState([{confirmed : 3687, active : 96355, recovered : 3256, deaths : 9562, deltaconfirmed : 152, deltadeaths :62}]);

    // indid
    useEffect(() =>{
        const fetchCases = async () => {
            const response = await axios.get('https://api.covid19india.org/data.json');
            setCountryCase((response.data.statewise).filter(res=>res.statecode !== "TT"));
            setCurrentCase((response.data.statewise).filter(res=>res.state === currentRecord));
            setTotalIndiaCase((response.data.statewise).filter(res=>res.statecode === "TT"));
        }
        fetchCases();
    },[currentRecord]);
    
    useEffect(()=>{
        document.title = "Covid19 | Outbreak in India";
    });

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Navbar/>
                </div>
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
                        head={"INDIA"}
                    />
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="statewise">
                        <h2 className="heading">STATEWISE</h2>
                        <h5>Hint : click on the state name to view more</h5>
                    </div>
                    <div className="record-table">
                        <Table tableData={countryCase} setCurrentRecord={setCurrentRecord}/>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="state-data" id="stateData">
                        <Record current={currentRecord} cases={currentCase}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default India;
