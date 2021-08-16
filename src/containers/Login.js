import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchLogin } from '../redux/thunk/thunkPosts';
import LoginImg from '../assets/images/login.png';
import '../styles/containers/Login.scss';

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleSubmit = e => {
    fetchLogin(loginUser.email, loginUser.password);
    history.push('/dashboard');
    e.preventDefault();
  };

  const handleChange = e => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
    console.log(loginUser);
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
