import React, { Component } from 'react';
import GeoCard from '../components/GeoCard.js'

const username = 'ameer_30';
const password = '074e91-d5c615-c9516c-11c532-9aa562';
const authString = `${username}:${password}`
const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(authString))

class LatLongSearch extends Component {

    state = {
        covid: [],
        geoCodeCoorindates: [],
        location: 'Denver',
        latitude: 39.768749,
        longtitude: -104.973968
    }

    componentDidMount(){
        this.getCovidData()
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: +event.target.value
        })
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.getCovidData()
        this.getCoordinateData()
    }
    
    getCovidData = () => {
        const url = `https://smartcheck.travel/api/v1/coordinate?lat=${this.state.latitude}&long=${this.state.longtitude}&historic=false`
        fetch(url,{method: 'GET', headers})
            .then(response => response.json())
            .then(covidLocation => this.setState({covid: covidLocation.data.covid_info.current}))
    }

    getCoordinateData = () => { 
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.location}.json?access_token=pk.eyJ1IjoiZXN0ZWluMTk4OCIsImEiOiJja2dmbXFjbGIwbXRtMnlycjYwYnI5enI3In0.phdfttPRCrvVweeTIgdO6A`
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({geoCodeCoorindates: data.features}))
    }

    render(){
    const renderCoodinateResults = () => this.state.geoCodeCoorindates.map(location => <GeoCard
        key={location.id}
        location={location}
    />)

        return (
            <div className="LatLongSearch">
            
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <div class="field">
                        <label>City:</label>
                        <input type="text" name="location" value={this.state.location} onChange={this.handleChangeText}/>
                        <input class="ui button" type="submit" />
                    </div>
                </form>
                {renderCoodinateResults()}
            </div>

            <form className="ui.form" onSubmit={this.handleSubmit}>

                <div className="field">
                    <label>Latitude: </label>
                    <input type="text" name="latitude" value={this.state.latitude} onChange={this.handleChange} />
                </div>

                <div className="field">
                    <label>Longitude:</label>
                    <input type="number" name="longtitude" value={this.state.longtitude} onChange={this.handleChange} />
                </div>

                <input className="ui button" type="submit" />
            </form>

            <h1>Current Active Cases: {this.state.covid.active}</h1> 
            <h1>Current Active Deaths: {this.state.covid.deaths}</h1> 

            </div>
        )
    }
}

export default LatLongSearch;


