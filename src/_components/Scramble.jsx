import React from 'react';

const Scramble = ({scramble}) => {
  return (
    <div className="scramble">
      <p className="scramble__name">scramble:</p>
      <p className="scramble__value">{ scramble }</p>
    </div>
  );
};


export default Scramble;