import React from 'react';
import { connect } from 'react-redux';
import actions from '../_actions';

import timeParse from '../_helpers/timeParse';

const Results = ({
  results,
  deleteResultAction,
  filtersShowSingleAction
}) => {
  const resultsTime = results.map(({ time }) => time);

  return (
    <div className="results">
      <p className="results__title">Results</p>
      <ul className="results__list">
        {
          resultsTime.map((item, index) => (
            <li className="results__item" key={index}>
              <p
                className="results__value"
                title="more info"
                onClick={() => filtersShowSingleAction(index)}
              >
                {timeParse(item)}
              </p>
              <span
                className="results__delete"
                title="delete result"
                onClick={(e) => deleteResultAction(index)}
              ></span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  results: state.resultsState.results,
});

const mapDispatchToProps = (dispatch) => ({
  deleteResultAction: (id) => dispatch(actions.deleteResult(id)),
  filtersShowSingleAction: (index) => dispatch(actions.filtersShowSingle(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);