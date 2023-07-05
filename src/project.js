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
        <div>
            <h2 id="Projects"><strong>Projects</strong></h2>
            <AddProject />
        </div>
    );
}

export default Projects;
