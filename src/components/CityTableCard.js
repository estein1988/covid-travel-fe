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
                            <th>Positivity Rate</th>
                            <th>Currently Hospitalized</th>
                            <th>In ICU</th>
                            <th>On Ventilator</th>
                            <th>Death Increase</th>
                            <th>Total Deaths</th>
                            <th>Total Test Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {this.props.data.date.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "-")}
                            </td>
                            <td>
                                {this.props.data.positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td>
                                {this.props.data.negative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td className={(this.props.data.positive / this.props.data.negative) < .08
                                ? 'low-positivity'
                                : 'high-positivity'
                            }>
                                {(this.props.data.positive / this.props.data.negative).toFixed(4)}
                            </td>
                            <td className={this.props.data.hospitalizedCurrently > 40000 
                                    ? 'high-hospitilized' 
                                    : 'low-hospitilized'}
                                >
                                        {(this.props.data.hospitalizedCurrently === null) 
                                            ? this.props.data.hospitalizedCurrently 
                                            : this.props.data.hospitalizedCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td className={this.props.data.inIcuCurrently > 8000
                                    ? 'high-icu' 
                                    : 'low-icu'}
                                >
                                        {(this.props.data.inIcuCurrently === null) 
                                            ? this.props.data.inIcuCurrently 
                                            : this.props.data.inIcuCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td className={this.props.data.onVentilatorCurrently > 1750
                                    ? 'high-ventilator' 
                                    : 'low-ventilator'}
                                >
                                        {(this.props.data.onVentilatorCurrently === null) 
                                            ? this.props.data.onVentilatorCurrently 
                                            : this.props.data.onVentilatorCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td className={this.props.data.deathIncrease > 800
                                    ? 'high-death'
                                    : 'low-death'
                            }>
                                {(this.props.data.deathIncrease === null) 
                                    ? this.props.data.deathIncrease
                                    : this.props.data.deathIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td>
                                {(this.props.data.death === null) 
                                    ? this.props.data.death 
                                    : this.props.data.death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                            <td>
                                {(this.props.data.totalTestResults === null) 
                                    ? this.props.data.totalTestResults 
                                    : this.props.data.totalTestResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CityTableCard