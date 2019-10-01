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
    number: [],
  }

  componentDidMount() {
    this.setState({
      currentScramble: createScramble(),
    })
  }

  setResult = (value) => {
    const res = {
      time: value,
      scramble: this.state.currentScramble,
    }

    this.setState({
      results: [...this.state.results, res ],
      currentScramble: createScramble(),
    });
  };

  deleteResult = (index) => {
    const results = this.state.results.filter((_, i) => i !== index);
    this.setState({
      results,
    });
  }


  render() {
    return (
      <div className="app">

        <Scramble currentScramble={this.state.currentScramble} />

        <div className="main">
          <Timer setResult={this.setResult} />

          <Results
            results={this.state.results}
            deleteResult={this.deleteResult}
          />

          <Statistics results={this.state.results} />
        </div>

        <Information
          results={this.state.results}
          number={this.state.number}
        />

      </div>
    );
  }
}

export default Main;