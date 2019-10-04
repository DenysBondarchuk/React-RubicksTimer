import React, { Component } from 'react';

import timeParse from '../_helpers/timeParse';

class Timer extends Component {

  state = {
    timerOn: false,
    timerCan: true,
    ms: 0,
  }

  tick = () => {
    this.setState({
      ms: this.state.ms + 10,
    })
  }

  startTimer = () => {
    this.timer = setInterval(this.tick, 10);
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleOnKeyUp = (e) => {
    if (e.keyCode === 32 && !this.state.timerOn && this.state.timerCan) {
      this.setState({
        timerOn: true,
        timerCan: false,
        ms: 0,
      })
      this.startTimer();
    }
  }

  handleOnKeyDown = () => {
    if (this.state.timerOn && !this.state.timerCan) {
      this.stopTimer();

      this.props.setResult(this.state.ms);

      this.setState({ timerOn: false });

      setTimeout(() => {
        this.setState({ timerCan: true });
      }, 1000)
    }
  }

  render() {
    const time = timeParse(this.state.ms);

    return (
      <div
        className="timer"
        onKeyDown={this.handleOnKeyDown}
        onKeyUp={this.handleOnKeyUp}
      >
        <p className="timer__title">Timer</p>
        <div className="timer__container" tabIndex="0">
          <p className="timer__value">{time}</p>
        </div>
      </div>
    );
  }
}

export default Timer;