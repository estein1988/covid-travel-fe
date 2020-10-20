import React, { Component } from 'react';

const username = 'ameer_30';
const password = '074e91-d5c615-c9516c-11c532-9aa562';
const authString = `${username}:${password}`
const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(authString))

class LatLongSearch extends Component {

    state = {
        covid: [],
        latitude: 39,
        longtitude: -104
    }

    componentDidMount(){
        this.getCovidData()
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: +event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.getCovidData()
    }
    
    getCovidData = () => {
        const url = `https://smartcheck.travel/api/v1/coordinate?lat=${this.state.latitude}&long=${this.state.longtitude}&historic=false`
        fetch(url,{method: 'GET', headers})
            .then(response => response.json())
            .then(covidLocation => this.setState({covid: covidLocation.data.covid_info.current}))
    }

    render(){
    return (
        <div className="LatLongSearch">

            <form onSubmit={this.handleSubmit}>
                <label>Latitude: </label>
                <input type="number" name="latitude" value={this.state.latitude} onChange={this.handleChange} />

                <label>Longitude</label>
                <input type="number" name="longtitude" value={this.state.longtitude} onChange={this.handleChange} />

                <input type="submit" />
            </form>

            <h1>Current Active Cases: {this.state.covid.active}</h1> 
            <h1>Current Active Deaths: {this.state.covid.deaths}</h1>  
        </div>
    )}
    }

export default LatLongSearch;