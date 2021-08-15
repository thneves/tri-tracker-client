import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllTracks } from '../redux/thunk/thunkGet';
import Navbar from './Navbar';
import Logout from './Logout';

const Tracks = () => {
  useEffect(() => {
    fetchAllTracks();
  }, [fetchAllTracks]);

  const allTracks = useSelector(state => state.allTracks.tracks);
  const printTracks = allTracks.map(track => (
    <div key={track.id}>
      <p>{track.sport}</p>
      <p>{track.day}</p>
    </div>
  ));

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
