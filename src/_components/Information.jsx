import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../_actions';
import timeParse from '../_helpers/timeParse';

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filters: PropTypes.shape({
    all: PropTypes.bool.isRequired,
    single: PropTypes.bool.isRequired,
    best: PropTypes.bool.isRequired,
    worst: PropTypes.bool.isRequired,
    bestAvg5: PropTypes.bool.isRequired,
  }).isRequired,
  filtersShowAllAction: PropTypes.func.isRequired,
  filtersShowBestAction: PropTypes.func.isRequired,
  filtersShowWorstAction: PropTypes.func.isRequired,
  filtersShowAvg5Action: PropTypes.func.isRequired,
  single: PropTypes.number,
};
const defaultProps = {
  single: null,
};


const Information = ({
  results,
  filters,
  filtersShowAllAction,
  filtersShowBestAction,
  filtersShowWorstAction,
  filtersShowAvg5Action,
  single,
}) => {
  const filterForResults = (resultsTime) => {
    if (filters.all) {
      return results;
    }
    if (filters.single) {
      const result = results.filter((_, i) => i === single);
      return result;
    }
    if (filters.best) {
      const index = resultsTime.indexOf(Math.min(...resultsTime));
      const result = results.filter((_, i) => i === index);
      return result;
    }
    if (filters.worst) {
      const index = resultsTime.indexOf(Math.max(...resultsTime));
      const result = results.filter((_, i) => i === index);
      return result;
    }
    if (filters.bestAvg5) {
      const res = resultsTime.slice();
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
      const indexOfMin = all.indexOf(Math.min(...all));
      const info = results.slice(indexOfMin, indexOfMin + 5);
      return info;
    }
    return false;
  };
  const resultsTime = results.map(({ time }) => time);
  const filteredResults = filterForResults(resultsTime);

  return (
    <div className="information__container">
      <ul className="information__nav">
        <li className="information__link" role="menuitem" onClick={() => filtersShowBestAction()}>Best</li>
        <li className="information__link" role="menuitem" onClick={() => filtersShowWorstAction()}>Worst</li>
        <li className="information__link" role="menuitem" onClick={() => filtersShowAvg5Action()}>Avg5</li>
        <li className="information__link" role="menuitem" onClick={() => filtersShowAllAction()}>All</li>
      </ul>
      <ul className="information__list">
        {
          filteredResults && filteredResults.map(({ time, scramble }, index) => (
            <li className="information__item" key={index}>
              <span className="information__index">{index + 1}. </span>
              <span className="information__value">{timeParse(time)} - </span>
              <span className="information__value">{scramble}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Information.propTypes = propTypes;
Information.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  results: state.resultsState.results,
  filters: state.resultsState.filters,
  single: state.resultsState.single,
});

const mapDispatchToProps = (dispatch) => ({
  filtersShowAllAction: () => dispatch(actions.filtersShowAll()),
  filtersShowBestAction: () => dispatch(actions.filtersShowBest()),
  filtersShowWorstAction: () => dispatch(actions.filtersShowWorst()),
  filtersShowAvg5Action: () => dispatch(actions.filtersShowAvg5()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Information);
