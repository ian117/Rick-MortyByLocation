import React from "react";
import "../styles/Residents.css";


const ResidentInfo = ({item}) => {
    const {name, image, status, species , origin, episode} = item

    return (
        <div className="resident">
            <p>{name}</p> 
            <img src={image}/>
            <p>Status: <span>{status}</span></p>
            <p>Species: <span>{species}</span></p>
            <p>Origin: <span>{origin.name}</span></p>           
            <p>Episodes: <span>{episode.length}</span></p>           
        </div>
    )
}

export default ResidentInfo;
