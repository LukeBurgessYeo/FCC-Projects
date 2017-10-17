import React from 'react'
import { Button } from 'react-bootstrap'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      time: { minutes: 25, seconds: 0 },
      counting: false,
      timer: {}
    }
  }

  increase = () => {
    this.setState(p => ({
      minutes: p.minutes + 1,
      time: {
        minutes: p.time.minutes + 1,
        seconds: p.time.seconds
      }
    }));
  }

  decrease = () => {
    this.setState(p => ({
      minutes: p.minutes - 1,
      time: {
        minutes: p.time.minutes - 1,
        seconds: p.time.seconds
      }
    }));
  }

  countDown = () => {
    if (this.state.time.minutes === 0 && this.state.time.seconds === 1) {
      this.setState({ time: { mintes: 0, seconds: 0 } });
      alert("Time Over!");
      this.stop();
      return;
    }
    if (this.state.time.seconds === 0) {
      this.setState(p => ({
        time: {
          minutes: p.time.minutes - 1,
          seconds: 60
        }
      }))
    }
    this.setState(p => ({
      time: {
        minutes: p.time.minutes,
        seconds: p.time.seconds - 1
      }
    }));
  }

  start = () => {
    this.setState({
      counting: true,
      timer: setInterval(this.countDown, 1000)
    });
  }

  stop = () => {
    this.setState(p => ({
      counting: false,
      time: {
        minutes: p.minutes,
        seconds: 0
      }
    }));
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div>
        <h2>{this.state.time.minutes}m {this.state.time.seconds}s</h2>
        <Button bsStyle="primary" onClick={this.decrease}>-</Button>
        {(this.state.counting) ?
          <Button bsStyle="primary" onClick={this.stop}>Stop</Button> :
          <Button bsStyle="primary" onClick={this.start}>Start time for: {this.state.minutes} minutes</Button>}
        <Button bsStyle="primary" onClick={this.increase}>+</Button>
      </div>
    )
  }
}

const Pomodoro = () => (
  <div>
    <h2>Pomodoro Clock</h2>
    <Clock />
  </div>
)
export default Pomodoro