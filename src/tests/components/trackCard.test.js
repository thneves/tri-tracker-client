import React from 'react';
import renderer from 'react-test-renderer';
import TrackCard from '../../components/TrackCard';

const track = {
  sport: 'running',
  day: '10-10-2022',
  distance: 10,
  moving_time: 2400,
};

it('Should render the TrackCard component', () => {
  const card = renderer
    .create(
      <TrackCard
        sport={track.sport}
        day={track.day}
        distance={track.distance}
        movingTime={track.moving_time}
      />,
    ).toJSON();
  expect(card).toMatchSnapshot();
});
