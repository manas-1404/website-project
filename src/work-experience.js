import React from "react"

import { useDarkMode } from './dark-mode';
import Picture from "./pictures";
import Content from "./content"

//importing an array
import JobData from "./work-data";

import Sidebar from "./sidebar";



function AddExperience() {

    const elements = JobData.map(job =>
        <div className="job-container">
            <Picture img={job.image} alt="Organization Logo" />

            {/* add Job details here with Content tag */}
            <Content detail={job} />

        </div>
    );

    return (<div>{elements}</div>);
}

function WorkExperience() {
    const { isDarkMode } = useDarkMode();

    return (
        <>
            <Sidebar />
            <div id="Work-Experience-stage">
                <div id="Work-Experience">
                    <div className={`WEX-Title${isDarkMode ? ' dark-mode' : ''}`}><h2><strong>Work Experience</strong></h2></div>
                    <AddExperience />
                </div>
            </div>
        </>

    )
}

export default WorkExperience;