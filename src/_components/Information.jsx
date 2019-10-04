import React from 'react';
import { connect } from 'react-redux';
import actions from '../_actions';

import timeParse from '../_helpers/timeParse';

const Information = ({
  results,
  filters,
  filtersShowAllAction,
  filtersShowBestAction,
  filtersShowWorstAction,
  filtersShowAvg5Action,
  single,
}) => {

  const resultsTime = results.map(item => item.time);
  const filterForResults = (resultsTime) => {
    if (filters.all) {
      return results
    }
    else if (filters.single) {
      const result = results.filter((_, i) => i === single);
      return result
    }
    else if (filters.best) {
      const index = resultsTime.indexOf(Math.min(...resultsTime));
      const result = results.filter((_, i) => i === index);
      return result
    }
    else if (filters.worst) {
      const index = resultsTime.indexOf(Math.max(...resultsTime));
      const result = results.filter((_, i) => i === index);
      return result
    }
    else if (filters.bestAvg5) {
      const res = resultsTime.slice();
      let all = [];
      for (let i = 0; i < res.length - 4; i++) {
        let sum = [];
        sum.push(res[i]); sum.push(res[i + 1]); sum.push(res[i + 2]); sum.push(res[i + 3]); sum.push(res[i + 4]);
        let min = sum.indexOf(Math.min(...sum)); sum.splice(min, 1);
        let max = sum.indexOf(Math.max(...sum)); sum.splice(max, 1);
        let avg = sum.reduce((a, b) => (a + b), 0) / sum.length;
        all.push(avg);
      }
      let indexOfMin = all.indexOf(Math.min(...all));
      let info = results.slice(indexOfMin, indexOfMin + 5);
      return info
    }
  }
  const filteredResults = filterForResults(resultsTime);

  return (
    <div className="information__container">
      <ul className="information__nav">
        <li className="information__link" onClick={() => filtersShowBestAction()}>Best</li>
        <li className="information__link" onClick={() => filtersShowWorstAction()}>Worst</li>
        <li className="information__link" onClick={() => filtersShowAvg5Action()}>Avg5</li>
        <li className="information__link" onClick={() => filtersShowAllAction()}>All</li>
      </ul>
      <ul className="information__list">
        {filteredResults && filteredResults.map((item, index) => {
          return <li className="information__item" key={index}>
            <span className="information__index">{index + 1}. </span>
            <span className="information__value">{timeParse(item.time)} - </span>
            <span className="information__value">{item.scramble}</span>
          </li>
        })
        }
      </ul>
    </div>
  );
}

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