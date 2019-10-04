import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../_actions';

import Scramble from './Scramble';
import Timer from './Timer';
import Statistics from './Statistics';
import Results from './Results';
import MoreInfo from './MoreInfo';

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
    const result = {
      time: value,
      scramble: this.state.currentScramble,
    }

    this.props.setResultAction(result);

    this.setState({
      currentScramble: createScramble(),
    });
  };


  render() {
    return (
      <div className="app">

        <Scramble currentScramble={this.state.currentScramble} />

        <div className="main">
          <Timer setResult={this.setResult} />

          <Results />

          <Statistics />
        </div>

        <MoreInfo />

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setResultAction: (result) => dispatch(actions.setResult(result)),
});

export default connect(null, mapDispatchToProps)(Main);