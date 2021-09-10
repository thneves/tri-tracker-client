import store from '../store';
import { postTrack } from '../../services/apiPosts';
import {
  createTrackRequest, createTrackSuccess, createTrackFailure,
}
  from '../actions';

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

export default fetchCreateTrack;
