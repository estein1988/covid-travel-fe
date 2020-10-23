import React, { Component } from "react";
import CountryCard from '../components/CountryCard'

class CardsContainer extends Component {

    render() {
    const renderCountries = () => this.props.allCountries.map(
        country => <CountryCard
            key={country.id}
            country={country}
            clickAction={this.props.clickAction}
            filter={this.props.filterCountries}
        />
    )

        return (
            <div className="cards-container">
                {renderCountries()}
            </div>
        )
    }
}

export default CardsContainer;