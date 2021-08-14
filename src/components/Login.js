import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    registrationErrors: '',
  });

  // const history = useHistory();

  const handleSubmit = e => {
    axios.post('http://localhost:3001/sessions', {
      user: {
        email: user.email,
        password: user.password,
      },
    },
    { withCredentials: true }).then(response => {
      console.log('login response', response);
    }).catch(error => {
      console.log('error', error);
    });

    e.preventDefault();
    // history.push('/');
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Your email" value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Passsword" value={user.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
