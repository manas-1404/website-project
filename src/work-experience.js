import React from "react"

import Picture from "./pictures";
import Content from "./content"

//importing an array
import JobData from "./work-data";

//importing photos from files
import Logo from "./images/placeholder.png";


function AddExperience(){

    const elements = JobData.map(job =>
        <div className="job-container">
            <Picture img={job.image} alt="Organization Logo" />

            {/* add Job details here with Content tag */}
            <Content detail={job} />

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