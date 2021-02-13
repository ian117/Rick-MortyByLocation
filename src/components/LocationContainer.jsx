import React, { useState,useEffect} from "react";
import LocationInfo from "./LocationInfo";
import ResidentContainer from "./ResidentContainer";

const LocationContainer = ({ID}) => {
    //state para ver si hay error
    const [ isError, setIsError] = useState(true);
    const URL_LOCATION = `https://rickandmortyapi.com/api/location/${ID}`;
    //states para usarlos como props en componentes
    const [ name, setName] = useState();
    const [ type, setType] = useState();
    const [ dimension, setDimension] = useState();
    const [ creationDate, setCreationDate] = useState();
    const [ residentsArr, setResidentsArr] = useState([]);

    //Cuantos residentes existen
    const tenResidents = (data) => {
        const residentsArrayFake = [...data.residents]
        if (residentsArrayFake.length > 10) {
            const arraNew = residentsArrayFake.slice(0,10)
            setResidentsArr(arraNew) 
        } else {
            setResidentsArr(residentsArrayFake)
        }
    }

    //seteamos el state de isError y tambien la de los props
    const doStates = (data) => {
        if (data.error){
            setIsError(true)
        } else {
            setIsError(false);
            tenResidents(data)
            setName(data.name);
            setType(data.type);
            setDimension(data.dimension);
            setCreationDate(data.created)
        }
    }

    //Componente ternario
    const TernaryComponent = () => {
        if(isError){
            return <p>Write with ID number the location</p>
        } else {
            return (<>
                    <LocationInfo NAME={name} TYPE={type} DIMENSION={dimension} DATE={creationDate} RESIDENTS={residentsArr}/>
                    <ResidentContainer Residents={residentsArr}/>
                    </>    
                    ) 
        }
    }

    //Siempre que cambia el ID (Prop) esto pasará
    useEffect( async () => {
        try {
            fetch(URL_LOCATION)
            .then( data => data.json())
            .then((res) => {doStates(res)})
        } catch (er) {
            console.error(er);
        }
    },[ID])

    return (
        <>
            <TernaryComponent/>
        </>
    )

}

export default LocationContainer;