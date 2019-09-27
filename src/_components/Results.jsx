import React from 'react';

import timeParse from '../_helpers/timeParse';

const Results = ({ results, deleteResult, showOne }) => {

  return (
    <div className="timer__results">
      {
        results.map((item, index) => {
          return <div className="timer__result" key={index}>
            <span className="timer__value">{timeParse(item)}</span> / 
            <span className="show" onClick={() => showOne(index)}>show</span> / 
            <span className="delete" onClick={() => deleteResult(index)}>delete</span>
          </div>;
        })
      }
    </div>
  );
};


export default Results;