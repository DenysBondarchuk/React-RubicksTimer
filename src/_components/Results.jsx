import React from 'react';

import timeParse from '../_helpers/timeParse';

const Results = ({ results }) => {

  const resultsTime = results.map(item => item.time);

  return (
    <div className="results">
      <p className="results__title">Results</p>
      <ul className="results__list">
        {resultsTime.map((item, index) => {
          return <li className="results__item" key={index}>
            <p className="results__value">{timeParse(item)}</p>
            <span className="results__delete"></span>
          </li>
        })
        }
      </ul>
    </div>
  );
};


export default Results;