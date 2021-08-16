import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="navbar">
      <Link className="nav-item" to="/dashboard">Dashboard</Link>
      <Link className="nav-item" to="/tracks">Track It</Link>
      <Link className="nav-item" to="/progress">Progress</Link>
      <Link className="nav-item" to="/more">More</Link>
    </div>
  </>
);

export default Navbar;
