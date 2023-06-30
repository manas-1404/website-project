import React from "react"

import Picture from "./pictures";

//importing photos from files
import Logo from "./images/placeholder.png";

const jobs = [
    {id: 1, position: "Office Aide", company: "Barrett", timeline: "March 2023 - Present"},
    {id: 2, position: "Computer Science Lab Assistant", company: "VIPS", timeline: "July 2021 - March 2022"}
]


const jobDescription = [
    {id: 1, desc: ["Increased efficiency of data entry & analysis of application activity and deposit status of 20000+ records by 75%"]}
]

function AddExperience(){

    const elements = jobs.map(job =>
        <div className="job-container">


            <Picture img={Logo} alt="Organization Logo" />

            <div>
                <h3><strong>{job.position}</strong></h3>
                <h3>{job.company}</h3>
                <h5><em>{job.timeline}</em></h5>
            </div>

        </div>
        
        
    );

    return (<div>{elements}</div>);
}


function WorkExperience(){
    return (
        <div id="work-experience">
            <h2><strong>Work Experience</strong></h2>

            
            <AddExperience />
        </div>
    )
}

export default WorkExperience;