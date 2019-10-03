import { RESULTS } from '../_constants/constants';
import { FILTERS } from '../_constants/constants';

const initialState = {
  results: [],
  filters: {
    all: false,
    single: false,
    best: false,
    worst: false,
    bestAvg5: false,
  },
  single: null,
}

const results = (state = initialState, action) => {
  switch (action.type) {
    case RESULTS.SET_RESULT:
      return {
        ...state,
        results: [...state.results, action.payload]
      };
    case RESULTS.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(item => item !== state.results[action.payload])
      }
    case FILTERS.SHOW__ALL:
      return {
        ...state,
        filters: {
          all: true,
          single: false,
          best: false,
          worst: false,
          bestAvg5: false,
        }
      }
      case FILTERS.SHOW__BEST:
        return {
          ...state,
          filters: {
            all: false,
            single: false,
            best: true,
            worst: false,
            bestAvg5: false,
          }
        }
        case FILTERS.SHOW__WORST:
          return {
            ...state,
            filters: {
              all: false,
              single: false,
              best: false,
              worst: true,
              bestAvg5: false,
            }
          }
          case FILTERS.SHOW__AVG5:
            return {
              ...state,
              filters: {
                all: false,
                single: false,
                best: false,
                worst: false,
                bestAvg5: true,
              }
            }
            case FILTERS.SHOW__SINGLE:
              return {
                ...state,
                filters: {
                  all: false,
                  single: true,
                  best: false,
                  worst: false,
                  bestAvg5: false,
                },
                single: action.payload
              }
    default:
      return state;
  }
};

export default results;
