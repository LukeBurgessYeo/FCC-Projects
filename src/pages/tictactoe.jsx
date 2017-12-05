import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      coord: {
        x: 0,
        y: 0
      }
    };
  }

  Choose = () => {
    this.setState(p => ({
      value: "X",
      coord: p.coord
    }));
  }

  render() {
    return (
      <div
        className={(this.state.value === "" ? "xoBoxHover " : "") + "xoBox"}
        onClick={this.Choose}>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

const TicTacToe = () => (
  <div>
    <h2>Tic Tac Toe!</h2>
    <Grid>
      {[0, 1, 2].map(i => (
        <Row key={i} className="show-grid text-center">
          <Col xs={1}>
            <Box />
          </Col>
          <Col xs={1}>
            <Box />
          </Col>
          <Col xs={1}>
            <Box />
          </Col>
        </Row>))}
    </Grid>
  </div>
)
export default TicTacToe