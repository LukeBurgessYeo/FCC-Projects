import React from 'react'
import axios from 'axios'
import FontAwesome from 'react-fontawesome'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

class SearchWiki extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searching: false,
      value: ''
    }
  }

  search = () => {
    this.setState({ searching: true })
    axios
      .get('https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=200&search=' + this.state.value + '&callback=?')
      .then(result => {
        this.setState({
          result: JSON.parse(result.data.substring(5, result.data.length - 1)),
          searching: false,
          value: ''
        });
      })
      .catch(err => {
        this.setState({ searching: false });
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    let cards = [];
    if (this.state.result !== null) {
      for (let i = 0; i < this.state.result[1].length; i++) {
        const title = this.state.result[1][i];
        const summary = this.state.result[2][i];
        const hlink = this.state.result[3][i];
        cards = [...cards, { title, summary, hlink }];
      }
    }
    return (
      <div>
        <form onSubmit={e => { e.preventDefault(); }}>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              disabled={this.state.searching}
              value={this.state.value}
              placeholder="Search Wikipedia"
              onChange={this.handleChange}
              onKeyPress={event => {
                (event.key === "Enter") && this.search();
              }}
            />
          </FormGroup>
        </form>
        {(this.state.searching) && <div style={{ "textAlign": "center", "fontSize": 56 + "px" }}><FontAwesome name='refresh' spin={true} /></div>}
        {cards.map((value, index) => (
          <div className="wikiWrap" key={index}>
            <a className="wikiCard" href={value.hlink} target="_blank">
              <h3>{value.title}</h3>
              <p>{value.summary}</p>
            </a>
          </div>
        ))}
      </div>
    )
  }
}

const Wikipedia = () => (
  <div>
    <h2>Wikipedia Viewer</h2>
    <Button target="_blank" href="https://en.wikipedia.org/wiki/Special:Random">Random Article</Button>
    <br />
    <br />
    <SearchWiki />
  </div>
)
export default Wikipedia