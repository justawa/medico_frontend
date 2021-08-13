import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userPackagesReducer from './userPackagesReducer';
import userTestsReducer from './userTestsReducer';
import userTestReducer from './userTestReducer';
import userQuestionsReducer from './userQuestionsReducer';
import userQuestionReducer from './userQuestionReducer';
import userAttemptReducer from './userAttemptReducer';
import userAttemptDetailsReducer from './userAttemptDetailsReducer';
import userTestResultReducer from './userTestResultReducer';
import cartReducer from './cartReducers';
import grandTestsReducer from './grandTestsReducer';

export default combineReducers({
  auth: authReducer,
  userPackages: userPackagesReducer,
  userTests: userTestsReducer,
  userTest: userTestReducer,
  userQuestions: userQuestionsReducer,
  userQuestion: userQuestionReducer,
  userAttempt: userAttemptReducer,
  userAttemptDetails: userAttemptDetailsReducer,
  userTestResult: userTestResultReducer,
  cart: cartReducer,
  grandTests: grandTestsReducer,
});
