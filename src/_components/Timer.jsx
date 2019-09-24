import React, { Component } from 'react';

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
    // console.log('keyUp');
  }

  handleOnKeyDown = () => {
    if (this.state.timerOn && !this.state.timerCan) {
      this.stopTimer();
      this.props.setResult(this.state.ms);
      
      this.setState({timerOn: false});

      setTimeout(() => {
        this.setState({timerCan: true});
      }, 1000)
    } 
    // console.log('keyDown');
  }

  timeParse = (duration) => {

    let milliseconds = parseInt((duration%1000)/10);
    let seconds = parseInt((duration/1000)%60);
    let minutes = parseInt((duration/(1000*60))%60);
    let hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    return `${hours}:${minutes}:${seconds}:${milliseconds}`
  }

  render() {

    // let duration = this.state.ms;

    // let milliseconds = parseInt((duration%1000)/10);
    // let seconds = parseInt((duration/1000)%60);
    // let minutes = parseInt((duration/(1000*60))%60);
    // let hours = parseInt((duration/(1000*60*60))%24);

    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // seconds = (seconds < 10) ? "0" + seconds : seconds;
    // milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    return (
      <div 
        className="timer"
        tabIndex="0" 
        onKeyDown={this.handleOnKeyDown}
        onKeyUp={this.handleOnKeyUp}
      >
        {/* {`${hours}:${minutes}:${seconds}:${milliseconds}`} */}
        {this.timeParse(this.state.ms)}
      </div>
    );
  }
}

export default Timer;