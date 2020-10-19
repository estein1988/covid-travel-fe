import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = ({data}) => {
    return  (
    <Popup>
        <div className='poup-text'>
            <h2>{data.country_name}</h2>
            <h4>Current Status: {data.current_status.charAt(0).toUpperCase() + data.current_status.slice(1)}</h4>
            <p>Days Required To Quarantine: {data.days_to_quarantine}</p>
        </div>
    </Popup>
    );
};
export default MarkerPopup;