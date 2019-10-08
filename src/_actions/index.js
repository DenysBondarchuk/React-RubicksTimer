import { RESULTS, FILTERS } from '../_constants/constants';


const setResult = (result) => (dispatch) => (
  dispatch({ type: RESULTS.SET_RESULT, payload: result })
);

const deleteResult = (index) => (dispatch) => {
  dispatch({ type: RESULTS.DELETE_RESULT, payload: index });
};

const filtersShowAll = () => (dispatch) => (
  dispatch({ type: FILTERS.SHOW__ALL })
);

const filtersShowBest = () => (dispatch) => (
  dispatch({ type: FILTERS.SHOW__BEST })
);

const filtersShowWorst = () => (dispatch) => (
  dispatch({ type: FILTERS.SHOW__WORST })
);

const filtersShowAvg5 = () => (dispatch) => (
  dispatch({ type: FILTERS.SHOW__AVG5 })
);


const filtersShowSingle = (index) => (dispatch) => (
  dispatch({ type: FILTERS.SHOW__SINGLE, payload: index })
);


export default {
  setResult,
  deleteResult,
  filtersShowAll,
  filtersShowBest,
  filtersShowWorst,
  filtersShowAvg5,
  filtersShowSingle,
};
