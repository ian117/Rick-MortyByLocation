import React from "react";

const SearchBox = ({handler, handlerInput}) => (
    <>    
        <form>
            <input placeholder="Search with Id number" onChange={handlerInput}></input>
            <button onClick={handler}>Search</button>
        </form>
    </>
)

export default SearchBox;