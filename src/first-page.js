import React from "react";

import AboutMe from "./about-me";
import { useDarkMode } from './dark-mode';

import Manas from "./images/manas.jpg";

function FirstPage() {
    const {isDarkMode} = useDarkMode();
    
    return (
        <>
            <div id="First-Page-stage">
                <div className={`First-Page${isDarkMode ? ' dark-mode' : ''}`}>
                    <img src={Manas} alt="Manas" width="37%" id="MyImage" />
                    <div className={`IamManas${isDarkMode ? ' dark-mode' : ''}`}>
                        <h1>Hey!</h1>
                        <h1>This is</h1>
                        <h1><strong>Manas!</strong></h1>
                    </div>
                </div>
            </div>
            <AboutMe />
        </>
    );
}

export default FirstPage;