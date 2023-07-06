import React from "react";

//importing pictures from images
import PlaceHolder from "./images/placeholder.png";
import LinkedIn from "./images/linkedin.png";
import GitHub from "./images/github.png";
import Resume from "./images/resume.png";

//importing custom components
import Picture from "./pictures"


function ContactMe(){
    return (
        <div id="Contact-Me-stage">
            <div id="Contact-Me">
                <h2>Contact Me</h2>
                <h3>Want to know me better? Let's connect now!</h3>
                
                {/* make the below div as a flexbox */}
                <div id="image-container">
                    <Picture img={GitHub} alt="GitHub" />
                    <Picture img={LinkedIn} alt="LinkedIn" />
                    <Picture img={Resume} alt="Resume" />
                </div>
                
            </div>

        </div>
    )
}

export default ContactMe;