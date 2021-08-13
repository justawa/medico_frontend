import { TEST_RESULT_SUCCESS, TEST_RESULT_ERROR } from '../actions/types';

const INITIAL_STATE = {
  result: [],
  errorMessage: '',
};

export default function userQuestionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST_RESULT_SUCCESS:
      return { ...state, result: action.payload, errorMessage: '' };
    case TEST_RESULT_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
