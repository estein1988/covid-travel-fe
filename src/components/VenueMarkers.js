import React, { Fragment } from 'react';
import {Marker} from 'react-leaflet';
import {VenueLocationIcon, RedLocationIcon} from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup'; 

const VenueMarkers = (props) => {
    const { countries } = props;
    const markers = countries.map((country, index) => (
    <Marker 
        key={index} 
        position={country.lat_long} 
        icon={country.current_status === 'closed' ? RedLocationIcon : VenueLocationIcon}
    >
        <MarkerPopup data={country}/>
    </Marker>
    )) 
    return <Fragment>{markers}</Fragment>
}
    
export default VenueMarkers;