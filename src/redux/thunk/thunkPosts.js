import store from '../store';
import { postLogin, postRegistration, postTrack } from '../requests/apiPosts';
import {
  registerRequest, registerFailure, registerSuccess,
  loginRequest, loginFailure, loginSuccess,
  createTrackRequest, createTrackSuccess, createTrackFailure,
}
  from '../actions';

const fetchRegistration = (username, email, password, passwordConfirmation) => {
  store.dispatch(registerRequest());
  const requestRegister = postRegistration(username, email, password, passwordConfirmation);
  requestRegister.then(user => {
    store.dispatch(registerSuccess(user));
  })
    .catch(error => {
      store.dispatch(registerFailure(error.message));
    });
};

const fetchLogin = (email, password) => {
  let isValid;
  store.dispatch(loginRequest());
  const requestLogin = postLogin(email, password);
  requestLogin.then(user => {
    store.dispatch(loginSuccess(user[0], user[1]));
    isValid = user[0]; // eslint-disable-line prefer-destructuring
    console.log(user[1]);
  })
    .catch(error => {
      store.dispatch(loginFailure(error.message));
    });
  console.log(isValid);
};

const fetchCreateTrack = (userId, sport, day, distance, movingTime) => {
  store.dispatch(createTrackRequest());
  const requestCreateTrack = postTrack(userId, sport, day, distance, movingTime);
  requestCreateTrack.then(track => {
    store.dispatch(createTrackSuccess(track));
  })
    .catch(error => {
      store.dispatch(createTrackFailure(error.message));
    });
};

export { fetchRegistration, fetchLogin, fetchCreateTrack };
