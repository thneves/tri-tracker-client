import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/actionTypes';

const initialState = {
  loading: false,
  user: {},
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
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default register;
