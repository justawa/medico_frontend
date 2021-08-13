import {
  AUTH_USER,
  AUTH_ERROR,
  USER_QUESTIONS,
  TEST_QUESTION,
  TEST_QUESTION_ERROR,
  USER_PACKAGES_ERROR,
  USER_TESTS_ERROR,
  USER_TESTS_SUCCESS,
  USER_PACKAGES_SUCCESS,
  TEST_ATTEMPT_SUCCESS,
  TEST_ATTEMPT_ERROR,
  TEST_ATTEMPT_DETAILS_RESET,
  TEST_ATTEMPT_DETAILS_SUCCESS,
  TEST_ATTEMPT_DETAILS_ERROR,
  USER_QUESTIONS_INCREASE_UPDATE,
  USER_QUESTIONS_DECREASE_UPDATE,
  TEST_ATTEMPT_UPDATE_ERROR,
  TEST_ATTEMPT_UPDATE_SUCCESS,
  TEST_RESULT_SUCCESS,
  TEST_RESULT_ERROR,
  TEST_QUESTION_BOOKMARK_ERROR,
  TEST_QUESTION_BOOKMARK_SUCCESS,
  TEST_ATTEMPT_DETAILS_COLORING,
  ADD_CART_SUCCESS,
  ADD_CART_ERROR,
  ADD_CART_LOADING,
  USER_SUPPORT_LOADING,
  USER_SUPPORT_ERROR,
  USER_SUPPORT_SUCCESS,
  CART_RESET,
  REMOVE_FROM_CART,
  USER_PACKAGES_LOADING,
  TEST_QUESTION_LOADING,
  USER_TEST_SUCCESS,
  HOMEPAGE_GRAND_TESTS_SUCCESS,
  HOMEPAGE_GRAND_TESTS_ERROR,
  USER_TESTS_LOADING,
} from './types';
import medico from '../api/medico';

export const registerUser =
  (formProps, redirect, isLoading) => async (dispatch) => {
    try {
      const response = await medico.post('/register', formProps);
      const authUser = { token: response.data.token, user: response.data.user };
      dispatch({ type: AUTH_USER, payload: authUser });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      redirect();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: e.response.data.error });
      isLoading();
    }
  };

export const loginUser =
  (formProps, redirect, isLoading) => async (dispatch) => {
    try {
      const response = await medico.post('/login', formProps);
      const authUser = { token: response.data.token, user: response.data.user };
      dispatch({ type: AUTH_USER, payload: authUser });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      redirect();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid Email or Password' });
      isLoading();
    }
  };

export const logoutUser = (token, callback) => async (dispatch) => {
  //const response = await store.post(`/logout?token=${token}`);

  dispatch({ type: AUTH_USER, payload: '' });
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  callback();
};

export const getUserPackages = (token, id) => async (dispatch) => {
  try {
    dispatch({ type: USER_PACKAGES_LOADING });
    const response = await medico.get(`/student/${id}/packages`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: USER_PACKAGES_SUCCESS, payload: response.data.packages });
  } catch (e) {
    dispatch({ type: USER_PACKAGES_ERROR, payload: 'package error' });
    // isLoading();
  }
};

// Support and Help 
// export const helpSupport = (token, id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ADD_CART_LOADING,
//     });
//     const response = await medico.get(`support/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     dispatch({
//       type: ADD_CART_SUCCESS,
//       payload: response.data.help,
//     });
//     localStorage.setItem('support', JSON.stringify(getState().support));
//   } catch (e) {
//     dispatch({
//       type: ADD_CART_ERROR,
//       payload: e.response.data.error,
//     });
//   }
// };

export const getPackageTests = (token, id) => async (dispatch) => {
  try {
    dispatch({ type: USER_TESTS_LOADING });
    const response = await medico.get(`/student/packages/${id}/tests`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: USER_TESTS_SUCCESS,
      payload: { tests: response.data.tests, id },
    });
  } catch (e) {
    dispatch({ type: USER_TESTS_ERROR, payload: e.response.data.error });
    // isLoading();
  }
};

export const userTest = (test) => async (dispatch) => {
  dispatch({ type: USER_TEST_SUCCESS, payload: test });
};

export const attemptTest = (token, id) => async (dispatch) => {
  try {
    const response = await medico.get(`/student/test/${id}/attempt`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: TEST_ATTEMPT_SUCCESS, payload: response.data.attempt });
    dispatch({ type: USER_QUESTIONS, payload: response.data });
    dispatch({
      type: TEST_ATTEMPT_DETAILS_COLORING,
      payload: response.data.attemptDetails,
    });
  } catch (e) {
    dispatch({ type: TEST_ATTEMPT_ERROR, payload: e.response.data.error });
    // isLoading();
  }
};

export const increaseCurrentQuestion = () => (dispatch) => {
  dispatch({ type: USER_QUESTIONS_INCREASE_UPDATE });
};

export const decreaseCurrentQuestion = () => (dispatch) => {
  dispatch({ type: USER_QUESTIONS_DECREASE_UPDATE });
  // dispatch({ type: TEST_ATTEMPT_DETAILS_RESET });
};

export const resetAttemptDetails = () => (dispatch) => {
  dispatch({ type: TEST_ATTEMPT_DETAILS_RESET });
};

export const getQuestionById = (token, id) => async (dispatch) => {
  try {
    dispatch({ type: TEST_QUESTION_LOADING });
    const response = await medico.get(`/student/questions/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: TEST_QUESTION, payload: response.data.question });
  } catch (e) {
    dispatch({ type: TEST_QUESTION_ERROR, payload: e.response.data.error });
    // isLoading();
  }
};

export const storeAttemptDetails =
  (token, attempt_id, question_id, option_id) => async (dispatch) => {
    try {
      const response = await medico.post(
        `/student/attempt`,
        {
          attempt_id,
          question_id,
          option_id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({
        type: TEST_ATTEMPT_DETAILS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TEST_ATTEMPT_DETAILS_ERROR,
        payload: e.response.data.error,
      });
    }
  };

export const fetchCorrectResult =
  (token, attempt_id, question_id) => async (dispatch) => {
    try {
      const response = await medico.post(
        `/student/detail/solution`,
        {
          attempt_id,
          question_id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({
        type: TEST_ATTEMPT_DETAILS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TEST_ATTEMPT_DETAILS_ERROR,
        payload: e.response.data.error,
      });
    }
  };

export const setBookmarkStatus =
  (token, attempt_id, question_id) => async (dispatch) => {
    try {
      const response = await medico.post(
        `/student/attempt-details/bookmark`,
        {
          attempt_id,
          question_id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({ type: TEST_QUESTION_BOOKMARK_SUCCESS });
      dispatch({
        type: TEST_ATTEMPT_DETAILS_COLORING,
        payload: response.data.attemptDetails,
      });
    } catch (e) {
      dispatch({
        type: TEST_QUESTION_BOOKMARK_ERROR,
        payload: 'error while setting bookmark status',
      });
    }
  };

export const updateAttempt = (token, id) => async (dispatch) => {
  try {
    const response = await medico.put(
      `/student/attempt/${id}/update`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch({
      type: TEST_ATTEMPT_UPDATE_SUCCESS,
      payload: {},
    });
  } catch (e) {
    dispatch({
      type: TEST_ATTEMPT_UPDATE_ERROR,
      payload: e.response.data.error,
    });
  }
};

export const getTestResult = (token, id) => async (dispatch) => {
  try {
    const response = await medico.get(`/student/test/${id}/result`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('result', response);
    dispatch({
      type: TEST_RESULT_SUCCESS,
      payload: response.data.result,
    });
  } catch (e) {
    dispatch({
      type: TEST_RESULT_ERROR,
      payload: 'Some error',
    });
  }
};

export const addItemToCart = (token, id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_CART_LOADING,
    });
    const response = await medico.get(`package/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: ADD_CART_SUCCESS,
      payload: response.data.package,
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart));
  } catch (e) {
    dispatch({
      type: ADD_CART_ERROR,
      payload: e.response.data.error,
    });
  }
};

export const removeItemFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
  localStorage.setItem('cart', JSON.stringify(getState().cart));
};

export const buyUserPackage = (token, items) => async (dispatch) => {
  try {
    const response = await medico.post(
      `/student/package/buy`,
      {
        items: JSON.stringify(items),
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch({ type: CART_RESET });
    localStorage.removeItem('cart');
  } catch (e) {
    dispatch({ type: USER_PACKAGES_ERROR, payload: e.response.data.error });
  }
};

export const getGrandTests = () => async (dispatch) => {
  try {
    const response = await medico.get(`grand-tests`);
    dispatch({
      type: HOMEPAGE_GRAND_TESTS_SUCCESS,
      payload: response.data.grand_tests,
    });
  } catch (e) {
    dispatch({
      type: HOMEPAGE_GRAND_TESTS_ERROR,
      payload: e.response.data.error,
    });
  }
};
