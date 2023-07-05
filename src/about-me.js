import React from "react"

const content = "I'm a passionate computer science student. I am highly interested in the area of Machine Learning and Natural Language Processing"

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