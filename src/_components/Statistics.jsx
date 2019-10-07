import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import timeParse from '../_helpers/timeParse';

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number.isRequired,
    scramble: PropTypes.string.isRequired,
  })).isRequired,
};
const defaultProps = {};


const Statistics = ({ results }) => {
  const resultsTime = results.map(({ time }) => time);
  const resultsLength = resultsTime.length;
  const bestTime = Math.min(...resultsTime);
  const worstTime = Math.max(...resultsTime);

  const resultsWithoutMinAndMax = (resultsTimeArr) => {
    const res = resultsTimeArr.slice();
    const max = res.indexOf(Math.max(...res)); res.splice(max, 1);
    const min = res.indexOf(Math.min(...res)); res.splice(min, 1);
    const average = res.reduce((a, b) => (a + b), 0) / res.length;
    return average;
  };
  const average = resultsWithoutMinAndMax(resultsTime);

  const bestAverageOf5 = (resultsTimeArr) => {
    const res = resultsTimeArr.slice();
    const all = [];
    for (let i = 0; i < res.length - 4; i += 1) {
      const sum = [];
      for (let j = 0; j < 5; j += 1) {
        sum.push(res[i + j]);
      }
      const min = sum.indexOf(Math.min(...sum)); sum.splice(min, 1);
      const max = sum.indexOf(Math.max(...sum)); sum.splice(max, 1);
      const avg = sum.reduce((a, b) => (a + b), 0) / sum.length;
      all.push(avg);
    }
    const min = Math.min(...all);
    return min;
  };
  const bestAvgOf5 = bestAverageOf5(resultsTime);

  const [
    ShowBestTime,
    ShowWorstTime,
    ShowBestAvgOf5,
    ShowAverage,
  ] = [timeParse(bestTime), timeParse(worstTime), timeParse(bestAvgOf5), timeParse(average)];

  return (
    <div className="statistics">
      <p className="statistics__title">Statistics</p>
      <ul className="statistics__list">
        <li className="statistics__item">Attempts: {resultsLength} / {resultsLength}</li>
        <li className="statistics__item">best: {ShowBestTime}</li>
        <li className="statistics__item">worst: {ShowWorstTime}</li>
        <li className="statistics__item">best avg5: {ShowBestAvgOf5}</li>
        <li className="statistics__item">average: {ShowAverage}</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = propTypes;
Statistics.defaultProps = defaultProps;


const mapStateToProps = (state) => ({
  results: state.resultsState.results,
});

export default connect(mapStateToProps, null)(Statistics);
