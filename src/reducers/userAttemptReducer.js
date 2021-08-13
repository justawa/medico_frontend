import { TEST_ATTEMPT_SUCCESS, TEST_ATTEMPT_ERROR } from '../actions/types';

const INITIAL_STATE = {
  attempt: {},
  errorMessage: '',
};

export default function userAttemptReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST_ATTEMPT_SUCCESS:
      return { ...state, attempt: action.payload, errorMessage: '' };
    case TEST_ATTEMPT_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
