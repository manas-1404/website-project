import React from "react";

import Logo from "./images/favicon.jpg"

function NavBar() {
    return (
        <nav className="Nav-Bar">

            <div className="Website-Logo">
                <img src={Logo} alt="Manas Logo" width="10%" id="Logo"/>
                <div>
                    <button id="MyName"><a href="#Logo">Manas Srinivas Gowda</a></button>
                </div>
            </div>

            {/* <img src={Logo} alt="Manas Logo" width="5%" id="Logo"/>
            <button><a href="#Logo">Manas Srinivas Gowda</a></button> */}
            <button><a href="#Work-Experience">Work Experience</a></button>
            <button><a href="#Education">Education</a></button>
            <button><a href="#Projects">Project</a></button>
            <button><a>Resume</a></button>
            <button><a href="#Contact-Me">Contact Me</a></button>

        </nav>
    );
}

export default NavBar;