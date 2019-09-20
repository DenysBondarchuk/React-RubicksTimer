import React, { Component } from 'react';

import Scramble from './Scramble';
import Statistics from './Statistics';

import scrambleShuffle from '../_helpers/scrambleShuffle';

class Main extends Component {

  state = {
    results: [],
    seconds: 0,
    milliseconds: 0,
    run: false,
    scramble: null,
  }

  componentDidMount() {
    this.setState({
      scramble: scrambleShuffle()
    })
  }

  tick = () => {
    this.setState({
      milliseconds: this.state.milliseconds + 1,
    })
  };

  startTimer = () => {
    this.timer = setInterval(this.tick, 10);
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleKeyClick = (e) => {
    if(e.keyCode === 32 && this.state.run === false) {
      this.setState({
        milliseconds: 0,
      });
      this.startTimer();
      this.setState({
        run: true,
      });
    }
    else if (this.state.run === true) {
      this.stopTimer();

      this.setState(state => {
        const results = state.results.concat(state.milliseconds);
        return {
          results
        }
      })

      this.setState({
        run: false,
        scramble: scrambleShuffle(),
      })
    }
  }

  render() {
    const {
      seconds,
      milliseconds,
    } = this.state;
    return (
      <div className="timer">

        <Scramble scramble={this.state.scramble} />

        <div className="timer__container">

          <div className="timer__main" onKeyDown={this.handleKeyClick} tabIndex="0" >
            <div className="timer__run">{seconds}:{milliseconds}</div>
          </div>

          <div className="timer__results">
            {
              this.state.results.map((item, index) => {
                return <p className="timer__result" key={index}>{item}</p>;
              })
            }
          </div>

          <Statistics />

        </div>

      </div>
    );
  }
}

export default Main;