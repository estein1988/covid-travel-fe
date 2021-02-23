import React from "react";
import CountryCard from '../components/CountryCard'

function CardsContainer({allCountries, clickAction, filterCountries}) {
    
    const renderCountries = () => allCountries.map(
        country => <CountryCard
            key={country.id}
            country={country}
            clickAction={clickAction}
            filter={filterCountries}
        />
    )

        return (
            <div className="cards-container">
                {renderCountries()}
            </div>
        )
}

export default CardsContainer;