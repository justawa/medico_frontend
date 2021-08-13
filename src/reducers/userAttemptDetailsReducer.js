import {
  TEST_ATTEMPT_DETAILS_SUCCESS,
  TEST_ATTEMPT_DETAILS_COLORING,
  TEST_ATTEMPT_DETAILS_RESET,
  TEST_ATTEMPT_DETAILS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  attemptDetails: [],
  correct: {},
  errorMessage: '',
};

export default function userAttemptDetailsReducer(
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case TEST_ATTEMPT_DETAILS_SUCCESS:
      return {
        ...state,
        correct: action.payload.correct,
        attemptDetails: action.payload.attemptDetails,
        errorMessage: '',
      };
    case TEST_ATTEMPT_DETAILS_COLORING:
      return { ...state, attemptDetails: action.payload };
    case TEST_ATTEMPT_DETAILS_ERROR:
      return { ...state, errorMessage: action.payload };
    case TEST_ATTEMPT_DETAILS_RESET:
      return { ...state, correct: {}, errorMessage: '' };
    default:
      return state;
  }
}
