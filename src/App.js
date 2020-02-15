import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Weather from './components/Weather';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      temperature: null,
      humidity: null,
      city: null,
      country: null,
      condition: null,
      error: null,
      inputCity: '',
      inputCountry: ""
    }
  }

  handleCity = e => {
    this.setState({
      inputCity: e.target.value
    })
  }

  handleCountry = e => {
    this.setState({
      inputCountry: e.target.value
    })
  }

  fetchWeatherDetails = async (e) => {

    e.preventDefault();
    let { inputCity, inputCountry } = this.state;
    try {
      const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity},${inputCountry}&APPID=433b5f50fce52ae726366fc348ec5f97&units=metric`);
      const dataReceived = await weatherApi.json();
     
      if (inputCity && inputCountry) {

        this.setState({
          temperature: dataReceived.main.temp,
          city: dataReceived.name,
          country: dataReceived.sys.country,
          humidity: dataReceived.main.humidity,
          condition: dataReceived.weather[0].description,
          error: null

        });
      }
      else {

        this.setState({
          temperature: null,
          city: null,
          country: null,
          humidity: null,
          condition: null,
          error: "Please enter the values."

        });
      }
    }
    catch (error) {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        condition: null,
        error: "Please enter a valid location, or check network connection."
      });
    }

  }

  clearWeather = (e) => {
    e.preventDefault()

    this.setState ( prevState => ( {
      temperature: null,
      humidity: null,
      city: null,
      country: null,
      condition: null,
      error: null,
    }))
  }


  render() {
    return (
      <div className="container">
        <header>
          <Navbar />
        </header>
        
        <main>
          <About />
          <Weather
            clearWeather = {this.clearWeather}
            fetchWeather={this.fetchWeatherDetails}
            cityValue={this.handleCity}
            countryValue={this.handleCountry}

            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            condition={this.state.condition}
            error={this.state.error}
          />
        </main>
      
      </div>
    );
  }
}

export default App;
