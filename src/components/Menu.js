import React from 'react';
import Navbar from './Navbar';
import Logout from './Logout';
import Dashboard from './Dashboard';

const Menu = () => {
  console.log('oi menu');

  return (
    <>
      <h1>Menu with all options logout and navbar</h1>
      <Logout />
      <br />
      <br />
      <br />
      <div>Here I will have:</div>
      <div><Dashboard /></div>
      <div>Track it</div>
      <div>Progress</div>
      <div>More</div>
      <br />
      <br />
      <br />
      <Navbar />
    </>
  );
};

export default Menu;
