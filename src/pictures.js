import React from "react";


export default function Picture(props){
    return(
        <img src={props.img} alt={props.alt} width="10%" className="all-images"/>
    )
}