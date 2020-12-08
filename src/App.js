import React, { Component } from 'react';
import MapView from './components/MapView';
import FavoritesCountries from './components/FavoritesCountries'
import SearchBy from './components/SearchBy'
import CardsContainer from './components/CardsContainer'
import LatLongSearch from './components/LatLongSearch'
import CityTable from './components/CityTable'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  state = {
    countries: [],
    favoritesCountries: [],
    filteredCountries: [],
    searchName: "",
    searchStatus: ""
  }

  componentDidMount(){
    fetch('https://open-countries.herokuapp.com/travels')
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
    let {searchName, searchStatus} = this.state

    let countriesFilter = this.state.countries.filter(
      country => country.country_name.toLowerCase().includes(searchName.toLowerCase()) && country.current_status.toLowerCase().includes(searchStatus.toLowerCase()) 
    )
    this.setState({filteredCountries: countriesFilter})
  }

  captureSearchField = (event) => {
    let {name, value} = event.target
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
        <div id="navBar" className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <div className="header item">
              <i className="home icon"></i>
              <Link to='/'>Home</Link>
            </div>
            <div className="header item">
              <i className="map marker alternate icon"></i>
              <Link to='/lat_long'>Map</Link>
            </div>
            <div className="header item">
              <i className="map signs icon"></i>
              <Link to='/cards'>Country Cards</Link>
            </div>
            <div className="header item">
              <i className="th list icon"></i>
              <Link to='/table'>Table</Link>
            </div>
          </div>
        </div>

        <Route exact path='/'>
          <section id="header">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h2 className="header-title">OpenCountries</h2>
                  <p className="sub-header">Travel the world safely during the Covid-19 Pandemic</p>
                  <div className="header-button">
                    <button className="massive ui button" onClick={this.fetchData}>
                      <div className="header-link-text">
                        <Link className="header-link-text" to='/lat_long'>Start Exploring</Link>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Route>

        <Route exact path='/cards'>
          <FavoritesCountries clickAction={this.removeFromFavoritesCountries} favoritesCountries={this.state.favoritesCountries}/>
          <SearchBy name='Name' captureSearchField={this.captureSearchField} />
          <SearchBy name='Status' captureSearchField={this.captureSearchField} />
          <CardsContainer clickAction={this.addToFavoritesCountries} allCountries={this.state.filteredCountries} />
        </Route>

        <Route path='/lat_long'>
          <LatLongSearch />
          <MapView />
        </Route>

        <Route path='/table'>
          <CityTable />
        </Route>

      </div>
      
      </Router>
    )
  }
}

export default App;