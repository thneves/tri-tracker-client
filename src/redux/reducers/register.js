import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/actionTypes";

const initialState = {
  loading: false,
  register: {},
  error: '',
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true}  
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        register: action.payload,
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        register: {},
        error: '',
      }
    default:
      return state;
  }
}

export default register;
