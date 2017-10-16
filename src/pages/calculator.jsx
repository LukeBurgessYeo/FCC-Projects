import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opp: '',
      value: '',
      result: null
    }
  }

  Clear = () => {
    this.setState({
      opp: '',
      value: '',
      result: null
    });
  }

  updateResult = () => {
    if (this.state.value === '-') {
      return;
    }
    if (this.state.result === null) {
      this.setState(p => ({
        result: +p.value
      }));
    }
    switch (this.state.opp) {
      case '*':
        this.setState(p => ({
          result: p.result * +p.value
        }));
        break;
      case '/':
        this.setState(p => ({
          result: p.result / +p.value
        }));
        break;
      case '+':
        this.setState(p => ({
          result: p.result + +p.value
        }));
        break;
      case '-':
        this.setState(p => ({
          result: p.result - +p.value
        }));
        break;
      default:
        break;
    }
  }

  updateValue = (val) => {
    if (+this.state.value === this.state.result) {
      this.setState({ value: '' });
    }
    this.setState(p => ({
      value: p.value + val
    }));
  }

  updateOpp = (op) => {
    if ((this.state.value === '' || this.state.opp !== '') && op === '-') {
      this.setState({ value: '-' });
      return;
    }
    if (this.state.value === '' && this.state.result === '0') {
      return;
    }
    this.updateResult();
    this.setState({ opp: op });
  }

  equals = () => {
    this.updateResult();
    this.setState(p => ({
      value: p.result
    }));
  }

  render() {
    const minusStyle = (this.state.opp === '-') ? ' selected' : '';
    const plusStyle = (this.state.opp === '+') ? ' selected' : '';
    const timesStyle = (this.state.opp === '*') ? ' selected' : '';
    const divideStyle = (this.state.opp === '/') ? ' selected' : '';

    return (
      <Grid>
        <Row className="show-grid">
          <div className="calcDisplay">
            {this.state.value}
          </div>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            <button className="calcBtn" onClick={() => this.updateValue('7')}>7</button>
            <button className="calcBtn" onClick={() => this.updateValue('8')}>8</button>
            <button className="calcBtn" onClick={() => this.updateValue('9')}>9</button>
            <button className={"calcBtn" + divideStyle} onClick={() => this.updateOpp('/')}>/</button>
          </Col>
          <Col xs={12}>
            <button className="calcBtn" onClick={() => this.updateValue('4')}>4</button>
            <button className="calcBtn" onClick={() => this.updateValue('5')}>5</button>
            <button className="calcBtn" onClick={() => this.updateValue('6')}>6</button>
            <button className={"calcBtn" + timesStyle} onClick={() => this.updateOpp('*')}>*</button>
          </Col>
          <Col xs={12}>
            <button className="calcBtn" onClick={() => this.updateValue('1')}>1</button>
            <button className="calcBtn" onClick={() => this.updateValue('2')}>2</button>
            <button className="calcBtn" onClick={() => this.updateValue('3')}>3</button>
            <button className={"calcBtn" + minusStyle} onClick={() => this.updateOpp('-')}>-</button>
          </Col>
          <Col xs={12}>
            <button className="calcBtn" onClick={() => this.updateValue('0')}>0</button>
            <button className="calcBtn" onClick={() => this.updateValue('.')}>.</button>
            <button className="calcBtn" onClick={this.equals}>=</button>
            <button className={"calcBtn" + plusStyle} onClick={() => this.updateOpp('+')}>+</button>
          </Col>
        </Row>
        <Row>
          <button className="clearBtn" onClick={this.Clear}>Clear</button>
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