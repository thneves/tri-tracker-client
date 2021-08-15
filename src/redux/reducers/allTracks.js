import { ALL_TRACKS_REQUEST, ALL_TRACKS_SUCCESS, ALL_TRACKS_FAILURE } from '../actions/actionTypes';

const initialState = {
  loading: false,
  tracks: {},
  error: '',
};

const allTracks = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TRACKS_REQUEST:
      return { ...state, loading: true };
    case ALL_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tracks: action.payload,
        error: '',
      };
    case ALL_TRACKS_FAILURE:
      return {
        ...state,
        loading: false,
        tracks: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default allTracks;
