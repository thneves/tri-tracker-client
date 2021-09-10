import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
// import { postLogin } from '../services/apiPosts';
import { loginRequest, loginFailure, loginSuccess } from '../redux/actions';
import LoginImg from '../assets/images/login.png';
import '../styles/containers/Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [notification, setNotification] = useState('');
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const postLogin = async (email, password) => {
    const response = await axios.post('https://tri-tracker.herokuapp.com/sessions', {
      user: {
        email,
        password,
      },
    }, { withCredentials: true });

    if (response.data.status === 'created') {
      dispatch(loginSuccess(response.data.user, response.data.logged_in));
      history.push('/dashboard');
    } else {
      dispatch(loginFailure(response.data.message));
      setNotification(response.data.message);
    }
  };

  const handleSubmit = e => {
    dispatch(loginRequest());
    console.log('here');
    postLogin(loginUser.email, loginUser.password);
    console.log('after');
    e.preventDefault();
  };

  const handleChange = e => {
    setLoginUser({
      ...loginUser,
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
      { notification === '' ? '' : <p className="message-error">{notification}</p>}
      <div className="login-div">
        <div className="login-triangle" />
        <h2 className="login-header">Log In</h2>
        <form className="form" onSubmit={handleSubmit}>
          <p className="login-p"><input className="login-input" type="email" name="email" placeholder="Email" value={loginUser.email} onChange={handleChange} required /></p>
          <p className="login-p"><input className="login-input" type="password" name="password" placeholder="Passsword" value={loginUser.password} onChange={handleChange} required /></p>
          <button className="login-btn" type="submit">Start</button>
        </form>
      </div>
      <img className="login-img" src={LoginImg} alt="rise" />
    </>
  );
};

export default Login;
