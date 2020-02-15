import React, { Component } from 'react'
import './Components.css'
import Form from './Form'


class Weather extends Component {
    
    render() {
        return (
            <section className="weather-section">
                <div className="form-section">
                    <Form 
                    clearWeather = {this.props.clearWeather}
                     fetchWeather={this.props.fetchWeather}
                     cityValue={this.props.cityValue}
                     countryValue= {this.props.countryValue}
                    />
                </div>
                <div className="output">
                {
                    this.props.country !== null && this.props.city !== null ?
                        <p className="key_holder">
                            Location : <span className="details">{this.props.city}, {this.props.country}</span>
                        </p>
                        : null
                }

                {
                    this.props.temperature !== null ?
                        <p className="key_holder">
                            Temperature : <span className="details">{this.props.temperature}°C</span>
                        </p>
                        : null
                }

                {
                    this.props.humidity !== null ?
                        <p className="key_holder">
                            Humidity : <span className="details">{this.props.humidity}%</span>
                        </p>
                        : null
                }
                {
                    this.props.condition !== null ?
                        <p className="key_holder">
                            Condition : <span className="details">{this.props.condition}</span>
                        </p>
                        : null
                }
                {
                    this.props.error !== null ?
                        <p className="key_holder">
                            Error :<br/><span className="error-details"> {this.props.error} </span>
                        </p>
                        : null
                }
                </div>
            </section >
        )
    }

}

export default Weather