import {
  USER_TEST_LOADING,
  USER_TEST_ERROR,
  USER_TEST_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  test: {},
  errorMessage: '',
  loading: false,
};

export default function userTestsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_TEST_LOADING:
      return { ...state, loading: true };
    case USER_TEST_SUCCESS:
      return {
        ...state,
        test: action.payload,
        errorMessage: '',
        loading: false,
      };
    case USER_TEST_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
