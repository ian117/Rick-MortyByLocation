import React, {useEffect, useState} from "react";
import ResidentInfo from "./ResidentInfo";
import  "../styles/Residents.css";

const ResidentContainer = ({Residents}) => {
    const [ component, setcomponent ] = useState([])

    //Nuestra función que nos hace las listas :)
    const makeList = (arr) => {
        const allItems = arr.map((ite) => {
            return <ResidentInfo key={ite.id} item={ite}/>
        })
    //Seteamos el componente con todo para que se muestre en el html
    setcomponent(allItems)
    }
 
    //Cada vez que cambie el array de URL´s se hará esto
    useEffect( async () => {
        try {
            const auxArr = []
            Residents.map((url) => {
                auxArr.push(fetch(url)
                .then(res=>res.json())
                .then(data => data))}
                )
                //Que termine el push y fetch de cada URL y nos devuelva los results, aplicamos esto para respetar
                //La asincronia del código
                //        ---> Así hacemos que sea código sincrono<------
                Promise.all(auxArr)
                .then(res => {
                    makeList(res);
                })
        } catch (err) {
            console.error(err)
        }
        },[Residents])
    
    return (
        <div className="containerResi">
          {component}
        </div>
    )
}

export default ResidentContainer;