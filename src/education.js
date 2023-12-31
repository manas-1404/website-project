import React from "react";

//importing custom components
import Picture from "./pictures";
import Content from "./content"

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
        degree: "B.S(Hons.) in Computer Science", 
        GPA: 4.0, graduation: "Expected August 2026", 
        city: "Tempe, Arizona, United States",
        extra: "Dean's List: Fall 2022, Spring 2023"
    },
    {
        id: "edu2", 
        image: Barrett, 
        link: "https://barretthonors.asu.edu/",
        name: "Barrett, The Honors College", 
        degree: "Honors in Computer Science", 
        GPA: 4.0, 
        graduation: "Expected August 2026", 
        city: "Tempe, Arizona, United States",
        extra: "Barrett Undergraduate Research Fellow"
    }
]

function AddEducation() {

    const items = schools.map(school =>
        <div className="education-container" key={school.id}>
            <Picture img={school.image} alt="Organization Logo" />
            <Content detail={school} />
        </div>
    );

    return (<div>{items}</div>);
}


export default function Education() {
    return (
        <div id="Education-stage">
            <div id="Education">
                <div id="EDU-Title"><h2><strong>Education</strong></h2></div>
                <AddEducation />
            </div>
        </div>
    )
}