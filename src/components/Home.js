import React, { useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';
import Tracks from './Tracks';

const Home = () => {
  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        console.log('logged in?', response.data);
      }).catch(error => {
        console.log('login error', error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const handleLogout = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log('logout error', error);
      });
  };

  return (
    <>
      <h1>Tri Tracker</h1>
      <h2>Register Form</h2>
      <Register />
      <br />
      <h2>Login Form</h2>
      <Login />
      <button type="button" onClick={() => handleLogout()}>Logout</button>
      <br />
      <br />
      <button type="button" onClick={() => checkLoginStatus()}>Check Login Status</button>
      <br />
      <Tracks />
    </>
  );
};

export default Home;
