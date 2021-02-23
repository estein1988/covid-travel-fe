import React from 'react'

function CityTableCard({data}) {
    return (
        <div>
            <table className="ui sortable celled table">
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
                            {data.date.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "-")}
                        </td>
                        <td>
                            {data.positive}
                        </td>
                        <td>
                            {data.negative}
                        </td>
                        <td className={(data.positive / data.negative) < .08
                            ? 'low-positivity'
                            : 'high-positivity'
                        }>
                            {(data.positive / data.negative).toFixed(4)}
                        </td>
                        <td className={data.hospitalizedCurrently > 40000 
                                ? 'high-hospitilized' 
                                : 'low-hospitilized'}
                            >
                                    {(data.hospitalizedCurrently === null) 
                                        ? data.hospitalizedCurrently 
                                        : data.hospitalizedCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                        <td className={data.inIcuCurrently > 8000
                                ? 'high-icu' 
                                : 'low-icu'}
                            >
                                    {(data.inIcuCurrently === null) 
                                        ? data.inIcuCurrently 
                                        : data.inIcuCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                        <td className={data.onVentilatorCurrently > 1750
                                ? 'high-ventilator' 
                                : 'low-ventilator'}
                            >
                                    {(data.onVentilatorCurrently === null) 
                                        ? data.onVentilatorCurrently 
                                        : data.onVentilatorCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                        <td className={data.deathIncrease > 800
                                ? 'high-death'
                                : 'low-death'
                        }>
                            {(data.deathIncrease === null) 
                                ? data.deathIncrease
                                : data.deathIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                        <td>
                            {(data.death === null) 
                                ? data.death 
                                : data.death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                        <td>
                            {(data.totalTestResults === null) 
                                ? data.totalTestResults 
                                : data.totalTestResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CityTableCard