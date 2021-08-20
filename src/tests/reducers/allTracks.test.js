import { ALL_TRACKS_FAILURE, ALL_TRACKS_REQUEST, ALL_TRACKS_SUCCESS } from '../../redux/actions/actionTypes';
import allTracks, { initialState } from '../../redux/reducers/allTracks';

test('should return initial state', () => {
  expect(allTracks(undefined, {})).toEqual(
    {
      loading: false,
      tracks: {},
      error: '',
    },
  );
});

test('should handle all tracks request', () => {
  expect(allTracks(initialState, {
    type: ALL_TRACKS_REQUEST,
  })).toEqual({
    loading: true,
    tracks: {},
    error: '',
  });
});

test('should handle succesful request', () => {
  expect(allTracks(initialState, {
    type: ALL_TRACKS_SUCCESS,
  })).toEqual({
    loading: false,
    tracks: undefined,
    error: '',
  });
});

test('should handle failure request', () => {
  expect(allTracks(initialState, {
    type: ALL_TRACKS_FAILURE,
  })).toEqual({
    loading: false,
    tracks: {},
    error: undefined,
  });
});
