import React from 'react';
import { connect } from 'react-redux';

import timeParse from '../_helpers/timeParse';

const Statistics = ({ results }) => {

  const resultsTime = results.map(item => item.time);
  const resultsLength = resultsTime.length;
  const bestTime = Math.min(...resultsTime);
  const worstTime = Math.max(...resultsTime);

  const resultsWithoutMinAndMax = (resultsTime) => {
    const res = resultsTime.slice();
    const max = res.indexOf(Math.max(...res)); res.splice(max, 1);
    const min = res.indexOf(Math.min(...res)); res.splice(min, 1);
    const average = res.reduce((a, b) => (a + b), 0) / res.length;
    return average;
  }
  const average = resultsWithoutMinAndMax(resultsTime);

  const bestAverageOf5 = (resultsTime) => {
    const res = resultsTime.slice();
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
  const bestAvgOf5 = bestAverageOf5(resultsTime);

  return (
    <div className="statistics">
      <p className="statistics__title">Statistics</p>
      <ul className="statistics__list">
        <li className="statistics__item">Attempts: {resultsLength} / {resultsLength}</li>
        <li className="statistics__item">best: {bestTime}</li>
        <li className="statistics__item">worst: {worstTime}</li>
        <li className="statistics__item">best avg5: {bestAvgOf5}</li>
        <li className="statistics__item">average: {average}</li>
      </ul>
    </div>
  );
};


const mapStateToProps = (state) => ({
  results: state.resultsState.results,
});

export default connect(mapStateToProps, null)(Statistics);