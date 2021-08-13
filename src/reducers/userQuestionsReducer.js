import {
  USER_QUESTIONS,
  USER_QUESTIONS_INCREASE_UPDATE,
  USER_QUESTIONS_ERROR,
  USER_QUESTIONS_DECREASE_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
  questions: [],
  currentQuestion: '',
  errorMessage: '',
};

export default function userQuestionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
        currentQuestion: action.payload.currentQuestion,
        errorMessage: '',
      };
    case USER_QUESTIONS_INCREASE_UPDATE:
      let currentQuestion = '';
      if (state.currentQuestion === '') {
        currentQuestion = 0;
      } else {
        currentQuestion =
          state.questions.length - 1 === state.currentQuestion
            ? state.currentQuestion
            : state.currentQuestion + 1;
      }
      return { ...state, currentQuestion: Number(currentQuestion) };
    case USER_QUESTIONS_DECREASE_UPDATE:
      let currentSetQuestion = '';
      if (state.currentQuestion !== '') {
        currentSetQuestion = state.currentQuestion - 1;
      }
      return { ...state, currentQuestion: Number(currentSetQuestion) };
    case USER_QUESTIONS_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
