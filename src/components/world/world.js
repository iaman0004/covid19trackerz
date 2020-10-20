import React, {useState, useEffect} from 'react';
import './world.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Timer from '../timer/timer';
import Navbar from '../navbar/navbar';
import Loading from '../loading/loading';
import WorldTable from '../table/worldTable';

const World = () =>{
    const [world, setWorld] = useState([]);
    const [totalWorldCase, setTotalWorldCase] = useState([]);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);

    useEffect(()=>{
        axios.get('https://www.trackcorona.live/api/countries')
        .then(res=>{
            setWorld(res.data.data);
            setLoading1(false);
        });
    },[]);

    useEffect(()=>{
        axios.get('https://api.thevirustracker.com/free-api?global=stats')
        .then(response=>{
            setTotalWorldCase(response.data.results[0]);
            setLoading2(false);
        });
    },[]);


    return(
        <div className="container-fluid">
            <Navbar/>
            {!loading1 && !loading2
            ?(<div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-8 to-india">
                        <h2>---GLOBAL STATS---</h2>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row global-state">
                    <div className="col"></div>
                    <div className="col-md-10 col-sm-12">
                        <Timer infected={totalWorldCase.total_cases}
                            active={totalWorldCase.total_serious_cases}
                            recoverd={totalWorldCase.total_recovered}
                            deaths={totalWorldCase.total_deaths}
                            newInfected={totalWorldCase.total_new_cases_today}
                            newDeaths={totalWorldCase.total_new_deaths_today}
                        />
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-8">
                        <div className="world-data">
                            <WorldTable tableData={world}/>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-8 to-india">
                        <Link to={"/india"}>
                            <button type="submit" className="btn">
                                <span className="circle">
                                <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">India</span>
                            </button>
                        </Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            )
            :(<Loading/>)
            }
        </div>
    );
}

export default World;
