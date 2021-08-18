import store from '../store';
import { getLoggedUser, getTracks } from '../requests/apiGet';
import {
  allTracksRequest, allTracksSuccess, allTracksFailure,
  isLoggedRequest, isLoggedSuccess, isLoggedFailure,
} from '../actions';

const fetchAllTracks = () => {
  store.dispatch(allTracksRequest());
  const requestTracks = getTracks();
  requestTracks.then(tracks => {
    store.dispatch(allTracksSuccess(tracks));
  })
    .catch(error => {
      store.dispatch(allTracksFailure(error.message));
    });
};

const fetchLoggedUser = () => {
  store.dispatch(isLoggedRequest());
  const requestLoggedUser = getLoggedUser();
  requestLoggedUser.then(logged_in => { // eslint-disable-line camelcase
    console.log(logged_in);
    store.dispatch(isLoggedSuccess(logged_in));
  })
    .catch(error => {
      store.dispatch(isLoggedFailure(error.message));
    });
};

export { fetchAllTracks, fetchLoggedUser };
