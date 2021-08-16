import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllTracks } from '../redux/thunk/thunkGet';
import dateFormat from '../helpers/dates';
import converSec from '../helpers/convertSec';
import Navbar from './Navbar';
import Logout from '../containers/Logout';

const Tracks = () => {
  const allTracks = useSelector(state => state.allTracks.tracks);
  let printTracks;

  if (allTracks.length > 0) {
    printTracks = allTracks.map(track => (
      <div key={track.id}>
        <p>{dateFormat(track.day)}</p>
        <span>{track.sport}</span>
        <span>
          Time:
          {converSec(track.moving_time)}
        </span>
      </div>
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
