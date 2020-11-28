import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './VenueMarkers';

class MapView extends Component {

    state = {
        currentLocation: { lat: 0, lng: 0 },
        zoom: 2,
        countries: []
    }

    componentDidMount(){
        fetch('https://open-countries.herokuapp.com/travels')
            .then(response => response.json())
            .then(countryData => this.setState({countries: countryData}))
    }

    render() {
        return (
            <Map 
                center={this.state.currentLocation} 
                zoom={this.state.zoom} 
                countries={this.state.countries}
            >
            <TileLayer
                url="https://api.mapbox.com/styles/v1/estein1988/ckgfn1vyi2xrb1amll88pwyc4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZXN0ZWluMTk4OCIsImEiOiJja2dmbmdpYjcxbWpvMnRtaXdqNWZtczc4In0.euFSxHeBqRHDWZ1ip74x9w"
                attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
            />        
            <Markers 
                countries={this.state.countries} 
            />
            </Map>
        )
    }
}

export default MapView;

