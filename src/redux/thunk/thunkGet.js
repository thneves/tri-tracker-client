import store from '../store';
import getTracks from '../../services/apiGet';
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

export default fetchAllTracks;
