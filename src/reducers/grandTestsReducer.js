import {
  HOMEPAGE_GRAND_TESTS_ERROR,
  HOMEPAGE_GRAND_TESTS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  grandTests: [],
  errorMessage: '',
};

export default function userTestsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOMEPAGE_GRAND_TESTS_SUCCESS:
      return {
        ...state,
        tests: action.payload,
        errorMessage: '',
      };
    case HOMEPAGE_GRAND_TESTS_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
