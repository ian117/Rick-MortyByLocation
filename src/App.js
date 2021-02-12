import React, { useState } from 'react';
import SearchBox from './components/SearchBox'
import './App.css';

function App() {
  const [ id, setId ] = useState("1")
  const [ searchValue, setSearchValue] = useState()
  const URL_LOCATION = `https://rickandmortyapi.com/api/location/${id}`;

  //Handlers para el SearchBox, así le asignamos el id a la URL
  const settingSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  const handlerId = (e) => { 
    e.preventDefault();
    setId(searchValue)
  }

  return (
    <div className="App">
        <SearchBox handler={handlerId} handlerInput={settingSearchValue}/>
    </div>
  );
}

export default App;
