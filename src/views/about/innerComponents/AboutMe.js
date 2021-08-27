import React, { Component } from "react";
import './AboutMe.css';
// import { Link } from "react-router-dom";

class Aboutme extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h1 className="text-center">Jovial P Thomas</h1>
                            {/* <h1 className="text-center">About Me</h1> */}
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div className="about-img-container">
                                <div className="about-img img-responsive "></div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="about-content">
                                {/* <h3>Jovial P Thomas</h3> */}
                                <h3>MEARN STACK DEVELOPER</h3>
                                {/* <p className="text-justify">I'm a MEARN Stack Developer who looking for a position where I can have the opportunity to use my programming skills with a innovative, great, enthusiastic engineering team to work for that will provide me with challenging, interesting work that I can learn from and contribute to.</p> */}
                                <p>Experienced Web Developer and Web Designer working in ReactJS, NodeJS, Javascript, ExpressJS, PostgresSQL, HTML5, CSS3, Bootstrap, NextJS, TypeScript, jQuery, MySQL and MongoDB.</p>
                                <p>3 year of total experience in Graphic Designing as a freelancer.</p>
                                <p>Good knowledge in Data Analysing and IT support.</p>
                                <div className="about-scocial"><i className="fa fa-github-square icon"></i> <a href="https://github.com/jovialp" target="blank">github.com/jovialp </a></div>
                                <div className="about-scocial"><i className="fa fa-linkedin-square icon"></i> <a href="https://www.linkedin.com/in/jovialp/" target="blank">linkedin.com/in/jovialp</a></div>
                                <div className="about-scocial"><i className="fa fa-instagram icon"></i> <a href="https://www.instagram.com/jovial.pt/" target="blank">instagram.com/jovial.pt</a></div>
                                <div className="about-scocial"><i className="fa fa-whatsapp icon"></i> <a href="https://api.whatsapp.com/send?phone=+918921123262" target="blank">+91-8606-672-525</a></div>
                                {/* <div className="about-download"><a href="https://drive.google.com/open?id=1ZpH-Xmg9b2S2d5qDdPhSw1Y6wLNKeVM5" className="btn btn-info" target="blank">Download My Resume</a></div> */}
                                {/* <div className="about-download"><Link to="/portfolio" className="btn btn-info">View My Works</Link></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Aboutme;
