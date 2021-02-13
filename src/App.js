import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox'
import LocationContainer from "./components/LocationContainer";
import './App.css';

function App() {
  const [ id, setId ] = useState()
  const [ searchValue, setSearchValue] = useState();

  //Handlers para el SearchBox, así le asignamos el id a la URL
  const settingSearchValue = (e) => {
    e.preventDefault()
    setSearchValue(e.target.elements[0].value)
  }

  //Side Effect del ID
  useEffect(() => {
      setId(searchValue)
  }, [searchValue])

  return (
    <div className="App">
        <SearchBox handlerInput={settingSearchValue}/>
        <LocationContainer ID={id}/>
    </div>
  );
}

export default App;
