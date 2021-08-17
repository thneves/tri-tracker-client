import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { fetchLogout } from '../redux/thunk/thunkDelete';
import '../styles/containers/Logout.scss';

const Logout = ({ username }) => {
  const history = useHistory();

  const handleLogout = () => {
    fetchLogout();
    history.push('/');
  };

  return (
    <header className="logout-header">
      <h1>Tri Tracker</h1>
      <div>
        <h2>
          Greetings,
          {' '}
          {username}
          !
        </h2>
        <button className="logout-btn" type="button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

Logout.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Logout;
