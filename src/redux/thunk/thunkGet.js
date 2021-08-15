import store from '../store';
import { getTracks } from '../requests/apiGet';
import { allTracksRequest, allTracksSuccess, allTracksFailure } from '../actions';

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

const fetchOneTrack = () => console.log('oi');

export { fetchAllTracks, fetchOneTrack };
