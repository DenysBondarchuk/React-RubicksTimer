import React, { Component } from 'react';

import Scramble from './Scramble';
import Statistics from './Statistics';
import Timer from './Timer';

import scrambleShuffle from '../_helpers/scrambleShuffle';
import Results from './Results';

class Main extends Component {

  state = {
    results: [],
    scrumbleList: [],
    run: false,
    scramble: null,
  }

  componentDidMount() {
    this.setState({
      scramble: scrambleShuffle(),
    })
  }

  setResult = (value) => {
    this.setState(state => {
      const results = [...state.results, value];
      const scrumbleList = [...state.scrumbleList, state.scramble];
      return {
        results,
        scrumbleList,
      };
    });
    this.setState({
      scramble: scrambleShuffle(),
    });
  };

  deleteResult = (index) => {
    const results = this.state.results.filter((_, i) => i !== index);
    this.setState({ results });
  }

  render() {
    return (
      <div className="timer">

        <Scramble scramble={this.state.scramble} />

        <div className="timer__container">

          <Timer setResult={this.setResult} />

          <Results
            results={this.state.results}
            deleteResult={this.deleteResult}
          />

          <Statistics results={this.state.results} />

        </div>

        {
          this.state.scrumbleList.map((item, index) => {
            return <div key={index}>
              {item}
            </div>;
          })
        }

      </div>
    );
  }
}

export default Main;