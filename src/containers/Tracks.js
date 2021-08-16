import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllTracks } from '../redux/thunk/thunkGet';
import Navbar from '../components/Navbar';
import Logout from './Logout';
import TrackCard from '../components/TrackCard';

const Tracks = () => {
  const allTracks = useSelector(state => state.allTracks.tracks);
  let printTracks;

  if (allTracks.length > 0) {
    printTracks = allTracks.map(track => (
      <TrackCard
        key={track.id}
        day={track.day}
        sport={track.sport}
        distance={track.distance}
        movingTime={track.moving_time}
      />
    ));
  }

  console.log(allTracks);

  useEffect(() => {
    fetchAllTracks();
  }, [fetchAllTracks]);

  return (
    <>
      <Logout />
      <h1>Display All Tracks Here</h1>
      { printTracks }
      <Navbar />
    </>
  );
};

export default Tracks;
