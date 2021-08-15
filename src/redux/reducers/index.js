import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import logout from './logout';

const rootReducer = combineReducers({
  register, login, logout,
});

export default rootReducer;
