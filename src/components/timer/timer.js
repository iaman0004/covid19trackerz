import React from 'react';
import './timer.css';

const Timer = ({infected, active, recoverd, deaths, newInfected, newDeaths, head}) =>{
    return(
        // <div className="cases">
            <div className="row global">
                <div className="col-md-3 col-sm-12 globe-wrapper">
                    <div className="globe">{head}</div>
                </div>
                <div className="col-md-9 col-sm-12">
                    <div className="row">
                        <div className="col-4">
                            <div className="box infected">{infected}</div>
                            <div className="text-case">Infected</div>
                        </div>
                        <div className="col-4">
                            <div className="box active">{active}</div>
                            <div className="text-case">Active</div>
                        </div>
                        <div className="col-4">
                            <div className="box deaths">{deaths}</div>
                            <div className="text-case">Death</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="box recovered">{recoverd}</div>
                            <div className="text-case">Recovered</div>
                        </div>
                        <div className="col-4">
                            <div className="box new-infected">{newInfected}</div>
                            <div className="text-case">New Cases Today</div>
                        </div>
                        <div className="col-4">
                            <div className="box new-death">{newDeaths}</div>
                            <div className="text-case">New Deaths Today</div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default Timer;