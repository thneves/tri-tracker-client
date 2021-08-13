import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  const handleSubmit = e => {
    axios.post('http://localhost:3001/registrations', {
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    },
    { withCredentials: true }).then(response => {
      console.log('registration response', response);
    }).catch(error => {
      console.log('error', error);
    });

    e.preventDefault();
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
        <input type="username" name="username" placeholder="Username" value={user.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your email" value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Passsword" value={user.password} onChange={handleChange} required />
        <input type="password" name="password_confirmation" placeholder="Passsword Confirmation" value={user.password_confirmation} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
