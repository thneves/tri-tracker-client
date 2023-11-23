import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { postRegistration } from '../services/apiPosts';
import { registerRequest, registerFailure, registerSuccess } from '../redux/actions/index';
// import { fetchRegistration } from '../redux/thunk/thunkPosts';
import '../styles/containers/Login.scss';

const Register = () => {
  const history = useHistory();
  const [notification, setNotification] = useState('');
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const fetchRegistration = (username, email, password, passwordConfirmation) => {
    dispatch(registerRequest());
    const requestRegister = postRegistration(username, email, password, passwordConfirmation);
    requestRegister.then(user => {
      dispatch(registerSuccess(user[0], user[1]));
      history.push('/dashboard');
    })
      .catch(error => {
        dispatch(registerFailure(error.message));
        setNotification("username or email already taken, or password doesn't match");
      });
  };

  const handleSubmit = e => {
    fetchRegistration(
      newUser.name,
      newUser.email,
      newUser.password,
      newUser.password_confirmation,
    );
    e.preventDefault();
  };

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  useEffect(() => {
    setNotification('');
  }, []);

  return (
    <>
      <Link to="/" className="back-icon"><FontAwesomeIcon icon={faArrowCircleLeft}>Back</FontAwesomeIcon></Link>
      { notification === '' ? '' : <p>{notification}</p>}
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
