import store from '../store';
import { postLogin, postRegistration } from '../requests/apiPosts';
import {
  registerRequest, registerFailure, registerSuccess,
  loginRequest, loginFailure, loginSuccess,
}
  from '../actions';

const fetchRegistration = (username, email, password, passwordConfirmation) => {
  store.dispatch(registerRequest());
  const requestRegister = postRegistration(username, email, password, passwordConfirmation);
  requestRegister.then(user => {
    store.dispatch(registerSuccess(user));
  })
    .catch(error => {
      console.log(error);
      store.dispatch(registerFailure(error.message));
    });
};

const fetchLogin = (email, password) => {
  store.dispatch(loginRequest());
  const requestLogin = postLogin(email, password);
  requestLogin.then(user => {
    store.dispatch(loginSuccess(user));
  })
    .catch(error => {
      store.dispatch(loginFailure(error.message));
    });
};

export { fetchRegistration, fetchLogin };
