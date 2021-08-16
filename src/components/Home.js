import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Home.scss';
import Running from '../assets/images/animation.gif';

const Home = () => {
  console.log('oi');

  return (
    <>
      <header className="home-header">
        <h1>Tri Tracker</h1>
        <div className="buttons-div">
          <Link className="register-btn home-btn" to="/register">Register</Link>
          <Link className="login-btn home-btn" to="/login">Login</Link>
        </div>
      </header>
      <main>
        <img className="hero-main" src={Running} alt="hero logo" />
        <p className="hero-p">We help you to achieve your goals.</p>
      </main>
    </>
  );
};

export default Home;
