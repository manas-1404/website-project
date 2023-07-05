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
        <div className="contact-me">
            <div>
                <h2 id="Contact-Me">Contact Me</h2>
                <h3>Want to know me better? Let's have a conversation!</h3>
                
                {/* make the below div as a flexbox */}
                <div>
                    <Picture img={LinkedIn} alt="LinkedIn" />
                    <Picture img={GitHub} alt="GitHub" />
                    <Picture img={Resume} alt="Resume" />
                </div>
                
            </div>

        </div>
    )
}

export default ContactMe;