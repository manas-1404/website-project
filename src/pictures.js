import React from "react";


export default function Picture(props){
    return(
        <div>
            <img src={props.img} alt={props.alt} width="25%" />
        </div>
        
    )
}