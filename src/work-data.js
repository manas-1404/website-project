// import React from "react";

import CounterSpeech from "./images/counterSpeech.png";
import Barrett from "./images/barrett.png";
import FSE from "./images/fse.png";
import VIPS from "./images/vips.png";

const jobs = [
    {
        id: "wk1", 
        image: CounterSpeech,
        link: "https://globalsecurity.asu.edu/expertise/narrative-disinformation-and-strategic-influence/",
        position: "Undergraduate Researcher",
        company: "ASU Center on Narratives, Disinformation and Strategic Influence", 
        timeline: "July 2023 - Present",
        city: "Tempe, Arizona, United States", 
        role: [
            {index: 1, point: "Developing a CounterSpeech Bot to help fight hate speech online."},
            {index: 2, point: "Using Python and concepts of Machine Learning to build the bot"}
        ]
    },
    {
        id: "wk2", 
        image: Barrett,
        link: "https://barretthonors.asu.edu/",
        position: "Office Assistant (On-Campus Student Job)",
        company: "Barrett, The Honors College", 
        timeline: "March 2023 - Present",
        city: "Tempe, Arizona, United States", 
        role: [
            {index: 1, point: "Increased efficiency of data entry & analysis of application activity and deposit status of 20000+ records by 75%"}, 
            {index: 2, point: "Analyzed and updated application data of 7000+ students every week using MySQL, Excel, Google Sheets."},
            {index: 3, point: "Analyzed and compared yearly reports consisting of student data and demographic information of the past 3 years to the Recruitment Office at Barrett."},
            {index: 4, point: "Tracked and updated ASU confirmation deposit status of 10000+ students using the application activity as reference in MySQL, Excel and Google Sheets."},
            {index: 5, point: "Tracked and analyzed Barrett Application Timings report of the past 5 years consisting of 25000+ records and delivered it to the Barrett Dean, Barrett Program Director of Admissions & other key stakeholders"},
            {index: 6, point: "Provided excellent customer service to parents and students through phone calls, emails, in-person meetings"},
            {index: 7, point: "Organized, assisted 3+ Barrett tabling events during Sun Devil Days to increase presence Barrett Honors College."},
            {index: 8, point: "Provided excellent customer service to parents and students through phone calls, emails, in-person meetings."},
            {index: 9, point: "Served as a backup option for providing Barrett Campus Tours to Prospective students and parents."}
        ]
    },
    {
        id: "wk3",
        image: FSE,
        link: "https://engineering.asu.edu/",
        position: "Communications Director",
        company: "Fulton Ambassador, Ira A. Fulton Schools of Engineering",
        timeline: "April 2023 - Present",
        city: "Tempe, Arizona, United States", 
        role: [
            {index: 1, point: "Maintained Fulton Ambassador (FA) website using WordPress and designed weekly newsletter for the FA."},
            {index: 2, point: "Demonstrated leadership and public speaking skills by leading 5+ Campus Tours to a group of  4+ Prospective ASU Students and Families."},
            {index: 3, point: "Demonstrated one-on-one mentorship to help 5+ students learn more about opportunities (EPICS, GCSP, FURI, Devil’s Invent) and choices at Ira A. Fulton School of Engineering and Arizona State University." }   
        ]
    },
    {
        id: "wk4", 
        image: VIPS,
        link: "http://vips.ac.in/",
        position: "Computer Science Lab Assistant", 
        company: "Venkat International Public School", 
        timeline: "July 2021 - March 2022", 
        city: "Bangalore, India", 
        role: [
            {index: 1, point: "Scheduled, created and hosted Zoom sessions for class of 40 students which helped professor in organizing classes and lab. Created online quizzes using Google Forms to assist the professor during classes, events."},
            {index: 2, point: "Answered questions related to Python, HTML, JavaScript from a class of 40 students at the end of Zoom session."},
            {index: 3, point: "Installed proctoring software for 30+ desktops in lab which ensured smooth organization of practical exams for 40+ students."},
            {index: 4, point: "Distributed 10+ lecture material to class of 40 students implementing Google Suite applications such as Google Drive, Docs, and Gmail acting as a Teaching Assistant to the Professor."}
        ]
    },
]
export default jobs;