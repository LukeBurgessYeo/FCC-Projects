import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opp: '',
      value: '0',
      result: '0'
    }
  }

  Clear = () => {
    this.setState({
      opp: '',
      value: '0',
      result: '0'
    });
  }

  Evaluate = () => {
    if (this.state.value === '-') return;
    switch (this.state.result[0]) {
      case '*':
        this.setState(p => ({
          opp: '=',
          value: +p.result.substring(1) * +p.value,
          result: '0'
        }));
        break;
      case '/':
        this.setState(p => ({
          opp: '=',
          value: +p.result.substring(1) / +p.value,
          result: '0'
        }));
        break;
      case '+':
        this.setState(p => ({
          opp: '=',
          value: +p.result.substring(1) + +p.value,
          result: '0'
        }));
        break;
      case '-':
        this.setState(p => ({
          opp: '=',
          value: +p.result.substring(1) - +p.value,
          result: '0'
        }));
        break;
      default:
        break;
    }
  }

  updateValue = (val) => {
    if (this.state.value === '0' || this.state.opp === '=') {
      val = ((val === '.') ? '0' : '') + val;
      this.setState({
        value: val,
        opp: ''
      });
    } else if (this.state.opp !== '') {
      this.setState(p => ({
        opp: '',
        value: val,
        result: p.opp + p.value
      }));
    } else {
      this.setState(p => ({
        value: p.value + val
      }));
    }
  }

  updateOpp = (op) => {
    if (this.state.value === '0' && op === '-') {
      this.setState({ value: '-' });
    } else if (this.state.opp !== '' && op === '-') {
      this.setState(p => ({
        opp: '',
        value: '-',
        result: p.opp + p.value
      }));
    } else if (this.state.value === '0' || (this.state.value === '0' && isNaN(this.state.result[0]))) {
      return;
    } else if (this.state.opp === '') {
      this.setState({ opp: op });
    }
    if (this.state.opp === '=' || this.state.value !== '0') {
      this.Evaluate();
      this.setState({ opp: op });
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <div className="calcDisplay">
            {this.state.value} {(this.state.opp !== '=') && this.state.opp}
          </div>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            <button className="calcBtn" onClick={() => this.updateValue('7')}>7</button>
            <button className="calcBtn" onClick={() => this.updateValue('8')}>8</button>
            <button className="calcBtn" onClick={() => this.updateValue('9')}>9</button>
            <button className="calcBtn" onClick={() => this.updateOpp('/')}>/</button>
          </Col>
          <Col xs={12}>
            <button className="calcBtn" onClick={() => this.updateValue('4')}>4</button>
            <button className="calcBtn" onClick={() => this.updateValue('5')}>5</button>
            <button className="calcBtn" onClick={() => this.updateValue('6')}>6</button>
            <button className="calcBtn" onClick={() => this.updateOpp('*')}>*</button>
          </Col>
          <Col xs={12}>
            <button className="calcBtn" onClick={() => this.updateValue('1')}>1</button>
            <button className="calcBtn" onClick={() => this.updateValue('2')}>2</button>
            <button className="calcBtn" onClick={() => this.updateValue('3')}>3</button>
            <button className="calcBtn" onClick={() => this.updateOpp('-')}>-</button>
          </Col>
          <Col xs={12}>
            <button className="calcBtn" onClick={() => this.updateValue('0')}>0</button>
            <button className="calcBtn" onClick={() => this.updateValue('.')}>.</button>
            <button className="calcBtn" onClick={this.Evaluate}>=</button>
            <button className="calcBtn" onClick={() => this.updateOpp('+')}>+</button>
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