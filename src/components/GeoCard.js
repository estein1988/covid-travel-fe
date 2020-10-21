import React, { Component } from 'react'

class GeoCard extends Component {

    render() {

    return (
        <div>
            <h5>{this.props.location.place_name} : {this.props.location.center[1]}, {this.props.location.center[0]}</h5>
        </div>
    )}
}

export default GeoCard