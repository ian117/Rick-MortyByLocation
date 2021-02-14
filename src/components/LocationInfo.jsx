import React from "react";
import "../styles/Residents.css";

const LocationInfo = ({ NAME, TYPE, DIMENSION, DATE ,RESIDENTS }) => {

    return (
        <>
            <div className="LocationInfo">
                <p>Name: <span>{NAME}</span></p>
                <p>Type: <span>{TYPE}</span></p>
                <p>Dimension: <span>{DIMENSION}</span></p>
                <p>Created: <span>{DATE}</span></p>
                <p>Residents: <span>{RESIDENTS.length}</span></p>
            </div>
        </>
    )
}

export default LocationInfo;