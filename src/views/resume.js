import React, { Component } from "react";

import Skills from "../components/Skills"
import Timeline from "../components/Timeline";

class Resume extends Component {

    render() {
        const jobs = [
            {
                id: "job-1",
                date: "2020-01 to Present",
                position: "Full Stack Developer",
                title: "ThiDiff Technologies",
                works: []
            },
            {
                id: "job-2",
                date: "2018-05 to 2018-10",
                position: "Web Developer",
                title: "OHHOY Private Limited, Kaloor, Cochin",
                works: [
                    "Designed, implemented and monitored web pages and sites for continuous improvement.",
                    "Used programming capabilities in PHP - CodeIgniter and other libraries as needed.",
                    "Represented web team at meetings with executives and discussed project goals and milestones.",
                    "Strengthened company brand and identity by creating a event website."
                ]
            },
            {
                id: "job-3",
                date: "2017-09 to 2018-05",
                position: "Design Team Lead",
                title: "Software Development Cell - VJEC, Jyothi Nagar, Chemperi, Kannur",
                works: [
                    "Designed posters and banners for various events in Vimal Jyothi Engineering College."
                ]
            },
            {
                id: "job-4",
                date: "2017-09",
                position: "Co-Founder",
                title: "Software Development Cell - VJEC, Jyothi Nagar, Chemperi, Kannur",
                works: [
                    `Started a software development platform for students named "Software Development Cell (SDC) in Vimal Jyothi Engineering College.`,
                    `Participated in hiring decisions for key leadership positions and nominated new team members.`,
                    `Organised meetings, activities, workshops and events with Software Development Cell (SDC) in Vimal Jyothi Engineering College.`
                ]
            }
        ];
        const educations = [
            {
                id: "study-1",
                date: "2014-07 to 2018-04",
                title: "B.Tech, Computer Science and Engineering",
                description: "Vimal Jyothi Engineering College, Jyothi Nagar, Chemperi, Kannur"
            },
            {
                id: "study-2",
                date: "2014-07 to 2018-04",
                title: "Higher Secondary Education, Computer Science",
                description: "St. Mary's Higher Secondary School, Edoor, Kannur"
            }
        ];
        const projects = [
            {
                id: "project-1",
                date: "2019-12",
                title: "Todo",
                description: "Simple Todo Web Application using Angular 8."
            },
            {
                id: "project-2",
                date: "2019-01",
                title: "Car Price Prediction",
                description: "It was a machine learning project implemented by using python to predict the price of a unknown car from its features."
            },
            {
                id: "project-3",
                date: "2017-12 to 2018-03",
                title: "BITSI",
                description: "Bitcoin Script IDE:- Bitcoin is a cryptocurrency and world wide payment system. It uses a scripting system for transactions. Our project was develop a platform to write, evaluate, learn and test Bitcoin's scripting language."
            },
            {
                id: "project-4",
                date: "2017-08 to 2017-11",
                title: "Wi-Note",
                description: "Wireless Notice Board:- A Raspberry Pi based project, manages the notices of events and notifications, and display it to a monitor."
            },
        ];
        const certifications = [
            
            {
                id: "cert-6",
                date: "2020-09",
                description: "Enterprise Design Thinking Practitioner"
            },
            {
                id: "cert-5",
                date: "2019-12",
                description: "Responsive Web Design Developer Certification"
            },
            {
                id: "cert-4",
                date: "2019-03",
                description: "Google IT Support Professional Certificate"
            },
            {
                id: "cert-3",
                date: "2019-02",
                description: "EF SET English Certificate 72/100 (C2Proficient)"
            },
            {
                id: "cert-2",
                date: "2019-01",
                description: "IBM Applied Data Science with Python - Level 2"
            },
            {
                id: "cert-1",
                date: "2019-01",
                description: "IBM Python for Data Sciences"
            }
        ];
        return (
            <div>
                <div className="top-content">
                </div>
                <div className="container">
                    {/* <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="resume-group">
                                <h1>Jovial P Thomas</h1>
                                <h4>FULL STACK DEVELOPER at <b>ThiDiff Technologies</b></h4>
                                <p>Experienced Web Developer trained in HTML5, CSS3, Javascript, jQuery, Bootstrap, Angular, React, NodeJS, MongoDB and ExpressJS.</p>
                                <p>3 year of total experience in Graphic Designing as a freelancer.</p>
                                <p>Good knowledge in Data Analysing and IT support.</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="resume-group">
                                <h2>Work History</h2>
                                <div className="hr" />
                                <br />
                                <Timeline datas={jobs} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="resume-group">
                                <h2>Education</h2>
                                <div className="hr" />
                                <br />
                                <Timeline datas={educations} />
                            </div>
                        </div>
                    </div>
                    <div className="resume-group">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <h2>Skills and Tools</h2>
                                <div className="hr" />
                                <br />
                            </div>
                            <Skills />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="resume-group">
                                <h2>Projects</h2>
                                <div className="hr" />
                                <br />
                                <Timeline datas={projects} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="resume-group">
                                <h2>Certifications</h2>
                                <div className="hr" />
                                <br />
                                <Timeline datas={certifications} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Resume;
