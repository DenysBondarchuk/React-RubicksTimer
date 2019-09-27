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
    showScramble: [],
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
    const scrumbleList = this.state.scrumbleList.filter((_, i) => i !== index);
    this.setState({
      results,
      scrumbleList,
    });
  }

  showOne = (index) => {
    const scramble = this.state.scrumbleList[index];

    this.setState({
      showScramble: [scramble],
    })
  }

  showAll = () => {
    let scramble = this.state.scrumbleList;
    console.log(scramble);

    this.setState({
      showScramble: [scramble],
    })
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
            showOne={this.showOne}
          />

          <Statistics results={this.state.results} />

        </div>

        {/* {
          this.state.scrumbleList.map((item, index) => {
            return <div key={index}>
              {item}
            </div>;
          })
        } */}

        {
          <div>
            <p>show best / show worst / show best of 5 / <span onClick={this.showAll}>show all</span></p>
            {/* <p>{this.state.showScramble}</p> */}
            {
              this.state.showScramble.map((item, index) => {
                return <div key={index}>
                  {item}
                </div>;
              })
            }
          </div>
        }

      </div>
    );
  }
}

export default Main;