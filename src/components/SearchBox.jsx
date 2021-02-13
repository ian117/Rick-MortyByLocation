import React from "react";

const SearchBox = ({ handlerInput}) => (
    <>    
        <form onSubmit={handlerInput}>
            <input placeholder="Search with Id number" ></input>
            <button>Search</button>
        </form>
    </>
)

export default SearchBox;