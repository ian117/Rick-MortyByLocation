import React from "react";
import ResidentContainer from "./ResidentContainer";

const LocationInfo = ({ NAME, TYPE, DIMENSION, DATE ,RESIDENTS }) => {

    return (
        <>
            <div>
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