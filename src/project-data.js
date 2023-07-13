import React from "react";

//importing pictures from images
import Logo from "./images/favicon.jpg"
import CounterSpeech from "./images/counterSpeech.png";
import EPICS from "./images/epics.png";
import GCSP from "./images/gcsp.png"
import SpaceHack from "./images/spaceHacks.png"
import SCAI from "./images/scai.png";
import SafeSide from "./images/safeSide.png";
import RapidRecovery from "./images/rapidRecovery.png";
import Invoice from "./images/invoice.png";
// import PlaceHolder from "./images/placeholder.png";


const projects = [
    {
        id: "prj1",
        image: CounterSpeech, 
        link: "none",
        name: "Automated Counter Speech Bot", 
        time: "July 2023 - Present", 
        desc: "Developing an Automated CounterSpeech Bot using Python and OpenAI to counter hate speech online", 
        skills: "Python, Machine Learning, Natural Language Processing, Git"
    }, 
    {
        id: "prj2",
        image: Logo,
        link: "none",
        name: "Professional Portfolio Website",
        time: "July 2023 - July 2023",
        desc: "Developed a responsive professional portfolio website using React JS which is compatible with Laptops, Desktops, iPads and tablets",
        skills: "React JS, HTML, CSS, Git"
    },
    {
        id: "prj3",
        image: SCAI,
        link: "none",
        name: "Arizona State University Academic Advising Meeting Scheduler",
        time: "March 2023 - April 2023",
        desc: "Developed a clone version of the front-end of ASU Academic Advising Meeting Scheduler using JavaFX and CSS",
        skills: "Java, JavaFX, CSS, Git"
    },
    {
        id: "prj4", 
        image: RapidRecovery,
        link: "https://editor.p5js.org/manas__1404/full/48Gid6pnb",
        name: "Rapid Recovery", 
        time: "October 2022 - December 2022",
        desc: "Designed a web application to assist in the recovery of Stroke Patients. The game helps in the development of the Fine Motor Skills(FMS) deactivated in the patients suffering from Stroke. Worked with team of 4 members to build the application using a JavaScript library p5.js.",
        skills: "JavaScript, p5.js, Git"
    },
    {
        id: "prj5",
        image: EPICS,
        link: "https://docs.google.com/presentation/d/18wRq4xPf4TpGBZKMOFtDe0ICiHmCEeNnFWgG3yv6TU8/edit?usp=sharing",
        name: "EPICS: ASU Transcripts",
        time: "January 2023 - Present",
        desc: "Developing a Python & MySQL application to help streamline the process of data extraction and analyzation for 10000+ varieties of high school transcripts for Arizona State University",
        skills: "Python, MySQL, Git"
    },
    {
        id: "prj6",
        image: SpaceHack,
        link: "https://docs.google.com/presentation/d/1Fxq2zAdr1lIT0zt7IwclFnMhwC5lFI2o3Bnoe9F0rjI/edit#slide=id.g2266f6cbb50_2_116",
        name: "Brazilian Favelas",
        time: "March 2023 - March 2023",
        desc: "Utilized Satellite Data and Google Earth Engine (GEE) to visualize the consequences of a natural disaster in the Favelas of Brazil. Analyzed and visualized multiple criteria such as elevation, disproportionality of landslides, flood events, loss of vegetation, death toll of the past 20 years to highlight the key differences before and after the natural disaster.",
        skills: "Google Earth Engine (GEE), Data Visualization, Git"
    }, 
    {
        id: "prj7",
        image: SafeSide,
        link: "https://docs.google.com/presentation/d/12wrk_9HgFzh5JsasIxrxwsxef-z234g3PcMdoMRRaxY/edit?usp=sharing&usp=embed_facebook",
        name: "SafeSide: Your Personal Safety Companion",
        time: "Febraury 2023 - Febraury 2023",
        desc: "Developed an innovative emergency response app to guide individuals during active shooter incidents, providing real-time location-based evacuation routes and tailored safety measures. Empowered users to make informed decisions and stay safe during emergencies by leveraging advanced technology, minimizing the spread of misinformation, and mitigating potential loss of life, injuries, and psychological trauma.",
        skills: "Flutter, Figma"
    },
    {
        id: "prj8",
        image: GCSP,
        link: "https://docs.google.com/presentation/d/1cUB9TjcEwWcoW0ZWU2dOgSq2R0LUHHvniXV85BERcQY/edit#slide=id.g22cb6aa3376_2_76",
        name: "Securing the IoT: Harnessing AI and Quantum Computing for Comprehensive IoT Security", 
        time: "January 2023 - April 2023",
        desc: "Conducted research under the Grand Challenges Scholar Program (GCSP) on data security and AI, specializing in identifying and mitigating security vulnerabilities in small businesses and residential environments using IoT Devices. Utilized quantum computing to create unbreakable data encryption. This technology ensures the protection of sensitive information used in the communication between IoT devices.", 
        skills: "Artificial Intelligence, Quantum Computing"
    }, 
    {
        id: "prj9",
        image: Invoice,
        link: "https://github.com/manas-1404/PDF-Billing-Software",
        name: "PDF Invoice Generator",
        time: "Febraury 2022 - March 2022",
        desc: "Developed a GUI application which enables the generation of an invoice after the purchase of particular items. I worked with another fellow classmate in order to develop this interactive application using the concepts of GUI, File Handling and Database in Python and MySQL",
        skills: "Python, MySQL, Tkinter, Git"
    }
];
export default projects;