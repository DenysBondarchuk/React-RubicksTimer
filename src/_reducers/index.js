import { combineReducers } from 'redux';

import resultsState from './results.reducers';

const rootReducer = combineReducers({
  resultsState,
});

export default rootReducer;
