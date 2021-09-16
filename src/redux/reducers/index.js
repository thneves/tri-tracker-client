import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import logout from './logout';
import createTrack from './createTrack';
import allTracks from './allTracks';

const rootReducer = combineReducers({
  register, login, logout, createTrack, allTracks,
});

export default rootReducer;
