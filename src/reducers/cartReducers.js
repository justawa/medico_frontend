import {
  ADD_CART_SUCCESS,
  ADD_CART_ERROR,
  ADD_CART_LOADING,
  CART_RESET,
  REMOVE_FROM_CART,
} from '../actions/types';

const INITIAL_STATE = {
  items: [],
  errorMessage: '',
  loading: false,
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART_LOADING:
      return { ...state, loading: true };
    case ADD_CART_SUCCESS:
      const foundItemInTheCart = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!foundItemInTheCart) {
        return {
          ...state,
          items: [...state.items, action.payload],
          errorMessage: '',
          loading: false,
        };
      }
      return {
        ...state,
        items: [...state.items],
        errorMessage: '',
        loading: false,
      };
    case ADD_CART_ERROR:
      return { ...state, errorMessage: action.payload, loading: false };
    case CART_RESET:
      return {
        items: [],
        errorMessage: '',
        loading: false,
      };
    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: filteredItems,
      };
    default:
      return state;
  }
}
