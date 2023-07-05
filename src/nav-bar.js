import React from "react";

import Logo from "./images/favicon.jpg"

function NavBar() {
    return (
        <nav className="Nav-Bar">

            <div className="Website-Logo">
                <img src={Logo} alt="Manas Logo" width="10%" id="Logo" />
                <div>
                    <p id="MyName"><a href="#Logo">Manas Gowda</a></p>
                </div>
            </div>

            <a href="#Work-Experience-stage">Work Experience</a>
            <a href="#Education-stage">Education</a>
            <a href="#Projects">Project</a>
            <a>Resume</a>
            <a href="#Contact-Me">Contact Me</a>

        </nav>
    );
}

export default NavBar;