import React from "react";

//importing pictures from images
import PlaceHolder from "./images/placeholder.png";

//importing custom components
import Picture from "./pictures";
import Content from "./content"

//importing project data array
import ProjectData from "./project-data";


function AddProject(){

    const elements = ProjectData.map(project =>
        <div className="project-container">
            <Picture img={project.image} alt="Organization Logo" />

            <Content detail={project} />  
        </div>
    );

    return <div>{elements}</div>
}

function Projects(){
    return(
        <div id="Project-stage">
            <div id="Project">
                <div id="PRJT-Title"><h2><strong>Projects</strong></h2></div>
                <AddProject />
            </div>
        </div>
    );
}

export default Projects;
