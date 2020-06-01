import React, {useState, useEffect} from 'react';
import './world.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Timer from '../timer/timer';
import Navbar from '../navbar/navbar';


const World = () =>{
    const [totalWorldCase, setTotalWorldCase] = useState([]);

    useEffect(()=>{
        const fetchCases = async () =>{
            const response = await axios.get('https://api.thevirustracker.com/free-api?global=stats');
            // const response = await axios.get('https://api.covid19api.com/summary');
            // setTotalWorldCase(response.data.Global)
            setTotalWorldCase(response.data.results[0]);
        }
        fetchCases();
    },[totalWorldCase]);


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-md-8">
                    <div className="covid">
                        COVID
                        <span className="covid-19">19</span>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-md-10 col-sm-12">
                    <Timer infected={totalWorldCase.total_cases}
                        active={totalWorldCase.total_active_cases}
                        recoverd={totalWorldCase.total_recovered}
                        deaths={totalWorldCase.total_deaths}
                        newInfected={totalWorldCase.total_new_cases_today}
                        newDeaths={totalWorldCase.total_new_deaths_today}
                        head={"WORLD"}
                    />
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-md-8 to-india">
                    <Link to={"/india"}>
                        {/* <button type="submit" className="btn btn-primary">India &#8594;</button> */}
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
    );
}

export default World;