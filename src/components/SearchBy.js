import React from 'react'

export default function SearchBy({captureSearchField, name}) {
    return ( 
        <form className="ui-one-column-grid">
            <label>Search By Country {name} (not case sensitive): </label>
            <input name={`search${name}`} type="text" onChange={captureSearchField} />
        </form>   
    )
}