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

    return (
      <div
        className="timer"
        tabIndex="0"
        onKeyDown={this.handleOnKeyDown}
        onKeyUp={this.handleOnKeyUp}
      >
        {timeParse(this.state.ms)}
      </div>
    );
  }
}

export default Timer;