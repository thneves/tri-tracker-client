import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions/actionTypes';

const initialState = {
  loading: false,
  logged_out: false,
  error: '',
};

const logout = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return { ...state, loading: true };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        logged_out: action.payload,
        error: '',
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        logged_out: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default logout;
