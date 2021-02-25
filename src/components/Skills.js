import React, { Component } from "react";
import './Skills.css';
import SkillCard from "./SkillCard";

class Skills extends Component {

    render() {
        const skills = [
            {
                level: "85",
                title: "react js"
            },
            {
                level: "85",
                title: "node js"
            },
            // {
            //     level: "70",
            //     title: "angular"
            // },
            {
                level: "80",
                title: "express js"
            },
            {
                level: "90",
                title: "mongo db"
            },
            // {
            //     level: "90",
            //     title: "html"
            // },
            // {
            //     level: "90",
            //     title: "css"
            // },
            {
                level: "85",
                title: "javascript"
            },
            {
                level: "90",
                title: "bootstrap"
            },
            // {
            //     level: "70",
            //     title: "jquery"
            // },
            {
                level: "80",
                title: "photoshop"
            },
            {
                level: "70",
                title: "illustrator"
            }
        ];
        return (
            <div className="">
                {/* <div className="container">
                    <div className="row"> */}
                {skills.map(skill => {
                    return <SkillCard level={skill.level} title={skill.title} key={skill.title} />;
                })}

                {/* </div>
                </div> */}

            </div>
        );
    }
}
export default Skills;
