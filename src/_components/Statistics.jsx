import React from 'react';

import timeParse from '../_helpers/timeParse';

const Statistics = ({ results }) => {
  const time = results.map(item => item.time);
  const attemptsCount = time.length;
  const bestTime = Math.min(...time);
  const worstTime = Math.max(...time);

  const resultsWithoutMinAndMax = (time) => {
    const res = time.slice();
    const max = res.indexOf(Math.max(...res)); res.splice(max, 1);
    const min = res.indexOf(Math.min(...res)); res.splice(min, 1);

    const officialAverage = res.reduce((a, b) => (a + b), 0) / res.length;
    return officialAverage;
  }

  const officialAverage = resultsWithoutMinAndMax(time);

  const avg5 = (time) => {
    const res = time.slice();
    let all = [];
    for (let i = 0; i < res.length - 4; i++) {
      let sum = [];
      sum.push(res[i]);sum.push(res[i+1]);sum.push(res[i+2]);sum.push(res[i+3]);sum.push(res[i+4]);
      let min = sum.indexOf(Math.min(...sum)); sum.splice(min, 1);
      let max = sum.indexOf(Math.max(...sum)); sum.splice(max, 1);
      let avg = sum.reduce((a,b) => (a + b), 0) / sum.length;
      all.push(avg);
    }
    let min = Math.min(...all);
    return min
  }

  const officialAverage5 = avg5(time);

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
          avg5: {timeParse(officialAverage5)}
        </li>
        <li className="statistics__item">
          average: {timeParse(officialAverage)}
        </li>
      </ul>
    </div>
  );
};


export default Statistics;