import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../_actions';
import timeParse from '../_helpers/timeParse';

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number.isRequired,
    scramble: PropTypes.string.isRequired,
  })).isRequired,
  deleteResultAction: PropTypes.func.isRequired,
  filtersShowSingleAction: PropTypes.func.isRequired,
};
const defaultProps = {};

const Results = ({
  results,
  deleteResultAction,
  filtersShowSingleAction,
}) => {
  const resultsTime = results.map(({ time }) => time);

  return (
    <div className="results">
      <p className="results__title">Results</p>
      <ul className="results__list">
        {
          resultsTime.map((time, index) => (
            <li className="results__item" key={index}>
              <span
                className="results__value"
                role="button"
                title="more info"
                onClick={() => filtersShowSingleAction(index)}
              >
                {timeParse(time)}
              </span>
              <span
                className="results__delete"
                role="button"
                aria-label="delete"
                title="delete result"
                onClick={() => deleteResultAction(index)}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};


Results.propTypes = propTypes;
Results.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  results: state.resultsState.results,
});

const mapDispatchToProps = (dispatch) => ({
  deleteResultAction: (id) => dispatch(actions.deleteResult(id)),
  filtersShowSingleAction: (index) => dispatch(actions.filtersShowSingle(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
