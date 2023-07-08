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
                    <div className="image-link">
                    <Picture img={GitHub} alt="GitHub" />
                    <a href="https://github.com/manas-1404" target="_blank"></a>
                    </div>
                    
                    <a href="https://www.linkedin.com/in/manas-gowda/"><Picture img={LinkedIn} alt="LinkedIn" /></a>
                    <a href="https://docs.google.com/document/d/1MCf4O7vIUl7A-n-KSPXseRjhuyFqGC0g/edit?usp=sharing&ouid=106415042144774581140&rtpof=true&sd=true" target="_blank">
                        <Picture img={Resume} alt="Resume" />
                    </a>
                </div>
                
            </div>

        </div>
    )
}

export default ContactMe;