// NavBar.js
import React from "react";


import { useDarkMode } from './dark-mode';
import './styling/dark-mode.css';
import { Link } from "react-router-dom";

function NavBar() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const ResumeLink = "https://drive.google.com/file/d/1lBZEPW5pCB75ekDeMvzazDI5wLTtUUiJ/view?usp=sharing";

    return (
        <div className={`container${isDarkMode ? ' dark-mode' : ''}`}>
            <nav className={`Nav-Bar${isDarkMode ? ' dark-mode' : ''}`}>
                {/* <div className="Website-Logo">
                    <Link to="/" className={`MyName${isDarkMode ? ' dark-mode' : ''}`>Manas Gowda</Link>
                    {/* <p><a href="#First-Page-stage" id="MyName">Manas Gowda</a></p> */}
                {/* </div> */} 

                <div className="Website-Logo">
                    {/* Use className for styling, not ID */}
                    <Link to="/" className={`MyName${isDarkMode ? ' dark-mode' : ''}`}>Manas Gowda</Link>
                </div>

                <Link to="/experience" className={`Work-Experience-stage${isDarkMode ? ' dark-mode' : ''}`}>Experience</Link>
                {/* <a href="#Work-Experience-stage">Experience</a> */}

                <Link to="/education" className={`Education-stage${isDarkMode ? ' dark-mode' : ''}`}>Education</Link>
                {/* <a href="#Education-stage">Education</a> */}

                <Link to="/projects" className={`Project-stage${isDarkMode ? ' dark-mode' : ''}`}>Project</Link>
                {/* <a href="#Project-stage">Project</a> */}

                <a href={ResumeLink} target="_blank" rel="noreferrer" className={`Resume${isDarkMode ? ' dark-mode' : ''}`}>Resume</a>

                <Link to="/contact-me" className={`Contact-Me${isDarkMode ? ' dark-mode' : ''}`}>Contact</Link>
                {/* <a href="#Contact-Me">Contact</a> */}
                
                <button onClick={toggleDarkMode} className={`switch-button${isDarkMode ? ' dark-mode' : ''}`}>
                    {isDarkMode ? <span className="material-icons dark-mode">light_mode</span> : <span className="material-icons">bedtime</span>}
                </button>
            </nav>
        </div>
    );
};

export default NavBar;


// import React from "react";

// import { useState, useEffect } from "react";

// // import Logo from "./images/favicon.jpg"

// import './styling/dark-mode.css';

// function NavBar() {

//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     useEffect(() => {
//         const html = document.querySelector("html");
//         const stage = document.querySelector("#First-Page");
//         const navBar = document.querySelector(".Nav-Bar");
//         const SwitchButton = document.querySelector("#switch-button");
//         const SwitchButtonImage = document.querySelector(".material-icons");

//         const IamManas = document.querySelector("#IamManas");

        
//         const aboutMe = document.querySelector("#About-Me");    //about-me.js page

        
//         const WEXTitle = document.querySelector("#WEX-Title h2");   //Work Experience Title

//         const EDUTitle = document.querySelector("#EDU-Title h2");   //Education Title

//         const PRJTTitle = document.querySelector("#PRJT-Title h2");   //Project Title

//         const ContactMeStage = document.querySelector("#Contact-Me-stage");


//         // multiple elements
//         const navBarElements = document.querySelectorAll(".Nav-Bar a");
//         const introduction = document.querySelectorAll("#IamManas h1");

//         const aboutMeElements = document.querySelectorAll("#About-Me *");

//         const ContentBox = document.querySelectorAll(".content");
//         const ContentBoxElements = document.querySelectorAll(".content *");

//         const ContactMeElements = document.querySelectorAll("#Contact-Me *");


//         //rendering single elements
//         html.classList.toggle("dark-mode", isDarkMode);
//         stage.classList.toggle("dark-mode", isDarkMode);
//         navBar.classList.toggle("dark-mode", isDarkMode);
//         SwitchButton.classList.toggle("dark-mode", isDarkMode);
//         SwitchButtonImage.classList.toggle("dark-mode", isDarkMode);


//         IamManas.classList.toggle("dark-mode",isDarkMode);
        
//         aboutMe.classList.toggle("dark-mode", isDarkMode);

//         WEXTitle.classList.toggle("dark-mode", isDarkMode);

//         EDUTitle.classList.toggle("dark-mode", isDarkMode);

//         PRJTTitle.classList.toggle("dark-mode", isDarkMode);

//         ContactMeStage.classList.toggle("dark-mode", isDarkMode);


//         //rendering multiple elements
//         navBarElements.forEach((node) => node.classList.toggle("dark-mode", isDarkMode));
//         introduction.forEach((node) => node.classList.toggle("dark-mode", isDarkMode));

//         aboutMeElements.forEach((node) => node.classList.toggle("dark-mode", isDarkMode));

//         ContentBox.forEach((node) => node.classList.toggle("dark-mode", isDarkMode));

//         ContentBoxElements.forEach((node) => node.classList.toggle("dark-mode", isDarkMode));

//         ContactMeElements.forEach((node) => node.classList.toggle("dark-mode", isDarkMode));

//       }, [isDarkMode]);


//       const ResumeLink = "https://drive.google.com/file/d/1lBZEPW5pCB75ekDeMvzazDI5wLTtUUiJ/view?usp=sharing";

//     return (
//         <div className="container">
//             <nav className="Nav-Bar">
//                 <div className="Website-Logo">
//                     {/* <img src={Logo} alt="Manas Logo" width="10%" id="Logo" /> */}
//                     <div>
//                         <p><a href="#First-Page-stage"  id="MyName">Manas Gowda</a></p>
//                     </div>
//                 </div>

//                 <a href="#Work-Experience-stage">Experience</a>
//                 <a href="#Education-stage">Education</a>
//                 <a href="#Project-stage">Project</a>
//                 <a href={ResumeLink} target="_blank" rel="noreferrer">Resume</a>
//                 <a href="#Contact-Me">Contact</a>
//                 <button onClick={toggleDarkMode} id="switch-button">
//                     {isDarkMode === false && <span className="material-icons">bedtime</span>}
//                     {isDarkMode === true && <span className="material-icons">light_mode</span>}
//                 </button>
//             </nav>
//         </div> 

//     );
// }

// export default NavBar;