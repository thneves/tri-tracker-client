import React from 'react';
import Navbar from './Navbar';
import Logout from './Logout';

const Tracks = () => {
  console.log('oi tracks');

  return (
    <>
      <Logout />
      <h1>Display All Tracks Here</h1>
      <Navbar />
    </>
  );
};

export default Tracks;
