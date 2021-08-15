import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/tracks">Track It</Link>
      <Link to="/progress">Progress</Link>
      <Link to="/more">More</Link>
    </div>
  </>
);

export default Navbar;
