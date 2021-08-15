import store from '../store';
import { deleteSession } from '../requests/apiDelete';
import { logoutRequest, logoutSuccess, logoutFailure } from '../actions';

const fetchLogout = () => {
  store.dispatch(logoutRequest());
  /* eslint-disable camelcase */
  const requestLogout = deleteSession();
  console.log(requestLogout);
  requestLogout.then(logged_out => {
    store.dispatch(logoutSuccess(logged_out));
  })
    .catch(error => {
      store.dispatch(logoutFailure(error.message));
    });
};

const fetchDeleteTrack = () => console.log('oi');

export { fetchLogout, fetchDeleteTrack };
