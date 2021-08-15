import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { fetchCreateTrack } from '../redux/thunk/thunkPosts';
import Logout from './Logout';
import Navbar from './Navbar';

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
    e.preventDefault();
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

  console.log('oi dashboard');
  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        console.log('logged in?', response.data);
      }).catch(error => {
        console.log('login error', error);
      });
  };

  return (
    <>
      <Logout />
      <div>
        <h2>Add your last training results</h2>
        <h2>SWIM</h2>
        <h2>CYCLING</h2>
        <h3>RUNNING</h3>
        <form onSubmit={handleSubmitTrack}>
          <input type="text" name="sport" placeholder="Sport" value={newTrack.sport} onChange={handleChange} required />
          <input type="date" name="day" placeholder="Date" value={newTrack.day} onChange={handleChange} required />
          <input type="number" name="distance" placeholder="Distance" value={newTrack.distance} onChange={handleChange} required />
          <input type="number" name="moving_time" placeholder="Moving Time" value={newTrack.moving_time} onChange={handleChange} required />
          <button type="submit"> Create Track</button>
        </form>
        <button type="button" onClick={checkLoginStatus}>status</button>
      </div>
      <Navbar />
    </>
  );
};

export default Dashboard;
