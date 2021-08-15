import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchLogin } from '../redux/thunk/thunkPosts';

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleSubmit = e => {
    fetchLogin(loginUser.email, loginUser.password);
    history.push('/menu');
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
    <div>
      <h1>THIS IS THE LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Your email" value={loginUser.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Passsword" value={loginUser.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
