import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import logout from './logout';
import createTrack from './createTrack';
import allTracks from './allTracks';
import isLogged from './isLogged';

const rootReducer = combineReducers({
  register, login, logout, createTrack, allTracks, isLogged,
});

export default rootReducer;
