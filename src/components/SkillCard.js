import React, { Component } from "react";
import './Skills.css';

class SkillCard extends Component {
    render() {
        const { level, title } = this.props;
        const percentage = (100 - level) * 4.4;
        return (
            <div className="">
                {/* <div className="container">
                    <div className="row"> */}
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="skill-container">
                        <div className="skill-card">
                            <div className="skill-box">
                                <div className="skill-percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: `${percentage}` }}></circle>
                                    </svg>
                                    <div className="skill-value">
                                        <h2>{level}<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 className="skill-title">{title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div>
                </div> */}
            </div>
        );
    }
}
export default SkillCard;
