import configureStore from 'redux-mock-store';
import {
  ALL_TRACKS_REQUEST, ALL_TRACKS_SUCCESS, ALL_TRACKS_FAILURE,
  CREATE_TRACK_REQUEST, CREATE_TRACK_SUCCESS, CREATE_TRACK_FAILURE,
} from '../../redux/actions/actionTypes';
import {
  allTracksRequest, allTracksSuccess, allTracksFailure,
  createTrackRequest, createTrackSuccess, createTrackFailure,
} from '../../redux/actions';
import { initialState } from '../../redux/reducers/allTracks';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('All tracks actions', () => {
  it('should handle the tracks request action', () => {
    const store = mockStore(initialState);
    store.dispatch(allTracksRequest());

    const actions = store.getActions();
    const expectedPayload = { type: ALL_TRACKS_REQUEST };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should handle tracks success request action', () => {
    const store = mockStore(initialState);
    store.dispatch(allTracksSuccess());

    const actions = store.getActions();
    const expectedPayload = { type: ALL_TRACKS_SUCCESS };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should handle tracks failure request action', () => {
    const store = mockStore(initialState);
    store.dispatch(allTracksFailure());

    const actions = store.getActions();
    const expectedPayload = { type: ALL_TRACKS_FAILURE };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('create new track actions', () => {
  const createTrackState = {
    loading: false,
    track: {},
    error: '',
  };

  it('should handle create track request action', () => {
    const store = mockStore(createTrackState);
    store.dispatch(createTrackRequest());

    const actions = store.getActions();
    const expectedPayload = { type: CREATE_TRACK_REQUEST };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should handle create track request sucess action', () => {
    const store = mockStore(createTrackState);
    store.dispatch(createTrackSuccess());

    const actions = store.getActions();
    const expectedPayload = { type: CREATE_TRACK_SUCCESS };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should handle create track request failure action', () => {
    const store = mockStore(createTrackState);
    store.dispatch(createTrackFailure());

    const actions = store.getActions();
    const expectedPayload = { type: CREATE_TRACK_FAILURE };
    expect(actions).toEqual([expectedPayload]);
  });
});
