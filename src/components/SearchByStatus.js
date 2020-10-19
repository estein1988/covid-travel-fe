import React from 'react'

export default function SearchByStatus({filterStatus}){
    return(
        <form className="ui-one-column-grid">
            <label>Search By Status (not case sensitive): </label>
            <input type="text" onChange={filterStatus}></input>
        </form>   
    )
}