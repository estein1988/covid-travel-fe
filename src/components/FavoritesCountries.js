import React, { Component } from "react";
import CountryCard from "../components/CountryCard";
import 'semantic-ui-css/semantic.min.css'

class FavoritesCountries extends Component {

    render() {

    const renderFavoritesCountries = () => this.props.favoritesCountries.map(
        country => <CountryCard
        key={country.name}
        country={country}
        clickAction={this.props.clickAction}
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
    );
    }
}

export default FavoritesCountries;
