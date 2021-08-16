import React from 'react';
import { useHistory } from 'react-router-dom';
import { fetchLogout } from '../redux/thunk/thunkDelete';
import '../styles/containers/Logout.scss';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    fetchLogout();
    history.push('/');
  };

  return (
    <header className="logout-header">
      <h1>Tri Tracker</h1>
      <button className="logout-btn" type="button" onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Logout;
