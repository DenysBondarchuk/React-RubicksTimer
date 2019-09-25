import React from 'react';

import timeParse from '../_helpers/timeParse';

const Results = ({ results, deleteResult }) => {

  return (
    <div className="timer__results">
      {
        results.map((item, index) => {
          return <div className="timer__result" key={index} onClick={() => deleteResult(index)}>
            {timeParse(item)}
          </div>;
        })
      }
    </div>
  );
};


export default Results;