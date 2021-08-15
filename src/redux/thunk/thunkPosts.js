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
