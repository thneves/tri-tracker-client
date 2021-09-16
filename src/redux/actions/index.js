import * as action from './actionTypes';

export const registerRequest = () => ({ type: action.REGISTER_REQUEST });
export const registerSuccess = (user, isValid) => ({
  type: action.REGISTER_SUCCESS,
  payload: user,
  valid: isValid,
});
export const registerFailure = error => ({ type: action.REGISTER_FAILURE, payload: error });

export const loginRequest = () => ({ type: action.LOGIN_REQUEST });
export const loginSuccess = (user, isValid) => ({
  type: action.LOGIN_SUCCESS,
  payload: user,
  valid: isValid,
});
export const loginFailure = error => ({ type: action.LOGIN_FAILURE, payload: error });

export const logoutRequest = () => ({ type: action.LOGOUT_REQUEST });
export const logoutSuccess = logout => ({ type: action.LOGOUT_SUCCESS, payload: logout });
export const logoutFailure = error => ({ type: action.LOGOUT_FAILURE, payload: error });

export const allTracksRequest = () => ({ type: action.ALL_TRACKS_REQUEST });
export const allTracksSuccess = tracks => ({ type: action.ALL_TRACKS_SUCCESS, payload: tracks });
export const allTracksFailure = error => ({ type: action.ALL_TRACKS_FAILURE, payload: error });

export const showTrackRequest = () => ({ type: action.SHOW_TRACK_REQUEST });
export const showTrackSuccess = track => ({ type: action.SHOW_TRACK_SUCCESS, payload: track });
export const showTrackFailure = error => ({ type: action.SHOW_TRACK_FAILURE, payload: error });

export const createTrackRequest = () => ({ type: action.CREATE_TRACK_REQUEST });
export const createTrackSuccess = track => ({ type: action.CREATE_TRACK_SUCCESS, payload: track });
export const createTrackFailure = error => ({ type: action.CREATE_TRACK_FAILURE, payload: error });

export const loginReset = () => ({ type: action.LOGIN_RESET });
export const registerReset = () => ({ type: action.REGISTER_RESET });
