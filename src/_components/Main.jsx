import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Scramble from './Scramble';
import Timer from './Timer';
import Statistics from './Statistics';
import Results from './Results';
import MoreInfo from './MoreInfo';

import actions from '../_actions';
import createScramble from '../_helpers/createScramble';

const propTypes = {
  setResultAction: PropTypes.func.isRequired,
};
const defaultProps = {};


class Main extends Component {
  state = {
    currentScramble: null,
  }

  componentDidMount() {
    this.setState({
      currentScramble: createScramble(),
    });
  }

  setResult = (value) => {
    const result = {
      time: value,
      scramble: this.state.currentScramble,
    };

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

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch) => ({
  setResultAction: (result) => dispatch(actions.setResult(result)),
});

export default connect(null, mapDispatchToProps)(Main);
