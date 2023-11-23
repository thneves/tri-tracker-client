import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Logout from './Logout';
import TrackCard from '../components/TrackCard';
import '../styles/containers/Tracks.scss';

const Tracks = () => {
  const allTracks = useSelector(state => state.allTracks.tracks);
  const isLogged = useSelector(state => state.login.valid);
  const logRegister = useSelector(state => state.register.valid);
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

  if (!isLogged && !logRegister) {
    return <Redirect to="/" />;
  }


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
