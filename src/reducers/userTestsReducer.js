import {
  USER_TESTS_LOADING,
  USER_TESTS_ERROR,
  USER_TESTS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  tests: {},
  errorMessage: '',
  loading: false,
};

export default function userTestsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_TESTS_LOADING:
      return { ...state, loading: true };
    case USER_TESTS_SUCCESS:
      // const foundTest = state.tests.find(test => test.id === action.payload.id);
      return {
        ...state,
        tests: { ...state.tests, [action.payload.id]: action.payload.tests },
        errorMessage: '',
        loading: false,
      };
    case USER_TESTS_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
