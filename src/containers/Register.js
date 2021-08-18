import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchRegistration } from '../redux/thunk/thunkPosts';
import '../styles/containers/Login.scss';

const Register = () => {
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = e => {
    fetchRegistration(
      newUser.username,
      newUser.email,
      newUser.password,
      newUser.password_confirmation,
    );
    history.push('/dashboard');
    e.preventDefault();
  };

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  return (
    <>
      <Link to="/" className="back-icon"><FontAwesomeIcon icon={faArrowCircleLeft}>Back</FontAwesomeIcon></Link>
      <div className="login-div">
        <div className="login-triangle" />
        <h2 className="login-header">Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <p className="login-p">
            <input
              className="login-input"
              type="username"
              name="username"
              placeholder="Username"
              value={newUser.username}
              onChange={handleChange}
              required
            />
          </p>
          <p className="login-p">
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Your email"
              value={newUser.email}
              onChange={handleChange}
              required
            />
          </p>
          <p className="login-p">
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Passsword"
              value={newUser.password}
              onChange={handleChange}
              required
            />
          </p>
          <p className="login-p">
            <input
              className="login-input"
              type="password"
              name="password_confirmation"
              placeholder="Passsword Confirmation"
              value={newUser.password_confirmation}
              onChange={handleChange}
              required
            />
          </p>
          <button className="login-btn" type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
