import React from "react"

import Picture from "./pictures";
import Content from "./content"

//importing photos from files
import Logo from "./images/placeholder.png";

const jobs = [
    {
        id: 1, 
        position: "Office Aide",
        company: "Barrett", 
        timeline: "March 2023 - Present", 
        role: [
            "Increased efficiency of data entry & analysis of application activity and deposit status of 20000+ records by 75%", 
            "Analyzed and updated application data of 7000+ students every week using MySQL, Excel, Google Sheets.",
            "Analyzed and compared yearly reports consisting of student data and demographic information of the past 3 years to the Recruitment Office at Barrett.",
            "Tracked and updated ASU confirmation deposit status of 10000+ students using the application activity as reference in MySQL, Excel and Google Sheets.",
            "Tracked and analyzed Barrett Application Timings report of the past 5 years consisting of 25000+ records and delivered it to the Barrett Dean, Barrett Program Director of Admissions & other key stakeholders",
            "Provided excellent customer service to parents and students through phone calls, emails, in-person meetings"
        ]
    },
    {
        id: 2, 
        position: "Computer Science Lab Assistant", 
        company: "VIPS", 
        timeline: "July 2021 - March 2022", 
        role: [
            "Scheduled, created and hosted Zoom sessions for class of 40 students which helped professor in organizing classes and lab. Created online quizzes using Google Forms to assist the professor during classes, events.",
            "Answered questions related to Python, HTML, JavaScript from a class of 40 students at the end of Zoom session.",
            "Installed proctoring software for 30+ desktops in lab which ensured smooth organization of practical exams for 40+ students.",
            "Distributed 10+ lecture material to class of 40 students implementing Google Suite applications such as Google Drive, Docs, and Gmail acting as a Teaching Assistant to the Professor."
        ]
    }
]

function AddExperience(){

    const elements = jobs.map(job =>
        <div className="job-container">
            <Picture img={Logo} alt="Organization Logo" />

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