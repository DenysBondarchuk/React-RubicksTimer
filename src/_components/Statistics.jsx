import React from 'react';

import timeParse from '../_helpers/timeParse';

const Statistics = ({ results }) => {

  const attemptsCount = results.length;
  const bestTime = Math.min(...results);
  const worstTime = Math.max(...results);
  const average = results.reduce((a, b) => (a + b), 0) / results.length;

  const resultsWithoutMinAndMax = (results) => {
    const res = results.slice();
    const max = res.indexOf( Math.max(...res));
    res.splice(max,1);

    const min = res.indexOf(Math.min(...res));
    res.splice(min,1);

    const officialAverage = res.reduce((a, b) => (a + b), 0) / res.length;
    return officialAverage;
  }

  const officialAverage = resultsWithoutMinAndMax(results);
  
  return (
    <div className="statistics">
      <p className="statistics__title">statistics</p>
      <p className="statistics__attempts">attempts: {attemptsCount} / {attemptsCount}</p>
      <p className="statistics__best">best time: {timeParse(bestTime)}</p>
      <p className="statistics__worst">worst time: {timeParse(worstTime)}</p>
      <p className="statistics__average-official">average official: {timeParse(officialAverage)}</p>
      <p className="statistics__average">average: {timeParse(average)}</p>
    </div>
  );
};


export default Statistics;