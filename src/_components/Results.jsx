import React from 'react';
import { connect } from 'react-redux';
import actions from '../_actions';

const Results = ({results, deleteResultAction, filtersShowSingleAction}) => {
  const resultsTime = results.results.map(item => item.time);
  
  return (
    <div className="results">
      <p className="results__title">Results</p>
      <ul className="results__list">
        {resultsTime.map((item, index) => {
          return <li className="results__item" key={index}>
            <p className="results__value" onClick={() => filtersShowSingleAction(index)}>{item}</p>
            <span  className="results__delete" onClick={(e) => deleteResultAction(index)}></span>
          </li>
          })
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  results: state.resultsState,
});

const mapDispatchToProps = (dispatch) => ({
  deleteResultAction: (id) => dispatch(actions.deleteResult(id)),
  filtersShowSingleAction: (index) => dispatch(actions.filtersShowSingle(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);