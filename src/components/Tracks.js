import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllTracks } from '../redux/thunk/thunkGet';
import dateFormat from '../helpers/dates';
import Navbar from './Navbar';
import Logout from '../containers/Logout';

const Tracks = () => {
  const allTracks = useSelector(state => state.allTracks.tracks);
  let printTracks;

  if (allTracks.length > 0) {
    printTracks = allTracks.map(track => <p key={track.id}>{dateFormat(track.day)}</p>);
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
