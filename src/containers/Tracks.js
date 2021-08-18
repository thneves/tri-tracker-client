import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllTracks } from '../redux/thunk/thunkGet';
import Navbar from '../components/Navbar';
import Logout from './Logout';
import TrackCard from '../components/TrackCard';
import '../styles/containers/Tracks.scss';

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

  useEffect(() => {
    fetchAllTracks();
  }, [fetchAllTracks]);

  return (
    <div className="container">
      <Logout text="Well done!" />
      <h3>All Trainings</h3>
      <div className="tracks-div">
        { printTracks }
      </div>
      <Navbar />
    </div>
  );
};

export default Tracks;
