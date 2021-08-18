import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faSwimmer, faRunning } from '@fortawesome/free-solid-svg-icons';
import { fetchCreateTrack } from '../redux/thunk/thunkPosts';
import { convertMin } from '../helpers/convertSec';
import Logout from './Logout';
import Navbar from '../components/Navbar';
import '../styles/containers/Dashboard.scss';
import Loader from '../components/Loader';

const Dashboard = () => {
  const userId = useSelector(state => state.login.user);
  const [loading, setLoading] = useState(true);
  const [newTrack, setNewTrack] = useState({
    sport: '',
    day: '',
    distance: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleSubmitTrack = e => {
    const movingTime = convertMin(newTrack.hours, newTrack.minutes, newTrack.seconds);
    fetchCreateTrack(
      userId.id,
      newTrack.sport,
      newTrack.day,
      newTrack.distance,
      movingTime,
    );
    e.preventDefault();
    setNewTrack({
      sport: '',
      day: '',
      distance: 0,
      moving_time: 0,
    });
  };

  const handleChange = e => {
    setNewTrack({
      ...newTrack,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Logout text="Greetings!" />
      <div className="dash-div">
        <h2 className="dash-head">Add your last training results</h2>
        <div className="form-div">
          <form className="dash-form" onSubmit={handleSubmitTrack}>
            <label className="form-radios" htmlFor="sport" required>
              <div className="radio-div">
                <FontAwesomeIcon className="sport-icon" icon={faRunning}>Running</FontAwesomeIcon>
                <input className="radio-input" type="radio" name="sport" placeholder="Run" value="running" onChange={handleChange} required />
              </div>
              <div className="radio-div">
                <FontAwesomeIcon className="sport-icon" icon={faBiking}>Cycling</FontAwesomeIcon>
                <input className="radio-input" type="radio" name="sport" placeholder="Sport" value="cycling" onChange={handleChange} required />
              </div>
              <div className="radio-div">
                <FontAwesomeIcon className="sport-icon" icon={faSwimmer}>Swim</FontAwesomeIcon>
                <input className="radio-input" type="radio" name="sport" placeholder="Sport" value="swim" onChange={handleChange} required />
              </div>
            </label>
            <div className="input-labels">
              <label className="label-day" htmlFor="day">
                Date
                <input type="date" name="day" placeholder="Date" value={newTrack.day} onChange={handleChange} required />
              </label>
              <label className="label-distance" htmlFor="distance">
                Distance
                <input type="number" min={-1} name="distance" placeholder="km" value={newTrack.distance} onChange={handleChange} required />
                km
              </label>
              <label className="label-time" htmlFor="moving_time">
                HH:
                <input type="number" min={-1} name="hours" placeholder="h" value={newTrack.hours} onChange={handleChange} required />
                MM:
                <input type="number" min={-1} max={59} name="minutes" placeholder="m" value={newTrack.minutes} onChange={handleChange} required />
                SS:
                <input type="number" min={-1} max={59} name="seconds" placeholder="s" value={newTrack.seconds} onChange={handleChange} required />
              </label>
            </div>
            <button className="track-btn" type="submit">Add Training</button>
          </form>
        </div>

      </div>
      <Navbar />
    </>
  );
};

export default Dashboard;
