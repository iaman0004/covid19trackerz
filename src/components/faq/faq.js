import React from 'react';
import './faq.css';

const FAQ = () =>(
    <div className="container-fluid">
        <div className="faq-box">
            <div className="row">
                <div className="col-md-12">
                    <div className="faq"><h1>FAQ</h1></div>
                </div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-md-6 col-sm-12">
                    <div className="quest">
                        <div className="que">
                            Are you official?
                        </div>
                        <div className="ans">
                            Absolutely not
                        </div>
                    </div>

                    <div className="quest">
                        <div className="que">
                            What are your sources? How is the data gathered for this project?
                        </div>
                        <div className="ans">
                            I am using some of the standard and trusted APIs to update the records on the website.
                            These APIs use bulletins and official handles to update their records.
                        </div>
                    </div>

                    <div className="quest">
                        <div className="que">
                            Who are you?
                        </div>
                        <div className="ans">
                            I am an IT guy who is now dedicated to help update people about the increasing covid cases in their locality.
                        </div>
                    </div>

                    <div className="quest">
                        <div className="que">
                            Is your project Open-Sourced?
                        </div>
                        <div className="ans">
                            Yes, it is available on GitHub.
                        </div>
                    </div>

                </div>
                <div className="col"></div>
            </div>
        </div>
    </div>
)

export default FAQ;