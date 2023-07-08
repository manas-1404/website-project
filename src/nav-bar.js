import React from "react";

import { useState, useEffect } from "react";

import Logo from "./images/favicon.jpg"

import './styling/dark-mode.css';

function NavBar() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        const stage = document.querySelector("#First-Page");
        const navBar = document.querySelector(".Nav-Bar");
        const navBarElements = document.querySelector(".Nav-Bar a");

        const IamManas = document.querySelector("#IamManas");
        const introduction = document.querySelector("#IamManas h1");

        body.classList.toggle("dark-mode", isDarkMode);
        stage.classList.toggle("dark-mode", isDarkMode);
        navBar.classList.toggle("dark-mode", isDarkMode);
        navBarElements.classList.toggle("dark-mode", isDarkMode);

        IamManas.classList.toggle("dark-mode",isDarkMode);
        introduction.classList.toggle("dark-mode", isDarkMode);
      }, [isDarkMode]);

    return (
        <div className="container">
            <nav className="Nav-Bar">
                <div className="Website-Logo">
                    <img src={Logo} alt="Manas Logo" width="10%" id="Logo" />
                    <div>
                        <p id="MyName"><a href="#First-Page">Manas Gowda</a></p>
                    </div>
                </div>

                <a href="#Work-Experience-stage">Work Experience</a>
                <a href="#Education-stage">Education</a>
                <a href="#Project-stage">Project</a>
                <a>Resume</a>
                <a href="#Contact-Me">Contact Me</a>
                <button onClick={toggleDarkMode} id="switch-button">
                    {isDarkMode === false && <span class="material-icons">bedtime</span>}
                    {isDarkMode === true && <span class="material-icons">light_mode</span>}
                </button>
            </nav>
        </div> 

    );
}

export default NavBar;