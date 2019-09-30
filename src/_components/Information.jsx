import React from 'react';

import timeParse from '../_helpers/timeParse';

const Information = () => {

  return (
    <div className="information">
      <p className="information__title">More info</p>
      <div className="information__container">
        <ul className="information__nav">
          <li className="information__link">Single</li>
          <li className="information__link">Best</li>
          <li className="information__link">Worst</li>
          <li className="information__link">Avg5</li>
          <li className="information__link">All</li>
        </ul>
        <ul className="information__list">
          <li className="information__item">
            <span className="information__count">-</span>
            <span className="information__time">-</span>
            <span className="information__scramble">-</span>
          </li>
        </ul>
      </div>
    </div>
  );

};

export default Information;