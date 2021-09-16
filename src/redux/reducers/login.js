import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  user: {},
  valid: false,
  error: '',
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        valid: action.valid,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        valid: false,
        error: action.payload,
      };
    case LOGIN_RESET:
      return {
        ...state,
        loading: false,
        user: {},
        valid: false,
        error: '',
      };
    default:
      return state;
  }
};

export default login;
