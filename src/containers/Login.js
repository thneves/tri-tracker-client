import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { postLogin } from '../services/apiPosts';
import { loginRequest, loginFailure, loginSuccess } from '../redux/actions';
import LoginImg from '../assets/images/login.png';
import '../styles/containers/Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const fetchLogin = (email, password) => {
    dispatch(loginRequest());
    const requestLogin = postLogin(email, password);
    requestLogin.then(user => {
      dispatch(loginSuccess(user[0], user[1]));
      history.push('/dashboard');
    })
      .catch(error => {
        dispatch(loginFailure(error.message));
        window.alert(error.message);
      });
  };

  const handleSubmit = e => {
    fetchLogin(loginUser.email, loginUser.password);
    e.preventDefault();
  };

  const handleChange = e => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  return (
    <>
      <Link to="/" className="back-icon"><FontAwesomeIcon icon={faArrowCircleLeft}>Back</FontAwesomeIcon></Link>
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
