import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = ({data}) => {
    return  (
    <Popup>
        <div className='popup-text'>
            <h2>{data.country_name}: {data.current_status.charAt(0).toUpperCase() + data.current_status.slice(1)}</h2>
            <h5>{data.days_to_quarantine} days required to quarantine</h5>
            <p>Exceptions: {data.closed_exceptions.join('; ')}</p>
            <p>Notes: {data.international_travel_note}</p>
        </div>
    </Popup>
    )
}

export default MarkerPopup;