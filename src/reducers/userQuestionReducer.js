import {
  TEST_QUESTION_LOADING,
  TEST_QUESTION,
  TEST_QUESTION_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  question: {},
  errorMessage: '',
  loading: false,
};

export default function userQuestionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST_QUESTION_LOADING:
      return { ...state, loading: true };
    case TEST_QUESTION:
      return {
        ...state,
        question: action.payload,
        errorMessage: '',
        loading: false,
      };
    case TEST_QUESTION_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
