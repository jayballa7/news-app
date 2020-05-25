import React, {Component} from 'react';
import axios from 'axios';
import '../styles/Weather.scss';

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: '',
            iconurl: '',
            tempInF: '',
            hum: '',
            wind: '',
        }
        this.getWeatherData=this.getWeatherData.bind(this);

    }


    componentDidMount() {
        this.getWeatherData();
      }


    getWeatherData() {
        let cityComponent = this;
        let APIKey = '16202c6e80fee5da38da3ef00e9cdf59';
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=16202c6e80fee5da38da3ef00e9cdf59&lat=${lat}&lon=${lon}`).then(data1 => {

                    let cityName = data1.data.name;

                    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`).then(data2 => {
                            var iconcode = data2.data.weather[0].icon;
                            console.log(data2);
                            cityComponent.setState({
                            cityName: cityName,
                            iconurl: "https://openweathermap.org/img/w/" + iconcode + ".png",
                            tempInF: ((data2.data.main.temp - 273.15) * 9/5 + 32).toFixed(2),
                            hum: data2.data.main.humidity,
                            wind: data2.data.wind.speed
                        }, () => {
                            console.log(cityComponent.state.tempInF)
                            console.log(cityComponent.state.hum)
                            console.log(cityComponent.state.wind)
                        })
                    })
                })
            })
        } 
        else {
            console.log("Not Available");
        }
    }
        render() {
        return(
            <div className = "weather-div">
                 <h3>{this.state.cityName}<span><img className = "weather-icon" src={this.state.iconurl} alt="Weather icon"></img></span></h3>
                    <p>Temperature: <span>{this.state.tempInF}</span> F</p>
                    <p>Humidity: <span>{this.state.hum}</span>%</p>
                    <p>Wind Speed: <span>{this.state.wind}</span> mph</p>
            </div>
        )
        }

}
export default Weather;