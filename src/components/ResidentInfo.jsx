import React, {useEffect} from "react";

const ResidentInfo = ({item}) => {
    const {name} = item

    return(
        <>
            <p>{name}</p>            
        </>
    )
}

export default ResidentInfo;
