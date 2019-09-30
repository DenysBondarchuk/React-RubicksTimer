import React from 'react';

import timeParse from '../_helpers/timeParse';

const Statistics = ({ results }) => {

  const attemptsCount = results.length;
  const bestTime = Math.min(...results);
  const worstTime = Math.max(...results);
  const average = results.reduce((a, b) => (a + b), 0) / results.length;

  const resultsWithoutMinAndMax = (results) => {
    const res = results.slice();
    const max = res.indexOf(Math.max(...res)); res.splice(max, 1);
    const min = res.indexOf(Math.min(...res)); res.splice(min, 1);

    const officialAverage = res.reduce((a, b) => (a + b), 0) / res.length;
    return officialAverage;
  }

  const officialAverage = resultsWithoutMinAndMax(results);

  return (
    <div className="statistics">
      <p className="statistics__title">Statistics</p>
      <ul className="statistics__list">
        <li className="statistics__item">
          attempts: {attemptsCount} / {attemptsCount}
        </li>
        <li className="statistics__item">
          best time: {timeParse(bestTime)}
        </li>
        <li className="statistics__item">
          worst time: {timeParse(worstTime)}
        </li>
        <li className="statistics__item">
          average official: {timeParse(officialAverage)}
        </li>
        <li className="statistics__item">
          average: {timeParse(average)}
        </li>
      </ul>
    </div>
  );
};


export default Statistics;