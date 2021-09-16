import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER_RESET,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  user: {},
  valid: false,
  error: '',
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        valid: action.valid,
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        valid: false,
        error: action.payload,
      };
    case REGISTER_RESET:
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

export default register;
