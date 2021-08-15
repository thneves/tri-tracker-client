import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import logout from './logout';
import createTrack from './createTrack';

const rootReducer = combineReducers({
  register, login, logout, createTrack,
});

export default rootReducer;
