import React, { Component } from 'react';
import FavoritesCountries from './components/FavoritesCountries'
import CardsContainer from './components/CardsContainer'
import './App.css';

class App extends Component {
  
  state = {
    countries: [],
    favoritesCountries: [],
    selectedCountries: []
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/travels')
      .then(response => response.json())
      .then(countryData => {
        this.setState({countries: countryData})
        this.setState({selectedCountries: countryData})
      })
  }

  removeFromFavoritesCountries = (country) => {
    let favorites = this.state.favoritesCountries.filter(favoriteCountry => favoriteCountry !== country)
    this.setState({favoritesCountries: favorites})
  }

  addToFavoritesCountries = (country) => {
    let foundCountry = this.state.favoritesCountries.find(favoriteCountry => country.id === favoriteCountry.id)
    if(!foundCountry){
      this.setState({
        favoritesCountries: [...this.state.favoritesCountries, country]
      })
    }
  }

  render(){
  return (
    <div className="App">
      <FavoritesCountries clickAction={this.removeFromFavoritesCountries} favoritesCountries={this.state.favoritesCountries}/>
      <CardsContainer clickAction={this.addToFavoritesCountries} allCountries={this.state.countries}/>
    </div>
  )}
}

export default App;