import React, { useState } from 'react';
import { fetchRegistration } from '../redux/thunk/thunkPosts';

const Register = () => {
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

    e.preventDefault();
  };

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
    console.log(newUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Passsword"
          value={newUser.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Passsword Confirmation"
          value={newUser.password_confirmation}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
