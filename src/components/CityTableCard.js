import React, { Component } from 'react'
class CityTableCard extends Component {

    render() {

    return (
        <div>
            <table class="ui sortable celled table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Positive</th>
                        <th>Negative</th>
                        <th>Pending</th>
                        <th>Currently Hospitalized</th>
                        <th>In ICU</th>
                        <th>Deaths</th>
                        <th>Total Test Results</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>{this.props.data.date}</td>
                    <td>{this.props.data.positive}</td>
                    <td>{this.props.data.negative}</td>
                    <td>{this.props.data.pending}</td>
                    <td>{this.props.data.hospitalizedCurrently}</td>
                    <td>{this.props.data.inIcuCurrently}</td>
                    <td>{this.props.data.death}</td>
                    <td>{this.props.data.totalTestResults}</td>
                </tr>
            </tbody>
            </table>
        </div>
    )}
}

export default CityTableCard