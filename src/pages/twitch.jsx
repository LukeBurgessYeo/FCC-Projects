import React from 'react'
import axios from 'axios'
import FontAwesome from 'react-fontawesome'
import { Button } from 'react-bootstrap'

class Broadcasters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
      loading: true,
      result: []
    }
  }

  getStreams = () => {
    this.setState({
      loading: true,
      result: []
    });
    this.state.streams.forEach(stream => {
      axios
        .get('https://api.twitch.tv/kraken/streams/' + stream + '?client_id=ht7j8oqlzyu29r9mpn3tqlp4xii7zl')
        .then(res => {
          this.setState(prev => ({
            result: [...prev.result, { title: stream, data: res.data }]
          }));
        })
        .catch(err => {
          this.setState({
            loading: false,
            result: "An error occoured getting Twitch streams."
          });
          console.log(err);
        });
    })
    this.setState({ loading: false });
  }

  componentDidMount = () => {
    this.getStreams();
  }

  render() {
    return (
      <div>
        <Button onClick={this.getStreams}>Refresh</Button>
        {(this.state.loading) && <div style={{ "textAlign": "center", "fontSize": 56 + "px" }}><FontAwesome name='refresh' spin={true} /></div>}
        {(this.state.result.length === this.state.streams.length) && this.state.result.map((value, index) => (
          <div className="wikiWrap" key={index}>
            <a className="wikiCard" href={"https://twitch.tv/" + value.title} target="_blank">
              {(value.data.stream) ?
                <div>
                  <h3>{value.data.stream.channel.display_name}</h3>
                  <p>{value.data.stream.game}</p>
                  <h4>{value.data.stream.channel.status}</h4>
                </div> :
                <div>
                  <h3>{value.title}</h3>
                  <p>Offline</p>
                </div>}
            </a>
          </div>
        ))}
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