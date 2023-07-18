import React from "react"

const content = "Passionate computer science student. Like to build software applications. Currently building a CounterSpeech Bot to help counter hate speech online. "

function AboutMe() {
    return (
        <div id="About-Me-stage">
            <div id="About-Me">
                <h2><strong>About Me</strong></h2>
                <p>{content}</p>
            </div>
        </div>

    )
}

export default AboutMe
