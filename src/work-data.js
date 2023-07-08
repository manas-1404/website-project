import React from "react";

import Barrett from "./images/barrett.png";
import FSE from "./images/fse.png";
import VIPS from "./images/vips.png";

const jobs = [
    {
        id: "wk1", 
        image: Barrett,
        link: "https://barretthonors.asu.edu/",
        position: "Data Worker",
        company: "Barrett, The Honors College", 
        timeline: "March 2023 - Present",
        city: "Tempe, Arizona, United States", 
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
        id: "wk2",
        image: FSE,
        link: "https://engineering.asu.edu/",
        position: "Communications Director",
        company: "Fulton Ambassador, Ira A. Fulton Schools of Engineering",
        timeline: "April 2023 - Present",
        city: "Tempe, Arizona, United States", 
        role: [
            "Maintained Fulton Ambassador (FA) website using WordPress and designed weekly newsletter for the FA.",
            "Demonstrated leadership and public speaking skills by leading 5+ Campus Tours to a group of  4+ Prospective ASU Students and Families.",
            "Demonstrated one-on-one mentorship to help 5+ students learn more about opportunities (EPICS, GCSP, FURI, Devil’s Invent) and choices at Ira A. Fulton School of Engineering and Arizona State University."    
        ]
    },
    {
        id: "wk3", 
        image: VIPS,
        link: "http://vips.ac.in/",
        position: "Computer Science Lab Assistant", 
        company: "Venkat International Public School", 
        timeline: "July 2021 - March 2022", 
        city: "Bangalore, India", 
        role: [
            "Scheduled, created and hosted Zoom sessions for class of 40 students which helped professor in organizing classes and lab. Created online quizzes using Google Forms to assist the professor during classes, events.",
            "Answered questions related to Python, HTML, JavaScript from a class of 40 students at the end of Zoom session.",
            "Installed proctoring software for 30+ desktops in lab which ensured smooth organization of practical exams for 40+ students.",
            "Distributed 10+ lecture material to class of 40 students implementing Google Suite applications such as Google Drive, Docs, and Gmail acting as a Teaching Assistant to the Professor."
        ]
    },
]


export default jobs;