import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { fetchLogout } from '../redux/thunk/thunkDelete';
import '../styles/containers/Logout.scss';

const Logout = ({ text }) => {
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
          {text}
        </h2>
        <button className="logout-btn" type="button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

Logout.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logout;
