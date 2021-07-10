import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

import { getNavList } from "../nav";
// import useWindowIsMobile from "../helpers/detectMobileBrowser";

class Navbar extends Component {
    state = {
        // isMobile: useWindowIsMobile(),
        
    };

    render() {
        const currentRoute = window.location.pathname;
        // const { isMobile } = this.state;

        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Jovial P Thomas</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            {getNavList().map((navigation, key) => (
                                <li
                                key={key}
                                className={
                                  currentRoute === navigation.url
                                    ? `active`
                                    : currentRoute.startsWith(navigation.editPageurl)
                                    ? `active`
                                    : ""
                                }
                                // data-toggle={ isMobile? "collapse": "" }
                                data-target="#myNavbar"
                              >
                                <Link to={navigation.url}>
                                  <span className="desktop-only">{navigation.name}</span>
                                </Link>
                              </li>
                            ))}
                            {/* <li data-toggle="collapse" data-target="#myNavbar">
                                <Link to="/">About</Link>
                            </li>
                            <li data-toggle="collapse" data-target="#myNavbar">
                                <Link to="/resume">Resume</Link>
                            </li>
                            <li data-toggle="collapse" data-target="#myNavbar">
                                <Link to="/portfolio">Portfolio</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}
export default Navbar;
