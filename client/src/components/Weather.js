import React, {Component} from 'react';
import axios from 'axios';
import '../styles/Weather.scss';

class Weather extends Component {
    state = {
        iconurl: '',
        tempInF: '',
        hum: '',
        wind: ''
    }
    
    APIKey = "16202c6e80fee5da38da3ef00e9cdf59";
    cityName = "Seattle";

    data = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.APIKey}`).then(data => {
            console.log(data);
            var iconcode = data.data.weather[0].icon;

            this.setState({
                iconurl: "https://openweathermap.org/img/w/" + iconcode + ".png",
                tempInF: ((data.data.main.temp - 273.15) * 9/5 + 32).toFixed(2),
                hum: data.data.main.humidity,
                wind: data.data.wind.speed
            }, () => {
                console.log(this.state.tempInF)
                console.log(this.state.hum)
                console.log(this.state.wind)
            })
        }
        );
        render() {
        return(
            <div className = "weather-div">
                 <h3>{this.cityName}<span><img className = "weather-icon" src={this.state.iconurl} alt="Weather icon"></img></span></h3>
                 {/* <h3>{this.cityName}</h3>
                 <img className = "weather-icon" src={this.state.iconurl} alt="Weather icon"></img> */}
                    <p>Temperature: <span>{this.state.tempInF}</span> F</p>
                    <p>Humidity: <span>{this.state.hum}</span>%</p>
                    <p>Wind Speed: <span>{this.state.wind}</span> mph</p>
            </div>
        )
        }

}
export default Weather;