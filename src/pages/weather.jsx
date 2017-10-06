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
    this.setState(prev => ({ celcius: !prev.celcius }));
  }

  convertTemp = (tmp) => {
    return (this.state.celcius) ? tmp : (Number(tmp) * 1.8).toFixed(2);
  }

  render() {
    return (
      <div>
        <h2>{this.state.weather.weather[0].main}</h2>
        <h3>{this.state.weather.weather[0].description}</h3>
        <img src={this.state.weather.weather[0].icon} alt='' />
        <h3>{this.convertTemp(this.state.weather.main.temp)} {(this.state.weather.main.temp !== '') && (this.state.celcius ? "C" : "F")}</h3>
        {(this.state.weather.main.temp !== '') && <Button onClick={this.handleClick}>Change Units</Button>}
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