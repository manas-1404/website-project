import React from "react";

//importing custom components
import Picture from "./pictures";
import Content from "./content"

//importing images 
import Barrett from "./images/barrett.png";
import FSE from "./images/fse.png";
import ASU from "./images/asu.png"

const schools = [
    {
        id: "edu1", image: FSE, name: "Arizona State University", degree: "B.S(Hons.) in Computer Science", GPA: 4.0, graduation: "Expected August 2026", city: "Tempe, Arizona, United States"
    },
    {
        id: "edu2", image: Barrett, name: "Barrett, The Honors College", degree: "Honors in Computer Science", GPA: 4.0, graduation: "Expected August 2026", city: "Tempe, Arizona, United States"
    }
]

function AddEducation(){

    const items=schools.map(school =>
        <div>
            <Picture img={school.image} alt="Organization Logo" />
            
            <Content detail={school} />
        </div>
        );

    return(<div>{items}</div>);
}


export default function Education(){
    return(
        <div>
            <h2><strong>Education</strong></h2>
            <AddEducation />
        </div>
    )
}