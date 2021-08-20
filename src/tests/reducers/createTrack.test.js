import { CREATE_TRACK_REQUEST, CREATE_TRACK_SUCCESS, CREATE_TRACK_FAILURE } from "../../redux/actions/actionTypes";
import createTrack, { initialState } from '../../redux/reducers/createTrack';

test('should return initial state', () => {
  expect(createTrack(undefined, {})).toEqual(
    {
      loading: false,
      track: {},
      error: ''
    }
  )
})

test('should handle create request', () => {
  expect(createTrack(initialState, {
    type: CREATE_TRACK_REQUEST
  })).toEqual({
    ...initialState,
    loading: true,
  })
})

test('should handle create success', () => {
  expect(createTrack(initialState, {
    type: CREATE_TRACK_SUCCESS
  })).toEqual({
    ...initialState,
    loading: false,
    track: undefined,
    error: ''
  })
})

test('should handle create track failure', () => {
  expect(createTrack(initialState, {
    type: CREATE_TRACK_FAILURE
  })).toEqual({
    loading: false,
    track: {},
    error: undefined
  })
})
