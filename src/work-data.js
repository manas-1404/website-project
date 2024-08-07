// import React from "react";

import CounterSpeech from "./images/counterSpeech.png";
import Barrett from "./images/barrett.png";
import FSE from "./images/fse.png";
import VIPS from "./images/vips.png";
import RPTU from "./images/RPTU.jpeg"
import EPICS from "./images/epics.png";

const jobs = [
    {
        id: "wk1", 
        image: RPTU,
        link: "https://rptu.de/en/",
        position: "Software Engineering Intern",
        company: "University of Kaiserslautern-Landau", 
        timeline: "May 2024 - August 2024",
        city: "Kaiserslautern, Germany", 
        role: [
            "Developed & trained machine learning model using Keras & TensorFlow to accurately classify urban land use into 12 distinct classes, achieving a precision of 84.2% and enhancing urban planning software development.",
            "Trained & deployed a machine learning model utilizing Keras & TensorFlow to achieve 78% accuracy in image segmentation of satellite images, serving as critical tool in development of urban planning software at Ziggurat.ai.",
            "Implemented robust data collection pipelines using Numpy, Pandas, Google Maps Static API to construct training and testing datasets for land use classifiers, preprocessing over 500,000 satellite images which streamlined data handling.",
            "Upgraded legacy Python2 codebase for custom geospatial analysis packages Pysatml and Pysatapi to Python3, resulting in 100% compatibility with the latest Python versions and resolving all operational issues.",
            "Designed an automated pipeline for geospatial analysis shapefiles using Pandas and GeoPandas, improving data visualization efficiency by 100%, streamlining operations for the Ministry of Rhineland-Palatinate.",
            "Documented detailed procedures for machine learning model code, methods, and datasets using Git version control, resulting in simplified software development processes and ensured 100% code reusability for future applications."
        ]
    },
    {
        id: "wk2", 
        image: FSE,
        link: "https://students.engineering.asu.edu/undergraduate-teaching-assistants/",
        position: "Undergraduate Teaching Assistant",
        company: "ASU Ira A. Fulton Schools of Engineering", 
        timeline: "August 2023 - December 2023",
        city: "Tempe, Arizona, United States", 
        role: [
            "Delivered 75-minute CSE110 lab session on Java principles and Object-Oriented Programming with weekly attendance of 75 students, enhancing comprehension and upskilling the future software engineers.",
            "Performed over 100 code reviews every week focused on Object-Oriented Programming and Java principles, providing student support and leading to a 70% improvement in students' analytical skills and computer skills.",
            "Conducted comprehensive exam review sessions for Java and Object Oriented Programming courses, resulting in an 80% increase in student performance compared to prior exams."
        ]
    },
    {
        id: "wk3", 
        image: EPICS,
        link: "https://epics.engineering.asu.edu/",
        position: "Software Developer",
        company: "ASU Engineering Projects in Community Service", 
        timeline: "January 2023 - Present",
        city: "Tempe, Arizona, United States", 
        role: [
            "Developed software solution that increases ASU transcript processing efficiency by 80%, leveraging AWS Textract and Python for optimal data extraction from diverse documents like tables & images, PDFs, XML.",
            "Designed automation pipeline to extract transcript information from S3 Buckets to transfer to Amazon Textract.",
            "Collaborated with cross-functional teams to integrate MongoDB database to store the extracted information, streamlining data access processes and improving overall efficiency by 40%"
        ]
    },
    {
        id: "wk4", 
        image: CounterSpeech,
        link: "https://globalsecurity.asu.edu/expertise/narrative-disinformation-and-strategic-influence/",
        position: "Undergraduate Researcher",
        company: "ASU Center on Narratives, Disinformation and Strategic Influence", 
        timeline: "July 2023 - December 2023",
        city: "Tempe, Arizona, United States", 
        role: [
            {index: 1, point: "Developing a CounterSpeech Bot to help fight hate speech online."},
            {index: 2, point: "Using Python and concepts of Machine Learning to build the bot"}
        ]
    },
    {
        id: "wk5", 
        image: Barrett,
        link: "https://barretthonors.asu.edu/",
        position: "Recruiting Assistant",
        company: "Barrett, The Honors College", 
        timeline: "March 2023 - September 2023",
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
        id: "wk6",
        image: FSE,
        link: "https://engineering.asu.edu/",
        position: "Communications Director",
        company: "Fulton Ambassador, Ira A. Fulton Schools of Engineering",
        timeline: "April 2023 - May 2024",
        city: "Tempe, Arizona, United States", 
        role: [
            {index: 1, point: "Maintained Fulton Ambassador (FA) website using WordPress and designed weekly newsletter for the FA."},
            {index: 2, point: "Demonstrated leadership and public speaking skills by leading 5+ Campus Tours to a group of  4+ Prospective ASU Students and Families."},
            {index: 3, point: "Demonstrated one-on-one mentorship to help 5+ students learn more about opportunities (EPICS, GCSP, FURI, Devil’s Invent) and choices at Ira A. Fulton School of Engineering and Arizona State University." }   
        ]
    },
    {
        id: "wk7", 
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