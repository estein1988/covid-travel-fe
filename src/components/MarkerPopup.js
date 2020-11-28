import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = ({data}) => {
    return  (
    <Popup>
        <div className='popup-text'>
            <h2>{data.country_name}</h2>
            <h4>Current Status: {data.current_status.charAt(0).toUpperCase() + data.current_status.slice(1)}</h4>
            <p>{data.days_to_quarantine} days required to quarantine</p>
            <p>Exceptions: {data.closed_exceptions.join('; ')}</p>
            <p>Notes: {data.international_travel_note}</p>
        </div>
    </Popup>
    )
}

export default MarkerPopup;