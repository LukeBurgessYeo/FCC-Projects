import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: 0
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {this.state.result}
        </Row>
        <Row>
          <Button bsStyle="primary">Clear</Button>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            <Button bsStyle="primary">7</Button>
            <Button bsStyle="primary">8</Button>
            <Button bsStyle="primary">9</Button>
            <Button bsStyle="primary">/</Button>
          </Col>
          <Col xs={12}>
            <Button bsStyle="primary">4</Button>
            <Button bsStyle="primary">5</Button>
            <Button bsStyle="primary">6</Button>
            <Button bsStyle="primary">*</Button>
          </Col>
          <Col xs={12}>
            <Button bsStyle="primary">1</Button>
            <Button bsStyle="primary">2</Button>
            <Button bsStyle="primary">3</Button>
            <Button bsStyle="primary">-</Button>
          </Col>
          <Col xs={12}>
            <Button bsStyle="primary">0</Button>
            <Button bsStyle="primary">.</Button>
            <Button bsStyle="primary">=</Button>
            <Button bsStyle="primary">+</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const Calculator = () => (
  <div style={{ "textAlign": "center" }}>
    <h2>ReactJS Calculator</h2>
    <Calc />
  </div>
)
export default Calculator