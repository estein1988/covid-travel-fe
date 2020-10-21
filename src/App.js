import React, { Component } from 'react';
import MapView from './components/MapView';
import FavoritesCountries from './components/FavoritesCountries'
import SearchBy from './components/SearchBy'
import CardsContainer from './components/CardsContainer'
import LatLongSearch from './components/LatLongSearch'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import {Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
class App extends Component {
  
  state = {
    countries: [],
    favoritesCountries: [],
    filteredCountries: [],
    searchName: "",
    searchStatus: ""
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/travels')
      .then(response => response.json())
      .then(countryData => {
        this.setState( {countries: countryData, filteredCountries: countryData} )
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

  filterCountries = (userSearchInput) => {
    const {searchName, searchStatus} = this.state

    const countriesFilter = this.state.countries.filter(
      country => country.country_name.toLowerCase().includes(searchName.toLowerCase()) && country.current_status.toLowerCase().includes(searchStatus.toLowerCase()) 
    )
    this.setState({filteredCountries: countriesFilter})
  }

  captureSearchField = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  componentDidUpdate(previousProps, previousState){
    if (previousState.searchName !== this.state.searchName || previousState.searchStatus !== this.state.searchStatus) {
      this.filterCountries()
    }
  }

  render(){
    return (
      <Router>

        <div className="App">

        <div class="ui inverted segment">
          <div class="ui inverted secondary pointing menu">
            <div class="header item">
              <i class="home icon"></i>
              <Link to='/'>Home</Link>
            </div>
            <div class="header item">
              <i class="map marker alternate icon"></i>
              <Link to='/lat_long'>Map</Link>
            </div>
          </div>
        </div>

        <Route exact path='/'>
          <FavoritesCountries clickAction={this.removeFromFavoritesCountries} favoritesCountries={this.state.favoritesCountries}/>
          <SearchBy name='Name' captureSearchField={this.captureSearchField} />
          <SearchBy name='Status' captureSearchField={this.captureSearchField} />
          <CardsContainer clickAction={this.addToFavoritesCountries} allCountries={this.state.filteredCountries} />
        </Route>
        
        {/* <Route path='/map'>

        <MapView />
        </Route> */}

        {/* <Route path='/lat_long' render={(props) => < LatLongSearch {...props} />} /> */}

        <Route path='/lat_long'>
          <LatLongSearch />
          <MapView />
        </Route>

      </div>

      </Router>
    )
  }
}

export default App;