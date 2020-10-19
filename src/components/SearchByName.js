import React from 'react'

export default function SearchByName({filterNames}){
    return(
        <form className="ui-one-column-grid">
            <label>Search By Country Name (not case sensitive): </label>
            <input type="text" onChange={filterNames}></input>
        </form>   
    )
}