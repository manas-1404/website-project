import React from "react"

function Description(props2){

    const items = props2.roles.map(jobPoint =>
            <li>{jobPoint}</li>
        );

    return (<ul>{items}</ul>);
    
}

export default function Content(props){

    //condition for work experience, if id = wk$$
    if(props.detail.id.includes("wk")){
        return (
            <div className="content">
                <h3><strong>{props.detail.position}</strong></h3>
                <h3>{props.detail.company}</h3>
                <h5><em>{props.detail.timeline}</em></h5>
                <h5>{props.detail.city}</h5>
                <Description roles={props.detail.role} />
            </div>
        );
    }
    
    //condition for education, if id= edu$$
    if(props.detail.id.includes("edu")){
        return(
            <div className="content">
                <h3><strong>{props.detail.name}</strong></h3>
                <h4>{props.detail.degree}</h4>
                <h4>GPA: {props.detail.GPA}.0</h4>
                <h5><em>Graduation: {props.detail.graduation}</em></h5>
                <h5><em>{props.detail.city}</em></h5>
            </div>
        );
    }

    if(props.detail.id.includes("prj")){
        return(
            <div className="content">
                <h3><strong>{props.detail.name}</strong></h3>
                <h5><em>{props.detail.time}</em></h5>
                <p>{props.detail.desc}</p>
                <p>Skills: <em>{props.detail.skills}</em></p>
            </div>
        );
    }
}