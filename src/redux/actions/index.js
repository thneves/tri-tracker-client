import * as action from './actionTypes';

export const registerRequest = () => ({ type: action.REGISTER_REQUEST });
export const registerSuccess = user => ({
  type: action.REGISTER_SUCCESS,
  payload: user,
});
export const registerFailure = error => ({ type: action.REGISTER_FAILURE, payload: error });

export const loginRequest = () => ({ type: action.LOGIN_REQUEST });
export const loginSuccess = user => ({ type: action.LOGIN_SUCCESS, payload: user });
export const loginFailure = error => ({ type: action.LOGIN_FAILURE, payload: error });

export const logoutRequest = () => ({ type: action.LOGOUT_REQUEST });
export const logoutSuccess = logout => ({ type: action.LOGOUT_SUCCESS, payload: logout });
export const logoutFailure = error => ({ type: action.LOGOUT_FAILURE, payload: error });

export const isLoggedRequest = () => ({ type: action.IS_LOGGED_REQUEST });
export const isLoggedSuccess = status => ({ type: action.IS_LOGGED_SUCCESS, payload: status });
export const isLoggedFailure = error => ({ type: action.IS_LOGGED_FAILURE, payload: error });

export const allTracksRequest = () => ({ type: action.ALL_TRACKS_REQUEST });
export const allTracksSuccess = tracks => ({ type: action.ALL_TRACKS_SUCCESS, payload: tracks });
export const allTracksFailure = error => ({ type: action.ALL_TRACKS_FAILURE, payload: error });

export const showTrackRequest = () => ({ type: action.SHOW_TRACK_REQUEST });
export const showTrackSuccess = track => ({ type: action.SHOW_TRACK_SUCCESS, payload: track });
export const showTrackFailure = error => ({ type: action.SHOW_TRACK_FAILURE, payload: error });

export const createTrackRequest = () => ({ type: action.CREATE_TRACK_REQUEST });
export const createTrackSuccess = track => ({ type: action.CREATE_TRACK_SUCCESS, payload: track });
export const createTrackFailure = error => ({ type: action.CREATE_TRACK_FAILURE, payload: error });

export const deleteTrackRequest = () => ({ type: action.DELETE_TRACK_REQUEST });
export const deleteTrackSuccess = track => ({ type: action.DELETE_TRACK_SUCCESS, payload: track });
export const deleteTrackFailure = error => ({ type: action.DELETE_TRACK_FAILURE, payload: error });
