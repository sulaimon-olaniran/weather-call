import React, { Component } from 'react'
import './Components.css'


class Form extends Component {
    render() {
        return (
            <form >
                <div className="form-grid">
                    <input type="text" name="city" placeholder="City..." onChange={this.props.cityValue}  />
                    <input type="text" name="country" placeholder="Country(Abbr)..." onChange={this.props.countryValue}  />
                </div>
                    <button onClick={this.props.fetchWeather}>Get Weather</button>
                
            </form>
        )
    }

}

export default Form