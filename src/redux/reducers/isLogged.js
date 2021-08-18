import { IS_LOGGED_REQUEST, IS_LOGGED_SUCCESS, IS_LOGGED_FAILURE } from '../actions/actionTypes';

const initialState = {
  loading: false,
  isLogged: {},
  error: '',
};

const isLogged = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_REQUEST:
      return { ...state, loading: true };
    case IS_LOGGED_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: action.payload,
        error: '',
      };
    case IS_LOGGED_FAILURE:
      return {
        ...state,
        loading: false,
        isLogged: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default isLogged;
