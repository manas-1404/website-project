import React from "react";
import { useDarkMode } from './dark-mode'; // Ensure the path is correct

const content = "I'm a passionate computer science student. I like to build software applications. I'm currently building a CounterSpeech Bot to help counter hate speech online.";

function AboutMe() {
    const { isDarkMode } = useDarkMode(); // Corrected: useDarkMode is a function and needs to be called

    return (
        <div className={`About-Me-stage${isDarkMode ? ' dark-mode' : ''}`}>
            <div className={`About-Me${isDarkMode ? ' dark-mode' : ''}`}>
                <h2><strong>About Me</strong></h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default AboutMe;
