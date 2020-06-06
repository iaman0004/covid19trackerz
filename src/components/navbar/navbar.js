import React from 'react';
import './navbar.css';

const Navbar = () =>{
    return(
        <div className="nav-bar">
            <div className="row pure-menu pure-menu-horizontal">
                <div className="col-md-4">
                    <div className="header">
                        COVID<span className="num">19</span>
                    </div>
                </div>
                <div className="col-md-8 right">
                    <ul className="pure-menu-list" id="dropdown-click">
                        <li className="pure-menu-item">
                            <a href="/" className="pure-menu-heading pure-menu-link"><i className="fas fa-home"></i></a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/india" className="pure-menu-link">India</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/faq" target="_blank" className="pure-menu-link"><i className="far fa-question-circle"></i></a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="https://www.github.com/iaman0004/covid19trackerz" target="_top" className="pure-menu-link"><i className="fab fa-github"></i></a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="mailto:iak.sharma0004@gmail.com" className="pure-menu-link"><i className="fas fa-envelope-open"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;