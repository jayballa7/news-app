import React from 'react';
import '../styles/Weather.scss';

class Weather extends React.Component{

    constructor() {
        super()
        this.state={
            // email:null,
            // uid:'',
            // categories:false,
            // news:[],
            // loggedInArticles:[],
            City: '',
            Temperature: '',
            Humidity: '',
            Windspeed: '',
            APIKey:'775f213dfab0fee9670d3eb1a19750f0'

        }
        // this.logout = this.logout.bind(this)
        // this.displayName=this.displayName.bind(this)
        // this.fillPage=this.fillPage.bind(this)
        // this.handleSignup = this.handleSignup.bind(this)
    }
}
export default Weather;