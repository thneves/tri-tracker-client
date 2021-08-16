import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faSwimmer, faRunning } from '@fortawesome/free-solid-svg-icons';
import { fetchCreateTrack } from '../redux/thunk/thunkPosts';
import Logout from './Logout';
import Navbar from '../components/Navbar';
import '../styles/containers/Dashboard.scss';

const Dashboard = () => {
  const userId = useSelector(state => state.login.user.id);
  console.log(userId);
  const [newTrack, setNewTrack] = useState({
    sport: '',
    day: '',
    distance: 0,
    moving_time: 0,
  });

  const handleChange = e => {
    setNewTrack({
      ...newTrack,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
    console.log(newTrack);
  };

  const handleSubmitTrack = e => {
    fetchCreateTrack(
      newTrack.userId,
      newTrack.sport,
      newTrack.day,
      newTrack.distance,
      newTrack.moving_time,
    );
    e.preventDefault();
  };

  return (
    <>
      <Logout />
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
                <input type="number" min={0} name="distance" placeholder="km" value={newTrack.distance} onChange={handleChange} required />
                km
              </label>
              <label className="label-time" htmlFor="moving_time">
                Moving Time
                <input type="number" min={0} name="moving_time" placeholder="Moving Time" value={newTrack.moving_time} onChange={handleChange} required />
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
