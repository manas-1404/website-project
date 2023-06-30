import React from "react"

function Description(props2){

    const items = props2.roles.map(jobPoint =>
            <li>{jobPoint}</li>
        );

    return (<ul>{items}</ul>);
    
}

export default function Content(props){

    return (
        <div>
            <h3><strong>{props.detail.position}</strong></h3>
            <h3>{props.detail.company}</h3>
            <h5><em>{props.detail.timeline}</em></h5>
            <Description roles={props.detail.role} />
        </div>
    )

}