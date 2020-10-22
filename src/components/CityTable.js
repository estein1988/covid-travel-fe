import React, { Component } from 'react';
import CityTableCard from '../components/CityTableCard'
class CityTable extends Component {

    state = {
        covidData: [],
    }

    componentDidMount(){
        this.getCovidData()
    }

    getCovidData = () => {
        const url = 'https://api.covidtracking.com/v1/us/daily.json'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({covidData: data}))
    }

    showCovidData = () => this.state.covidData.map(data => <CityTableCard key={data.id} data={data}/>)

    render(){
        return (

            <div>
                <h1>United Stats Statistics: January 22nd, 2020 - October 21, 2020</h1>
                {this.showCovidData()}
            </div>
        )
    }
}

export default CityTable;

