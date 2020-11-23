import React from 'react'
import 'semantic-ui-css/semantic.min.css'

export default function GeoCard({location}) {
    return (
        <div className="ui centered card">
            <div className="content">
                <div className="ui-centered-card">
                    <h5 className="header">{location.place_name}</h5>
                    <p>{location.center[1]}{', '}{location.center[0]}</p>
                </div>
            </div>
        </div>
    )
}