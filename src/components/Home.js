import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  console.log('oi');

  return (
    <>
      <h1>Tri Tracker</h1>
      <Link to="/register">REGISTER</Link>
      <Link to="/login">LOGIN</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>This is the home page</h1>
      </div>
    </>
  );
};

export default Home;
