import React from 'react';
import { useHistory } from 'react-router-dom';
import { fetchLogout } from '../redux/thunk/thunkDelete';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    fetchLogout();
    history.push('/');
  };

  return (
    <div>
      <h1>Tri Tracker</h1>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
