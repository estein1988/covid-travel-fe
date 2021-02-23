import React from "react";
import CountryCard from "../components/CountryCard";
import 'semantic-ui-css/semantic.min.css'

function FavoritesCountries({favoritesCountries, clickAction}) {

    const renderFavoritesCountries = () => favoritesCountries.map(
        country => <CountryCard
            key={country.id}
            country={country}
            clickAction={clickAction}
        />
    )
        return (
            <div className="ui segment inverted blue favorites-countries">
                <div className="ui five column grid">
                    <div className="row favorites-countries-row">
                        {renderFavoritesCountries()}
                    </div>
                </div>
            </div>
        )
}

export default FavoritesCountries;