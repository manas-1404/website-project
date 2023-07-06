import React from "react";

import Logo from "./images/favicon.jpg"

function NavBar() {
    return (
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
            <button><span class="material-icons">light_mode</span></button>

        </nav>
    );
}

export default NavBar;