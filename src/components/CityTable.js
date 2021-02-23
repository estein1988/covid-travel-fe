import React, { useState, useEffect } from 'react';
import CityTableCard from '../components/CityTableCard'

function CityTable() {
    const [covidData, setCovidData] = useState([])

    useEffect(() => {
        fetch('https://api.covidtracking.com/v1/us/daily.json')
            .then(response => response.json())
            .then(result => setCovidData(result))
    }, [])

    const showCovidData = () => covidData.map(data => 
        <CityTableCard 
            key={data.date} 
            data={data}
        />
    )

    return (
        <div>
            <h1>United Stats Covid Statistics</h1>
            {showCovidData()}
        </div>
    )
}

export default CityTable;

