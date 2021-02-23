import React, { useState, useEffect } from 'react';
import GeoCard from '../components/GeoCard.js'
import ButtonLoader from '../components/ButtonLoader'
import 'semantic-ui-css/semantic.min.css'

const username = 'ameer_30';
const password = '074e91-d5c615-c9516c-11c532-9aa562';
const authString = `${username}:${password}`
const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(authString))

function LatLongSearch() {
    const [covid, setCovid] = useState([]);
    const [geoCoordinates, setGeoCoordinates] = useState([]);
    const [location, setLocation] = useState('Denver');
    const [latitude, setLatitude] = useState(39.768749)
    const [longitude, setLongitude] = useState(-104.973968)

    useEffect(() => {
        getCovidData()
    }, [])
    
    const handleSubmit = (event) => {
        event.preventDefault()
        getCovidData()
        getCoordinateData()
    }
    
    const getCovidData = () => {
        const smartCheckURL = `https://smartcheck.travel/api/v1/coordinate?lat=${latitude}&long=${longitude}&historic=false`
        fetch(smartCheckURL, {method: 'GET', headers})
            .then(response => response.json())
            .then(covidLocation => setCovid(covidLocation.data.covid_info.current))
    }

    const getCoordinateData = () => { 
        const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZXN0ZWluMTk4OCIsImEiOiJja2dmbXFjbGIwbXRtMnlycjYwYnI5enI3In0.phdfttPRCrvVweeTIgdO6A`
        fetch(geoCodeURL)
            .then(response => response.json())
            .then(data => setGeoCoordinates(data.features))
    }

    const renderCoodinateResults = () => geoCoordinates.map(location => 
        <GeoCard
            key={location.id}
            location={location}
        />
    )

    return (
        <div>
            <div class="ui two column centered grid">
                <div className="LatLongSearch">        
                    <form className="ui form" onSubmit={handleSubmit}> 
                        <div className="field">
                            <label>Coordinate Lookup by City / Address / Place:</label>
                            <input className="field-input" type="text" name="location" value={location} onChange={e => setLocation(e.target.value)}/>
                        </div>
                            <input className="ui black button" type="submit" value="Lookup Coordinates" />
                    </form>
                </div>
            </div>
            {renderCoodinateResults()}
            <div class="ui two column centered grid">
                <div className="LatLongSearch">        
                    <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Latitude: </label>
                        <input type="text" name="latitude" value={latitude} onChange={e => setLatitude(+e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Longitude:</label>
                        <input type="number" name="longitude" value={longitude} onChange={e => setLongitude(+e.target.value)} />
                    </div>
                        <input className="ui black button" type="submit" value="Lookup Current Cases"/>
                    </form>
                </div>
            </div>
            <h3 id="current-active-cases">Current Active Cases: {covid.active}</h3> 
            <h3>Current Deaths Reported: {covid.deaths}</h3>
            <ButtonLoader />
        </div>
    )
}

export default LatLongSearch;


