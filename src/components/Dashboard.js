import React from 'react';
import axios from 'axios';
import Logout from './Logout';
import Navbar from './Navbar';

const Dashboard = () => {
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
        <p>some form here</p>
        <button type="button" onClick={checkLoginStatus}>status</button>
      </div>
      <Navbar />
    </>
  );
};

export default Dashboard;
