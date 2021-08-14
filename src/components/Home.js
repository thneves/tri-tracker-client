import React from 'react';
import Login from './Login';
import Register from './Register';

const Home = () => {
  console.log('oi');

  return (
    <>
      <h1>Tri Tracker</h1>
      <Register />
      <Login />
    </>
  );
};

export default Home;
