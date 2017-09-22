import React from 'react'
import axios from 'axios'
import { Button, Jumbotron } from 'react-bootstrap' 

class WeatherData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        weather: [{
          main: 'Loading weather data...',
          description: '(you may need to accept geolocation)',
          icon: ''
        }],
        main: { temp: '' }
      },
      celcius: true
    }
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get('https://fcc-weather-api.glitch.me/api/current?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude)
        .then(res => {
          const weather = res.data;
          this.setState({ weather });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  handleClick = () => {
    this.setState(prev => ({celcius: !prev.celcius}));
  }

  convertTemp = (tmp) => {
    if (this.state.celcius) {
      return tmp;
    } else {
      return (Number(tmp) * 1.8)
    }
  }

  render() {
    return(
      <div>
        <h2>{this.state.weather.weather[0].main}</h2>
        <h3>{this.state.weather.weather[0].description}</h3>
        <img src={this.state.weather.weather[0].icon} alt=''/>
        <h3>{this.convertTemp(this.state.weather.main.temp)}</h3>
        <Button onClick={this.handleClick}>{this.state.celcius ? "Celcius" : "Fahrenheit"}</Button>
      </div>
    )
  }

}

const Weather = () => (
  <div>
    <h2>Weather</h2>
    <Jumbotron>
      <WeatherData />
    </Jumbotron>
  </div>
)
export default Weather