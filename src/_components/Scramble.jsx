import React from 'react';

const Scramble = ({scramble}) => {
  return (
    <div className="scramble">
      <span className="scramble__name">scramble: </span>
      <span className="scramble__value">{ scramble }</span>
    </div>
  );
};


export default Scramble;