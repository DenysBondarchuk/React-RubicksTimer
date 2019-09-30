import React, { Component } from 'react';

import Scramble from './Scramble';
import Timer from './Timer';
import Statistics from './Statistics';
import Results from './Results';
import Information from './Information';

import createScramble from '../_helpers/createScramble';

class Main extends Component {

  state = {
    currentScramble: null,
    results: [],
  }

  componentDidMount() {
    this.setState({
      currentScramble: createScramble(),
    })
  }

  setResult = (value) => {
    const res = {
      time: value,
      currentScramble: this.state.currentScramble,
    }

    this.setState({
      results: [...this.state.results, res ],
      currentScramble: createScramble(),
    });
  };


  render() {
    return (
      <div className="app">

        <Scramble currentScramble={this.state.currentScramble} />

        <div className="main">
          <Timer setResult={this.setResult} />

          <Results
            results={this.state.results}
          />

          <Statistics results={this.state.results} />
        </div>

        <Information />

      </div>
    );
  }
}

export default Main;