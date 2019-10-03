import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../_actions';

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

    this.props.setResultAction(res);

    this.setState({
      currentScramble: createScramble(),
    });
  };


  render() {
    return (
      <div className="app">

        <Scramble currentScramble={this.state.currentScramble} />

        <div className="main">
          <Timer setResult={this.setResult}/>

          <Results />

          <Statistics results={this.state.results} />
        </div>

        <Information />

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setResultAction: (result) => dispatch(actions.setResult(result)),
});

export default connect(null, mapDispatchToProps)(Main);