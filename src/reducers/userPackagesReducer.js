import {
  USER_PACKAGES_LOADING,
  USER_PACKAGES_SUCCESS,
  USER_PACKAGES_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  packages: [],
  errorMessage: '',
  loading: false,
};

export default function userPackagesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_PACKAGES_LOADING:
      return { ...state, loading: true };
    case USER_PACKAGES_SUCCESS:
      return {
        ...state,
        packages: action.payload,
        errorMessage: '',
        loading: false,
      };
    case USER_PACKAGES_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
