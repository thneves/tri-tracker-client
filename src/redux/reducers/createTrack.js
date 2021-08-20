import { CREATE_TRACK_REQUEST, CREATE_TRACK_SUCCESS, CREATE_TRACK_FAILURE } from '../actions/actionTypes';

export const initialState = {
  loading: false,
  track: {},
  error: '',
};

const createTrack = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRACK_REQUEST:
      return { ...state, loading: true };
    case CREATE_TRACK_SUCCESS:
      return {
        ...state,
        loading: false,
        track: action.payload,
        error: '',
      };
    case CREATE_TRACK_FAILURE:
      return {
        ...state,
        loading: false,
        track: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createTrack;
