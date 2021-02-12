import React, { useState,useEffect} from "react";

const LocationContainer = ({ID}) => {
    //state para ver si hay error
    const [ isError, setIsError] = useState();
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
            setResidentsArr(residentsArrayFake.slice(0,10)) 
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
            setName(data.name);
            setType(data.type);
            setDimension(data.dimension);
            setCreationDate(data.created)
            tenResidents(data)
        }
    }

    //Componente ternario
    const TernaryComponent = () => {
        if(isError){
            return <p>Disculpa, pero hay un problema, asegurate de escribir el id correcto con números, o simplemtente ese lugar no existe</p>
        } else {
            return <p>Hey</p> //Aquí haremos el siguiente Componente con sus respectivos props
        }
    }

    //Siempre que cambia el ID (Prop) esto pasará
    useEffect( async () => {
        try {
            fetch(URL_LOCATION)
            .then( data => data.json())
            .then((res) => {console.log(res)
                            doStates(res)})
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