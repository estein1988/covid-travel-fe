import React, { Component } from 'react';
import MapView from './components/MapView';
import FavoritesCountries from './components/FavoritesCountries'
// import SearchByName from './components/SearchByName'
import SearchByStatus from './components/SearchByStatus'
import CardsContainer from './components/CardsContainer'
import './App.css';
class App extends Component {
  
  state = {
    countries: [],
    favoritesCountries: [],
    selectedNames: [],
    selectedStatus: []
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/travels')
      .then(response => response.json())
      .then(countryData => {
        this.setState({countries: countryData})
        this.setState({selectedNames: countryData})
        this.setState({selectedStatus: countryData})
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

  // filterNames = (event) => {
  //   const input = event.target.value
  //   const filteredCountries = this.state.countries 
  //   .filter(
  //     country => country.country_name.toLowerCase().includes(input.toLowerCase())
  //   )
  //   this.setState({selectedNames: filteredCountries})
  // }

  filterStatus = (event) => {
    const input = event.target.value
    const filteredStatus = this.state.countries 
    .filter(
      country => country.current_status.toLowerCase().includes(input.toLowerCase())
    )
    this.setState({selectedStatus: filteredStatus})
  }

  render(){
  return (
    <div className="App">
      <MapView/>
      <FavoritesCountries clickAction={this.removeFromFavoritesCountries} favoritesCountries={this.state.favoritesCountries}/>
      {/* <SearchByName filterNames={this.filterNames} /> */}
      <SearchByStatus filterStatus={this.filterStatus} />
      <CardsContainer clickAction={this.addToFavoritesCountries} allCountries={this.state.selectedStatus} />
    </div>
  )}
}

export default App;

