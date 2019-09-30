import React from 'react';

const Scramble = ({ currentScramble }) => {
  return (
    <div className="scramble">
      <span className="scramble__title">scramble: </span>
      <span className="scramble__value">{currentScramble}</span>
    </div>
  );
};

export default Scramble;