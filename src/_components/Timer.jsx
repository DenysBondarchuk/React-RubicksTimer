import React, { Component } from 'react';
import PropTypes from 'prop-types';

import timeParse from '../_helpers/timeParse';

const propTypes = {
  setResult: PropTypes.func.isRequired,
};
const defaultProps = {};

class Timer extends Component {
  state = {
    timerOn: false,
    timerCan: true,
    ms: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState(({ ms }) => ({ ms: ms + 10 }));
  }

  startTimer = () => {
    this.timer = setInterval(this.tick, 10);
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  handleOnKeyUp = (e) => {
    if (e.keyCode === 32 && !this.state.timerOn && this.state.timerCan) {
      this.setState({
        timerOn: true,
        timerCan: false,
        ms: 0,
      });
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
      }, 1000);
    }
  }

  render() {
    const time = timeParse(this.state.ms);

    return (
      <div
        className="timer"
        role="textbox"
        tabIndex="0"
        onKeyDown={this.handleOnKeyDown}
        onKeyUp={this.handleOnKeyUp}
      >
        <p className="timer__title">Timer</p>
        <div className="timer__container">
          <p className="timer__value">{time}</p>
        </div>
      </div>
    );
  }
}


Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;

export default Timer;
