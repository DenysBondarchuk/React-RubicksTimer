import React, { Component } from 'react';

import Scramble from './Scramble';
import Statistics from './Statistics';
import Timer from './Timer';

import scrambleShuffle from '../_helpers/scrambleShuffle';

class Main extends Component {

  state = {
    results: [],
    run: false,
    scramble: null,
  }

  componentDidMount() {
    this.setState({
      scramble: scrambleShuffle()
    })
  }

  setResult = (value) => {
    this.setState(state => {
      // const results = state.results.push(value);
      // const results = state.results.concat(value);
      const results = [...state.results, value];
      return {
        results,
      };
    });
    this.setState({
      scramble: scrambleShuffle(),
    });
  };

  render() {
    return (
      <div className="timer">

        <Scramble scramble={this.state.scramble} />

        <div className="timer__container">

          <Timer setResult={this.setResult} />

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