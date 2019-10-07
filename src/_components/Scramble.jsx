import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentScramble: PropTypes.string,
};
const defaultProps = {
  currentScramble: null,
};

const Scramble = ({ currentScramble }) => (
  <div className="scramble">
    <span className="scramble__title">scramble: </span>
    <span className="scramble__value">{currentScramble}</span>
  </div>
);

Scramble.propTypes = propTypes;
Scramble.defaultProps = defaultProps;

export default Scramble;
