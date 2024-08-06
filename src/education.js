import React from "react";

//importing custom components
import Picture from "./pictures";
import Content from "./content"
import { useDarkMode } from './dark-mode';

import Sidebar from "./sidebar";

//importing images 
import Barrett from "./images/barrett.png";
import FSE from "./images/fse.png";
// import ASU from "./images/asu.png";

const schools = [
    {
        id: "edu1",
        image: FSE,
        link: "https://www.asu.edu/",
        name: "Arizona State University",
        degree: "B.S. in Computer Science",
        GPA: 4.0, graduation: "April 2026",
        city: "Tempe, Arizona, United States"
    },
    {
        id: "edu2",
        image: Barrett,
        link: "https://barretthonors.asu.edu/",
        name: "Barrett, The Honors College",
        degree: "Honors in Computer Science",
        GPA: 4.0,
        graduation: "April 2026",
        city: "Tempe, Arizona, United States"
    }
]

function AddEducation() {

    const items = schools.map(school =>
        <div className="education-container">
            <Picture img={school.image} alt="Organization Logo" />
            <Content detail={school} />
        </div>
    );

    return (<div>{items}</div>);
}


export default function Education() {
    const { isDarkMode } = useDarkMode();

    return (
        <>
            <Sidebar />
            <div id="Education-stage">
                <div id="Education">
                    <div className={`EDU-Title${isDarkMode ? ' dark-mode' : ''}`}><h2><strong>Education</strong></h2></div>
                    <AddEducation />
                </div>
            </div>
        </>
    )
}