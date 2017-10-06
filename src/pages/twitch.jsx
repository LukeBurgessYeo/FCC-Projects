import React from 'react'
import axios from 'axios'
import FontAwesome from 'react-fontawesome'

class Broadcasters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
      loading: true,
      result: null
    }
  }

  componentDidMount = () => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/ESL_SC2')
      .then(result => {
        console.log(result);
        this.setState({
          result: result,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          result: "An error occoured getting Twitch streams."
        });
        console.log(err);
      });

  }

  render() {
    return (
      <div>
        <h3>Broadcasters</h3>
        {(this.state.loading) && <div style={{ "textAlign": "center", "fontSize": 56 + "px" }}><FontAwesome name='refresh' spin={true} /></div>}
        {(this.state.result !== null) && JSON.stringify(this.state.result)}
      </div>
    )
  }
}

const Twitch = () => (
  <div>
    <h2>Twitch Viewer</h2>
    <Broadcasters />
  </div>
)
export default Twitch