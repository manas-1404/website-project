import React from "react";

import AboutMe from "./about-me";
import { useDarkMode } from './dark-mode';
import Typewriter from 'typewriter-effect';

import Manas from "./images/manas.jpg";

function FirstPage() {
    const { isDarkMode } = useDarkMode();

    return (
        <>
            <div id="First-Page-stage">
                <div className={`First-Page${isDarkMode ? ' dark-mode' : ''}`}>
                    <img src={Manas} alt="Manas" width="37%" id="MyImage" />
                    <div className={`IamManas${isDarkMode ? ' dark-mode' : ''}`}>
                        <h1>Hey! I'm Manas!</h1>

                        <div className="typewriter-container">
                            <h1>I'm a </h1>
                            <Typewriter
                                options={{
                                    strings: [" Software Developer", " Machine Learning Engineer", " Data Analyst", " Backend Developer", " Undergraduate Researcher"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 25
                                }}
                            />
                        </div>



                        <p>I'm a third-year undergraduate student pursuing Computer Science at Arizona State University. I have interned as a Software Engineer at the University of Kaiserslautern in Germany. </p>
                        <p>I enjoy tackling complex problems and developing solutions that make a tangible impact. From coding challenges to hackathons, I am always exploring new technologies and methodologies to expand my skillset.</p>
                        {/* <h1><strong>Manas!</strong></h1> */}
                    </div>
                </div>
            </div>
            {/* <AboutMe /> */}
        </>
    );
}

export default FirstPage;