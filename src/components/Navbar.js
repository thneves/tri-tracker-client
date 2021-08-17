import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.scss';
import ProgressIcon from '../assets/images/progress.png';
import DashIcon from '../assets/images/dashboard.png';
import TracksIcon from '../assets/images/tracks.png';
import MoreIcon from '../assets/images/more.png';

const Navbar = () => (
  <>
    <div className="navbar">
      <Link className="nav-item" to="/dashboard">
        Dashboard
        <img src={DashIcon} alt="tri icon" />
      </Link>
      <Link className="nav-item" to="/tracks">
        Track It
        <img src={TracksIcon} alt="tracks icon" />
      </Link>
      <Link className="nav-item" to="/progress">
        Stats
        <img src={ProgressIcon} alt="progress icon" />
      </Link>
      <Link className="nav-item" to="/more">
        More
        <img src={MoreIcon} alt="more icon" />
      </Link>
    </div>
  </>
);

export default Navbar;
