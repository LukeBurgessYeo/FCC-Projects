import React from 'react'
import axios from 'axios'
import FontAwesome from 'react-fontawesome'
import { Button, ButtonToolbar, Jumbotron } from 'react-bootstrap'

class NewQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {},
      url: "#"
    }
  }

  getQuote = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json`)
      .then(res => {
        const auth = res.data.author;
        const cont = res.data.quote;
        this.setState(prev => ({
          quote: {
              content: cont,
              author: auth
            },
            url: "https://twitter.com/home/?status=" + cont + " (" + auth + ")"
          }));
      });
  }

  componentDidMount = () => {
    this.getQuote();
  }

  handleClick = () => {
    this.getQuote();
  }

  render () {
    return (
      <div>
        <h3><FontAwesome name='quote-left' /> {this.state.quote.content} <FontAwesome name='quote-right' /></h3>
        <h4>- {this.state.quote.author}</h4>
        <br />
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.handleClick}>New Quote</Button>
          <Button bsStyle="primary" href={this.state.url}><FontAwesome name='twitter' /> Tweet</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

const Quote = () => (
  <div>
    <h2>Quote Machine</h2>
    <Jumbotron>
      <NewQuote />
    </Jumbotron>
  </div>
)
export default Quote